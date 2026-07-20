import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProductHero() {
  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[24px] bg-[#F6F7F6] sm:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(167,216,245,0.14),transparent_35%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.86),transparent_38%)]" />
      <div className="absolute bottom-[11%] left-1/2 h-14 w-[32%] -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />
      <div className="absolute inset-y-[4%] left-1/2 w-[58%] max-w-[420px] -translate-x-1/2 sm:w-[46%] lg:w-[48%]">
        <ProductImage
          src={products.pro.image}
          alt="Laikfvea PRO bottle detail view"
          priority
          sizes="(min-width: 1024px) 34vw, 78vw"
          className="scale-100"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-brand border border-ink/8 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-ink/18 sm:p-7">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </article>
  );
}

export function BottleExplorerSection() {
  const content = homepageContent.bottleExplorer;

  return (
    <MotionSection id="technology" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start xl:gap-20">
          <SectionHeading title={content.heading}>
            <p>{content.body}</p>
          </SectionHeading>

          <div>
            <ProductHero />
            <div className="mt-8 grid gap-4">
              {content.details.map((feature) => (
                <FeatureCard key={feature.title} title={feature.title} body={feature.body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
