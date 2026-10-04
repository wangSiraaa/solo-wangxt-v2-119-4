import * as THREE from 'three';
import type { MeshData, MeshStats } from '../core/types';
import { cornerPos, cornerUv } from '../core/parser';

/**
 * 所有渲染几何都按角点展开（非索引）：接缝两侧即使共享同一个 v 身份，
 * 也各自作为独立顶点存在 —— 这与“不能按空间位置合并顶点”一致。
 */
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

/** 非活动（被组过滤淡化）三角形/线段的中性暗色（线性工作空间）。 */
function dimTriple(hex: number): [number, number, number] {
  const c = new THREE.Color(hex);
  return [c.r, c.g, c.b];
}
// #33363f / #23252d 左右的暗色填充与线框
export const DIM_COLOR: [number, number, number] = dimTriple(0x33363f);
export const DIM_WIRE_COLOR: [number, number, number] = dimTriple(0x23252d);

/**
 * 三角形 id 顶点色属性：默认白，异常类型着色（由着色器决定使用与否）。
 * activeMask 非 null 时（面组过滤），组外三角形一律压暗为中性色，
 * 保证 2D/3D 视图里“其他组淡化”。几何本身不做任何删除。
 */
export function buildFlagColors(
  mesh: MeshData,
  stats: MeshStats,
  showFlipped: boolean,
  showOverlap: boolean,
  activeMask: Uint8Array | null = null,
): Float32Array {
  const out = new Float32Array(mesh.triangles.length * 9).fill(1);
  for (const t of mesh.triangles) {
    const m = stats.metrics[t.id];
    let color: [number, number, number] | null = null;
    if (activeMask && !activeMask[t.id]) {
      color = DIM_COLOR;
    } else if (m.degenerate3d || m.degenerateUv) {
      color = [0.35, 0.35, 0.4];
    } else if (showOverlap && stats.overlap[t.id]) {
      color = [1.0, 0.55, 0.05];
    } else if (showFlipped && m.flipped) {
      color = [1.0, 0.25, 0.35];
    }
    if (color) {
      for (let k = 0; k < 3; k++) {
        out[t.id * 9 + k * 3] = color[0];
        out[t.id * 9 + k * 3 + 1] = color[1];
        out[t.id * 9 + k * 3 + 2] = color[2];
      }
    }
  }
  return out;
}

