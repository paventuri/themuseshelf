window.asset = window.asset || function (p) {
  var m = window.__ASSET_MAP || {},
    id = m[p];
  return id && window.__resources && window.__resources[id] || '/' + p;
};
const {
  Button,
  Label,
  PostCard,
  PostGrid,
  CategoryTile,
  SectionHeader,
  NewsletterForm,
  PinImage
} = window.TheMuseShelfDesignSystem_f42d04;
function postCardProps(p) {
  const cat = TMS.CATEGORIES.find(c => c.slug === p.category);
  return {
    key: p.slug,
    title: p.title,
    category: cat && cat.name,
    image: p.image ? window.asset(p.image) : undefined,
    imageAlt: p.imageAlt,
    href: '/' + p.slug,
    placeholderIcon: window.asset('assets/icon.png')
  };
}
function HomeScreen() {
  const latest = TMS.POSTS.slice(0, 8);
  const feature = TMS.POSTS.find(p => !p.placeholder);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "The weekly edit"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__h"
  }, "Finds that look expensive. Prices that don't."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      maxWidth: 460,
      color: 'var(--text-secondary)'
    }
  }, "Home and beauty edits from Amazon, picked for how they look in a real room. Stone, linen, ceramic and warm wood."), /*#__PURE__*/React.createElement(Button, {
    href: "#latest",
    size: "lg",
    style: {
      marginTop: 8
    }
  }, "Browse the edits")), feature && /*#__PURE__*/React.createElement("div", {
    className: "hero__pin",
    onClick: e => {
      if (!e.target.closest('a')) location.href = '/' + feature.slug;
    },
    style: {
      maxWidth: 360,
      justifySelf: 'end',
      width: '100%',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PinImage, {
    src: window.asset(feature.image),
    alt: feature.imageAlt,
    priority: true
  })))), /*#__PURE__*/React.createElement("section", {
    id: "latest",
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Latest edits",
    linkLabel: "View all",
    href: "/home-finds",
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(PostGrid, {
    columns: 4
  }, latest.map(p => /*#__PURE__*/React.createElement(PostCard, postCardProps(p))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section",
    style: {
      borderTop: '1px solid var(--stone)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Shop by category",
    align: "center",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cats"
  }, TMS.CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.slug,
    label: c.name,
    image: c.image ? window.asset(c.image) : undefined,
    imageAlt: c.name + ' edits',
    href: '/' + c.slug,
    placeholderIcon: window.asset('assets/icon.png')
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(NewsletterForm, null)));
}
Object.assign(window, {
  HomeScreen,
  postCardProps
});