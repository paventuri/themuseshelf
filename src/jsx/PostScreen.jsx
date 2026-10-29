
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

/* "1 hr 5 min" from minutes */
function fmtMin(m) { if (!m) return 'None'; const h = Math.floor(m / 60), r = m % 60; return (h ? h + ' hr' : '') + (h && r ? ' ' : '') + (r ? r + ' min' : ''); }

/* Recipe card (post.recipe): yield + times, ingredients, numbered steps, notes. id="recipe" is the jump target. */
function RecipeCard({ r }) {
  return (
    <section id="recipe" className="recipe-card" aria-labelledby="recipe-h">
      <p className="recipe-kicker">The recipe</p>
      <h2 id="recipe-h">{r.name}</h2>
      {r.summary && <p className="recipe-summary">{r.summary}</p>}
      <dl className="recipe-meta">
        <div><dt>{r.yieldTitle || 'Serves'}</dt><dd>{r.yieldLabel || r.yield}</dd></div>
        <div><dt>Prep</dt><dd>{fmtMin(r.prepMin)}</dd></div>
        <div><dt>Cook</dt><dd>{fmtMin(r.cookMin)}</dd></div>
        <div><dt>Total</dt><dd>{fmtMin(r.totalMin)}</dd></div>
      </dl>
      <div className="recipe-cols">
        <div>
          <h3>Ingredients</h3>
          <ul className="recipe-ing">{r.ingredients.map((x, i) => <li key={i}>{richText(x)}</li>)}</ul>
          {r.equipment && <><h3>You'll need</h3><ul className="recipe-ing">{r.equipment.map((x, i) => <li key={i}>{richText(x)}</li>)}</ul></>}
        </div>
        <div>
          <h3>Method</h3>
          <ol className="recipe-steps">{r.steps.map((x, i) => <li key={i}><span className="recipe-n" aria-hidden="true">{i + 1}</span><p>{richText(x)}</p></li>)}</ol>
        </div>
      </div>
      {r.notes && (
        <div className="recipe-notes">
          <h3>Notes</h3>
          {r.notes.map((x, i) => <p key={i}>{richText(x)}</p>)}
        </div>
      )}
    </section>
  );
}

/* "From our shop" (shop.themuseshelf.com): 2-4 of our own products under a post's Amazon list (TMS.SHOP.posts).
   Never replaces Amazon picks, links, tags or the disclosure. */
function ShopFromPost({ post }) {
  const S = TMS.SHOP; const hs = S && S.posts[post.slug];
  if (!hs) return null;
  const items = hs.filter((h) => S.items[h]).map((h) => ({ name: S.items[h].name, price: S.items[h].price, image: window.asset(S.items[h].image), href: S.link(h, post.slug) }));
  return <DS.ShopBlock items={items} moreHref={S.url + '/?utm_source=site&utm_medium=post&utm_campaign=' + post.slug} />;
}

/* Shop-only edit (post.shopOnly): our own products, our prices, same-tab links. No Amazon disclosure (no Amazon links). */
function ShopEditScreen({ post }) {
  const S = TMS.SHOP;
  const cat = TMS.CATEGORIES.find((c) => c.slug === post.category);
  const more = TMS.POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  return (
    <main>
      <article className="wrap">
        <header className="post-head">
          <DS.Label href={tmsPath(cat.slug)}>{cat.name}</DS.Label>
          <h1 className="post-h1">{post.title}</h1>
          <DS.Label tone="muted" as="time" dateTime={post.date}>{formatDate(post.date)}</DS.Label>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: 12, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 440, margin: 0, textAlign: 'center' }}>From our own shop. Every piece ships from the US.</p>
          <DS.Divider variant="oak" spacing={4} />
          {post.intro && <p style={{ fontSize: 17, lineHeight: 1.75, maxWidth: 600, color: 'var(--text-secondary)' }}>{post.intro}</p>}
        </header>
        <div className="post-body">
          <div className="post-pin">
            <DS.PinImage src={window.asset(post.image)} alt={post.imageAlt} description={post.title + ' | The Muse Shelf'} priority />
          </div>
          <div>
            <ol className="products" style={{ listStyle: 'none', margin: 0, padding: 0 }} aria-label="Gifts in this edit">
              {post.shopPicks.filter((x) => S.items[x.handle]).map((x, i) => { const it = S.items[x.handle]; return (
                <li key={x.handle}>
                  <DS.ShopProductCard number={i + 1} name={it.name} note={x.note} price={it.price} image={window.asset(it.image)} href={S.link(x.handle, post.shopCampaign || 'gift-edit')} />
                </li>
              ); })}
            </ol>
            {post.shopMore && <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}><DS.Button href={post.shopMore.href} variant="secondary">{post.shopMore.label}</DS.Button></div>}
          </div>
        </div>
      </article>
      <section className="wrap section">
        <DS.SectionHeader title="More gift guides" linkLabel={'All ' + cat.name} href={tmsPath(cat.slug)} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{more.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      {TMS.NEWSLETTER_ON && <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>}
    </main>
  );
}

