/* global React */
const { useRef, useEffect } = React;

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, t) => a + (b - a) * t;
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

function Hero({ motion = "cinematic", videoSrc = "site/assets/home-hero-video-new.mp4", headline = "Make disruption work", dimBoost = 0 }) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const videoWrapRef = useRef(null);
  const videoRef = useRef(null);
  const dimRef = useRef(null);
  const headRef = useRef(null);
  const bottomFadeRef = useRef(null);
  const cueRef = useRef(null);
  const motionRef = useRef(motion);
  const dimRefVal = useRef(dimBoost);
  const lastP = useRef(0);

  const apply = (p) => {
    lastP.current = p;
    const m = motionRef.current;

    const headOut  = seg(p, 0.12, 0.66);
    const cueOut   = seg(p, 0.0,  0.12);

    let dim, scale;
    if (m === "crossfade") {
      dim   = lerp(0.42, 0.66, easeOut(clamp01(p / 0.7)));
      scale = 1.06;
    } else if (m === "rise") {
      dim   = lerp(0.40, 0.62, easeOut(clamp01(p / 0.8)));
      scale = lerp(1.06, 1.16, easeOut(p));
    } else {
      dim   = lerp(0.46, 0.72, easeOut(clamp01(p / 0.8)));
      scale = lerp(1.10, 1.30, easeOut(p));
    }
    dim = clamp01(dim + (dimRefVal.current || 0) / 100);
    if (videoWrapRef.current) videoWrapRef.current.style.transform = `scale(${scale.toFixed(4)})`;
    if (dimRef.current)       dimRef.current.style.opacity         = dim.toFixed(3);

    if (headRef.current) {
      const o = 1 - headOut;
      let ty = 0, sc = 1, blur = 0;
      if      (m === "rise")      { ty = lerp(0, -46, easeOut(headOut)); }
      else if (m === "cinematic") { ty = lerp(0, -28, easeOut(headOut)); sc = lerp(1, 0.9, easeOut(headOut)); blur = headOut * 5; }
      else                        { ty = lerp(0, -10, headOut); }
      headRef.current.style.opacity      = o.toFixed(3);
      headRef.current.style.transform    = `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${sc.toFixed(4)})`;
      headRef.current.style.filter       = blur ? `blur(${blur.toFixed(1)}px)` : "none";
      headRef.current.style.pointerEvents= o < 0.2 ? "none" : "auto";
    }

    if (cueRef.current) {
      cueRef.current.style.opacity = (1 - cueOut).toFixed(3);
    }

    if (bottomFadeRef.current) {
      const fadeIn = easeOut(seg(p, 0.30, 0.82));
      bottomFadeRef.current.style.opacity = fadeIn.toFixed(3);
    }
  };

  useEffect(() => {
    motionRef.current  = motion;
    dimRefVal.current  = dimBoost;
    apply(lastP.current);
  }, [motion, dimBoost]);

  /* Force video play on mobile — some browsers ignore autoplay attribute.
     Skips playback entirely when user prefers reduced motion (accessibility + perf). */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    // Respect reduced-motion preference — show poster, no video
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) { vid.pause(); return; }
    const attempt = () => {
      vid.muted = true;
      vid.play().catch(() => { /* silently ignore — browser policy */ });
    };
    attempt();
    document.addEventListener("touchstart", attempt, { once: true });
    return () => document.removeEventListener("touchstart", attempt);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const track = trackRef.current;
        if (track) {
          const rect    = track.getBoundingClientRect();
          const total   = track.offsetHeight - window.innerHeight;
          const scrolled= Math.min(Math.max(-rect.top, 0), total);
          apply(total > 0 ? scrolled / total : 0);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={trackRef} id="top" data-screen-label="Hero"
      style={{ position: "relative", height: "115vh", background: "var(--so-ink-900)" }}>
      <div ref={stageRef} style={{
        position: "sticky", top: 0, height: "100vh", width: "100%",
        overflow: "hidden", display: "grid", placeItems: "center",
      }}>
        {/* Background video */}
        <div ref={videoWrapRef} style={{
          position: "absolute", inset: 0,
          transformOrigin: "center 42%", willChange: "transform",
          background: "#060B1A",
        }}>
          <video ref={videoRef} autoPlay muted loop playsInline
            preload="none"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Dim overlay */}
        <div ref={dimRef} style={{
          position: "absolute", inset: 0, opacity: 0.46,
          background: "radial-gradient(120% 100% at 50% 38%, rgba(6,11,26,0.30) 0%, rgba(6,11,26,0.70) 70%, rgba(6,11,26,0.92) 100%)",
        }} />
        {/* Top vignette — static */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(6,11,26,0.45) 0%, rgba(6,11,26,0) 22%)",
        }} />
        {/* Bottom fade — scroll-driven, starts at 0 */}
        <div ref={bottomFadeRef} style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0,
          background: "linear-gradient(180deg, rgba(6,11,26,0) 50%, rgba(6,11,26,0.75) 75%, rgba(6,11,26,0.95) 90%, rgba(6,11,26,1) 100%)",
        }} />

        {/* Headline */}
        <div style={{
          position: "relative", zIndex: 3, width: "100%",
          maxWidth: 1180, padding: "0 clamp(24px, 5vw, 64px)", textAlign: "center",
        }}>
          <h1 ref={headRef} style={{
            margin: 0, color: "#fff",
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.8rem, 1.2rem + 6.4vw, 7rem)",
            lineHeight: 1.02, letterSpacing: "-0.025em",
            textWrap: "balance", willChange: "transform, opacity",
            textShadow: "0 2px 40px rgba(6,11,26,0.35)",
          }}>
            {headline}<span style={{ color: "var(--so-cyan-500)" }}>.</span>
          </h1>
        </div>

        {/* Scroll cue */}
        <div ref={cueRef} style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          bottom: "clamp(40px, 7vh, 84px)", zIndex: 4,
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 10, color: "rgba(255,255,255,0.7)",
        }}>
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: 12.5,
            fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase",
          }}>Scroll</span>
          <span style={{
            width: 1, height: 38, display: "block",
            background: "linear-gradient(180deg, var(--so-cyan-400), rgba(255,255,255,0))",
          }} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
