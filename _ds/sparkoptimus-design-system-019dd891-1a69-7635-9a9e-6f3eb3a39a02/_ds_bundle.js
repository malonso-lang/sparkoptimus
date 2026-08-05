/* @ds-bundle: {"format":3,"namespace":"SparkOptimusDesignSystem_019dd8","components":[],"sourceHashes":{"revamp/App.jsx":"7f9fe246893f","revamp/CTASection.jsx":"5d9ac7d7bc56","revamp/Clients.jsx":"b6652fbd9926","revamp/Hero.jsx":"23ffc3cefb5c","revamp/Insights.jsx":"d3756aa8069c","revamp/Nav.jsx":"f1232e4e3150","revamp/Pillars.jsx":"cfeaaba64b62","revamp/Services.jsx":"85cc7fb5a04e","revamp/SiteFooter.jsx":"6be9903a3117","revamp/Testimonial.jsx":"4a0652286203","revamp/icons.jsx":"9e26f5ea54e1","revamp/tweaks-panel.jsx":"6591467622ed","slides/deck-stage.js":"ad1c016a6256","ui_kits/website/ClientsRow.jsx":"8d25b566d3f0","ui_kits/website/Footer.jsx":"16fad2178d19","ui_kits/website/Header.jsx":"03e1f4ca6182","ui_kits/website/Hero.jsx":"1da734f89828","ui_kits/website/InsightsRow.jsx":"fba3ad4dc09f","ui_kits/website/Quote.jsx":"9935f9e89079","ui_kits/website/ServicesGrid.jsx":"5132206e282a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SparkOptimusDesignSystem_019dd8 = window.SparkOptimusDesignSystem_019dd8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// revamp/App.jsx
try { (() => {
/* global React, Nav, Hero, Clients, Services, Pillars, Testimonial, Insights, CTASection, SiteFooter, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */
const {
  useEffect
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroMedia": "cyan",
  "servicesLayout": "explorer",
  "showClients": true,
  "rhythm": "spacious"
} /*EDITMODE-END*/;
function useReveal(deps) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });
    els.forEach(el => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });
    return () => io.disconnect();
  }, deps);
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal([t.servicesLayout, t.showClients]);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Homepage",
    "data-rhythm": t.rhythm
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    media: t.heroMedia
  }), t.showClients && /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(Services, {
    layout: t.servicesLayout
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Insights, null), /*#__PURE__*/React.createElement(CTASection, null)), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Media tile",
    value: t.heroMedia,
    options: ["cyan", "photo", "ink"],
    onChange: v => setTweak("heroMedia", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Services"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Display",
    value: t.servicesLayout,
    options: ["explorer", "grid"],
    onChange: v => setTweak("servicesLayout", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Page"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Client trust strip",
    value: t.showClients,
    onChange: v => setTweak("showClients", v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Section rhythm",
    value: t.rhythm,
    options: ["spacious", "compact"],
    onChange: v => setTweak("rhythm", v)
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/App.jsx", error: String((e && e.message) || e) }); }

// revamp/CTASection.jsx
try { (() => {
/* global React, Icons */
function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "so-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: ct.card,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: ct.glow,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: ct.content
  }, /*#__PURE__*/React.createElement("p", {
    className: "so-eyebrow",
    style: {
      color: "var(--so-cyan-300)"
    }
  }, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", {
    style: ct.h2
  }, "Ready to make disruption work for you?"), /*#__PURE__*/React.createElement("p", {
    style: ct.lead
  }, "Tell us where you want to go. We\u2019ll bring the pragmatic, grounded plan to get you there \u2013 and the team to make it happen."), /*#__PURE__*/React.createElement("div", {
    style: ct.actions
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "so-btn so-btn--on-dark"
  }, "Start a conversation ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "so-btn so-btn--ghost-dark"
  }, "See our cases"))))));
}
const ct = {
  card: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(155deg, #182338 0%, #060b1a 70%)",
    borderRadius: 40,
    padding: "clamp(40px, 5vw, 80px)",
    boxShadow: "var(--shadow-xl)"
  },
  glow: {
    position: "absolute",
    top: "-30%",
    right: "-10%",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,217,244,0.30) 0%, rgba(0,217,244,0) 68%)",
    pointerEvents: "none"
  },
  content: {
    position: "relative",
    maxWidth: 620
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(2rem, 1.2rem + 2.8vw, 3.4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    color: "#fff",
    margin: "18px 0 18px",
    textWrap: "balance"
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.55,
    color: "var(--so-ink-200)",
    margin: "0 0 32px",
    maxWidth: 520,
    textWrap: "pretty"
  },
  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
};
window.CTASection = CTASection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/CTASection.jsx", error: String((e && e.message) || e) }); }

// revamp/Clients.jsx
try { (() => {
/* global React */
const CLIENTS = ["bol.", "Albert Heijn", "Unilever", "ING", "Heineken", "Schneider Electric", "IKEA", "ABN·AMRO", "Nestlé", "JDE", "Schiphol", "PVH"];
function Clients() {
  return /*#__PURE__*/React.createElement("section", {
    className: "so-section--tight",
    style: cl.section
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: cl.label
  }, "Trusted by the teams driving change at"), /*#__PURE__*/React.createElement("div", {
    style: cl.wall
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: cl.logo
  }, c)))));
}
const cl = {
  section: {
    borderTop: "1px solid var(--border-1)",
    borderBottom: "1px solid var(--border-1)",
    background: "var(--bg-subtle)"
  },
  label: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: "var(--fg-3)",
    margin: "0 0 26px"
  },
  wall: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px 44px"
  },
  logo: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(16px, 1.2vw, 20px)",
    color: "var(--so-ink-400)",
    letterSpacing: "-0.01em",
    lineHeight: 1,
    transition: "color 140ms var(--ease-out)",
    cursor: "default"
  }
};
window.Clients = Clients;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Clients.jsx", error: String((e && e.message) || e) }); }