/* Long-form guide: same header + sticky pin as a post, with advice sections and the product cards inside them.
   Recipe variant (post.recipe): Jump to recipe link, recipe card after the sections, then "What we used". */
function GuideScreen({ post }) {
  const cat = TMS.CATEGORIES.find((c) => c.slug === post.category);
  const byAsin = {}; post.products.forEach((pr) => { byAsin[pr.link] = pr; });
  const related = (post.related || []).map((s) => TMS.POSTS.find((p) => p.slug === s)).filter(Boolean).slice(0, 3);
  const jump = (e) => { const el = document.getElementById('recipe'); if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } };
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
          {post.recipe && <DS.Button variant="secondary" size="sm" href="#recipe" onClick={jump}>Jump to recipe</DS.Button>}
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
                {s.image && (
                  <figure className="guide-fig">
                    <img src={window.asset(s.image.src)} alt={s.image.alt} width={s.image.w} height={s.image.h} loading="lazy" decoding="async" />
                    {s.image.caption && <figcaption>{s.image.caption}</figcaption>}
                  </figure>
                )}
              </section>
            ))}
            {post.recipe && <RecipeCard r={post.recipe} />}
            {post.recipe && post.recipe.used && (
              <section>
                <h2>What we used</h2>
                <ol className="products" style={{ listStyle: 'none', padding: 0 }} aria-label="What we used">
                  {post.recipe.used.map((a) => { const pr = byAsin[a]; n += 1; return (
                    <li key={a}><DS.ProductCard number={n} name={pr.name} note={pr.note} image={pr.image ? window.asset(pr.image) : undefined} imageAlt={pr.name} href={TMS.amazon(pr.link)} /></li>
                  ); })}
                </ol>
              </section>
            )}
            {post.faq && (
              <section>
                <h2>Questions people ask</h2>
                {post.faq.map((f, i) => <div key={i}><h3>{f.q}</h3><p>{richText(f.a)}</p></div>)}
              </section>
            )}
            {post.note && <p className="guide-note">{post.note}</p>}
          </div>
        </div>
        <ShopFromPost post={post} />
      </article>
      <section className="wrap section">
        <DS.SectionHeader title="Related edits" linkLabel={'All ' + cat.name} href={tmsPath(cat.slug)} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{related.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      {TMS.NEWSLETTER_ON && <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>}
    </main>
  );
}

function PostScreen({ post }) {
  if (post.shopOnly) return <ShopEditScreen post={post} />;
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
        <ShopFromPost post={post} />
      </article>
      <section className="wrap section">
        <DS.SectionHeader title="More edits" linkLabel={'All ' + cat.name} href={tmsPath(cat.slug)} style={{ marginBottom: 32 }} />
        <DS.PostGrid columns={3}>{more.map((p) => <DS.PostCard {...postCardProps(p)} />)}</DS.PostGrid>
      </section>
      {TMS.NEWSLETTER_ON && <section className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
        <DS.NewsletterForm />
      </section>}
    </main>
  );
}

Object.assign(window, { PostScreen, GuideScreen, ShopEditScreen, ShopFromPost, RecipeCard, formatDate });

