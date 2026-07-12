import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import MotionEffects from "./MotionEffects";

const heroLabels = {
  home: "AZUREDREAM · NEXT-GEN SURVIVAL",
  about: "OUR VISION · BUILT WITH AI",
  join: "START YOUR JOURNEY",
  staff: "MEET THE BUILDERS",
  "hall-of-fame": "LEGENDS OF AZUREDREAM"
};

export default function PageShell({ activeNav, heroTitle, heroSubtitle, heroActions, compactHero = false, children }) {
  return (
    <div className="pv-wrapper">
      <MotionEffects />
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
      </div>
      <div className="pv-max">
        <div className="glass">
          <SiteHeader active={activeNav} />

          <div className={`hero${compactHero ? " hero-compact" : ""}`}>
            <div className="hero-content">
              <div className="hero-kicker">
                <span className="status-dot" />
                {heroLabels[activeNav] || "AZUREDREAM"}
              </div>
              <h2>{heroTitle}</h2>
              <p>{heroSubtitle}</p>
              {heroActions}
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-outer"><span /></div>
              <div className="orbit orbit-inner"><span /></div>
              <div className="hero-aura" />
              <div className="logo-prism">
                <div className="logo-prism-shine" />
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="visual-chip visual-chip-ai">AI NATIVE</div>
              <div className="visual-chip visual-chip-live"><span /> ONLINE</div>
            </div>
          </div>

          <div className="cards">{children}</div>

          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
