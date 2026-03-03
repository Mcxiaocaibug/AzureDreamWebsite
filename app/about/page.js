import PageShell from "../../components/PageShell";

export const metadata = {
  title: "服务器简介 - AzureDream",
  description: "关于 AzureDream - 了解我们的使命、愿景以及我们如何利用 AI 重新定义 Minecraft 游戏体验。",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "服务器简介 - AzureDream",
    description: "了解 AzureDream 的故事与愿景。",
    url: "/about"
  },
  twitter: {
    title: "服务器简介 - AzureDream",
    description: "了解 AzureDream 的故事与愿景。"
  }
};

const featureGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
  marginTop: 12
};

const featureTitleStyle = {
  margin: "0 0 4px",
  color: "var(--text-1)"
};

const featureTextStyle = {
  margin: 0,
  fontSize: 12,
  color: "var(--text-2)"
};

export default function AboutPage() {
  return (
    <PageShell activeNav="about" heroTitle="关于 AzureDream" heroSubtitle="探索由 AI 驱动的全新 Minecraft 体验" compactHero>
      <div className="card">
        <div className="meta">
          <img
            src="/images/azure-ai.png"
            alt="AI Icon"
            loading="lazy"
            decoding="async"
            style={{ width: 20, height: 20, borderRadius: 4 }}
          />
          <span>Azure 智能</span>
        </div>
        <h3>智能交互体验</h3>
        <p className="desc">服务器内集成 AI 插件与机器人，提供前所未有的智能交互体验。不仅仅是游戏，更是与未来的对话。</p>
      </div>

      <div className="card">
        <h3>养老与生电</h3>
        <p className="desc">
          <strong>养老插件：</strong>丰富的休闲与便利性插件，打造轻松愉快的游戏体验。
          <br />
          <strong>Leaves 内核：</strong>基于高性能 Leaves 核心，为红石和生存电路提供稳定支持。
        </p>
      </div>

      <div className="card">
        <h3>服务器特色</h3>
        <div style={featureGridStyle}>
          <div>
            <h4 style={featureTitleStyle}>高性能保障</h4>
            <p style={featureTextStyle}>采用最新架构，确保流畅体验</p>
          </div>
          <div>
            <h4 style={featureTitleStyle}>创新玩法</h4>
            <p style={featureTextStyle}>AI 驱动机制，全新体验</p>
          </div>
          <div>
            <h4 style={featureTitleStyle}>社区互动</h4>
            <p style={featureTextStyle}>活跃社区，丰富活动</p>
          </div>
          <div>
            <h4 style={featureTitleStyle}>安全保障</h4>
            <p style={featureTextStyle}>先进反作弊，公平环境</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
