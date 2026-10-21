// QA: load pages, scroll to trigger lazy images, report broken images + overflow + $ amounts, save mobile screenshots.
// Usage (from ~/CamillaAmazon/site): NODE_PATH=tools/node_modules node site_qa.js <baseURL> <outdir> "" slug1 slug2 ...
const puppeteer = require('puppeteer-core');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const [base, outdir, ...routes] = process.argv.slice(2);
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new',
    userDataDir: process.env.HOME + '/.hermes/cache/scratch/chrome-tms-qa-' + Date.now(),
    args: ['--host-resolver-rules=MAP themuseshelf.com 185.199.108.153, MAP www.themuseshelf.com 185.199.108.153'] });
  for (const vp of [{ name: 'mobile', width: 390, height: 844, isMobile: true }, { name: 'desktop', width: 1440, height: 900 }]) {
    const p = await b.newPage(); await p.setViewport(vp);
    p.on('pageerror', e => console.log('PAGEERR', String(e).slice(0, 200)));
    p.on('response', r => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url().slice(0, 140)); });
    for (const r of routes) {
      const resp = await p.goto(base + '/' + r, { waitUntil: 'networkidle0' });
      const h = await p.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < h; y += 400) { await p.evaluate(y => window.scrollTo(0, y), y); await sleep(120); }
      await p.evaluate(() => window.scrollTo(0, 0)); await sleep(800);
      const info = await p.evaluate(() => {
        const imgs = [...document.images];
        return { title: document.title, imgs: imgs.length, broken: imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src')),
          overflow: document.documentElement.scrollWidth - window.innerWidth, products: document.querySelectorAll('ol.products li').length,
          prices: (document.body.innerText.match(/\$\d[\d.,]*/g) || []) };
      });
      console.log(vp.name, r || 'home', resp.status(), JSON.stringify(info));
      if (vp.name === 'mobile' && outdir) await p.screenshot({ path: outdir + '/' + (r || 'home') + '_mobile.png', fullPage: true });
    }
    await p.close();
  }
  await b.close();
})();
