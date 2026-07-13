"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/navigation";
import { AmazonButton } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink/6 bg-white/82 shadow-[0_12px_34px_rgba(28,28,28,0.045)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-6 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-10"
        aria-label="Primary navigation"
      >
        <a href="/" className="flex items-center gap-3 justify-self-start" aria-label="Laikfvea home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink/72 transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-self-end lg:block">
          <AmazonButton compact />
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center justify-self-end rounded-brand border border-ink/10 bg-white/60 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-ink transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-ink transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
