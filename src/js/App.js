window.asset = window.asset || function (p) {
  var m = window.__ASSET_MAP || {},
    id = m[p];
  return id && window.__resources && window.__resources[id] || '/' + p;
};
const ADS = window.TheMuseShelfDesignSystem_f42d04;
const PAGES = {
  about: {
    title: 'About | The Muse Shelf',
    description: 'Who curates The Muse Shelf, and why: affordable Amazon home and beauty finds that look expensive.',
    C: () => /*#__PURE__*/React.createElement(AboutScreen, null)
  },
  disclosure: {
    title: 'Affiliate Disclosure | The Muse Shelf',
    description: 'The Muse Shelf participates in the Amazon Services LLC Associates Program.',
    C: () => /*#__PURE__*/React.createElement(DisclosureScreen, null)
  },
  privacy: {
    title: 'Privacy Policy | The Muse Shelf',
    description: 'How The Muse Shelf handles analytics, cookies, affiliate links and newsletter data.',
    C: () => /*#__PURE__*/React.createElement(PrivacyScreen, null)
  },
  contact: {
    title: 'Contact | The Muse Shelf',
    description: 'Get in touch with The Muse Shelf at hello.themuseshelf@gmail.com.',
    C: () => /*#__PURE__*/React.createElement(ContactScreen, null)
  }
};

/* <title>: keep it under ~60 chars with the keyword first. Short titles get the brand suffix; long ones drop it;
   titles over 60 keep the part before the colon. post.seoTitle overrides. */
const SUFFIX = ' | The Muse Shelf';
function seoTitle(post) {
  if (post.seoTitle) return post.seoTitle;
  const t = post.title;
  if ((t + SUFFIX).length <= 60) return t + SUFFIX;
  if (t.length <= 60) return t;
  const head = t.split(':')[0].trim();
  return (head + SUFFIX).length <= 60 ? head + SUFFIX : head;
}
function resolve(slug) {
  if (!slug) return {
    key: 'home',
    kind: 'home',
    title: 'The Muse Shelf | Home & Beauty Finds That Look Expensive',
    description: 'Curated Amazon home decor and beauty finds in an organic-modern, quiet-luxury style. Finds that look expensive, prices that don\'t.',
    type: 'website',
    image: 'assets/pins/pin01_home_expensive.jpg',
    el: /*#__PURE__*/React.createElement(HomeScreen, null)
  };
  const cat = TMS.CATEGORIES.find(c => c.slug === slug);
  if (cat) return {
    key: slug,
    kind: 'category',
    cat,
    title: cat.name + SUFFIX,
    description: cat.intro,
    type: 'website',
    image: cat.image || null,
    el: /*#__PURE__*/React.createElement(CategoryScreen, {
      category: cat
    })
  };
  const post = TMS.POSTS.find(p => p.slug === slug);
  if (post) return {
    key: slug,
    kind: 'post',
    post,
    title: seoTitle(post),
    description: post.description || post.intro || post.title,
    type: 'article',
    image: post.image,
    published: post.date,
    el: /*#__PURE__*/React.createElement(PostScreen, {
      post: post
    })
  };
  const pg = PAGES[slug];
  if (pg) return {
    key: slug,
    kind: 'page',
    title: pg.title,
    description: pg.description,
    type: 'website',
    el: pg.C()
  };
  return {
    key: '404',
    kind: '404',
    title: 'Not found | The Muse Shelf',
    el: /*#__PURE__*/React.createElement("main", {
      className: "wrap page-head"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "tms-h1"
    }, "This shelf is empty."), /*#__PURE__*/React.createElement(ADS.Button, {
      href: "/"
    }, "Back home"))
  };
}

/* schema.org JSON-LD. Posts: Article + BreadcrumbList + ItemList of product NAMES only (no Product/Offer: the site
   shows no prices). Home: Organization + WebSite. Categories: CollectionPage + BreadcrumbList. */
