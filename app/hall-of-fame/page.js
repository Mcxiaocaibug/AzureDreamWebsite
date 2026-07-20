import Link from "next/link";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "名人堂 - AzureDream",
  description: "AzureDream 世界档案：记录长期陪伴服务器并作出杰出贡献的玩家。",
  alternates: { canonical: "/hall-of-fame" },
  openGraph: { title: "名人堂 - AzureDream", description: "记录那些让 AzureDream 成为今天模样的人。", url: "/hall-of-fame" },
  twitter: { title: "名人堂 - AzureDream", description: "记录那些让 AzureDream 成为今天模样的人。" }
};

export default function HallOfFamePage() {
  return (
    <PageShell
      activeNav="hall-of-fame"
      heroTitle={<>有些名字，<br />已经成为世界的<em>坐标</em></>}
      heroSubtitle="名人堂不记录喧闹的胜负，只记录那些让世界变得更完整的人与时刻。"
      compactHero
    >
      <section className="section">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div><span className="label">LEGEND · 001</span><h2 className="section-title">世界档案</h2></div>
            <p className="section-note">荣誉由真实陪伴和长期贡献构成，不会因为版本更新而清零。</p>
          </div>

          <article className="legend" data-reveal>
            <div className="avatar-ring"><img src="/images/staff/rmanagarmr.png" alt="RManagarmr" loading="lazy" decoding="async" /></div>
            <div>
              <span className="crown"><img src="/images/crown.svg" alt="" width="18" height="18" /> FOUNDING LEGEND</span>
              <h3>RManagarmr</h3>
              <p className="honor">FIRST · 1000 DAYS ONLINE</p>
              <p>AzureDream 的创始人之一，也是第一位累计在线达到 1000 天的玩家。从最早的落脚点到今天的长期世界，这个名字始终在服务器的时间轴上。</p>
            </div>
          </article>

          <p className="hall-note" data-reveal>档案仍在继续。下一页会由时间、作品与社区共同写下。</p>
        </div>
      </section>

      <section className="archive-line" aria-label="世界档案时间线">
        <div className="shell" data-reveal>
          <span>WORLD CREATED</span><i /><span>1000 DAYS</span><i /><span>NEXT LEGEND</span>
        </div>
      </section>

      <section className="cta-final">
        <div className="shell" data-reveal><span className="label">WRITE THE NEXT PAGE</span><h2>传奇从来不是称号，<br />而是<em>留下了什么。</em></h2><div className="hero-actions"><Link href="/join" className="btn">进入世界 <span className="arrow">↗</span></Link></div></div>
      </section>
    </PageShell>
  );
}
