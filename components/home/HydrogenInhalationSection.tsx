import { links } from "@/config/links";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { ArrowButton } from "@/components/ui/Button";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductStage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HydrogenInhalationSection() {
  const content = homepageContent.inhalation;

  return (
    <MotionSection id="pro-inhalation" className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ProductStage
          src={products.pro.image}
          alt="Laikfvea PRO hydrogen inhalation system"
          className="min-h-[560px]"
          imageClassName="scale-[1.12]"
        />
        <div>
          <SectionHeading eyebrow={content.label} title={content.heading}>
            {content.intro.map((paragraph) => (
              <p key={paragraph} className={paragraph === content.intro[0] ? undefined : "mt-5"}>
                {paragraph}
              </p>
            ))}
          </SectionHeading>
          <div className="mt-10 max-w-3xl">
            <h3 className="text-2xl font-semibold text-ink">{content.subheading}</h3>
            {content.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-brand bg-white p-6 shadow-[0_20px_60px_rgba(28,28,28,0.055)]">
                <h4 className="text-base font-semibold text-ink">{benefit.title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">{benefit.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ArrowButton href={links.pro}>Explore PRO</ArrowButton>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
