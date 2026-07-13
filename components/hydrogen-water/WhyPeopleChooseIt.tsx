import { hydrogenWaterContent } from "@/content/hydrogen-water";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyPeopleChooseIt() {
  const content = hydrogenWaterContent.whyChoose;

  return (
    <MotionSection className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card) => (
            <article key={card.title} className="rounded-brand bg-white p-7 shadow-[0_20px_60px_rgba(28,28,28,0.055)]">
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
