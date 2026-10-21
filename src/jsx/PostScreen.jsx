
window.asset = window.asset || function (p) { var m = window.__ASSET_MAP || {}, id = m[p]; return (id && window.__resources && window.__resources[id]) || ('/' + p); };
const DS = window.TheMuseShelfDesignSystem_f42d04;

function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/* Inline markup in guide copy: [text](/slug/) links and **bold** lead-ins */
function richText(s) {
  const out = []; const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*/g; let last = 0, m, k = 0;
  while ((m = re.exec(s))) { if (m.index > last) out.push(s.slice(last, m.index)); out.push(m[3] ? <strong key={k++} style={{ fontWeight: 500 }}>{m[3]}</strong> : <a key={k++} href={m[2]}>{m[1]}</a>); last = re.lastIndex; }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

/* Long-form guide: same header + sticky pin as a post, with advice sections and the product cards inside them. */
function GuideScreen({ post }) {
  const cat = TMS.CATEGORIES.find((c) => c.slug === post.category);
  const byAsin = {}; post.products.forEach((pr) => { byAsin[pr.link] = pr; });
  const related = (post.related || []).map((s) => TMS.POSTS.find((p) => p.slug === s)).filter(Boolean).slice(0, 3);
  let n = 0;
  return (
    <main>
      <article className="wrap">
        <header className="post-head">
          <DS.Label href={tmsPath(cat.slug)}>{cat.name}</DS.Label>
          <h1 className="post-h1">{post.title}</h1>
          <DS.Label tone="muted">By {post.byline || 'The Muse Shelf'} · Updated <time dateTime={post.updated || post.date}>{formatDate(post.updated || post.date)}</time></DS.Label>
          <DS.Disclosure href="/disclosure/" align="center" style={{ maxWidth: 440 }} />
          <DS.Divider variant="oak" spacing={4} />
          {post.intro && <p style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 600, color: 'var(--text-secondary)' }}>{post.intro}</p>}
        </header>
        <div className="post-body">
          <div className="post-pin">
            <DS.PinImage src={window.asset(post.image)} alt={post.imageAlt} description={post.title + ' | The Muse Shelf. As an Amazon Associate I earn from qualifying purchases.'} priority />
          </div>
          <div className="guide">
            {post.sections.map((s, si) => (
              <section key={si}>
                <h2>{s.h}</h2>
                {(s.body || []).map((x, i) => <p key={i}>{richText(x)}</p>)}
                {s.list && <ul>{s.list.map((x, i) => <li key={i}>{richText(x)}</li>)}</ul>}
                {s.table && (
                  <div className="guide-table"><table>
                    <thead><tr>{s.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{s.table.rows.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>)}</tbody>
                  </table></div>
                )}
                {s.picks && (
                  <ol className="products" style={{ listStyle: 'none', padding: 0 }} aria-label={s.h}>
                    {s.picks.map((a) => { const pr = byAsin[a]; n += 1; return (
                      <li key={a}><DS.ProductCard number={n} name={pr.name} note={pr.note} image={pr.image ? window.asset(pr.image) : undefined} imageAlt={pr.name} href={TMS.amazon(pr.link)} /></li>
                    ); })}
                  </ol>
                )}
                {(s.after || []).map((x, i) => <p key={'a' + i}>{richText(x)}</p>)}
              </section>
            ))}
            {post.faq && (
              <section>
                <h2>Questions people ask</h2>
                {post.faq.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{richText(f.a)}</p></div>)}
              </section>
            )}
            {post.note && <p className="guide-note">{post.note}</p>}
          </div>
        </div>
      </article>
      <section className="wrap section">
        <DS.SectionHeader title="Related edits" linkLabel={'All ' + cat.name} href={tmsPath(cat.slug)} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{related.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>
    </main>
  );
}

function PostScreen({ post }) {
  if (post.guide) return <GuideScreen post={post} />;
  const guides = TMS.POSTS.filter((g) => g.guide && (g.related || []).includes(post.slug));
  const cat = TMS.CATEGORIES.find((c) => c.slug === post.category);
  const more = TMS.POSTS.filter((p) => p.slug !== post.slug).sort((a, b) => (b.category === post.category) - (a.category === post.category)).slice(0, 3);
  return (
    <main>
      <article className="wrap">
        <header className="post-head">
          <DS.Label href={tmsPath(cat.slug)}>{cat.name}</DS.Label>
          <h1 className="post-h1">{post.title}</h1>
          <DS.Label tone="muted" as="time" dateTime={post.date}>{formatDate(post.date)}</DS.Label>
          <DS.Disclosure href="/disclosure/" align="center" style={{ maxWidth: 440 }} />
          <DS.Divider variant="oak" spacing={4} />
          {post.intro && <p style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 600, color: 'var(--text-secondary)' }}>{post.intro}</p>}
          {guides.map((g) => <p key={g.slug} className="tms-accent" style={{ fontSize: 16 }}>Read the guide: <a href={tmsPath(g.slug)}>{g.title}</a></p>)}
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
        <DS.SectionHeader title="More edits" linkLabel={'All ' + cat.name} href={tmsPath(cat.slug)} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{more.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>
    </main>
  );
}

Object.assign(window, { PostScreen, GuideScreen, formatDate });

