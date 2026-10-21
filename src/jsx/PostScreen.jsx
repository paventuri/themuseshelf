
window.asset = window.asset || function (p) { var m = window.__ASSET_MAP || {}, id = m[p]; return (id && window.__resources && window.__resources[id]) || ('/' + p); };
const DS = window.TheMuseShelfDesignSystem_f42d04;

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function PostScreen({ post }) {
  const cat = TMS.CATEGORIES.find((c) => c.slug === post.category);
  const more = TMS.POSTS.filter((p) => p.slug !== post.slug).sort((a, b) => (b.category === post.category) - (a.category === post.category)).slice(0, 3);
  return (
    <main>
      <article className="wrap">
        <header className="post-head">
          <DS.Label href={'/' + cat.slug}>{cat.name}</DS.Label>
          <h1 className="post-h1">{post.title}</h1>
          <DS.Label tone="muted" as="time" dateTime={post.date}>{formatDate(post.date)}</DS.Label>
          <DS.Disclosure href="/disclosure" align="center" style={{ maxWidth: 440 }} />
          <DS.Divider variant="oak" spacing={4} />
          {post.intro && <p style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 600, color: 'var(--text-secondary)' }}>{post.intro}</p>}
        </header>
        {post.placeholder ? (
          <div style={{ maxWidth: 420, margin: '0 auto 80px' }}>
            <DS.Placeholder ratio="2 / 3" label="Pin coming soon" iconSrc={window.asset('assets/icon.png')} />
          </div>
        ) : (
          <div className="post-body">
            <div className="post-pin">
              <DS.PinImage src={window.asset(post.image)} alt={post.imageAlt} description={post.title + ' | The Muse Shelf. As an Amazon Associate I earn from qualifying purchases.'} priority />
            </div>
            <ol className="products" style={{ listStyle: 'none', margin: 0, padding: 0 }} aria-label="Products in this edit">
              {post.products.map((pr, i) => (
                <li key={pr.link}>
                  <DS.ProductCard number={i + 1} name={pr.name} note={pr.note} image={pr.image ? window.asset(pr.image) : undefined} imageAlt={pr.name} href={TMS.amazon(pr.link)} />
                </li>
              ))}
            </ol>
          </div>
        )}
      </article>
      <section className="wrap section">
        <DS.SectionHeader title="More edits" linkLabel={'All ' + cat.name} href={'/' + cat.slug} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{more.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>
    </main>
  );
}

Object.assign(window, { PostScreen, formatDate });

