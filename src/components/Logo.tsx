import Image from "next/image";

/**
 * Official Techpoint lockups from the brand kit (public/brand).
 * Headers use the no-tagline lockup: the tagline is dropped below ~240px wide.
 */
export function Logo({ tone = "dark", className = "h-8 w-auto" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Image
      src={tone === "light" ? "/brand/techpoint-lockup-reversed-notagline.svg" : "/brand/techpoint-lockup-notagline.svg"}
      alt="Techpoint"
      width={700}
      height={190}
      unoptimized
      priority
      className={className}
    />
  );
}
