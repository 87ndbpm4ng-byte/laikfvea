import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DesignedAroundEverySipSection() {
  const content = homepageContent.designed;
  const featureImages: Record<
    string,
    { src: string; alt: string; width: number; height: number; className: string }
  > = {
    "SPE / PEM Technology": {
      src: "/technology/membrane-module.png",
      alt: "Laikfvea SPE PEM membrane module",
      width: 544,
      height: 642,
      className: "w-full max-w-[180px]"
    },
    "Premium Materials": {
      src: "/technology/premium-glass-bottle-card.png",
      alt: "Laikfvea premium glass bottle component",
      width: 598,
      height: 806,
      className: "max-h-[220px] w-auto max-w-full"
    }
  };

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
          {content.features.map((feature) => {
            const image = featureImages[feature.title];

            return (
              <article key={feature.title} className="flex h-full flex-col rounded-brand bg-white p-8 shadow-soft">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{feature.body}</p>
                </div>
                <div className="mt-6 flex min-h-[190px] items-center justify-center">
                  {image ? (
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="180px"
                        className={`h-auto object-contain ${image.className}`}
                      />
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
