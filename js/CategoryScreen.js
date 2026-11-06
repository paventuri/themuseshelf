window.asset = window.asset || function (p) {
  var m = window.__ASSET_MAP || {},
    id = m[p];
  return id && window.__resources && window.__resources[id] || '/' + p;
};
const {
  Label: CLabel,
  PostCard: CPostCard,
  PostGrid: CPostGrid,
  Pagination,
  Divider
} = window.TheMuseShelfDesignSystem_f42d04;
function CategoryScreen({
  category
}) {
  const [page, setPage] = React.useState(1);
  const posts = TMS.POSTS.filter(p => p.category === category.slug);
  return /*#__PURE__*/React.createElement("main", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement(CLabel, null, "Category"), /*#__PURE__*/React.createElement("h1", {
    className: "tms-h1"
  }, category.name), /*#__PURE__*/React.createElement(Divider, {
    variant: "oak"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      maxWidth: 480
    }
  }, category.intro)), posts.length ? /*#__PURE__*/React.createElement(CPostGrid, {
    columns: 4
  }, posts.map(p => /*#__PURE__*/React.createElement(CPostCard, postCardProps(p)))) : /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: 18,
      padding: '40px 0'
    }
  }, "The first edit in this category is on its way."), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 3,
    onChange: setPage,
    style: {
      padding: '56px 0 var(--section-gap)'
    }
  }));
}
window.CategoryScreen = CategoryScreen;