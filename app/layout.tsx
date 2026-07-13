import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Laikfvea | Hydration, Reinvented",
  description:
    "Premium hydrogen water technology designed to elevate everyday hydration. Explore Laikfvea GO and PRO, then purchase securely through Amazon.",
  openGraph: {
    title: "Laikfvea | Hydration, Reinvented",
    description:
      "Premium hydrogen water technology designed to elevate everyday hydration. Explore Laikfvea GO and PRO, then purchase securely through Amazon.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable} bg-canvas text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
