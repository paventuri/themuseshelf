
window.asset = window.asset || function (p) { var m = window.__ASSET_MAP || {}, id = m[p]; return (id && window.__resources && window.__resources[id]) || ('/' + p); };
const ADS = window.TheMuseShelfDesignSystem_f42d04;

const PAGES = {
  about: { title: 'About | The Muse Shelf', description: 'Who curates The Muse Shelf, and why: affordable Amazon home and beauty finds that look expensive.', C: () => <AboutScreen /> },
  disclosure: { title: 'Affiliate Disclosure | The Muse Shelf', description: 'The Muse Shelf participates in the Amazon Services LLC Associates Program.', C: () => <DisclosureScreen /> },
  privacy: { title: 'Privacy Policy | The Muse Shelf', description: 'How The Muse Shelf handles analytics, cookies, affiliate links and newsletter data.', C: () => <PrivacyScreen /> },
  contact: { title: 'Contact | The Muse Shelf', description: 'Get in touch with The Muse Shelf at hello.themuseshelf@gmail.com.', C: () => <ContactScreen /> },
};

function resolve(slug) {
  if (!slug) return { key: 'home', title: 'The Muse Shelf | Home & Beauty Finds That Look Expensive, for Less', description: 'Curated Amazon home decor and beauty finds in an organic-modern, quiet-luxury style. Finds that look expensive, prices that don\'t.', type: 'website', image: 'assets/pins/pin01_home_expensive.jpg', el: <HomeScreen /> };
  const cat = TMS.CATEGORIES.find((c) => c.slug === slug);
  if (cat) return { key: slug, title: cat.name + ' | The Muse Shelf', description: cat.intro, type: 'website', el: <CategoryScreen category={cat} /> };
  const post = TMS.POSTS.find((p) => p.slug === slug);
  if (post) return { key: slug, title: post.title + ' | The Muse Shelf', description: post.description || post.intro || post.title, type: 'article', image: post.image, published: post.date, el: <PostScreen post={post} /> };
  const pg = PAGES[slug];
  if (pg) return { key: slug, title: pg.title, description: pg.description, type: 'website', el: pg.C() };
  return { key: '404', title: 'Not found | The Muse Shelf', el: <main className="wrap page-head"><h1 className="tms-h1">This shelf is empty.</h1><ADS.Button href="/">Back home</ADS.Button></main> };
}

function setMeta(r, slug) {
  document.title = r.title;
  const url = TMS.SITE.url + '/' + (slug || '');
  const set = (attr, key, val) => { let m = document.head.querySelector(`meta[${attr}="${key}"]`); if (!val) { m && m.remove(); return; } if (!m) { m = document.createElement('meta'); m.setAttribute(attr, key); document.head.appendChild(m); } m.setAttribute('content', val); };
  set('name', 'description', r.description);
  set('property', 'og:title', r.title);
  set('property', 'og:description', r.description);
  set('property', 'og:type', r.type);
  set('property', 'og:url', url);
  set('property', 'og:image', r.image ? TMS.SITE.url + '/' + r.image : null);
  set('property', 'article:published_time', r.published ? r.published + 'T08:00:00-05:00' : null);
  let c = document.head.querySelector('link[rel=canonical]'); if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); } c.href = url;
}

function SearchOverlay({ onClose }) {
  const [q, setQ] = React.useState('');
  const hits = q.trim() ? TMS.POSTS.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())) : [];
  React.useEffect(() => { const k = (e) => e.key === 'Escape' && onClose(); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, []);
  return (
    <div className="search" role="dialog" aria-label="Search">
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} aria-label="Close search" style={{ background: 'none', border: 0, cursor: 'pointer', padding: 8, color: 'var(--espresso)' }}><ADS.Icon name="x" size={24} /></button>
        </div>
        <ADS.Input autoFocus placeholder="Search the edits" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search the edits" inputStyle={{ height: 56, fontSize: 18, background: 'transparent', border: 0, borderBottom: '1px solid var(--espresso)', borderRadius: 0, padding: 0 }} />
        <div className="stack" style={{ marginTop: 24 }}>
          {hits.map((p) => (
            <a key={p.slug} href={'/' + p.slug} onClick={onClose} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--stone)', textDecoration: 'none', color: 'var(--espresso)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>{p.title}</span>
              <ADS.Label>{TMS.CATEGORIES.find((c) => c.slug === p.category).name}</ADS.Label>
            </a>
          ))}
          {q && !hits.length && <p className="tms-accent" style={{ fontSize: 18 }}>No edits match that yet.</p>}
        </div>
      </div>
    </div>
  );
}

function App() {
  const read = () => location.pathname.replace(/^\/+|\/+$/g, '').replace(/\/index\.html$/, '');
  const [slug, setSlug] = React.useState(read());
  const [search, setSearch] = React.useState(false);
  React.useEffect(() => { const h = () => { if (location.hash === '#latest') return; setSlug(read()); window.scrollTo(0, 0); }; addEventListener('hashchange', h); return () => removeEventListener('hashchange', h); }, []);
  const r = resolve(slug);
  React.useEffect(() => setMeta(r, slug), [slug]);
  const nav = (it) => { location.href = '/' + it.href.replace(/^[#/]+/, ''); };
  return (
    <div data-screen-label={r.key}>
      <ADS.SiteHeader iconSrc={window.asset('assets/icon.png')} current={'/' + slug} onNavigate={nav} onSearch={() => setSearch(true)} />
      {r.el}
      <ADS.SiteFooter iconSrc={window.asset('assets/icon.png')} onNavigate={nav} />
      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </div>
  );
}

if (!window.__tmsMounted) { window.__tmsMounted = true; ReactDOM.createRoot(document.getElementById('site-root')).render(<App />); }

