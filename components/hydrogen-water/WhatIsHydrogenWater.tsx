import Image from "next/image";
import { hydrogenWaterContent } from "@/content/hydrogen-water";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatIsHydrogenWater() {
  const content = hydrogenWaterContent.whatIs;

  return (
    <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-4xl">
          <SectionHeading title={content.heading}>
            {content.body.map((paragraph) => (
              <p key={paragraph} className={paragraph === content.body[0] ? undefined : "mt-5"}>
                {paragraph}
              </p>
            ))}
          </SectionHeading>
        </div>
        <div className="mx-auto mt-16">
          <Image
            src="/hydrogen/hydrogen-infographic.png"
            alt="Educational infographic explaining hydrogen water and molecular hydrogen"
            width={1774}
            height={887}
            sizes="(min-width: 1440px) 1400px, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </MotionSection>
  );
}
