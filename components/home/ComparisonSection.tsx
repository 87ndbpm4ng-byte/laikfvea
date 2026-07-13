import { links } from "@/config/links";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ComparisonSection() {
  const content = homepageContent.comparison;

  return (
    <MotionSection id="products" className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div id="comparison" className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={content.label} title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>
        <div className="mt-20 grid gap-7 lg:grid-cols-2">
          <ProductCard
            name={products.go.name}
            image={products.go.image}
            alt={products.go.alt}
            intro={products.go.tagline}
            copy={products.go.description}
            cta={content.goCta}
            href={links.go}
            points={products.go.specs}
          />
          <ProductCard
            name={products.pro.name}
            image={products.pro.image}
            alt={products.pro.alt}
            intro={products.pro.tagline}
            copy={products.pro.description}
            cta={content.proCta}
            href={links.pro}
            points={products.pro.specs}
          />
        </div>
      </div>
    </MotionSection>
  );
}