// revamp/Hero.jsx
try { (() => {
/* global React, Icons */
function Hero({
  media = "cyan"
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: hr.section
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container",
    style: hr.grid,
    "data-hero-grid": true
  }, /*#__PURE__*/React.createElement("div", {
    style: hr.left,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "so-eyebrow"
  }, "We make disruption work for you"), /*#__PURE__*/React.createElement("h1", {
    style: hr.h1
  }, "Digital is not about digital ", /*#__PURE__*/React.createElement("span", {
    style: hr.accentWord
  }, "for digital\u2019s sake.")), /*#__PURE__*/React.createElement("p", {
    style: hr.lead
  }, "It\u2019s about using technology and data to serve customers and consumers better, faster and more sustainable \u2013 turning disruption into your advantage."), /*#__PURE__*/React.createElement("div", {
    style: hr.ctas
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "so-btn so-btn--primary"
  }, "Explore our approach ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null)), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "so-btn so-btn--ghost"
  }, "Our services")), /*#__PURE__*/React.createElement("div", {
    style: hr.metaRow
  }, /*#__PURE__*/React.createElement("span", {
    style: hr.metaItem
  }, /*#__PURE__*/React.createElement("strong", {
    style: hr.metaNum
  }, "15+"), " years turning disruption into growth"), /*#__PURE__*/React.createElement("span", {
    style: hr.metaDivider
  }), /*#__PURE__*/React.createElement("span", {
    style: hr.metaItem
  }, /*#__PURE__*/React.createElement("strong", {
    style: hr.metaNum
  }, "500+"), " transformations delivered"))), /*#__PURE__*/React.createElement("div", {
    style: hr.right,
    className: "reveal"
  }, /*#__PURE__*/React.createElement(HeroMedia, {
    media: media
  }))));
}
function HeroMedia({
  media
}) {
  const bg = media === "ink" ? "linear-gradient(165deg, #182338 0%, #060b1a 100%)" : media === "photo" ? "var(--so-ink-900)" : "linear-gradient(170deg, #c2f5fd 0%, #00d9f4 60%, #00b3cc 100%)";
  const captionColor = media === "cyan" ? "var(--so-ink-900)" : "#fff";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...hr.tile,
      background: bg
    }
  }, media === "photo" && /*#__PURE__*/React.createElement("img", {
    src: "../assets/sample-insight-c-suite.jpg",
    alt: "",
    style: hr.tileImg
  }), media === "photo" && /*#__PURE__*/React.createElement("div", {
    style: hr.tileScrim
  }), /*#__PURE__*/React.createElement("div", {
    style: hr.play,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icons.Play, {
    width: 26,
    height: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...hr.caption,
      color: captionColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...hr.live,
      background: media === "cyan" ? "var(--so-ink-900)" : "var(--so-cyan-500)"
    }
  }), "Watch our intro \xB7 1:24"), /*#__PURE__*/React.createElement("div", {
    style: hr.chip
  }, /*#__PURE__*/React.createElement("span", {
    style: hr.chipNum
  }, "#1"), /*#__PURE__*/React.createElement("span", {
    style: hr.chipLabel
  }, "ranked digital strategy", /*#__PURE__*/React.createElement("br", null), "consultancy in the Netherlands")));
}
const hr = {
  section: {
    paddingTop: "clamp(40px, 4vw, 84px)",
    paddingBottom: "clamp(48px, 4vw, 96px)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: 72,
    alignItems: "center"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 26,
    maxWidth: 580
  },
  h1: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(2.6rem, 1.2rem + 4.4vw, 4.6rem)",
    lineHeight: 1.03,
    letterSpacing: "-0.025em",
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "balance"
  },
  accentWord: {
    color: "var(--so-ink-500)"
  },
  lead: {
    fontSize: 19.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 520,
    textWrap: "pretty"
  },
  ctas: {
    display: "flex",
    gap: 12,
    marginTop: 6,
    flexWrap: "wrap"
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    marginTop: 14,
    paddingTop: 22,
    borderTop: "1px solid var(--border-1)",
    flexWrap: "wrap"
  },
  metaItem: {
    fontSize: 14,
    color: "var(--fg-2)",
    display: "inline-flex",
    alignItems: "baseline",
    gap: 7
  },
  metaNum: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 22,
    color: "var(--fg-1)",
    letterSpacing: "-0.02em"
  },
  metaDivider: {
    width: 1,
    height: 26,
    background: "var(--border-2)"
  },
  right: {
    position: "relative"
  },
  tile: {
    position: "relative",
    aspectRatio: "4/5",
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "var(--shadow-xl)",
    display: "block"
  },
  tileImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  tileScrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,26,0.05) 0%, rgba(6,11,26,0.55) 100%)"
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 78,
    height: 78,
    borderRadius: "50%",
    background: "#fff",
    display: "grid",
    placeItems: "center",
    color: "var(--so-ink-900)",
    boxShadow: "0 12px 32px rgba(15,23,42,.22)"
  },
  caption: {
    position: "absolute",
    left: 26,
    bottom: 24,
    fontSize: 13.5,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 9
  },
  live: {
    width: 8,
    height: 8,
    borderRadius: 999,
    display: "inline-block"
  },
  chip: {
    position: "absolute",
    top: 22,
    right: 22,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    borderRadius: 16,
    padding: "12px 15px",
    display: "flex",
    alignItems: "center",
    gap: 11,
    boxShadow: "var(--shadow-md)",
    maxWidth: 220
  },
  chipNum: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 30,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.03em",
    lineHeight: 1
  },
  chipLabel: {
    fontSize: 11,
    lineHeight: 1.3,
    color: "var(--fg-2)",
    fontWeight: 500
  }
};
const _heroStyle = document.createElement("style");
_heroStyle.textContent = `
  @media (max-width: 920px) {
    [data-hero-grid] { grid-template-columns: 1fr !important; gap: 40px !important; }
    [data-hero-grid] .reveal:last-child { order: -1; }
  }
  @media (max-width: 560px) {
    [data-hero-grid] [style*="aspect-ratio"] { aspect-ratio: 1/1 !important; }
  }
`;
document.head.appendChild(_heroStyle);
window.Hero = Hero;
window.HeroMedia = HeroMedia;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Hero.jsx", error: String((e && e.message) || e) }); }

// revamp/Insights.jsx
try { (() => {
/* global React, Icons */
const INSIGHTS = [{
  tag: "Case study",
  img: "../assets/sample-case-logistics.webp",
  title: "Accelerating Bleckmann\u2019s new business growth through (Gen) AI",
  meta: "8 min read"
}, {
  tag: "Best practices",
  img: "../assets/sample-insight-sustainability.jpg",
  title: "Sustainable innovation: new business models for a circular economy",
  meta: "6 min read"
}, {
  tag: "Best practices",
  img: "../assets/sample-insight-c-suite.jpg",
  title: "The C-suite blueprint for successful digital transformation",
  meta: "5 min read"
}];
function Insights() {
  return /*#__PURE__*/React.createElement("section", {
    id: "insights",
    className: "so-section",
    style: {
      background: "var(--bg-canvas)",
      borderTop: "1px solid var(--border-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: ins.head,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "so-eyebrow"
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    style: ins.h2
  }, "Spark your knowledge.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "so-arrowlink",
    style: ins.viewAll
  }, "View all insights ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null))), /*#__PURE__*/React.createElement("div", {
    style: ins.grid,
    className: "reveal",
    "data-ins-grid": true
  }, INSIGHTS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.title,
    href: "#",
    style: ins.card,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      const im = e.currentTarget.querySelector("img");
      if (im) im.style.transform = "scale(1.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      const im = e.currentTarget.querySelector("img");
      if (im) im.style.transform = "";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ins.imgWrap
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    style: ins.img
  }), /*#__PURE__*/React.createElement("span", {
    style: ins.tag
  }, it.tag)), /*#__PURE__*/React.createElement("div", {
    style: ins.body
  }, /*#__PURE__*/React.createElement("h3", {
    style: ins.title
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: ins.meta
  }, /*#__PURE__*/React.createElement("span", null, it.meta), /*#__PURE__*/React.createElement("span", {
    className: "so-arrowlink",
    style: {
      fontSize: 13.5
    }
  }, "Read ", /*#__PURE__*/React.createElement(Icons.ArrowRight, {
    width: 14,
    height: 14
  })))))))));
}
const ins = {
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    marginBottom: 44,
    flexWrap: "wrap"
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.9rem, 1.1rem + 2.4vw, 3rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "var(--fg-1)",
    margin: "16px 0 0"
  },
  viewAll: {
    fontSize: 15,
    paddingBottom: 6
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
    transition: "transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out)",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column"
  },
  imgWrap: {
    position: "relative",
    overflow: "hidden"
  },
  img: {
    width: "100%",
    aspectRatio: "16/10",
    objectFit: "cover",
    display: "block",
    transition: "transform 420ms var(--ease-out)"
  },
  tag: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "rgba(255,255,255,0.94)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--so-ink-700)",
    padding: "6px 11px",
    borderRadius: 999
  },
  body: {
    padding: "22px 24px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    flex: 1
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19.5,
    lineHeight: 1.28,
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "balance",
    flex: 1
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 13.5,
    color: "var(--fg-3)",
    paddingTop: 14,
    borderTop: "1px solid var(--border-1)"
  }
};
const _insStyle = document.createElement("style");
_insStyle.textContent = `
  @media (max-width: 920px) { [data-ins-grid] { grid-template-columns: 1fr 1fr !important; } }
  @media (max-width: 620px) { [data-ins-grid] { grid-template-columns: 1fr !important; } }
`;
document.head.appendChild(_insStyle);
window.Insights = Insights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Insights.jsx", error: String((e && e.message) || e) }); }

