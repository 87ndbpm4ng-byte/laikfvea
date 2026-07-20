import { SITE_CONFIG } from "@/config/site";

export function AmazonButton({
  compact = false,
  label = "Buy on Amazon",
  ariaLabel = "Buy Laikfvea GO on Amazon"
}: {
  compact?: boolean;
  label?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={SITE_CONFIG.amazon.go}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-brand bg-ink text-center font-semibold text-white shadow-[0_14px_34px_rgba(28,28,28,0.12)] transition hover:-translate-y-0.5 hover:bg-ink/88 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas ${
        compact ? "min-h-11 px-5 text-sm" : "min-h-12 px-6 text-sm sm:text-base"
      }`}
    >
      {label}
    </a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-brand border border-ink/12 bg-white/60 px-6 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:text-base"
    >
      <span>{children}</span>
    </a>
  );
}

export function ArrowButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-brand border border-ink/12 bg-white/70 px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas sm:text-base"
    >
      <span>{children}</span>
      <span className="transition group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}
