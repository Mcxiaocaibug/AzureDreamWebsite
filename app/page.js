import Link from "next/link";
import PageShell from "../components/PageShell";

export const metadata = {
  title: "AzureDream - AI驱动的未来级Minecraft服务器",
  description: "AzureDream - AI驱动的未来级Minecraft服务器。体验下一代游戏服务器，感受AI带来的无限可能。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AzureDream - AI驱动的未来级Minecraft服务器",
    description: "来自蔚蓝未来 · 体验下一代游戏服务器，感受AI带来的无限可能。",
    url: "/"
  },
  twitter: {
    title: "AzureDream - AI驱动的未来级Minecraft服务器",
    description: "来自蔚蓝未来 · 体验下一代游戏服务器，感受AI带来的无限可能。"
  }
};

export default function HomePage() {
  return (
    <PageShell
      activeNav="home"
      heroTitle={
        <>
          由AI驱动的
          <br />
          Minecraft服务器
        </>
      }
      heroSubtitle={
        <>
          来自蔚蓝未来 · 体验下一代游戏服务器
          <br />
          感受AI带来的无限可能
        </>
      }
      heroActions={
        <div className="cta-buttons">
          <Link href="/join" className="btn">
            立即加入
          </Link>
          <Link href="/about" className="btn btn-secondary">
            了解更多
          </Link>
        </div>
      }
    >
      <div className="card" data-card="1">
        <div className="meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 7v5l3 1.8"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          </svg>
          <span>核心特性 · AI Native</span>
        </div>
        <h3>AI 智能管理</h3>
        <p className="desc">采用最先进的 AI 技术辅助服务器管理，为您提供丝般顺滑的游戏体验。智能识别作弊、自动维护经济平衡。</p>
      </div>

      <div className="card" data-card="2">
        <div className="meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>性能优化 · Leaves Kernel</span>
        </div>
        <h3>Leaves 高性能内核</h3>
        <p className="desc">基于 Leaves 核心深度优化，即使在红石机器高负荷运转时也能保持 TPS 稳定。告别卡顿，尽情创造。</p>
      </div>

      <div className="card" data-card="3">
        <div className="meta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="9"
              cy="7"
              r="4"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 21v-2a4 4 0 0 0-3-3.87"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.13a4 4 0 0 1 0 7.75"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>社区氛围 · Social</span>
        </div>
        <h3>沉浸式社交体验</h3>
        <p className="desc">无论是生存建筑还是红石科技，在这里总能找到志同道合的伙伴。自动化与创造共存，构建属于你的蔚蓝梦想。</p>
      </div>

      <div className="card" data-card="4">
        <div className="meta">
          <span>管理团队 · Staff</span>
        </div>
        <h3>Team AzureDream</h3>
        <p className="desc">RManagarmr, Mcxiaocai666, Tanzeus 以及更多默默付出的贡献者。</p>
      </div>
    </PageShell>
  );
}
