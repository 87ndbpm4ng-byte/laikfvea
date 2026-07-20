import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyInhalationSection() {
  const content = hydrogenInhalationContent.why;

  return (
    <MotionSection className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <SectionHeading title={content.heading} />
        <div className="grid gap-5 text-base leading-8 text-muted sm:text-lg">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
