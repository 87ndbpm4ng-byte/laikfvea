import { supportContent } from "@/content/support";
import { SITE_CONFIG } from "@/config/site";

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
        <div className="mt-12 max-w-xl rounded-brand bg-white p-8 shadow-[0_24px_80px_rgba(28,28,28,0.06)]">
          <h2 className="text-2xl font-semibold text-ink">{content.helpHeading}</h2>
          <p className="mt-4 text-base leading-8 text-muted">{content.helpBody}</p>
          <a
            href={`mailto:${SITE_CONFIG.support.email}`}
            className="mt-6 inline-flex text-base font-semibold text-ink transition hover:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          >
            {SITE_CONFIG.support.email}
          </a>
        </div>
      </div>
    </section>
  );
}
