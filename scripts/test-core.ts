import { parseObj } from '../src/core/parser';
import { analyzeMesh } from '../src/core/metrics';
import { exportObj } from '../src/core/exporter';
import { buildGroups, computeGroupView } from '../src/core/groupFilter';
import { SAMPLES } from '../src/core/samples';

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) { failures++; console.log('  FAIL:', msg); }
};

for (const s of SAMPLES) {
  console.log('\n===', s.label, '===');
  const mesh = parseObj(s.obj, s.id + '.obj');
  const stats = analyzeMesh(mesh);
  const deg3 = stats.metrics.filter(m => m.degenerate3d).length;
  const degUv = stats.metrics.filter(m => m.degenerateUv).length;
  const flipped = stats.metrics.filter(m => m.flipped).length;
  const overlaps = stats.metrics.filter((_, i) => stats.overlap[i]).length;
  const seams = stats.edges.filter(e => e.seam).length;
  const nm = stats.edges.filter(e => e.nonManifold).length;
  const boundary = stats.edges.filter(e => e.boundary).length;
  console.log({
    verts: mesh.vertexCount, corners: mesh.corners.length,
    tris: mesh.triangles.length, faces: mesh.faces.length,
    uvs: mesh.uvCount, islands: stats.islands.length,
    deg3, degUv, flipped, overlaps, seams, nm, boundary,
    mirroredIsl: stats.islands.filter(i => i.mirrored).map(i => i.id),
  });

  if (s.id === 'mirrored') {
    assert(stats.islands.length === 2, `mirrored: 两片 3D 不相邻 => 2 个岛，实际 ${stats.islands.length}`);
    assert(flipped === 1, 'mirrored: 应有 1 个翻转三角形');
    assert(stats.islands.some(i => i.mirrored), 'mirrored: 应有岛判定镜像');
  }
  if (s.id === 'seams') {
    assert(seams === 12, `seams: 立方体应有 12 条接缝，实际 ${seams}`);
    assert(nm === 0, 'seams: 不应有非流形边');
    assert(stats.islands.length === 6, `seams: 应有 6 个 UV 岛，实际 ${stats.islands.length}`);
    assert(flipped === 0, `seams: 所有面绕序应一致，实际翻转 ${flipped}`);
  }
  if (s.id === 'nonmanifold') {
    assert(nm === 1, `nonmanifold: 应有 1 条非流形边，实际 ${nm}`);
    assert(stats.islands.length === 3, `nonmanifold: 3 个 UV 岛，实际 ${stats.islands.length}`);
  }
  if (s.id === 'degenerate') {
    assert(deg3 === 1, `degenerate: 应有 1 个 3D 退化三角形，实际 ${deg3}`);
    assert(degUv === 1, `degenerate: B 的 UV 也共线 => 1 个 UV 退化，实际 ${degUv}`);
    // A 与 D UV 完全重合（必重叠）；薄片 C 与 A 部分相交；退化 B 不参与
    assert(stats.overlap[0] === 1 && stats.overlap[3] === 1, 'degenerate: A 与 D 完全重叠');
    assert(stats.overlap[1] === 0, 'degenerate: 退化三角形不参与重叠检测');
    assert(overlaps >= 2, `degenerate: 至少 A、D 两个重叠三角形，实际 ${overlaps}`);
    // 面积畸变：C 极度压缩 => areaRatio 远大于 1
    const cRatio = stats.metrics[2].areaRatio;
    assert(cRatio !== null && cRatio > 2, `degenerate: C 面积比率应 >2，实际 ${cRatio}`);
    assert(stats.metrics[1].areaRatio === null, 'degenerate: 退化面不参与比率(null)');
    assert(stats.metrics[1].angleDistortion === null, 'degenerate: 退化面角度畸变也应为 null');
  }
  if (s.id === 'grouped') {
    // 整网格：5 面 7 三角，3 个 UV 岛，A 组翻转 1 个，B 组 UV 退化 1 个，无重叠
    assert(stats.islands.length === 3, `grouped: 应有 3 个 UV 岛（含 1 个跨组），实际 ${stats.islands.length}`);
    assert(flipped === 1, `grouped: 整网格 1 个翻转三角，实际 ${flipped}`);
    assert(degUv === 1, `grouped: 整网格 1 个 UV 退化，实际 ${degUv}`);
    assert(deg3 === 0, `grouped: 无 3D 退化，实际 ${deg3}`);
    assert(overlaps === 0, `grouped: 无岛间重叠，实际 ${overlaps}`);
  }

  // 导出并重新解析：三角形数、每三角形 UV 必须保持
  const out = exportObj(mesh);
  const re = parseObj(out, 're.obj');
  assert(re.triangles.length === mesh.triangles.length, 'roundtrip: 三角形数一致');
  let uvDrift = 0;
  for (const t0 of mesh.triangles) {
    const t1 = re.triangles[t0.id];
    for (let k = 0; k < 3; k++) {
      const ci0 = t0.corners[k], ci1 = t1.corners[k];
      const u0a = mesh.uvs[mesh.corners[ci0].vt * 2], u0b = mesh.uvs[mesh.corners[ci0].vt * 2 + 1];
      const u1a = re.uvs[re.corners[ci1].vt * 2], u1b = re.uvs[re.corners[ci1].vt * 2 + 1];
      if (Math.abs(u0a - u1a) > 1e-5 || Math.abs(u0b - u1b) > 1e-5) uvDrift++;
    }
  }
  assert(uvDrift === 0, `roundtrip: UV 漂移角点 ${uvDrift}`);
}

