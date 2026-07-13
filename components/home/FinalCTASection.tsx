import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { AmazonButton, SecondaryButton } from "@/components/ui/Button";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductStage } from "@/components/ui/ProductImage";

export function FinalCTASection() {
  const content = homepageContent.finalCta;

  return (
    <MotionSection className="px-6 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-brand bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
        <div>
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{content.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AmazonButton label={content.primaryCta} />
            <SecondaryButton href={content.secondaryHref}>{content.secondaryCta}</SecondaryButton>
          </div>
        </div>
        <ProductStage
          src={products.pro.image}
          alt={products.pro.alt}
          className="min-h-[460px]"
          imageClassName="scale-[1.18]"
        />
      </div>
    </MotionSection>
  );
}
