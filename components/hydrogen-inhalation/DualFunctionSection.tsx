import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DualFunctionSection() {
  const content = hydrogenInhalationContent.dualFunction;

  return (
    <MotionSection className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center />
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-ink/8 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(28,28,28,0.08)] sm:p-10"
            >
              <h3 className="text-2xl font-semibold text-ink">{card.title}</h3>
              <ul className="mt-8 grid gap-4">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-muted sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