function structuredData(r, url) {
  const S = TMS.SITE,
    home = S.url + '/';
  const logo = {
    '@type': 'ImageObject',
    url: S.url + '/assets/logo-stacked.png',
    width: 2400,
    height: 1600
  };
  const org = {
    '@type': 'Organization',
    '@id': home + '#organization',
    name: S.name,
    url: home,
    logo,
    email: S.email,
    sameAs: ['https://www.pinterest.com/themuseshelf/', 'https://www.instagram.com/themuseshelf/', 'https://www.tiktok.com/@themuseshelf']
  };
  const crumbs = items => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it[0],
      item: S.url + it[1]
    }))
  });
  if (r.kind === 'home') return [org, {
    '@type': 'WebSite',
    '@id': home + '#website',
    name: S.name,
    url: home,
    description: r.description,
    inLanguage: 'en-US',
    publisher: {
      '@id': home + '#organization'
    }
  }];
  if (r.kind === 'category') return [{
    '@type': 'CollectionPage',
    '@id': url + '#webpage',
    url,
    name: r.cat.name,
    description: r.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: S.name,
      url: home
    }
  }, crumbs([['Home', '/'], [r.cat.name, tmsPath(r.cat.slug)]])];
  if (r.kind === 'post') {
    const p = r.post,
      cat = TMS.CATEGORIES.find(c => c.slug === p.category);
    const brand = {
      '@type': 'Organization',
      name: S.name,
      url: home,
      logo
    };
    const crumbList = crumbs([['Home', '/']].concat(cat ? [[cat.name, tmsPath(cat.slug)]] : [], [[p.title, tmsPath(p.slug)]]));
    if (p.recipe) {
      /* Recipe posts: Recipe + BreadcrumbList. No aggregateRating/review: we never show or invent ratings. */
      const rc = p.recipe,
        iso = m => !m ? 'PT0M' : 'PT' + (Math.floor(m / 60) ? Math.floor(m / 60) + 'H' : '') + (m % 60 ? m % 60 + 'M' : '');
      const plain = s => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1');
      return [{
        '@type': 'Recipe',
        '@id': url + '#recipe',
        mainEntityOfPage: url,
        url,
        name: rc.name,
        description: r.description,
        image: [S.url + '/' + p.image].concat((rc.images || []).map(i => S.url + '/' + i)),
        author: brand,
        publisher: brand,
        datePublished: p.date + 'T08:00:00-05:00',
        dateModified: (p.updated || p.date) + 'T08:00:00-05:00',
        prepTime: iso(rc.prepMin),
        cookTime: iso(rc.cookMin),
        totalTime: iso(rc.totalMin),
        recipeYield: rc.yield,
        recipeCategory: rc.category,
        recipeCuisine: rc.cuisine,
        keywords: rc.keywords,
        recipeIngredient: rc.ingredients.map(plain),
        recipeInstructions: rc.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          text: plain(s),
          url: url + '#recipe'
        })),
        inLanguage: 'en-US'
      }, crumbList];
    }
    return [{
      '@type': 'Article',
      '@id': url + '#article',
      mainEntityOfPage: url,
      url,
      headline: p.title.slice(0, 110),
      description: r.description,
      image: [S.url + '/' + p.image],
      datePublished: p.date + 'T08:00:00-05:00',
      dateModified: (p.updated || p.date) + 'T08:00:00-05:00',
      author: brand,
      publisher: brand,
      articleSection: cat ? cat.name : undefined,
      inLanguage: 'en-US'
    }, crumbList, {
      '@type': 'ItemList',
      name: p.title,
      numberOfItems: (p.products || []).length,
      itemListElement: (p.products || []).map((pr, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: pr.name
      }))
    }];
  }
  return null;
}
function setMeta(r, slug) {
  document.title = r.title;
  const url = TMS.SITE.url + tmsPath(slug);
  const is404 = r.kind === '404';
  const set = (attr, key, val) => {
    let m = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!val) {
      m && m.remove();
      return;
    }
    if (!m) {
      m = document.createElement('meta');
      m.setAttribute(attr, key);
      document.head.appendChild(m);
    }
    m.setAttribute('content', val);
  };
  const image = r.image || (is404 ? null : 'assets/logo-stacked.png');
  set('name', 'description', r.description);
  set('name', 'robots', is404 ? 'noindex' : null);
  set('property', 'og:title', r.title);
  set('property', 'og:description', r.description);
  set('property', 'og:type', r.type);
  set('property', 'og:url', is404 ? null : url);
  set('property', 'og:image', image ? TMS.SITE.url + '/' + image : null);
  set('name', 'twitter:card', image ? 'summary_large_image' : null);
  set('property', 'article:published_time', r.published ? r.published + 'T08:00:00-05:00' : null);
  let c = document.head.querySelector('link[rel=canonical]');
  if (is404) {
    c && c.remove();
  } else {
    if (!c) {
      c = document.createElement('link');
      c.rel = 'canonical';
      document.head.appendChild(c);
    }
    c.href = url;
  }
  let ld = document.getElementById('tms-ld');
  const data = is404 ? null : structuredData(r, url);
  if (!data) {
    ld && ld.remove();
  } else {
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'tms-ld';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': data
    });
  }
}
function SearchOverlay({
  onClose
}) {
  const [q, setQ] = React.useState('');
  const hits = q.trim() ? TMS.POSTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase())) : [];
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "search",
    role: "dialog",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close search",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 8,
      color: 'var(--espresso)'
    }
  }, /*#__PURE__*/React.createElement(ADS.Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement(ADS.Input, {
    autoFocus: true,
    placeholder: "Search the edits",
    value: q,
    onChange: e => setQ(e.target.value),
    "aria-label": "Search the edits",
    inputStyle: {
      height: 56,
      fontSize: 18,
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--espresso)',
      borderRadius: 0,
      padding: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      marginTop: 24
    }
  }, hits.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: tmsPath(p.slug),
    onClick: onClose,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--stone)',
      textDecoration: 'none',
      color: 'var(--espresso)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20
    }
  }, p.title), /*#__PURE__*/React.createElement(ADS.Label, null, TMS.CATEGORIES.find(c => c.slug === p.category).name))), q && !hits.length && /*#__PURE__*/React.createElement("p", {
    className: "tms-accent",
    style: {
      fontSize: 18
    }
  }, "No edits match that yet."))));
}
function App() {
  const read = () => location.pathname.replace(/^\/+|\/+$/g, '').replace(/\/index\.html$/, '');
  const [slug, setSlug] = React.useState(read());
  const [search, setSearch] = React.useState(false);
  React.useEffect(() => {
    const h = () => {
      if (location.hash === '#latest') return;
      setSlug(read());
      window.scrollTo(0, 0);
    };
    addEventListener('hashchange', h);
    return () => removeEventListener('hashchange', h);
  }, []);
  const r = resolve(slug);
  React.useEffect(() => setMeta(r, slug), [slug]);
  const nav = it => {
    location.href = '/' + it.href.replace(/^[#/]+/, '');
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": r.key
  }, /*#__PURE__*/React.createElement(ADS.SiteHeader, {
    iconSrc: window.asset('assets/icon.png'),
    current: tmsPath(slug),
    onNavigate: nav,
    onSearch: () => setSearch(true)
  }), r.el, /*#__PURE__*/React.createElement(ADS.SiteFooter, {
    iconSrc: window.asset('assets/icon.png'),
    onNavigate: nav
  }), search && /*#__PURE__*/React.createElement(SearchOverlay, {
    onClose: () => setSearch(false)
  }));
}
if (!window.__tmsMounted) {
  window.__tmsMounted = true;
  ReactDOM.createRoot(document.getElementById('site-root')).render(/*#__PURE__*/React.createElement(App, null));
}