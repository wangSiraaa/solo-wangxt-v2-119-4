import { useMemo } from 'react';
import { useApp } from '../state/AppContext';
import type { TriMetrics } from '../core/types';
import { buildGroups, computeGroupView } from '../core/groupFilter';

function fmt(n: number | null | undefined, digits = 3): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return '—';
  return n.toFixed(digits);
}

/** 面积比率 -> 百分比纹素密度偏差：ratio=1 => 0%，ratio=2 => +100%。 */
function densityPct(r: number | null): string {
  if (r === null) return '退化';
  const pct = (r - 1) * 100;
  return `${pct >= 0 ? '+' : ''}${pct.toFixed(0)}%`;
}

function aggregate(ms: TriMetrics[]) {
  const valid = ms.filter((m) => m.areaRatio !== null);
  if (valid.length === 0) {
    return { count: ms.length, valid: 0, maxRatio: null, maxAngle: null };
  }
  let maxRatio = 0;
  let maxAngle = 0;
  for (const m of valid) {
    maxRatio = Math.max(maxRatio, m.areaRatio!);
    maxAngle = Math.max(maxAngle, m.angleDistortion ?? 0);
  }
  return { count: ms.length, valid: valid.length, maxRatio, maxAngle };
}

export function StatsPanel() {
  const { state, selectFaces, setActiveGroup } = useApp();
  const { mesh, stats, selectedFaceIds, activeGroup } = state;

  /** 全部组（按 OBJ 中 o/g 首次出现顺序）。 */
  const groups = useMemo(
    () => (mesh ? buildGroups(mesh) : []),
    [mesh],
  );

  const full = useMemo(() => {
    if (!mesh || !stats) return null;
    const triInFace = new Map<number, number[]>();
    mesh.triangles.forEach((t) => {
      const list = triInFace.get(t.faceId);
      if (list) list.push(t.id);
      else triInFace.set(t.faceId, [t.id]);
    });

    let deg3 = 0;
    let degUv = 0;
    let flipped = 0;
    let overlap = 0;
    let minR = Infinity;
    let maxR = -Infinity;
    let maxAngle = -Infinity;
    let area3dSum = 0;
    let areaUvSum = 0;
    for (const m of stats.metrics) {
      area3dSum += m.area3d;
      areaUvSum += m.areaUv;
      if (m.degenerate3d) deg3++;
      if (m.degenerateUv) degUv++;
      if (m.flipped) flipped++;
      if (m.areaRatio !== null) {
        minR = Math.min(minR, m.areaRatio);
        maxR = Math.max(maxR, m.areaRatio);
      }
      if (m.angleDistortion !== null) maxAngle = Math.max(maxAngle, m.angleDistortion);
    }
    for (let i = 0; i < stats.overlap.length; i++) if (stats.overlap[i]) overlap++;

    const boundary = stats.edges.filter((e) => e.boundary).length;
    const seam = stats.edges.filter((e) => e.seam).length;
    const nonManifold = stats.edges.filter((e) => e.nonManifold).length;
    const mirroredIsl = stats.islands.filter((i) => i.mirrored).length;

    // 异常面收集（点击定位）
    const faceSetOf = (triIds: number[]) => {
      const s = new Set<number>();
      triIds.forEach((id) => s.add(mesh.triangles[id].faceId));
      return s;
    };
    const flippedTris = stats.metrics.map((m, i) => (m.flipped ? i : -1)).filter((i) => i >= 0);
    const overlapTris = [...stats.overlap].map((v, i) => (v ? i : -1)).filter((i) => i >= 0);
    const degTris = stats.metrics
      .map((m, i) => (m.degenerate3d || m.degenerateUv ? i : -1))
      .filter((i) => i >= 0);

    return {
      triInFace,
      deg3, degUv, flipped, overlap,
      area3dSum, areaUvSum,
      minR: minR === Infinity ? null : minR,
      maxR: maxR === -Infinity ? null : maxR,
      maxAngle: maxAngle === -Infinity ? null : maxAngle,
      boundary, seam, nonManifold, mirroredIsl,
      islands: stats.islands.length,
      flippedFaces: faceSetOf(flippedTris),
      overlapFaces: faceSetOf(overlapTris),
      degFaces: faceSetOf(degTris),
    };
  }, [mesh, stats]);

  /** 当前检查组的只读聚合（岛拓扑仍来自整网格）。 */
  const gv = useMemo(() => {
    if (!mesh || !stats || activeGroup === null) return null;
    return computeGroupView(mesh, stats, activeGroup);
  }, [mesh, stats, activeGroup]);

  const selectedAgg = useMemo(() => {
    if (!mesh || !stats || selectedFaceIds.size === 0) return null;
    const triIds: number[] = [];
    mesh.faces.forEach((f) => {
      if (selectedFaceIds.has(f.id)) {
        mesh.triangles.forEach((t) => {
          if (t.faceId === f.id) triIds.push(t.id);
        });
      }
    });
    const agg = aggregate(triIds.map((id) => stats.metrics[id]));
    // 单三角时给出个体数值
    const one = triIds.length === 1 ? stats.metrics[triIds[0]] : null;
    return { agg, one, triCount: triIds.length };
  }, [mesh, stats, selectedFaceIds]);

  if (!mesh || !stats || !full) {
    return <aside className="panel">尚未载入模型。</aside>;
  }

  const chip = (ok: boolean) => (ok ? 'bad' : 'ok');
  // 面板数值：过滤时只看组内面，恢复“全部”后与原诊断完全一致。
  const v = gv ?? full;

  return (
    <aside className="panel">
      <section className="group-filter">
        <h3>检查组（按 OBJ o / g 面组）</h3>
        <select
          className="group-select"
          data-testid="group-select"
          value={activeGroup ?? ''}
          onChange={(e) => setActiveGroup(e.target.value === '' ? null : e.target.value)}
        >
          <option value="">全部（{mesh.faces.length} 面 / {mesh.triangles.length} 三角）</option>
          {groups.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}（{g.faceIds.length} 面 / {g.triIds.length} 三角）
            </option>
          ))}
        </select>
        {gv ? (
          <>
            <p className="hint filter-note" data-testid="filter-note">
              当前数字仅按组内 {gv.faceCount} 面 / {gv.triCount} 三角形统计；
              其他组在二维与三维视图中淡化显示，模型本身未被裁剪——
              不删面、不改 UV、不改接缝，导出与存档始终是完整模型。
            </p>
            {gv.islandsSpanned > 0 && (
              <p className="hint filter-warn" data-testid="spanning-note">
                {gv.islandsTouched} 个触及的 UV 岛中有 {gv.islandsSpanned} 个跨多个组：
                岛连通/镜像按整网格拓扑计算（岛内其他组的三角形也计入该岛），
                仅三角形级数字是组内统计。
              </p>
            )}
          </>
        ) : (
          <p className="hint">
            选择单个 o/g 面组：问题清单与面积/角度汇总只计组内面，
            两视图淡化其他组；选“全部”恢复完整统计。
          </p>
        )}
      </section>

      <section>
        <h3>拓扑</h3>
        <Row k="顶点身份 (v)" v={mesh.vertexCount} />
        <Row k="角点 (corner)" v={mesh.corners.length} hint="接缝两侧可为同 v 不同 vt" />
        <Row
          k={gv ? '组内 / 全部 面与三角形' : '原始面 / 三角形'}
          v={gv
            ? `${gv.faceCount} / ${mesh.faces.length} · ${gv.triCount} / ${mesh.triangles.length}`
            : `${mesh.faces.length} / ${mesh.triangles.length}`}
        />
        <Row k="UV 顶点 (vt)" v={mesh.uvCount} />
        <Row k="UV 来源" v={mesh.uvOrigin === 'obj' ? 'OBJ/编辑' : '平面回退'} />
      </section>

      <section>
        <h3>边（按顶点身份+空间近邻）</h3>
        <Row
          k={gv ? '触及 UV 岛（整网格拓扑）' : 'UV 岛'}
          v={gv ? `${gv.islandsTouched} / ${full.islands}` : full.islands}
          hint={gv ? '分母为整网格岛数；跨组岛不拆分' : undefined}
        />
        <Row k="边界边" v={v.boundary}
          hint={gv ? '边的任一侧属于本组即计入；分类仍按整网格' : undefined} />
        <Row k="共享边接缝" v={v.seam} cls={v.seam ? 'warn' : 'ok'}
          hint={gv ? '接缝由整网格拓扑判定，过滤不改变接缝' : undefined} />
        <Row k="非流形边" v={v.nonManifold} cls={chip(v.nonManifold === 0)}
          hint="≥3 个三角形共享的 3D 边" />
      </section>

      <section>
        <h3>UV 健康{gv ? `（组「${gv.name}」内）` : ''}</h3>
        <IssueRow
          label="翻转三角形 / 镜像岛"
          value={gv ? `${gv.flipped} / ${gv.mirroredTouched}` : `${full.flipped} / ${full.mirroredIsl}`}
          bad={v.flipped > 0}
          onLocate={() => v.flippedFaces.size && selectFaces(v.flippedFaces)}
          hint={gv
            ? '镜像岛按整网格判定：组内三角翻转即令该岛镜像'
            : undefined}
        />
        <IssueRow
          label="岛间重叠三角形"
          value={v.overlap}
          bad={v.overlap > 0}
          onLocate={() => v.overlapFaces.size && selectFaces(v.overlapFaces)}
          hint={gv ? '重叠按整网格岛拓扑检测，只数组内被标记三角' : undefined}
        />
        <IssueRow
          label="退化（3D / UV）"
          value={`${v.deg3} / ${v.degUv}`}
          bad={v.deg3 + v.degUv > 0}
          onLocate={() => v.degFaces.size && selectFaces(v.degFaces)}
          hint="退化面不参与比率与角度计算"
        />
      </section>

      <section>
        <h3>面积畸变（纹素密度）</h3>
        <Row k="全局相对尺度" v={fmt(stats.globalScale, 4)}
          hint={gv
            ? '中位 3D/UV 面积比（整网格）；过滤不改变归一基准'
            : '中位 3D/UV 面积比'} />
        <Row
          k="最小 / 最大比率"
          v={`${fmt(v.minR)}× / ${fmt(v.maxR)}×`}
          cls={v.maxR !== null && (v.maxR > 2 || v.minR! < 0.5) ? 'warn' : 'ok'}
        />
        <Row
          k={gv ? '组内 3D / UV 面积合计' : '3D / UV 面积合计'}
          v={`${fmt(v.area3dSum, 5)} / ${fmt(v.areaUvSum, 5)}`}
          hint={gv ? '仅组内三角形之和；跨组岛其余部分不计入' : '全部三角形之和'}
        />
        <p className="hint">
          比率 1× = 与整网格中位密度一致；0.5× 偏稀，2× 偏密。
          {gv ? ' 过滤时比率仍按整网格中位归一，跨组可直接比较。' : ''}
        </p>
      </section>

      <section>
        <h3>角度畸变</h3>
        <Row
          k={gv ? '组内最大内角偏差' : '全模型最大内角偏差'}
          v={`${fmt(v.maxAngle, 1)}°`}
          cls={v.maxAngle !== null && v.maxAngle > 15 ? 'warn' : 'ok'}
        />
        <p className="hint">对应 3D/UV 内角最大差值；0° 为保角映射。</p>
      </section>

      <section>
        <h3>选中面{selectedFaceIds.size > 0 ? `（${selectedFaceIds.size} 面 / ${selectedAgg?.triCount ?? 0} 三角）` : ''}</h3>
        {!selectedAgg && <p className="hint">在任一视图点选面；Shift+点击加选。</p>}
        {selectedAgg?.one && (
          <>
            <Row
              k="面积畸变比率"
              v={selectedAgg.one.areaRatio === null ? '退化' : `${fmt(selectedAgg.one.areaRatio)}×`}
              hint={densityPct(selectedAgg.one.areaRatio)}
            />
            <Row
              k="角度畸变"
              v={selectedAgg.one.angleDistortion === null ? '退化' : `${fmt(selectedAgg.one.angleDistortion, 1)}°`}
            />
            <Row k="3D / UV 面积" v={`${fmt(selectedAgg.one.area3d, 5)} / ${fmt(selectedAgg.one.areaUv, 5)}`} />
            <Row k="翻转" v={selectedAgg.one.flipped ? '是' : '否'}
              cls={selectedAgg.one.flipped ? 'bad' : 'ok'} />
          </>
        )}
        {selectedAgg && !selectedAgg.one && (
          <>
            <Row k="最大面积比率" v={`${fmt(selectedAgg.agg.maxRatio)}×`} />
            <Row k="最大角度畸变" v={`${fmt(selectedAgg.agg.maxAngle, 1)}°`} />
            <p className="hint">多选显示聚合峰值；点单一面查看个体数值。</p>
          </>
        )}
      </section>
    </aside>
  );
}

function Row({ k, v, cls, hint }: { k: string; v: string | number; cls?: string; hint?: string }) {
  return (
    <div className={`row ${cls ?? ''}`}>
      <span className="k">{k}</span>
      <span className="v" title={hint}>{v}</span>
    </div>
  );
}

function IssueRow({
  label, value, bad, onLocate, hint,
}: {
  label: string;
  value: string | number;
  bad: boolean;
  onLocate: () => void;
  hint?: string;
}) {
  return (
    <div className={`row issue ${bad ? 'bad' : 'ok'}`} title={hint}>
      <span className="k">{label}</span>
      <span className="v">
        {value}
        {bad && (
          <button className="locate" onClick={onLocate}>定位</button>
        )}
      </span>
    </div>
  );
}
