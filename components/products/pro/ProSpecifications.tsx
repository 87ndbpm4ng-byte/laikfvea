import { productPageContent } from "@/content/products";
import { MotionSection } from "@/components/ui/MotionSection";

export function ProSpecifications() {
  return (
    <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">PRO Specifications.</h2>
        <ul className="mt-8 grid gap-3 text-sm text-muted">
          {productPageContent.pro.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
