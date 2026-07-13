import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BuiltForEveryDaySection() {
  const content = homepageContent.lifestyle;

  return (
    <MotionSection id="everyday-lifestyle" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative order-first min-h-[420px] overflow-hidden rounded-brand bg-panel shadow-[0_28px_90px_rgba(28,28,28,0.065)] sm:min-h-[560px] lg:order-none">
          <Image
            src="/lifestyle/lifestyle-placeholder.svg"
            alt="Abstract Laikfvea daily routine visual"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading eyebrow={content.label} title={content.heading}>
            <p>{content.body}</p>
          </SectionHeading>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-brand bg-white shadow-[0_20px_60px_rgba(28,28,28,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(28,28,28,0.075)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-brand bg-panel">
                  <Image
                    src={card.image}
                    alt={`${card.title.toLowerCase()} lifestyle`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 42vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
