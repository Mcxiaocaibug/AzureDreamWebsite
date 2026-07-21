import Link from "next/link";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "服务器简介 - AzureDream",
  description: "了解 AzureDream 的起点、长期世界理念，以及 AI、Leaves 与社区共创如何塑造这座服务器。",
  alternates: { canonical: "/about" },
  openGraph: { title: "服务器简介 - AzureDream", description: "了解 AzureDream 的故事与愿景。", url: "/about" },
  twitter: { title: "服务器简介 - AzureDream", description: "了解 AzureDream 的故事与愿景。" }
};

export default function AboutPage() {
  return (
    <PageShell
      activeNav="about"
      heroTitle={<>我们想做的，<br />是一座<em>长久的世界</em></>}
      heroSubtitle="技术负责维持稳定，社区负责赋予意义。AzureDream 在两者之间，寻找一条安静而可靠的路。"
      compactHero
    >
      <section className="section">
        <div className="shell prose">
          <aside className="prose-side" data-reveal>
            <span className="label">OUR ORIGIN</span>
          </aside>
          <div className="prose-body" data-reveal style={{ "--reveal-delay": "90ms" }}>
            <p className="lede">AzureDream 从一个很简单的愿望开始：做一座不会催促玩家的服务器，让每个人都能按照自己的节奏，把<em>短暂灵感</em>变成长期存在的作品。</p>
            <p>我们喜欢养老生存的从容，也尊重生电玩家对精确与规模的追求。因此服务器选择 Leaves 高性能内核，并持续针对红石机器、区块加载与多人协作进行调校。</p>
            <p>AI 并不是吸引眼球的装饰。它更像世界背后的守夜人：帮助识别异常、观察经济、整理重复事务，让管理团队把时间留给真正需要判断和温度的事情。</p>

            <blockquote className="pull-quote">
              <p>“最好的技术，应该让你忘记它存在，<br />只记得世界运行得很顺。”</p>
              <cite>AZUREDREAM · WORLD PRINCIPLE 01</cite>
            </blockquote>

            <p>最终，让存档值得被长期保存的从来不是机器，而是人。一次合建、一条铁路、一场深夜聊天，都可能成为后来者认识这座世界的入口。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div><span className="label">OUR VALUES</span><h2 className="section-title">四条不轻易改变的原则</h2></div>
            <p className="section-note">玩法会更新，技术会迭代，但我们用这些原则判断每一次改变是否值得。</p>
          </div>
          <div className="values">
            <article className="value" data-reveal><i>01</i><h3>长期主义</h3><p>珍惜存档和历史，让今天的创造在很久以后依然有意义。</p></article>
            <article className="value" data-reveal style={{ "--reveal-delay": "60ms" }}><i>02</i><h3>性能自由</h3><p>让技术成为想象力的底座，而不是大型工程的天花板。</p></article>
            <article className="value" data-reveal style={{ "--reveal-delay": "120ms" }}><i>03</i><h3>社区共识</h3><p>规则服务于人与人的信任，并在讨论中保持透明与克制。</p></article>
            <article className="value" data-reveal style={{ "--reveal-delay": "180ms" }}><i>04</i><h3>智能守护</h3><p>用 AI 承担重复工作，但把重要决定始终留给真实的人。</p></article>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="shell" data-reveal>
          <span className="label label--center">Continue The Story</span>
          <h2 className="cta-title">如果这也是你想要的世界，<br /><em>欢迎回来。</em></h2>
          <div className="hero-actions"><Link href="/join" className="btn">查看加入方式 <span className="arrow">↗</span></Link></div>
        </div>
      </section>
    </PageShell>
  );
}
