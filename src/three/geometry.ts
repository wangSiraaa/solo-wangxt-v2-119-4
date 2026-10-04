import * as THREE from 'three';
import type { MeshData, MeshStats } from '../core/types';
import { cornerPos, cornerUv } from '../core/parser';

/**
 * 所有渲染几何都按角点展开（非索引）：接缝两侧即使共享同一个 v 身份，
 * 也各自作为独立顶点存在 —— 这与“不能按空间位置合并顶点”一致。
 */

/**
 * 面组过滤时，范围外三角形的颜色缩放（仅显示淡化，不删除几何）。
 * 0..1：1 = 完全正常显示，越小越淡。
 */
export const DIM_COLOR_SCALE = 0.14;

export function buildNonIndexedPositions(mesh: MeshData): Float32Array {
  const out = new Float32Array(mesh.triangles.length * 9);
  let o = 0;
  for (const t of mesh.triangles) {
    for (const ci of t.corners) {
      const p = cornerPos(mesh, ci);
      out[o++] = p.x;
      out[o++] = p.y;
      out[o++] = p.z;
    }
  }
  return out;
}

export function buildUvAttribute(mesh: MeshData, checkerScale: number): Float32Array {
  const out = new Float32Array(mesh.triangles.length * 6);
  let o = 0;
  for (const t of mesh.triangles) {
    for (const ci of t.corners) {
      const [u, v] = cornerUv(mesh, ci);
      out[o++] = u * checkerScale;
      out[o++] = v * checkerScale;
    }
  }
  return out;
}

/**
 * 逐三角形“显示系数”（每顶点一个，共 tris*3）：
 * 范围外组的三角形给 DIM_COLOR_SCALE，其余为 1。group === null 时全 1。
 * 通过自定义 attribute 注入 shader，棋盘纹理与顶点色两路都会变暗。
 */
export function buildDimFactors(mesh: MeshData, active: Uint8Array | null): Float32Array {
  const out = new Float32Array(mesh.triangles.length * 3).fill(1);
  if (!active) return out;
  for (const t of mesh.triangles) {
    if (!active[t.id]) {
      out[t.id * 3] = DIM_COLOR_SCALE;
      out[t.id * 3 + 1] = DIM_COLOR_SCALE;
      out[t.id * 3 + 2] = DIM_COLOR_SCALE;
    }
  }
  return out;
}

/** 三角形 id 顶点色属性：默认白，异常类型着色（由着色器决定使用与否）。 */
export function buildFlagColors(
  mesh: MeshData,
  stats: MeshStats,
  showFlipped: boolean,
  showOverlap: boolean,
  active: Uint8Array | null = null,
): Float32Array {
  const out = new Float32Array(mesh.triangles.length * 9).fill(1);
  for (const t of mesh.triangles) {
    const dim = active && !active[t.id];
    const m = stats.metrics[t.id];
    let color: [number, number, number] | null = null;
    if (m.degenerate3d || m.degenerateUv) color = [0.35, 0.35, 0.4];
    else if (showOverlap && stats.overlap[t.id]) color = [1.0, 0.55, 0.05];
    else if (showFlipped && m.flipped) color = [1.0, 0.25, 0.35];
    if (color) {
      for (let k = 0; k < 3; k++) {
        out[t.id * 9 + k * 3] = color[0];
        out[t.id * 9 + k * 3 + 1] = color[1];
        out[t.id * 9 + k * 3 + 2] = color[2];
      }
    } else if (dim) {
      // 无异常的范围外三角：白色顶点色同样压暗，保证非棋盘模式也淡化
      for (let k = 0; k < 9; k++) out[t.id * 9 + k] = DIM_COLOR_SCALE;
    }
  }
  return out;
}

/** 给定选中面集合，构造用于叠加高亮的非索引几何（三角形 id 顺序不变）。 */export function buildSelectionOverlay(
  mesh: MeshData,
  selectedFaceIds: Set<number>,
  sourcePositions: Float32Array,
): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  const pos: number[] = [];
  for (const t of mesh.triangles) {
    if (!selectedFaceIds.has(t.faceId)) continue;
    for (let k = 0; k < 3; k++) {
      pos.push(
        sourcePositions[t.id * 9 + k * 3],
        sourcePositions[t.id * 9 + k * 3 + 1],
        sourcePositions[t.id * 9 + k * 3 + 2],
      );
    }
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  return g;
}

/**
 * 3D 三角形线框的位置 + 顶点色：范围外三角的线段压暗（与淡化视图一致）。
 * 非索引几何，相邻面有重复线段，低模无妨。
 */
export function buildWireframe(
  mesh: MeshData,
  active: Uint8Array | null = null,
): { position: Float32Array; color: Float32Array } {
  const position = new Float32Array(mesh.triangles.length * 18);
  const color = new Float32Array(mesh.triangles.length * 18);
  let o = 0;
  const base: [number, number, number] = [
    0.106, 0.114, 0.141,
  ]; // #1b1d24
  for (const t of mesh.triangles) {
    const f = active && !active[t.id] ? DIM_COLOR_SCALE : 1;
    const cs = t.corners.map((ci) => {
      const c = mesh.corners[ci];
      return [
        mesh.positions[c.v * 3],
        mesh.positions[c.v * 3 + 1],
        mesh.positions[c.v * 3 + 2],
      ] as [number, number, number];
    });
    const segs: Array<[number, number, number][]> = [
      [cs[0], cs[1]], [cs[1], cs[2]], [cs[2], cs[0]],
    ];
    for (const [a, b] of segs) {
      for (const p of [a, b]) {
        position[o] = p[0];
        position[o + 1] = p[1];
        position[o + 2] = p[2];
        color[o] = base[0] * f;
        color[o + 1] = base[1] * f;
        color[o + 2] = base[2] * f;
        o += 3;
      }
    }
  }
  return { position, color };
}

