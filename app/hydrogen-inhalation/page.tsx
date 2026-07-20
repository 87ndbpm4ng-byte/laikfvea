import type { Metadata } from "next";
import { DualFunctionSection } from "@/components/hydrogen-inhalation/DualFunctionSection";
import { HowInhalationWorksSection } from "@/components/hydrogen-inhalation/HowInhalationWorksSection";
import { InhalationCTASection } from "@/components/hydrogen-inhalation/InhalationCTASection";
import { InhalationFAQSection } from "@/components/hydrogen-inhalation/InhalationFAQSection";
import { InhalationHero } from "@/components/hydrogen-inhalation/InhalationHero";
import { PremiumDesignSection } from "@/components/hydrogen-inhalation/PremiumDesignSection";
import { WhyInhalationSection } from "@/components/hydrogen-inhalation/WhyInhalationSection";

export const metadata: Metadata = {
  title: "Hydrogen Inhalation | Laikfvea PRO",
  description:
    "Learn how the Laikfvea PRO combines hydrogen-rich water with a dedicated hydrogen inhalation function in one premium portable device."
};

export default function HydrogenInhalationPage() {
  return (
    <>
      <InhalationHero />
      <WhyInhalationSection />
      <HowInhalationWorksSection />
      <DualFunctionSection />
      <PremiumDesignSection />
      <InhalationFAQSection />
      <InhalationCTASection />
    </>
  );
}
