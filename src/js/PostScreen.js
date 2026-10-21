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

/* Inline markup in guide copy: [text](/slug/) links and **bold** lead-ins */
function richText(s) {
  const out = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*/g;
  let last = 0,
    m,
    k = 0;
  while (m = re.exec(s)) {
    if (m.index > last) out.push(s.slice(last, m.index));
    out.push(m[3] ? /*#__PURE__*/React.createElement("strong", {
      key: k++,
      style: {
        fontWeight: 500
      }
    }, m[3]) : /*#__PURE__*/React.createElement("a", {
      key: k++,
      href: m[2]
    }, m[1]));
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

/* "1 hr 5 min" from minutes */
function fmtMin(m) {
  if (!m) return 'None';
  const h = Math.floor(m / 60),
    r = m % 60;
  return (h ? h + ' hr' : '') + (h && r ? ' ' : '') + (r ? r + ' min' : '');
}

/* Recipe card (post.recipe): yield + times, ingredients, numbered steps, notes. id="recipe" is the jump target. */
function RecipeCard({
  r
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "recipe",
    className: "recipe-card",
    "aria-labelledby": "recipe-h"
  }, /*#__PURE__*/React.createElement("p", {
    className: "recipe-kicker"
  }, "The recipe"), /*#__PURE__*/React.createElement("h2", {
    id: "recipe-h"
  }, r.name), r.summary && /*#__PURE__*/React.createElement("p", {
    className: "recipe-summary"
  }, r.summary), /*#__PURE__*/React.createElement("dl", {
    className: "recipe-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, r.yieldTitle || 'Serves'), /*#__PURE__*/React.createElement("dd", null, r.yieldLabel || r.yield)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Prep"), /*#__PURE__*/React.createElement("dd", null, fmtMin(r.prepMin))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Cook"), /*#__PURE__*/React.createElement("dd", null, fmtMin(r.cookMin))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Total"), /*#__PURE__*/React.createElement("dd", null, fmtMin(r.totalMin)))), /*#__PURE__*/React.createElement("div", {
    className: "recipe-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Ingredients"), /*#__PURE__*/React.createElement("ul", {
    className: "recipe-ing"
  }, r.ingredients.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, richText(x)))), r.equipment && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "You'll need"), /*#__PURE__*/React.createElement("ul", {
    className: "recipe-ing"
  }, r.equipment.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, richText(x)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Method"), /*#__PURE__*/React.createElement("ol", {
    className: "recipe-steps"
  }, r.steps.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "recipe-n",
    "aria-hidden": "true"
  }, i + 1), /*#__PURE__*/React.createElement("p", null, richText(x))))))), r.notes && /*#__PURE__*/React.createElement("div", {
    className: "recipe-notes"
  }, /*#__PURE__*/React.createElement("h3", null, "Notes"), r.notes.map((x, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, richText(x)))));
}

/* Long-form guide: same header + sticky pin as a post, with advice sections and the product cards inside them.
   Recipe variant (post.recipe): Jump to recipe link, recipe card after the sections, then "What we used". */
