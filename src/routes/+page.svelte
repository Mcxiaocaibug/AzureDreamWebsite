<script>
  import FeatureShowcase from "$lib/components/FeatureShowcase.svelte";
  import PageShell from "$lib/components/PageShell.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="AzureDream - AI驱动的未来级Minecraft服务器"
  description="AzureDream - 面向长期生存、工业生电与社区共创的 AI 驱动 Minecraft 服务器。"
  ogDescription="来自蔚蓝未来，一座由玩家与 AI 共同维护的长期 Minecraft 世界。"
  path="/"
/>

<PageShell
  activeNav="home"
  heroSubtitle="没有喧闹的规则堆叠，只有稳定运行的机器、长久保存的作品，以及一群认真生活在方块世界里的人。"
>
  {#snippet heroTitle()}由 AI 驱动的<br />Minecraft 世界{/snippet}

  {#snippet heroActions()}
    <div class="hero-actions" data-reveal style="--reveal-delay: 300ms">
      <a href="/join" class="btn">进入世界 <span class="arrow" aria-hidden="true">↗</span></a>
      <a href="/about" class="btn btn--ghost">阅读我们的故事</a>
    </div>
  {/snippet}

  <section class="section">
    <div class="shell">
      <div class="section-head section-head--split" data-reveal>
        <div>
          <span class="label">Arrival Sequence</span>
          <h2 class="section-title">三步，抵达蔚蓝世界</h2>
        </div>
        <p class="section-note">从认识社区到第一次踏上出生点，我们把加入过程做得简单而清晰。</p>
      </div>

      <ol class="arrival-list">
        <li data-reveal>
          <span class="arrival-num">01</span>
          <div>
            <h3>加入社区</h3>
            <p>进入 QQ 群，与在线玩家相遇，也让我们认识你。</p>
          </div>
          <span class="arrival-state">974782827</span>
        </li>
        <li data-reveal style="--reveal-delay: 80ms">
          <span class="arrival-num">02</span>
          <div>
            <h3>读懂共识</h3>
            <p>了解长期存档的边界与社区约定，尊重每一份创造。</p>
          </div>
          <span class="arrival-state">Community First</span>
        </li>
        <li data-reveal style="--reveal-delay: 160ms">
          <span class="arrival-num">03</span>
          <div>
            <h3>连接世界</h3>
            <p>复制地址，在 Java 版多人游戏中添加 AzureDream。</p>
          </div>
          <a href="/join" class="arrival-link">查看加入指南 ↗</a>
        </li>
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="section-head" data-reveal>
        <span class="label">What Lives Inside</span>
        <h2 class="section-title">世界为什么值得久留</h2>
      </div>

      <FeatureShowcase />

      <div class="metrics" data-reveal>
        <div><strong>24 / 7</strong><span>世界持续在线</span></div>
        <div><strong>Leaves</strong><span>高性能服务端核心</span></div>
        <div><strong>AI Native</strong><span>智能维护体系</span></div>
        <div><strong>Long-term</strong><span>长期存档理念</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="story-layout">
        <div data-reveal>
          <span class="label">A Living Archive</span>
          <h2 class="section-title">每一次登录，<br />都在续写同一个世界</h2>
        </div>
        <div class="story-copy" data-reveal style="--reveal-delay: 120ms">
          <p>在这里，效率不是为了更快毕业，而是为了有更多时间去建造、交流和发现。AI 与高性能内核藏在幕后，玩家的故事永远站在前台。</p>
          <a href="/hall-of-fame">翻阅世界档案 <span class="arrow" aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-final">
    <div class="shell" data-reveal>
      <span class="label label--center">The World Is Online</span>
      <h2 class="cta-title">下一座地标，<br />也许由<em>你</em>建成。</h2>
      <div class="hero-actions">
        <a href="/join" class="btn">立即加入 <span class="arrow" aria-hidden="true">↗</span></a>
        <a href="https://qm.qq.com/q/yTFgbREpDW" class="btn btn--ghost" target="_blank" rel="noopener noreferrer">先去社区看看</a>
      </div>
    </div>
  </section>
</PageShell>
