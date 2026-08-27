/* =========================================================================
   SparkOptimus — shared site chrome (nav + footer) and interactions.
   Each page sets <body data-page="..."> and includes this script.
   ========================================================================= */
(function () {
  "use strict";

  /* ---- detect if we're in a subdirectory and adjust asset paths ---- */
  var ASSET_PREFIX = document.documentElement.getAttribute('data-subdir') ? '../' : '';

  window.SO = window.SO || {};
  window.SO.assetPrefix = ASSET_PREFIX;
  var ICON = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 17V9.74H6.06V17zM7.2 8.48a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zM18 17v-3.98c0-2.13-1.14-3.12-2.66-3.12a2.3 2.3 0 0 0-2.08 1.15h-.03V9.74H11v7.26h2.28v-3.6c0-.95.18-1.86 1.35-1.86s1.17 1.08 1.17 1.92V17z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    newsletter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 13.5 21 3"/><path d="M21 3 14.5 21a.55.55 0 0 1-1 0L10.5 13.5 3 10.5a.55.55 0 0 1 0-1z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.6 3.57 12 3.57 12 3.57s-7.6 0-9.38.48A3.02 3.02 0 0 0 .5 6.19C0 7.98 0 12 0 12s0 4.02.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.4 20.43 12 20.43 12 20.43s7.6 0 9.38-.48a3.02 3.02 0 0 0 2.12-2.14C24 16.02 24 12 24 12s0-4.02-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.54-1.26.24-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.99-.12-1.11-.6-.12-.48.12-.99.6-1.11 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.21 1.23zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.24z"/></svg>',
    applepodcasts: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.34 0A5.33 5.33 0 0 0 0 5.34v13.32A5.33 5.33 0 0 0 5.34 24h13.32A5.33 5.33 0 0 0 24 18.66V5.34A5.33 5.33 0 0 0 18.66 0zm6.66 3.98a6.02 6.02 0 0 1 5.95 5.9c.03 2.56-1.6 4.8-3.95 5.63.17-.44.28-.97.28-1.54 0-.66-.19-1.23-.49-1.69a3.97 3.97 0 0 0 2.14-3.45A3.97 3.97 0 0 0 12 4.89a3.97 3.97 0 0 0-3.94 3.94c0 1.43.74 2.68 1.86 3.4a3.16 3.16 0 0 0-.49 1.69c0 .57.1 1.1.28 1.54-2.35-.84-3.98-3.07-3.95-5.63A6.02 6.02 0 0 1 12 3.98zm-.01 2.58a2.46 2.46 0 1 1 0 4.92 2.46 2.46 0 0 1 0-4.92zm-.02 4.91c1.14 0 1.91.77 1.91 2.02 0 1.81-.73 5.5-1 6.3-.12.35-.49.55-.9.55-.4 0-.78-.2-.89-.55-.28-.8-1-4.49-1-6.3 0-1.25.77-2.02 1.88-2.02z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7"/><path d="M4 10v10"/><path d="M20 10v10"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 13h3l2-5 3 9 2-6 1.5 2h5"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6H2v12"/><path d="M14 9h4l4 4v5h-8"/><circle cx="6.5" cy="18" r="1.5"/><circle cx="17.5" cy="18" r="1.5"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V9l6 4V9l6 4V6l4-2v16"/><path d="M8 20v-4M14 20v-4"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 8-4 12-9 12z"/><path d="M4 20c2-4 5-7 9-9"/></svg>',
    pe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-8"/><path d="M17 4h4v4"/><path d="M3 21h18"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 8 20 8"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12.01" y2="12"/></svg>'
  };
  var SPARK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00d9f4" d="M12 1.5c.5 4.2 2.3 6 6.5 6.5v0c-4.2.5-6 2.3-6.5 6.5v0c-.5-4.2-2.3-6-6.5-6.5v0c4.2-.5 6-2.3 6.5-6.5z" transform="scale(0.95) translate(0.6 0.6)"/><path fill="#0e172a" d="M18.5 14c.3 2.5 1.4 3.6 3.9 3.9v0c-2.5.3-3.6 1.4-3.9 3.9v0c-.3-2.5-1.4-3.6-3.9-3.9v0c2.5-.3 3.6-1.4 3.9-3.9z" opacity="0"/></svg>';
  var SPARK_MARK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00d9f4" d="M12 1c.6 5 2.9 7.4 8 8-5.1.6-7.4 3-8 8-.6-5-2.9-7.4-8-8 5.1-.6 7.4-3 8-8z"/></svg>';

  /* ---- search index ----
     Moved to site/scripts/search-index.js (loaded with defer on every page).
     Populated into window.SO.SEARCH_INDEX by that script before DOMContentLoaded. */

  function ico(name) { return ICON[name] || ""; }

  /* ---- search helpers ---- */
  function doSearch(q) {
    var SEARCH_INDEX = window.SO.SEARCH_INDEX || [];
    q = (q || '').trim().toLowerCase();
    if (!q) {
      return SEARCH_INDEX.filter(function(item) { return item.featured; });
    }
    var tokens = q.split(/\s+/).filter(Boolean);
    var scored = [];
    SEARCH_INDEX.forEach(function(item) {
      var full = (item.title + ' ' + (item.desc || '') + ' ' + (item.kw || '') + ' ' + item.cat).toLowerCase();
      var titleL = item.title.toLowerCase();
      var allMatch = tokens.every(function(t) { return full.includes(t); });
      if (!allMatch) return;
      var score = 0;
      tokens.forEach(function(t) { score += titleL.includes(t) ? 3 : 1; });
      scored.push({ item: item, score: score });
    });
    scored.sort(function(a, b) { return b.score - a.score; });
    return scored.slice(0, 8).map(function(r) { return r.item; });
  }

  function renderSearchResults(items, isDefault) {
    if (!items.length) {
      return '<div class="site-search__empty">No results \u2014 try different keywords.</div>';
    }
    var CAT_ICON = { Service: 'bolt', Sector: 'factory', Case: 'cart', Impact: 'bolt', Insight: 'newsletter', Event: 'calendar', About: 'users', Careers: 'briefcase', Page: 'file' };
    var label = isDefault ? 'Suggested pages' : (items.length + ' result' + (items.length > 1 ? 's' : ''));
    var html = '<p class="site-search__section-head">' + label + '</p>';
    items.forEach(function(item) {
      var ic = CAT_ICON[item.cat] || 'file';
      html += '<a class="site-search__result" href="' + prefixHref(item.url) + '">' +
        '<div class="site-search__result-icon">' + (ICON[ic] || ICON.arrow) + '</div>' +
        '<div class="site-search__result-body">' +
          '<div class="site-search__result-title">' + item.title + '</div>' +
          '<div class="site-search__result-cat">' + item.cat + (item.desc ? ' \u00b7 ' + item.desc : '') + '</div>' +
        '</div>' +
        '<div class="site-search__result-arrow">' + ICON.arrow + '</div>' +
      '</a>';
    });
    return html;
  }

  /* ---- nav model ---- */
  var NAV = [
    { label: "Our approach", href: "/our-approach", key: "approach" },
    { label: "Services", href: "/services", key: "services", menu: [
      { label: "Digital Strategy & Transformation", href: "/services/digital-strategy-transformation" },
      { label: "AI & Data Strategy & Transformation", href: "/services/ai-and-data" },
      { label: "Sustainability Strategy & Transformation", href: "/services/sustainability" },
      { label: "Mergers and Acquisitions", href: "/services/mergers-and-acquisitions" },
      { label: "Ventures and Scale-ups", href: "/services/ventures-scale-ups" }
    ]},
    { label: "Sectors", href: "/sectors", key: "sectors", groups: [
      { title: "", items: [
        { label: "Consumer Goods", href: "/sectors/consumer-goods", ic: "cart" },
        { label: "Energy & Utilities", href: "/sectors/energy-utilities", ic: "bolt" },
        { label: "Financial Services", href: "/sectors/financial-services", ic: "bank" }
      ]},
      { title: "", items: [
        { label: "Industrial Goods & Services", href: "/sectors/industrials", ic: "factory" },
        { label: "Private Equity", href: "/sectors/private", ic: "pe" }
      ]}
    ]},
    { label: "Impact", key: "impact", href: "/cases", cols: 2, menu: [
      { label: "Cases", desc: "Work that moves the needle", href: "/cases" },
      { label: "CEO stories", desc: "Conversations with leaders", href: "/ceo-stories" },
      { label: "Insights", desc: "Research & points of view", href: "/insights" },
      { label: "Blog", desc: "Latest thinking on digital & AI", href: "/blog" },
      { label: "Books & benchmarks", desc: "Our published works & benchmarks", href: "/books" }
    ]},
  ];

  function prefixHref(href) {
    if (!href || href.charAt(0) === '#' || href.charAt(0) === '/') return href || '#';
    return ASSET_PREFIX + href;
  }

  function buildNav(current) {
    var items = NAV.map(function (n) {
      var active = n.key === current ? " is-active" : "";
      if (n.groups) {
        var cols = n.groups.map(function (g) {
          var links = g.items.map(function (m) {
            return '<a class="site-nav__grouplink" href="' + prefixHref(m.href) + '">' +
              (m.ic ? '<span class="site-nav__groupic">' + ico(m.ic) + '</span>' : '') +
              '<span>' + m.label + '</span></a>';
          }).join("");
          return '<div class="site-nav__group">' + (g.title ? '<p class="site-nav__grouptitle">' + g.title + '</p>' : '') + links + '</div>';
        }).join("");
        return '<div class="site-nav__item' + active + '">' +
          '<a class="site-nav__link" href="' + prefixHref(n.href) + '">' + n.label + ico("chevron") + '</a>' +
          '<div class="site-nav__dropdown site-nav__dropdown--wide">' + cols + '</div></div>';
      }
      if (n.menu) {
        var sub = n.menu.map(function (m) {
          return '<a class="site-nav__droplink" href="' + prefixHref(m.href) + '"><span>' + m.label + '</span>' +
            (m.desc ? '<small>' + m.desc + '</small>' : '') + '</a>';
        }).join("");
        var dropCls = n.cols === 2 ? 'site-nav__dropdown site-nav__dropdown--2col' : 'site-nav__dropdown';
        return '<div class="site-nav__item' + active + '">' +
          '<a class="site-nav__link" href="' + prefixHref(n.href) + '">' + n.label + ico("chevron") + '</a>' +
          '<div class="' + dropCls + '">' + sub + '</div></div>';
      }
      return '<div class="site-nav__item' + active + '"><a class="site-nav__link" href="' + prefixHref(n.href) + '">' + n.label + '</a></div>';
    }).join("");

    return '' +
      '<nav class="site-nav" id="siteNav">' +
        '<div class="container container--full">' +
          '<div class="site-nav__pill">' +
            '<a class="site-nav__logo" href="/" aria-label="SparkOptimus home">' +
              '<span class="site-nav__dot"><img src="' + ASSET_PREFIX + 'site/assets/logo-mark.svg" alt="" width="38" height="38"></span>' +
              '<span class="site-nav__wordmark">SparkOptimus</span>' +
            '</a>' +
            '<div class="site-nav__menu">' + items + '</div>' +
            '<div class="site-nav__right">' +
              '<button class="site-nav__icon-btn" aria-label="Search">' + ico("search") + '</button>' +
              '<a class="site-nav__cta" href="' + prefixHref('/contact') + '"><span class="site-nav__cta-text">Let\u2019s talk</span></a>' +
              '<button class="site-nav__icon-btn site-nav__burger" id="navBurger" aria-label="Menu">' + ico("menu") + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</nav>' +
      '<div class="site-drawer-backdrop" id="siteDrawerBackdrop"></div>' +
      '<div class="site-drawer" id="siteDrawer">' +
        '<div class="site-drawer__header">' +
          '<a class="site-drawer__logo" href="/" aria-label="SparkOptimus home">' +
            '<span class="site-drawer__logo-dot"><img src="' + ASSET_PREFIX + 'site/assets/logo-mark.svg" alt="" width="32" height="32"></span>' +
            '<span class="site-drawer__wordmark">SparkOptimus</span>' +
          '</a>' +
          '<button class="site-drawer__close" id="drawerClose" aria-label="Close menu">' + ico("close") + '</button>' +
        '</div>' +
        '<nav class="site-drawer__nav">' +
          NAV.map(function(n) {
            var hasSubmenu = !!(n.groups || n.menu);
            if (!hasSubmenu) {
              return '<div class="site-drawer__item">' +
                '<a class="site-drawer__link" href="' + prefixHref(n.href) + '">' + n.label + '</a>' +
              '</div>';
            }
            var subItems = '';
            if (n.groups) {
              subItems += n.label !== 'About' && n.label !== 'Impact' && n.label !== 'Careers' ? '<a class="site-drawer__sublink site-drawer__sublink--overview" href="' + prefixHref(n.href) + '">All ' + n.label.toLowerCase() + ' →</a>' : '';
              n.groups.forEach(function(g) {
                if (g.title) subItems += '<p class="site-drawer__subgroup-title">' + g.title + '</p>';
                g.items.forEach(function(m) {
                  subItems += '<a class="site-drawer__sublink" href="' + prefixHref(m.href) + '">' +
                    (m.ic ? '<span class="site-drawer__sublink-ic">' + ico(m.ic) + '</span>' : '') +
                    m.label + '</a>';
                });
              });
            } else if (n.menu) {
              subItems += n.label !== 'About' && n.label !== 'Impact' && n.label !== 'Careers' ? '<a class="site-drawer__sublink site-drawer__sublink--overview" href="' + prefixHref(n.href) + '">All ' + n.label.toLowerCase() + ' →</a>' : '';
              n.menu.forEach(function(m) {
                subItems += '<a class="site-drawer__sublink" href="' + prefixHref(m.href) + '">' + m.label + '</a>';
              });
            }
            return '<div class="site-drawer__item">' +
              '<button class="site-drawer__toggle">' +
                n.label +
                '<span class="site-drawer__toggle-ic">' + ico('chevron') + '</span>' +
              '</button>' +
              '<div class="site-drawer__sub"><div class="site-drawer__sub-inner">' + subItems + '</div></div>' +
            '</div>';
          }).join('') +
        '</nav>' +
        '<div class="site-drawer__footer">' +
          '<a class="btn btn--primary" href="' + prefixHref('/contact') + '">Let\u2019s talk ' + ico("arrow") + '</a>' +
        '</div>' +
      '</div>';
  }

  function buildFooter() {
    return '' +
    '<footer class="site-footer" id="contact">' +
      '<div class="container container--full">' +
        '<div class="site-footer__top">' +
          '<div class="site-footer__brand">' +
            '<a class="site-footer__lockup" href="/" style="text-decoration:none;">' +
              '<span class="site-footer__dot"><img src="' + ASSET_PREFIX + 'site/assets/logo-mark.svg" alt="" width="34" height="34"></span>' +
              '<span class="site-footer__word">SparkOptimus</span></a>' +
            '<p class="site-footer__tagline">We make disruption work for you. Future-proof your organization through digital, generative AI and transformation.</p>' +
            '<a class="arrowlink arrowlink--on-ink" href="/contact">Start a conversation' + ico("arrow") + '</a>' +
            '<div class="site-footer__social">' +
              '<a class="site-footer__soc" href="https://www.linkedin.com/company/sparkoptimus" aria-label="Follow us on LinkedIn">' + ico("linkedin") + '</a>' +
              '<a class="site-footer__soc" href="https://www.instagram.com/sparkoptimus" aria-label="Follow us on Instagram">' + ico("instagram") + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="site-footer__col">' +
            '<p class="site-footer__head">Company</p>' +
            '<a href="/our-approach">Our approach</a>' +
            '<a href="/services">Services</a>' +
            '<a href="/sectors">Sectors</a>' +
            '<a href="/cases">Impact</a>' +
          '</div>' +
        '</div>' +
        '<div class="site-footer__bottom">' +
          '<span>\u00A9 2026 SparkOptimus \u2013 Jacob Obrechtplein 1, Amsterdam</span>' +
          '<div class="site-footer__legal">' +
            '<a href="/privacy-statement">Privacy statement</a>' +
            '<a href="/privacy-statement">Cookie policy</a>' +
            '<a href="/human-labour-rights">Human &amp; labor rights</a>' +
            '<a href="/environmental-policy">Environmental statement</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  function buildSearch() {
    return '<div class="site-search" id="siteSearch" aria-hidden="true">' +
      '<div class="site-search__inner">' +
        '<div class="site-search__bar">' +
          ICON.search +
          '<input class="site-search__input" id="siteSearchInput" type="search" placeholder="Search\u2026 pages, services, sectors" autocomplete="off" spellcheck="false">' +
          '<button class="site-search__close" id="siteSearchClose" type="button">ESC</button>' +
        '</div>' +
        '<div class="site-search__results" id="siteSearchResults"></div>' +
      '</div>' +
    '</div>';
  }

  /* ---- mount ---- */
  function mount() {
    var body = document.body;
    var current = body.getAttribute("data-page") || "";
    var navHost = document.getElementById("site-nav-root");
    var footHost = document.getElementById("site-footer-root");
    if (navHost) navHost.innerHTML = buildNav(current);
    if (footHost) footHost.innerHTML = buildFooter();

    /* scroll state on nav */
    var nav = document.getElementById("siteNav");
    var lastScrollY = window.scrollY;
    var scrollDelta = 0;
    var HIDE_THRESHOLD = 60;   /* px scrolled down before hiding */
    var SHOW_THRESHOLD = 2;    /* px scrolled up before showing */
    function onScroll() {
      if (!nav) return;
      var currentY = window.scrollY;
      nav.classList.toggle("is-scrolled", currentY > 24);
      /* hide-on-down / show-on-up — mobile only */
      if (window.innerWidth <= 980) {
        var diff = currentY - lastScrollY;
        scrollDelta = diff > 0 ? scrollDelta + diff : 0;
        if (currentY > 80) {
          if (scrollDelta > HIDE_THRESHOLD)      nav.classList.add("is-hidden");
          else if (diff < -SHOW_THRESHOLD)       { nav.classList.remove("is-hidden"); scrollDelta = 0; }
        } else {
          nav.classList.remove("is-hidden");
          scrollDelta = 0;
        }
      } else {
        nav.classList.remove("is-hidden");
      }
      lastScrollY = currentY;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* mobile drawer */
    var drawer = document.getElementById("siteDrawer");
    var backdrop = document.getElementById("siteDrawerBackdrop");
    var burger = document.getElementById("navBurger");
    var dclose = document.getElementById("drawerClose");
    function openDrawer() {
      if (drawer) drawer.classList.add("is-open");
      if (backdrop) backdrop.classList.add("is-open");
      if (nav) nav.classList.remove("is-hidden");
      document.body.style.overflow = "hidden";
    }
    function closeDrawer() {
      if (drawer) drawer.classList.remove("is-open");
      if (backdrop) backdrop.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    if (burger) burger.addEventListener("click", openDrawer);
    if (dclose) dclose.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);
    /* accordion toggles */
    if (drawer) {
      drawer.querySelectorAll(".site-drawer__toggle").forEach(function(btn) {
        btn.addEventListener("click", function() {
          var item = btn.closest(".site-drawer__item");
          var isOpen = item.classList.contains("is-open");
          drawer.querySelectorAll(".site-drawer__item.is-open").forEach(function(el) { el.classList.remove("is-open"); });
          if (!isOpen) item.classList.add("is-open");
        });
      });
      drawer.querySelectorAll("a").forEach(function(a) { a.addEventListener("click", closeDrawer); });
    }

    /* ---- search overlay ---- */
    var sOverlay = document.getElementById('siteSearch');
    if (!sOverlay) {
      var _sfrag = document.createElement('div');
      _sfrag.innerHTML = buildSearch();
      sOverlay = _sfrag.firstChild;
      document.body.appendChild(sOverlay);
    }
    var sInput   = document.getElementById('siteSearchInput');
    var sResults = document.getElementById('siteSearchResults');
    var sClose   = document.getElementById('siteSearchClose');
    var sBtn     = navHost ? navHost.querySelector('.site-nav__icon-btn[aria-label="Search"]') : null;
    var _sIdx    = -1;

    function openSearch() {
      closeDrawer();
      sOverlay.classList.add('is-open');
      sOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(function() { if (sInput) { sInput.focus(); sInput.select(); } }, 60);
      if (sResults) sResults.innerHTML = renderSearchResults(doSearch(''), true);
    }
    function closeSearch() {
      sOverlay.classList.remove('is-open');
      sOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (sInput) sInput.value = '';
      if (sResults) sResults.innerHTML = '';
      _sIdx = -1;
    }

    if (sBtn)    sBtn.addEventListener('click', openSearch);
    if (sClose)  sClose.addEventListener('click', closeSearch);
    sOverlay.addEventListener('click', function(e) { if (e.target === sOverlay) closeSearch(); });
    if (sInput) sInput.addEventListener('input', function() {
      _sIdx = -1;
      if (sResults) sResults.innerHTML = renderSearchResults(doSearch(sInput.value), !sInput.value.trim());
    });

    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sOverlay.classList.contains('is-open') ? closeSearch() : openSearch();
        return;
      }
      if (!sOverlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') { closeSearch(); return; }
      if (!sResults) return;
      var res = sResults.querySelectorAll('.site-search__result');
      if (!res.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        _sIdx = Math.min(_sIdx + 1, res.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        _sIdx = Math.max(_sIdx - 1, 0);
      } else if (e.key === 'Enter' && _sIdx >= 0) {
        e.preventDefault();
        if (res[_sIdx]) res[_sIdx].click();
        return;
      } else { return; }
      res.forEach(function(r, i) { r.classList.toggle('is-active', i === _sIdx); });
      var el = res[_sIdx];
      if (el) {
        var elBot = el.offsetTop + el.offsetHeight;
        var cBot  = sResults.scrollTop + sResults.clientHeight;
        if (elBot > cBot) sResults.scrollTop = elBot - sResults.clientHeight;
        else if (el.offsetTop < sResults.scrollTop) sResults.scrollTop = el.offsetTop;
      }
    });

    /* scroll reveal */
    window.SO.revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); window.SO.revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    window.SO.reveal();
    /* fallback: directly add is-in for elements already in viewport, bypassing IntersectionObserver */
    function revealInView() {
      document.querySelectorAll('.reveal:not(.is-in)').forEach(function(el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 50 && r.bottom > -50) el.classList.add('is-in');
      });
    }
    setTimeout(revealInView, 120);
    window.addEventListener('load', function() { setTimeout(revealInView, 80); });
    window.addEventListener('scroll', revealInView, { passive: true });
  }

  /* expose icons + reveal helper for page scripts (must exist before mount) */
  window.SO = window.SO || {};
  Object.assign(window.SO, {
    ico: ico, SPARK: SPARK, SPARK_MARK: SPARK_MARK,
    reveal: function () {
      if (!window.SO.revealObserver) return;
      document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) { window.SO.revealObserver.observe(el); });
    }
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
