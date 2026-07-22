import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { AmazonButton, SecondaryButton } from "@/components/ui/Button";
import { MotionSection } from "@/components/ui/MotionSection";

export function FinalCTASection() {
  const content = homepageContent.finalCta;

  return (
    <MotionSection className="px-6 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-brand bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
        <div>
          <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            {content.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{content.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AmazonButton label={content.primaryCta} />
            <SecondaryButton href={content.secondaryHref}>{content.secondaryCta}</SecondaryButton>
          </div>
        </div>
        <div className="flex min-h-[460px] items-center justify-center">
          <Image
            src="/images/bottles-comparison.png"
            alt="Laikfvea GO and PRO hydrogen water bottles"
            width={3240}
            height={4050}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </MotionSection>
  );
}
