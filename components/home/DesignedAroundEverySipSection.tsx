import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";

export function DesignedAroundEverySipSection({ compact = false }: { compact?: boolean }) {
  const content = homepageContent.designed;
  const intro = compact
    ? "Laikfvea combines advanced hydrogen water technology with premium craftsmanship, carefully considering every material, detail and interaction from the bottle body to the precision electrolysis system inside."
    : content.body.join(" ");

  return (
    <MotionSection className={`bg-[#F5F1EA] px-6 sm:px-8 lg:px-10 ${compact ? "py-20 lg:py-24" : "py-28 lg:py-36"}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className={`${compact ? "mt-10" : "mt-6"} text-base leading-8 text-muted sm:text-lg`}>{intro}</p>
        </div>
        <div className={`flex justify-center ${compact ? "mt-12" : "mt-16 sm:mt-20"}`}>
          <Image
            src="/technology/high-quality-components.png"
            alt="High-quality components of the Laikfvea hydrogen water bottle, including the Tritan bottle body and proton-ion membrane assembly."
            width={1280}
            height={1280}
            sizes={
              compact
                ? "(min-width: 1280px) 960px, (min-width: 768px) 74vw, 100vw"
                : "(min-width: 1280px) 1200px, (min-width: 768px) 92vw, 100vw"
            }
            className={`h-auto ${compact ? "w-full max-w-[960px] lg:w-3/4" : "w-full max-w-[1200px]"}`}
          />
        </div>
      </div>
    </MotionSection>
  );
}
