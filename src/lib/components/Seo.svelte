<script>
  const SITE = "https://azuredream.netlify.app";
  const IMAGE = `${SITE}/images/logo.png`;

  let { title, description, path, ogTitle = title, ogDescription = description } = $props();

  const canonical = $derived(path === "/" ? SITE : SITE + path);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:url" content={canonical} />
  <meta property="og:site_name" content="AzureDream" />
  <meta property="og:locale" content="zh_CN" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={IMAGE} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image" content={IMAGE} />
</svelte:head>
