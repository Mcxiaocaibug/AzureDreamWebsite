<script>
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>页面未找到 - AzureDream</title>
</svelte:head>

<div class="error-shell">
  <span class="label label--center">ERROR · {page.status}</span>
  <h1>这片区块尚未生成</h1>
  <p>你要找的页面不在这个世界的地图上。回到出生点，重新出发。</p>
  <a href="/" class="btn">返回主页 <span class="arrow">↗</span></a>
</div>
