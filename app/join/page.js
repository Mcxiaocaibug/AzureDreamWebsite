import CopyAddressButton from "../../components/CopyAddressButton";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "加入我们 - AzureDream",
  description: "加入 AzureDream 社区，获取服务器地址、群聊入口与完整连接步骤。",
  alternates: { canonical: "/join" },
  openGraph: { title: "加入我们 - AzureDream", description: "进入 AzureDream，开启你的长期 Minecraft 旅程。", url: "/join" },
  twitter: { title: "加入我们 - AzureDream", description: "进入 AzureDream，开启你的长期 Minecraft 旅程。" }
};

export default function JoinPage() {
  return (
    <PageShell
      activeNav="join"
      heroTitle={<>世界已经在线，<br /><em>只差你的坐标</em></>}
      heroSubtitle="三步完成准备。先认识这里的人，再进入这里的世界。"
      compactHero
    >
      <section className="section">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div><span className="label">CONNECTION GUIDE</span><h2 className="section-title">从这里开始</h2></div>
            <p className="section-note">AzureDream 当前面向 Java 版玩家。加入社区后可获取版本与最新公告。</p>
          </div>

          <ol className="steps">
            <li className="step" data-reveal>
              <span className="step-num">01</span>
              <div><span className="label label--bare">COMMUNITY</span><h3>加入 QQ 社区</h3><p>先和我们打个招呼。群内会发布版本信息、维护公告和近期活动，也方便遇到问题时快速找到人。</p><div className="step-actions"><kbd>974782827</kbd><a href="https://qm.qq.com/q/yTFgbREpDW" className="btn" target="_blank" rel="noopener noreferrer">打开群聊 <span className="arrow">↗</span></a></div></div>
            </li>
            <li className="step" data-reveal>
              <span className="step-num">02</span>
              <div><span className="label label--bare">AGREEMENT</span><h3>阅读社区约定</h3><p>规则不多，但每一条都为了长期世界的信任。尊重他人作品、合理使用公共资源，并在大型工程前与邻居沟通。</p><div className="step-actions"><span className="step-check"><i /> 用共识保护每一份创造</span></div></div>
            </li>
            <li className="step" data-reveal>
              <span className="step-num">03</span>
              <div><span className="label label--bare">CONNECT</span><h3>添加服务器</h3><p>打开 Minecraft Java 版，进入「多人游戏」并添加下面的地址。首次进入后，出生点会告诉你接下来该去哪里。</p><div className="step-actions"><kbd>miku.click:10669</kbd><CopyAddressButton /></div></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="join-status">
        <div className="shell" data-reveal>
          <span><i /> SERVER READY</span>
          <strong>miku.click:10669</strong>
          <p>JAVA EDITION · LEAVES KERNEL</p>
        </div>
      </section>
    </PageShell>
  );
}
