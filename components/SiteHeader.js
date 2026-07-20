"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { key: "home", href: "/", label: "主页" },
  { key: "about", href: "/about", label: "简介" },
  { key: "hall-of-fame", href: "/hall-of-fame", label: "名人堂" },
  { key: "staff", href: "/staff", label: "团队" }
];

export default function SiteHeader({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="AzureDream 首页" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo.png" alt="" />
            <span className="brand-name">AZUREDREAM</span>
            <span className="brand-sub">AI SURVIVAL</span>
          </Link>

          <nav className="nav desktop-nav" aria-label="主导航">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} aria-current={item.key === active ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link href="/join" className="nav-cta" aria-current={active === "join" ? "page" : undefined}>
              加入世界
            </Link>
          </nav>

          <button
            type="button"
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "关闭导航" : "打开导航"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-navigation" className={`mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="shell" aria-label="移动端导航">
          {[...navItems, { key: "join", href: "/join", label: "加入世界" }].map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              style={{ "--menu-index": index }}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
