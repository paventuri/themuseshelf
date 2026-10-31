// Batch 6 live check (read-only, throwaway headless profile, deleted after): every new post URL -> HTTP status, title,
// h1, product count, Amazon link count + tags (direct visit = musesite-20); then the channel-tag flow
// (utm_source=pinterest -> musepin-20 kept on the next page, instagram -> museig-20).
// cd ~/CamillaAmazon/site/tools && NODE_PATH=node_modules node batch6/live_check_b6.js
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const sleep = ms => new Promise(r => setTimeout(r, ms));
const SLUGS = ['christmas-gifts-for-women-that-look-expensive', 'christmas-coffee-table-decor', 'pottery-barn-stocking-dupes',
  'plaid-christmas-decor-ideas', 'cozy-gifts-under-25', 'christmas-bathroom-decor-ideas', 'christmas-garland-ideas',
  'christmas-gifts-for-grandma', 'brown-and-gold-christmas-tree-ideas', 'gift-wrapping-ideas-that-look-expensive',
  'gifts-for-sister-under-50', 'gifts-for-mother-in-law-that-look-expensive', 'hot-chocolate-bar-ideas',
  'amazon-home-finds-under-30', 'cozy-reading-nook-ideas'];
(async () => {
  const dir = process.env.HOME + '/.hermes/cache/scratch/chrome-b6live-' + Date.now();
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: dir });
  const info = async p => p.evaluate(() => {
    const a = [...document.querySelectorAll('a[href*="amazon.com"]')];
    return { title: document.title, h1: (document.querySelector('h1') || {}).innerText, products: document.querySelectorAll('ol.products li').length,
      amazon: a.length, tags: [...new Set(a.map(x => (x.href.match(/tag=([a-z0-9-]+)/) || [])[1]))],
      prices: (document.querySelector('main') || document.body).innerText.match(/\$\d[\d.,]*/g) || [],
      robots: (document.querySelector('meta[name=robots]') || {}).content || '', canonical: (document.querySelector('link[rel=canonical]') || {}).href || '' };
  });
  const p = await b.newPage();
  const out = [];
  for (const s of SLUGS) {
    const u = 'https://themuseshelf.com/' + s + '/?cb=' + Date.now();
    const r = await p.goto(u, { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(800);
    const i = await info(p); i.slug = s; i.status = r.status(); out.push(i);
    console.log(JSON.stringify(i));
  }
  // channel tag flow (fresh pages = fresh sessionStorage per tab)
  for (const [first, second] of [['https://themuseshelf.com/christmas-coffee-table-decor/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/cozy-reading-nook-ideas/'],
    ['https://themuseshelf.com/amazon-home-finds-under-30/?utm_source=instagram&utm_medium=dm', null]]) {
    const q = await b.newPage(); await q.goto(first, { waitUntil: 'networkidle0' }); await sleep(1000);
    console.log('TAGFLOW', first.split('/')[3], first.split('utm_source=')[1].split('&')[0], '->', (await info(q)).tags.join(','));
    if (second) { await q.goto(second, { waitUntil: 'networkidle0' }); await sleep(1000); console.log('TAGFLOW   then', second.split('/')[3], '->', (await info(q)).tags.join(',')); }
    await q.close();
  }
  await b.close();
  fs.rmSync(dir, { recursive: true, force: true });
})();
