
window.asset = window.asset || function (p) { var m = window.__ASSET_MAP || {}, id = m[p]; return (id && window.__resources && window.__resources[id]) || ('/' + p); };
const { Label: CLabel, PostCard: CPostCard, PostGrid: CPostGrid, Pagination, Divider } = window.TheMuseShelfDesignSystem_f42d04;

function CategoryScreen({ category }) {
  const [page, setPage] = React.useState(1);
  const posts = TMS.POSTS.filter((p) => p.category === category.slug);
  return (
    <main className="wrap">
      <header className="page-head">
        <CLabel>Category</CLabel>
        <h1 className="tms-h1">{category.name}</h1>
        <Divider variant="oak" />
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480 }}>{category.intro}</p>
      </header>
      {posts.length ? (
        <CPostGrid columns={4}>{posts.map((p) => <CPostCard {...postCardProps(p)} />)}</CPostGrid>
      ) : (
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 18, padding: '40px 0' }}>The first edit in this category is on its way.</p>
      )}
      <Pagination page={page} total={3} onChange={setPage} style={{ padding: '56px 0 var(--section-gap)' }} />
    </main>
  );
}

window.CategoryScreen = CategoryScreen;