export interface UvEdgeBuffers {
  boundary: THREE.BufferGeometry;
  seam: THREE.BufferGeometry;
  nonManifold: THREE.BufferGeometry;
  regular: THREE.BufferGeometry;
}

/**
 * UV 空间线框，按 3D 拓扑分类（分类永远用顶点身份，不用坐标）。
 * 返回【活跃/淡化】两套：面组过滤时范围外的边出现归入淡化层；
 * 拓扑分类与边身份仍来自整网格 stats，跨组边会同时出现在两套中。
 */
export function buildUvEdges(
  mesh: MeshData,
  stats: MeshStats,
  active: Uint8Array | null = null,
): { full: UvEdgeBuffers; dim: UvEdgeBuffers } {
  const buckets: Record<keyof UvEdgeBuffers, number[]> = {
    boundary: [],
    seam: [],
    nonManifold: [],
    regular: [],
  };
  const dimBuckets: Record<keyof UvEdgeBuffers, number[]> = {
    boundary: [],
    seam: [],
    nonManifold: [],
    regular: [],
  };

  // 每条边的每个出现都画一段 UV 线段：接缝处因此自然出现双线。
  // 一条边的出现跨越范围内外时（跨组共享边），两套各画一段。
  for (const e of stats.edges) {
    for (const { tri, ca, cb } of e.occurrences) {
      const [u0, v0] = cornerUv(mesh, ca);
      const [u1, v1] = cornerUv(mesh, cb);
      let kind: keyof UvEdgeBuffers;
      if (e.nonManifold) kind = 'nonManifold';
      else if (e.boundary) kind = 'boundary';
      else if (e.seam) kind = 'seam';
      else kind = 'regular';
      const target = active && !active[tri] ? dimBuckets : buckets;
      target[kind].push(u0, v0, 0, u1, v1, 0);
    }
  }

  const mk = (arr: number[]) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
    return g;
  };
  const makeSet = (b: typeof buckets): UvEdgeBuffers => ({
    boundary: mk(b.boundary),
    seam: mk(b.seam),
    nonManifold: mk(b.nonManifold),
    regular: mk(b.regular),
  });
  return { full: makeSet(buckets), dim: makeSet(dimBuckets) };
}

export function buildUvSelection(
  mesh: MeshData,
  selectedFaceIds: Set<number>,
): THREE.BufferGeometry {
  const pos: number[] = [];
  for (const t of mesh.triangles) {
    if (!selectedFaceIds.has(t.faceId)) continue;
    for (let k = 0; k < 3; k++) {
      const [u, v] = cornerUv(mesh, t.corners[k]);
      pos.push(u, v, 0);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  return g;
}

/** UV 三角形填充（用于 2D 视图拾取与岛底色），带按岛/状态的顶点色。 */
export function buildUvFills(
  mesh: MeshData,
  stats: MeshStats,
  opts: {
    showFlipped: boolean;
    showOverlap: boolean;
    active?: Uint8Array | null;
  },
): THREE.BufferGeometry {
  const pos: number[] = [];
  const col: number[] = [];
  const islandOfTri = new Int32Array(mesh.triangles.length).fill(-1);
  stats.islands.forEach((isl) => {
    for (const t of isl.triIds) islandOfTri[t] = isl.id;
  });
  const active = opts.active ?? null;

  for (const t of mesh.triangles) {
    const dim = active && !active[t.id];
    const m = stats.metrics[t.id];
    let rgb: [number, number, number];
    if (m.degenerate3d || m.degenerateUv) rgb = [0.32, 0.32, 0.38];
    else if (opts.showOverlap && stats.overlap[t.id]) rgb = [1.0, 0.55, 0.1];
    else if (opts.showFlipped && m.flipped) rgb = [1.0, 0.35, 0.45];
    else rgb = islandColor(islandOfTri[t.id]);

    for (let k = 0; k < 3; k++) {
      const [u, v] = cornerUv(mesh, t.corners[k]);
      pos.push(u, v, 0);
      // 范围外三角几何保留（拾取/完整资产可见），仅压暗颜色。
      col.push(
        rgb[0] * (dim ? DIM_COLOR_SCALE : 1),
        rgb[1] * (dim ? DIM_COLOR_SCALE : 1),
        rgb[2] * (dim ? DIM_COLOR_SCALE : 1),
      );
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeBoundingBox();
  return g;
}

function islandColor(id: number): [number, number, number] {
  // 稳定的浅色调色板（HSL 均匀分布）
  const h = (id * 0.61803398875) % 1;
  const c = new THREE.Color().setHSL(h, 0.45, 0.72);
  return [c.r, c.g, c.b];
}

/** 程序化棋盘纹理，在 0..1 UV 空间内重复 divisions 次。 */
export function makeCheckerTexture(divisions: number): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const cell = size / divisions;
  for (let y = 0; y < divisions; y++) {
    for (let x = 0; x < divisions; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#e8e8ee' : '#5a5f72';
      ctx.fillRect(x * cell, y * cell, Math.ceil(cell), Math.ceil(cell));
    }
  }
  ctx.strokeStyle = '#3a3d49';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, size - 2, size - 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
