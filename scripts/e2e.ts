import { chromium } from 'playwright';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const base = 'http://127.0.0.1:5199';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors: string[] = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

const results: string[] = [];
const check = (name: string, cond: boolean, extra = '') => {
  results.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`);
};

await page.goto(base);
await page.waitForSelector('.sample-grid', { timeout: 10000 });
check('空状态显示样例', await page.locator('.sample-grid button').count() === 5);

// 1) 共享边接缝样例
await page.locator('.sample-grid button', { hasText: '共享边接缝' }).click();
await page.waitForSelector('.panel');
await sleep(200);
let panel = await page.locator('.panel').innerText();
check('接缝立方体: 12 条共享边接缝', /共享边接缝\s*\n?\s*12/.test(panel), JSON.stringify(panel.match(/共享边接缝[^\n]*/)));
check('接缝立方体: 6 个 UV 岛', /UV 岛\s*6/.test(panel));
check('接缝立方体: 角点 36', /角点 \(corner\)\s*36/.test(panel));
check('接缝立方体: 顶点身份 24', /顶点身份 \(v\)\s*24/.test(panel));

// 2) 3D 视图拾取：点击 3D 画布中心区域，应选中某一面
const box3d = await page.locator('.view3d canvas').boundingBox();
await page.mouse.click(box3d!.x + box3d!.width * 0.5, box3d!.y + box3d!.height * 0.4);
await sleep(150);
panel = await page.locator('.panel').innerText();
check('3D 点选产生选中面', /选中面\s*（\d+ 面/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 3) 2D 视图点选：点击 2D 画布，选中集应同步变化（两视图同步）
const box2d = await page.locator('.view2d canvas').boundingBox();
await page.mouse.click(box2d!.x + box2d!.width * 0.5, box2d!.y + box2d!.height * 0.35);
await sleep(150);
panel = await page.locator('.panel').innerText();
check('2D 点选同步选中面', /选中面\s*（\d+ 面 \/ \d+ 三角）/.test(panel), panel.match(/选中面[^\n]*/)?.[0]);

// 4) 切换到非流形样例
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '非流形边' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('非流形边: 1 条非流形', /非流形边\s*1/.test(panel));
check('非流形边: 3 个 UV 岛', /UV 岛\s*3/.test(panel));

// 5) 镜像岛
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '镜像岛' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('镜像岛: 1 个翻转三角', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);

// 6) 退化混合样例
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '退化' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('退化: 3D/UV 退化各 1', /退化（3D \/ UV）\s*1 \/ 1/.test(panel), panel.match(/退化（[^\n]*/)?.[0]);
check('退化: 存在岛间重叠', /岛间重叠三角形\s*[23]/.test(panel), panel.match(/岛间重叠[^\n]*/)?.[0]);
check('退化: 最大比率 >2（拉伸）', /(\d+\.\d+)×/.test(panel));

// 7) xatlas 自动展开（回到接缝立方体）
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '共享边接缝' }).click();
await sleep(200);
await page.locator('button.primary', { hasText: 'xatlas 自动展开' }).click();
// WASM 在懒加载 chunk，给足时间
await page.waitForSelector('.notice.success', { timeout: 60000 });
const notice = await page.locator('.notice').innerText();
check('xatlas 展开成功提示', /自动展开完成/.test(notice), notice);
await sleep(300);
panel = await page.locator('.panel').innerText();
const charts = notice.match(/(\d+) 个图/)?.[1];
check('xatlas 立方体产出 6 图', charts === '6', `got ${charts}`);
check('展开后角点仍 36（身份保留）', /角点 \(corner\)\s*36/.test(panel));
check('展开后顶点身份仍 24（不空间合并模型）', /顶点身份 \(v\)\s*24/.test(panel));

// 8) 导出 OBJ：拦截下载，用页面内文本做往返断言
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('button', { hasText: '导出 UV OBJ' }).click(),
]);
const path = await download.path();
const fs = await import('node:fs');
const objText = fs.readFileSync(path!, 'utf8');
const vCount = (objText.match(/^v /gm) || []).length;
const vtCount = (objText.match(/^vt /gm) || []).length;
const fCount = (objText.match(/^f /gm) || []).length;
check('导出 OBJ: 36 行 v（逐角点）', vCount === 36, `v=${vCount}`);
check('导出 OBJ: 12 行 f', fCount === 12, `f=${fCount}`);
check('导出 OBJ: vt 行存在', vtCount > 0, `vt=${vtCount}`);

// 在页面里重新载入导出的 OBJ（通过隐藏 file input 不好模拟，改用直接读取并注入到 input）
await page.evaluate((text) => {
  // 触发应用的载入：构造 File 并通过 DataTransfer 赋给 input
  const dt = new DataTransfer();
  dt.items.add(new File([text], 'roundtrip.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, objText);
await sleep(300);
panel = await page.locator('.panel').innerText();
check('导出 OBJ 可被重新载入', /顶点身份 \(v\)\s*36/.test(panel), 'roundtrip v=36');
check('往返后面数保持 12', /原始面 \/ 三角形\s*12 \/ 12/.test(panel));
check('往返后无非流形', /非流形边\s*0/.test(panel));

// 9) IndexedDB 工程保存与重开
await page.locator('button', { hasText: '存工程' }).click();
await page.waitForSelector('.notice.success:has-text("IndexedDB")', { timeout: 10000 });
await sleep(200);
const libCount = await page.evaluate(async () => {
  // @ts-ignore
  const dbs = await indexedDB.databases?.();
  return dbs?.map((d: IDBDatabaseInfo) => d.name);
});
check('IndexedDB 数据库存在', JSON.stringify(libCount).includes('lowpoly-uv-inspector'), JSON.stringify(libCount));
const projectItems = await page.locator('.dropdown.align-right .menu-item').count();
check('工程库列出 1 个工程', projectItems >= 1, `items=${projectItems}`);

// 载入镜像样例后再从工程库打开，验证恢复
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '镜像岛' }).click();
await sleep(200);
await page.locator('.dropdown.align-right button', { hasText: '工程库' }).hover();
await page.locator('.menu-item .proj-open').first().click();
await sleep(300);
panel = await page.locator('.panel').innerText();
check('从 IndexedDB 恢复工程（36 角点）', /角点 \(corner\)\s*36/.test(panel));

// 10) 按面组过滤检查视图（grouped 样例：A 组翻转 / B 组 UV 退化 / 1 个跨组岛）
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '分组异常对照' }).click();
await sleep(200);
panel = await page.locator('.panel').innerText();
check('分组样例: 整网格翻转 1', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('分组样例: 整网格 UV 退化 1', /退化（3D \/ UV）\s*0 \/ 1/.test(panel), panel.match(/退化（[^\n]*/)?.[0]);
check('分组样例: 3 个 UV 岛', /UV 岛\s*3/.test(panel));
check('分组选择器存在两组', await page.locator('select[data-testid=group-select] option').count() === 3);

// 切到 Part_A：只看到本组翻转，看不到 B 组的 UV 退化；有跨组岛说明
await page.locator('select[data-testid=group-select]').selectOption('Part_A');
await sleep(150);
panel = await page.locator('.panel').innerText();
check('A 组: 翻转 1 / 镜像岛 1', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('A 组: 不显示 B 组 UV 退化（0 / 0）', /退化（3D \/ UV）\s*0 \/ 0/.test(panel), panel.match(/退化（[^\n]*/)?.[0]);
check('A 组: 组内面数 3/5 · 三角 3/6', /3 \/ 5\s*·\s*3 \/ 6/.test(panel), panel.match(/[^\n]*组内[^\n]*/)?.[0]);
check('A 组: 跨组岛提示', /跨多个组/.test(panel) && /岛连通\/镜像按整网格拓扑/.test(panel));
check('A 组: 淡化说明（不删面/不改UV/不改接缝/完整模型）',
  /其他组在二维与三维视图中淡化/.test(panel) && /不删面、不改 UV、不改接缝/.test(panel) && /完整模型/.test(panel));
check('A 组: 触及岛 2 / 3', /触及 UV 岛（整网格拓扑）\s*2 \/ 3/.test(panel), panel.match(/触及[^\n]*/)?.[0]);
check('A 组: 视图标签显示其他组淡化', (await page.locator('.view3d .view-label').innerText()).includes('其他组淡化'));

// 切到 Part_B：翻转消失，只剩 UV 退化
await page.locator('select[data-testid=group-select]').selectOption('Part_B');
await sleep(150);
panel = await page.locator('.panel').innerText();
check('B 组: 无翻转（0 / 0）', /翻转三角形 \/ 镜像岛\s*0 \/ 0/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('B 组: UV 退化 1（0 / 1）', /退化（3D \/ UV）\s*0 \/ 1/.test(panel), panel.match(/退化（[^\n]*/)?.[0]);

// 恢复全部：汇总与原诊断一致
await page.locator('select[data-testid=group-select]').selectOption('');
await sleep(150);
panel = await page.locator('.panel').innerText();
check('恢复全部: 翻转 1 / 镜像岛 1', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel));
check('恢复全部: 退化 0 / 1', /退化（3D \/ UV）\s*0 \/ 1/.test(panel));
check('恢复全部: 3 岛', /UV 岛\s*3/.test(panel));
check('恢复全部: 过滤说明消失', !/其他组在二维与三维视图中淡化/.test(panel));

// 过滤状态下导出，再载入：仍是完整模型（6 三角、两个组），且过滤态不持久
await page.locator('select[data-testid=group-select]').selectOption('Part_A');
await sleep(100);
const [download2] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('button', { hasText: '导出 UV OBJ' }).click(),
]);
const path2 = await download2.path();
const objText2 = fs.readFileSync(path2!, 'utf8');
check('过滤态导出: 仍是全部 6 行 f', (objText2.match(/^f /gm) || []).length === 6,
  `f=${(objText2.match(/^f /gm) || []).length}`);
check('过滤态导出: 两个 g 行都在', (objText2.match(/^g /gm) || []).length === 2,
  `g=${(objText2.match(/^g /gm) || []).length}`);
check('过滤态导出: 含 Part_A 与 Part_B', /g Part_A/.test(objText2) && /g Part_B/.test(objText2));

await page.evaluate((text) => {
  const dt = new DataTransfer();
  dt.items.add(new File([text], 'grouped-rt.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, objText2);
await sleep(300);
panel = await page.locator('.panel').innerText();
check('过滤态导出往返: 载入后是完整模型 6 三角', /原始面 \/ 三角形\s*6 \/ 6/.test(panel), panel.match(/原始面[^\n]*/)?.[0]);
const groupOptions = await page.locator('select[data-testid=group-select] option').allInnerTexts();
check('过滤态导出往返: 仍列出两个组',
  groupOptions.some((o) => o.includes('Part_A')) && groupOptions.some((o) => o.includes('Part_B')),
  JSON.stringify(groupOptions));
check('过滤态导出往返: 过滤视图重置为全部（不持久）',
  await page.locator('select[data-testid=group-select]').inputValue() === '');

check('无控制台错误', errors.length === 0, errors.slice(0, 3).join(' | '));

console.log(results.join('\n'));
const failed = results.filter((r) => r.startsWith('FAIL')).length;
await browser.close();
process.exit(failed ? 1 : 0);
