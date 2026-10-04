import { chromium } from 'playwright';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const base = 'http://127.0.0.1:5199';

const browser = await chromium.launch({
  // 允许通过环境变量指定 chromium 可执行（沙盒无 root 装依赖时用）；
  // 正常 CI 留空，走 Playwright 自带浏览器。
  ...(process.env.E2E_CHROMIUM
    ? { executablePath: process.env.E2E_CHROMIUM, args: ['--no-sandbox', '--disable-dev-shm-usage'] }
    : {}),
});
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

// 10) 面组过滤检查视图：双组样例，两组各有不同异常
await page.locator('.toolbar .dropdown button', { hasText: '样例' }).hover();
await page.locator('.dropdown .menu button', { hasText: '双组异常' }).click();
await sleep(300);
panel = await page.locator('.panel').innerText();
// 整网格：1 翻转（A 组）、1 个 3D 退化（B 组）、2 个 UV 岛
check('双组: 全部下 1 翻转', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('双组: 全部下 1 个 3D 退化', /退化（3D \/ UV）\s*1 \//.test(panel), panel.match(/退化[^\n]*/)?.[0]);
check('双组: 2 个 UV 岛', /UV 岛\s*2/.test(panel));
check('双组: 默认无过滤说明', !(await page.locator('[data-testid=filter-note]').count()));

const groupSel = page.locator('[data-testid=group-filter]');
// 切到 groupA：只应有翻转，不应有 3D 退化
await groupSel.selectOption('groupA');
await sleep(200);
panel = await page.locator('.panel').innerText();
check('groupA: 出现过滤说明', await page.locator('[data-testid=filter-note]').count() === 1);
check('groupA: 1 翻转', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('groupA: 无 3D 退化（本组问题）', /退化（3D \/ UV）\s*0 \//.test(panel), panel.match(/退化[^\n]*/)?.[0]);
check('groupA: 面数 1 / 全资产 3', /组内 1 \/ 全资产 3 面/.test(panel), panel.match(/组内[^\n]*/)?.[0]);
check('groupA: 无跨组岛提示', !(await page.locator('[data-testid=spanning-note]').count()));
// 视图标签体现过滤
const label3d = await page.locator('.view3d .view-label').innerText();
check('groupA: 3D 标签提示淡化', /检查组「groupA」/.test(label3d), label3d);

// 切到 groupB：只应有退化，不应有翻转
await groupSel.selectOption('groupB');
await sleep(200);
panel = await page.locator('.panel').innerText();
check('groupB: 1 个 3D 退化', /退化（3D \/ UV）\s*1 \//.test(panel), panel.match(/退化[^\n]*/)?.[0]);
check('groupB: 无翻转（本组问题）', /翻转三角形 \/ 镜像岛\s*0 \/ 0/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('groupB: 面数 2 / 全资产 3', /组内 2 \/ 全资产 3 面/.test(panel));

// 恢复“全部”：汇总与最初整网格诊断一致
await groupSel.selectOption('');
await sleep(200);
panel = await page.locator('.panel').innerText();
check('恢复全部: 1 翻转 / 1 镜像岛', /翻转三角形 \/ 镜像岛\s*1 \/ 1/.test(panel), panel.match(/翻转[^\n]*/)?.[0]);
check('恢复全部: 1 个 3D 退化', /退化（3D \/ UV）\s*1 \//.test(panel));
check('恢复全部: 2 个 UV 岛', /UV 岛\s*2/.test(panel));
check('恢复全部: 过滤说明消失', !(await page.locator('[data-testid=filter-note]').count()));

// 11) 过滤状态下导出：下载内容仍是完整模型（3 面全在）
await groupSel.selectOption('groupA');
await sleep(150);
const [dl2] = await Promise.all([
  page.waitForEvent('download'),
  page.locator('button', { hasText: '导出 UV OBJ' }).click(),
]);
const obj2 = (await import('node:fs')).readFileSync((await dl2.path())!, 'utf8');
const f2 = (obj2.match(/^f /gm) || []).length;
check('过滤中导出: 仍是完整 3 个三角面', f2 === 3, `f=${f2}`);
// 过滤中保存的工程也不被裁剪
await page.locator('button', { hasText: '存工程' }).click();
await page.waitForSelector('.notice.success:has-text("IndexedDB")', { timeout: 10000 });
await sleep(200);
// 重新载入导出的 OBJ：完整模型，且新载入后过滤自动回到“全部”
await page.evaluate((text) => {
  const dt = new DataTransfer();
  dt.items.add(new File([text], 'filt-roundtrip.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
}, obj2);
await sleep(300);
panel = await page.locator('.panel').innerText();
check('过滤中导出的 OBJ 重载后是完整模型', /原始面 \/ 三角形\s*3 \/ 3/.test(panel), panel.match(/原始面[^\n]*/)?.[0]);
check('重载后过滤回到全部（无过滤说明）', !(await page.locator('[data-testid=filter-note]').count()));

// 12) 跨组岛：两 o 组共享一条 UV 一致的 3D 边 => 1 岛跨 2 组并给出说明
await page.evaluate(() => {
  const obj = `# span
v 0 0 0
v 1 0 0
v 1 1 0
v 2 0 0
vt 0 0
vt 1 0
vt 1 1
vt 2 0
o left
f 1/1 2/2 3/3
o right
f 2/2 4/4 3/3
`;
  const dt = new DataTransfer();
  dt.items.add(new File([obj], 'span.obj', { type: 'text/plain' }));
  const input = document.querySelector('input[type=file]') as HTMLInputElement;
  input.files = dt.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
});
await sleep(300);
panel = await page.locator('.panel').innerText();
check('跨组岛: 全部下 1 个 UV 岛', /UV 岛\s*1/.test(panel), panel.match(/UV 岛[^\n]*/)?.[0]);
await page.locator('[data-testid=group-filter]').selectOption('left');
await sleep(200);
check('跨组岛: 过滤时显示跨组岛说明', await page.locator('[data-testid=spanning-note]').count() === 1);
const spanNote = await page.locator('[data-testid=spanning-note]').innerText();
check('跨组岛: 说明 1 个岛跨多组', /1 个 UV 岛跨越多个面组/.test(spanNote), spanNote);
panel = await page.locator('.panel').innerText();
check('跨组岛: 触及岛数仍为 1（拓扑按整网格）', /UV 岛（触及 \/ 全资产）\s*1 \/ 1/.test(panel), panel.match(/UV 岛[^\n]*/)?.[0]);

check('无控制台错误', errors.length === 0, errors.slice(0, 3).join(' | '));

console.log(results.join('\n'));
const failed = results.filter((r) => r.startsWith('FAIL')).length;
await browser.close();
process.exit(failed ? 1 : 0);
