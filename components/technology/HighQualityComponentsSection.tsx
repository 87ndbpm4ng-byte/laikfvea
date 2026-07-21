import Image from "next/image";
import { technologyContent } from "@/content/technology";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HighQualityComponentsSection() {
  const content = technologyContent.highQualityComponents;

  return (
    <MotionSection className="bg-[#F5F1EA] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={content.label} title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Image
            src="/technology/high-quality-components.png"
            alt="High-quality components of the Laikfvea hydrogen water bottle, including the Tritan bottle body and proton-ion membrane assembly"
            width={2000}
            height={2000}
            sizes="(min-width: 1280px) 1120px, (min-width: 768px) 92vw, 100vw"
            className="h-auto w-full max-w-6xl rounded-[24px] shadow-[0_18px_60px_rgba(28,28,28,0.045)]"
          />
        </div>
      </div>
    </MotionSection>
  );
}
