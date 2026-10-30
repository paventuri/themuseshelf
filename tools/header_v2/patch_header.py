#!/usr/bin/env python3
"""Replace the SiteHeader block in a ds.js with the lighter header (Camilla 2026-10-29: "mt coisa").

Desktop shows only NAV_ITEMS with top:true (Home Finds, Gift Guides, Beauty Finds, Shop); every item stays in the
mobile/menu drawer and in the footer (SiteFooter maps the full NAV_ITEMS).
HDR_LAYOUT: 'split'  = logo left, short nav right, no burger on desktop
            'center' = MENU left, logo centered, Shop + search right (everything else in the drawer)
usage: patch_header.py <ds.js> [split|center]
"""
import re, sys

path = sys.argv[1]
layout = sys.argv[2] if len(sys.argv) > 2 else 'split'
src = open(path, encoding='utf-8').read()
start = src.index('// components/navigation/SiteHeader.jsx')
end = src.index('// components/navigation/SiteFooter.jsx')

BLOCK = r'''// components/navigation/SiteHeader.jsx
try { (() => {
function injectCSS(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
// Camilla 2026-10-29 ("mt coisa"): the desktop bar shows only the `top` items; the rest live in the drawer + footer.
const HDR_LAYOUT = '__LAYOUT__';
const CSS = `.tms-hdr__nav{display:none}.tms-hdr__burger{display:flex}.tms-hdr__menulbl{display:none}
.tms-hdr__link{position:relative}.tms-hdr__link::after{content:"";position:absolute;left:0;right:.2em;bottom:-6px;height:1px;background:var(--pale-oak);transform:scaleX(0);transition:transform var(--dur-base) var(--ease-out)}
.tms-hdr__link:hover::after,.tms-hdr__link[aria-current=page]::after{transform:scaleX(1)}
.tms-hdr__icon:hover{color:var(--muted-olive)!important}
.tms-hdr__drawer{border-top:1px solid var(--stone);background:var(--linen);padding:8px var(--gutter) 24px}
.tms-hdr__drawer a{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-bottom:1px solid var(--stone);font-size:12px!important}
@media(min-width:1024px){.tms-hdr--split .tms-hdr__nav{display:flex}.tms-hdr--split .tms-hdr__burger{display:none!important}.tms-hdr--split .tms-hdr__row{grid-template-columns:1fr auto!important}
.tms-hdr--center .tms-hdr__nav{display:flex}.tms-hdr--center .tms-hdr__menulbl{display:inline}
.tms-hdr__drawer{display:flex;justify-content:center;flex-wrap:wrap;gap:12px 44px;padding:22px var(--gutter)}.tms-hdr__drawer a{padding:0;border:0;font-size:11px!important}.tms-hdr__chev{display:none!important}}`;
const NAV_ITEMS = [{
  label: 'Home Finds',
  href: '/home-finds/',
  top: true
}, {
  label: 'Boho & Dupes',
  href: '/boho-dupes/'
}, {
  label: 'Gift Guides',
  href: '/gift-guides/',
  top: true
}, {
  label: 'Under $50',
  href: '/under-50/'
}, {
  label: 'Hosting & Recipes',
  href: '/hosting-recipes/'
}, {
  label: 'Beauty Finds',
  href: '/beauty-finds/',
  top: HDR_LAYOUT === 'split'
}, {
  label: 'Shop',
  href: 'https://shop.themuseshelf.com/?utm_source=site&utm_medium=nav',
  top: true
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
  alignItems: 'center',
  gap: 12
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
    if (onNavigate && !/^https?:/.test(item.href)) {
      e.preventDefault();
      onNavigate(item);
    }
    setOpen(false);
  };
  const center = HDR_LAYOUT === 'center';
  const topItems = items.filter(it => it.top);
  const burger = /*#__PURE__*/React.createElement("button", {
    className: "tms-hdr__burger tms-hdr__icon",
    style: { ...iconBtn, justifySelf: 'start' },
    "aria-label": open ? 'Close menu' : 'Open menu',
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    className: "tms-hdr__menulbl",
    style: linkStyle
  }, "Menu"));
  const brand = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: center ? 'center' : 'flex-start',
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
  }));
  const right = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: center ? 32 : 40
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tms-hdr__nav",
    "aria-label": "Main",
    style: {
      gap: 34,
      alignItems: 'center'
    }
  }, topItems.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    className: "tms-hdr__link",
    href: it.href,
    "aria-current": current === it.href ? 'page' : undefined,
    onClick: go(it),
    style: linkStyle
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    className: "tms-hdr__icon",
    style: { ...iconBtn, display: 'flex' },
    "aria-label": "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  })));
  return /*#__PURE__*/React.createElement("header", {
    className: 'tms-hdr tms-hdr--' + HDR_LAYOUT,
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 20,
      background: 'var(--linen)',
      borderBottom: '1px solid var(--stone)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tms-hdr__row",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      height: 64,
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: center ? '1fr auto 1fr' : 'auto 1fr auto',
      alignItems: 'center',
      gap: 24
    }
  }, burger, brand, right), open && /*#__PURE__*/React.createElement("nav", {
    className: "tms-hdr__drawer",
    "aria-label": "Menu"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    className: "tms-hdr__link",
    href: it.href,
    onClick: go(it),
    "aria-current": current === it.href ? 'page' : undefined,
    style: linkStyle
  }, it.label, /*#__PURE__*/React.createElement("span", {
    className: "tms-hdr__chev",
    style: { display: 'flex', color: 'var(--pale-oak)' }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }))))));
}
Object.assign(__ds_scope, { NAV_ITEMS, SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

'''.replace('__LAYOUT__', layout)

out = src[:start] + BLOCK + src[end:]
open(path, 'w', encoding='utf-8').write(out)
m = re.search(r"const CSS = `([^`]*)`", BLOCK)
open(path + '.hdrcss', 'w', encoding='utf-8').write(m.group(1))
print('patched', path, layout)
