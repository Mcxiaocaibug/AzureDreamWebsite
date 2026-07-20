import MotionEffects from "./MotionEffects";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const heroLabels = {
  home: "A WORLD BEYOND THE HORIZON",
  about: "ABOUT · AZUREDREAM",
  join: "ENTER · THE WORLD",
  staff: "PEOPLE · BEHIND THE WORLD",
  "hall-of-fame": "ARCHIVE · OF LEGENDS"
};

export default function PageShell({ activeNav, heroTitle, heroSubtitle, heroActions, compactHero = false, children }) {
  return (
    <div className="site-frame">
      <MotionEffects />
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <SiteHeader active={activeNav} />

      <main>
        <section className={`hero${compactHero ? " hero--compact" : " hero--home"}`}>
          <div className="shell hero-shell">
            <div className="hero-emblem" aria-hidden="true" data-reveal>
              <span className="emblem-ring emblem-ring-a" />
              <span className="emblem-ring emblem-ring-b" />
              <span className="emblem-glow" />
              <span className="emblem-core"><img src="/images/logo.png" alt="" /></span>
            </div>
            <div className="label label--bare" data-reveal>{heroLabels[activeNav] || "AZUREDREAM"}</div>
            <h1 className="hero-title" data-reveal style={{ "--reveal-delay": "80ms" }}>{heroTitle}</h1>
            <p className="hero-sub" data-reveal style={{ "--reveal-delay": "150ms" }}>{heroSubtitle}</p>
            {heroActions}

            {!compactHero && (
              <div className="hero-foot" data-reveal style={{ "--reveal-delay": "240ms" }}>
                <div className="hero-addr">
                  <span className="dot" />
                  JAVA · <strong>miku.click:10669</strong>
                </div>
                <span className="scroll-hint">SCROLL TO EXPLORE</span>
              </div>
            )}
          </div>
        </section>

        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
