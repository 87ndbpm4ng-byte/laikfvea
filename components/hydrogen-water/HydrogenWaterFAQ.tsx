import { hydrogenWaterContent } from "@/content/hydrogen-water";
import { Accordion } from "@/components/ui/Accordion";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HydrogenWaterFAQ() {
  const content = hydrogenWaterContent.faq;

  return (
    <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={content.heading} center />
        <Accordion items={content.items} />
      </div>
    </MotionSection>
  );
}
