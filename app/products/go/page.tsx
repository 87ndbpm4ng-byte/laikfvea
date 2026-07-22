import type { Metadata } from "next";
import { GoHero } from "@/components/products/go/GoHero";
import { GoSpecifications } from "@/components/products/go/GoSpecifications";

export const metadata: Metadata = {
  title: "Laikfvea GO | Everyday Hydrogen Water Bottle",
  description:
    "Explore Laikfvea GO, a portable hydrogen water bottle designed for convenient daily hydration at home, work, the gym and while travelling."
};

export default function GoPage() {
  return (
    <>
      <GoHero />
      <GoSpecifications />
    </>
  );
}
