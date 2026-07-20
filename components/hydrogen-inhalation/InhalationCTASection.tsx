import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { InhalationPrimaryLink, ProAmazonLink } from "@/components/hydrogen-inhalation/InhalationActions";

export function InhalationCTASection() {
  const content = hydrogenInhalationContent.cta;

  return (
    <MotionSection className="px-6 pb-24 pt-6 sm:px-8 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-5xl rounded-[24px] bg-white px-8 py-16 text-center shadow-soft sm:px-12 lg:py-20">
        <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          {content.heading}
        </h2>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ProAmazonLink>{content.primaryCta}</ProAmazonLink>
          <InhalationPrimaryLink href={content.secondaryHref}>{content.secondaryCta}</InhalationPrimaryLink>
        </div>
      </div>
    </MotionSection>
  );
}
