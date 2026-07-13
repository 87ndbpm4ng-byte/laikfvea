import { hydrogenWaterContent } from "@/content/hydrogen-water";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatIsHydrogenWater() {
  const content = hydrogenWaterContent.whatIs;

  return (
    <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={content.heading}>
          {content.body.map((paragraph) => (
            <p key={paragraph} className={paragraph === content.body[0] ? undefined : "mt-5"}>
              {paragraph}
            </p>
          ))}
        </SectionHeading>
      </div>
    </MotionSection>
  );
}
