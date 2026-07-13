import type { Metadata } from "next";
import { HydrogenWaterPage } from "@/components/hydrogen-water-page";

export const metadata: Metadata = {
  title: "Hydrogen Water | Laikfvea",
  description:
    "Learn what hydrogen water is, why people include it in their daily routines, and how molecular hydrogen supports a modern approach to hydration and wellness."
};

export default function Page() {
  return <HydrogenWaterPage />;
}
