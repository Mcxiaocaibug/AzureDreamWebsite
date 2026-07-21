"use client";

import { useState } from "react";

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

export default function FeatureShowcase() {
  const [activeKey, setActiveKey] = useState(features[0].key);
  const active = features.find((feature) => feature.key === activeKey) || features[0];

  return (
    <div className="showcase" data-reveal>
      <div className="showcase-tabs" role="tablist" aria-label="服务器特色">
        {features.map((feature) => (
          <button
            key={feature.key}
            type="button"
            role="tab"
            aria-selected={feature.key === activeKey}
            onClick={() => setActiveKey(feature.key)}
          >
            {feature.tab}
          </button>
        ))}
      </div>

      <div className="showcase-body" key={active.key}>
        <div className="showcase-copy">
          <span className="showcase-index">Feature / {active.index} — 03</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
        </div>

        <div className="showcase-panel">
          <span className="panel-status"><span className="dot" /> {active.status}</span>
          {active.lines.map((line) => (
            <span className="panel-line" key={line}>{line}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
