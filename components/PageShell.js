import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ activeNav, heroTitle, heroSubtitle, heroActions, compactHero = false, children }) {
  const heroStyle = compactHero ? { minHeight: "auto", paddingBottom: 20 } : undefined;

  return (
    <div className="pv-wrapper">
      <div className="pv-max">
        <div className="glass">
          <SiteHeader active={activeNav} />

          <div className="hero" style={heroStyle}>
            <div className="hero-content">
              <h2>{heroTitle}</h2>
              <p>{heroSubtitle}</p>
              {heroActions}
            </div>
          </div>

          <div className="cards">{children}</div>

          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
