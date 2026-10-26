// Build the static site: compile JSX, prerender every route with headless Chrome, write dist/.
// Usage: node tools/build.js            (from ~/CamillaAmazon/site)
//        node tools/build.js --qa       (also writes desktop + mobile screenshots to tools/qa/)
const fs = require('fs'), path = require('path'), http = require('http'), vm = require('vm');
const babel = require('@babel/core');
const puppeteer = require('puppeteer-core');

const SITE = path.resolve(__dirname, '..'), SRC = path.join(SITE, 'src'), DIST = path.join(SITE, 'dist');
const ORIGIN = 'https://themuseshelf.com';
const QA = process.argv.includes('--qa');
const sleep = ms => new Promise(r => setTimeout(r, ms));

// 1. compile screens
const order = JSON.parse(fs.readFileSync(path.join(SRC, 'jsx/order.json'), 'utf8'));
for (const n of order) {
  const out = babel.transformSync(fs.readFileSync(path.join(SRC, 'jsx', n + '.jsx'), 'utf8'), {
    presets: [[require.resolve('@babel/preset-react'), { runtime: 'classic' }]], filename: n + '.jsx', compact: false });
  fs.writeFileSync(path.join(SRC, 'js', n + '.js'), out.code);
}

// 2. routes from content.js
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(SRC, 'js/content.js'), 'utf8'), ctx);
const TMS = ctx.window.TMS;
const routes = [''].concat(TMS.CATEGORIES.map(c => c.slug), TMS.POSTS.filter(p => !p.placeholder).map(p => p.slug),
  ['about', 'disclosure', 'privacy', 'contact']);

// 3. static server with SPA fallback
const MIME = { '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.html': 'text/html' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  const f = path.join(SRC, u);
  if (path.extname(u) && fs.existsSync(f) && f.startsWith(SRC)) { res.writeHead(200, { 'content-type': MIME[path.extname(u)] || 'application/octet-stream' }); return fs.createReadStream(f).pipe(res); }
  if (path.extname(u)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': 'text/html' }); res.end(fs.readFileSync(path.join(SRC, 'shell.html')));
});

(async () => {
  await new Promise(r => server.listen(0, r));
  const LOCAL = 'http://localhost:' + server.address().port;
  // Version /js/ URLs with a content hash: Googlebot's renderer caches scripts by URL, and a stale content.js made new
  // posts render as 404 + noindex (Search Console "Excluded by 'noindex' tag", Oct 2026).
  const crypto = require('crypto'), JSV = {};
  for (const f of fs.readdirSync(path.join(SRC, 'js'))) if (f.endsWith('.js'))
    JSV[f] = crypto.createHash('sha1').update(fs.readFileSync(path.join(SRC, 'js', f))).digest('hex').slice(0, 10);
  const verJs = html => html.replace(/(src="\/js\/)([\w.-]+\.js)"/g, (m, a, f) => JSV[f] ? `${a}${f}?v=${JSV[f]}"` : m);
  const fix = html => verJs(html.split(LOCAL).join(ORIGIN).split(encodeURIComponent(LOCAL)).join(encodeURIComponent(ORIGIN)));
  fs.rmSync(DIST, { recursive: true, force: true }); fs.mkdirSync(DIST, { recursive: true });
  for (const d of ['js', 'fonts', 'assets']) fs.cpSync(path.join(SRC, d), path.join(DIST, d), { recursive: true });
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new',
    userDataDir: path.join(process.env.HOME, '.hermes/cache/scratch/chrome-tms-build'), args: ['--no-first-run'] });
  const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 900 });
  // Stub Google Analytics while prerendering: no fake hits from localhost and gtag.js can't inject extra tags
  // into the captured DOM (dist must keep exactly the one loader from shell.html).
  await page.setRequestInterception(true);
  page.on('request', req => /googletagmanager\.com|google-analytics\.com/.test(req.url())
    ? req.respond({ status: 200, contentType: 'text/javascript', body: '' }) : req.continue());
  const errors = []; let cur = ''; page.on('pageerror', e => errors.push(cur + ': ' + String(e).slice(0, 160))); page.on('console', m => { if (m.type() === 'error') errors.push(cur + ': ' + m.text().slice(0, 160)); });
  if (QA) fs.mkdirSync(path.join(__dirname, 'qa'), { recursive: true });
  const render = async (route) => {
    cur = '/' + route;
    // trailing slash = the URL GitHub Pages serves (/slug -> 301 -> /slug/), so location-based URLs (Pin It) match
    await page.goto(LOCAL + '/' + route + (route && !route.startsWith('this-page') ? '/' : ''), { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.querySelector('#site-root') && document.querySelector('#site-root').children.length > 0, { timeout: 15000 });
    await sleep(300);
    return '<!DOCTYPE html>\n' + fix(await page.evaluate(() => document.documentElement.outerHTML));
  };
  for (const r of routes.concat(['shop'])) {  // shop = link-in-bio page: prerendered, noindex, not in the sitemap
    const html = await render(r);
    const dir = path.join(DIST, r); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    if (QA) {
      const name = r || 'home';
      await page.screenshot({ path: path.join(__dirname, 'qa', name + '_desktop.png'), fullPage: true });
      await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true });
      await sleep(400); await page.screenshot({ path: path.join(__dirname, 'qa', name + '_mobile.png'), fullPage: true });
      await page.setViewport({ width: 1440, height: 900 });
    }
    console.log('rendered /' + r);
  }
  fs.writeFileSync(path.join(DIST, '404.html'), await render('this-page-does-not-exist'));
  // lastmod: never in the future (local date). Posts = updated/date; home + categories = newest post in them; pages = build date.
  const today = new Date().toLocaleDateString('en-CA');
  const clamp = d => (d && d < today ? d : today);
  const real = TMS.POSTS.filter(p => !p.placeholder);
  const newest = ps => ps.map(p => p.updated || p.date).sort().pop();
  const lastmod = r => {
    const post = real.find(p => p.slug === r); if (post) return clamp(post.updated || post.date);
    if (!r) return clamp(newest(real));
    if (TMS.CATEGORIES.some(c => c.slug === r)) return clamp(newest(real.filter(p => p.category === r)));
    return today;
  };
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    routes.map(r => `  <url><loc>${ORIGIN}/${r}${r ? '/' : ''}</loc><lastmod>${lastmod(r)}</lastmod></url>`).join('\n') + '\n</urlset>\n');
  fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${ORIGIN}/sitemap.xml\n`);
  fs.writeFileSync(path.join(DIST, 'CNAME'), 'themuseshelf.com\n');
  fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
  await browser.close(); server.close();
  console.log('done', routes.length, 'routes', errors.length ? 'ERRORS: ' + [...new Set(errors)].join(' | ') : 'no console errors');
})();
