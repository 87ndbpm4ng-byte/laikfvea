import Image from "next/image";
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

function AppVisual() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/app/smart-app-control.png"
        alt="Smart app control features and download options for the Laikfvea hydrogen generator"
        width={2000}
        height={2000}
        sizes="(min-width: 1280px) 620px, (min-width: 1024px) 52vw, 100vw"
        className="h-auto w-full max-w-[680px]"
      />
    </div>
  );
}

export function AppSection() {
  const content = homepageContent.app;

  return (
    <MotionSection id="app" className="scroll-mt-28 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={content.label} title={content.heading}>
              <p>{content.body}</p>
            </SectionHeading>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              {content.features.map((feature) => (
                <li key={feature} className="rounded-brand border border-ink/8 bg-white px-5 py-4 text-sm font-medium text-ink shadow-[0_12px_32px_rgba(28,28,28,0.04)]">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:items-stretch lg:max-w-xl">
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

          <AppVisual />
        </div>
      </div>
    </MotionSection>
  );
}
