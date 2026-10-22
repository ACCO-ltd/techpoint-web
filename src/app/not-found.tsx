import { Button, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-night pt-32 pb-20 text-on-dark">
      <div className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-x">
        <Eyebrow tone="light">Error 404</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.08] tracking-[-0.025em] sm:text-[48px] lg:text-[56px]">This page isn&apos;t part of the system.</h1>
        <p className="mt-6 max-w-xl text-lg text-on-dark-muted">The page you&apos;re looking for may have moved. Let&apos;s get you back on track.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost-light">
            Discuss a project
          </Button>
        </div>
      </div>
    </section>
  );
}
