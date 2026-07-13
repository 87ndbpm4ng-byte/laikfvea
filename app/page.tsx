import { BottleExplorerSection } from "@/components/home/BottleExplorerSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { DesignedAroundEverySipSection } from "@/components/home/DesignedAroundEverySipSection";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { EverydayHydrationSection } from "@/components/home/EverydayHydrationSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { HydrogenInhalationSection } from "@/components/home/HydrogenInhalationSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <HydrogenInhalationSection />
      <EverydayHydrationSection />
      <DesignedAroundEverySipSection />
      <BottleExplorerSection />
      <HowItWorksSection />
      <EngineeringSection />
      <FinalCTASection />
    </>
  );
}
