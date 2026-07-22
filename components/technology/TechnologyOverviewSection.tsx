import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";

export function TechnologyOverviewSection() {
  const content = homepageContent.designed;
  const intro =
    "Laikfvea combines advanced hydrogen water technology with premium craftsmanship, carefully considering every material, detail and interaction from the bottle body to the precision electrolysis system inside.";

  return (
    <MotionSection className="bg-[#F5F1EA] px-6 py-20 sm:px-8 md:py-0 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:h-[700px] md:grid-cols-[minmax(0,40%)_minmax(0,60%)] md:items-center lg:gap-16">
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="mt-8 text-base leading-8 text-muted sm:text-lg">{intro}</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/technology/high-quality-components.png"
            alt="High-quality components of the Laikfvea hydrogen water bottle, including the Tritan bottle body and proton-ion membrane assembly."
            width={1280}
            height={1280}
            sizes="(min-width: 1280px) 680px, (min-width: 768px) 56vw, 100vw"
            className="h-auto w-full max-w-[720px] object-contain md:w-4/5"
          />
        </div>
      </div>
    </MotionSection>
  );
}
