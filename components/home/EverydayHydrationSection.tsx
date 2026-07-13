import { homepageContent } from "@/content/homepage";
import { AbstractScene } from "@/components/home/AbstractScene";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EverydayHydrationSection() {
  const content = homepageContent.everydayHydration;

  return (
    <MotionSection id="about" className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionHeading title={content.heading}>
          {content.body.map((paragraph) => (
            <p key={paragraph} className={paragraph === content.body[0] ? undefined : "mt-5"}>
              {paragraph}
            </p>
          ))}
        </SectionHeading>
        <div className="relative min-h-[360px] overflow-hidden rounded-brand bg-white shadow-[0_28px_90px_rgba(28,28,28,0.065)] sm:min-h-[500px]">
          <AbstractScene label="Home" />
        </div>
      </div>
    </MotionSection>
  );
}
