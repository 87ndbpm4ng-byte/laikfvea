import type { Metadata } from "next";
import { ProHero } from "@/components/products/pro/ProHero";
import { ProSpecifications } from "@/components/products/pro/ProSpecifications";

export const metadata: Metadata = {
  title: "Laikfvea PRO | Advanced Hydrogen Water Technology",
  description:
    "Explore Laikfvea PRO, an advanced hydrogen water bottle with higher concentration modes, app control and hydrogen inhalation functionality."
};

export default function ProPage() {
  return (
    <>
      <ProHero />
      <ProSpecifications />
    </>
  );
}
