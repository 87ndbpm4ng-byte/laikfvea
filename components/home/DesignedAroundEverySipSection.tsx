import { homepageContent } from "@/content/homepage";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DesignedAroundEverySipSection() {
  const content = homepageContent.designed;

  return (
    <MotionSection className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={content.heading} center>
          {content.body.map((paragraph) => (
            <p key={paragraph} className={paragraph === content.body[0] ? undefined : "mt-5"}>
              {paragraph}
            </p>
          ))}
        </SectionHeading>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} body={feature.body} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