// ---- 面组过滤检查视图（只读聚合，绝不修改 mesh/stats） ----
console.log('\n=== 面组过滤（grouped 样例） ===');
const gm = parseObj(SAMPLES.find(s => s.id === 'grouped')!.obj, 'grouped.obj');
const gs = analyzeMesh(gm);
const beforeText = exportObj(gm);
const uvsBefore = JSON.stringify(Array.from(gm.uvs));

const groups = buildGroups(gm);
assert(groups.length === 2, `grouped: 两个 o/g 组，实际 ${groups.length}`);
assert(groups[0].name === 'Part_A' && groups[1].name === 'Part_B',
  `grouped: 组名按首次出现顺序，实际 ${groups.map(g => g.name).join(',')}`);
assert(groups[0].faceIds.length === 3 && groups[0].triIds.length === 3,
  'grouped: Part_A 3 面 3 三角');
assert(groups[1].faceIds.length === 2 && groups[1].triIds.length === 3,
  'grouped: Part_B 2 面（四边扇形成 2 三角 + 退化 1）= 3 三角');

const vA = computeGroupView(gm, gs, 'Part_A');
const vB = computeGroupView(gm, gs, 'Part_B');

// A 组：只有本组翻转；B 组的 UV 退化不出现在 A
assert(vA.flipped === 1, `A 组: 1 个翻转三角，实际 ${vA.flipped}`);
assert(vA.degUv === 0 && vA.deg3 === 0, `A 组: 无退化，实际 ${vA.deg3}/${vA.degUv}`);
assert(vA.overlap === 0, `A 组: 无重叠，实际 ${vA.overlap}`);
assert(vA.mirroredTouched === 1, `A 组: 触及 1 个镜像岛（翻转在本组），实际 ${vA.mirroredTouched}`);
assert(vA.flippedFaces.size === 1, 'A 组: 定位集只含组内翻转面');

// B 组：只有本组 UV 退化；A 组的翻转不出现在 B
assert(vB.degUv === 1, `B 组: 1 个 UV 退化三角，实际 ${vB.degUv}`);
assert(vB.deg3 === 0, `B 组: 无 3D 退化，实际 ${vB.deg3}`);
assert(vB.flipped === 0, `B 组: 不应看到 A 组的翻转，实际 ${vB.flipped}`);
assert(vB.overlap === 0, `B 组: 无重叠，实际 ${vB.overlap}`);
assert(vB.mirroredTouched === 0,
  `B 组: 触及岛不镜像（镜像岛是 A 独占的翻转三角），实际 ${vB.mirroredTouched}`);

// 跨组岛：两个方块 3D 共享焊接边 + UV 一致 => 1 个岛横跨两组
assert(vA.islandsTouched === 2, `A 组: 方块岛+翻转岛 = 触及 2 岛，实际 ${vA.islandsTouched}`);
assert(vA.islandsSpanned === 1, `A 组: 其中 1 个跨组岛，实际 ${vA.islandsSpanned}`);
assert(vB.islandsTouched === 2, `B 组: 方块岛+退化岛 = 触及 2 岛，实际 ${vB.islandsTouched}`);
assert(vB.islandsSpanned === 1, `B 组: 其中 1 个跨组岛，实际 ${vB.islandsSpanned}`);

// 跨组岛在两组都触及时不重复计入整网格：2 个触及之和（2+2）> 全网格 3 岛语义，
// 但全网格仍是 3 岛
assert(gs.islands.length === 3, '过滤后再读整网格：仍是 3 岛');

