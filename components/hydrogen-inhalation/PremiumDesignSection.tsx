import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PremiumDesignSection() {
  const content = hydrogenInhalationContent.premiumDesign;

  return (
    <MotionSection className="bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {content.features.map((feature, index) => (
            <article key={feature.title} className="rounded-brand bg-panel p-8 shadow-[0_18px_60px_rgba(28,28,28,0.045)]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