// revamp/Nav.jsx
try { (() => {
/* global React, Icons */
const {
  useState,
  useEffect
} = React;
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Our approach", "Our services", "Sectors", "Our team", "Cases", "Insights"];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...nv.bar,
      borderBottomColor: scrolled ? "var(--border-1)" : "transparent",
      boxShadow: scrolled ? "0 1px 0 rgba(15,23,42,0.02), 0 8px 24px rgba(15,23,42,0.04)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: nv.inner,
    "data-so-inner": true
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: nv.logo,
    "aria-label": "SparkOptimus home"
  }, /*#__PURE__*/React.createElement("span", {
    style: nv.dot
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: nv.word
  }, "SparkOptimus")), /*#__PURE__*/React.createElement("nav", {
    style: nv.nav,
    "data-so-nav": true
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      ...nv.link,
      ...(i === 0 ? nv.linkActive : null)
    },
    onMouseEnter: e => {
      if (i !== 0) e.currentTarget.style.background = "var(--bg-muted)";
    },
    onMouseLeave: e => {
      if (i !== 0) e.currentTarget.style.background = "transparent";
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: nv.right
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "so-btn so-btn--primary",
    style: {
      padding: "11px 22px",
      fontSize: 14
    }
  }, "Contact ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null)), /*#__PURE__*/React.createElement("button", {
    style: nv.burger,
    "data-so-burger": true,
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open
  }, open ? /*#__PURE__*/React.createElement(Icons.Close, {
    width: 22,
    height: 22
  }) : /*#__PURE__*/React.createElement(Icons.Menu, {
    width: 22,
    height: 22
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: nv.drawer,
    "data-so-drawer": true
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: nv.drawerLink,
    onClick: () => setOpen(false)
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "so-btn so-btn--primary",
    style: {
      marginTop: 8,
      justifyContent: "center"
    },
    onClick: () => setOpen(false)
  }, "Contact")));
}
const nv = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 60,
    background: "rgba(255,255,255,0.78)",
    backdropFilter: "saturate(1.4) blur(12px)",
    WebkitBackdropFilter: "saturate(1.4) blur(12px)",
    borderBottom: "1px solid transparent",
    transition: "border-color 240ms, box-shadow 240ms"
  },
  inner: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "14px 40px",
    display: "flex",
    alignItems: "center",
    gap: 24
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    textDecoration: "none",
    flexShrink: 0
  },
  dot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "var(--so-cyan-500)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 21,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.02em",
    lineHeight: 1
  },
  word: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 23,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.01em"
  },
  nav: {
    display: "flex",
    gap: 2,
    marginInline: "auto"
  },
  link: {
    fontSize: 14.5,
    fontWeight: 600,
    color: "var(--so-ink-900)",
    textDecoration: "none",
    padding: "9px 15px",
    borderRadius: 999,
    transition: "background 140ms var(--ease-out)"
  },
  linkActive: {
    background: "var(--so-cyan-500)"
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginLeft: "auto"
  },
  burger: {
    display: "none",
    width: 42,
    height: 42,
    borderRadius: 999,
    border: "1px solid var(--border-2)",
    background: "#fff",
    color: "var(--so-ink-900)",
    placeItems: "center",
    cursor: "pointer"
  },
  drawer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "8px 24px 22px",
    borderTop: "1px solid var(--border-1)",
    background: "rgba(255,255,255,0.98)"
  },
  drawerLink: {
    fontSize: 16,
    fontWeight: 600,
    color: "var(--so-ink-900)",
    textDecoration: "none",
    padding: "12px 8px",
    borderRadius: 12
  }
};

// responsive: collapse nav under 920px
const _navStyle = document.createElement("style");
_navStyle.textContent = `
  @media (max-width: 920px) {
    header [data-so-nav] { display: none !important; }
    header [data-so-burger] { display: grid !important; }
    header [data-so-inner] { padding-inline: 24px !important; }
  }
  @media (min-width: 921px) { header [data-so-drawer] { display: none !important; } }
`;
document.head.appendChild(_navStyle);
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Nav.jsx", error: String((e && e.message) || e) }); }

