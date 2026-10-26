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
      objectFit: 'contain',
      padding: '10%',
      boxSizing: 'border-box'
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
/* Newsletter signup. Settings live in content.js (window.TMS.NEWSLETTER): endpoint, emailField,
   extraFields and the copy. Empty endpoint = nothing is sent (placeholder mode). Posts urlencoded
   and reads the provider's JSON reply (Kit allows CORS). */
function NewsletterForm({
  title,
  text,
  button,
  variant = 'block',
  action,
  onSubscribe,
  style
}) {
  const cfg = typeof window !== 'undefined' && window.TMS && window.TMS.NEWSLETTER || {};
  const endpoint = action || cfg.endpoint || '';
  const heading = title || cfg.title || 'Get the weekly edit';
  const blurb = text || cfg.text || 'One short email every Sunday. New finds, nothing else.';
  const label = button || cfg.button || 'Subscribe';
  const [email, setEmail] = React.useState('');
  const [trap, setTrap] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | sending | done | error | invalid
  const submit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setStatus('invalid');
    if (trap) return setStatus('done'); // bot filled the hidden field
    if (!endpoint) {
      onSubscribe && onSubscribe(email);
      return setStatus('done');
    }
    setStatus('sending');
    const body = new URLSearchParams(); // urlencoded, like a plain HTML form post
    body.append(cfg.emailField || 'email', email.trim());
    Object.keys(cfg.extraFields || {}).forEach(k => body.append(k, cfg.extraFields[k]));
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' }
      });
      let data = {};
      try { data = await res.json(); } catch (err) {}
      if (!res.ok || data.status === 'failed') throw new Error('signup failed');
      if (data.status === 'quarantined' && data.url) {
        window.location.href = data.url; // Kit's bot check; it confirms the signup from there
        return;
      }
      try { localStorage.setItem('tms_subscribed', '1'); } catch (err) {}
      onSubscribe && onSubscribe(email);
      setStatus('done');
    } catch (err) {
      setStatus('error');
    }
  };
  const block = variant === 'block';
  const note = status === 'invalid' ? 'Please enter a valid email address.' : status === 'error' ? 'Something went wrong. Please try again in a minute.' : cfg.note || '';
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
      margin: block ? '0 auto' : 0,
      maxWidth: 560
    }
  }, heading), block && /*#__PURE__*/React.createElement("div", {
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
      maxWidth: 440
    }
  }, blurb), status === 'done' ? /*#__PURE__*/React.createElement("p", {
    role: "status",
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: 18,
      margin: block ? '0 auto' : 0,
      maxWidth: 440
    }
  }, cfg.success || "You're on the list. See you Sunday.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      maxWidth: 460,
      margin: block ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    value: trap,
    onChange: e => setTrap(e.target.value),
    style: {
      position: 'absolute',
      left: '-9999px',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    name: "email",
    required: true,
    placeholder: "Your email address",
    "aria-label": "Email address",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (status === 'invalid' || status === 'error') setStatus('idle');
    },
    style: {
      flex: '1 1 220px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    disabled: status === 'sending',
    style: {
      flex: '0 0 auto',
      opacity: status === 'sending' ? 0.6 : 1
    }
  }, status === 'sending' ? 'Sending…' : label)), status !== 'done' && note && /*#__PURE__*/React.createElement("p", {
    role: status === 'invalid' || status === 'error' ? 'alert' : undefined,
    style: {
      fontSize: 12,
      letterSpacing: '0.02em',
      color: status === 'invalid' || status === 'error' ? 'var(--espresso)' : 'var(--text-muted)',
      margin: block ? '14px auto 0' : '10px 0 0'
    }
  }, note));
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
@media(min-width:1200px){.tms-hdr__nav{display:flex}.tms-hdr__burger{display:none}}
.tms-hdr__link{position:relative}.tms-hdr__link::after{content:"";position:absolute;left:0;right:.2em;bottom:-6px;height:1px;background:var(--pale-oak);transform:scaleX(0);transition:transform var(--dur-base) var(--ease-out)}
.tms-hdr__link:hover::after,.tms-hdr__link[aria-current=page]::after{transform:scaleX(1)}
.tms-hdr__icon:hover{color:var(--muted-olive)!important}`;
const NAV_ITEMS = [{
  label: 'Home Finds',
  href: '/home-finds/'
}, {
  label: 'Boho & Dupes',
  href: '/boho-dupes/'
}, {
  label: 'Gift Guides',
  href: '/gift-guides/'
}, {
  label: 'Under $50',
  href: '/under-50/'
}, {
  label: 'Hosting & Recipes',
  href: '/hosting-recipes/'
}, {
  label: 'Beauty Finds',
  href: '/beauty-finds/'
}, {
  label: 'About',
  href: '/about/'
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
  href: '/disclosure/'
}, {
  label: 'Privacy',
  href: '/privacy/'
}, {
  label: 'Contact',
  href: '/contact/'
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
var AFFILIATE_TAG = 'musesite-20';

/* Channel tags: visitors keep the tag of the channel that brought them (utm_source), for the whole visit. */
var CHANNEL_TAGS = { pinterest: 'musepin-20', instagram: 'museig-20', tiktok: 'musetok-20' };
function channelTag() {
  try {
    var q = new URLSearchParams(location.search).get('utm_source');
    if (q) sessionStorage.setItem('tms_src', q.toLowerCase());
    var s = sessionStorage.getItem('tms_src');
    return (s && CHANNEL_TAGS[s]) || AFFILIATE_TAG;
  } catch (e) { return AFFILIATE_TAG; }
}

/* Builds the full Amazon link. Use: amazon('B0GYQT74HH') */
function amazon(asinOrUrl) {
  var url = asinOrUrl.indexOf('http') === 0 ? asinOrUrl : 'https://www.amazon.com/dp/' + asinOrUrl;
  var tag = channelTag();
  if (!tag) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'tag=' + tag;
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
    slug: 'christmas-entryway-table-decor',
    title: 'Christmas Entryway Table Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas entryway table decor from Amazon that looks expensive: gold glass trees, a ceramic tree, gold lanterns, pine stems and a wood tray.',
    intro: 'An entryway table sets the tone the second guests walk in, so it is the easiest place to make Christmas feel designed. Start with one tall arrangement of pine, add a cluster of glowing glass or ceramic trees, a tray to ground the small pieces and candlelight at two or three heights. These Amazon finds keep to gold, evergreen and warm wood, so the console looks collected instead of cluttered.',
    image: 'assets/pins/christmas-entryway-table-decor.jpg',
    imageAlt: 'Collage of Christmas entryway table decor from Amazon: gold mercury glass trees, a hand painted ceramic Christmas tree, gold taper candle holders, gold lanterns, Norfolk pine branches, a lit spruce wreath and a round wooden tray',
    products: [
      { name: 'Glasseam gold mercury glass trees, set of 5', note: 'Five glowing gold glass cone trees in graduated heights, the centerpiece of a holiday console.', image: 'assets/products/B0FMR97RL1.jpg', link: 'B0FMR97RL1' },
      { name: 'Casafield hand painted ceramic Christmas tree, green', note: 'A 15 inch pre-lit glazed ceramic tree with tiny bulbs, the nostalgic touch every entryway needs.', image: 'assets/products/B092XQ2LYP.jpg', link: 'B092XQ2LYP' },
      { name: 'Casafield hand painted ceramic Christmas tree, white', note: 'The same vintage ceramic tree in soft white for an all-neutral entry table.', image: 'assets/products/B09VCNHP15.jpg', link: 'B09VCNHP15' },
      { name: 'Gold taper candle holders, set of 3', note: 'Slim gold candlesticks in three heights that make a console look styled in seconds.', image: 'assets/products/B0CCTTFT3B.jpg', link: 'B0CCTTFT3B' },
      { name: 'Real touch Norfolk pine branches, 16 pieces', note: 'Soft, lifelike pine stems to fill a tall vase with fresh-cut-looking greenery.', image: 'assets/products/B0D7386KRZ.jpg', link: 'B0D7386KRZ' },
      { name: 'Homemory gold metal lanterns with flameless candles, set of 2', note: 'Open gold frame lanterns with LED pillars to flank the console or sit on the floor.', image: 'assets/products/B0D9NKPVDN.jpg', link: 'B0D9NKPVDN' },
      { name: 'National Tree Company pre-lit Crestwood spruce wreath, 24 inch', note: 'A full lit wreath to hang above the entry table or lean against the wall.', image: 'assets/products/B00LKRMNWK.jpg', link: 'B00LKRMNWK' },
      { name: 'Hatway round wooden tray', note: 'A dark round wood tray that corrals a pillar candle, pinecones and keys.', image: 'assets/products/B0CDKP86TV.jpg', link: 'B0CDKP86TV' },
      { name: 'Norfolk pine branches, 36 inch, 8 pieces', note: 'Extra long pine branches for a dramatic arrangement in a floor or console vase.', image: 'assets/products/B0D76VHVM1.jpg', link: 'B0D76VHVM1' },
      { name: 'Mercury glass tower trees, set of 3', note: 'Speckled glass trees that catch the light from a nearby lamp or candle.', image: 'assets/products/B0CD1DRT7V.jpg', link: 'B0CD1DRT7V' },
      { name: 'Mini pine candle ring wreaths, 4 pieces', note: 'Small pine rings to set around pillar candles or the base of a vase.', image: 'assets/products/B0FGCNQCBP.jpg', link: 'B0FGCNQCBP' },
      { name: 'RAMIRABI natural wood bead garland', note: 'A light wood bead garland to drape across a tray or a stack of books.', image: 'assets/products/B08Y8D23MW.jpg', link: 'B08Y8D23MW' },
      { name: 'Hatway wooden pillar candle holders', note: 'Turned wood holders that bring warmth to a gold and green console.', image: 'assets/products/B0CDL7JGSS.jpg', link: 'B0CDL7JGSS' },
      { name: 'Potted Norfolk pine tree, 2 ft', note: 'A small unlit potted pine that reads like a real tree on the end of the console.', image: 'assets/products/B0FBFB8VR1.jpg', link: 'B0FBFB8VR1' },
      { name: 'Winlyn snowy cedar picks with red berries, 6 pieces', note: 'Frosted cedar picks with berries to tuck into a vase, wreath or tray.', image: 'assets/products/B0BB29B487.jpg', link: 'B0BB29B487' },
      { name: 'Glasseam green glass Christmas trees, set of 5', note: 'Deep green glass trees for a richer, jewel-toned entry table.', image: 'assets/products/B0FMR9JQYC.jpg', link: 'B0FMR9JQYC' },
      { name: 'LZNPA droopy pine branches, 12 pieces', note: 'Soft, naturally drooping pine stems that look freshly cut in a vase.', image: 'assets/products/B0D9PWHJ3P.jpg', link: 'B0D9PWHJ3P' },
      { name: 'Rustic wooden serving tray, small', note: 'A small rustic wood tray to group candles, keys and a little tree.', image: 'assets/products/B0D6VLGZ2R.jpg', link: 'B0D6VLGZ2R' },
      { name: 'Cedar wreaths for the front door, set of 2', note: 'Two loose 24 inch cedar wreaths, one for the door and one above the console.', image: 'assets/products/B0H87D7P68.jpg', link: 'B0H87D7P68' },
      { name: 'Boao beige wooden bead garland, 10 ft', note: 'A long beige bead garland to swag along the edge of the entry table.', image: 'assets/products/B097K7VJJ5.jpg', link: 'B097K7VJJ5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-front-porch-decor-ideas',
    title: 'Christmas Front Porch Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas front porch decor ideas from Amazon: a snowy plaid bow wreath, black lanterns, lit urn fillers, slim flocked trees and velvet bows.',
    intro: 'A Christmas porch that looks expensive is built in pairs and layers: a full wreath on the door, matching planters or slim trees on both sides, lanterns on the steps and one bold accent like oversized velvet bows. These Amazon finds keep to black, evergreen, frost and deep red, so the porch looks classic and welcoming from the street.',
    image: 'assets/pins/christmas-front-porch-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas front porch decor from Amazon: a pre-lit snowy wreath with a buffalo plaid bow, black candle lanterns, a lit frosted urn filler, a slim flocked tree, red velvet bows, pine stems and a pine tree door mat',
    products: [
      { name: 'DECSPAS pre-lit snowy flocked wreath, 24 inch', note: 'A frosted, lit wreath with a buffalo plaid bow that stands out on a dark front door.', image: 'assets/products/B0CBJSML3R.jpg', link: 'B0CBJSML3R' },
      { name: 'Vintage black candle lanterns with LED pillars, 2 pack', note: 'Classic black lanterns with a diamond pattern to glow on the steps every night.', image: 'assets/products/B019SKYJ2C.jpg', link: 'B019SKYJ2C' },
      { name: 'National Tree Company pre-lit frosted berry urn filler, 18 inch', note: 'A lit urn filler with pinecones and berries that turns any planter into a porch tree.', image: 'assets/products/B01IMYIV1K.jpg', link: 'B01IMYIV1K' },
      { name: 'Large red velvet Christmas bows, 2 pack', note: 'Big 12 by 18 inch velvet bows for planters, lanterns or porch posts.', image: 'assets/products/B0D5LC2SZZ.jpg', link: 'B0D5LC2SZZ' },
      { name: 'Sggvecsy red berry Christmas wreath, 22 inch', note: 'A full pine wreath with red berries and pinecones for a classic front door.', image: 'assets/products/B0DDBSNG4R.jpg', link: 'B0DDBSNG4R' },
      { name: 'National Tree Company pre-lit flocked Forestree, 3 ft', note: 'A slim frosted lit tree that fits a planter on either side of the door.', image: 'assets/products/B00MVAE2M4.jpg', link: 'B00MVAE2M4' },
      { name: 'Real touch Norfolk pine stems, 16 pieces', note: 'Soft pine stems to fill porch planters and window boxes.', image: 'assets/products/B0DFTCJF2T.jpg', link: 'B0DFTCJF2T' },
      { name: 'PANDICORN Christmas tree pillow covers, set of 2', note: 'Cream pillow covers with small green trees for a porch bench or swing.', image: 'assets/products/B0FJ1P9S2G.jpg', link: 'B0FJ1P9S2G' },
      { name: 'Pine tree Christmas door mat', note: 'A festive pine and snowflake welcome mat to layer over a plain coir mat.', image: 'assets/products/B0FJLGP8L7.jpg', link: 'B0FJLGP8L7' },
      { name: 'Front porch lanterns with LED candles, 2 pack', note: 'A pair of outdoor lanterns to frame the door or line the steps.', image: 'assets/products/B0CCD6S246.jpg', link: 'B0CCD6S246' },
      { name: 'Pine cone red berry picks, 10 pack', note: 'Berry and pinecone picks to tuck into wreaths, garland and planters.', image: 'assets/products/B08DKZVPJX.jpg', link: 'B08DKZVPJX' },
      { name: 'MEETYAMOR pre-lit mini Christmas trees, set of 2', note: 'Two 2 ft lit trees for a matching pair at the door.', image: 'assets/products/B0CBJWPZRZ.jpg', link: 'B0CBJWPZRZ' },
      { name: 'Norfolk pine Christmas wreath, 24 inch', note: 'A soft, natural Norfolk pine wreath for a quiet, elegant door.', image: 'assets/products/B0H7BB9F1B.jpg', link: 'B0H7BB9F1B' },
      { name: 'Lighted Christmas urn filler, 24 inch', note: 'A tall warm-white lit filler that fills a large porch urn.', image: 'assets/products/B0H4Y2VPQM.jpg', link: 'B0H4Y2VPQM' },
      { name: 'Bdor black metal Christmas lanterns with timer, set of 2', note: 'Tall black lanterns dressed with berries and pinecones, with remote and timer.', image: 'assets/products/B0CF5981VN.jpg', link: 'B0CF5981VN' },
      { name: 'Pine Christmas wreath with red balls, 24 inch', note: 'A classic red and green wreath with ornaments and berries for the front door.', image: 'assets/products/B0FKBT525F.jpg', link: 'B0FKBT525F' },
      { name: 'Frosted pre-lit urn fillers, set of 2', note: 'A matching pair of frosted lit fillers for planters on both sides of the door.', image: 'assets/products/B0CD83TC7M.jpg', link: 'B0CD83TC7M' },
      { name: 'Hongsome giant red velvet bows, 2 pack', note: 'Oversized 12 by 24 inch velvet bows for the door, railing or lamp posts.', image: 'assets/products/B0FNMPYPM7.jpg', link: 'B0FNMPYPM7' },
      { name: 'Pine cypress branches, 10 pack', note: 'Mixed pine and cypress stems for full, layered porch planters.', image: 'assets/products/B0GWLRQ97K.jpg', link: 'B0GWLRQ97K' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'red-and-gold-christmas-tree-ideas',
    title: 'Red and Gold Christmas Tree Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Red and gold Christmas tree ideas from Amazon: a velvet topper bow, gold sequin balls, red glass ornaments, berry picks and gold leaf sprays.',
    intro: 'A red and gold Christmas tree looks expensive when it is layered like a florist would do it: one big velvet bow on top, ribbon wound loosely down the branches, glass ornaments in two or three sizes and gold sprays and red berries tucked in between. These Amazon finds keep the palette tight, deep red, antique gold and a little red and white, so the tree feels classic and rich instead of busy.',
    image: 'assets/pins/red-and-gold-christmas-tree-ideas.jpg',
    imageAlt: 'Collage of red and gold Christmas tree decor from Amazon: a red velvet topper bow, gold sequin balls, red and gold glass ornaments, red velvet ribbon, burgundy berry stems, gold glitter leaf sprays and gold star toppers',
    products: [
      { name: 'Red velvet tree topper bow with gold edge', note: 'An oversized red velvet bow with thin gold edging and long tails that cascade down the tree.', image: 'assets/products/B0D3DT5NQZ.jpg', link: 'B0D3DT5NQZ' },
      { name: 'Valery Madelyn red and gold glass ornaments, 10 count', note: 'Hand-decorated glass balls, drops and finials in red and antique gold for a classic heirloom look.', image: 'assets/products/B072V5N9LD.jpg', link: 'B072V5N9LD' },
      { name: 'Vickerman 4 inch gold sequin balls, 6 pack', note: 'Large sequin balls that catch the tree lights and fill gaps with warm gold sparkle.', image: 'assets/products/B016YNKL14.jpg', link: 'B016YNKL14' },
      { name: 'Wired red velvet ribbon, 30 yards', note: 'Plush red velvet ribbon with wired edges that holds its shape in loose loops down the tree.', image: 'assets/products/B0888BQ14B.jpg', link: 'B0888BQ14B' },
      { name: 'Burgundy berry stems, 12 pack', note: 'Deep burgundy berry branches to tuck between the ornaments for a fuller, designer tree.', image: 'assets/products/B08J799DXL.jpg', link: 'B08J799DXL' },
      { name: 'Kurt Adler shiny red glass balls, 4 pack', note: 'Classic glossy red glass ornaments in a generous size for the front of the tree.', image: 'assets/products/B003X0H4AI.jpg', link: 'B003X0H4AI' },
      { name: 'Gold glitter bay leaf sprays, 6 pack', note: 'Long gold leaf sprays that add height and shimmer between the branches.', image: 'assets/products/B0B1DM9MNP.jpg', link: 'B0B1DM9MNP' },
      { name: 'Gold glitter star tree topper', note: 'A simple gold glitter star that finishes a red and gold tree without stealing the show.', image: 'assets/products/B07QB4HD5R.jpg', link: 'B07QB4HD5R' },
      { name: 'Gold pearl-trimmed glitter balls', note: 'Soft gold glitter ornaments wrapped in pearl strands for a richer texture.', image: 'assets/products/B0C96MR42V.jpg', link: 'B0C96MR42V' },
      { name: 'Red berry picks, 24 pack', note: 'Slim red berry stems that add little pops of red all over the tree.', image: 'assets/products/B0B6YT44B7.jpg', link: 'B0B6YT44B7' },
      { name: 'Gold glitter leaf spray picks, 20 pack', note: 'Short gold leaf picks for filling small gaps with sparkle.', image: 'assets/products/B08KSDN32Q.jpg', link: 'B08KSDN32Q' },
      { name: 'Valery Madelyn red and white ornaments, 16 count', note: 'Shatterproof red and white balls with swirls and snowflakes for a candy-cane red and white tree.', image: 'assets/products/B087P4PJRT.jpg', link: 'B087P4PJRT' },
      { name: 'Red and gold shatterproof balls, 30 pack', note: 'A mix of solid and patterned red and gold balls to build the base layer of the tree.', image: 'assets/products/B0B9SBMKZJ.jpg', link: 'B0B9SBMKZJ' },
      { name: 'Hand-painted red and white ornaments, 16 pack', note: 'Shatterproof balls and drops painted in red and white patterns, safe for homes with kids or pets.', image: 'assets/products/B0CYKNSV1R.jpg', link: 'B0CYKNSV1R' },
      { name: 'Red berry stems, 60 pack', note: 'A big pack of glossy red berry stems to tuck in everywhere for a full, lush look.', image: 'assets/products/B0FG34T6S6.jpg', link: 'B0FG34T6S6' },
      { name: 'Champagne gold picks and sprays, 50 pack', note: 'Mixed champagne gold sprays that soften the red with a warm metallic glow.', image: 'assets/products/B0FC5ZDV41.jpg', link: 'B0FC5ZDV41' },
      { name: 'Gold glitter fern sprays, 6 pack', note: 'Long gold fern fronds that fan out from the branches like a florist-styled tree.', image: 'assets/products/B0B1DLL4GG.jpg', link: 'B0B1DLL4GG' },
      { name: 'Gold glitter star topper, 8 inch', note: 'A dimensional gold glitter star topper in a classic shape.', image: 'assets/products/B0F2FDGZ71.jpg', link: 'B0F2FDGZ71' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'nostalgic-christmas-tree-decor',
    title: 'Nostalgic Christmas Tree Decor',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Nostalgic Christmas tree decor from Amazon: a vintage ceramic tree, glass reflector ornaments, bird clips, C9 bulbs, tinsel and mercury glass.',
    intro: 'A nostalgic Christmas tree feels collected over years, not bought in one trip. Start with warm, big-bulb light, add glass reflector ornaments and a few mercury glass pieces, then finish with clip-on glass birds and a soft swag of tinsel. A glowing ceramic tree on a side table ties the room together. Keep the mix warm and edited so it reads vintage, not kitschy.',
    image: 'assets/pins/nostalgic-christmas-tree-decor.jpg',
    imageAlt: 'Collage of nostalgic Christmas tree decor from Amazon: a green vintage ceramic Christmas tree, glass reflector ornaments, an ivory and gold angel topper, mercury glass ornaments, C9 bulbs, glass bird clip ornaments, tinsel and bubble lights',
    products: [
      { name: 'Sunlit vintage-style ceramic Christmas tree, cordless', note: 'A glazed green ceramic tree with tiny multicolor bulbs, just like the one grandma had.', image: 'assets/products/B07H3SW23P.jpg', link: 'B07H3SW23P' },
      { name: 'Kurt Adler glass reflector ornaments, 5 pack', note: 'Jewel-tone glass balls with indented reflector centers, a true vintage tree classic.', image: 'assets/products/B00S80FJDW.jpg', link: 'B00S80FJDW' },
      { name: 'Gold mercury glass ornaments, teardrops and balls', note: 'Antiqued gold mercury glass in mixed shapes that looks like flea market finds.', image: 'assets/products/B0FDKGKF9S.jpg', link: 'B0FDKGKF9S' },
      { name: 'Kurt Adler lighted gold and ivory angel treetop', note: 'A softly lit ivory and gold angel topper with a lace skirt and old-fashioned charm.', image: 'assets/products/B007NDCFQO.jpg', link: 'B007NDCFQO' },
      { name: 'Old World Christmas glass owl ornament', note: 'A hand-painted blown glass owl on a clip that perches right on a branch.', image: 'assets/products/B001VD30PW.jpg', link: 'B001VD30PW' },
      { name: 'C9 ceramic Christmas bulbs, 25 pack', note: 'Big opaque multicolor C9 bulbs for that warm, retro glow.', image: 'assets/products/B004Q6JFBY.jpg', link: 'B004Q6JFBY' },
      { name: 'Creative Co-Op mercury glass ornament garland', note: 'A long garland of small taupe and cream mercury glass beads to drape across the branches.', image: 'assets/products/B01N5V8D8R.jpg', link: 'B01N5V8D8R' },
      { name: 'Valery Madelyn vintage-style glass ornaments, 10 count', note: 'Red, green and gold glass ornaments with old-fashioned patterns and finials.', image: 'assets/products/B0F2T3SMLZ.jpg', link: 'B0F2T3SMLZ' },
      { name: 'Silver tinsel garland', note: 'Soft silver tinsel on a spool for loose, nostalgic swags.', image: 'assets/products/B01L661XU2.jpg', link: 'B01L661XU2' },
      { name: 'Old World Christmas glass chickadee clip ornament', note: 'A blown glass chickadee on a gold clip that sits on the branches like a real bird.', image: 'assets/products/B002VSB6MK.jpg', link: 'B002VSB6MK' },
      { name: 'Kurt Adler lighted 8-point star treetop', note: 'A lit star topper in stained-glass colors with a true vintage feel.', image: 'assets/products/B00CAJFG4Y.jpg', link: 'B00CAJFG4Y' },
      { name: 'Antiqued silver glass ornaments, 12 pack', note: 'Small antiqued silver glass balls and drops that look like old mercury glass.', image: 'assets/products/B09XZQMSSH.jpg', link: 'B09XZQMSSH' },
      { name: 'Old World Christmas red cardinal clip ornament', note: 'A blown glass cardinal with a feather tail, a classic bird clip for the tree.', image: 'assets/products/B001AKDFQK.jpg', link: 'B001AKDFQK' },
      { name: 'Christmas bubble lights, 9 bulbs', note: 'Traditional bubble lights that glow and bubble like the trees of the 50s and 60s.', image: 'assets/products/B07W727Q21.jpg', link: 'B07W727Q21' },
      { name: 'Casafield seafoam ceramic Christmas tree', note: 'A hand-painted seafoam ceramic tree with snowy tips and tiny lights.', image: 'assets/products/B0CZ4LQY5W.jpg', link: 'B0CZ4LQY5W' },
      { name: 'National Tree Company champagne gold tinsel tree, 4 ft', note: 'A pre-lit champagne tinsel tree with mid-century charm for a corner or entry.', image: 'assets/products/B00MVAIGYY.jpg', link: 'B00MVAIGYY' },
      { name: 'White and silver mercury glass ornaments, 12 pack', note: 'Vintage-style mercury glass balls in white and antique silver.', image: 'assets/products/B08TRHGWDX.jpg', link: 'B08TRHGWDX' },
      { name: 'Gold glass drop ornaments', note: 'Ornate gold glass drops and finials with an heirloom look.', image: 'assets/products/B09WCWDR56.jpg', link: 'B09WCWDR56' },
      { name: 'Old World Christmas glass bluebird clip ornament', note: 'A soft blue blown glass bird on a clip for a collected, nostalgic tree.', image: 'assets/products/B006O5L2RA.jpg', link: 'B006O5L2RA' },
      { name: 'Kurt Adler Early Years glass oval ornaments', note: 'Elongated reflector ovals in muted jewel tones, a faithful vintage reproduction.', image: 'assets/products/B0032COAH2.jpg', link: 'B0032COAH2' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-tree-topper-ideas',
    title: 'Christmas Tree Topper Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas tree topper ideas that look expensive, from Amazon: oversized ribbon bows, gold and capiz stars, lighted angels and glitter sprays.',
    intro: 'The topper is the first thing anyone sees on a Christmas tree, so it is the easiest place to make the whole tree look expensive. Go big: an oversized ribbon bow with long streamers, a lit star with real texture or a soft ivory angel. Then frame it with a few glitter sprays and berry picks so the top looks full and florist-styled instead of bare.',
    image: 'assets/pins/christmas-tree-topper-ideas.jpg',
    imageAlt: 'Collage of Christmas tree toppers from Amazon: a champagne gold ribbon topper bow, velvet plaid bow, gold leaf star, capiz Bethlehem star, rattan star, ivory and gold angels, a silver snowflake and champagne glitter sprays',
    products: [
      { name: 'Champagne gold swirl tree topper bow', note: 'An oversized champagne gold bow with four long streamers that flow down the tree.', image: 'assets/products/B09533TQY2.jpg', link: 'B09533TQY2' },
      { name: 'Kurt Adler gold leaf star treetop', note: 'A gold star cut with a leaf pattern that looks like an antique piece.', image: 'assets/products/B009TXR93A.jpg', link: 'B009TXR93A' },
      { name: 'Kurt Adler lighted ivory and gold angel treetop', note: 'A softly lit angel in an ivory and gold gown with feathered wings.', image: 'assets/products/B00CAJFKYA.jpg', link: 'B00CAJFKYA' },
      { name: 'Kurt Adler lighted capiz Bethlehem star treetop', note: 'A lit capiz shell Bethlehem star that glows warm and pearly.', image: 'assets/products/B07R11M12Z.jpg', link: 'B07R11M12Z' },
      { name: 'Brown velvet and plaid tree topper bow', note: 'A layered bow of brown velvet and green plaid ribbon with long tails, very Ralph Lauren.', image: 'assets/products/B0GV2ZPGFG.jpg', link: 'B0GV2ZPGFG' },
      { name: 'Kurt Adler lighted gold rattan star treetop', note: 'A woven rattan star with warm lights for a natural, organic tree.', image: 'assets/products/B002TGWLA0.jpg', link: 'B002TGWLA0' },
      { name: 'Kurt Adler lighted gold angel treetop', note: 'A golden angel in a sheer gown with clear lights for a glowing finish.', image: 'assets/products/B084TPJRH7.jpg', link: 'B084TPJRH7' },
      { name: 'Large burlap tree topper bow', note: 'A big neutral burlap and linen-look bow for a farmhouse or neutral tree.', image: 'assets/products/B09MJJ8G31.jpg', link: 'B09MJJ8G31' },
      { name: 'Silver glitter snowflake tree topper', note: 'A sparkling silver snowflake topper for a wintry white and silver tree.', image: 'assets/products/B07QD2PV2Y.jpg', link: 'B07QD2PV2Y' },
      { name: 'Red plaid tree topper bow', note: 'A classic red tartan bow with long tails for a cozy plaid tree.', image: 'assets/products/B0DDC5V9NQ.jpg', link: 'B0DDC5V9NQ' },
      { name: 'Silver glitter swirl star tree topper', note: 'An open swirl star in silver glitter that lets the lights shine through.', image: 'assets/products/B07QDPDQRJ.jpg', link: 'B07QDPDQRJ' },
      { name: 'Sea Team champagne glitter cypress picks, 24 pack', note: 'Champagne glitter twigs to fan out around the topper like a florist spray.', image: 'assets/products/B0B5TMM5XW.jpg', link: 'B0B5TMM5XW' },
      { name: 'Sea Team champagne glitter berry picks, 24 pack', note: 'Champagne berry stems that frame the topper with soft sparkle.', image: 'assets/products/B08D69PHQT.jpg', link: 'B08D69PHQT' },
      { name: 'Gold and green picks with pinecones, 6 pack', note: 'Evergreen picks with gold balls and pinecones to fill in under the topper.', image: 'assets/products/B09BFK2XV7.jpg', link: 'B09BFK2XV7' },
      { name: 'Champagne snowflake tree topper bow', note: 'A champagne bow with snowflake ribbon and long streamers for a soft gold tree.', image: 'assets/products/B0B968N4WD.jpg', link: 'B0B968N4WD' },
      { name: 'Kurt Adler lighted ivory angel treetop', note: 'An ivory and gold angel with lit skirt and ribbon details.', image: 'assets/products/B002TGYK18.jpg', link: 'B002TGYK18' },
      { name: 'Kurt Adler lighted natural rattan star treetop', note: 'A natural rattan star with warm lights, simple and organic.', image: 'assets/products/B004B9RKI6.jpg', link: 'B004B9RKI6' },
      { name: 'Kurt Adler Early Years glass finial treetop', note: 'A three-tier blown glass finial topper with vintage stripes.', image: 'assets/products/B01MRHL8LI.jpg', link: 'B01MRHL8LI' },
      { name: 'Kurt Adler lighted crystal snowflake treetop', note: 'A lit acrylic crystal snowflake that sparkles like ice.', image: 'assets/products/B01N6T7OI4.jpg', link: 'B01N6T7OI4' },
      { name: 'Red snowflake tree topper bow', note: 'A full red mesh bow with snowflake ribbon and long streamers.', image: 'assets/products/B09Q5WTLLF.jpg', link: 'B09Q5WTLLF' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'small-apartment-christmas-decor',
    title: 'Small Apartment Christmas Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Small apartment Christmas decor from Amazon: slim pencil trees, tabletop trees, window candles, mini wreaths and no-nail hooks for renters.',
    intro: 'Decorating a small apartment for Christmas is about going up instead of out: a slim pencil tree in a woven collar, a tabletop tree on the sideboard, window candles, lit garland and mini wreaths on knobs. Clear adhesive hooks hold it all without nails, so renters can decorate fully and leave the walls untouched in January.',
    image: 'assets/pins/small-apartment-christmas-decor.jpg',
    imageAlt: 'Collage of small apartment Christmas decor from Amazon: a pre-lit slim pencil Christmas tree, a snowy tabletop tree, a mini lit fir tree, window candles, mini eucalyptus wreaths, a woven tree collar and white Christmas village houses',
    products: [
      { name: 'HOMCOM pre-lit noble fir pencil tree, 6 ft', note: 'A slim lit pencil tree that gives a full-height tree look in a small corner.', image: 'assets/products/B0CG1QK5NN.jpg', link: 'B0CG1QK5NN' },
      { name: 'DECSPAS pre-lit snowy mini tree, 3 ft', note: 'A frosted tabletop tree with pinecones and berries in a burlap base.', image: 'assets/products/B0H2M5MHS4.jpg', link: 'B0H2M5MHS4' },
      { name: 'National Tree Company pre-lit mini fir tree, 24 inch', note: 'A lit 2 ft tree for a console, desk or kitchen counter.', image: 'assets/products/B013LSNBBW.jpg', link: 'B013LSNBBW' },
      { name: 'Homemory window candles with remote, 6 pack', note: 'Flameless window candles with suction cups for a classic glow in every window.', image: 'assets/products/B0C45GRDJ3.jpg', link: 'B0C45GRDJ3' },
      { name: 'LSKYTOP mini eucalyptus wreaths, 6 pack', note: 'Small faux eucalyptus wreaths to hang on cabinet knobs, windows or chairs.', image: 'assets/products/B0BQXHD59K.jpg', link: 'B0BQXHD59K' },
      { name: 'Woven paper rope tree collar, 26 inch', note: 'A natural woven collar that hides the stand and makes a slim tree look finished.', image: 'assets/products/B0DFVNSXXC.jpg', link: 'B0DFVNSXXC' },
      { name: 'Ovootok Christmas village houses with lights, 9 pieces', note: 'White wood houses with glowing windows and sisal trees for a shelf or sideboard.', image: 'assets/products/B0CFXG4TXR.jpg', link: 'B0CFXG4TXR' },
      { name: 'Norfolk pine garland with lights, 6 ft', note: 'A short lit garland sized for a small mantel, shelf or doorway.', image: 'assets/products/B0H4GK82V2.jpg', link: 'B0H4GK82V2' },
      { name: 'Cast iron snowflake stocking holders, 4 pack', note: 'Heavy stocking holders that hang stockings from a shelf when there is no fireplace.', image: 'assets/products/B08KVZ5L8Z.jpg', link: 'B08KVZ5L8Z' },
      { name: 'Realistic mini PE Christmas tree, 3 ft', note: 'A small, realistic tree for a side table or entry corner.', image: 'assets/products/B0FB3JYHNZ.jpg', link: 'B0FB3JYHNZ' },
      { name: 'Lyrow mini candle ring wreaths, 6 pack', note: 'Small berry wreaths for candles, cabinet doors or napkin rings.', image: 'assets/products/B0CFY35CXL.jpg', link: 'B0CFY35CXL' },
      { name: 'HOMCOM artificial pencil Christmas tree, 6 ft', note: 'A narrow unlit pencil tree that fits between furniture.', image: 'assets/products/B07HH2YM81.jpg', link: 'B07HH2YM81' },
      { name: 'Homemory window candles with timer, 6 pack', note: 'Battery window candles with a remote, timer and dimmer for renters.', image: 'assets/products/B0C45BPJFC.jpg', link: 'B0C45BPJFC' },
      { name: 'Clear adhesive wall hooks, 15 pack', note: 'No-nail clear hooks for wreaths, garland and lights that come off clean.', image: 'assets/products/B0DSSRMM2N.jpg', link: 'B0DSSRMM2N' },
      { name: 'WEMADE pre-lit Christmas garland, 15.4 ft', note: 'A long battery lit garland to frame a window or doorway without outlets.', image: 'assets/products/B0FMF2W44J.jpg', link: 'B0FMF2W44J' },
      { name: 'Woven paper rope tree collar, 28 inch', note: 'A slightly wider woven collar for a fuller small tree.', image: 'assets/products/B0DFVN1Q34.jpg', link: 'B0DFVN1Q34' },
      { name: 'National Tree Company Kincaid spruce mini tree, 3 ft', note: 'A classic little spruce for a tabletop or a small corner.', image: 'assets/products/B074D6KZM7.jpg', link: 'B074D6KZM7' },
      { name: 'National Tree Company Kingswood fir slim tree, 6.5 ft', note: 'A slim full-height fir that fits a narrow apartment corner.', image: 'assets/products/B00F424DHK.jpg', link: 'B00F424DHK' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-bedroom-decor-ideas',
    title: 'Christmas Bedroom Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas bedroom decor ideas from Amazon: plaid flannel sheets, chunky knit throws, green velvet pillows, a snowy mini tree and a fir candle.',
    intro: 'A cozy Christmas bedroom doesn\'t need a tree in every corner. Start with the bed: plaid flannel sheets, a chunky knit throw and two deep green velvet pillows. Add one small lit tree on the nightstand, a wreath above the headboard and a fir candle, then keep the rest calm in cream, olive and pale oak so the room still feels like a retreat.',
    image: 'assets/pins/christmas-bedroom-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas bedroom decor from Amazon: olive and beige plaid flannel sheets, cream chunky knit and faux fur throws, dark green velvet pillows, pine cone pillow covers, a snowy mini tree, a white ceramic tree, pre-lit wreaths and a Frasier Fir candle',
    products: [
      { name: 'Chunky knit chenille throw blanket', note: 'A hand-knit cream throw with big, soft loops to drape across the foot of the bed.', image: 'assets/products/B0CC24HCBB.jpg', link: 'B0CC24HCBB' },
      { name: 'Ruvanti olive plaid flannel sheet set', note: 'Brushed cotton flannel in an olive and cream plaid that feels like a cabin hotel.', image: 'assets/products/B08XPRBHSP.jpg', link: 'B08XPRBHSP' },
      { name: 'Thymes Frasier Fir candle', note: 'The classic fir and cedarwood candle that makes a bedroom smell like a fresh-cut tree.', image: 'assets/products/B00YPP2LBM.jpg', link: 'B00YPP2LBM' },
      { name: 'Jeneoo dark green velvet pillow covers, set of 2', note: 'Deep forest green velvet that adds Christmas color without a single ornament.', image: 'assets/products/B0B9NXRWV3.jpg', link: 'B0B9NXRWV3' },
      { name: 'DECSPAS 2 ft snowy pre-lit mini tree', note: 'A flocked tabletop tree in a burlap base, sized for a nightstand or dresser.', image: 'assets/products/B09D7HR565.jpg', link: 'B09D7HR565' },
      { name: 'Pine cone pillow covers, set of 2', note: 'Cream covers printed with pine cones and needles for a quiet woodland touch.', image: 'assets/products/B0FHPGTKJ5.jpg', link: 'B0FHPGTKJ5' },
      { name: 'White ceramic Christmas tree night light', note: 'A vintage-style glazed ceramic tree that plugs in and glows all night.', image: 'assets/products/B08ZT1BMV8.jpg', link: 'B08ZT1BMV8' },
      { name: 'National Tree Company 30 inch pre-lit spruce wreath', note: 'A full, lit spruce wreath to hang above the headboard or on the bedroom door.', image: 'assets/products/B074D8DTLV.jpg', link: 'B074D8DTLV' },
      { name: 'Ruvanti beige and grey plaid flannel sheets', note: 'A softer neutral plaid in cotton flannel for a calm winter bed.', image: 'assets/products/B0C8F6WQN4.jpg', link: 'B0C8F6WQN4' },
      { name: 'Bedsure faux fur sherpa throw', note: 'A fluffy cream faux fur throw for a reading chair or the end of the bed.', image: 'assets/products/B07W9C99JH.jpg', link: 'B07W9C99JH' },
      { name: 'Cream cotton knit throw blanket', note: 'A machine-washable cotton knit in cream that layers over any duvet.', image: 'assets/products/B08F48LR45.jpg', link: 'B08F48LR45' },
      { name: 'Beautex buffalo plaid sherpa throw', note: 'Red and black buffalo check with a sherpa back for classic cabin warmth.', image: 'assets/products/B08CV9SPPT.jpg', link: 'B08CV9SPPT' },
      { name: 'Deconovo faux linen pillow covers', note: 'Plain white linen-look covers that calm down a bed full of plaid and velvet.', image: 'assets/products/B01N5BWFAX.jpg', link: 'B01N5BWFAX' },
      { name: 'DecorbyHannah 20 inch Norfolk pine wreath', note: 'A lit Norfolk pine wreath with a natural, airy shape.', image: 'assets/products/B0DXVFT9DF.jpg', link: 'B0DXVFT9DF' },
      { name: 'Lonava red plaid flannel sheet set', note: 'Red and white plaid in heavy cotton flannel for a classic Christmas bed.', image: 'assets/products/B0FRS2Y5QF.jpg', link: 'B0FRS2Y5QF' },
      { name: 'Battilo cream chunky knit throw', note: 'A chunky ivory knit throw with a cozy, handmade look.', image: 'assets/products/B0G197KMWR.jpg', link: 'B0G197KMWR' },
      { name: 'RainRoad dark green velvet pillow covers, set of 2', note: 'Soft dark green velvet covers that pair with plaid sheets and cream throws.', image: 'assets/products/B07TZZ9KQN.jpg', link: 'B07TZZ9KQN' },
      { name: 'DII red buffalo check throw with tassels', note: 'A red and white check throw with tassels for a farmhouse Christmas bed.', image: 'assets/products/B07MHRHQ7Z.jpg', link: 'B07MHRHQ7Z' },
      { name: 'National Tree Company 24 inch flocked pine wreath', note: 'A frosted, pre-lit pine wreath with red berries that reads snowy and soft.', image: 'assets/products/B00EJ2DAX4.jpg', link: 'B00EJ2DAX4' },
      { name: '3 ft pre-lit Christmas tree with timer', note: 'A small lit tree with a timer, sized for a bedroom corner.', image: 'assets/products/B0FLPD67K9.jpg', link: 'B0FLPD67K9' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'advent-calendar-ideas',
    title: 'Advent Calendar Ideas for Grown Ups',
    category: 'gift-guides',
    date: '2026-10-26',
    description: 'Advent calendar ideas for grown ups from Amazon: wooden calendars to refill, linen and burlap bags to fill, a tea calendar and a gold advent ring.',
    intro: 'The prettiest advent calendars are the ones you keep: a wooden house or tree with 24 drawers, or a set of numbered bags you fill yourself with tea, chocolate, notes or small beauty treats. They sell out before December 1, so pick yours now and fill it over a weekend. For a ready-made option, a loose leaf tea calendar is a calm, grown-up gift.',
    image: 'assets/pins/advent-calendar-ideas.jpg',
    imageAlt: 'Collage of advent calendars from Amazon: a white wooden house advent calendar with lights, a natural wood tree advent calendar with drawers, wooden village calendars, red linen and burlap drawstring advent bags, kraft mini envelopes, a loose leaf tea advent calendar and gold advent candle rings',
    products: [
      { name: 'White wooden advent calendar house with lights', note: 'A white wooden house with 24 numbered drawers and a glowing window, refillable every year.', image: 'assets/products/B07XT92VVG.jpg', link: 'B07XT92VVG' },
      { name: 'Woodpeckers wooden tree advent calendar', note: 'A natural wood Christmas tree with 24 empty drawers to fill, paint or leave raw.', image: 'assets/products/B07JH27YDD.jpg', link: 'B07JH27YDD' },
      { name: 'VAHDAM loose leaf tea advent calendar', note: '24 loose leaf teas in small caddies, a grown-up calendar for tea lovers.', image: 'assets/products/B08FXWK7LT.jpg', link: 'B08FXWK7LT' },
      { name: 'LIHAO red linen advent bags with wooden numbers', note: '24 linen drawstring pouches with wooden number tags, ready to fill and hang.', image: 'assets/products/B08FD2NPWS.jpg', link: 'B08FD2NPWS' },
      { name: 'Clever Creations wooden village advent calendar', note: 'A natural wood reindeer village with LED lights and drawers to fill.', image: 'assets/products/B072MP1CFZ.jpg', link: 'B072MP1CFZ' },
      { name: 'Naler red burlap advent bags', note: '24 red drawstring bags with wooden ornaments and number tags for a DIY calendar.', image: 'assets/products/B08D62B2V4.jpg', link: 'B08D62B2V4' },
      { name: 'White forest wooden advent house', note: 'A double-gabled white house with a lit forest scene and 24 drawers.', image: 'assets/products/B07PV9CQG9.jpg', link: 'B07PV9CQG9' },
      { name: 'Gold advent candle ring for tapers', note: 'A slim gold ring that holds four taper candles, one lit for each Sunday of Advent.', image: 'assets/products/B0DCG4QLNL.jpg', link: 'B0DCG4QLNL' },
      { name: 'Mini kraft envelopes, 100 pack', note: 'Tiny kraft envelopes for notes, date ideas or gift cards: a simple paper advent calendar.', image: 'assets/products/B0791LT1RS.jpg', link: 'B0791LT1RS' },
      { name: 'HOMCOM light-up wooden advent calendar', note: 'A natural wood village calendar that lights up, with drawers for small treats.', image: 'assets/products/B09GM3S19Y.jpg', link: 'B09GM3S19Y' },
      { name: 'Gold advent wreath candle holder', note: 'A gold metal ring for five candles to layer with greenery on a table.', image: 'assets/products/B0H6GNYH5P.jpg', link: 'B0H6GNYH5P' },
      { name: 'Wooden sleigh Christmas countdown blocks', note: 'A rustic wood sleigh with number blocks that counts down the days to Christmas.', image: 'assets/products/B0B7QR2X2K.jpg', link: 'B0B7QR2X2K' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gift-basket-ideas-for-her',
    title: 'Gift Basket Ideas for Her',
    category: 'gift-guides',
    date: '2026-10-26',
    description: 'Gift basket ideas for her from Amazon: a scalloped woven basket, amber jar candles, cozy socks, mugs, hand cream and a faux fur throw.',
    intro: 'The best gift baskets feel like a cozy night in: start with a pretty woven basket, then add a candle, a good mug, soft socks, a hand cream and one small keepsake like a ring dish. Keep the palette calm and natural so the whole basket looks boutique-made, and finish with a fluffy throw if the basket is big enough.',
    image: 'assets/pins/gift-basket-ideas-for-her.jpg',
    imageAlt: 'Collage of gift basket ideas for her from Amazon: a scalloped woven basket, amber jar candles, cream chenille socks, white porcelain mugs, shea hand cream, a gray faux fur throw, a lavender spa set, ceramic ring dishes and silk scrunchies',
    products: [
      { name: 'Paper rope scalloped baskets, set of 2', note: 'Woven baskets with a scalloped rim, the prettiest base for a gift basket.', image: 'assets/products/B0FMXMHD9W.jpg', link: 'B0FMXMHD9W' },
      { name: 'Amber jar soy candles, 8 pack', note: 'Scented soy candles in amber glass jars that look like a boutique set.', image: 'assets/products/B0GF7WPNCJ.jpg', link: 'B0GF7WPNCJ' },
      { name: 'UGG cozy chenille socks, cream', note: 'Plush cream chenille socks from UGG, a small luxury she will wear all winter.', image: 'assets/products/B06XRMZNTD.jpg', link: 'B06XRMZNTD' },
      { name: 'vancasso white porcelain mugs', note: 'Simple white porcelain mugs that look clean and minimal in any basket.', image: 'assets/products/B0F8MPHXPX.jpg', link: 'B0F8MPHXPX' },
      { name: 'L\'Occitane shea butter hand cream', note: 'The cult shea hand cream in a travel tube, a classic basket filler.', image: 'assets/products/B0G3XTHKJF.jpg', link: 'B0G3XTHKJF' },
      { name: 'Bedsure gray faux fur throw', note: 'A fluffy gray faux fur throw to roll up and tuck into a big basket.', image: 'assets/products/B07X3BX7WM.jpg', link: 'B07X3BX7WM' },
      { name: 'White mandala ceramic ring dish', note: 'A white ceramic ring holder with a lace-like rim for her nightstand.', image: 'assets/products/B096X3YK3T.jpg', link: 'B096X3YK3T' },
      { name: 'Lavender spa gift set', note: 'A calm lavender self-care set with bath and body favorites.', image: 'assets/products/B09SY4TJN3.jpg', link: 'B09SY4TJN3' },
      { name: 'Fuzzy slipper socks in fall neutrals', note: 'Fluffy socks in cream, tan and brown, an easy cozy add-in.', image: 'assets/products/B0DJQQYS7K.jpg', link: 'B0DJQQYS7K' },
      { name: 'Happyiren cotton rope basket', note: 'A soft white rope basket that doubles as storage after the gift.', image: 'assets/products/B0CN8N224C.jpg', link: 'B0CN8N224C' },
      { name: 'Ceramic flower jewelry dish', note: 'A small petal-shaped dish for rings and earrings.', image: 'assets/products/B09XXDJH8T.jpg', link: 'B09XXDJH8T' },
      { name: 'Rurality medium wicker gift basket', note: 'A classic willow basket with handles, ready to fill.', image: 'assets/products/B08XBKNZMB.jpg', link: 'B08XBKNZMB' },
      { name: 'Morandi color ceramic mugs, set of 6', note: 'Two-tone mugs in muted pastels with a raw clay base.', image: 'assets/products/B0BJ8ZSGGL.jpg', link: 'B0BJ8ZSGGL' },
      { name: 'Tea Forte Kati infuser cup', note: 'A lidded ceramic tea cup with a built-in infuser for loose tea lovers.', image: 'assets/products/B008DVSATQ.jpg', link: 'B008DVSATQ' },
      { name: 'Mulberry silk scrunchies, 5 pack', note: 'Silk scrunchies in soft jewel tones that are gentle on hair.', image: 'assets/products/B0DQBPH86M.jpg', link: 'B0DQBPH86M' },
      { name: 'Rurality small wicker gift basket', note: 'A smaller willow basket for a sweet, simple gift.', image: 'assets/products/B00LI0FLQY.jpg', link: 'B00LI0FLQY' },
      { name: 'DOWAN embossed stoneware mugs, set of 6', note: 'Textured white mugs with an embossed pattern that look handmade.', image: 'assets/products/B0CR65F13V.jpg', link: 'B0CR65F13V' },
      { name: 'Fluffy plush slipper socks', note: 'Soft, chunky slipper socks in pretty neutral and pastel shades.', image: 'assets/products/B08GHNRG5Q.jpg', link: 'B08GHNRG5Q' },
      { name: 'Gold rim initial trinket dish', note: 'A white dish with a gold rim and initial, a personal little extra.', image: 'assets/products/B09RP5BRPS.jpg', link: 'B09RP5BRPS' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'new-years-eve-party-decor',
    title: 'New Year\'s Eve Party Decor That Looks Expensive',
    category: 'hosting-recipes',
    date: '2026-10-26',
    description: 'New Year\'s Eve party decor from Amazon that looks expensive: crystal coupes, a ribbed glass ice bucket, disco balls, gold candles and napkins.',
    intro: 'A New Year\'s Eve party at home looks expensive when you keep it to three materials: clear crystal, gold and mirror. Set out coupes and a champagne bucket on ice, cluster gold taper candles at different heights, add one big disco ball to catch the candlelight, and finish with gold or black cocktail napkins. It all works for a dinner for six or a full house.',
    image: 'assets/pins/new-years-eve-party-decor.jpg',
    imageAlt: 'Collage of New Year\'s Eve party decor from Amazon: crystal and ribbed coupe glasses, a mirror disco ball, a ribbed glass ice bucket, a hammered champagne bucket, gold taper and hurricane candle holders, gold napkins, a gold cocktail shaker, gold chargers and gold spray centerpieces',
    products: [
      { name: 'FAWLES crystal coupe glasses, set of 6', note: 'Short-stem crystal coupes for the midnight toast and cocktails all night.', image: 'assets/products/B08Y8R3T64.jpg', link: 'B08Y8R3T64' },
      { name: 'Ribbed crystal coupe glasses, set of 6', note: 'Vintage-style ribbed coupes that look like a hotel bar.', image: 'assets/products/B0DFQ5952K.jpg', link: 'B0DFQ5952K' },
      { name: 'Alytimes 8 inch mirror disco ball', note: 'A classic silver mirror ball to set on the bar or hang above the table.', image: 'assets/products/B07K79R8M4.jpg', link: 'B07K79R8M4' },
      { name: 'Youdepot 4 inch disco balls, 2 pack', note: 'Small mirror balls to cluster on a tray or along the mantel.', image: 'assets/products/B0FG865RW8.jpg', link: 'B0FG865RW8' },
      { name: 'Le\'raze ribbed glass ice bucket with tongs', note: 'A ribbed glass bucket with a wood lid and gold tongs for chilled champagne.', image: 'assets/products/B0CLMFB2FN.jpg', link: 'B0CLMFB2FN' },
      { name: 'Chef Craft hammered champagne bucket', note: 'A hammered stainless bucket that holds a bottle on ice.', image: 'assets/products/B073JBVBT5.jpg', link: 'B073JBVBT5' },
      { name: 'Brass gold taper candle holders, set of 6', note: 'Slim gold candlesticks in staggered heights for candlelight at midnight.', image: 'assets/products/B0F5Q2BJ9X.jpg', link: 'B0F5Q2BJ9X' },
      { name: 'Hewory gold hurricane candle holders, set of 6', note: 'Glass hurricane sleeves on gold bases for a glowing party table.', image: 'assets/products/B0DCVRR4NN.jpg', link: 'B0DCVRR4NN' },
      { name: 'White and gold dot cocktail napkins, 100 pack', note: 'White napkins with gold foil dots for the bar and dessert table.', image: 'assets/products/B07GKJ5QHV.jpg', link: 'B07GKJ5QHV' },
      { name: 'Gold linen-feel cocktail napkins', note: 'Linen-like gold napkins that look like cloth, not paper.', image: 'assets/products/B07X1PJ9H7.jpg', link: 'B07X1PJ9H7' },
      { name: 'Beistle gold metallic spray centerpieces, 2 pack', note: 'Gold firework-style sprays to tuck into a vase for a New Year burst.', image: 'assets/products/B09W7TT3RN.jpg', link: 'B09W7TT3RN' },
      { name: 'Gold cocktail shaker set', note: 'A gold shaker, jigger and bar spoon for a midnight martini.', image: 'assets/products/B0CJCN9XK2.jpg', link: 'B0CJCN9XK2' },
      { name: 'Riedel Spey crystal whisky tumblers, set of 2', note: 'Heavy crystal tumblers for an old fashioned at the countdown.', image: 'assets/products/B07CNR317D.jpg', link: 'B07CNR317D' },
      { name: 'LIYH gold charger plates, set of 8', note: 'Gold chargers with a scalloped rim that dress up a NYE dinner.', image: 'assets/products/B0FGCQK58N.jpg', link: 'B0FGCQK58N' },
      { name: 'Juvale gold leaf placemats, 10 pack', note: 'Cut-out gold leaf placemats for a glamorous table.', image: 'assets/products/B0824DRNS8.jpg', link: 'B0824DRNS8' },
      { name: 'Stainless steel champagne bucket with scoop', note: 'A polished bucket with handles and an ice scoop for the bar cart.', image: 'assets/products/B0CK874GWN.jpg', link: 'B0CK874GWN' },
      { name: 'MTLEE mini disco ball ornaments, 20 pack', note: 'Mirror balls in mixed sizes to scatter on the table or hang in a cluster.', image: 'assets/products/B09MW87J57.jpg', link: 'B09MW87J57' },
      { name: 'Black and gold cocktail napkins, 100 pack', note: 'Black napkins with gold foil dots for a moody NYE bar.', image: 'assets/products/B0B25DXMLK.jpg', link: 'B0B25DXMLK' },
      { name: 'NUPTIO gold pillar candle holders', note: 'Turned gold pillar holders for ivory candles on the buffet.', image: 'assets/products/B07G6YZPPH.jpg', link: 'B07G6YZPPH' },
      { name: 'Gold 23 piece bartender kit with stand', note: 'A full gold bar set with shaker, strainers and tools on a display stand.', image: 'assets/products/B0B99DZ55F.jpg', link: 'B0B99DZ55F' },
      { name: 'OGGI double wall wine chiller', note: 'An insulated steel sleeve that keeps a champagne bottle cold without ice.', image: 'assets/products/B001HLW2P2.jpg', link: 'B001HLW2P2' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'friendsgiving-table-ideas',
    title: 'Friendsgiving Table Ideas',
    category: 'hosting-recipes',
    date: '2026-10-26',
    description: 'Friendsgiving table ideas from Amazon: an acacia salad bowl, ceramic pumpkins, a marble cheese board, linen napkins and stemless glasses.',
    intro: 'A Friendsgiving table that looks hosted, not thrown together, needs only a few good pieces: one big wooden salad bowl, white platters for the turkey and sides, a marble board for cheese, stemless glasses that survive a crowd and soft linen napkins. A white ceramic pumpkin in the middle and a touch of marble or crystal finish the look in a calm fall palette.',
    image: 'assets/pins/friendsgiving-table-ideas.jpg',
    imageAlt: 'Collage of Friendsgiving table finds from Amazon: a white ceramic pumpkin, an acacia salad bowl with servers, white oval platters, a marble cheese board, stemless wine glasses, flax linen napkins, a cake stand, cheese knives and a crystal butter dish',
    products: [
      { name: 'Pearhead white ceramic pumpkin with gold stem', note: 'A glossy white pumpkin with a gold stem, an easy centerpiece that lasts all fall.', image: 'assets/products/B0B99NR7M2.jpg', link: 'B0B99NR7M2' },
      { name: 'AIDEA acacia wood salad bowl with servers', note: 'A large, warm-toned acacia bowl with matching servers for the big Friendsgiving salad.', image: 'assets/products/B076HN9Z8Z.jpg', link: 'B076HN9Z8Z' },
      { name: 'DOWAN oval serving platters, set of 3', note: 'Nesting white platters in three sizes for the turkey, sides and dessert.', image: 'assets/products/B07T7MYF4D.jpg', link: 'B07T7MYF4D' },
      { name: 'White marble cheese board', note: 'A real marble slab that turns a simple cheese plate into a styled board.', image: 'assets/products/B08JKCRXX7.jpg', link: 'B08JKCRXX7' },
      { name: 'FAWLES stemless wine glasses, set of 12', note: 'A dozen sturdy stemless glasses, enough for the whole table.', image: 'assets/products/B08Y88SZ52.jpg', link: 'B08Y88SZ52' },
      { name: 'Lightnpro flax linen napkins, set of 12', note: 'Hemstitched flax napkins in a soft oat tone that look relaxed and expensive.', image: 'assets/products/B0797PK1RN.jpg', link: 'B0797PK1RN' },
      { name: 'Radicaln marble salt cellar with lid', note: 'A swirled onyx marble salt cellar that adds a warm amber note to the table.', image: 'assets/products/B0C2YWSP5W.jpg', link: 'B0C2YWSP5W' },
      { name: 'Martha Stewart white pedestal cake stand', note: 'A classic stoneware pedestal for pies, cakes or a cheese display.', image: 'assets/products/B0BRF4XH16.jpg', link: 'B0BRF4XH16' },
      { name: 'BOSKA mini Copenhagen cheese knives, set of 4', note: 'Sleek stainless cheese knives that look designer on any board.', image: 'assets/products/B06WWQXHMS.jpg', link: 'B06WWQXHMS' },
      { name: 'White pumpkins with gold lines, 10 pieces', note: 'Small white pumpkins with gold ribs to scatter down the table.', image: 'assets/products/B09VP7RHVR.jpg', link: 'B09VP7RHVR' },
      { name: 'Samhita acacia wood serving board', note: 'A paddle board for bread, cheese or charcuterie with a warm wood grain.', image: 'assets/products/B09H4GQ187.jpg', link: 'B09H4GQ187' },
      { name: 'LE TAUCI gravy boat with saucer', note: 'A white ceramic gravy boat with its own saucer to catch drips.', image: 'assets/products/B0B3JBPQ2W.jpg', link: 'B0B3JBPQ2W' },
      { name: 'Crystal covered butter dish', note: 'A cut-glass butter dish that brings a vintage sparkle to the table.', image: 'assets/products/B0CQJT88SM.jpg', link: 'B0CQJT88SM' },
      { name: 'Stolzle Lausitz crystal stemless tumblers, set of 4', note: 'Thin crystal tumblers that feel like a restaurant pour.', image: 'assets/products/B07WTX7155.jpg', link: 'B07WTX7155' },
      { name: 'DELLING rectangular porcelain platters, set of 3', note: 'Clean white rectangular platters for a buffet-style spread.', image: 'assets/products/B088QZ56RS.jpg', link: 'B088QZ56RS' },
      { name: 'Gibson Home scalloped acacia salad bowl set', note: 'A scalloped wooden bowl with servers, a softer take on the classic salad bowl.', image: 'assets/products/B0FJHJGLZC.jpg', link: 'B0FJHJGLZC' },
      { name: 'SweetNeedle linen napkins', note: 'Handmade hemstitched linen napkins in a natural flax color.', image: 'assets/products/B075F218V7.jpg', link: 'B075F218V7' },
      { name: 'Stemless wine glasses, set of 4', note: 'Modern stemless glasses with a smooth rim for red or white.', image: 'assets/products/B0F82SRVMG.jpg', link: 'B0F82SRVMG' },
      { name: 'White porcelain cake stand, 10 inch', note: 'A simple white pedestal that lifts pies and desserts to eye level.', image: 'assets/products/B0D9JF3RP3.jpg', link: 'B0D9JF3RP3' },
      { name: 'Cheese knives with wooden handles, 6 pieces', note: 'Mini cheese knives with warm wood handles for every board.', image: 'assets/products/B0C8MYF17X.jpg', link: 'B0C8MYF17X' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'winter-decor-ideas-after-christmas',
    title: 'Winter Decor Ideas After Christmas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Winter decor ideas after Christmas from Amazon: frosted pine, white birch logs, pinecones, faux fur throws, lanterns and candle holders.',
    intro: 'When the tree comes down, the house can still feel cozy. Swap ornaments for nature: frosted pine stems in a white vase, white birch logs by the fireplace, a bowl of pinecones, wooden lanterns and candlelight. Layer an ivory faux fur throw and fluffy pillows, and the January living room looks calm, wintry and expensive, with nothing that says Christmas.',
    image: 'assets/pins/winter-decor-ideas-after-christmas.jpg',
    imageAlt: 'Collage of winter decor after Christmas from Amazon: frosted white pine branches, an ivory faux fur throw, white birch logs, whitewashed pillar candle holders, wooden lanterns, pinecones, faux fur pillows, white berry stems, glass cloches and magnolia stems',
    products: [
      { name: 'Hananona frosted white pine branches, 50 pieces', note: 'Snowy white pine stems to fill a vase or tuck into a bowl for January.', image: 'assets/products/B0H4YBT5K8.jpg', link: 'B0H4YBT5K8' },
      { name: 'Marbled ivory faux fur throw, XL', note: 'A big ivory and taupe faux fur throw that makes any sofa look like a ski lodge.', image: 'assets/products/B07BDPJ3YN.jpg', link: 'B07BDPJ3YN' },
      { name: 'Wilson white birch logs, set of 12', note: 'Real white birch logs to stack in a fireplace, basket or by the hearth.', image: 'assets/products/B07MDHN5NB.jpg', link: 'B07MDHN5NB' },
      { name: 'Rustic white wooden pillar candle holders, set of 3', note: 'Whitewashed turned wood holders in three heights for pillar candles.', image: 'assets/products/B097QPND5Z.jpg', link: 'B097QPND5Z' },
      { name: 'Bdor wooden candle lanterns, set of 2', note: 'Warm wood lanterns with metal tops for a candlelit winter entry or hearth.', image: 'assets/products/B0BTVSJB6Q.jpg', link: 'B0BTVSJB6Q' },
      { name: 'Natural pinecones, 24 pack', note: 'Real pinecones to pile in a bowl or dough bowl all winter long.', image: 'assets/products/B077PNQTY3.jpg', link: 'B077PNQTY3' },
      { name: 'Cheer Collection shaggy faux fur pillows, set of 2', note: 'Plush frosted faux fur pillows for a soft winter sofa.', image: 'assets/products/B08232Y41Y.jpg', link: 'B08232Y41Y' },
      { name: 'White berry stems, 40 pieces', note: 'Snowy white berry sprays for a vase that feels wintry, not festive.', image: 'assets/products/B0D78FG59T.jpg', link: 'B0D78FG59T' },
      { name: 'ZEERSHEE glass cloche domes with wood base, set of 2', note: 'Bell jars to display pinecones, moss or a candle on a winter shelf.', image: 'assets/products/B0D8KMVM1J.jpg', link: 'B0D8KMVM1J' },
      { name: 'Real touch white magnolia stems', note: 'Creamy white magnolia blooms with glossy leaves for a quiet winter vase.', image: 'assets/products/B0C4Z3ZJKK.jpg', link: 'B0C4Z3ZJKK' },
      { name: 'White ceramic vase with twine', note: 'A simple white vase with a twine tie for winter stems.', image: 'assets/products/B09ZBBMLTH.jpg', link: 'B09ZBBMLTH' },
      { name: 'Snow frosted pine picks, 30 pieces', note: 'Flocked pine picks to tuck into lanterns, bowls and garland.', image: 'assets/products/B0DF2DJTK2.jpg', link: 'B0DF2DJTK2' },
      { name: 'Madison Park Zuri faux fur throw, snow leopard', note: 'A soft gray and ivory faux fur throw with a subtle snowy pattern.', image: 'assets/products/B07T2Y1QHF.jpg', link: 'B07T2Y1QHF' },
      { name: 'Large birch fireplace logs, set of 5', note: 'Chunky birch logs that fill an empty firebox with a clean, wintry look.', image: 'assets/products/B00XK0RGAO.jpg', link: 'B00XK0RGAO' },
      { name: 'Frosted pine spray branches, 10 pack', note: 'Full frosted pine sprays that look like fresh snowy cuttings.', image: 'assets/products/B0FF4NJ1K3.jpg', link: 'B0FF4NJ1K3' },
      { name: 'Large natural pinecones, 50 pieces', note: 'A mix of pinecone sizes for bowl fillers and winter vignettes.', image: 'assets/products/B0B2KNXL59.jpg', link: 'B0B2KNXL59' },
      { name: 'White wood pillar candle holders', note: 'Distressed white wood candlesticks for pillars in three heights.', image: 'assets/products/B0CHVHLGV8.jpg', link: 'B0CHVHLGV8' },
      { name: 'Abbott small bell glass cloche', note: 'A small clear bell jar to frame a pinecone or a tiny winter scene.', image: 'assets/products/B085JWXQ1T.jpg', link: 'B085JWXQ1T' },
      { name: 'White berry stems, 30 pack', note: 'Short white berry picks to add a snowy touch to vases and lanterns.', image: 'assets/products/B0HD6XDRGC.jpg', link: 'B0HD6XDRGC' },
      { name: 'Large birch logs, 6 pack', note: 'Unfinished birch logs for a stacked basket or fireplace display.', image: 'assets/products/B07PLPH3LT.jpg', link: 'B07PLPH3LT' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'coffee-bar-ideas',
    title: 'Coffee Bar Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Coffee bar ideas that look expensive, all from Amazon: glass canisters, a bamboo mug tree, gold pump syrup bottles, trays and ribbed glass mugs.',
    intro: 'A coffee bar that looks expensive is mostly about editing: one tray to define the station, glass jars so the beans become decor, matching mugs on a mug tree and a couple of syrup bottles with gold pumps. Keep the palette to glass, wood, marble and cream ceramic and the corner reads like a boutique cafe, not countertop clutter.',
    image: 'assets/pins/coffee-bar-ideas.jpg',
    imageAlt: 'Collage of coffee bar ideas from Amazon: a glass coffee bean jar with an acacia lid, a bamboo mug tree, glass syrup bottles with gold pumps, ribbed glass mugs, a marble tray, a gooseneck kettle and white ceramic mugs',
    products: [
      { name: 'Glass coffee bean jar with acacia lid and scoop', note: 'A clear jar with a wood lid that turns coffee beans into decor.', image: 'assets/products/B0GBTGZ64M.jpg', link: 'B0GBTGZ64M' },
      { name: 'Bamboo mug tree, 6 hooks', note: 'A warm bamboo mug tree with an octagon base that keeps favorite mugs on display.', image: 'assets/products/B09PV4WWQ1.jpg', link: 'B09PV4WWQ1' },
      { name: 'Glass syrup bottles with gold pumps, set of 2', note: 'Two glass syrup bottles with gold pumps that look like a cafe bar at home.', image: 'assets/products/B0BZ4BYWGT.jpg', link: 'B0BZ4BYWGT' },
      { name: 'Ribbed glass coffee mugs, 6 pack', note: 'Fluted glass mugs that show off every latte layer.', image: 'assets/products/B0BQ6R8DCD.jpg', link: 'B0BQ6R8DCD' },
      { name: 'Carrara oval marble tray', note: 'A white and gray marble tray that corrals syrups, sugar and spoons.', image: 'assets/products/B0FSZZPD3L.jpg', link: 'B0FSZZPD3L' },
      { name: 'AirScape glass coffee canister', note: 'A borosilicate glass canister with a plunger lid that pushes out air to keep beans fresh.', image: 'assets/products/B086VZCGHW.jpg', link: 'B086VZCGHW' },
      { name: 'MALACASA khaki white ceramic mugs, set of 4', note: 'Cream mugs with a raw clay base for a warm, handmade look.', image: 'assets/products/B0FWJFVJJZ.jpg', link: 'B0FWJFVJJZ' },
      { name: 'Acacia wood serving tray with handles, 17 inch', note: 'A long acacia tray that turns a corner of the counter into a coffee station.', image: 'assets/products/B0CWH72PCF.jpg', link: 'B0CWH72PCF' },
      { name: 'OXO glass sugar dispenser', note: 'A simple glass pourer for sugar that looks clean on an open counter.', image: 'assets/products/B072MNDRQB.jpg', link: 'B072MNDRQB' },
      { name: 'Beech wood coffee scoops, 4 pack', note: 'Small wooden scoops for coffee, sugar and cocoa canisters.', image: 'assets/products/B0BY8YXPHG.jpg', link: 'B0BY8YXPHG' },
      { name: 'MALACASA porcelain espresso cups with stand', note: 'Four stackable white espresso cups and saucers on a slim metal stand.', image: 'assets/products/B0H8T2WDVP.jpg', link: 'B0H8T2WDVP' },
      { name: 'Bodum Melior gooseneck electric kettle', note: 'A brushed steel gooseneck kettle with a cork handle for slow pour-over mornings.', image: 'assets/products/B07P15ZL3V.jpg', link: 'B07P15ZL3V' },
      { name: 'DeeCoo matte white ribbed mugs, set of 4', note: 'Matte white mugs with soft ribbing that look like boutique ceramics.', image: 'assets/products/B0FCD2W9VW.jpg', link: 'B0FCD2W9VW' },
      { name: 'Kirecoo stainless steel coffee canister', note: 'An airtight steel canister with a date tracker and a built-in scoop.', image: 'assets/products/B0G429DFHT.jpg', link: 'B0G429DFHT' },
      { name: 'Bamboo coffee mug tree', note: 'A slim bamboo stand that hangs six mugs in a small footprint.', image: 'assets/products/B0DQWGJ5PT.jpg', link: 'B0DQWGJ5PT' },
      { name: 'GMISUN square glass syrup bottles with pumps', note: 'Square glass bottles with black pumps for vanilla, caramel or maple syrup.', image: 'assets/products/B0C1ZFBZ3T.jpg', link: 'B0C1ZFBZ3T' },
      { name: 'Luxspire marble-look tray, small', note: 'A small white marble-look tray that keeps a coffee corner tidy.', image: 'assets/products/B07JHBP66L.jpg', link: 'B07JHBP66L' },
      { name: 'LUXU glass coffee mugs, set of 4', note: 'Wide clear mugs for iced coffee and lattes.', image: 'assets/products/B07WQWHKJ1.jpg', link: 'B07WQWHKJ1' },
      { name: 'Hario ceramic coffee filter stand', note: 'A white ceramic holder that keeps paper filters neat and in reach.', image: 'assets/products/B00B7XJTP6.jpg', link: 'B00B7XJTP6' },
      { name: 'Amazon Basics glazed stoneware mugs, set of 4', note: 'Cream stoneware mugs with a soft glaze and a generous handle.', image: 'assets/products/B0F4314KP1.jpg', link: 'B0F4314KP1' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'laundry-room-organization-that-looks-expensive',
    title: 'Laundry Room Organization That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Laundry room organization that looks expensive: glass jars, woven baskets, a wood drying rack, a lint bin and wood hangers, all from Amazon.',
    intro: 'A laundry room looks expensive when the bottles disappear. Decant powder and pods into big glass jars, hide supplies in lidded woven baskets, give lint and dryer sheets their own white tins and keep a wood drying rack out in the open. Natural textures and glass make even a small laundry closet feel calm and finished.',
    image: 'assets/pins/laundry-room-organization-that-looks-expensive.jpg',
    imageAlt: 'Collage of laundry room organization from Amazon: a wooden drying rack, a lidded wicker laundry hamper, glass jars with lids, scalloped wicker baskets, a white lint bin, seagrass baskets, floating shelves and wooden hangers',
    products: [
      { name: 'HOME IT wooden clothes drying rack', note: 'A natural wood folding rack that looks good left open in the room.', image: 'assets/products/B0117PHGP8.jpg', link: 'B0117PHGP8' },
      { name: 'DUMOS wicker laundry basket with lid, 90L', note: 'A tall woven hamper with a lid and a removable liner.', image: 'assets/products/B0HKSD1P5Z.jpg', link: 'B0HKSD1P5Z' },
      { name: 'Masthome 1 gallon glass jar with lid', note: 'A big apothecary-style jar for laundry powder, pods or scent boosters.', image: 'assets/products/B0D1G76B8T.jpg', link: 'B0D1G76B8T' },
      { name: 'Embossed magnetic lint bin, white', note: 'A small white bin that sticks to the side of the dryer for lint and pocket finds.', image: 'assets/products/B0CMYKKYN9.jpg', link: 'B0CMYKKYN9' },
      { name: 'DOKOT seagrass basket with handles', note: 'A soft belly basket for towels, rags or socks waiting for a match.', image: 'assets/products/B01MRN3VLG.jpg', link: 'B01MRN3VLG' },
      { name: 'ForPro clear apothecary jar, 60 oz', note: 'A clear canister with a lid for cotton balls, dryer balls or clothespins.', image: 'assets/products/B0BYBCFH8J.jpg', link: 'B0BYBCFH8J' },
      { name: 'Scalloped wicker storage baskets with lids, set of 2', note: 'Two lidded woven boxes with a scalloped edge that hide supplies on a shelf.', image: 'assets/products/B0DNJ33YDL.jpg', link: 'B0DNJ33YDL' },
      { name: 'DOLLFIO rustic floating shelves', note: 'Wood shelves on black brackets for jars and baskets above the machines.', image: 'assets/products/B0CD1X9B1J.jpg', link: 'B0CD1X9B1J' },
      { name: 'Modern farmhouse dryer sheet holder, white', note: 'A white metal box with a lid that keeps dryer sheets out of sight.', image: 'assets/products/B0BFFT48HN.jpg', link: 'B0BFFT48HN' },
      { name: 'Mini wooden clothespins, 100 pack', note: 'Tiny wood clips for labels, socks and a styled jar on the shelf.', image: 'assets/products/B01FVZSVHC.jpg', link: 'B01FVZSVHC' },
      { name: 'Handwoven water hyacinth basket', note: 'A chunky woven basket with handles for clean towels or a lint-free folding spot.', image: 'assets/products/B0DN6WTTLK.jpg', link: 'B0DN6WTTLK' },
      { name: '1 gallon glass jar with white lid', note: 'A wide-mouth glass jar for pods or powder with a clean white lid.', image: 'assets/products/B0GJFW2CP9.jpg', link: 'B0GJFW2CP9' },
      { name: 'CHICVITA woven rope basket with leather handles', note: 'A soft rope basket with leather handles for hand-wash items or towels.', image: 'assets/products/B08G4XVJKZ.jpg', link: 'B08G4XVJKZ' },
      { name: 'Amber Home natural wooden hangers, 30 pack', note: 'Matching wood hangers that make a hanging rod look like a boutique.', image: 'assets/products/B08FMDLLYR.jpg', link: 'B08FMDLLYR' },
      { name: 'Wicker storage basket with lid', note: 'A lidded seagrass box for detergent pods, stain sticks or spare buttons.', image: 'assets/products/B0CZCTPG54.jpg', link: 'B0CZCTPG54' },
      { name: 'Amazon Basics foldable clothes drying rack', note: 'A white folding rack that dries a full load and stores flat.', image: 'assets/products/B00H7P1GPO.jpg', link: 'B00H7P1GPO' },
      { name: 'Modern farmhouse lint bin, white', note: 'A white wall-mount lint bin with a simple script label.', image: 'assets/products/B0BFFR47C1.jpg', link: 'B0BFFR47C1' },
      { name: 'Calindiana farmhouse laundry pods container', note: 'A white metal tin with a wood handle that keeps pods away from little hands.', image: 'assets/products/B09VF6BYLH.jpg', link: 'B09VF6BYLH' },
      { name: 'Natural rattan storage baskets, set of 3', note: 'Three stackable rattan trays for sorting supplies on a shelf.', image: 'assets/products/B089K29BKG.jpg', link: 'B089K29BKG' },
      { name: 'Whitmor canvas clothespin bag', note: 'A hanging canvas bag that keeps clothespins handy.', image: 'assets/products/B000I6739C.jpg', link: 'B000I6739C' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'winter-skincare-must-haves',
    title: 'Winter Skincare Must Haves for Dry Skin',
    category: 'beauty-finds',
    date: '2026-10-26',
    description: 'Winter skincare must haves for dry skin from Amazon: a lip sleeping mask, rich ceramide creams, a face mist, hand salve, cuticle oil and a satin pillowcase.',
    intro: 'Dry winter skin needs a routine that layers: mist or serum on damp skin, a rich ceramide cream on top, an overnight lip mask and a hand salve by the bed. A satin pillowcase and a soft spa headband make the night routine feel like a ritual. These picks keep the shelf calm, with simple white, cream and glass packaging.',
    image: 'assets/pins/winter-skincare-must-haves.jpg',
    imageAlt: 'Collage of winter skincare must haves from Amazon: an ivory satin pillowcase, Kiehl\'s Ultra Facial Cream, LANEIGE Lip Sleeping Mask, Avene thermal water, a tinted lip oil, ceramide moisturizers, hyaluronic acid serum, cuticle oil and a spa headband',
    products: [
      { name: 'Kitsch satin pillowcase, ivory', note: 'A smooth satin pillowcase that is gentler on dry skin and hair overnight.', image: 'assets/products/B07XFQVN57.jpg', link: 'B07XFQVN57' },
      { name: 'Kiehl\'s Ultra Facial Cream', note: 'A rich daily cream with squalane and glycerin for skin that feels tight in winter.', image: 'assets/products/B004JVSGWU.jpg', link: 'B004JVSGWU' },
      { name: 'LANEIGE Lip Sleeping Mask, vanilla', note: 'The cult overnight lip mask that wakes up chapped lips soft.', image: 'assets/products/B072BHZ41J.jpg', link: 'B072BHZ41J' },
      { name: 'Avene Thermal Spring Water', note: 'A soothing face mist to spray before cream when indoor heat dries skin out.', image: 'assets/products/B002D48QUC.jpg', link: 'B002D48QUC' },
      { name: 'Summer Fridays Dream Lip Oil', note: 'A sheer tinted lip oil that keeps lips glossy and hydrated through cold days.', image: 'assets/products/B0CVQT4SDR.jpg', link: 'B0CVQT4SDR' },
      { name: 'ANUA 3 Ceramide Panthenol Moisture Barrier Cream', note: 'A ceramide and panthenol cream for a winter skin barrier that needs help.', image: 'assets/products/B0DCBPWGBS.jpg', link: 'B0DCBPWGBS' },
      { name: 'The Ordinary Natural Moisturizing Factors + PhytoCeramides', note: 'A rich, simple moisturizer for dry, flaky winter skin.', image: 'assets/products/B0D49KQLNY.jpg', link: 'B0D49KQLNY' },
      { name: 'The Ordinary Hyaluronic Acid 2% + B5', note: 'A hydrating serum to layer under cream on damp skin.', image: 'assets/products/B01MYEZPC8.jpg', link: 'B01MYEZPC8' },
      { name: 'ella+mila nail and cuticle oil', note: 'A fragrance-free tsubaki and argan oil for dry winter cuticles.', image: 'assets/products/B0G5MCWG85.jpg', link: 'B0G5MCWG85' },
      { name: 'WSYUB spa headband and wristband set', note: 'A soft beige terry headband with wristbands for a mess-free night routine.', image: 'assets/products/B0DFTRWZPM.jpg', link: 'B0DFTRWZPM' },
      { name: 'Mario Badescu Lip Mask', note: 'An overnight lip treatment with a thick, balmy texture.', image: 'assets/products/B0B7VSL515.jpg', link: 'B0B7VSL515' },
      { name: 'Kiehl\'s Ultimate Strength Hand Salve', note: 'A rich hand cream for cracked knuckles in cold weather.', image: 'assets/products/B00EKT4MCY.jpg', link: 'B00EKT4MCY' },
      { name: 'The INKEY List Bio-Active Ceramide Moisturizer', note: 'A plumping ceramide cream that keeps skin comfortable all day.', image: 'assets/products/B0CNTKZN7F.jpg', link: 'B0CNTKZN7F' },
      { name: 'COSRX 7X Ceramide Moisturizer', note: 'A barrier repair cream with seven ceramides for dry, sensitive skin.', image: 'assets/products/B0DYNQ393Y.jpg', link: 'B0DYNQ393Y' },
      { name: 'La Roche-Posay Toleriane Double Repair Moisturizer', note: 'A fragrance-free daily moisturizer with ceramides and niacinamide.', image: 'assets/products/B01N9SPQHQ.jpg', link: 'B01N9SPQHQ' },
      { name: 'Mario Badescu moisturizing lip balm', note: 'A simple tube balm for chapped lips on the go.', image: 'assets/products/B07GDL1VS2.jpg', link: 'B07GDL1VS2' },
      { name: 'DKBslik silky pillowcases, 2 pack', note: 'Two smooth white pillowcases with hidden zippers for less friction overnight.', image: 'assets/products/B0BVWLXFZL.jpg', link: 'B0BVWLXFZL' },
      { name: 'Cuccio Naturale revitalizing cuticle oil', note: 'A golden cuticle oil that softens dry winter nails.', image: 'assets/products/B00F644LTQ.jpg', link: 'B00F644LTQ' },
      { name: 'Dr.Althea 345 Relief Cream', note: 'A calming Korean cream for red, irritated winter skin.', image: 'assets/products/B0G643D8ZG.jpg', link: 'B0G643D8ZG' }
    ]
  },
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