/** 给定选中面集合，构造用于叠加高亮的非索引几何（三角形 id 顺序不变）。 */
export function buildSelectionOverlay(
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
 * 3D 三角形线框（非索引，相邻面重复线段无妨）。组过滤时组外线段配暗色，
 * 与淡化后的面一起退到背景里。
 */
export function buildWireOverlay(
  mesh: MeshData,
  activeMask: Uint8Array | null,
): THREE.BufferGeometry {
  const linePos: number[] = [];
  const lineCol: number[] = [];
  const activeWire = new THREE.Color(0x1b1d24);
  const ACTIVE: [number, number, number] = [activeWire.r, activeWire.g, activeWire.b];
  for (const t of mesh.triangles) {
    const cs = t.corners.map((ci) => {
      const c = mesh.corners[ci];
      return [
        mesh.positions[c.v * 3],
        mesh.positions[c.v * 3 + 1],
        mesh.positions[c.v * 3 + 2],
      ];
    });
    const [r, g, b] = activeMask && !activeMask[t.id] ? DIM_WIRE_COLOR : ACTIVE;
    const push = (a: number[], c: number[]) => {
      linePos.push(...a, ...c);
      lineCol.push(r, g, b, r, g, b);
    };
    push(cs[0], cs[1]);
    push(cs[1], cs[2]);
    push(cs[2], cs[0]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(lineCol, 3));
  return geo;
}

export interface UvEdgeBuffers {
  boundary: THREE.BufferGeometry;
  seam: THREE.BufferGeometry;
  nonManifold: THREE.BufferGeometry;
  regular: THREE.BufferGeometry;
}

/** UV 空间线框，按 3D 拓扑分类（分类永远用顶点身份，不用坐标）。 */
export function buildUvEdges(
  mesh: MeshData,
  stats: MeshStats,
  activeMask: Uint8Array | null = null,
): UvEdgeBuffers {
  const buckets: Record<keyof UvEdgeBuffers, number[]> = {
    boundary: [],
    seam: [],
    nonManifold: [],
    regular: [],
  };

  // 各类边的“本色”（线性工作空间分量，与旧的 hex material.color 一致）。
  // 淡化色仍保留色调，便于在整模型轮廓里辨认边类。
  const toLin = (hex: number): [number, number, number] => {
    const c = new THREE.Color(hex);
    return [c.r, c.g, c.b];
  };
  const colors: Record<keyof UvEdgeBuffers, [number, number, number]> = {
    regular: toLin(0x2e3140),
    boundary: toLin(0xdfe3ee),
    seam: toLin(0xffb02e),
    nonManifold: toLin(0xff3b5c),
  };
  const dimOf = (rgb: [number, number, number]): [number, number, number] =>
    [rgb[0] * 0.25, rgb[1] * 0.25, rgb[2] * 0.25];
  const colorBufs: Record<keyof UvEdgeBuffers, number[]> = {
    boundary: [], seam: [], nonManifold: [], regular: [],
  };

  // 每条边的每个出现都画一段 UV 线段：接缝处因此自然出现双线。
  // 组过滤时，边段按其所属三角形淡化；边的分类仍是整网格拓扑。
  for (const e of stats.edges) {
    for (const { tri, ca, cb } of e.occurrences) {
      const [u0, v0] = cornerUv(mesh, ca);
      const [u1, v1] = cornerUv(mesh, cb);
      let kind: keyof UvEdgeBuffers;
      if (e.nonManifold) kind = 'nonManifold';
      else if (e.boundary) kind = 'boundary';
      else if (e.seam) kind = 'seam';
      else kind = 'regular';
      buckets[kind].push(u0, v0, 0, u1, v1, 0);
      const col = activeMask && !activeMask[tri] ? dimOf(colors[kind]) : colors[kind];
      colorBufs[kind].push(col[0], col[1], col[2], col[0], col[1], col[2]);
    }
  }

  const mk = (arr: number[], cols: number[]) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    return g;
  };
  return {
    boundary: mk(buckets.boundary, colorBufs.boundary),
    seam: mk(buckets.seam, colorBufs.seam),
    nonManifold: mk(buckets.nonManifold, colorBufs.nonManifold),
    regular: mk(buckets.regular, colorBufs.regular),
  };
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
  opts: { showFlipped: boolean; showOverlap: boolean; activeMask?: Uint8Array | null },
): THREE.BufferGeometry {
  const pos: number[] = [];
  const col: number[] = [];
  const islandOfTri = new Int32Array(mesh.triangles.length).fill(-1);
  stats.islands.forEach((isl) => {
    for (const t of isl.triIds) islandOfTri[t] = isl.id;
  });
  const activeMask = opts.activeMask ?? null;

  for (const t of mesh.triangles) {
    const m = stats.metrics[t.id];
    let rgb: [number, number, number];
    if (activeMask && !activeMask[t.id]) rgb = DIM_COLOR;
    else if (m.degenerate3d || m.degenerateUv) rgb = [0.32, 0.32, 0.38];
    else if (opts.showOverlap && stats.overlap[t.id]) rgb = [1.0, 0.55, 0.1];
    else if (opts.showFlipped && m.flipped) rgb = [1.0, 0.35, 0.45];
    else rgb = islandColor(islandOfTri[t.id]);

    for (let k = 0; k < 3; k++) {
      const [u, v] = cornerUv(mesh, t.corners[k]);
      pos.push(u, v, 0);
      col.push(rgb[0], rgb[1], rgb[2]);
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
