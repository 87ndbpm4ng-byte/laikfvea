import { AMAZON_GO_URL, links } from "@/config/links";

export const navItems = [
  { label: "Products", href: links.products },
  { label: "Hydrogen Water", href: links.hydrogenWater },
  { label: "Technology", href: links.technology },
  { label: "About", href: links.about },
  { label: "Support", href: links.support }
];

export const footerLinks = [
  { label: "Products", href: links.products },
  { label: "Hydrogen Water", href: links.hydrogenWater },
  { label: "Technology", href: links.technology },
  { label: "About", href: links.about },
  { label: "Support", href: links.support },
  { label: "Amazon", href: AMAZON_GO_URL, external: true },
  { label: "Privacy", href: links.support },
  { label: "Terms", href: links.support },
  { label: "Instagram", href: links.support },
  { label: "YouTube", href: links.support }
];
