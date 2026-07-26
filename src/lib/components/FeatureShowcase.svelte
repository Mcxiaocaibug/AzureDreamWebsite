<script>
  const features = [
    {
      key: "ai",
      tab: "AI 智能管理",
      index: "01",
      title: "让世界自己保持秩序",
      description: "AI 辅助识别异常行为、观察经济波动，并把重复的维护工作留给自动化。玩家只需要专注于创造。",
      status: "AI System · Observing",
      lines: ["行为模型在线", "经济曲线稳定", "异常事件 0"]
    },
    {
      key: "redstone",
      tab: "工业与生电",
      index: "02",
      title: "复杂机器，也能从容运转",
      description: "基于 Leaves 内核的性能调校，为红石、生电和大型工程提供稳定底座，让每一次脉冲都准时抵达。",
      status: "Leaves · TPS Stable",
      lines: ["主线程负载平稳", "区块队列同步", "红石时序正常"]
    },
    {
      key: "community",
      tab: "长期社区",
      index: "03",
      title: "世界会更新，故事不会清零",
      description: "我们珍惜长期存档、共同建设与人与人之间的连接。每座建筑，都能成为下一位玩家的地标。",
      status: "Community · Always On",
      lines: ["长期存档守护", "玩家共同治理", "新的故事正在发生"]
    }
  ];

  let activeKey = $state(features[0].key);
  let tabEls = [];

  const active = $derived(features.find((feature) => feature.key === activeKey) || features[0]);

  /* 标准 tablist 键盘交互：方向键循环，Home/End 跳转（roving tabindex） */
  function onTabKeydown(event, index) {
    let next;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % features.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + features.length) % features.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = features.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    activeKey = features[next].key;
    tabEls[next]?.focus();
  }
</script>

<div class="showcase" data-reveal>
  <div class="showcase-tabs" role="tablist" aria-label="服务器特色">
    {#each features as feature, index (feature.key)}
      <button
        bind:this={tabEls[index]}
        type="button"
        role="tab"
        id="feature-tab-{feature.key}"
        aria-selected={feature.key === activeKey}
        aria-controls="feature-panel"
        tabindex={feature.key === activeKey ? 0 : -1}
        onclick={() => (activeKey = feature.key)}
        onkeydown={(event) => onTabKeydown(event, index)}
      >
        {feature.tab}
      </button>
    {/each}
  </div>

  {#key active.key}
    <div
      class="showcase-body"
      role="tabpanel"
      id="feature-panel"
      aria-labelledby="feature-tab-{active.key}"
      tabindex="0"
    >
      <div class="showcase-copy">
        <span class="showcase-index">Feature / {active.index} — 03</span>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
      </div>

      <div class="showcase-panel">
        <span class="panel-status"><span class="dot"></span> {active.status}</span>
        {#each active.lines as line (line)}
          <span class="panel-line">{line}</span>
        {/each}
      </div>
    </div>
  {/key}
</div>
