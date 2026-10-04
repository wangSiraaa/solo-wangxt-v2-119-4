import { useMemo } from 'react';
import { useApp } from '../state/AppContext';
import type { TriMetrics } from '../core/types';
import { listGroups, summarizeScope } from '../core/groups';

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
  const { state, selectFaces, setGroupFilter } = useApp();
  const { mesh, stats, selectedFaceIds, groupFilter } = state;

  // 模型包含的全部面组（o/g）。过滤只是视图，底层永远是完整模型。
  const groups = useMemo(() => (mesh ? listGroups(mesh) : []), [mesh]);

  // 当前检查范围的汇总。groupFilter === null 时遍历整网格，与原诊断一致；
  // 单组时逐面指标按组内三角形统计，岛/边拓扑仍来自整网格 stats。
  const summary = useMemo(
    () => (mesh && stats ? summarizeScope(mesh, stats, groupFilter) : null),
    [mesh, stats, groupFilter],
  );

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

  if (!mesh || !stats || !summary) {
    return <aside className="panel">尚未载入模型。</aside>;
  }

  const filtered = groupFilter !== null;
  const chip = (ok: boolean) => (ok ? 'bad' : 'ok');

  return (
    <aside className="panel">
      <section>
        <h3>面组检查（o / g）</h3>
        <select
          className="group-select"
          data-testid="group-filter"
          value={groupFilter ?? ''}
          onChange={(e) => setGroupFilter(e.target.value === '' ? null : e.target.value)}
        >
          <option value="">全部（完整资产）</option>
          {groups.map((g) => (
            <option key={g.name} value={g.name}>
              {g.name}（{g.faces} 面 / {g.tris} 三角）
            </option>
          ))}
        </select>
        {filtered && (
          <p className="hint filter-note" data-testid="filter-note">
            当前仅检查组「{groupFilter}」（{summary.faces} 面 / {summary.tris} 三角）：
            问题清单与面积/角度按<b>组内面</b>统计；其他面组在 2D/3D 视图中淡化，
            但未被删除，UV、接缝与导出内容均不变。
          </p>
        )}
        {filtered && summary.spanningIslands > 0 && (
          <p className="hint filter-warn" data-testid="spanning-note">
            {summary.spanningIslands} 个 UV 岛跨越多个面组：岛的连通、镜像与重叠
            仍按<b>整网格拓扑</b>计算，下列数字只统计落在本组内的部分。
          </p>
        )}
      </section>

      <section>
        <h3>拓扑{filtered ? `（组内 ${summary.faces} / 全资产 ${mesh.faces.length} 面）` : ''}</h3>
        <Row k="顶点身份 (v)" v={mesh.vertexCount} />
        <Row k="角点 (corner)" v={mesh.corners.length} hint="接缝两侧可为同 v 不同 vt" />
        <Row
          k="原始面 / 三角形"
          v={filtered ? `${summary.faces} / ${summary.tris}（全 ${mesh.faces} / ${mesh.triangles.length}）` : `${mesh.faces.length} / ${mesh.triangles.length}`}
        />
        <Row k="UV 顶点 (vt)" v={mesh.uvCount} />
        <Row k="UV 来源" v={mesh.uvOrigin === 'obj' ? 'OBJ/编辑' : '平面回退'} />
      </section>

      <section>
        <h3>边{filtered ? '（组内触及，分类按整网格）' : '（按顶点身份+空间近邻）'}</h3>
        <Row
          k={`UV 岛${filtered ? '（触及 / 全资产）' : ''}`}
          v={filtered ? `${summary.islands} / ${stats.islands.length}` : stats.islands.length}
          hint={filtered ? '岛连通始终按整网格计算' : undefined}
        />
        <Row k="边界边" v={summary.boundary} />
        <Row k="共享边接缝" v={summary.seam} cls={summary.seam ? 'warn' : 'ok'} />
        <Row k="非流形边" v={summary.nonManifold} cls={chip(summary.nonManifold === 0)}
          hint="≥3 个三角形共享的 3D 边" />
      </section>

      <section>
        <h3>UV 健康{filtered ? '（组内）' : ''}</h3>
        <IssueRow
          label="翻转三角形 / 镜像岛"
          value={`${summary.flipped} / ${summary.mirroredIslands}`}
          bad={summary.flipped > 0}
          onLocate={() => summary.flippedFaces.size && selectFaces(summary.flippedFaces)}
        />
        <IssueRow
          label="岛间重叠三角形"
          value={summary.overlap}
          bad={summary.overlap > 0}
          onLocate={() => summary.overlapFaces.size && selectFaces(summary.overlapFaces)}
        />
        <IssueRow
          label="退化（3D / UV）"
          value={`${summary.deg3} / ${summary.degUv}`}
          bad={summary.deg3 + summary.degUv > 0}
          onLocate={() => summary.degenerateFaces.size && selectFaces(summary.degenerateFaces)}
          hint="退化面不参与比率与角度计算"
        />
      </section>

      <section>
        <h3>面积畸变（纹素密度）{filtered ? '（组内）' : ''}</h3>
        <Row
          k="全局相对尺度"
          v={fmt(stats.globalScale, 4)}
          hint={filtered ? '中位归一始终按整网格计算，组内比率与之可比' : '中位 3D/UV 面积比'}
        />
        <Row
          k={filtered ? '组内最小 / 最大比率' : '最小 / 最大比率'}
          v={`${fmt(summary.minRatio)}× / ${fmt(summary.maxRatio)}×`}
          cls={summary.maxRatio !== null && (summary.maxRatio > 2 || summary.minRatio! < 0.5) ? 'warn' : 'ok'}
        />
        <p className="hint">比率 1× = 与中位密度一致；0.5× 偏稀，2× 偏密。</p>
      </section>

      <section>
        <h3>角度畸变{filtered ? '（组内）' : ''}</h3>
        <Row
          k={filtered ? '组内最大内角偏差' : '全模型最大内角偏差'}
          v={`${fmt(summary.maxAngle, 1)}°`}
          cls={summary.maxAngle !== null && summary.maxAngle > 15 ? 'warn' : 'ok'}
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
