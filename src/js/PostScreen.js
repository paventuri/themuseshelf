window.asset = window.asset || function (p) {
  var m = window.__ASSET_MAP || {},
    id = m[p];
  return id && window.__resources && window.__resources[id] || '/' + p;
};
const DS = window.TheMuseShelfDesignSystem_f42d04;
function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
function PostScreen({
  post
}) {
  const cat = TMS.CATEGORIES.find(c => c.slug === post.category);
  const more = TMS.POSTS.filter(p => p.slug !== post.slug).sort((a, b) => (b.category === post.category) - (a.category === post.category)).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("article", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "post-head"
  }, /*#__PURE__*/React.createElement(DS.Label, {
    href: tmsPath(cat.slug)
  }, cat.name), /*#__PURE__*/React.createElement("h1", {
    className: "post-h1"
  }, post.title), /*#__PURE__*/React.createElement(DS.Label, {
    tone: "muted",
    as: "time",
    dateTime: post.date
  }, formatDate(post.date)), /*#__PURE__*/React.createElement(DS.Disclosure, {
    href: "/disclosure/",
    align: "center",
    style: {
      maxWidth: 440
    }
  }), /*#__PURE__*/React.createElement(DS.Divider, {
    variant: "oak",
    spacing: 4
  }), post.intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      maxWidth: 600,
      color: 'var(--text-secondary)'
    }
  }, post.intro)), post.placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420,
      margin: '0 auto 80px'
    }
  }, /*#__PURE__*/React.createElement(DS.Placeholder, {
    ratio: "2 / 3",
    label: "Pin coming soon",
    iconSrc: window.asset('assets/icon.png')
  })) : /*#__PURE__*/React.createElement("div", {
    className: "post-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-pin"
  }, /*#__PURE__*/React.createElement(DS.PinImage, {
    src: window.asset(post.image),
    alt: post.imageAlt,
    description: post.title + ' | The Muse Shelf. As an Amazon Associate I earn from qualifying purchases.',
    priority: true
  })), /*#__PURE__*/React.createElement("ol", {
    className: "products",
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    "aria-label": "Products in this edit"
  }, post.products.map((pr, i) => /*#__PURE__*/React.createElement("li", {
    key: pr.link
  }, /*#__PURE__*/React.createElement(DS.ProductCard, {
    number: i + 1,
    name: pr.name,
    note: pr.note,
    image: pr.image ? window.asset(pr.image) : undefined,
    imageAlt: pr.name,
    href: TMS.amazon(pr.link)
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement(DS.SectionHeader, {
    title: "More edits",
    linkLabel: 'All ' + cat.name,
    href: tmsPath(cat.slug),
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(DS.PostGrid, {
    columns: 3
  }, more.map(p => /*#__PURE__*/React.createElement(DS.PostCard, postCardProps(p))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(DS.NewsletterForm, null)));
}
Object.assign(window, {
  PostScreen,
  formatDate
});