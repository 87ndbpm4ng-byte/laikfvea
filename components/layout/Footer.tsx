import { footerLinks } from "@/content/navigation";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/layout/Logo";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12.1 3.7c-4.6 0-7 3.2-7 6.5 0 2 1 4.4 2.6 5.2.3.1.5 0 .5-.3l.3-1.2c.1-.3 0-.4-.2-.7-.5-.6-.9-1.7-.9-2.7 0-2.9 2.1-5.4 5.5-5.4 3 0 5 2 5 4.8 0 3.2-1.6 5.7-3.8 5.7-1.2 0-2.1-1-1.8-2.2.3-1.4 1-2.9 1-3.9 0-.9-.5-1.7-1.5-1.7-1.2 0-2.2 1.3-2.2 3 0 1.1.4 1.8.4 1.8l-1.5 6.1c-.3 1.2 0 3 .1 3.2 0 .1.2.2.3.1.1-.2 1.8-2.4 2.2-3.6l.7-2.6c.5.9 1.7 1.6 3 1.6 4 0 6.8-3.6 6.8-8.1 0-3.8-3.2-7.4-8.5-7.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: SITE_CONFIG.social.instagram, icon: <InstagramIcon /> },
  { label: "Pinterest", href: SITE_CONFIG.social.pinterest, icon: <PinterestIcon /> }
];

export function Footer() {
  return (
    <footer id="support" className="border-t border-ink/8 bg-white px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <Logo />
          <p className="mt-8 text-sm text-muted">{SITE_CONFIG.copyright}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-[auto_auto] sm:items-start">
          <nav className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-muted" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5 sm:items-end">
            <div className="flex gap-3 text-ink">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-brand border border-ink/10 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(28,28,28,0.08)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${SITE_CONFIG.support.email}`}
              className="text-sm font-medium text-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
            >
              {SITE_CONFIG.support.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
