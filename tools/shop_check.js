// Check the "Shop" nav link, "From our shop" blocks and the shop-only Gift Edit post (local dist or live).
// Usage: NODE_PATH=node_modules node shop_check.js <base e.g. http://127.0.0.1:8765 | http://themuseshelf.com> <outdir> [slug ...]
// Live: themuseshelf.com is mapped to GitHub Pages (185.199.108.153). Throwaway Chrome profile, deleted after.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const [base, out, ...slugs] = process.argv.slice(2);
const GIFT = 'the-muse-shelf-gift-edit';
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const prof = process.env.HOME + '/.hermes/cache/scratch/chrome-shopcheck-' + Date.now();
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: prof,
    args: ['--host-resolver-rules=MAP themuseshelf.com 185.199.108.153, MAP www.themuseshelf.com 185.199.108.153'] });
  const p = await b.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e).slice(0, 200))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 200)); });
  const scroll = async () => { await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); }); await sleep(800); };
  const res = {};
  // nav (desktop 1280 + 1200 overflow check)
  await p.setViewport({ width: 1200, height: 900 });
  await p.goto(base + '/', { waitUntil: 'networkidle0' }); await sleep(800);
  res.nav = await p.evaluate(() => {
    const q = s => [...document.querySelectorAll(s)].filter(a => a.href.includes('shop.themuseshelf.com'));
    const hdr = q('header nav a'), ftr = q('footer a'); const nav = document.querySelector('.tms-hdr__nav');
    const hb = document.querySelector('header > div').getBoundingClientRect(); const nb = nav.getBoundingClientRect();
    return { header: hdr.map(a => [a.textContent, a.href, a.target || 'same-tab']), footer: ftr.map(a => [a.textContent, a.href, a.target || 'same-tab']),
      navRight: Math.round(nb.right), headerRight: Math.round(hb.right), docOverflow: document.documentElement.scrollWidth > innerWidth,
      giftOnHome: !!document.querySelector('a[href="/' + 'the-muse-shelf-gift-edit/"]') };
  }, GIFT);
  await p.screenshot({ path: path.join(out, 'home_header_1200.png'), clip: { x: 0, y: 0, width: 1200, height: 120 } });
  await p.goto(base + '/gift-guides/', { waitUntil: 'networkidle0' }); await sleep(500);
  res.giftInCategory = await p.evaluate(() => !!document.querySelector('a[href="/the-muse-shelf-gift-edit/"]'));
  for (const s of slugs) {
    await p.setViewport({ width: 1280, height: 900 });
    await p.goto(base + '/' + s + '/', { waitUntil: 'networkidle0' }); await sleep(600); await scroll();
    res[s] = await p.evaluate(() => {
      const block = document.querySelector('.tms-shop'); const imgs = [...document.querySelectorAll('.tms-shop img, .tms-shop-item img')];
      const amazon = [...document.querySelectorAll('a[href*="amazon.com"]')];
      return { block: block ? block.querySelector('h2').textContent + ' / ' + block.querySelector('p').textContent : null,
        cards: [...document.querySelectorAll('.tms-shop__card, .tms-shop-item')].length,
        brokenImgs: imgs.filter(i => !i.complete || !i.naturalWidth).length,
        prices: [...document.querySelectorAll('.tms-shop__price')].map(e => e.textContent),
        shopLinks: [...new Set([...document.querySelectorAll('a[href*="shop.themuseshelf.com/products/"]')].map(a => a.href))],
        sameTab: [...document.querySelectorAll('a[href*="shop.themuseshelf.com"]')].every(a => !a.target),
        collections: [...document.querySelectorAll('a[href*="/collections/"]')].map(a => a.href),
        amazonLinks: amazon.length, amazonTags: [...new Set(amazon.map(a => (a.href.match(/tag=([\w-]+)/) || [])[1]))],
        disclosure: /As an Amazon Associate/.test(document.body.innerText) };
    });
    if (s === GIFT) {
      await p.screenshot({ path: path.join(out, 'gift_edit_desktop.png'), fullPage: true });
      await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
      await p.reload({ waitUntil: 'networkidle0' }); await sleep(600); await scroll();
      await p.screenshot({ path: path.join(out, 'gift_edit_mobile.png'), fullPage: true });
      res[s].mobileOverflow = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    } else {
      const el = await p.$('.tms-shop'); if (el) await el.screenshot({ path: path.join(out, s + '_block.png') });
    }
  }
  res.errors = errs;
  console.log(JSON.stringify(res, null, 1));
  await b.close(); fs.rmSync(prof, { recursive: true, force: true });
})();
