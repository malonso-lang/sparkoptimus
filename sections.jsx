/* global React, lucide */
const { useState, useRef, useEffect, memo } = React;

/* ----------------------------------------------------------------
   WHAT WE DO  (light) — intro statement + two service columns
-----------------------------------------------------------------*/
const BIZ = [
{ icon: "monitor-smartphone", label: "Digital Strategy & Transformation" },
{ icon: "brain-circuit", label: "AI & Data Strategy & Transformation" },
{ icon: "leaf", label: "Sustainability Strategy & Transformation" },
{ icon: "link-2", label: "Mergers and Acquisitions" },
{ icon: "rocket", label: "Ventures and Scale-ups" }];


const SOC = [
{ icon: "zap", label: "Energy transition" },
{ icon: "shield", label: "Critical infrastructure" },
{ icon: "landmark", label: "Public sector renewal" }];


const ONPAGE = [
{ label: "What we do", href: "#what-we-do" },
{ label: "Credentials", href: "#credentials" }];


function ServiceList({ accent, items }) {
  return (
    <div>
      <h3 style={{
        margin: "0 0 6px", fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(1.7rem, 1.1rem + 1.6vw, 2.4rem)", letterSpacing: "-0.02em",
        color: "var(--so-ink-900)", lineHeight: 1.1
      }}>
        Transforming <span style={{ color: "rgb(0, 217, 244)" }}>{accent}</span>
      </h3>
      <div style={{ marginTop: 18, borderTop: "1px solid var(--border-1)" }}>
        {items.map((it) =>
        <a key={it.label} href="services.html" style={{
          display: "flex", alignItems: "center", gap: 18, padding: "20px 6px",
          borderBottom: "1px solid var(--border-1)", textDecoration: "none",
          transition: "padding-left 240ms var(--ease-out)"
        }}
        onMouseEnter={(e) => {e.currentTarget.style.paddingLeft = "16px";}}
        onMouseLeave={(e) => {e.currentTarget.style.paddingLeft = "6px";}}>
            <span style={{
            width: 46, height: 46, flex: "none", borderRadius: 13,
            display: "grid", placeItems: "center",
            background: "rgba(0,217,244,0.12)", border: "1px solid rgba(0,217,244,0.30)",
            color: "var(--so-cyan-600)"
          }}>
              <i data-lucide={it.icon} style={{ width: 21, height: 21 }}></i>
            </span>
            <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.05rem, 0.9rem + 0.5vw, 1.35rem)",
            fontWeight: 500, color: "var(--so-ink-900)", flex: 1
          }}>{it.label}</span>
            <i data-lucide="arrow-up-right" style={{ width: 18, height: 18, color: "var(--fg-3)" }}></i>
          </a>
        )}
      </div>
    </div>);

}

const WhatWeDo = memo(function WhatWeDo() {
  return (
    <section id="what-we-do" data-screen-label="What we do"
    className="section section--light"
    style={{ padding: "100px 0px 0px" }}>
      <div className="wrap">
        {/* Section header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          gap: 24, flexWrap: "wrap", marginBottom: "clamp(24px, 3vw, 40px)"
        }}>
          <h2 className="sec-title">Our <span className="accent">services</span></h2>
          <a href="services.html" className="link-arrow">
            All services <i data-lucide="arrow-right"></i>
          </a>
        </div>

        {/* Service lists */}
        <div className="svc-block" style={{
          background: "var(--so-gray-100)", borderRadius: "var(--radius-2xl)",
          padding: "clamp(32px, 4vw, 60px)",
          border: "1px solid var(--border-1)", boxShadow: "var(--shadow-sm)", color: "rgb(201, 249, 255)", backgroundColor: "rgb(244, 254, 255)", marginTop: 0
        }}>
          <div className="svc-list-grid svc-list-grid--single">
            <ServiceList accent="businesses" items={BIZ} />
          </div>
        </div>
      </div>
    </section>);

});

