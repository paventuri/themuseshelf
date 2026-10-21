const puppeteer = require('puppeteer-core'); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: process.env.HOME + '/.hermes/cache/scratch/chrome-live-' + Date.now(),
    args: ['--host-resolver-rules=MAP themuseshelf.com 185.199.108.153, MAP www.themuseshelf.com 185.199.108.153'] });
  const p = await b.newPage(); await p.setViewport({ width: 390, height: 844, isMobile: true });
  p.on('pageerror', e => console.log('PAGEERR', String(e).slice(0, 300))); p.on('console', m => console.log('CONSOLE', m.type(), m.text().slice(0, 300)));
  p.on('requestfailed', r => console.log('FAILED', r.url().slice(0, 120), r.failure() && r.failure().errorText));
  p.on('response', r => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url().slice(0, 120)); });
  for (const u of ['http://themuseshelf.com/', 'http://themuseshelf.com/amazon-home-finds-that-look-expensive',
    'http://themuseshelf.com/anthropologie-dupes-on-amazon', 'http://themuseshelf.com/kitchen-counter-decor-that-looks-expensive']) {
    await p.goto(u, { waitUntil: 'networkidle0' }); await sleep(2000);
    console.log(u, '->', p.url(), '| root children:', await p.evaluate(() => (document.querySelector('#site-root') || {}).children?.length), '| text:', (await p.evaluate(() => document.body.innerText)).slice(0, 120).replace(/\n/g, ' / '));
  }
  await p.screenshot({ path: process.env.HOME + '/CamillaAmazon/site/tools/live.png' });
  await b.close();
})();
