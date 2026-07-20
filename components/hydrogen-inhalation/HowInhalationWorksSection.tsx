import Image from "next/image";
import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";

const stepSymbols = ["01", "02", "03", "04"];

export function HowInhalationWorksSection() {
  const content = hydrogenInhalationContent.howItWorks;

  return (
    <MotionSection className="bg-panel px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-white shadow-soft sm:min-h-[680px]">
          <Image
            src="/inhalation/setup.jpg"
            alt="Close-up of the Laikfvea PRO bottle with inhalation tubing"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-center"
          />
        </div>

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
