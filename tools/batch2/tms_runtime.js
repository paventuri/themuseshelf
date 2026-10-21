// Which POSTS does the page use at runtime? Prints window.TMS.POSTS length + first slugs.
const puppeteer = require('puppeteer-core');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new',
    userDataDir: process.env.HOME + '/.hermes/cache/scratch/chrome-tms-rt-' + Date.now() });
  const p = await b.newPage(); await p.goto(process.argv[2], { waitUntil: 'networkidle0' });
  console.log(JSON.stringify(await p.evaluate(() => ({ n: TMS.POSTS.length, first: TMS.POSTS.slice(0, 3).map(x => x.slug),
    hero: (document.querySelector('h1') || {}).innerText }))));
  await b.close();
})();
