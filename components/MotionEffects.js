"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;

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

    /* 鼠标视差：光晕与晨昏线随指针轻移 */
    let pointerFrame = 0;
    const updatePointer = (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const mx = (event.clientX / window.innerWidth - 0.5) * 34;
        const my = (event.clientY / window.innerHeight - 0.5) * 22;
        root.style.setProperty("--mx", mx.toFixed(1) + "px");
        root.style.setProperty("--my", my.toFixed(1) + "px");
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
      { rootMargin: "0px 0px -8%", threshold: 0.06 }
    );

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealItems.forEach((item) => observer.observe(item));
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return null;
}
