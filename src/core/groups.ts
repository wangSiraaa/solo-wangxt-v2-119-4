/**
 * 面组（OBJ 的 o / g）过滤检查视图 —— 纯函数核心。
 *
 * 关键约定（对应需求）：
 * - 过滤只是【视图】：这里只构造三角形掩码与范围汇总，绝不删面、不改
 *   UV / 接缝，也不参与导出（导出仍用完整 MeshData）。
 * - 逐面（逐三角）的指标（翻转、退化、重叠、面积/角度）按组内三角形
 *   统计；
 * - 拓扑（边分类、UV 岛连通、镜像岛、岛间重叠）始终按【整网格】计算，
 *   复用 analyzeMesh 的全量结果，组范围只决定“哪些岛/边被触及/计数”。
 *   因此一个岛跨多个组时，岛划分与整网格诊断完全一致。
 */
import type { MeshData, MeshStats } from './types';

export interface MeshGroup {
  name: string;
  faces: number;
  tris: number;
}

/** 按解析顺序列出全部面组（同名 o/g 块合并为一个组）。 */
export function listGroups(mesh: MeshData): MeshGroup[] {
  const map = new Map<string, MeshGroup>();
  for (const f of mesh.faces) {
    let g = map.get(f.group);
    if (!g) {
      g = { name: f.group, faces: 0, tris: 0 };
      map.set(f.group, g);
    }
    g.faces++;
  }
  for (const t of mesh.triangles) {
    map.get(mesh.faces[t.faceId].group)!.tris++;
  }
  return [...map.values()];
}

/**
 * 三角形“是否属于当前检查范围”掩码。
 * group === null 表示【全部】：全部为 1，汇总会与整网格诊断逐项相同。
 */
export function triActiveMask(mesh: MeshData, group: string | null): Uint8Array {
  const mask = new Uint8Array(mesh.triangles.length);
  if (group === null) {
    mask.fill(1);
    return mask;
  }
  for (const t of mesh.triangles) {
    if (mesh.faces[t.faceId].group === group) mask[t.id] = 1;
  }
  return mask;
}

export interface ScopeSummary {
  /** null = 全部面组。 */
  group: string | null;
  faces: number;
  tris: number;
  deg3: number;
  degUv: number;
  flipped: number;
  overlap: number;
  minRatio: number | null;
  maxRatio: number | null;
  maxAngle: number | null;
  /** 至少有一条邻接三角属于本范围的边（分类仍按整网格拓扑）。 */
  boundary: number;
  seam: number;
  nonManifold: number;
  /** 与本范围有交集的 UV 岛数（岛按整网格连通计算）。 */
  islands: number;
  mirroredIslands: number;
  /** 被本范围触及、但横跨多个面组的岛数 —— 界面需说明统计口径。 */
  spanningIslands: number;
  /** 异常面集合（已限本范围），供“定位”按钮选择。 */
  flippedFaces: Set<number>;
  overlapFaces: Set<number>;
  degenerateFaces: Set<number>;
}

/**
 * 计算某个面组范围（或全部）的检查汇总。
 *
 * group === null 时遍历的是完整三角形/边/岛集合，结果必须与
 * analyzeMesh + StatsPanel 原有的整网格诊断逐项一致 —— 全部/单组走
 * 同一条代码路径，“恢复全部”天然回到原诊断。
 */
export function summarizeScope(
  mesh: MeshData,
  stats: MeshStats,
  group: string | null,
): ScopeSummary {
  const n = mesh.triangles.length;
  const active = triActiveMask(mesh, group);

  let faces = 0;
  for (const f of mesh.faces) {
    if (group === null || f.group === group) faces++;
  }

  // 三角形 -> 岛；每个岛涉及哪些面组（用于跨组岛提示）。
  const islandOfTri = new Int32Array(n).fill(-1);
  stats.islands.forEach((isl) => {
    for (const tid of isl.triIds) islandOfTri[tid] = isl.id;
  });
  const islandGroups: Set<string>[] = stats.islands.map(() => new Set());
  for (const t of mesh.triangles) {
    const isl = islandOfTri[t.id];
    if (isl >= 0) islandGroups[isl].add(mesh.faces[t.faceId].group);
  }

  let tris = 0;
  let deg3 = 0;
  let degUv = 0;
  let flipped = 0;
  let overlap = 0;
  let minRatio = Infinity;
  let maxRatio = -Infinity;
  let maxAngle = -Infinity;
  const flippedFaces = new Set<number>();
  const overlapFaces = new Set<number>();
  const degenerateFaces = new Set<number>();

  for (let i = 0; i < n; i++) {
    if (!active[i]) continue;
    tris++;
    const m = stats.metrics[i];
    const faceId = mesh.triangles[i].faceId;
    if (m.degenerate3d) { deg3++; degenerateFaces.add(faceId); }
    if (m.degenerateUv) { degUv++; degenerateFaces.add(faceId); }
    if (m.flipped) { flipped++; flippedFaces.add(faceId); }
    if (stats.overlap[i]) { overlap++; overlapFaces.add(faceId); }
    if (m.areaRatio !== null) {
      minRatio = Math.min(minRatio, m.areaRatio);
      maxRatio = Math.max(maxRatio, m.areaRatio);
    }
    if (m.angleDistortion !== null) maxAngle = Math.max(maxAngle, m.angleDistortion);
  }

  // 岛：与本范围有交集即计入；镜像/跨组是整岛属性，按整网格结论。
  let islands = 0;
  let mirroredIslands = 0;
  let spanningIslands = 0;
  stats.islands.forEach((isl, id) => {
    const touched = isl.triIds.some((tid) => active[tid]);
    if (!touched) return;
    islands++;
    if (isl.mirrored) mirroredIslands++;
    if (islandGroups[id].size > 1) spanningIslands++;
  });

  // 边：分类（边界/接缝/非流形）用整网格结果；只要有一条邻接三角属于
  // 本范围，该边就在组内视图计数。
  let boundary = 0;
  let seam = 0;
  let nonManifold = 0;
  for (const e of stats.edges) {
    if (!e.occurrences.some((o) => active[o.tri])) continue;
    if (e.nonManifold) nonManifold++;
    else if (e.boundary) boundary++;
    if (e.seam) seam++;
  }

  return {
    group,
    faces,
    tris,
    deg3,
    degUv,
    flipped,
    overlap,
    minRatio: minRatio === Infinity ? null : minRatio,
    maxRatio: maxRatio === -Infinity ? null : maxRatio,
    maxAngle: maxAngle === -Infinity ? null : maxAngle,
    boundary,
    seam,
    nonManifold,
    islands,
    mirroredIslands,
    spanningIslands,
    flippedFaces,
    overlapFaces,
    degenerateFaces,
  };
}
