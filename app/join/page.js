import CopyAddressButton from "../../components/CopyAddressButton";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "加入我们 - AzureDream",
  description: "加入 AzureDream 社区，获取服务器地址、入群方式与新手引导，开启 AI 驱动的 Minecraft 冒险。",
  alternates: {
    canonical: "/join"
  },
  openGraph: {
    title: "加入我们 - AzureDream",
    description: "加入 AzureDream 社区，开启 AI 驱动的 Minecraft 冒险。",
    url: "/join"
  },
  twitter: {
    title: "加入我们 - AzureDream",
    description: "加入 AzureDream 社区，开启 AI 驱动的 Minecraft 冒险。"
  }
};

export default function JoinPage() {
  return (
    <PageShell activeNav="join" heroTitle="加入 AzureDream" heroSubtitle="开启你的 AI 驱动 Minecraft 之旅" compactHero>
      <div className="card">
        <div className="meta">
          <span>第一步 · QQ Group</span>
        </div>
        <h3>加入 QQ 群</h3>
        <p className="desc">群号：974782827</p>
        <a href="https://qm.qq.com/q/yTFgbREpDW" className="btn" target="_blank" rel="noopener noreferrer">
          点击加群
        </a>
      </div>

      <div className="card">
        <div className="meta">
          <span>第二步 · Rules</span>
        </div>
        <h3>阅读群规</h3>
        <p className="desc">在加入前，请仔细阅读群内的规则公告，以获得最佳游戏体验。遵守规则是社区和谐的基础。</p>
      </div>

      <div className="card">
        <div className="meta">
          <span>第三步 · Connect</span>
        </div>
        <h3>连接服务器</h3>
        <p className="desc">
          服务器地址：<strong style={{ color: "var(--text-1)" }}>miku.click:10669</strong>
        </p>
        <CopyAddressButton />
      </div>
    </PageShell>
  );
}
