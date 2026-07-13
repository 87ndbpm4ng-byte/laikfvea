import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorksSection() {
  const content = homepageContent.howItWorks;

  return (
    <MotionSection id="how-it-works" className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>
        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {content.steps.map(([number, title, copy]) => (
            <article key={title} className="relative rounded-brand border border-ink/7 bg-white p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{number}</p>
              <h3 className="mt-12 text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
