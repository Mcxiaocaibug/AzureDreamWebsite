<script>
  let { active } = $props();

  const navItems = [
    { key: "home", href: "/", label: "主页" },
    { key: "about", href: "/about", label: "简介" },
    { key: "hall-of-fame", href: "/hall-of-fame", label: "名人堂" },
    { key: "staff", href: "/staff", label: "团队" }
  ];

  let menuOpen = $state(false);

  $effect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  });
</script>

<header class="site-header">
  <div class="shell header-inner">
    <a href="/" class="brand" aria-label="AzureDream 首页" onclick={() => (menuOpen = false)}>
      <img src="/images/logo.png" alt="" />
      <span class="brand-name">AZUREDREAM</span>
    </a>

    <nav class="nav desktop-nav" aria-label="主导航">
      {#each navItems as item (item.key)}
        <a href={item.href} aria-current={item.key === active ? "page" : undefined}>
          {item.label}
        </a>
      {/each}
      <a href="/join" class="nav-cta" aria-current={active === "join" ? "page" : undefined}>
        加入世界
      </a>
    </nav>

    <button
      type="button"
      class="menu-toggle"
      class:is-open={menuOpen}
      aria-label={menuOpen ? "关闭导航" : "打开导航"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span></span>
      <span></span>
    </button>
  </div>
</header>

<div id="mobile-navigation" class="mobile-menu" class:is-open={menuOpen} aria-hidden={!menuOpen}>
  <nav class="shell" aria-label="移动端导航">
    {#each [...navItems, { key: "join", href: "/join", label: "加入世界" }] as item, index (item.key)}
      <a
        href={item.href}
        aria-current={item.key === active ? "page" : undefined}
        onclick={() => (menuOpen = false)}
        style="--menu-index: {index}"
      >
        <span>0{index + 1}</span>
        {item.label}
      </a>
    {/each}
  </nav>
</div>
