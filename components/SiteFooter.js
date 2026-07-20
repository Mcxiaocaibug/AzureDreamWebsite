import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="" />
            AZUREDREAM
          </div>
          <p>一座由玩家、自动化与想象力共同维护的长期 Minecraft 世界。</p>
        </div>

        <nav className="footer-column" aria-label="探索">
          <h2>探索</h2>
          <Link href="/about">服务器简介</Link>
          <Link href="/hall-of-fame">名人堂</Link>
          <Link href="/staff">管理团队</Link>
        </nav>

        <nav className="footer-column" aria-label="开始">
          <h2>开始</h2>
          <Link href="/join">加入服务器</Link>
          <a href="https://qm.qq.com/q/yTFgbREpDW" target="_blank" rel="noopener noreferrer">QQ 社区</a>
          <span>Java Edition</span>
        </nav>

        <div className="footer-meta">
          <span>© 2026 AZUREDREAM</span>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="netlify">
            <img src="/images/Netlify_logo_.svg" alt="Netlify" width="30" height="12" />
            POWERED BY NETLIFY
          </a>
        </div>
      </div>
    </footer>
  );
}
