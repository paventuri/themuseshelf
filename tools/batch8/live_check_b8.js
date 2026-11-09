// Batch 8 live check (read-only, throwaway headless profile, deleted after). Every URL -> HTTP status, title, h1,
// canonical, robots, product count, ASIN order on the page vs content.js, Amazon tags (direct visit = musesite-20),
// "$" amounts left after removing post titles; then the channel-tag flow (pinterest -> musepin-20 kept on next page).
// BASE=http://127.0.0.1:8765 checks a served dist instead of live (tag flow skipped).
// cd ~/CamillaAmazon/site/tools && NODE_PATH=node_modules node batch8/live_check_b8.js
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const sleep = ms => new Promise(r => setTimeout(r, ms));
global.window = {}; require('../../src/js/content.js'); const POSTS = window.TMS.POSTS;
const SLUGS = ['christmas-dining-room-decor-ideas', 'gifts-for-girlfriend-that-look-expensive', 'old-money-christmas-decor', 'coworker-gifts-under-25', 'pink-christmas-decor-ideas', 'gold-jewelry-gifts-that-look-expensive', 'christmas-window-decor-ideas', 'neighbor-gifts-under-15', 'scandinavian-christmas-decor', 'last-minute-christmas-gifts-for-her', 'vintage-christmas-decor-ideas', 'anthropologie-christmas-dupes', 'christmas-party-decor-ideas', 'pantry-organization-that-looks-expensive', 'nightstand-decor-ideas'];
const BASE = process.env.BASE || 'https://themuseshelf.com';
(async () => {
  const dir = process.env.HOME + '/.hermes/cache/scratch/chrome-b8live-' + Date.now();
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: dir });
  const info = async p => p.evaluate(() => {
    const a = [...document.querySelectorAll('a[href*="amazon.com"]')];
    const asins = []; for (const x of document.querySelectorAll('ol.products li')) {
      const l = x.querySelector('a[href*="amazon.com"]'); const m = l && l.href.match(/\/dp\/([A-Z0-9]{10})/); asins.push(m ? m[1] : null); }
    let txt = (document.querySelector('main') || document.body).innerText;
    for (const P of ((window.TMS || {}).POSTS || [])) txt = txt.split(P.title).join('');
    return { title: document.title, h1: (document.querySelector('h1') || {}).innerText, products: asins.length, asins,
      amazon: a.length, tags: [...new Set(a.map(x => (x.href.match(/tag=([a-z0-9-]+)/) || [])[1]))],
      prices: txt.match(/\$\d[\d.,]*/g) || [],
      robots: (document.querySelector('meta[name=robots]') || {}).content || '', canonical: (document.querySelector('link[rel=canonical]') || {}).href || '' };
  });
  const p = await b.newPage();
  let ok = 0;
  for (const s of SLUGS) {
    const P = POSTS.find(x => x.slug === s); const want = P.products.map(x => x.link);
    const r = await p.goto(BASE + '/' + s + '/?cb=' + Date.now(), { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(800);
    const i = await info(p);
    const bad = [];
    if (r.status() !== 200) bad.push('status ' + r.status());
    if (i.h1 !== P.title) bad.push('h1');
    if (!i.title.startsWith(P.seoTitle || P.title.split(':')[0])) bad.push('title');
    if (i.canonical !== 'https://themuseshelf.com/' + s + '/') bad.push('canonical ' + i.canonical);
    if (/noindex/i.test(i.robots)) bad.push('noindex');
    if (JSON.stringify(i.asins) !== JSON.stringify(want)) bad.push('asin order');
    if (i.prices.length) bad.push('prices ' + i.prices.join(','));
    if (BASE.includes('themuseshelf.com') && (i.tags.length !== 1 || i.tags[0] !== 'musesite-20')) bad.push('tags ' + i.tags.join(','));
    if (!bad.length) ok++;
    console.log((bad.length ? 'FAIL ' : 'OK   ') + s, r.status(), 'products', i.products, 'amazon', i.amazon, i.tags.join(','), bad.join('; '));
  }
  console.log('URLS_OK', ok, '/', SLUGS.length);
  if (BASE.includes('themuseshelf.com')) {
    for (const [first, second] of [['https://themuseshelf.com/christmas-dining-room-decor-ideas/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/neighbor-gifts-under-15/'],
      ['https://themuseshelf.com/last-minute-christmas-gifts-for-her/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/pantry-organization-that-looks-expensive/']]) {
      const q = await b.newPage(); await q.goto(first, { waitUntil: 'networkidle0' }); await sleep(1000);
      console.log('TAGFLOW', first.split('/')[3], 'pinterest ->', (await info(q)).tags.join(','));
      await q.goto(second, { waitUntil: 'networkidle0' }); await sleep(1000); console.log('TAGFLOW   then', second.split('/')[3], '->', (await info(q)).tags.join(','));
      await q.close();
    }
  }
  await b.close();
  fs.rmSync(dir, { recursive: true, force: true });
})();
