<script>
  import PageShell from "$lib/components/PageShell.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="名人堂 - AzureDream"
  description="AzureDream 世界档案：记录长期陪伴服务器并作出杰出贡献的玩家。"
  ogDescription="记录那些让 AzureDream 成为今天模样的人。"
  path="/hall-of-fame"
/>

<PageShell
  activeNav="hall-of-fame"
  heroSubtitle="名人堂不记录喧闹的胜负，只记录那些让世界变得更完整的人与时刻。"
  compactHero
>
  {#snippet heroTitle()}有些名字，<br />已经成为世界的<em>坐标</em>{/snippet}

  <section class="section">
    <div class="shell">
      <div class="section-head" data-reveal>
        <div><span class="label">LEGEND · 001</span><h2 class="section-title">世界档案</h2></div>
        <p class="section-note">荣誉由真实陪伴和长期贡献构成，不会因为版本更新而清零。</p>
      </div>

      <article class="legend" data-reveal>
        <div class="avatar-ring"><img src="/images/staff/rmanagarmr.png" alt="RManagarmr" loading="lazy" decoding="async" /></div>
        <div>
          <span class="crown"><img src="/images/crown.svg" alt="" width="18" height="18" /> FOUNDING LEGEND</span>
          <h3>RManagarmr</h3>
          <p class="honor">FIRST · 1000 DAYS ONLINE</p>
          <p>AzureDream 的创始人之一，也是第一位累计在线达到 1000 天的玩家。从最早的落脚点到今天的长期世界，这个名字始终在服务器的时间轴上。</p>
        </div>
      </article>

      <p class="hall-note" data-reveal>档案仍在继续。下一页会由时间、作品与社区共同写下。</p>
    </div>
  </section>

  <section class="archive-line" aria-label="世界档案时间线">
    <div class="shell" data-reveal>
      <span>WORLD CREATED</span><i></i><span>1000 DAYS</span><i></i><span>NEXT LEGEND</span>
    </div>
  </section>

  <section class="cta-final">
    <div class="shell" data-reveal><span class="label label--center">Write The Next Page</span><h2 class="cta-title">传奇从来不是称号，<br />而是<em>留下了什么。</em></h2><div class="hero-actions"><a href="/join" class="btn">进入世界 <span class="arrow">↗</span></a></div></div>
  </section>
</PageShell>
