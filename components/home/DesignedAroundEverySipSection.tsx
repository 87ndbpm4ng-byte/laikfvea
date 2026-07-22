import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";

export function DesignedAroundEverySipSection() {
  const content = homepageContent.designed;
  const intro = content.body.join(" ");

  return (
    <MotionSection className="bg-[#F5F1EA] px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{intro}</p>
        </div>
        <div className="mt-16 flex justify-center sm:mt-20">
          <Image
            src="/technology/high-quality-components.png"
            alt="High-quality components of the Laikfvea hydrogen water bottle, including the Tritan bottle body and proton-ion membrane assembly."
            width={1280}
            height={1280}
            sizes="(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
            className="h-auto w-full max-w-[1200px]"
          />
        </div>
      </div>
    </MotionSection>
  );
}
