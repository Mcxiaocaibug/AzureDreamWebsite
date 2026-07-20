"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const lightStages = Array.from(document.querySelectorAll('[data-header-theme="light"]'));
    const pointerSurfaces = Array.from(document.querySelectorAll("[data-pointer-surface]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const pageRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max(window.scrollY / pageRange, 0), 1);
        const sampleY = 38;
        const onLight = lightStages.some((stage) => {
          const bounds = stage.getBoundingClientRect();
          return bounds.top <= sampleY && bounds.bottom > sampleY;
        });

        root.style.setProperty("--page-progress", progress.toFixed(4));
        header?.classList.toggle("is-scrolled", window.scrollY > 24);
        header?.classList.toggle("is-light", onLight);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 }
    );

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealItems.forEach((item) => observer.observe(item));
    }

    const pointerCleanups = pointerSurfaces.map((surface) => {
      const handlePointer = (event) => {
        if (reducedMotion.matches) return;
        const bounds = surface.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        surface.style.setProperty("--pointer-x", `${x * 100}%`);
        surface.style.setProperty("--pointer-y", `${y * 100}%`);
        surface.style.setProperty("--surface-rx", `${(0.5 - y) * 1.8}deg`);
        surface.style.setProperty("--surface-ry", `${(x - 0.5) * 2.2}deg`);
      };

      const resetPointer = () => {
        surface.style.setProperty("--surface-rx", "0deg");
        surface.style.setProperty("--surface-ry", "0deg");
      };

      surface.addEventListener("pointermove", handlePointer);
      surface.addEventListener("pointerleave", resetPointer);
      return () => {
        surface.removeEventListener("pointermove", handlePointer);
        surface.removeEventListener("pointerleave", resetPointer);
      };
    });

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      pointerCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return null;
}
