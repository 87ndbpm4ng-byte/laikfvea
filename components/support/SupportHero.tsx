import { supportContent } from "@/content/support";

export function SupportHero() {
  const content = supportContent.hero;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.label}</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          {content.heading}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">{content.body}</p>
      </div>
    </section>
  );
}
