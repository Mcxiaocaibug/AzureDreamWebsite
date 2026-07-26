<script>
  /* 自托管字体（unicode-range 按需分包），替代大陆不可达且阻塞渲染的 Google Fonts */
  import "@fontsource/noto-serif-sc/400.css";
  import "@fontsource/noto-serif-sc/500.css";
  import "@fontsource/jetbrains-mono/400.css";
  import "@fontsource/jetbrains-mono/500.css";
  import "../app.css";

  let { children } = $props();
</script>

{@render children()}
