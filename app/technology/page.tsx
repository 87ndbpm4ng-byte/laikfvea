import type { Metadata } from "next";
import { TechnologyHero } from "@/components/technology/TechnologyHero";

export const metadata: Metadata = {
  title: "Technology | Laikfvea",
  description:
    "Explore the materials, component design and hydrogen generation technology behind the Laikfvea GO and PRO bottle systems."
};

export default function TechnologyPage() {
  return <TechnologyHero />;
}
