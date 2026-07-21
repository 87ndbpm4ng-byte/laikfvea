import { BottleExplorerSection } from "@/components/home/BottleExplorerSection";
import { HighQualityComponentsSection } from "@/components/technology/HighQualityComponentsSection";
import { TechnologyHero } from "@/components/technology/TechnologyHero";

export default function TechnologyPage() {
  return (
    <>
      <TechnologyHero />
      <BottleExplorerSection />
      <HighQualityComponentsSection />
    </>
  );
}
