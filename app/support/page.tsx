import type { Metadata } from "next";
import { SupportHero } from "@/components/support/SupportHero";

export const metadata: Metadata = {
  title: "Support | Laikfvea",
  description:
    "Contact Laikfvea support for help with your hydrogen water bottle, product guidance and everyday care."
};

export default function SupportPage() {
  return <SupportHero />;
}
