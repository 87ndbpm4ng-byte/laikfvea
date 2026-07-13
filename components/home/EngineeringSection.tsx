import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngineeringSection() {
  const content = homepageContent.engineering;

  return (
    <MotionSection className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((item) => (
            <article key={item} className="rounded-brand bg-white p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Carefully specified to support a refined, consistent daily hydration experience.
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
