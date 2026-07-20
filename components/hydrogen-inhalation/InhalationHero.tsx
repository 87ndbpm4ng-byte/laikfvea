import Image from "next/image";
import { hydrogenInhalationContent } from "@/content/hydrogen-inhalation";
import { MotionSection } from "@/components/ui/MotionSection";
import { InhalationPrimaryLink, ProAmazonLink } from "@/components/hydrogen-inhalation/InhalationActions";

export function InhalationHero() {
  const content = hydrogenInhalationContent.hero;

  return (
    <MotionSection className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.label}</p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {content.heading}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">{content.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <InhalationPrimaryLink href={content.primaryHref}>{content.primaryCta}</InhalationPrimaryLink>
            <ProAmazonLink>{content.secondaryCta}</ProAmazonLink>
          </div>
        </div>

        <div className="relative min-h-[540px] overflow-hidden rounded-[24px] bg-white shadow-soft sm:min-h-[660px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(167,216,245,0.22),transparent_38%)]" />
          <Image
            src="/inhalation/hero.jpg"
            alt="Woman using the Laikfvea PRO hydrogen inhalation function"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </MotionSection>
  );
}
