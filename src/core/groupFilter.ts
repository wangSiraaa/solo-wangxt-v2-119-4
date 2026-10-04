/**
 * 按 OBJ 面组（o / g）过滤的“检查视图”支持。
 *
 * 关键约束（对应需求）：
 * - 这里的一切计算都是**只读视图层聚合**：不删面、不改 UV、不改接缝、
 *   不触碰导出内容；MeshData / MeshStats 永远不被修改。
 * - 三角形级指标（翻转、重叠、退化、比率、角度）直接按“组内三角形”
 *   重新汇总；比率仍沿用整网格的中位归一尺度，跨组可比较。
 * - 岛拓扑（连通性 / 镜像 / 重叠）始终来自整网格的 MeshStats：一个岛
 *   若同时落在多个组，仍算作同一个岛，只是额外标注“跨组岛”。
 * - 边分类（边界 / 接缝 / 非流形）同样按整网格拓扑判定；只要边的任一
 *   出现侧属于本组即计入本组汇总。
 */
import type { MeshData, MeshStats } from './types';

export interface GroupInfo {
  name: string;
  faceIds: number[];
  triIds: number[];
}

/** 按组名在 OBJ 中首次出现的顺序列出全部面组。 */
export function buildGroups(mesh: MeshData): GroupInfo[] {
  const byName = new Map<string, GroupInfo>();
  for (const f of mesh.faces) {
    let g = byName.get(f.group);
    if (!g) {
      g = { name: f.group, faceIds: [], triIds: [] };
      byName.set(f.group, g);
    }
    g.faceIds.push(f.id);
  }
  for (const t of mesh.triangles) {
    byName.get(mesh.faces[t.faceId].group)!.triIds.push(t.id);
  }
  return [...byName.values()];
}

/**
 * 三角形活动掩码：null 表示“全部”（不淡化任何三角形）。
 * 每帧渲染只是乘以该掩码，几何本身保持完整。
 */
export function triActiveMask(mesh: MeshData, group: string | null): Uint8Array | null {
  if (group === null) return null;
  const mask = new Uint8Array(mesh.triangles.length);
  for (const t of mesh.triangles) {
    if (mesh.faces[t.faceId].group === group) mask[t.id] = 1;
  }
  return mask;
}

export interface GroupView {
  name: string;
  faceCount: number;
  triCount: number;
  /* —— 以下均只统计“组内三角形”；岛拓扑字段除外（见 islands*）。 —— */
  flipped: number;
  overlap: number;
  deg3: number;
  degUv: number;
  minR: number | null;
  maxR: number | null;
  maxAngle: number | null;
  area3dSum: number;
  areaUvSum: number;
  /** 只要有一侧（出现）落在本组即计入；分类仍按整网格拓扑。 */
  boundary: number;
  seam: number;
  nonManifold: number;
  /** 被组内三角形触及的岛数（岛按整网格连通性计算）。 */
  islandsTouched: number;
  /** 触及的岛中，同时包含其他组三角形的岛数。 */
  islandsSpanned: number;
  /** 触及的岛中按整网格判定为镜像岛的数量。 */
  mirroredTouched: number;
  /** 问题定位面集（天然只含组内面）。 */
  flippedFaces: Set<number>;
  overlapFaces: Set<number>;
  degFaces: Set<number>;
}

export function computeGroupView(
  mesh: MeshData,
  stats: MeshStats,
  name: string,
): GroupView {
  const n = mesh.triangles.length;
  const active = new Uint8Array(n);
  const faceInGroup = new Uint8Array(mesh.faces.length);
  mesh.faces.forEach((f) => {
    if (f.group === name) faceInGroup[f.id] = 1;
  });
  for (const t of mesh.triangles) {
    if (faceInGroup[t.faceId]) active[t.id] = 1;
  }

  let faceCount = 0;
  for (let i = 0; i < faceInGroup.length; i++) if (faceInGroup[i]) faceCount++;

  let triCount = 0;
  let flipped = 0;
  let overlap = 0;
  let deg3 = 0;
  let degUv = 0;
  let minR = Infinity;
  let maxR = -Infinity;
  let maxAngle = -Infinity;
  let area3dSum = 0;
  let areaUvSum = 0;
  const flippedFaces = new Set<number>();
  const overlapFaces = new Set<number>();
  const degFaces = new Set<number>();

  for (const t of mesh.triangles) {
    if (!active[t.id]) continue;
    triCount++;
    const m = stats.metrics[t.id];
    area3dSum += m.area3d;
    areaUvSum += m.areaUv;
    if (m.degenerate3d) { deg3++; degFaces.add(t.faceId); }
    if (m.degenerateUv) { degUv++; degFaces.add(t.faceId); }
    if (m.flipped) { flipped++; flippedFaces.add(t.faceId); }
    if (stats.overlap[t.id]) { overlap++; overlapFaces.add(t.faceId); }
    if (m.areaRatio !== null) {
      minR = Math.min(minR, m.areaRatio);
      maxR = Math.max(maxR, m.areaRatio);
    }
    if (m.angleDistortion !== null) {
      maxAngle = Math.max(maxAngle, m.angleDistortion);
    }
  }

  // 边：整网格拓扑分类不变，只要有一侧属于本组就计入。
  let boundary = 0;
  let seam = 0;
  let nonManifold = 0;
  for (const e of stats.edges) {
    if (!e.occurrences.some((o) => active[o.tri])) continue;
    if (e.nonManifold) nonManifold++;
    else if (e.boundary) boundary++;
    else if (e.seam) seam++;
  }

  // 岛：连通性/镜像标记一律按整网格，只判断是否被本组触及、是否跨组。
  let islandsTouched = 0;
  let islandsSpanned = 0;
  let mirroredTouched = 0;
  for (const isl of stats.islands) {
    let touched = false;
    let outside = false;
    for (const tid of isl.triIds) {
      if (active[tid]) touched = true;
      else outside = true;
    }
    if (!touched) continue;
    islandsTouched++;
    if (outside) islandsSpanned++;
    if (isl.mirrored) mirroredTouched++;
  }

  return {
    name,
    faceCount,
    triCount,
    flipped,
    overlap,
    deg3,
    degUv,
    minR: minR === Infinity ? null : minR,
    maxR: maxR === -Infinity ? null : maxR,
    maxAngle: maxAngle === -Infinity ? null : maxAngle,
    area3dSum,
    areaUvSum,
    boundary,
    seam,
    nonManifold,
    islandsTouched,
    islandsSpanned,
    mirroredTouched,
    flippedFaces,
    overlapFaces,
    degFaces,
  };
}
