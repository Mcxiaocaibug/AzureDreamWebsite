import Link from "next/link";
import FeatureShowcase from "../components/FeatureShowcase";
import PageShell from "../components/PageShell";

export const metadata = {
  title: "AzureDream - AI驱动的未来级Minecraft服务器",
  description: "AzureDream - 面向长期生存、工业生电与社区共创的 AI 驱动 Minecraft 服务器。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AzureDream - AI驱动的未来级Minecraft服务器",
    description: "来自蔚蓝未来，一座由玩家与 AI 共同维护的长期 Minecraft 世界。",
    url: "/"
  },
  twitter: {
    title: "AzureDream - AI驱动的未来级Minecraft服务器",
    description: "来自蔚蓝未来，一座由玩家与 AI 共同维护的长期 Minecraft 世界。"
  }
};

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

export default function HomePage() {
  return (
    <PageShell
      activeNav="home"
      heroTitle={<>由 AI 驱动的<br />Minecraft 世界</>}
      heroSubtitle="没有喧闹的规则堆叠，只有稳定运行的机器、长久保存的作品，以及一群认真生活在方块世界里的人。"
      heroActions={
        <div className="hero-actions" data-reveal style={{ "--reveal-delay": "300ms" }}>
          <Link href="/join" className="btn">进入世界 <Arrow /></Link>
          <Link href="/about" className="btn btn--ghost">阅读我们的故事</Link>
        </div>
      }
    >
      <section className="section">
        <div className="shell">
          <div className="section-head section-head--split" data-reveal>
            <div>
              <span className="label">Arrival Sequence</span>
              <h2 className="section-title">三步，抵达蔚蓝世界</h2>
            </div>
            <p className="section-note">从认识社区到第一次踏上出生点，我们把加入过程做得简单而清晰。</p>
          </div>

          <ol className="arrival-list">
            <li data-reveal>
              <span className="arrival-num">01</span>
              <div>
                <h3>加入社区</h3>
                <p>进入 QQ 群，与在线玩家相遇，也让我们认识你。</p>
              </div>
              <span className="arrival-state">974782827</span>
            </li>
            <li data-reveal style={{ "--reveal-delay": "80ms" }}>
              <span className="arrival-num">02</span>
              <div>
                <h3>读懂共识</h3>
                <p>了解长期存档的边界与社区约定，尊重每一份创造。</p>
              </div>
              <span className="arrival-state">Community First</span>
            </li>
            <li data-reveal style={{ "--reveal-delay": "160ms" }}>
              <span className="arrival-num">03</span>
              <div>
                <h3>连接世界</h3>
                <p>复制地址，在 Java 版多人游戏中添加 AzureDream。</p>
              </div>
              <Link href="/join" className="arrival-link">查看加入指南 ↗</Link>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="label">What Lives Inside</span>
            <h2 className="section-title">世界为什么值得久留</h2>
          </div>

          <FeatureShowcase />

          <div className="metrics" data-reveal>
            <div><strong>24 / 7</strong><span>世界持续在线</span></div>
            <div><strong>Leaves</strong><span>高性能服务端核心</span></div>
            <div><strong>AI Native</strong><span>智能维护体系</span></div>
            <div><strong>Long-term</strong><span>长期存档理念</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="story-layout">
            <div data-reveal>
              <span className="label">A Living Archive</span>
              <h2 className="section-title">每一次登录，<br />都在续写同一个世界</h2>
            </div>
            <div className="story-copy" data-reveal style={{ "--reveal-delay": "120ms" }}>
              <p>在这里，效率不是为了更快毕业，而是为了有更多时间去建造、交流和发现。AI 与高性能内核藏在幕后，玩家的故事永远站在前台。</p>
              <Link href="/hall-of-fame">翻阅世界档案 <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="shell" data-reveal>
          <span className="label label--center">The World Is Online</span>
          <h2 className="cta-title">下一座地标，<br />也许由<em>你</em>建成。</h2>
          <div className="hero-actions">
            <Link href="/join" className="btn">立即加入 <Arrow /></Link>
            <a href="https://qm.qq.com/q/yTFgbREpDW" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">先去社区看看</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
