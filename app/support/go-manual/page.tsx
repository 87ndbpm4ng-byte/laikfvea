import type { Metadata } from "next";
import { UserManualPage } from "@/components/support/UserManualPage";

export const metadata: Metadata = {
  title: "GO User Manual | Laikfvea",
  description: "Everything you need to get started with your Laikfvea GO bottle."
};

export default function GoManualPage() {
  return <UserManualPage title="GO User Manual" folder="go" />;
}
