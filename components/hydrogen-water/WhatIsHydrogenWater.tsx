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
          <img
            src="/hydrogen/hydrogen-infographic.svg"
            alt="Educational infographic explaining hydrogen water and molecular hydrogen"
            className="mx-auto hidden h-auto w-full max-w-[1200px] md:block"
          />
          <img
            src="/hydrogen/hydrogen-infographic-mobile.svg"
            alt="Mobile educational infographic explaining hydrogen water and molecular hydrogen"
            className="mx-auto block h-auto w-full md:hidden"
          />
        </div>
        <section className="pt-28 sm:pt-32" aria-labelledby="oxidative-stress-heading">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Understanding Oxidative Stress
            </p>
            <h2 id="oxidative-stress-heading" className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Oxidative Stress and Everyday Balance
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              A simple overview of how free radicals, daily stressors and the body's natural antioxidant systems relate to everyday wellness.
            </p>
          </div>
          <div className="mx-auto mt-14 pb-28 sm:pb-32">
            <img
              src="/hydrogen/oxidative-stress-infographic.svg"
              alt="Educational infographic explaining oxidative stress, free radicals and antioxidant balance"
              className="mx-auto hidden h-auto w-full max-w-[1200px] md:block"
            />
            <img
              src="/hydrogen/oxidative-stress-infographic-mobile.svg"
              alt="Mobile educational infographic explaining oxidative stress, free radicals and antioxidant balance"
              className="mx-auto block h-auto w-full md:hidden"
            />
          </div>
        </section>
      </div>
    </MotionSection>
  );
}
