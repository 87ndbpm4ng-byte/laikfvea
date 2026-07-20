import { products } from "@/config/products";
import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductStage } from "@/components/ui/ProductImage";

const stepSymbols = ["01", "02", "03", "04"];

export function HowInhalationWorksSection() {
  const content = hydrogenInhalationContent.howItWorks;

  return (
    <MotionSection className="bg-panel px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <ProductStage
          src={products.pro.image}
          alt="Laikfvea PRO bottle prepared for hydrogen inhalation"
          className="min-h-[560px] sm:min-h-[680px]"
          imageClassName="scale-[1.12]"
        />

        <div>
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {content.steps.map((step, index) => (
              <article key={step} className="rounded-brand bg-white p-6 shadow-[0_18px_50px_rgba(28,28,28,0.055)]">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-panel text-xs font-semibold text-muted">
                    {stepSymbols[index]}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{step}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
