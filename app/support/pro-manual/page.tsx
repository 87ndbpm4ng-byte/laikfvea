import type { Metadata } from "next";
import { UserManualPage } from "@/components/support/UserManualPage";

export const metadata: Metadata = {
  title: "PRO User Manual | Laikfvea",
  description: "Everything you need to get started with your Laikfvea PRO bottle."
};

export default function ProManualPage() {
  return <UserManualPage title="PRO User Manual" folder="pro" />;
}
