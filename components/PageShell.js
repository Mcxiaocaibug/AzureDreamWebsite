import MotionEffects from "./MotionEffects";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const heroLabels = {
  home: "AzureDream — A World Beyond The Horizon",
  about: "About · AzureDream",
  join: "Enter · The World",
  staff: "People · Behind The World",
  "hall-of-fame": "Archive · Of Legends"
};

export default function PageShell({ activeNav, heroTitle, heroSubtitle, heroActions, compactHero = false, children }) {
  return (
    <div className="site-frame">
      <MotionEffects />
      <div className="ambient" aria-hidden="true" />
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
      <div className="stars" aria-hidden="true" />
      <div className="mist" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader active={activeNav} />

      <main>
        <section className={`hero${compactHero ? " hero--compact" : ""}`}>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-horizon" aria-hidden="true" />

          <div className="shell hero-shell">
            <div className="hero-emblem" aria-hidden="true" data-reveal>
              <img src="/images/logo.png" alt="" />
            </div>
            <span className="label label--center" data-reveal style={{ "--reveal-delay": "60ms" }}>
              {heroLabels[activeNav] || "AzureDream"}
            </span>
            <h1 className="hero-title" data-reveal style={{ "--reveal-delay": "140ms" }}>{heroTitle}</h1>
            <p className="hero-sub" data-reveal style={{ "--reveal-delay": "220ms" }}>{heroSubtitle}</p>
            {heroActions}
          </div>

          {!compactHero && (
            <div className="hero-foot" data-reveal style={{ "--reveal-delay": "340ms" }}>
              <div className="hero-addr">
                <span className="dot" />
                JAVA · <strong>miku.click:10669</strong>
              </div>
              <span className="scroll-hint">SCROLL</span>
            </div>
          )}
        </section>

        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
