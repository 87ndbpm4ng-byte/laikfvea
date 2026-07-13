import type { Metadata } from "next";
import { HydrogenWaterFAQ } from "@/components/hydrogen-water/HydrogenWaterFAQ";
import { HydrogenWaterHero } from "@/components/hydrogen-water/HydrogenWaterHero";
import { WhatIsHydrogenWater } from "@/components/hydrogen-water/WhatIsHydrogenWater";
import { WhyPeopleChooseIt } from "@/components/hydrogen-water/WhyPeopleChooseIt";

export const metadata: Metadata = {
  title: "Hydrogen Water | Laikfvea",
  description:
    "Learn what hydrogen water is, why people include it in their daily routines, and how molecular hydrogen supports a modern approach to hydration and wellness."
};

export default function Page() {
  return (
    <>
      <HydrogenWaterHero />
      <WhatIsHydrogenWater />
      <WhyPeopleChooseIt />
      <HydrogenWaterFAQ />
    </>
  );
}