/* ----------------------------------------------------------------
   OUR CASES  (light) — client logos + case cards
-----------------------------------------------------------------*/
const LOGO_DIR = "site/assets/company%20logos/";
const CLIENTS = [
{ name: "bol.com", src: "Bol.com_2019_logo.svg.png", s: 0.80 },
{ name: "Albert Heijn", src: "Albert-Heijn-Emblem.png", s: 1.12 },
{ name: "ING", src: "ING_Groep_Logo.svg", s: 0.92 },
{ name: "Heineken", src: "Heineken_N.V.-Logo.wine.png", s: 1.18 },
{ name: "IKEA", src: "Ikea_logo.svg.png", s: 1.0 },
{ name: "Nestlé", src: "Nestlé.svg.png", s: 0.94 },
{ name: "AkzoNobel", src: "AkzoNobel_Logo.svg.png", s: 0.78 },
{ name: "Henkel", src: "Henkel-Logo.svg.png", s: 1.08 },
{ name: "Schiphol", src: "AMS_airport_logo.svg.png", s: 1.05 },
{ name: "Booking.com", src: "Booking.com_logo.svg.png", s: 0.78 },
{ name: "Just Eat Takeaway", src: "542076-JET-Logo-Orange-Secondary-Horizontal-Stacked-RGB-95f33b-medium-1718351113.png", s: 1.12 },
{ name: "Eneco", src: "Eneco_logo.svg.png", s: 1.05 },
{ name: "Port of Rotterdam", src: "Port_of_Rotterdam_logo_(light-blue).svg.png", s: 1.04 },
{ name: "Van Oord", src: "64e4e2019beb28d11fe70822_08.-Logo_Van-Oord.png", s: 1.0 },
{ name: "LeasePlan", src: "nieuw_logo_voor_leaseplan.png", s: 1.10 },
{ name: "Gemeente Amsterdam", src: "Logo_of_Gemeente_Amsterdam.svg.png", s: 1.08 },
{ name: "NPM Capital", src: "NPM_Capital_Logo.png", s: 0.80 },
{ name: "3i", src: "3i-Logo.svg.png", s: 1.12 },
{ name: "DLL", src: "DLL_Group_logo.svg.png", s: 0.92 },
{ name: "TBI", src: "logo_tbi_rgb_0.png", s: 1.05 }];


const CASES = [
{
  img: "site/assets/placeholder-case-logistics.webp",
  tag: "AI & DATA", client: "TBI HOLDINGS",
  title: "Building TBI's group-wide AI strategy", sector: "INDUSTRIAL"
},
{
  img: "site/assets/placeholder-case-sustainability.jpg",
  tag: "SUSTAINABILITY", client: "SHV / MINING & ROCK",
  title: "Empowering global transformation at scale", sector: "ENERGY"
},
{
  img: "site/assets/placeholder-case-executive.jpg",
  tag: "DIGITAL", client: "SCHNEIDER ELECTRIC",
  title: "Digital strategy, build & scale execution", sector: "INDUSTRIAL"
}];