// revamp/Pillars.jsx
try { (() => {
/* global React */
const PILLARS = [{
  img: "../assets/pillar-customer.svg",
  title: "Customer",
  line: "Start with real customer and consumer needs \u2014 never technology for its own sake."
}, {
  img: "../assets/pillar-tech.png",
  title: "Technology",
  line: "Build the platforms and architecture that let you move fast and adapt."
}, {
  img: "../assets/pillar-way-of-working.png",
  title: "Way of working",
  line: "Adopt agile, data-driven ways of working that make change stick."
}, {
  img: "../assets/pillar-data.png",
  title: "Data",
  line: "Turn data into a genuine asset that compounds over time."
}, {
  img: "../assets/pillar-organisation.png",
  title: "Organization",
  line: "Align people, structure and capabilities behind the strategy."
}];
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    className: "so-section",
    style: pl.section
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: pl.head,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "so-eyebrow"
  }, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: pl.h2
  }, "Transformation that holds together \u2013 across five pillars."), /*#__PURE__*/React.createElement("p", {
    style: pl.lead
  }, "Lasting change is never just technology. We connect five pillars into one coherent transformation, so the strategy actually lands in your organization.")), /*#__PURE__*/React.createElement("div", {
    style: pl.rowWrap,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: pl.connector,
    "aria-hidden": "true",
    "data-pillar-line": true
  }), /*#__PURE__*/React.createElement("ol", {
    style: pl.row,
    "data-pillar-row": true
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: p.title,
    style: pl.item
  }, /*#__PURE__*/React.createElement("div", {
    style: pl.disc
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: pl.icon
  }), /*#__PURE__*/React.createElement("span", {
    style: pl.badge
  }, i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: pl.title
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: pl.line
  }, p.line)))))));
}
const pl = {
  section: {
    background: "var(--bg-subtle)",
    borderBottom: "1px solid var(--border-1)"
  },
  head: {
    maxWidth: 680,
    marginBottom: 64
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.9rem, 1.1rem + 2.4vw, 3rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "var(--fg-1)",
    margin: "16px 0 18px",
    textWrap: "balance"
  },
  lead: {
    fontSize: 17.5,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 600,
    textWrap: "pretty"
  },
  rowWrap: {
    position: "relative"
  },
  connector: {
    position: "absolute",
    top: 47,
    left: "10%",
    right: "10%",
    height: 2,
    background: "repeating-linear-gradient(90deg, var(--border-2) 0 8px, transparent 8px 16px)"
  },
  row: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 28,
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 14
  },
  disc: {
    position: "relative",
    width: 96,
    height: 96,
    borderRadius: "50%",
    background: "#fff",
    border: "1px solid var(--border-1)",
    boxShadow: "var(--shadow-sm)",
    display: "grid",
    placeItems: "center"
  },
  icon: {
    width: 46,
    height: 46
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: 12,
    display: "grid",
    placeItems: "center",
    border: "2px solid var(--bg-subtle)"
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    color: "var(--fg-1)",
    margin: 0,
    letterSpacing: "-0.01em"
  },
  line: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 210,
    textWrap: "pretty"
  }
};
const _pillarStyle = document.createElement("style");
_pillarStyle.textContent = `
  @media (max-width: 920px) {
    [data-pillar-row] { grid-template-columns: repeat(2, 1fr) !important; gap: 40px 20px !important; }
    [data-pillar-line] { display: none !important; }
  }
  @media (max-width: 480px) {
    [data-pillar-row] { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(_pillarStyle);
window.Pillars = Pillars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Pillars.jsx", error: String((e && e.message) || e) }); }

// revamp/Services.jsx
try { (() => {
/* global React, Icons */
const {
  useState
} = React;
const SERVICES = [{
  icon: "../assets/icon-digital-strategy.svg",
  title: "Digital Strategy & Transformation",
  short: "Strategy that ships.",
  desc: "Translate digital disruption into a clear, pragmatic strategy \u2014 and the execution roadmap to make it real.",
  outcomes: ["A board-ready strategy grounded in what truly moves the needle", "An execution roadmap with owners, milestones and business cases", "Ways of working that make the change stick"]
}, {
  icon: "../assets/icon-sustainability.svg",
  title: "Sustainability Strategy & Transformation",
  short: "Profit and planet.",
  desc: "Embed sustainability into the core of your strategy and unlock new, profitable business models.",
  outcomes: ["A sustainability strategy tied to commercial value", "Concrete propositions for a circular, low-carbon business", "Reporting and governance that withstands scrutiny"]
}, {
  icon: "../assets/icon-ai-data.svg",
  title: "AI & Data Strategy & Transformation",
  short: "From pilots to scale.",
  desc: "Move from scattered pilots to scaled value with AI and data \u2014 end to end, from use case to adoption.",
  outcomes: ["A prioritized AI & data roadmap with real ROI", "Production-grade use cases, not stuck-in-the-lab pilots", "The data foundation and talent to scale responsibly"]
}, {
  icon: "../assets/icon-mergers.svg",
  title: "Mergers and Acquisitions",
  short: "De-risk the deal.",
  desc: "Digital due diligence and value-creation plans that de-risk the deal and accelerate the upside.",
  outcomes: ["Sharp digital & tech due diligence before you sign", "A 100-day value-creation plan post-close", "Value cases the deal team can stand behind"]
}, {
  icon: "../assets/icon-ventures.svg",
  title: "Ventures and scale-ups",
  short: "Build the new.",
  desc: "Build new ventures inside corporates \u2014 from concept and validation to launch and scale.",
  outcomes: ["Validated propositions customers actually want", "A venture built to launch in months, not years", "A clear path to scale with the right operating model"]
}];
function Services({
  layout = "explorer"
}) {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "so-section",
    style: {
      background: "var(--bg-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: sv.head,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "so-eyebrow"
  }, "Our services"), /*#__PURE__*/React.createElement("h2", {
    style: sv.h2
  }, "Five ways we help you unlock the power of disruption.")), /*#__PURE__*/React.createElement("p", {
    style: sv.headLead
  }, "We translate new technologies into concrete opportunities for your business \u2013 pragmatic, grounded, and focused on getting it done.")), layout === "grid" ? /*#__PURE__*/React.createElement(ServiceGrid, null) : /*#__PURE__*/React.createElement("div", {
    style: sv.explorer,
    className: "reveal",
    "data-svc-explorer": true
  }, /*#__PURE__*/React.createElement("ol", {
    style: sv.list
  }, SERVICES.map((item, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("li", {
      key: item.title
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        ...sv.listBtn,
        ...(on ? sv.listBtnOn : null)
      },
      onClick: () => setActive(i),
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--bg-subtle)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...sv.num,
        color: on ? "var(--so-cyan-700)" : "var(--fg-4)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: sv.listText
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...sv.listTitle,
        color: on ? "var(--fg-1)" : "var(--fg-2)"
      }
    }, item.title), /*#__PURE__*/React.createElement("span", {
      style: sv.listShort
    }, item.short)), /*#__PURE__*/React.createElement("span", {
      style: {
        ...sv.listArrow,
        opacity: on ? 1 : 0,
        color: "var(--so-cyan-700)"
      }
    }, /*#__PURE__*/React.createElement(Icons.ArrowRight, null))));
  })), /*#__PURE__*/React.createElement("div", {
    style: sv.panel,
    key: active
  }, /*#__PURE__*/React.createElement("div", {
    style: sv.panelGlow
  }), /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    style: sv.panelIcon
  }), /*#__PURE__*/React.createElement("h3", {
    style: sv.panelTitle
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: sv.panelDesc
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    style: sv.outcomes
  }, s.outcomes.map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    style: sv.outcome
  }, /*#__PURE__*/React.createElement("span", {
    style: sv.checkDot
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    width: 13,
    height: 13
  })), /*#__PURE__*/React.createElement("span", null, o)))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "so-arrowlink",
    style: {
      marginTop: 4
    }
  }, "Explore this service ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null))))));
}
function ServiceGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: sv.grid,
    className: "reveal",
    "data-svc-grid": true
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.title,
    href: "#",
    style: sv.card,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    style: sv.cardIcon
  }), /*#__PURE__*/React.createElement("h3", {
    style: sv.cardTitle
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: sv.cardDesc
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "so-arrowlink",
    style: {
      marginTop: "auto",
      paddingTop: 12
    }
  }, "Find out more ", /*#__PURE__*/React.createElement(Icons.ArrowRight, null)))));
}
const sv = {
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 40,
    marginBottom: 48,
    flexWrap: "wrap"
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.9rem, 1.1rem + 2.4vw, 3rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "var(--fg-1)",
    margin: "16px 0 0",
    textWrap: "balance"
  },
  headLead: {
    fontSize: 16.5,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 360,
    textWrap: "pretty"
  },
  explorer: {
    display: "grid",
    gridTemplateColumns: "0.92fr 1.08fr",
    gap: 28,
    alignItems: "stretch"
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  listBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: "20px 18px",
    border: 0,
    borderRadius: 16,
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 140ms var(--ease-out)",
    borderBottom: "1px solid var(--border-1)"
  },
  listBtnOn: {
    background: "var(--bg-subtle)",
    borderBottomColor: "transparent"
  },
  num: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 500,
    flexShrink: 0,
    width: 22
  },
  listText: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    flex: 1
  },
  listTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17.5,
    lineHeight: 1.2,
    letterSpacing: "-0.01em"
  },
  listShort: {
    fontSize: 13.5,
    color: "var(--fg-3)"
  },
  listArrow: {
    display: "grid",
    placeItems: "center",
    transition: "opacity 140ms var(--ease-out)",
    flexShrink: 0
  },
  panel: {
    position: "relative",
    overflow: "hidden",
    background: "var(--so-ink-900)",
    color: "#fff",
    borderRadius: 28,
    padding: "44px 44px 40px",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    boxShadow: "var(--shadow-lg)",
    minHeight: 420,
    animation: "soFade 420ms var(--ease-out)"
  },
  panelGlow: {
    position: "absolute",
    top: -120,
    right: -90,
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,217,244,0.32) 0%, rgba(0,217,244,0) 70%)",
    pointerEvents: "none"
  },
  panelIcon: {
    width: 72,
    height: 72,
    position: "relative"
  },
  panelTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.4rem, 1rem + 1vw, 1.9rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "#fff",
    margin: 0,
    maxWidth: 420,
    position: "relative"
  },
  panelDesc: {
    fontSize: 16.5,
    lineHeight: 1.55,
    color: "var(--so-ink-200)",
    margin: 0,
    maxWidth: 440,
    textWrap: "pretty",
    position: "relative"
  },
  outcomes: {
    listStyle: "none",
    margin: "8px 0 auto",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    position: "relative"
  },
  outcome: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    fontSize: 15,
    lineHeight: 1.45,
    color: "var(--so-ink-100)"
  },
  checkDot: {
    flexShrink: 0,
    width: 22,
    height: 22,
    borderRadius: 999,
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)",
    display: "grid",
    placeItems: "center",
    marginTop: 1
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    padding: 30,
    boxShadow: "var(--shadow-sm)",
    transition: "transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    textDecoration: "none",
    color: "inherit"
  },
  cardIcon: {
    width: 60,
    height: 60
  },
  cardTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 1.22,
    color: "var(--fg-1)",
    margin: 0
  },
  cardDesc: {
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  }
};
const _svcStyle = document.createElement("style");
_svcStyle.textContent = `
  @keyframes soFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) { [data-svc-explorer] [style*="soFade"] { animation: none !important; } }
  @media (max-width: 920px) {
    [data-svc-explorer] { grid-template-columns: 1fr !important; }
    [data-svc-grid] { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 600px) {
    [data-svc-grid] { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(_svcStyle);
window.Services = Services;
window.ServiceGrid = ServiceGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Services.jsx", error: String((e && e.message) || e) }); }

// revamp/SiteFooter.jsx
try { (() => {
/* global React, Icons */
const {
  useState
} = React;
function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: ft.footer
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.top,
    "data-footer-top": true
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.brandCol
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.lockup
  }, /*#__PURE__*/React.createElement("span", {
    style: ft.dot
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: ft.word
  }, "SparkOptimus")), /*#__PURE__*/React.createElement("p", {
    style: ft.addr
  }, "Jacob Obrechtplein 1", /*#__PURE__*/React.createElement("br", null), "1071 KS Amsterdam", /*#__PURE__*/React.createElement("br", null), "The Netherlands"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+31203059000",
    style: ft.phone
  }, "+31 20 305 9000"), /*#__PURE__*/React.createElement("div", {
    style: ft.social
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.socialBtn,
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icons.LinkedIn, {
    width: 18,
    height: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.socialBtn,
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Icons.Instagram, {
    width: 18,
    height: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.socialBtn,
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement(Icons.YouTube, {
    width: 18,
    height: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: ft.linksCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "Company"), ["Our approach", "Our services", "Sectors", "Our team", "Cases", "Insights"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: ft.flink
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: ft.linksCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "Connect"), ["info@sparkoptimus.com", "Careers", "Podcasts", "Press"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: ft.flink
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: ft.signupCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "The Spark newsletter"), /*#__PURE__*/React.createElement("p", {
    style: ft.signupCopy
  }, "Spark your knowledge on a monthly basis \u2013 curated thinking on digital, sustainability, and Data & AI."), sent ? /*#__PURE__*/React.createElement("div", {
    style: ft.thanks
  }, /*#__PURE__*/React.createElement(Icons.Check, {
    width: 16,
    height: 16
  }), " Thank you \u2014 your submission has been received.") : /*#__PURE__*/React.createElement("form", {
    style: ft.form,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    "data-footer-form": true
  }, /*#__PURE__*/React.createElement("input", {
    style: ft.input,
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Your work email",
    "aria-label": "Your work email"
  }), /*#__PURE__*/React.createElement("button", {
    style: ft.btn,
    type: "submit"
  }, "Sign up")))), /*#__PURE__*/React.createElement("div", {
    style: ft.bottom,
    "data-footer-bottom": true
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 SparkOptimus ", new Date().getFullYear(), ". We make disruption work for you."), /*#__PURE__*/React.createElement("span", {
    style: ft.legal
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.flegal
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.flegal
  }, "Cookie policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.flegal
  }, "Human & Labor Rights"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ft.flegal
  }, "Environmental statement")))));
}
const ft = {
  footer: {
    background: "var(--so-ink-900)",
    color: "var(--so-ink-200)",
    paddingTop: 80,
    paddingBottom: 32
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1.7fr",
    gap: 48,
    paddingBottom: 56
  },
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: 18
  },
  lockup: {
    display: "flex",
    alignItems: "center",
    gap: 11
  },
  dot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "var(--so-cyan-500)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 21,
    color: "var(--so-ink-900)",
    lineHeight: 1
  },
  word: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 23,
    color: "#fff"
  },
  addr: {
    fontSize: 14,
    lineHeight: 1.65,
    color: "var(--so-ink-300)",
    margin: 0
  },
  phone: {
    fontSize: 14.5,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600
  },
  social: {
    display: "flex",
    gap: 10,
    marginTop: 6
  },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: 999,
    border: "1px solid var(--border-on-inverse)",
    color: "var(--so-ink-100)",
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    transition: "background 140ms var(--ease-out), color 140ms"
  },
  linksCol: {
    display: "flex",
    flexDirection: "column",
    gap: 11
  },
  colHead: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 12,
    color: "#fff",
    margin: "0 0 6px",
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  },
  flink: {
    fontSize: 14.5,
    color: "var(--so-ink-300)",
    textDecoration: "none",
    transition: "color 140ms var(--ease-out)"
  },
  signupCol: {
    display: "flex",
    flexDirection: "column",
    gap: 14
  },
  signupCopy: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--so-ink-300)",
    margin: 0,
    maxWidth: 360
  },
  form: {
    display: "flex",
    gap: 8,
    maxWidth: 380
  },
  input: {
    flex: 1,
    padding: "13px 18px",
    borderRadius: 999,
    border: "1.5px solid var(--border-on-inverse)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontSize: 14.5,
    outline: "none",
    fontFamily: "inherit"
  },
  btn: {
    padding: "13px 24px",
    borderRadius: 999,
    border: 0,
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)",
    fontWeight: 700,
    fontSize: 14.5,
    cursor: "pointer",
    fontFamily: "inherit",
    whiteSpace: "nowrap"
  },
  thanks: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "13px 18px",
    borderRadius: 14,
    background: "rgba(0,217,244,0.12)",
    color: "var(--so-cyan-200)",
    fontSize: 14.5,
    border: "1px solid rgba(0,217,244,0.2)"
  },
  bottom: {
    borderTop: "1px solid var(--border-on-inverse)",
    paddingTop: 26,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    fontSize: 13,
    color: "var(--so-ink-400)"
  },
  legal: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  },
  flegal: {
    color: "var(--so-ink-400)",
    textDecoration: "none"
  }
};
const _ftStyle = document.createElement("style");
_ftStyle.textContent = `
  footer [style] a[style*="ink-300"]:hover, footer a[aria-label]:hover { color: #fff !important; }
  footer a[aria-label]:hover { background: rgba(255,255,255,0.08); }
  @media (max-width: 920px) {
    [data-footer-top] { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
  }
  @media (max-width: 560px) {
    [data-footer-top] { grid-template-columns: 1fr !important; }
    [data-footer-bottom] { flex-direction: column; align-items: flex-start !important; }
  }
`;
document.head.appendChild(_ftStyle);
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// revamp/Testimonial.jsx
try { (() => {
/* global React, Icons */
const {
  useState,
  useEffect,
  useRef
} = React;
const QUOTES = [{
  quote: "With SparkOptimus, the quality is always there, and you know where you\u2019re going. It\u2019s managed in a way that is clear, so the client doesn\u2019t experience scope creep.",
  name: "Valerie L\u2019Hours",
  role: "Global Head of Programme Delivery",
  company: "Just Eat Takeaway.com"
}, {
  quote: "The big difference with SparkOptimus is that their work is grounded in three parts: strong analysis focused on what really matters, a strategy with real tangible results, and a collaborative approach.",
  name: "Ivan Kotov",
  role: "Chief Commercial Officer",
  company: "Orac"
}, {
  quote: "Within one week, SparkOptimus outlined valuable applications of AI across the organization \u2014 with a pragmatic, results-oriented approach.",
  name: "Tuncay \u00d6zg\u00fcner",
  role: "CEO",
  company: "Zijerveld"
}];
function Testimonial() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const go = n => setI((n + QUOTES.length) % QUOTES.length);
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI(p => (p + 1) % QUOTES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);
  const q = QUOTES[i];
  return /*#__PURE__*/React.createElement("section", {
    className: "so-section",
    style: ts.section,
    onMouseEnter: () => {
      paused.current = true;
    },
    onMouseLeave: () => {
      paused.current = false;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "so-container",
    style: {
      maxWidth: 960
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ts.inner,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: ts.quoteMark,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "36",
    viewBox: "0 0 36 28",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 28V18C0 8.4 6 1.6 14 0L16 4C10.8 5.6 7.6 9.6 7.6 14H14V28H0ZM22 28V18C22 8.4 28 1.6 36 0L38 4C32.8 5.6 29.6 9.6 29.6 14H36V28H22Z",
    fill: "var(--so-cyan-500)"
  }))), /*#__PURE__*/React.createElement("blockquote", {
    style: ts.quote,
    key: i
  }, q.quote), /*#__PURE__*/React.createElement("div", {
    style: ts.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: ts.byline
  }, /*#__PURE__*/React.createElement("span", {
    style: ts.name
  }, q.name), /*#__PURE__*/React.createElement("span", {
    style: ts.role
  }, q.role, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: ts.company
  }, q.company))), /*#__PURE__*/React.createElement("div", {
    style: ts.controls
  }, /*#__PURE__*/React.createElement("div", {
    style: ts.dots
  }, QUOTES.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => go(idx),
    "aria-label": "Quote " + (idx + 1),
    style: {
      ...ts.dot,
      ...(idx === i ? ts.dotOn : null)
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: ts.arrows
  }, /*#__PURE__*/React.createElement("button", {
    style: ts.arrow,
    onClick: () => go(i - 1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "rotate(180deg)",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(Icons.ArrowRight, null))), /*#__PURE__*/React.createElement("button", {
    style: ts.arrow,
    onClick: () => go(i + 1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Icons.ArrowRight, null))))))));
}
const ts = {
  section: {
    background: "var(--bg-canvas)"
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    gap: 28
  },
  quoteMark: {
    lineHeight: 0
  },
  quote: {
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "clamp(1.6rem, 1rem + 1.8vw, 2.5rem)",
    lineHeight: 1.38,
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "pretty",
    animation: "soFade 420ms var(--ease-out)"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    flexWrap: "wrap",
    paddingTop: 12,
    borderTop: "1px solid var(--border-1)"
  },
  byline: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  name: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    color: "var(--fg-1)"
  },
  role: {
    fontSize: 14.5,
    color: "var(--fg-2)"
  },
  company: {
    color: "var(--fg-1)",
    fontWeight: 600
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: 20
  },
  dots: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "var(--so-ink-200)",
    border: 0,
    padding: 0,
    cursor: "pointer",
    transition: "all 240ms var(--ease-out)"
  },
  dotOn: {
    background: "var(--so-cyan-500)",
    width: 26
  },
  arrows: {
    display: "flex",
    gap: 8
  },
  arrow: {
    width: 44,
    height: 44,
    borderRadius: 999,
    border: "1px solid var(--border-2)",
    background: "#fff",
    color: "var(--so-ink-900)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    transition: "background 140ms var(--ease-out), border-color 140ms"
  }
};
window.Testimonial = Testimonial;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/Testimonial.jsx", error: String((e && e.message) || e) }); }

