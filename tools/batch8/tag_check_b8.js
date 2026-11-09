// Batch 8 tag check (read-only): channel tag kept across pages. cd ~/CamillaAmazon/site/tools && NODE_PATH=node_modules node batch8/tag_check_b8.js
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const dir = process.env.HOME + '/.hermes/cache/scratch/chrome-tag-' + Date.now();
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: dir });
  const tags = async p => [...new Set(await p.evaluate(() => [...document.querySelectorAll('a[href*="amazon.com"]')].map(a => (a.href.match(/tag=([a-z0-9-]+)/) || [])[1])))];
  for (const [first, second] of [['https://themuseshelf.com/coworker-gifts-under-25/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/old-money-christmas-decor/'],
    ['https://themuseshelf.com/nightstand-decor-ideas/?utm_source=pinterest&utm_medium=organic', null],
    ['https://themuseshelf.com/pink-christmas-decor-ideas/?utm_source=instagram&utm_medium=dm', null], ['https://themuseshelf.com/neighbor-gifts-under-15/', null]]) {
    const p = await b.newPage(); await p.goto(first, { waitUntil: 'networkidle0' }); await sleep(1500);
    console.log(first.split('/')[3], first.includes('utm_source') ? first.split('utm_source=')[1].split('&')[0] : 'direct', '->', (await tags(p)).join(','));
    if (second) { await p.goto(second, { waitUntil: 'networkidle0' }); await sleep(1500); console.log('  then', second.split('/')[3], '->', (await tags(p)).join(',')); }
    await p.close();
  }
  await b.close();
  fs.rmSync(dir, { recursive: true, force: true });
})();
