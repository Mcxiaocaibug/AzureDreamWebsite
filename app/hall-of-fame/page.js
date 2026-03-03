import PageShell from "../../components/PageShell";

export const metadata = {
  title: "名人堂 - AzureDream",
  description: "AzureDream名人堂 - 记录服务器发展历程中的杰出贡献者。",
  alternates: {
    canonical: "/hall-of-fame"
  },
  openGraph: {
    title: "名人堂 - AzureDream",
    description: "那些为 AzureDream 做出杰出贡献的人们。",
    url: "/hall-of-fame"
  },
  twitter: {
    title: "名人堂 - AzureDream",
    description: "那些为 AzureDream 做出杰出贡献的人们。"
  }
};

const profileRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 8
};

const portraitWrapStyle = { position: "relative" };

const portraitStyle = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  border: "2px solid gold"
};

export default function HallOfFamePage() {
  return (
    <PageShell activeNav="hall-of-fame" heroTitle="名人堂" heroSubtitle="记录为服务器做出杰出贡献的玩家" compactHero>
      <div className="card">
        <div className="meta">
          <span>Legendary · 创始人</span>
        </div>
        <div style={profileRowStyle}>
          <div style={portraitWrapStyle}>
            <img src="/images/staff/rmanagarmr.png" alt="RManagarmr" loading="lazy" decoding="async" style={portraitStyle} />
          </div>
          <h3 style={{ margin: 0 }}>RManagarmr</h3>
        </div>
        <p className="desc">服务器第一位达到 1000 天在线时长的玩家，也是服务器的创始人之一。</p>
      </div>
    </PageShell>
  );
}
