"use client";

import { useEffect } from "react";

/* 将标题拆为逐字动画单元：<em> 等元素作为整体，保留渐变文字效果 */
function splitTitleChars(el) {
  let index = 0;
  const baseDelay = 240;
  const step = 42;

  const wrapChar = (text) => {
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--char-delay", `${baseDelay + index * step}ms`);
    span.textContent = text;
    index += 1;
    return span;
  };

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const fragment = document.createDocumentFragment();
      for (const ch of node.textContent) {
        if (!ch.trim()) {
          fragment.appendChild(document.createTextNode(ch));
        } else {
          fragment.appendChild(wrapChar(ch));
        }
      }
      node.replaceWith(fragment);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== "BR") {
      node.classList.add("char");
      node.style.setProperty("--char-delay", `${baseDelay + index * step}ms`);
      index += Math.max(node.textContent.trim().length, 1);
    }
  });
}

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const animated = !reducedMotion.matches;
    const canHover = animated && finePointer.matches;
    const cleanups = [];
    let frame = 0;
    let pointerFrame = 0;

    /* ---------- 标题逐字雾散 ---------- */
    if (animated) {
      document.querySelectorAll(".hero-title, .cta-title").forEach(splitTitleChars);
    }

    /* ---------- 滚动状态：进度条 / 视差 / 导航 ---------- */
    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const pageRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max(scrollY / pageRange, 0), 1);

        root.style.setProperty("--page-progress", progress.toFixed(4));
        root.style.setProperty("--parallax", Math.min(scrollY, 720).toFixed(1) + "px");
        header?.classList.toggle("is-scrolled", scrollY > 24);
      });
    };

    /* ---------- Reveal 观察器 + 落停标记 ---------- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.06 }
    );

    const markSettled = (event) => {
      if (event.propertyName === "opacity") {
        event.target.classList.add("is-settled");
        event.target.removeEventListener("transitionend", markSettled);
      }
    };

    if (animated) {
      revealItems.forEach((item) => {
        observer.observe(item);
        item.addEventListener("transitionend", markSettled);
      });
      cleanups.push(() => {
        observer.disconnect();
        revealItems.forEach((item) => item.removeEventListener("transitionend", markSettled));
      });
    } else {
      revealItems.forEach((item) => {
        item.classList.add("is-visible");
        item.classList.add("is-settled");
      });
    }

    /* ---------- 指针跟随：视差 + 灯笼光斑 ---------- */
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.42;
    let gx = tx;
    let gy = ty;
    let glowRaf = 0;
    let glowRunning = false;

    const glowLoop = () => {
      gx += (tx - gx) * 0.075;
      gy += (ty - gy) * 0.075;
      root.style.setProperty("--gx", gx.toFixed(1) + "px");
      root.style.setProperty("--gy", gy.toFixed(1) + "px");
      if (Math.abs(tx - gx) > 0.15 || Math.abs(ty - gy) > 0.15) {
        glowRaf = requestAnimationFrame(glowLoop);
      } else {
        glowRunning = false;
      }
    };

    const updatePointer = (event) => {
      if (!canHover) return;

      tx = event.clientX;
      ty = event.clientY;
      if (!glowRunning) {
        glowRunning = true;
        glowRaf = requestAnimationFrame(glowLoop);
      }

      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const mx = (event.clientX / window.innerWidth - 0.5) * 34;
        const my = (event.clientY / window.innerHeight - 0.5) * 22;
        root.style.setProperty("--mx", mx.toFixed(1) + "px");
        root.style.setProperty("--my", my.toFixed(1) + "px");
      });
    };

    /* ---------- 磁性按钮 ---------- */
    if (canHover) {
      document.querySelectorAll(".btn").forEach((btn) => {
        const move = (event) => {
          const rect = btn.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.3;
          btn.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        };
        const leave = () => {
          btn.style.transform = "";
        };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        });
      });
    }

    /* ---------- 卡片微 3D 倾斜 ---------- */
    if (canHover) {
      document.querySelectorAll(".showcase, .legend").forEach((card) => {
        const move = (event) => {
          if (!card.classList.contains("is-settled")) return;
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(1400px) rotateX(${(-y * 1.4).toFixed(2)}deg) rotateY(${(x * 1.4).toFixed(2)}deg)`;
        };
        const leave = () => {
          card.style.transform = "";
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      cancelAnimationFrame(glowRaf);
      cleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return null;
}
