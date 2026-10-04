import { parseObj } from '../src/core/parser';
import { analyzeMesh } from '../src/core/metrics';
import { exportObj } from '../src/core/exporter';
import { listGroups, summarizeScope, triActiveMask } from '../src/core/groups';
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

// ===== 面组过滤检查视图（核心口径） =====
console.log('\n=== 面组过滤 ===');
const tg = parseObj(SAMPLES.find(s => s.id === 'twogroups')!.obj, 'tg.obj');
const tgStats = analyzeMesh(tg);
const groupNames = listGroups(tg).map(g => `${g.name}:${g.faces}/${g.tris}`);
assert(groupNames.length === 2 && groupNames[0].startsWith('groupA') && groupNames[1].startsWith('groupB'),
  `twogroups: 解析出两个组，实际 ${JSON.stringify(groupNames)}`);

const allSum = summarizeScope(tg, tgStats, null);
const aSum = summarizeScope(tg, tgStats, 'groupA');
const bSum = summarizeScope(tg, tgStats, 'groupB');

// 两个组各有不同异常：A 翻转 1，B 3D 退化 1
assert(aSum.flipped === 1 && aSum.deg3 === 0, `groupA: 组内 1 翻转/0 3D退化，实际 ${aSum.flipped}/${aSum.deg3}`);
assert(bSum.flipped === 0 && bSum.deg3 === 1, `groupB: 组内 0 翻转/1 3D退化，实际 ${bSum.flipped}/${bSum.deg3}`);
assert(aSum.faces === 1 && aSum.tris === 1, 'groupA: 1 面 1 三角');
assert(bSum.faces === 2 && bSum.tris === 2, 'groupB: 2 面 2 三角');
// 切换组只突出本组问题
assert(aSum.flippedFaces.size === 1 && !aSum.flippedFaces.has([...bSum.degenerateFaces][0]),
  'groupA: 定位集合只含 A 组翻转面');
assert(bSum.degenerateFaces.size === 1 && !bSum.degenerateFaces.has([...aSum.flippedFaces][0]),
  'groupB: 定位集合只含 B 组退化面');

// 恢复“全部”后与原诊断逐项一致
const fullFlipped = tgStats.metrics.filter(m => m.flipped).length;
const fullDeg3 = tgStats.metrics.filter(m => m.degenerate3d).length;
const fullOverlap = [...tgStats.overlap].filter(v => v).length;
assert(allSum.flipped === fullFlipped, `全部汇总翻转=${allSum.flipped} 原诊断=${fullFlipped}`);
assert(allSum.deg3 === fullDeg3, `全部汇总 3D 退化=${allSum.deg3} 原诊断=${fullDeg3}`);
assert(allSum.overlap === fullOverlap, `全部汇总重叠=${allSum.overlap} 原诊断=${fullOverlap}`);
assert(allSum.boundary === tgStats.edges.filter(e => e.boundary).length, '全部汇总边界边与原诊断一致');
assert(allSum.seam === tgStats.edges.filter(e => e.seam).length, '全部汇总接缝与原诊断一致');
assert(allSum.nonManifold === tgStats.edges.filter(e => e.nonManifold).length, '全部汇总非流形与原诊断一致');
assert(allSum.islands === tgStats.islands.length, '全部汇总岛数与原诊断一致');
assert(allSum.mirroredIslands === tgStats.islands.filter(i => i.mirrored).length, '全部汇总镜像岛与原诊断一致');
// 两组 = 两个岛（UV 不重叠），均不跨组
assert(allSum.islands === 2, `twogroups: 2 个 UV 岛，实际 ${allSum.islands}`);
assert(aSum.spanningIslands === 0 && bSum.spanningIslands === 0, 'twogroups: 无跨组岛');

// 掩码：全部全 1；单组只有组内三角为 1
assert(triActiveMask(tg, null).every(v => v === 1), '全部掩码全 1');
const maskA = triActiveMask(tg, 'groupA');
assert(maskA[0] === 1 && maskA[1] === 0 && maskA[2] === 0, 'groupA 掩码只覆盖第 1 个三角');

// 过滤不得改模型：组视图计算后 mesh 数组长度/面身份/UV 不变
const tg2 = parseObj(SAMPLES.find(s => s.id === 'twogroups')!.obj, 'tg2.obj');
assert(tg.faces.length === tg2.faces.length && tg.triangles.length === tg2.triangles.length,
  '过滤视图不改变面/三角数量');
assert(tg.positions.length === tg2.positions.length && tg.uvs.length === tg2.uvs.length,
  '过滤视图不改变顶点/UV 数量');

// 跨组岛：两个 o 组在 3D 中共享一条完整边（v2-v3）且该边两端 UV 一致
// => 同一 UV 岛跨越两个面组。
// left:  v1(0,0) v2(1,0) v3(1,1)；right: v2(1,0) v4(2,0) v3(1,1)
const spanObj = `# span\n`
  + 'v 0 0 0\nv 1 0 0\nv 1 1 0\n'   // 1,2,3
  + 'v 2 0 0\n'                     // 4（v2、v3 与 left 复用）
  + 'vt 0 0\nvt 1 0\nvt 1 1\nvt 2 0\n'
  + 'o left\nf 1/1 2/2 3/3\n'
  + 'o right\nf 2/2 4/4 3/3\n';
const span = parseObj(spanObj, 'span.obj');
const spanStats = analyzeMesh(span);
assert(spanStats.islands.length === 1, `span: 共享边+UV 一致 => 1 个岛，实际 ${spanStats.islands.length}`);
const spanLeft = summarizeScope(span, spanStats, 'left');
const spanRight = summarizeScope(span, spanStats, 'right');
assert(spanLeft.islands === 1 && spanLeft.spanningIslands === 1, 'span: left 触及的 1 个岛跨组');
assert(spanRight.islands === 1 && spanRight.spanningIslands === 1, 'span: right 触及的 1 个岛跨组');
assert(spanLeft.flipped === spanRight.flipped && spanLeft.flipped === 0, 'span: 两组均无翻转');
// 跨组共享边按整网格分类：流形共享、非接缝、非边界；每组各触及 2 条边界边
assert(spanLeft.seam === 0 && spanLeft.nonManifold === 0, 'span: 共享边不是接缝/非流形');
assert(spanLeft.boundary === 2 && spanRight.boundary === 2, `span: 每组 2 条边界边，实际 ${spanLeft.boundary}/${spanRight.boundary}`);
// 跨组共享边本身在两组视图中都被计入（边界计数不变，但它不属边界分类）
assert(spanStats.edges.length === 5 && spanStats.edges.filter(e => !e.boundary && !e.seam && !e.nonManifold).length === 1,
  'span: 整网格 5 条边（4 边界+1 共享），恰好 1 条普通共享边');

console.log(failures === 0 ? '\nALL CORE TESTS PASSED' : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
