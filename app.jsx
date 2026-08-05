/* global React, Hero, WhatWeDo, QuoteStatement, Cases, Credentials, Team, CtaBanner,
          useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider, TweakText, lucide */
const { useEffect } = React;

const MOTION_LABELS = { Cinematic: "cinematic", Rise: "rise", Crossfade: "crossfade" };

const TWEAK_DEFAULTS = {
  "scrollTreatment": "Cinematic",
  "headline": "Make disruption work",
  "overlay": 0,
};

function refreshIcons() {
  try { if (window.lucide) lucide.createIcons(); } catch (e) {}
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    refreshIcons();
    const id = setTimeout(refreshIcons, 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <React.Fragment>
      <Hero
        motion={MOTION_LABELS[t.scrollTreatment] || "cinematic"}
        headline={t.headline}
        dimBoost={t.overlay}
      />
      <QuoteStatement />
      <WhatWeDo />
      <Cases />
      <Credentials />
      <CtaBanner />

      <TweaksPanel>
        <TweakSection label="Hero &amp; scroll" />
        <TweakRadio label="Scroll treatment" value={t.scrollTreatment}
          options={["Cinematic", "Rise", "Crossfade"]}
          onChange={(v) => setTweak("scrollTreatment", v)} />
        <TweakSlider label="Overlay darkness" value={t.overlay} min={0} max={35} step={1} unit="%"
          onChange={(v) => setTweak("overlay", v)} />
        <TweakSection label="Copy" />
        <TweakText label="Headline" value={t.headline}
          onChange={(v) => setTweak("headline", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

function mount() {
  if (!window.Hero || !window.WhatWeDo || !window.QuoteStatement || !window.Credentials || !window.useTweaks) {
    return setTimeout(mount, 40);
  }
  ReactDOM.createRoot(document.getElementById("app")).render(<App />);
}
mount();
