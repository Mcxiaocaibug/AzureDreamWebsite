<script>
  import MotionEffects from "./MotionEffects.svelte";
  import SiteFooter from "./SiteFooter.svelte";
  import SiteHeader from "./SiteHeader.svelte";

  const heroLabels = {
    home: "AzureDream — A World Beyond The Horizon",
    about: "About · AzureDream",
    join: "Enter · The World",
    staff: "People · Behind The World",
    "hall-of-fame": "Archive · Of Legends"
  };

  let { activeNav, heroSubtitle, compactHero = false, heroTitle, heroActions, children } = $props();
</script>

<div class="site-frame">
  <MotionEffects />
  <div class="ambient" aria-hidden="true"></div>
  <div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="stars" aria-hidden="true"></div>
  <div class="mist" aria-hidden="true"></div>
  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="scroll-progress" aria-hidden="true"></div>
  <SiteHeader active={activeNav} />

  <main>
    <section class="hero" class:hero--compact={compactHero}>
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-horizon" aria-hidden="true"></div>

      <div class="shell hero-shell">
        <div class="hero-emblem" aria-hidden="true" data-reveal>
          <img src="/images/logo.png" alt="" />
        </div>
        <span class="label label--center" data-reveal style="--reveal-delay: 60ms">
          {heroLabels[activeNav] || "AzureDream"}
        </span>
        <h1 class="hero-title" data-reveal style="--reveal-delay: 140ms">{@render heroTitle()}</h1>
        <p class="hero-sub" data-reveal style="--reveal-delay: 220ms">{heroSubtitle}</p>
        {#if heroActions}{@render heroActions()}{/if}
      </div>

      {#if !compactHero}
        <div class="hero-foot" data-reveal style="--reveal-delay: 340ms">
          <div class="hero-addr">
            <span class="dot"></span>
            JAVA · <strong>miku.click:10669</strong>
          </div>
          <span class="scroll-hint">SCROLL</span>
        </div>
      {/if}
    </section>

    {@render children()}
  </main>

  <SiteFooter />
</div>