const Cases = memo(function Cases() {
  const gridRef = useRef(null);
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {el.classList.add("is-in");io.disconnect();}});
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="cases" data-screen-label="Our cases"
    className="section section--light"
    style={{ padding: "clamp(48px, 6vw, 80px) 0 clamp(72px, 9vw, 128px)" }}>
      <div className="wrap">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: "4px", padding: "0px 0px 10px"
        }}>
          <h2 className="sec-title">Over 15 years of <span className="accent">expertise</span></h2>
          <a href="cases.html" className="link-arrow">
            All cases <i data-lucide="arrow-right"></i>
          </a>
        </div>

        {/* Client logo grid */}
        <div className="client-grid" ref={gridRef} style={{
          marginTop: "clamp(24px, 3vw, 40px)",
          marginBottom: "clamp(84px, 9.5vw, 148px)"
        }}>
          {CLIENTS.map((c, i) =>
          <span className="client-logo" key={c.name} style={{ "--i": i, "--s": c.s || 1 }}>
              <img src={LOGO_DIR + c.src} alt={c.name} loading="lazy" />
            </span>
          )}
        </div>

        {/* Case cards */}
        <div className="so-case-grid so-case-grid--row3" style={{ marginTop: "clamp(32px, 4vw, 56px)" }}>
          {CASES.map((c) =>
          <a key={c.client} href="cases.html" style={{
            display: "flex", flexDirection: "column", background: "var(--bg-canvas)",
            borderRadius: 22, overflow: "hidden", textDecoration: "none",
            color: "var(--fg-1)", boxShadow: "var(--shadow-md)",
            transition: "transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out)"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.transform = "translateY(-4px)";e.currentTarget.style.boxShadow = "var(--shadow-xl)";}}
          onMouseLeave={(e) => {e.currentTarget.style.transform = "none";e.currentTarget.style.boxShadow = "var(--shadow-md)";}}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{
                position: "absolute", top: 16, left: 16, padding: "7px 13px",
                borderRadius: 999, background: "rgba(6,11,26,0.78)", color: "#fff",
                fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em",
                backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)"
              }}>{c.tag}</span>
              </div>
              <div style={{ padding: "26px 26px 22px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", color: "var(--so-cyan-700)" }}>{c.client}</span>
                <h3 style={{
                margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
                fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1.22, color: "var(--fg-1)"
              }}>{c.title}</h3>
                <div style={{
                marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--border-1)",
                display: "flex", alignItems: "center", justifyContent: "space-between"
              }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", color: "var(--fg-3)" }}>{c.sector}</span>
                  <i data-lucide="arrow-right" style={{ width: 18, height: 18, color: "var(--so-ink-700)" }}></i>
                </div>
              </div>
            </a>
          )}
        </div>

        {/* View more cases button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(32px, 4vw, 48px)" }}>
          <a href="cases.html" className="btn btn--primary-light">View more cases</a>
        </div>
      </div>
    </section>);

});

/* ----------------------------------------------------------------
   CREDENTIALS  (dark) — positioning + testimonial + proof row
-----------------------------------------------------------------*/
const TESTIMONIALS = [
{
  quote: "Pragmatic, fast and deeply hands-on. SparkOptimus helped us turn an ambitious AI agenda into a roadmap we could actually execute — and stayed with us to make it real.",
  name: "Marieke Visser", role: "CDO, Global Retail Group", initials: "MV"
},
{
  quote: "The big difference is that their work is grounded: strong analysis focused on what really matters, a strategy with tangible results, and a genuinely collaborative approach.",
  name: "Ivan Kotov", role: "Chief Commercial Officer, Orac", initials: "IK"
},
{
  quote: "Within one week, SparkOptimus outlined valuable applications of AI across the organization — with a pragmatic, results-oriented approach.",
  name: "Tuncay Özgüner", role: "CEO, Zijerveld", initials: "TÖ"
}];


const PROOF = [
{ logo: "site/assets/Emerce_Logo.png", h: 32, title: "#1 Digital Consultancy", sub: "Ranked #1 seven times — Emerce100" },
{ logo: "site/assets/B-Corp-Logo-White-RGB.png", h: 56, title: "Certified B Corporation", sub: "Certified since 2021" },
{ logo: "site/assets/leading-employer-2025.png", h: 56, title: "Leading Employer 2025", sub: "Awarded to the country's top 1%" },
{ logo: "site/assets/insead.png", h: 44, title: "Top-executive programmes", sub: "Contributor at INSEAD" },
{ logo: "site/assets/imd-white.png", h: 38, title: "Top-executive programmes", sub: "Contributor at IMD" },
{ logo: "site/assets/business-book-winner.png", h: 44, title: "Business Book Awards winner", sub: "Author of \u201cDisruption in Action\u201d" }];


const Arrow = ({ dir }) =>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {dir === "left" ?
  <polyline points="15 18 9 12 15 6" /> :
  <polyline points="9 18 15 12 9 6" />}
  </svg>;


const Credentials = memo(function Credentials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="credentials" data-screen-label="Credentials"
    className="section section--dark"
    style={{ padding: "clamp(72px, 9vw, 132px) 0" }}>
      <div className="wrap">

        <div className="cred-grid">
          <div>
            <h2 style={{
              margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2rem, 1.2rem + 2.4vw, 3.2rem)",
              lineHeight: 1.08, letterSpacing: "-0.02em", color: "#fff"
            }}>
              More strategic than a tech firm.<br />
              <span style={{ color: "var(--so-cyan-400)" }}>More hands-on</span> than a strategy firm.
            </h2>
            <div style={{ marginTop: 32 }}>
              <a href="our-approach.html" className="btn btn--ghost-dark">Our approach</a>
            </div>
          </div>

          {/* Testimonial card */}
          <div>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 24, padding: "clamp(28px, 3vw, 44px)"
            }}>
              <blockquote style={{
                margin: 0, fontFamily: "var(--font-sans)", fontStyle: "italic",
                fontWeight: 400, fontSize: "clamp(1.15rem, 0.9rem + 0.8vw, 1.5rem)",
                lineHeight: 1.42, color: "rgba(255,255,255,0.92)"
              }}>"{t.quote}"</blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 28 }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14.5, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 22 }}>
              <button onClick={() => go(-1)} aria-label="Previous" className="carousel-btn"><Arrow dir="left" /></button>
              <button onClick={() => go(1)} aria-label="Next" className="carousel-btn"><Arrow dir="right" /></button>
              <div style={{ display: "flex", gap: 7, marginLeft: 8 }}>
                {TESTIMONIALS.map((_, idx) =>
                <button key={idx} onClick={() => setI(idx)}
                aria-label={"Testimonial " + (idx + 1)}
                style={{
                  height: 7, width: idx === i ? 26 : 7, borderRadius: 999,
                  border: 0, padding: 0, cursor: "pointer",
                  background: idx === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.25)",
                  transition: "all 200ms var(--ease-out)"
                }} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Proof row */}
        <div className="proof-grid" style={{ marginTop: "clamp(48px, 6vw, 84px)" }}>
          {PROOF.map((p, idx) =>
          <div key={p.title + idx} className="proof-grid__item">
              <div style={{ flex: "none", display: "flex", alignItems: "center" }}>
                <img src={p.logo} alt="" style={{ height: p.h, width: "auto", maxWidth: 150, objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>{p.title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 3 }}>{p.sub}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

});

/* ----------------------------------------------------------------
   TEAM  (light)
-----------------------------------------------------------------*/
const TEAM = [
{ name: "Michel", role: "Partner" },
{ name: "Henriëtte", role: "Partner" },
{ name: "Joris", role: "Partner" },
{ name: "Schröder", role: "Partner" },
{ name: "Henriëtta", role: "Partner" },
{ name: "Luuk", role: "Manager" },
{ name: "Eleonore", role: "Associate" },
{ name: "Arnaud", role: "Associate" },
{ name: "Job", role: "Associate" },
{ name: "Leonie", role: "Associate" }];


const Team = memo(function Team() {
  return (
    <section id="team" data-screen-label="Team"
    className="section section--light"
    style={{ padding: "clamp(72px, 9vw, 128px) 0" }}>
      <div className="wrap">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          gap: 24, flexWrap: "wrap"
        }}>
          <h2 className="sec-title">Our <span className="accent">experts.</span></h2>
          <a href="team.html" className="link-arrow">
            Meet the full team <i data-lucide="arrow-right"></i>
          </a>
        </div>

        <div className="team-grid">
          {TEAM.map((m, idx) =>
          <div key={m.name + idx} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <image-slot id={"team-" + idx} shape="rounded" radius="18" placeholder="Photo"
            style={{ width: "100%", aspectRatio: "4 / 5", display: "block", background: "var(--bg-muted)", borderRadius: 18 }}>
              </image-slot>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--fg-1)" }}>{m.name}</div>
                <div style={{ color: "var(--fg-3)", fontSize: 14.5, marginTop: 1 }}>{m.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

});

/* ----------------------------------------------------------------
   CTA BANNER  (dark teal)
-----------------------------------------------------------------*/
const CtaBanner = memo(function CtaBanner() {
  return (
    <section data-screen-label="Contact CTA"
    style={{ background: "var(--so-cyan-900)", padding: "clamp(52px, 6.5vw, 96px) 0" }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "clamp(28px, 5vw, 56px)", flexWrap: "wrap"
      }}>
        <h2 style={{
          margin: 0, fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(1.9rem, 1.25rem + 2.3vw, 3.1rem)",
          lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", textWrap: "balance"
        }}>
          Ready to make <span style={{ color: "var(--so-cyan-400)" }}>disruption</span><br />
          work for your organisation?
        </h2>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", flexShrink: 0 }}>
          <a href="contact.html" className="btn btn--primary">Start a conversation</a>
          <a href="cases.html" className="btn btn--ghost-dark">Explore our work</a>
        </div>
      </div>
    </section>);

});


/* ----------------------------------------------------------------
   QUOTE STATEMENT  (dark) — mission statement directly under hero
-----------------------------------------------------------------*/
const QuoteStatement = memo(function QuoteStatement() {
  return (
    <section data-screen-label="Statement"
    style={{
      background: "var(--so-ink-900)",
      padding: "clamp(36px, 4vw, 62px) 0 clamp(40px, 4.6vw, 70px)"
    }}>
      <div className="wrap" style={{ textAlign: "center", maxWidth: 1240, margin: "0 auto" }}>
        <p style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(1.45rem, 0.7rem + 2.1vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          textWrap: "balance",
          color: "#fff"
        }}>
          We turn{" "}
          <span style={{ color: "var(--so-cyan-400)" }}>digital, data,</span>{" "}
          and{" "}
          <span style={{ color: "var(--so-cyan-400)" }}>generative AI</span>{" "}
          into the engine for organizational transformation
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30, justifyContent: "center" }}>
          <a href="our-approach.html" className="btn btn--primary">Our approach</a>
          <a href="services.html" className="btn btn--ghost-dark">Our services</a>
        </div>
      </div>
    </section>);

});

Object.assign(window, { WhatWeDo, QuoteStatement, Cases, Credentials, Team, CtaBanner });