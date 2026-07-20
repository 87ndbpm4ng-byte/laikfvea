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
    <div className="group relative min-h-[520px] overflow-hidden rounded-[24px] bg-white p-6 shadow-soft sm:p-8 lg:min-h-[620px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(167,216,245,0.28),transparent_38%),radial-gradient(circle_at_70%_72%,rgba(242,244,245,0.92),transparent_42%)]" />
      <div className="absolute left-8 top-10 h-20 w-20 rounded-full border border-ink/8 bg-white/58 backdrop-blur-sm" />
      <div className="absolute bottom-12 right-8 h-28 w-28 rounded-full border border-accent/35 bg-accent/10 blur-[1px]" />
      <div className="relative mx-auto flex h-full max-w-[360px] items-center justify-center">
        <div className="absolute bottom-7 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-ink/12 blur-2xl transition group-hover:bg-ink/16" />
        <div className="relative aspect-[0.49] w-[70%] max-w-[250px] rounded-[38px] border border-ink/10 bg-ink p-2 shadow-[0_34px_90px_rgba(28,28,28,0.18)] transition duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02] sm:w-[74%]">
          <div className="h-full overflow-hidden rounded-[30px] bg-canvas">
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-ink/18" />
            <div className="px-6 pb-7 pt-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Laikfvea</p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-ink">Daily hydration</h3>
              <div className="mt-8 rounded-[20px] bg-white p-5 shadow-[0_18px_44px_rgba(28,28,28,0.08)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Today</span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-ink">PRO</span>
                </div>
                <div className="mt-6 h-2 rounded-full bg-panel">
                  <div className="h-full w-3/4 rounded-full bg-ink" />
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">Bottle active. Routine in progress.</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Devices", "Support", "Cycle", "Guide"].map((item) => (
                  <div key={item} className="rounded-[18px] bg-white/76 p-4 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(28,28,28,0.055)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppSection() {
  const content = homepageContent.app;

  return (
    <MotionSection id="app" className="scroll-mt-28 px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
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
    </MotionSection>
  );
}
