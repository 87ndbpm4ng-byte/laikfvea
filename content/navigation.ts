import { links } from "@/config/links";
import { SITE_CONFIG } from "@/config/site";

export const navItems = [
  { label: "Products", href: links.products },
  { label: "Hydrogen Water", href: links.hydrogenWater },
  { label: "Technology", href: links.technologyPage },
  { label: "About", href: links.aboutPage },
  { label: "Support", href: links.supportPage },
  { label: "Socials", href: SITE_CONFIG.social.linktree, external: true }
];

export const footerLinks = [
  { label: "Products", href: links.products },
  { label: "Hydrogen Water", href: links.hydrogenWater },
  { label: "Technology", href: links.technologyPage },
  { label: "App", href: links.app },
  { label: "About", href: links.aboutPage },
  { label: "Support", href: links.supportPage }
];
