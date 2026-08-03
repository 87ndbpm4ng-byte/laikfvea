import { SITE_CONFIG } from "@/config/site";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StoreButton({
  href,
  label,
  eyebrow,
  ariaLabel
}: {
  href: string;
  label: string;
  eyebrow: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group inline-flex min-h-14 items-center gap-3 rounded-brand border border-ink/10 bg-ink px-5 text-left text-white shadow-[0_16px_38px_rgba(28,28,28,0.13)] transition hover:-translate-y-0.5 hover:bg-ink/88 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
        {label === "Android" ? "A" : "i"}
      </span>
      <span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-white/64">
          {eyebrow}
        </span>
        <span className="mt-0.5 block text-sm font-semibold">{label}</span>
      </span>
      <span className="ml-auto text-sm transition group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export function AppSection() {
  const content = homepageContent.app;

  return (
    <MotionSection id="app" className="scroll-mt-28 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading eyebrow={content.label} title={content.heading}>
          <p>{content.body}</p>
        </SectionHeading>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {content.features.map((feature) => (
            <li key={feature.title} className="flex h-full flex-col rounded-brand border border-ink/8 bg-white px-6 py-5 text-sm text-ink shadow-[0_12px_32px_rgba(28,28,28,0.04)]">
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 leading-6 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:items-stretch md:max-w-xl">
          <StoreButton
            href={SITE_CONFIG.app.ios}
            label={content.iosCta}
            eyebrow="Download on"
            ariaLabel="Download the Laikfvea app on the App Store"
          />
          <StoreButton
            href={SITE_CONFIG.app.android}
            label={content.androidCta}
            eyebrow="Get it for"
            ariaLabel="Download the Laikfvea app for Android"
          />
        </div>
      </div>
    </MotionSection>
  );
}