// 边汇总：跨组焊接共享边两侧分别属于两组，任一组视角里都不应是接缝/非流形
assert(vA.seam === 0 && vA.nonManifold === 0,
  `A 组: 焊接共享边不是接缝/非流形，接缝=${vA.seam}`);
assert(vB.seam === 0 && vB.nonManifold === 0,
  `B 组: 焊接共享边不是接缝/非流形，接缝=${vB.seam}`);
// 该共享边两侧都在本组即计入：A 方块 2 条侧边与 B 方块邻接中的 1 条共享
assert(vA.boundary + vA.seam + vA.nonManifold <= 8, 'A 组: 边计数为非负有限值');

// 恢复“全部”后的汇总必须与原诊断一致（用各组合数覆盖不到跨组岛统计，
// 这里直接重算整网格并比对）
const fullRe = analyzeMesh(gm);
const fullFlipped = fullRe.metrics.filter(m => m.flipped).length;
const fullDegUv = fullRe.metrics.filter(m => m.degenerateUv).length;
assert(fullFlipped === vA.flipped + vB.flipped,
  '恢复全部: 翻转数 = 各组之和（三角形级数字一致）');
assert(fullDegUv === vA.degUv + vB.degUv,
  '恢复全部: UV 退化数 = 各组之和');
assert(fullRe.islands.length === 3, '恢复全部: 3 岛（跨组岛不被拆分）');
assert(fullRe.islands.filter(i => i.mirrored).length === 1, '恢复全部: 1 个镜像岛');

// 非破坏性：聚合后 mesh 与导出完全不变（过滤纯只读）
assert(gm.faces.length === 5, '过滤后 mesh 面数不变');
assert(JSON.stringify(Array.from(gm.uvs)) === uvsBefore,
  '过滤后 UV 数组逐值不变');
assert(exportObj(gm) === beforeText, '过滤后导出 OBJ 文本逐字节不变');

// “过滤状态下保存或导出，再载入仍是完整模型”：
// 导出只有一份内容（不随过滤变化），往返后面/三角/角点齐全。
const round = parseObj(beforeText, 'rt.obj');
assert(round.triangles.length === gm.triangles.length, '过滤态导出往返: 三角数完整');
// 导出为三角化非索引 OBJ：四边面扇成 2 个三角面；v 按唯一角点输出
// （16 行），而重新解析后每个三角面有 3 个角点标记（18 个 corner，
// 扇形共享 v 身份）。关键：三角形不缺、v 身份不缺、组不丢、UV 不漂。
assert(round.faces.length === 6, `过滤态导出往返: 三角化后面数=三角数=6，实际 ${round.faces.length}`);
assert(round.corners.length === 18, `过滤态导出往返: 角点标记 18，实际 ${round.corners.length}`);
assert(round.vertexCount === 16, `过滤态导出往返: 唯一 v 行 16 个，实际 ${round.vertexCount}`);
const roundGroups = buildGroups(round);
assert(roundGroups.length === 2,
  `过滤态导出往返: 两个面组都保留，实际 ${roundGroups.length}`);
assert(roundGroups.some(g => g.name === 'Part_A' && g.triIds.length === 3) &&
       roundGroups.some(g => g.name === 'Part_B' && g.triIds.length === 3),
  '过滤态导出往返: 各组三角形数完整（3 / 3）');
const roundStats = analyzeMesh(round);
assert(roundStats.overlap.every((o, i) => o === gs.overlap[i]),
  '过滤态导出往返: 重叠诊断与原模型一致');

// 稳定性身份检查：seams 立方体里 8 个空间角点各被 3 个相邻面复制
const seam = parseObj(SAMPLES.find(s => s.id === 'seams')!.obj);
const posCounts = new Map();
for (let vi = 0; vi < seam.vertexCount; vi++) {
  const k = `${seam.positions[vi*3]},${seam.positions[vi*3+1]},${seam.positions[vi*3+2]}`;
  posCounts.set(k, (posCounts.get(k) ?? 0) + 1);
}
const duplicatedLocs = [...posCounts.values()].filter(n => n === 3).length;
assert(duplicatedLocs === 8, `seams: 8 个空间角点位置各有 3 个独立 v，实际 ${duplicatedLocs}`);
assert(posCounts.size === 8, `seams: 只有 8 个不同空间位置，实际 ${posCounts.size}`);
assert(seam.vertexCount === 24, 'seams: 24 个稳定顶点身份（不焊接）');
assert(seam.corners.length === 36, 'seams: 角点总数 36（6 面 × 2 三角 × 3）');

console.log(failures === 0 ? '\nALL CORE TESTS PASSED' : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