// revamp/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// Thin-line (1.5px stroke) UI icons — matches SparkOptimus' inline icon register.
// Service/pillar marks are illustrations from /assets, NOT these.
const _s = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icons = {
  ArrowRight: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  ArrowUpRight: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M8 7h9v9"
  })),
  ChevronDown: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  Play: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, {
    fill: "currentColor",
    stroke: "none"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M8 5.5v13l11-6.5L8 5.5Z"
  })),
  Menu: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  })),
  Close: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "M6 6 18 18M18 6 6 18"
  })),
  Check: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("path", {
    d: "m5 12.5 4.5 4.5L19 7"
  })),
  LinkedIn: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, {
    fill: "currentColor",
    stroke: "none"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.65 22 11 22 14.5V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9V9Z"
  })),
  Instagram: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, p), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "0.6",
    fill: "currentColor",
    stroke: "none"
  })),
  YouTube: p => /*#__PURE__*/React.createElement("svg", _extends({}, _s, {
    fill: "currentColor",
    stroke: "none"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 7.2a3 3 0 0 0-2.1-2.1C18.5 4.6 12 4.6 12 4.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z"
  }))
};
window.Icons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/icons.jsx", error: String((e && e.message) || e) }); }

// revamp/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "revamp/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ClientsRow.jsx
try { (() => {
/* global React */
const CLIENTS = ["bol.com", "Albert Heijn", "Unilever", "ING", "Heineken", "Schneider Electric", "IKEA", "ABN·AMRO", "Henkel", "Nestlé", "JDE", "PVH"];
function ClientsRow() {
  return /*#__PURE__*/React.createElement("section", {
    style: cl.section
  }, /*#__PURE__*/React.createElement("div", {
    style: cl.head
  }, /*#__PURE__*/React.createElement("div", {
    style: cl.eyebrow
  }, "Our clients"), /*#__PURE__*/React.createElement("h2", {
    style: cl.h2
  }, "We work closely with hundreds of change leaders across the globe.")), /*#__PURE__*/React.createElement("div", {
    style: cl.grid
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: cl.cell
  }, /*#__PURE__*/React.createElement("span", {
    style: cl.logo
  }, c)))));
}
const cl = {
  section: {
    padding: "60px 40px 80px",
    maxWidth: 1280,
    margin: "0 auto"
  },
  head: {
    maxWidth: 760,
    marginBottom: 36
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 14
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.25rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)",
    margin: 0
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 0,
    borderTop: "1px solid var(--border-1)",
    borderLeft: "1px solid var(--border-1)"
  },
  cell: {
    aspectRatio: "3/2",
    display: "grid",
    placeItems: "center",
    borderRight: "1px solid var(--border-1)",
    borderBottom: "1px solid var(--border-1)"
  },
  logo: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    color: "var(--so-ink-600)",
    letterSpacing: "-0.02em",
    filter: "saturate(0)"
  }
};
window.ClientsRow = ClientsRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ClientsRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */
function Footer() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: ft.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.top
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.brandCol
  }, /*#__PURE__*/React.createElement("div", {
    style: ft.lockup
  }, /*#__PURE__*/React.createElement("span", {
    style: ft.dot
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: ft.word
  }, "SparkOptimus")), /*#__PURE__*/React.createElement("p", {
    style: ft.addr
  }, "Jacob Obrechtplein 1", /*#__PURE__*/React.createElement("br", null), "1071 KS Amsterdam", /*#__PURE__*/React.createElement("br", null), "The Netherlands"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+31203059000",
    style: ft.phone
  }, "+31 20 305 9000")), /*#__PURE__*/React.createElement("div", {
    style: ft.linksCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Our approach"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Our services"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Our team"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Cases"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    style: ft.linksCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "Connect"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "info@sparkoptimus.com"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "YouTube"), /*#__PURE__*/React.createElement("a", {
    style: ft.flink
  }, "Podcasts")), /*#__PURE__*/React.createElement("div", {
    style: ft.signupCol
  }, /*#__PURE__*/React.createElement("h5", {
    style: ft.colHead
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: ft.signupCopy
  }, "Spark your knowledge. Monthly curated news on digital strategy, sustainability, and Data & AI."), sent ? /*#__PURE__*/React.createElement("div", {
    style: ft.thanks
  }, "Thank you! Your submission has been received.") : /*#__PURE__*/React.createElement("form", {
    style: ft.form,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: ft.input,
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Your work email"
  }), /*#__PURE__*/React.createElement("button", {
    style: ft.btn,
    type: "submit"
  }, "Sign up")))), /*#__PURE__*/React.createElement("div", {
    style: ft.bottom
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 SparkOptimus ", new Date().getFullYear()), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: ft.flegal
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    style: ft.flegal
  }, "Cookie policy"), /*#__PURE__*/React.createElement("a", {
    style: ft.flegal
  }, "Human & Labor Rights"), /*#__PURE__*/React.createElement("a", {
    style: ft.flegal
  }, "Environmental statement"))));
}
const ft = {
  footer: {
    background: "var(--bg-subtle)",
    color: "var(--fg-2)",
    padding: "72px 40px 28px",
    marginTop: 40,
    borderTop: "1px solid var(--border-1)"
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1.6fr",
    gap: 48,
    maxWidth: 1280,
    margin: "0 auto"
  },
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: 18
  },
  lockup: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  dot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "var(--so-cyan-500)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 22,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.02em",
    lineHeight: 1
  },
  word: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 22,
    color: "var(--fg-1)"
  },
  addr: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "var(--fg-2)",
    margin: 0
  },
  phone: {
    fontSize: 14,
    color: "var(--fg-1)",
    textDecoration: "none",
    fontWeight: 600
  },
  linksCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  colHead: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 13,
    color: "var(--fg-1)",
    margin: "0 0 10px",
    letterSpacing: "0.06em",
    textTransform: "uppercase"
  },
  flink: {
    fontSize: 14,
    color: "var(--fg-2)",
    textDecoration: "none",
    cursor: "pointer",
    padding: "2px 0"
  },
  signupCol: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  signupCopy: {
    fontSize: 14,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  },
  form: {
    display: "flex",
    gap: 8
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 999,
    border: "1.5px solid var(--border-2)",
    background: "#fff",
    color: "var(--fg-1)",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit"
  },
  btn: {
    padding: "12px 22px",
    borderRadius: 999,
    border: 0,
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "inherit"
  },
  thanks: {
    padding: "12px 16px",
    borderRadius: 14,
    background: "var(--so-cyan-50)",
    color: "var(--so-cyan-900)",
    fontSize: 14
  },
  bottom: {
    borderTop: "1px solid var(--border-1)",
    marginTop: 56,
    paddingTop: 22,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 1280,
    marginInline: "auto",
    fontSize: 12,
    color: "var(--fg-3)",
    flexWrap: "wrap",
    gap: 12
  },
  flegal: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer"
  }
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Our approach", "Our services", "Our sectors", "Our team", "Cases", "Insights"];
  return /*#__PURE__*/React.createElement("header", {
    style: hdr.bar
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: hdr.logo,
    "aria-label": "SparkOptimus home"
  }, /*#__PURE__*/React.createElement("span", {
    style: hdr.dot
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: hdr.word
  }, "SparkOptimus")), /*#__PURE__*/React.createElement("nav", {
    style: hdr.nav
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      ...hdr.link,
      ...(i === 0 ? hdr.linkActive : null)
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: hdr.cta
  }, "Contact"), /*#__PURE__*/React.createElement("button", {
    style: hdr.burger,
    onClick: () => setOpen(!open),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("span", {
    style: hdr.burgerBar
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hdr.burgerBar,
      marginTop: 5
    }
  })));
}
const hdr = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "18px 40px",
    background: "rgba(255,255,255,0.86)",
    backdropFilter: "saturate(1.2) blur(8px)",
    WebkitBackdropFilter: "saturate(1.2) blur(8px)",
    borderBottom: "1px solid var(--border-1)"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none"
  },
  dot: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "var(--so-cyan-500)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 22,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.02em",
    lineHeight: 1
  },
  word: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: 24,
    color: "var(--so-ink-900)",
    letterSpacing: "-0.01em"
  },
  nav: {
    display: "flex",
    gap: 4,
    marginLeft: 28,
    flex: 1
  },
  link: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--so-ink-900)",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: 999,
    transition: "background 140ms cubic-bezier(.22,1,.36,1)"
  },
  linkActive: {
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)"
  },
  cta: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--so-ink-900)",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: 999,
    background: "var(--so-cyan-500)"
  },
  burger: {
    display: "none"
  },
  burgerBar: {
    display: "block",
    width: 22,
    height: 2,
    background: "var(--so-ink-900)"
  }
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: hero.section
  }, /*#__PURE__*/React.createElement("div", {
    style: hero.left
  }, /*#__PURE__*/React.createElement("div", {
    style: hero.eyebrow
  }, "We make disruption work for you"), /*#__PURE__*/React.createElement("h1", {
    style: hero.h1
  }, "Digital is not about digital for digital's sake."), /*#__PURE__*/React.createElement("p", {
    style: hero.lead
  }, "It's about using technology and data to serve customers and consumers better, faster and more sustainable."), /*#__PURE__*/React.createElement("div", {
    style: hero.ctas
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: hero.primary
  }, "Our approach"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: hero.secondary
  }, "Our services"))), /*#__PURE__*/React.createElement("div", {
    style: hero.right
  }, /*#__PURE__*/React.createElement("div", {
    style: hero.videoTile
  }, /*#__PURE__*/React.createElement("div", {
    style: hero.playBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4.5L17 11L7 17.5V4.5Z",
    fill: "var(--so-ink-900)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: hero.videoCaption
  }, "Watch our intro \xB7 1:24"))));
}
const hero = {
  section: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 64,
    alignItems: "center",
    padding: "96px 40px 80px",
    maxWidth: 1280,
    margin: "0 auto"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 24
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-3)"
  },
  h1: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "clamp(2.5rem, 1.4rem + 4vw, 4.4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "balance"
  },
  lead: {
    fontSize: 19,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0,
    maxWidth: 540,
    textWrap: "pretty"
  },
  ctas: {
    display: "flex",
    gap: 12,
    marginTop: 12
  },
  primary: {
    fontWeight: 600,
    fontSize: 15,
    padding: "14px 24px",
    borderRadius: 999,
    background: "var(--so-cyan-500)",
    color: "var(--so-ink-900)",
    textDecoration: "none",
    lineHeight: 1
  },
  secondary: {
    fontWeight: 600,
    fontSize: 15,
    padding: "14px 24px",
    borderRadius: 999,
    color: "var(--so-ink-900)",
    textDecoration: "none",
    boxShadow: "inset 0 0 0 1.5px var(--so-ink-900)",
    lineHeight: 1
  },
  right: {
    position: "relative"
  },
  videoTile: {
    aspectRatio: "4/5",
    borderRadius: 28,
    background: "linear-gradient(180deg, #c2f5fd 0%, #00d9f4 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 28,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 32px 80px rgba(15,23,42,.16)"
  },
  playBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "#fff",
    display: "grid",
    placeItems: "center",
    boxShadow: "0 8px 24px rgba(15,23,42,.18)"
  },
  videoCaption: {
    color: "var(--so-ink-900)",
    fontSize: 13,
    fontWeight: 600
  }
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InsightsRow.jsx
try { (() => {
/* global React */
const INSIGHTS = [{
  tag: "Case study",
  title: "Accelerating Bleckmann's new business growth through (Gen) AI",
  img: "../../assets/sample-case-logistics.webp"
}, {
  tag: "Best practices",
  title: "Sustainable innovation: new business models for a circular economy",
  img: "../../assets/sample-insight-sustainability.jpg"
}, {
  tag: "Best practices",
  title: "The C-Suite blueprint for successful digital transformation",
  img: "../../assets/sample-insight-c-suite.jpg"
}];
function InsightsRow() {
  return /*#__PURE__*/React.createElement("section", {
    style: ins.section
  }, /*#__PURE__*/React.createElement("div", {
    style: ins.head
  }, /*#__PURE__*/React.createElement("div", {
    style: ins.eyebrow
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    style: ins.h2
  }, "Our latest articles and news.")), /*#__PURE__*/React.createElement("div", {
    style: ins.grid
  }, INSIGHTS.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.title,
    href: "#",
    style: ins.card,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 18px 48px rgba(15,23,42,.10)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,.06)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.img,
    alt: "",
    style: ins.img
  }), /*#__PURE__*/React.createElement("div", {
    style: ins.body
  }, /*#__PURE__*/React.createElement("span", {
    style: ins.tag
  }, i.tag), /*#__PURE__*/React.createElement("h3", {
    style: ins.title
  }, i.title))))));
}
const ins = {
  section: {
    padding: "20px 40px 80px",
    maxWidth: 1280,
    margin: "0 auto"
  },
  head: {
    maxWidth: 760,
    marginBottom: 36
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 14
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.75rem, 1.1rem + 2vw, 2.5rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)",
    margin: 0
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(15,23,42,.06)",
    transition: "all 240ms cubic-bezier(.22,1,.36,1)",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column"
  },
  img: {
    width: "100%",
    aspectRatio: "16/10",
    objectFit: "cover",
    display: "block"
  },
  body: {
    padding: "20px 22px 26px"
  },
  tag: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 10
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 1.3,
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "balance"
  }
};
window.InsightsRow = InsightsRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InsightsRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Quote.jsx
try { (() => {
/* global React */
const QUOTES = [{
  quote: "With SparkOptimus, the quality is always there, and you know where you're going. It's managed in a way that is clear, so the client doesn't experience scope creep.",
  name: "Valerie L'Hours",
  role: "Global Head of Programme Delivery",
  company: "Just Eat TakeAway.com"
}, {
  quote: "The big difference with SparkOptimus is that their work is grounded in three parts: strong analysis focused on what really matters, a strategy with real tangible results, and a collaborative approach.",
  name: "Ivan Kotov",
  role: "Chief Commercial Officer",
  company: "Orac"
}, {
  quote: "Within one week, SparkOptimus outlined valuable applications of AI across the organization — with a pragmatic, results-oriented approach.",
  name: "Tuncay Özgüner",
  role: "CEO",
  company: "Zijerveld"
}];
function Quote() {
  const [i, setI] = React.useState(0);
  const q = QUOTES[i];
  return /*#__PURE__*/React.createElement("section", {
    style: qs.section
  }, /*#__PURE__*/React.createElement("div", {
    style: qs.inner
  }, /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "28",
    viewBox: "0 0 36 28",
    fill: "none",
    style: {
      color: "var(--so-cyan-500)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 28V18C0 8.4 6 1.6 14 0L16 4C10.8 5.6 7.6 9.6 7.6 14H14V28H0ZM22 28V18C22 8.4 28 1.6 36 0L38 4C32.8 5.6 29.6 9.6 29.6 14H36V28H22Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("blockquote", {
    style: qs.quote
  }, "\"", q.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: qs.byline
  }, /*#__PURE__*/React.createElement("div", {
    style: qs.name
  }, q.name), /*#__PURE__*/React.createElement("div", {
    style: qs.role
  }, q.role), /*#__PURE__*/React.createElement("div", {
    style: qs.company
  }, q.company)), /*#__PURE__*/React.createElement("div", {
    style: qs.dots
  }, QUOTES.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    style: {
      ...qs.dot,
      ...(idx === i ? qs.dotOn : null)
    },
    "aria-label": "Quote " + (idx + 1)
  })))));
}
const qs = {
  section: {
    padding: "80px 40px",
    background: "var(--bg-subtle)"
  },
  inner: {
    maxWidth: 880,
    margin: "0 auto",
    textAlign: "left"
  },
  quote: {
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2rem)",
    lineHeight: 1.4,
    color: "var(--fg-1)",
    margin: "20px 0 28px",
    textWrap: "pretty"
  },
  byline: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginBottom: 28
  },
  name: {
    fontWeight: 700,
    color: "var(--fg-1)",
    fontSize: 15
  },
  role: {
    color: "var(--fg-2)",
    fontSize: 14
  },
  company: {
    color: "var(--fg-3)",
    fontSize: 14
  },
  dots: {
    display: "flex",
    gap: 8
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "var(--so-ink-200)",
    border: 0,
    padding: 0,
    cursor: "pointer",
    transition: "all 140ms"
  },
  dotOn: {
    background: "var(--so-cyan-500)",
    width: 24
  }
};
window.Quote = Quote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesGrid.jsx
try { (() => {
/* global React */
const SERVICES = [{
  icon: "../../assets/icon-digital-strategy.svg",
  title: "Digital Strategy & Transformation",
  blurb: "Translate digital disruption into a clear strategy and execution roadmap."
}, {
  icon: "../../assets/icon-sustainability.svg",
  title: "Sustainability Strategy & Transformation",
  blurb: "Embed sustainability into core strategy and unlock new business models."
}, {
  icon: "../../assets/icon-ai-data.svg",
  title: "AI & Data Strategy & Transformation",
  blurb: "Move from pilots to scaled value with AI and data, end to end."
}, {
  icon: "../../assets/icon-mergers.svg",
  title: "Mergers and Acquisitions",
  blurb: "Digital due diligence and value-creation roadmaps for M&A."
}, {
  icon: "../../assets/icon-ventures.svg",
  title: "Ventures and scale-ups",
  blurb: "Build new ventures inside corporates, from concept to scale."
}];
function ServicesGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: svc.section
  }, /*#__PURE__*/React.createElement("div", {
    style: svc.head
  }, /*#__PURE__*/React.createElement("div", {
    style: svc.eyebrow
  }, "Our services"), /*#__PURE__*/React.createElement("h2", {
    style: svc.h2
  }, "We help organizations unlock the power of disruption.")), /*#__PURE__*/React.createElement("div", {
    style: svc.grid
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.title,
    href: "#",
    style: svc.card,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 18px 48px rgba(15,23,42,.10)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,.06)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: "",
    style: svc.icon
  }), /*#__PURE__*/React.createElement("h3", {
    style: svc.title
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: svc.blurb
  }, s.blurb), /*#__PURE__*/React.createElement("span", {
    style: svc.arrow
  }, "Find out more \u2192")))));
}
const svc = {
  section: {
    padding: "80px 40px",
    maxWidth: 1280,
    margin: "0 auto"
  },
  head: {
    maxWidth: 720,
    marginBottom: 48
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--fg-3)",
    marginBottom: 14
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "clamp(1.75rem, 1.1rem + 2vw, 2.75rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "var(--fg-1)",
    margin: 0,
    textWrap: "balance"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 8px 24px rgba(15,23,42,.06)",
    transition: "all 240ms cubic-bezier(.22,1,.36,1)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer"
  },
  icon: {
    width: 64,
    height: 64
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 1.25,
    color: "var(--fg-1)",
    margin: 0
  },
  blurb: {
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "var(--fg-2)",
    margin: 0
  },
  arrow: {
    marginTop: "auto",
    paddingTop: 8,
    fontSize: 13,
    fontWeight: 600,
    color: "var(--so-cyan-700)"
  }
};
window.ServicesGrid = ServicesGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

})();
