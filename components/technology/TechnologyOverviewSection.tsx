import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";

export function TechnologyOverviewSection() {
  const content = homepageContent.designed;
  const intro =
    "Laikfvea combines advanced hydrogen water technology with premium craftsmanship, carefully considering every material, detail and interaction from the bottle body to the precision electrolysis system inside.";

  return (
    <MotionSection className="bg-[#F5F1EA]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-[72px] sm:px-8 min-[900px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[900px]:items-center min-[900px]:gap-16 min-[900px]:px-12">
        <div className="max-w-[480px]">
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl min-[900px]:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-8 text-base leading-8 text-muted sm:text-lg">{intro}</p>
        </div>

        <div className="min-w-0">
          <Image
            src="/technology/high-quality-components.png"
            alt="High-quality components of the Laikfvea hydrogen water bottle, including the Tritan bottle body and proton-ion membrane assembly."
            width={1280}
            height={1280}
            sizes="(min-width: 1280px) 620px, (min-width: 900px) 52vw, 100vw"
            className="ml-auto block h-auto w-full max-w-[620px] object-contain"
          />
        </div>
      </div>
    </MotionSection>
  );
}
