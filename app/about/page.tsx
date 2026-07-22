import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About | Laikfvea",
  description:
    "Learn about Laikfvea's approach to thoughtful design, premium materials and modern hydration technology."
};

export default function AboutPage() {
  return <AboutHero />;
}
