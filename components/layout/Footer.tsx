import { footerLinks } from "@/content/navigation";
import { AMAZON_GO_URL } from "@/config/links";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer id="support" className="border-t border-ink/8 bg-white px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-muted">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href === AMAZON_GO_URL ? "_blank" : undefined}
              rel={item.href === AMAZON_GO_URL ? "noopener noreferrer" : undefined}
              aria-label={item.href === AMAZON_GO_URL ? "Buy Laikfvea GO on Amazon" : undefined}
              className="transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
