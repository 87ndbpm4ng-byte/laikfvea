import { productPageContent } from "@/content/products";
import { products } from "@/config/products";
import { ProductStage } from "@/components/ui/ProductImage";

export function ProHero() {
  const content = productPageContent.pro.hero;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.label}</p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {content.heading}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">{content.body}</p>
        </div>
        <ProductStage src={products.pro.image} alt={products.pro.alt} priority className="min-h-[560px]" />
      </div>
    </section>
  );
}
