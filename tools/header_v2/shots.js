// Header mockup screenshots: node shots.js <outdir>  (servers: before 8771, split 8772, center 8773)
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: path.join(process.env.TMPDIR || '/tmp', 'chrome-hdr-shots'), args: ['--no-sandbox'] });
  const p = await b.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const sets = process.env.SETS ? JSON.parse(process.env.SETS) : [['before', 8771], ['split', 8772], ['center', 8773]];
  for (const [name, port] of sets) {
    for (const [w, h, dpr, tag] of [[1440, 900, 2, 'd1440'], [1920, 1000, 1, 'd1920'], [1180, 820, 2, 'd1180'], [390, 844, 3, 'm']]) {
      await p.setViewport({ width: w, height: h, deviceScaleFactor: dpr });
      await p.goto(`http://127.0.0.1:${port}/christmas-entryway-table-decor/`, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 600));
      await p.screenshot({ path: `${out}/${name}_${tag}.png`, clip: { x: 0, y: 0, width: w, height: tag === 'm' ? 420 : 260 } });
      const info = await p.evaluate(() => {
        const hdr = document.querySelector('header');
        const vis = el => el && getComputedStyle(el).display !== 'none' && el.getBoundingClientRect().width > 0;
        const brand = document.querySelector('.tms-hdr__brand');
        const nav = document.querySelector('.tms-hdr__nav');
        const bb = brand && brand.querySelector('a, img') ? brand.getBoundingClientRect() : null;
        const links = [...document.querySelectorAll('header nav[aria-label=Main] a')].filter(vis).map(a => a.textContent);
        // overlap check: wordmark right edge vs first visible link left edge
        const wm = brand ? [...brand.querySelectorAll('*')].reduce((m, e) => Math.max(m, e.getBoundingClientRect().right), 0) : 0;
        const first = [...document.querySelectorAll('header nav[aria-label=Main] a')].filter(vis)[0];
        return { links, burger: vis(document.querySelector('.tms-hdr__burger')), wmRight: Math.round(wm), firstLinkLeft: first ? Math.round(first.getBoundingClientRect().left) : null, overflowX: document.documentElement.scrollWidth > innerWidth };
      });
      console.log(name, tag, JSON.stringify(info));
      if (tag === 'd1440' || tag === 'm') {
        const btn = await p.$('.tms-hdr__burger');
        const shown = btn && await p.evaluate(el => getComputedStyle(el).display !== 'none', btn);
        if (shown) {
          await btn.click();
          await new Promise(r => setTimeout(r, 400));
          await p.screenshot({ path: `${out}/${name}_${tag}_open.png`, clip: { x: 0, y: 0, width: w, height: tag === 'm' ? 760 : 340 } });
        }
      }
    }
  }
  console.log('errors', JSON.stringify(errs.slice(0, 5)));
  await b.close();
})();