function GuideScreen({
  post
}) {
  const cat = TMS.CATEGORIES.find(c => c.slug === post.category);
  const byAsin = {};
  post.products.forEach(pr => {
    byAsin[pr.link] = pr;
  });
  const related = (post.related || []).map(s => TMS.POSTS.find(p => p.slug === s)).filter(Boolean).slice(0, 3);
  const jump = e => {
    const el = document.getElementById('recipe');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  let n = 0;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("article", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("header", {
    className: "post-head"
  }, /*#__PURE__*/React.createElement(DS.Label, {
    href: tmsPath(cat.slug)
  }, cat.name), /*#__PURE__*/React.createElement("h1", {
    className: "post-h1"
  }, post.title), /*#__PURE__*/React.createElement(DS.Label, {
    tone: "muted"
  }, "By ", post.byline || 'The Muse Shelf', " \xB7 Updated ", /*#__PURE__*/React.createElement("time", {
    dateTime: post.updated || post.date
  }, formatDate(post.updated || post.date))), /*#__PURE__*/React.createElement(DS.Disclosure, {
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
  }, post.intro), post.recipe && /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    size: "sm",
    href: "#recipe",
    onClick: jump
  }, "Jump to recipe")), /*#__PURE__*/React.createElement("div", {
    className: "post-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-pin"
  }, /*#__PURE__*/React.createElement(DS.PinImage, {
    src: window.asset(post.image),
    alt: post.imageAlt,
    description: post.title + ' | The Muse Shelf. As an Amazon Associate I earn from qualifying purchases.',
    priority: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "guide"
  }, post.sections.map((s, si) => /*#__PURE__*/React.createElement("section", {
    key: si
  }, /*#__PURE__*/React.createElement("h2", null, s.h), (s.body || []).map((x, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, richText(x))), s.list && /*#__PURE__*/React.createElement("ul", null, s.list.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, richText(x)))), s.table && /*#__PURE__*/React.createElement("div", {
    className: "guide-table"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, s.table.head.map(h => /*#__PURE__*/React.createElement("th", {
    key: h
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, s.table.rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci
  }, c))))))), s.picks && /*#__PURE__*/React.createElement("ol", {
    className: "products",
    style: {
      listStyle: 'none',
      padding: 0
    },
    "aria-label": s.h
  }, s.picks.map(a => {
    const pr = byAsin[a];
    n += 1;
    return /*#__PURE__*/React.createElement("li", {
      key: a
    }, /*#__PURE__*/React.createElement(DS.ProductCard, {
      number: n,
      name: pr.name,
      note: pr.note,
      image: pr.image ? window.asset(pr.image) : undefined,
      imageAlt: pr.name,
      href: TMS.amazon(pr.link)
    }));
  })), (s.after || []).map((x, i) => /*#__PURE__*/React.createElement("p", {
    key: 'a' + i
  }, richText(x))), s.image && /*#__PURE__*/React.createElement("figure", {
    className: "guide-fig"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.asset(s.image.src),
    alt: s.image.alt,
    width: s.image.w,
    height: s.image.h,
    loading: "lazy",
    decoding: "async"
  }), s.image.caption && /*#__PURE__*/React.createElement("figcaption", null, s.image.caption)))), post.recipe && /*#__PURE__*/React.createElement(RecipeCard, {
    r: post.recipe
  }), post.recipe && post.recipe.used && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "What we used"), /*#__PURE__*/React.createElement("ol", {
    className: "products",
    style: {
      listStyle: 'none',
      padding: 0
    },
    "aria-label": "What we used"
  }, post.recipe.used.map(a => {
    const pr = byAsin[a];
    n += 1;
    return /*#__PURE__*/React.createElement("li", {
      key: a
    }, /*#__PURE__*/React.createElement(DS.ProductCard, {
      number: n,
      name: pr.name,
      note: pr.note,
      image: pr.image ? window.asset(pr.image) : undefined,
      imageAlt: pr.name,
      href: TMS.amazon(pr.link)
    }));
  }))), post.faq && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Questions people ask"), post.faq.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h3", null, f.q), /*#__PURE__*/React.createElement("p", null, richText(f.a))))), post.note && /*#__PURE__*/React.createElement("p", {
    className: "guide-note"
  }, post.note)))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement(DS.SectionHeader, {
    title: "Related edits",
    linkLabel: 'All ' + cat.name,
    href: tmsPath(cat.slug),
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(DS.PostGrid, {
    columns: 3
  }, related.map(p => /*#__PURE__*/React.createElement(DS.PostCard, postCardProps(p))))), TMS.NEWSLETTER_ON && /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(DS.NewsletterForm, null)));
}
function PostScreen({
  post
}) {
  if (post.guide) return /*#__PURE__*/React.createElement(GuideScreen, {
    post: post
  });
  const guides = TMS.POSTS.filter(g => g.guide && (g.related || []).includes(post.slug));
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
  }, post.intro), guides.map(g => /*#__PURE__*/React.createElement("p", {
    key: g.slug,
    className: "tms-accent",
    style: {
      fontSize: 16
    }
  }, "Read the guide: ", /*#__PURE__*/React.createElement("a", {
    href: tmsPath(g.slug)
  }, g.title)))), post.placeholder ? /*#__PURE__*/React.createElement("div", {
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
  }, more.map(p => /*#__PURE__*/React.createElement(DS.PostCard, postCardProps(p))))), TMS.NEWSLETTER_ON && /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(DS.NewsletterForm, null)));
}
Object.assign(window, {
  PostScreen,
  GuideScreen,
  RecipeCard,
  formatDate
});