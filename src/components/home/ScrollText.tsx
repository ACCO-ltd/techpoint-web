"use client";

import { useEffect, useRef } from "react";

type Segment = { text: string; strong?: boolean };

/**
 * A large statement whose words fill in as the reader scrolls through it.
 * Server-rendered fully visible; the scroll effect is applied only once
 * JavaScript runs and the visitor has not asked for reduced motion.
 */
export function ScrollText({ segments, className = "" }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35);
      const reached = Math.round(Math.min(1, Math.max(0, progress)) * words.length);
      words.forEach((w, i) => {
        w.dataset.on = i < reached ? "true" : "false";
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {segments.map((s, si) =>
        s.text.split(" ").map((word, wi) => (
          <span
            key={`${si}-${wi}`}
            data-word
            data-on="true"
            className={`transition-colors duration-500 data-[on=false]:text-[#d2d2d7] ${s.strong ? "text-[#1d1d1f]" : "text-[#86868b]"}`}
          >
            {word}{" "}
          </span>
        )),
      )}
    </p>
  );
}
