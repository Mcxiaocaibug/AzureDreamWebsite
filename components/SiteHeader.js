import Link from "next/link";

const navItems = [
  { key: "home", href: "/", label: "主页" },
  { key: "about", href: "/about", label: "简介" },
  { key: "join", href: "/join", label: "加入" },
  { key: "hall-of-fame", href: "/hall-of-fame", label: "名人堂" },
  { key: "staff", href: "/staff", label: "团队" }
];

export default function SiteHeader({ active }) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="/images/logo.png" alt="AzureDream Logo" className="logo-img" />
        <h1 className="title" style={{ fontSize: 24 }}>
          AzureDream
        </h1>
      </div>

      <nav className="nav-links" aria-label="主导航">
        {navItems.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
