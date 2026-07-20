import { SITE_CONFIG } from "@/config/site";

const baseClass =
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-brand px-6 text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:text-base";

export function InhalationPrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={`${baseClass} border border-ink/12 bg-white/72 text-ink hover:bg-white`}>
      {children}
    </a>
  );
}

export function ProAmazonLink({ children }: { children: React.ReactNode }) {
  const href = SITE_CONFIG.amazon.pro || SITE_CONFIG.routes.proPage;
  const isExternal = Boolean(SITE_CONFIG.amazon.pro);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label="Buy Laikfvea PRO on Amazon"
      className={`${baseClass} bg-ink text-white shadow-[0_14px_34px_rgba(28,28,28,0.12)] hover:bg-ink/88`}
    >
      {children}
    </a>
  );
}
