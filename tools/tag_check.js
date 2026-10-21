const puppeteer = require('puppeteer-core'); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', userDataDir: process.env.HOME + '/.hermes/cache/scratch/chrome-tag-' + Date.now() });
  const tags = async p => [...new Set(await p.evaluate(() => [...document.querySelectorAll('a[href*="amazon.com"]')].map(a => (a.href.match(/tag=([a-z0-9-]+)/) || [])[1])))];
  for (const [first, second] of [['https://themuseshelf.com/neutral-christmas-decor-from-amazon/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/gifts-for-mom-under-50/'], ['https://themuseshelf.com/clean-girl-amazon-must-haves/?utm_source=pinterest&utm_medium=organic', 'https://themuseshelf.com/boho-bedroom-amazon-finds/'], ['https://themuseshelf.com/gift-ideas-for-her-under-50/?utm_source=instagram&utm_medium=dm', null], ['https://themuseshelf.com/amazon-closet-organization-that-looks-luxe/', null], ['https://themuseshelf.com/kitchen-counter-decor-that-looks-expensive/', null]]) {
    const p = await b.newPage(); await p.goto(first, { waitUntil: 'networkidle0' }); await sleep(1500);
    console.log(first.split('/')[3], first.includes('utm_source') ? first.split('utm_source=')[1].split('&')[0] : 'direct', '->', (await tags(p)).join(','));
    if (second) { await p.goto(second, { waitUntil: 'networkidle0' }); await sleep(1500); console.log('  then', second.split('/')[3], '->', (await tags(p)).join(',')); }
    await p.close();
  }
  await b.close();
})();
