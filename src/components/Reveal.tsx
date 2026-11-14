"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Content already on screen at page load: keep the one-shot fade instead of scroll-linked motion. */
  load?: boolean;
  as?: "div" | "li" | "section" | "article";
};

export function Reveal({ children, className = "", delay = 0, load = false, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${load ? "reveal-load" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-shift": `${Math.round(delay * 0.3)}px` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
