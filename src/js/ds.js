/* @ds-bundle: {"format":4,"namespace":"TheMuseShelfDesignSystem_f42d04","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CategoryTile","sourcePath":"components/content/CategoryTile.jsx"},{"name":"DISCLOSURE_TEXT","sourcePath":"components/content/Disclosure.jsx"},{"name":"Disclosure","sourcePath":"components/content/Disclosure.jsx"},{"name":"PinImage","sourcePath":"components/content/PinImage.jsx"},{"name":"Placeholder","sourcePath":"components/content/Placeholder.jsx"},{"name":"PostCard","sourcePath":"components/content/PostCard.jsx"},{"name":"PostGrid","sourcePath":"components/content/PostGrid.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SOCIAL_LINKS","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"LEGAL_LINKS","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"NAV_ITEMS","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"ba20a191debe","components/content/CategoryTile.jsx":"4f3e2fcda579","components/content/Disclosure.jsx":"e33763c75a82","components/content/PinImage.jsx":"c58b62fe7bf8","components/content/Placeholder.jsx":"665d3d87334c","components/content/PostCard.jsx":"0e73a7cb4386","components/content/PostGrid.jsx":"492b4a795949","components/content/ProductCard.jsx":"2a5f9b5f70c9","components/content/SectionHeader.jsx":"ac90a8cc620c","components/core/Button.jsx":"c331934baebd","components/core/Divider.jsx":"f0a7d195abec","components/core/Icon.jsx":"8246f3051daf","components/core/Label.jsx":"6fecdb0a48a0","components/core/Tag.jsx":"0529cca8f5e8","components/forms/Input.jsx":"6a0286aafcef","components/forms/NewsletterForm.jsx":"2b6f523b0f37","components/navigation/Pagination.jsx":"94dd4e7ec96f","components/navigation/SiteFooter.jsx":"386d4251ec43","components/navigation/SiteHeader.jsx":"e9ff5c807dd1","ui_kits/website/App.jsx":"7ded839198cf","ui_kits/website/CategoryScreen.jsx":"d92f385e7ef6","ui_kits/website/HomeScreen.jsx":"9987a7893666","ui_kits/website/PageScreens.jsx":"9228dea53a8c","ui_kits/website/PostScreen.jsx":"1516c2f277ea","ui_kits/website/content/site-content.js":"b3a1cb0c0dfe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheMuseShelfDesignSystem_f42d04 = window.TheMuseShelfDesignSystem_f42d04 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'horizontal',
  iconSrc = '/assets/icon.png',
  size = 36,
  tone = 'espresso',
  href,
  onClick,
  style
}) {
  const color = tone === 'inverse' ? 'var(--linen)' : 'var(--espresso)';
  const icon = variant !== 'wordmark' && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    width: Math.round(size * 1.075),
    height: size,
    style: {
      height: size,
      width: 'auto',
      display: 'block',
      filter: tone === 'inverse' ? 'invert(95%) sepia(6%) saturate(200%)' : undefined
    }
  });
  const word = variant !== 'icon' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      letterSpacing: 'var(--tracking-wordmark)',
      color,
      lineHeight: 1,
      fontSize: variant === 'stacked' ? Math.max(12, Math.round(size * 0.22)) : Math.max(12, Math.round(size * 0.38)),
      marginRight: '-0.3em'
    }
  }, "The Muse Shelf");
  const Wrap = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Wrap, {
    href: href,
    onClick: onClick,
    "aria-label": "The Muse Shelf",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      color,
      flexDirection: variant === 'stacked' ? 'column' : 'row',
      gap: variant === 'stacked' ? Math.round(size * 0.22) : 12,
      ...style
    }
  }, icon, word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Disclosure.jsx
try { (() => {
const DISCLOSURE_TEXT = 'This post contains affiliate links. As an Amazon Associate I earn from qualifying purchases.';
function Disclosure({
  children,
  href,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0,
      textAlign: align,
      ...style
    }
  }, children || DISCLOSURE_TEXT, href && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--muted-olive)'
    }
  }, "Read our disclosure"), "."));
}
Object.assign(__ds_scope, { DISCLOSURE_TEXT, Disclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Disclosure.jsx", error: String((e && e.message) || e) }); }

// components/content/PinImage.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `.tms-pin__save{opacity:0;transform:translateY(-4px);transition:opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)}
.tms-pin:hover .tms-pin__save,.tms-pin:focus-within .tms-pin__save{opacity:1;transform:none}
@media(hover:none){.tms-pin__save{opacity:1;transform:none}}
.tms-pin__save:hover{background:#AD081B!important}`;
function PinImage({
  src,
  alt,
  pageUrl,
  description,
  priority,
  style
}) {
  injectCSS('tms-pin-css', CSS);
  const abs = u => {
    try {
      return new URL(u, typeof location !== 'undefined' ? location.href : 'https://themuseshelf.com').href;
    } catch (e) {
      return u;
    }
  };
  const save = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(abs(pageUrl || (typeof location !== 'undefined' ? location.href : ''))) + '&media=' + encodeURIComponent(abs(src)) + '&description=' + encodeURIComponent(description || alt || '');
  return /*#__PURE__*/React.createElement("figure", {
    className: "tms-pin",
    style: {
      position: 'relative',
      margin: 0,
      aspectRatio: '2 / 3',
      background: 'var(--white)',
      border: '1px solid var(--stone)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    width: "1000",
    height: "1500",
    loading: priority ? 'eager' : 'lazy',
    fetchpriority: priority ? 'high' : undefined,
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "tms-pin__save",
    href: save,
    target: "_blank",
    rel: "noopener",
    "data-pin-do": "buttonPin",
    "aria-label": "Save to Pinterest",
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      height: 36,
      padding: '0 16px',
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--pinterest-red)',
      color: '#fff',
      borderRadius: 'var(--radius-2)',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: '0.02em',
      boxShadow: 'var(--shadow-lift)'
    }
  }, "Save"));
}
Object.assign(__ds_scope, { PinImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PinImage.jsx", error: String((e && e.message) || e) }); }

// components/content/Placeholder.jsx
try { (() => {
function Placeholder({
  ratio = '2 / 3',
  label,
  iconSrc,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--linen-deep)',
      border: '1px solid var(--stone)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      ...style
    }
  }, iconSrc && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: '28%',
      maxWidth: 72,
      opacity: 0.22
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--espresso-60)'
    }
  }, label));
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/content/CategoryTile.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = '.tms-cat img{transition:transform var(--dur-slow) var(--ease-out)}.tms-cat:hover img{transform:scale(1.03)}.tms-cat:hover .tms-cat__l{border-color:var(--pale-oak)!important}';
function CategoryTile({
  label,
  image,
  imageAlt,
  href = '#',
  onClick,
  placeholderIcon,
  style
}) {
  injectCSS('tms-cat-css', CSS);
  return /*#__PURE__*/React.createElement("a", {
    className: "tms-cat",
    href: href,
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textDecoration: 'none',
      color: 'var(--espresso)',
      minWidth: 0,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      background: 'var(--white)',
      border: '1px solid var(--stone)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || label,
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    ratio: "4 / 5",
    iconSrc: placeholderIcon
  }), /*#__PURE__*/React.createElement("span", {
    className: "tms-cat__l",
    style: {
      alignSelf: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      paddingBottom: 4,
      borderBottom: '1px solid transparent',
      textAlign: 'center',
      marginRight: '-0.2em'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/content/PostCard.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = '.tms-postcard img{transition:opacity var(--dur-base) var(--ease-out)}.tms-postcard:hover img{opacity:.88}.tms-postcard:hover .tms-postcard__t{text-decoration:underline;text-decoration-color:var(--pale-oak);text-decoration-thickness:1px;text-underline-offset:4px}';
function PostCard({
  title,
  category,
  image,
  imageAlt,
  href = '#',
  onClick,
  size = 'md',
  placeholderIcon,
  style
}) {
  injectCSS('tms-postcard-css', CSS);
  return /*#__PURE__*/React.createElement("a", {
    className: "tms-postcard",
    href: href,
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textDecoration: 'none',
      color: 'var(--espresso)',
      minWidth: 0,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '2 / 3',
      background: 'var(--white)',
      overflow: 'hidden',
      border: '1px solid var(--stone)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || title,
    loading: "lazy",
    decoding: "async",
    width: "1000",
    height: "1500",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    ratio: "2 / 3",
    iconSrc: placeholderIcon
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--muted-olive)'
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    className: "tms-postcard__t",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: size === 'lg' ? 'clamp(20px, 2.4vw, 26px)' : 'clamp(17px, 2vw, 21px)',
      lineHeight: 1.2,
      margin: 0,
      textWrap: 'balance'
    }
  }, title)));
}
Object.assign(__ds_scope, { PostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PostGrid.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function PostGrid({
  columns = 4,
  children,
  style
}) {
  injectCSS('tms-postgrid-css-' + columns, `.tms-postgrid--${columns}{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 16px}
@media(min-width:720px){.tms-postgrid--${columns}{grid-template-columns:repeat(3,minmax(0,1fr));gap:48px 24px}}
@media(min-width:1080px){.tms-postgrid--${columns}{grid-template-columns:repeat(${columns},minmax(0,1fr));gap:56px 32px}}`);
  return /*#__PURE__*/React.createElement("div", {
    className: 'tms-postgrid--' + columns,
    style: style
  }, children);
}
Object.assign(__ds_scope, { PostGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  kicker,
  linkLabel,
  href,
  onLinkClick,
  align = 'split',
  style
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: center ? 'center' : 'flex-end',
      justifyContent: center ? 'center' : 'space-between',
      flexDirection: center ? 'column' : 'row',
      gap: 16,
      paddingBottom: center ? 0 : 16,
      borderBottom: center ? 0 : '1px solid var(--stone)',
      textAlign: center ? 'center' : 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: center ? 'center' : 'flex-start'
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--muted-olive)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px, 4vw, 40px)',
      lineHeight: 1.1,
      margin: 0
    }
  }, title), center && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--pale-oak)',
      marginTop: 10
    }
  })), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: onLinkClick,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--espresso)',
      textDecorationColor: 'var(--pale-oak)',
      textUnderlineOffset: 6,
      whiteSpace: 'nowrap'
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  variant = 'hairline',
  align = 'center',
  spacing = 0,
  style
}) {
  if (variant === 'oak') {
    return /*#__PURE__*/React.createElement("div", {
      role: "separator",
      style: {
        width: 48,
        height: 1,
        background: 'var(--pale-oak)',
        margin: spacing + 'px ' + (align === 'center' ? 'auto' : '0'),
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--stone)',
      margin: spacing + 'px 0',
      width: '100%',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Lucide icons (lucide-static@0.460.0, ISC). Inlined so components work without path config.
const ICONS = {
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />",
  "x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />",
  "arrow-right": "<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" /><path d=\"M19 12H5\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "external-link": "<path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" /><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" /><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\" />"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  label,
  style,
  ...rest
}) {
  const body = ICONS[name];
  if (!body) return null;
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: label ? 'img' : undefined,
    'aria-label': label,
    'aria-hidden': label ? undefined : true,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `.tms-btn{transition:background-color var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)}
.tms-btn--primary:hover{background:var(--button-primary-bg-hover)!important}
.tms-btn--secondary:hover{background:var(--button-secondary-bg-hover)!important;border-color:var(--espresso)!important}
.tms-btn--olive:hover{background:var(--muted-olive)!important;color:var(--linen)!important}
.tms-btn--text:hover{text-decoration-color:var(--espresso)!important}
.tms-btn:active{transform:translateY(1px)}
.tms-btn[aria-disabled=true]{opacity:.4;pointer-events:none}`;
const SIZES = {
  sm: {
    height: 36,
    padding: '0 16px',
    fontSize: 10
  },
  md: {
    height: 46,
    padding: '0 24px',
    fontSize: 11
  },
  lg: {
    height: 54,
    padding: '0 32px',
    fontSize: 12
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  sponsored,
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  injectCSS('tms-btn-css', CSS);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: variant === 'text' ? 'auto' : s.height,
    padding: variant === 'text' ? '4px 0' : s.padding,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: s.fontSize,
    letterSpacing: 'var(--tracking-button)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-1)',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: 'var(--button-primary-bg)',
      color: 'var(--button-primary-fg)',
      borderColor: 'var(--button-primary-bg)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--button-secondary-fg)',
      borderColor: 'var(--button-secondary-border)'
    },
    olive: {
      background: 'transparent',
      color: 'var(--muted-olive)',
      borderColor: 'var(--muted-olive)'
    },
    text: {
      background: 'transparent',
      color: 'var(--espresso)',
      borderColor: 'transparent',
      textDecoration: 'underline',
      textDecorationColor: 'var(--pale-oak)',
      textUnderlineOffset: 6,
      textDecorationThickness: 1
    }
  };
  const Tag = href ? 'a' : 'button';
  const linkProps = href ? {
    href,
    target: external || sponsored ? '_blank' : undefined,
    rel: sponsored ? 'sponsored nofollow noopener' : external ? 'noopener' : undefined
  } : {
    type: rest.type || 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: 'tms-btn tms-btn--' + variant,
    "aria-disabled": disabled || undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, linkProps, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `.tms-product-wrap{container-type:inline-size}
.tms-product{display:grid;grid-template-columns:minmax(0,38%) minmax(0,1fr);gap:16px;align-items:center}
@container (min-width:600px){.tms-product{grid-template-columns:240px minmax(0,1fr);gap:40px}}
.tms-product__img img{transition:transform var(--dur-slow) var(--ease-out)}.tms-product__img:hover img{transform:scale(1.03)}`;
function pad(n) {
  return String(n).padStart(2, '0');
}
function ProductCard({
  number,
  name,
  note,
  image,
  imageAlt,
  href,
  cta = 'Shop on Amazon',
  style
}) {
  injectCSS('tms-product-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: "tms-product-wrap"
  }, /*#__PURE__*/React.createElement("article", {
    className: "tms-product",
    style: {
      background: 'var(--white)',
      border: '1px solid var(--stone)',
      padding: 'clamp(12px, 3vw, 24px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tms-product__img",
    href: href,
    target: "_blank",
    rel: "sponsored nofollow noopener",
    style: {
      display: 'block',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: 'var(--white)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name,
    loading: "lazy",
    decoding: "async",
    width: "600",
    height: "600",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Placeholder, {
    ratio: "1 / 1",
    style: {
      border: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(8px, 1.6vw, 14px)',
      alignItems: 'flex-start',
      minWidth: 0
    }
  }, number != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(22px, 3vw, 30px)',
      lineHeight: 1,
      color: 'var(--espresso)'
    }
  }, pad(number)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--pale-oak)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(18px, 2.4vw, 24px)',
      lineHeight: 1.2,
      margin: 0,
      textWrap: 'balance'
    }
  }, name), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(13px, 1.6vw, 15px)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, note), href && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: href,
    sponsored: true,
    size: "sm",
    style: {
      marginTop: 4
    }
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  olive: 'var(--muted-olive)',
  espresso: 'var(--espresso)',
  muted: 'var(--text-muted)',
  inverse: 'var(--linen)'
};
function Label({
  tone = 'olive',
  size = 'sm',
  as = 'span',
  href,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: size === 'lg' ? 12 : 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      color: TONES[tone] || TONES.olive,
      textDecoration: 'none',
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  href,
  active,
  children,
  onClick,
  style
}) {
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    type: href ? undefined : 'button',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      padding: '0 12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      borderRadius: 'var(--radius-1)',
      border: '1px solid ' + (active ? 'var(--muted-olive)' : 'var(--stone)'),
      background: active ? 'var(--muted-olive)' : 'transparent',
      color: active ? 'var(--linen)' : 'var(--muted-olive)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = '.tms-input:focus{outline:none;border-color:var(--espresso)!important}.tms-input::placeholder{color:var(--espresso-60);opacity:1}';
function Input({
  label,
  multiline,
  rows = 5,
  hint,
  error,
  id,
  style,
  inputStyle,
  ...rest
}) {
  injectCSS('tms-input-css', CSS);
  const fid = id || (label ? 'f-' + String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--espresso)'
    }
  }, label), /*#__PURE__*/React.createElement(El, _extends({
    id: fid,
    className: "tms-input",
    rows: multiline ? rows : undefined,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 16,
      color: 'var(--espresso)',
      background: 'var(--white)',
      border: '1px solid ' + (error ? 'var(--espresso)' : 'var(--stone)'),
      borderRadius: 'var(--radius-1)',
      padding: multiline ? '14px 16px' : '0 16px',
      height: multiline ? 'auto' : 46,
      width: '100%',
      boxSizing: 'border-box',
      resize: multiline ? 'vertical' : undefined,
      lineHeight: 1.5,
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...inputStyle
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--espresso)' : 'var(--text-muted)',
      fontStyle: error ? 'italic' : undefined,
      fontFamily: error ? 'var(--font-accent)' : undefined
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
function NewsletterForm({
  title = 'Get the weekly edit',
  text = 'One short email every Sunday. New finds, nothing else.',
  variant = 'block',
  action,
  onSubscribe,
  style
}) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = e => {
    if (action) return; // real provider form posts normally
    e.preventDefault();
    if (!email.includes('@')) return;
    onSubscribe && onSubscribe(email);
    setDone(true);
  };
  const block = variant === 'block';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: block ? 'var(--white)' : 'transparent',
      border: block ? '1px solid var(--stone)' : 0,
      padding: block ? 'clamp(32px, 6vw, 64px) clamp(20px, 5vw, 56px)' : 0,
      textAlign: block ? 'center' : 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: block ? 'clamp(28px, 4vw, 36px)' : 24,
      lineHeight: 1.15,
      margin: 0
    }
  }, title), block && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--pale-oak)',
      margin: '18px auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      margin: block ? '0 auto 24px' : '8px 0 16px',
      maxWidth: 420
    }
  }, text), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: 18
    }
  }, "You're on the list. See you Sunday.") : /*#__PURE__*/React.createElement("form", {
    action: action,
    method: action ? 'post' : undefined,
    onSubmit: submit,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      maxWidth: 460,
      margin: block ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    name: "email",
    required: true,
    placeholder: "Your email address",
    "aria-label": "Email address",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: '1 1 220px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    style: {
      flex: '0 0 auto'
    }
  }, "Subscribe")));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  hrefFor,
  style
}) {
  const pages = Array.from({
    length: total
  }, (_, i) => i + 1);
  const item = (p, content, label, disabled) => {
    const current = p === page && typeof content === 'number';
    const st = {
      minWidth: 40,
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: current ? 500 : 300,
      fontSize: 13,
      color: disabled ? 'var(--stone)' : 'var(--espresso)',
      textDecoration: 'none',
      border: current ? '1px solid var(--espresso)' : '1px solid transparent',
      borderRadius: 'var(--radius-1)',
      pointerEvents: disabled ? 'none' : undefined,
      background: 'none',
      cursor: 'pointer'
    };
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: hrefFor ? hrefFor(p) : '#',
      "aria-label": label,
      "aria-current": current ? 'page' : undefined,
      "aria-disabled": disabled || undefined,
      onClick: e => {
        if (onChange) {
          e.preventDefault();
          onChange(p);
        }
      },
      style: st
    }, content);
  };
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, item(page - 1, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: 18
  }), 'Previous page', page <= 1), pages.map(p => item(p, p, 'Page ' + p)), item(page + 1, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  }), 'Next page', page >= total));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `.tms-hdr__nav{display:none}.tms-hdr__burger{display:flex}
@media(min-width:1000px){.tms-hdr__nav{display:flex}.tms-hdr__burger{display:none}}
.tms-hdr__link{position:relative}.tms-hdr__link::after{content:"";position:absolute;left:0;right:.2em;bottom:-6px;height:1px;background:var(--pale-oak);transform:scaleX(0);transition:transform var(--dur-base) var(--ease-out)}
.tms-hdr__link:hover::after,.tms-hdr__link[aria-current=page]::after{transform:scaleX(1)}
.tms-hdr__icon:hover{color:var(--muted-olive)!important}`;
const NAV_ITEMS = [{
  label: 'Home Finds',
  href: '/home-finds'
}, {
  label: 'Beauty Finds',
  href: '/beauty-finds'
}, {
  label: 'Boho & Dupes',
  href: '/boho-dupes'
}, {
  label: 'Gift Guides',
  href: '/gift-guides'
}, {
  label: 'Under $50',
  href: '/under-50'
}, {
  label: 'About',
  href: '/about'
}];
const iconBtn = {
  background: 'none',
  border: 0,
  padding: 10,
  margin: -10,
  cursor: 'pointer',
  color: 'var(--espresso)',
  display: 'flex'
};
const linkStyle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--espresso)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
function SiteHeader({
  items = NAV_ITEMS,
  current,
  iconSrc,
  homeHref = '/',
  onNavigate,
  onSearch,
  sticky = true,
  style
}) {
  injectCSS('tms-hdr-css', CSS);
  const [open, setOpen] = React.useState(false);
  const go = item => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 20,
      background: 'var(--linen)',
      borderBottom: '1px solid var(--stone)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      height: 64,
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tms-hdr__burger tms-hdr__icon",
    style: iconBtn,
    "aria-label": open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
      minWidth: 0
    },
    className: "tms-hdr__brand"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    iconSrc: iconSrc,
    size: 34,
    href: homeHref,
    onClick: onNavigate ? go({
      label: 'Home',
      href: homeHref
    }) : undefined,
    style: {
      gap: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tms-hdr__nav",
    "aria-label": "Main",
    style: {
      gap: 26,
      alignItems: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    className: "tms-hdr__link",
    href: it.href,
    "aria-current": current === it.href ? 'page' : undefined,
    onClick: go(it),
    style: linkStyle
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    className: "tms-hdr__icon",
    style: iconBtn,
    "aria-label": "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  })))), open && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile",
    style: {
      borderTop: '1px solid var(--stone)',
      background: 'var(--linen)',
      padding: '8px var(--gutter) 24px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    href: it.href,
    onClick: go(it),
    "aria-current": current === it.href ? 'page' : undefined,
    style: {
      ...linkStyle,
      fontSize: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--stone)'
    }
  }, it.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: 'var(--pale-oak)'
    }
  })))));
}
Object.assign(__ds_scope, { NAV_ITEMS, SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const SOCIAL_LINKS = [{
  label: 'Pinterest',
  href: 'https://pinterest.com/themuseshelf'
}, {
  label: 'Instagram',
  href: 'https://instagram.com/themuseshelf'
}, {
  label: 'TikTok',
  href: 'https://tiktok.com/@themuseshelf'
}];
const LEGAL_LINKS = [{
  label: 'Disclosure',
  href: '/disclosure'
}, {
  label: 'Privacy',
  href: '/privacy'
}, {
  label: 'Contact',
  href: '/contact'
}];
const lbl = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--espresso)',
  textDecoration: 'none'
};
function SiteFooter({
  iconSrc = '/assets/icon.png',
  onNavigate,
  year = new Date().getFullYear(),
  style
}) {
  const go = it => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(it);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--stone)',
      background: 'var(--linen)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'clamp(48px, 8vw, 80px) var(--gutter) 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: go({
      label: 'Home',
      href: '/'
    }),
    "aria-label": "The Muse Shelf home"
  }, /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "The Muse Shelf",
    width: "56",
    height: "52",
    style: {
      height: 52,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Footer",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '14px 28px'
    }
  }, __ds_scope.NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    href: it.href,
    onClick: go(it),
    style: lbl
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, SOCIAL_LINKS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener me",
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--muted-olive)',
      textDecoration: 'none'
    }
  }, s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--pale-oak)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 520,
      margin: 0
    }
  }, "The Muse Shelf is a participant in the Amazon Services LLC Associates Program. As an Amazon Associate I earn from qualifying purchases."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderTop: '1px solid var(--stone)',
      paddingTop: 20,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...lbl,
      fontWeight: 400,
      color: 'var(--text-muted)',
      fontSize: 10
    }
  }, "\xA9 ", year, " The Muse Shelf"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, LEGAL_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: go(l),
    style: {
      ...lbl,
      fontSize: 10,
      color: 'var(--text-muted)'
    }
  }, l.label))))));
}
Object.assign(__ds_scope, { SOCIAL_LINKS, LEGAL_LINKS, SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
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
function resolve(slug) {
  if (!slug) return {
    key: 'home',
    title: 'The Muse Shelf | Home & Beauty Finds That Look Expensive, for Less',
    description: 'Curated Amazon home decor and beauty finds in an organic-modern, quiet-luxury style. Finds that look expensive, prices that don\'t.',
    type: 'website',
    image: 'assets/pins/pin01_home_expensive.jpg',
    el: /*#__PURE__*/React.createElement(HomeScreen, null)
  };
  const cat = TMS.CATEGORIES.find(c => c.slug === slug);
  if (cat) return {
    key: slug,
    title: cat.name + ' | The Muse Shelf',
    description: cat.intro,
    type: 'website',
    el: /*#__PURE__*/React.createElement(CategoryScreen, {
      category: cat
    })
  };
  const post = TMS.POSTS.find(p => p.slug === slug);
  if (post) return {
    key: slug,
    title: post.title + ' | The Muse Shelf',
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
    title: pg.title,
    description: pg.description,
    type: 'website',
    el: pg.C()
  };
  return {
    key: '404',
    title: 'Not found | The Muse Shelf',
    el: /*#__PURE__*/React.createElement("main", {
      className: "wrap page-head"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "tms-h1"
    }, "This shelf is empty."), /*#__PURE__*/React.createElement(ADS.Button, {
      href: "#/"
    }, "Back home"))
  };
}
function setMeta(r, slug) {
  document.title = r.title;
  const url = TMS.SITE.url + '/' + (slug || '');
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
  set('name', 'description', r.description);
  set('property', 'og:title', r.title);
  set('property', 'og:description', r.description);
  set('property', 'og:type', r.type);
  set('property', 'og:url', url);
  set('property', 'og:image', r.image ? TMS.SITE.url + '/' + r.image : null);
  set('property', 'article:published_time', r.published ? r.published + 'T08:00:00-05:00' : null);
  let c = document.head.querySelector('link[rel=canonical]');
  if (!c) {
    c = document.createElement('link');
    c.rel = 'canonical';
    document.head.appendChild(c);
  }
  c.href = url;
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
    href: '#/' + p.slug,
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
  const read = () => location.hash.replace(/^#\/?/, '').split('?')[0];
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
    location.hash = '/' + it.href.replace(/^\//, '');
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": r.key
  }, /*#__PURE__*/React.createElement(ADS.SiteHeader, {
    iconSrc: asset('assets/icon.png'),
    current: '/' + slug,
    onNavigate: nav,
    onSearch: () => setSearch(true)
  }), r.el, /*#__PURE__*/React.createElement(ADS.SiteFooter, {
    iconSrc: asset('assets/icon.png'),
    onNavigate: nav
  }), search && /*#__PURE__*/React.createElement(SearchOverlay, {
    onClose: () => setSearch(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CategoryScreen.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CategoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
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
    image: p.image ? asset(p.image) : undefined,
    imageAlt: p.imageAlt,
    href: '#/' + p.slug,
    placeholderIcon: asset('assets/icon.png')
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
      if (!e.target.closest('a')) location.hash = '/' + feature.slug;
    },
    style: {
      maxWidth: 360,
      justifySelf: 'end',
      width: '100%',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PinImage, {
    src: asset(feature.image),
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
    href: "#/home-finds",
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
    image: c.image ? asset(c.image) : undefined,
    imageAlt: c.name + ' edits',
    href: '#/' + c.slug,
    placeholderIcon: asset('assets/icon.png')
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PageScreens.jsx
try { (() => {
const PDS = window.TheMuseShelfDesignSystem_f42d04;
function PageHead({
  kicker,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, kicker && /*#__PURE__*/React.createElement(PDS.Label, null, kicker), /*#__PURE__*/React.createElement("h1", {
    className: "tms-h1"
  }, title), /*#__PURE__*/React.createElement(PDS.Divider, {
    variant: "oak"
  }), children);
}
function AboutScreen() {
  return /*#__PURE__*/React.createElement("main", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    kicker: "About",
    title: "Hello, and welcome to the shelf."
  }), /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--stone)',
      aspectRatio: '1 / 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: asset('assets/logo-stacked.png'),
    alt: "The Muse Shelf logo",
    style: {
      width: '88%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 18,
      fontSize: 16,
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("p", null, "The Muse Shelf is a small, curated shopping blog for anyone who loves a calm, collected home and an easy beauty routine."), /*#__PURE__*/React.createElement("p", null, "I spend hours scrolling Amazon so you don't have to. I look for the pieces that read high-end: real texture, honest materials, quiet colors. Stone, ceramic, linen and warm wood. If it would look at home in a design shop, it makes the edit."), /*#__PURE__*/React.createElement("p", null, "Every post is one themed edit, matched to a pin, so you can save it, scan it and shop it in a few minutes."), /*#__PURE__*/React.createElement("p", {
    className: "tms-accent",
    style: {
      fontSize: 20,
      marginTop: 6
    }
  }, "@themuseshelf"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PDS.Button, {
    href: "#/"
  }, "Browse the edits"), /*#__PURE__*/React.createElement(PDS.Button, {
    variant: "secondary",
    href: "https://pinterest.com/themuseshelf",
    external: true
  }, "Follow on Pinterest")))));
}
function DisclosureScreen() {
  return /*#__PURE__*/React.createElement("main", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    kicker: "Legal",
    title: "Affiliate Disclosure"
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("p", null, "The Muse Shelf is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate I earn from qualifying purchases."), /*#__PURE__*/React.createElement("p", null, "When you click a product link on this site and make a purchase, I may earn a small commission at no extra cost to you. It helps keep The Muse Shelf running."), /*#__PURE__*/React.createElement("p", null, "The Muse Shelf may also join affiliate programs with other retailers in the future. Any post that contains affiliate links says so at the top."), /*#__PURE__*/React.createElement("p", null, "I only feature products I would genuinely put on my own shelf. Prices and availability change often, so always check the current price on the retailer's site before you buy.")));
}
function PrivacyScreen() {
  const S = ({
    t,
    children
  }) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, t), children);
  return /*#__PURE__*/React.createElement("main", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    kicker: "Legal",
    title: "Privacy Policy"
  }, /*#__PURE__*/React.createElement(PDS.Label, {
    tone: "muted"
  }, "Last updated October 20, 2026")), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("p", null, "This policy explains what information The Muse Shelf (themuseshelf.com) collects when you visit, and how it is used."), /*#__PURE__*/React.createElement(S, {
    t: "Information we collect"
  }, /*#__PURE__*/React.createElement("p", null, "If you subscribe to the newsletter or use the contact form, we collect the details you share, such as your name and email address. We also collect anonymous usage data automatically, described below.")), /*#__PURE__*/React.createElement(S, {
    t: "Analytics"
  }, /*#__PURE__*/React.createElement("p", null, "We use analytics tools to understand how visitors use the site: pages viewed, time on page, device type and approximate location. This data is aggregated and does not identify you personally.")), /*#__PURE__*/React.createElement(S, {
    t: "Cookies"
  }, /*#__PURE__*/React.createElement("p", null, "Cookies are small files stored on your device. We and our partners use them for analytics, to remember your preferences and to attribute affiliate purchases. You can block or delete cookies in your browser settings; some features may not work as intended.")), /*#__PURE__*/React.createElement(S, {
    t: "Affiliate links"
  }, /*#__PURE__*/React.createElement("p", null, "This site contains affiliate links, including links to Amazon. When you click one, the retailer may set a cookie to credit the referral. Their use of your data is governed by their own privacy policy.")), /*#__PURE__*/React.createElement(S, {
    t: "Newsletter"
  }, /*#__PURE__*/React.createElement("p", null, "If you sign up for the weekly edit, your email is stored with our email provider and used only to send the newsletter. Every email has an unsubscribe link.")), /*#__PURE__*/React.createElement(S, {
    t: "Third-party services"
  }, /*#__PURE__*/React.createElement("p", null, "Embedded content and services such as Pinterest may collect data according to their own policies.")), /*#__PURE__*/React.createElement(S, {
    t: "Your choices"
  }, /*#__PURE__*/React.createElement("p", null, "You can ask to see, correct or delete the personal information we hold about you at any time by emailing ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + TMS.SITE.email
  }, TMS.SITE.email), ".")), /*#__PURE__*/React.createElement(S, {
    t: "Changes"
  }, /*#__PURE__*/React.createElement("p", null, "We may update this policy from time to time. The date at the top shows the latest revision."))));
}
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    className: "wrap",
    style: {
      paddingBottom: 'var(--section-gap)'
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    kicker: "Contact",
    title: "Say hello"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-secondary)',
      maxWidth: 460
    }
  }, "Questions, collaborations or a find you think belongs on the shelf. Write to ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + TMS.SITE.email
  }, TMS.SITE.email), " or use the form.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto'
    }
  }, sent ? /*#__PURE__*/React.createElement("p", {
    className: "tms-accent",
    style: {
      fontSize: 22,
      textAlign: 'center',
      padding: '40px 0'
    }
  }, "Thank you. I'll write back soon.") : /*#__PURE__*/React.createElement("form", {
    className: "stack",
    style: {
      gap: 20
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(PDS.Input, {
    label: "Name",
    name: "name",
    required: true
  }), /*#__PURE__*/React.createElement(PDS.Input, {
    label: "Email",
    name: "email",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(PDS.Input, {
    label: "Message",
    name: "message",
    multiline: true,
    rows: 6,
    required: true
  }), /*#__PURE__*/React.createElement(PDS.Button, {
    type: "submit",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send message"))));
}
Object.assign(window, {
  AboutScreen,
  DisclosureScreen,
  PrivacyScreen,
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PageScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PostScreen.jsx
try { (() => {
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
    href: '#/' + cat.slug
  }, cat.name), /*#__PURE__*/React.createElement("h1", {
    className: "post-h1"
  }, post.title), /*#__PURE__*/React.createElement(DS.Label, {
    tone: "muted",
    as: "time",
    dateTime: post.date
  }, formatDate(post.date)), /*#__PURE__*/React.createElement(DS.Disclosure, {
    href: "#/disclosure",
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
    iconSrc: asset('assets/icon.png')
  })) : /*#__PURE__*/React.createElement("div", {
    className: "post-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-pin"
  }, /*#__PURE__*/React.createElement(DS.PinImage, {
    src: asset(post.image),
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
    image: pr.image ? asset(pr.image) : undefined,
    imageAlt: pr.name,
    href: TMS.amazon(pr.link)
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap section"
  }, /*#__PURE__*/React.createElement(DS.SectionHeader, {
    title: "More edits",
    linkLabel: 'All ' + cat.name,
    href: '#/' + cat.slug,
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content/site-content.js
try { (() => {
/* =====================================================================
   THE MUSE SHELF — SITE CONTENT
   This is the only file you edit to add or change posts.
   ---------------------------------------------------------------------
   1. Your Amazon Associates tag. Change it once here and every product
      link on the site updates.
   ===================================================================== */
var AFFILIATE_TAG = 'themuseshelf-20';

/* Builds the full Amazon link. Use: amazon('B0GYQT74HH') */
function amazon(asinOrUrl) {
  var url = asinOrUrl.indexOf('http') === 0 ? asinOrUrl : 'https://www.amazon.com/dp/' + asinOrUrl;
  if (!AFFILIATE_TAG) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'tag=' + AFFILIATE_TAG;
}

/* 2. Categories (nav order). slug = the URL, e.g. themuseshelf.com/home-finds */
var CATEGORIES = [{
  slug: 'home-finds',
  name: 'Home Finds',
  intro: 'Neutral, organic-modern pieces that look like they came from a design shop.',
  image: 'assets/products/05-beige-ceramic-vase-set.png'
}, {
  slug: 'beauty-finds',
  name: 'Beauty Finds',
  intro: 'Clean-girl essentials and vanity pieces worth the counter space.',
  image: ''
}, {
  slug: 'boho-dupes',
  name: 'Boho & Dupes',
  intro: 'The Anthropologie look, found on Amazon for a lot less.',
  image: 'assets/products/10-wood-bead-garland.png'
}, {
  slug: 'gift-guides',
  name: 'Gift Guides',
  intro: 'Thoughtful, good-looking gifts for everyone on your list.',
  image: 'assets/products/09-marble-coasters-brass-inlay.png'
}, {
  slug: 'under-50',
  name: 'Under $50',
  intro: 'Every find in these edits comes in under fifty dollars.',
  image: 'assets/products/13-romano-travertine-tray.png'
}];

/* 3. Posts. Newest first. To add a post, copy the block between the
      ---- lines, paste it at the top of the list and fill it in.
      - slug: the URL. Lead with the search phrase, lowercase, hyphens.
      - category: one of the slugs above.
      - image: the Pinterest pin (1000 x 1500 JPG, under 300 KB).
      - products: name, note (one sentence), image (square, on white), link (ASIN or full Amazon URL).
      Never add prices. Put a price range only in the title ("Under $50"). */
var POSTS = [
// ----------------------------------------------------------------
{
  slug: 'amazon-home-finds-that-look-expensive',
  title: 'Amazon Home Finds That Look Expensive',
  category: 'home-finds',
  date: '2026-10-20',
  description: 'Thirteen Amazon home decor finds in stone, ceramic, linen and warm wood that look high-end on a shelf, console or coffee table.',
  intro: 'Thirteen pieces that read high-end on a shelf, a console or a coffee table, all from Amazon. Think stone, ceramic, linen and warm wood.',
  image: 'assets/pins/pin01_home_expensive.jpg',
  imageAlt: 'Collage of neutral Amazon home decor: ribbed ceramic lamp, faux olive tree, wood bead garland, beige vases, travertine trays and pot, white ribbed vases, marble coasters, green marble bookends and ceramic bowls on a linen background.',
  products: [{
    name: 'Ribbed ceramic table lamp',
    note: 'A hand-textured base and a linen drum shade, the kind of lamp you would expect from a design store.',
    image: 'assets/products/01-ribbed-ceramic-table-lamp.png',
    link: 'B0GYQT74HH'
  }, {
    name: 'Faux olive tree, 5 ft',
    note: 'Soft, muted leaves on a slim trunk that fill an empty corner with zero upkeep.',
    image: 'assets/products/02-faux-olive-tree.png',
    link: 'B0D5HK2KHW'
  }, {
    name: 'Fluted porcelain taper candle holder',
    note: 'Glossy white fluting that looks custom on a dining table or mantel.',
    image: 'assets/products/03-fluted-porcelain-taper-candle-holder.png',
    link: 'B07DHR9N4C'
  }, {
    name: 'Travertine vanity tray',
    note: 'A warm stone look with soft rounded corners, made for perfume, rings and a candle.',
    image: 'assets/products/04-travertine-vanity-tray.png',
    link: 'B0D9PTYJH6'
  }, {
    name: 'Beige ceramic vase set of 3',
    note: 'Three matte, sandy shapes that style themselves on a shelf or console.',
    image: 'assets/products/05-beige-ceramic-vase-set.png',
    link: 'B09ZL23DWT'
  }, {
    name: 'Free-form glazed ceramic bowl',
    note: 'An organic, wavy rim with a fine gold edge. Pretty empty, prettier with lemons.',
    image: 'assets/products/06-free-form-glazed-ceramic-bowl.png',
    link: 'B07TD4C7JL'
  }, {
    name: 'Ribbed glossy ceramic vase',
    note: 'Clean vertical ribs in bright white that suit every stem, dried or fresh.',
    image: 'assets/products/07-ribbed-glossy-ceramic-vase.png',
    link: 'B0G2LSQKTG'
  }, {
    name: 'Travertine-texture plant pot',
    note: 'The banded look of travertine for your favorite plant, without the price of stone.',
    image: 'assets/products/08-travertine-texture-plant-pot.png',
    link: 'B0DK51RRQ6'
  }, {
    name: 'Marble coasters with brass inlay, set of 6',
    note: 'White marble with a single brass line. Jewelry for the coffee table.',
    image: 'assets/products/09-marble-coasters-brass-inlay.png',
    link: 'B07MLSYKSC'
  }, {
    name: 'Wood bead garland',
    note: 'Natural beads with jute tassels to drape over a stack of books or a tray.',
    image: 'assets/products/10-wood-bead-garland.png',
    link: 'B07ZVKBJJX'
  }, {
    name: 'Marble bookends',
    note: 'Deep green veined marble that anchors a shelf and adds weight to a neutral room.',
    image: 'assets/products/11-marble-bookends.png',
    link: 'B0D9V9M7NP'
  }, {
    name: 'Large handcrafted ceramic bowl',
    note: 'A footed bowl with hand-drawn stripes. The piece guests ask about.',
    image: 'assets/products/12-large-handcrafted-ceramic-bowl.png',
    link: 'B0GDXCLRPW'
  }, {
    name: 'Romano travertine tray',
    note: 'A scalloped edge in a soft travertine finish, for the bathroom counter or the entry.',
    image: 'assets/products/13-romano-travertine-tray.png',
    link: 'B0DWX56K18'
  }]
},
// ----------------------------------------------------------------
/* Placeholder posts (no pin yet) so grids read as a full site in the mock.
   Titles follow the brand guide's content mix. Delete or replace. */
{
  slug: 'anthropologie-dupes-on-amazon',
  title: 'Anthropologie Dupes on Amazon',
  category: 'boho-dupes',
  date: '2026-10-18',
  placeholder: true,
  products: []
}, {
  slug: 'clean-girl-amazon-must-haves',
  title: 'Clean Girl Amazon Must Haves',
  category: 'beauty-finds',
  date: '2026-10-16',
  placeholder: true,
  products: []
}, {
  slug: 'cozy-finds-under-50',
  title: 'Cozy Finds Under $50',
  category: 'under-50',
  date: '2026-10-14',
  placeholder: true,
  products: []
}, {
  slug: 'amazon-gift-guide-for-her',
  title: 'Amazon Gift Guide for Her',
  category: 'gift-guides',
  date: '2026-10-12',
  placeholder: true,
  products: []
}, {
  slug: 'neutral-bathroom-decor-amazon',
  title: 'Neutral Bathroom Decor From Amazon',
  category: 'home-finds',
  date: '2026-10-10',
  placeholder: true,
  products: []
}, {
  slug: 'boho-living-room-finds',
  title: 'Boho Living Room Finds on Amazon',
  category: 'boho-dupes',
  date: '2026-10-08',
  placeholder: true,
  products: []
}, {
  slug: 'amazon-vanity-organization',
  title: 'Amazon Vanity Organization That Looks Luxe',
  category: 'beauty-finds',
  date: '2026-10-06',
  placeholder: true,
  products: []
}, {
  slug: 'quiet-luxury-entryway-finds',
  title: 'Quiet Luxury Entryway Finds',
  category: 'home-finds',
  date: '2026-10-04',
  placeholder: true,
  products: []
}];
var SITE = {
  name: 'The Muse Shelf',
  url: 'https://themuseshelf.com',
  tagline: 'Home & beauty finds that look expensive, for less.',
  email: 'hello.themuseshelf@gmail.com'
};
window.TMS = {
  AFFILIATE_TAG: AFFILIATE_TAG,
  amazon: amazon,
  CATEGORIES: CATEGORIES,
  POSTS: POSTS,
  SITE: SITE
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content/site-content.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.DISCLOSURE_TEXT = __ds_scope.DISCLOSURE_TEXT;

__ds_ns.Disclosure = __ds_scope.Disclosure;

__ds_ns.PinImage = __ds_scope.PinImage;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.PostCard = __ds_scope.PostCard;

__ds_ns.PostGrid = __ds_scope.PostGrid;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SOCIAL_LINKS = __ds_scope.SOCIAL_LINKS;

__ds_ns.LEGAL_LINKS = __ds_scope.LEGAL_LINKS;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.NAV_ITEMS = __ds_scope.NAV_ITEMS;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
