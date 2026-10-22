import Image from "next/image";
import { clients } from "@/content/site";

const RATIO_SOURCE_H = 360;

function Logo({ client, decorative, scale = 1 }: { client: (typeof clients)[number]; decorative?: boolean; scale?: number }) {
  const h = Math.round(client.h * scale);
  const w = Math.round((client.w * h) / RATIO_SOURCE_H);
  return (
    <Image
      src={client.logo}
      alt={decorative ? "" : client.name}
      width={w}
      height={h}
      sizes={`${w * 2}px`}
      className="w-auto max-w-none shrink-0 transition-transform duration-300 hover:scale-105"
      style={{ height: h }}
    />
  );
}

/** A slow, pausable strip of client logos. The track is doubled for a seamless loop. */
export function ClientMarquee() {
  return (
    <section aria-labelledby="clients-title" className="border-b border-line bg-white py-12 sm:py-14">
      <div className="container-x">
        <p id="clients-title" className="text-center text-[13px] font-semibold text-ink-muted">
          Organizations we work with across Somalia and East Africa
        </p>
      </div>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <li key={copy} aria-hidden={copy === 1 || undefined} className="flex items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
              {clients.map((c) => (
                <Logo key={c.name} client={c} decorative={copy === 1} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Static grid of client logos for pages where motion would distract. */
export function ClientGrid() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((c) => (
        <li key={c.name} className="group grid min-h-36 place-items-center bg-white p-8">
          <Logo client={c} scale={1.3} />
        </li>
      ))}
      <li className="grid min-h-36 place-items-center bg-surface-raised p-8 text-center text-[13px] font-semibold text-ink-muted">
        Your organization next
      </li>
    </ul>
  );
}
