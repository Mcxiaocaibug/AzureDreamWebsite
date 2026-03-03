import PageShell from "../../components/PageShell";

export const metadata = {
  title: "管理团队 - AzureDream",
  description: "AzureDream管理团队 - 认识幕后的运营者、开发者和社区管理者。",
  alternates: {
    canonical: "/staff"
  },
  openGraph: {
    title: "管理团队 - AzureDream",
    description: "认识 AzureDream 的核心团队。",
    url: "/staff"
  },
  twitter: {
    title: "管理团队 - AzureDream",
    description: "认识 AzureDream 的核心团队。"
  }
};

const profileRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 8
};

const avatarStyle = {
  width: 48,
  height: 48,
  borderRadius: "50%"
};

const titleStyle = { margin: 0 };

export default function StaffPage() {
  return (
    <PageShell activeNav="staff" heroTitle="管理团队" heroSubtitle="为玩家提供最优质的游戏体验" compactHero>
      <div className="card">
        <div className="meta">
          <span>服务器管理员</span>
        </div>
        <div style={profileRowStyle}>
          <img src="/images/staff/rmanagarmr.png" alt="RManagarmr" loading="lazy" decoding="async" style={avatarStyle} />
          <h3 style={titleStyle}>RManagarmr</h3>
        </div>
        <p className="desc">负责服务器日常运营与维护。</p>
      </div>

      <div className="card">
        <div className="meta">
          <span>技术支持</span>
        </div>
        <div style={profileRowStyle}>
          <img src="/images/staff/mcxiaocai666.png" alt="Mcxiaocai666" loading="lazy" decoding="async" style={avatarStyle} />
          <h3 style={titleStyle}>Mcxiaocai666</h3>
        </div>
        <p className="desc">提供技术援助与问题解决。</p>
      </div>

      <div className="card">
        <div className="meta">
          <span>社区协调员</span>
        </div>
        <div style={profileRowStyle}>
          <img src="/images/staff/tanzeus.png" alt="Tanzeus" loading="lazy" decoding="async" style={avatarStyle} />
          <h3 style={titleStyle}>Tanzeus</h3>
        </div>
        <p className="desc">负责社区活动与玩家互动。</p>
      </div>

      <div className="card">
        <h3>加入我们</h3>
        <p className="desc">我们始终在寻找有热情、有能力的玩家加入管理团队。</p>
        <a href="#" className="btn btn-secondary">
          申请加入
        </a>
      </div>
    </PageShell>
  );
}
