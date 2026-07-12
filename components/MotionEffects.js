"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const cards = Array.from(document.querySelectorAll(".card"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updatePointerGlow = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    const cleanups = cards.map((card) => {
      const handleMove = (event) => {
        if (reduceMotion.matches) return;

        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;

        card.style.setProperty("--card-x", `${x * 100}%`);
        card.style.setProperty("--card-y", `${y * 100}%`);
        card.style.setProperty("--rotate-x", `${(0.5 - y) * 4}deg`);
        card.style.setProperty("--rotate-y", `${(x - 0.5) * 5}deg`);
      };

      const handleLeave = () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);

      return () => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      };
    });

    window.addEventListener("pointermove", updatePointerGlow, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointerGlow);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
