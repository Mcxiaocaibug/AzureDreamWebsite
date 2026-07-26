<script>
  import PageShell from "$lib/components/PageShell.svelte";
  import Seo from "$lib/components/Seo.svelte";

  const people = [
    { name: "RManagarmr", role: "WORLD OPERATOR", image: "/images/staff/rmanagarmr.png", description: "负责服务器日常运营、长期规划与世界秩序，让每一次更新都有清晰的方向。" },
    { name: "Mcxiaocai666", role: "TECHNICAL SUPPORT", image: "/images/staff/mcxiaocai666.png", description: "负责技术支持、问题排查与体验优化，把复杂故障留在玩家看不见的地方。" },
    { name: "Tanzeus", role: "COMMUNITY COORDINATOR", image: "/images/staff/tanzeus.png", description: "负责社区交流、活动组织与玩家反馈，让不同风格的创造者在这里彼此遇见。" }
  ];
</script>

<Seo
  title="管理团队 - AzureDream"
  description="认识维护 AzureDream 世界、技术与社区的核心团队成员。"
  ogDescription="认识 AzureDream 背后的人。"
  path="/staff"
/>

<PageShell
  activeNav="staff"
  heroSubtitle="我们既是维护者，也是普通玩家。所有决定，都从真正进入世界之后开始。"
  compactHero
>
  {#snippet heroTitle()}世界不会自己运转，<br />它背后始终<em>有人守着</em>{/snippet}

  <section class="section">
    <div class="shell">
      <div class="section-head" data-reveal>
        <div><span class="label">CORE TEAM</span><h2 class="section-title">世界背后的人</h2></div>
        <p class="section-note">角色不同，目标相同：让 AzureDream 保持稳定、友善，并始终值得回来。</p>
      </div>
      <div class="people">
        {#each people as person, index (person.name)}
          <article class="person" data-reveal style="--reveal-delay: {index * 80}ms">
            <div class="avatar-ring"><img src={person.image} alt={person.name} loading="lazy" decoding="async" /></div>
            <p class="role">{person.role}</p>
            <h3>{person.name}</h3>
            <p>{person.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="section team-principles">
    <div class="shell">
      <div class="section-head" data-reveal><div><span class="label">HOW WE WORK</span><h2 class="section-title">管理不是站在世界之上</h2></div></div>
      <ol class="index-list">
        <li class="index-item" data-reveal><span class="index-num">01</span><div class="index-body"><h3>先观察，再改变</h3><p>任何影响玩法的调整，都从真实数据与玩家体验出发。</p></div><span class="index-tag">LISTEN</span></li>
        <li class="index-item" data-reveal><span class="index-num">02</span><div class="index-body"><h3>让规则保持可解释</h3><p>重要决定说明原因，也愿意在社区里接受讨论与修正。</p></div><span class="index-tag">TRANSPARENT</span></li>
        <li class="index-item" data-reveal><span class="index-num">03</span><div class="index-body"><h3>把玩家当作共同建设者</h3><p>世界的方向不只属于管理团队，也属于所有认真生活在这里的人。</p></div><span class="index-tag">TOGETHER</span></li>
      </ol>
    </div>
  </section>

  <section class="cta-final">
    <div class="shell" data-reveal><span class="label label--center">Join The Crew</span><h2 class="cta-title">愿意为世界多做一点？<br /><em>和我们聊聊。</em></h2><div class="hero-actions"><a href="https://qm.qq.com/q/yTFgbREpDW" class="btn" target="_blank" rel="noopener noreferrer">加入社区 <span class="arrow">↗</span></a></div></div>
  </section>
</PageShell>
