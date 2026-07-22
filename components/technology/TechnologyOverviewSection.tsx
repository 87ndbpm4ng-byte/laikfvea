import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function TechnologyOverviewSection() {
  const content = homepageContent.designed;

  return (
    <MotionSection className="bg-[#F5F1EA] px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <div className="mt-6 text-base leading-8 text-muted sm:text-lg">
            {content.body.map((paragraph) => (
              <p key={paragraph} className={paragraph === content.body[0] ? undefined : "mt-5"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} body={feature.body} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
