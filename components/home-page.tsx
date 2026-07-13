"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const amazonUrl = "https://www.amazon.com/";
export const logoBlack = "/logos/logo black.svg";
export const goBottle = "/go/go-transparent.png";
export const proBottle = "/pro/pro-transparent.png";

const navItems = [
  { label: "Products", href: "/#products" },
  { label: "Hydrogen Water", href: "/hydrogen-water" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/#about" },
  { label: "Support", href: "/#support" }
];

const detailCopy: Record<string, string> = {
  "Drinking Lid": "A clean, comfortable top designed for everyday sipping and easy handling.",
  "Bottle Body": "A refined transparent body that keeps the product focused on water, material and light.",
  "Electrolysis Chamber":
    "The technology core where Laikfvea prepares hydrogen-rich water through a precise cycle.",
  "USB-C Charging": "Simple charging designed for home, work, travel and daily routines.",
  "Stable Base": "A balanced base that keeps the bottle composed on desks, counters and gym benches."
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export function MotionSection({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

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
              className="text-sm font-medium text-ink/72 transition hover:text-ink"
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

      {open ? (
        <div className="fixed inset-x-0 top-20 min-h-[calc(100vh-5rem)] border-t border-ink/5 bg-white px-6 pb-7 pt-2 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-brand px-2 py-4 text-lg font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <AmazonButton />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Logo() {
  return (
    <Image
      src={logoBlack}
      alt="LAIKFVEA"
      width={190}
      height={30}
      priority
      unoptimized
      className="h-auto w-40 sm:w-52"
    />
  );
}

export function AmazonButton({
  compact = false,
  label = "Buy on Amazon"
}: {
  compact?: boolean;
  label?: string;
}) {
  return (
    <a
      href={amazonUrl}
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

export function SmartImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  unoptimized = false
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`relative overflow-hidden rounded-brand bg-panel ${className}`}>
        <div className="absolute inset-5 rounded-brand border border-white" />
        <div className="absolute left-1/2 top-1/2 h-4/5 w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border border-ink/18 bg-white shadow-soft" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      unoptimized={unoptimized}
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

export function ProductStage({
  src,
  alt,
  className = "",
  imageClassName = "scale-110",
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-brand ${className}`}>
      <div className="absolute inset-x-4 bottom-8 top-10 rounded-[48px] bg-accent/10 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-ink/12 blur-2xl" />
      <SmartImage
        src={src}
        alt={alt}
        priority={priority}
        className={imageClassName}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

export function TextBlock({
  eyebrow,
  title,
  children,
  center = false
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? <div className="mt-6 text-base leading-8 text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}

function AbstractScene({ label, compact = false }: { label: string; compact?: boolean }) {
  const orbitSize = compact ? "h-28 w-28" : "h-44 w-44";
  const bottleHeight = compact ? "h-48" : "h-72";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-12 w-2/3 -translate-x-1/2 rounded-full bg-ink/7 blur-2xl" />
      <div className="absolute inset-x-8 bottom-8 top-8 rounded-[36px] border border-white/90 bg-panel/55" />
      <div className="absolute left-1/2 top-1/2 h-px w-4/5 -translate-x-1/2 bg-ink/6" />
      <div className="absolute left-1/2 top-1/2 w-3/5 -translate-x-1/2 rounded-full border border-ink/8" />
      <div
        className={`absolute left-1/2 top-1/2 ${orbitSize} -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40`}
      />
      <div
        className={`absolute left-1/2 top-1/2 ${bottleHeight} w-20 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-ink/12 bg-white/70 shadow-[0_18px_50px_rgba(28,28,28,0.055)]`}
      >
        <div className="mx-auto mt-5 h-6 w-12 rounded-full border border-ink/10 bg-white" />
        <div className="absolute inset-x-5 bottom-8 h-10 rounded-full bg-accent/18" />
      </div>
      <p className="absolute bottom-7 left-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted/70">
        {label}
      </p>
    </div>
  );
}

function HeroProduct() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto h-[52vh] min-h-[360px] w-full max-w-[430px] sm:h-[58vh] sm:max-h-[560px] sm:max-w-[520px] lg:h-[72vh] lg:min-h-[500px] lg:max-h-[660px] lg:max-w-[610px] lg:translate-x-6"
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-x-4 bottom-10 top-8 rounded-[56px] bg-accent/14 blur-3xl" />
      <div className="absolute bottom-6 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-ink/12 blur-2xl" />
      <SmartImage
        src={proBottle}
        alt="Laikfvea PRO hydrogen water bottle"
        priority
        className="scale-[0.98] sm:scale-100 lg:scale-[1.02]"
        sizes="(min-width: 1024px) 62vw, 100vw"
      />
    </motion.div>
  );
}

function ProductCard({
  name,
  image,
  alt,
  intro,
  copy,
  cta,
  href,
  points
}: {
  name: string;
  image: string;
  alt: string;
  intro: string;
  copy: string;
  cta: string;
  href: string;
  points: string[];
}) {
  return (
    <article
      id={name.toLowerCase()}
      className="group grid overflow-hidden rounded-brand border border-ink/5 bg-white shadow-[0_32px_100px_rgba(28,28,28,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(28,28,28,0.095)] sm:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="relative min-h-[560px] overflow-hidden bg-[#F7F8F8] sm:min-h-[800px]">
        <div className="absolute inset-x-6 bottom-8 top-10 rounded-[44px] bg-white/75" />
        <div className="absolute inset-x-4 bottom-8 top-14 rounded-[48px] bg-accent/10 blur-3xl" />
        <div className="absolute bottom-12 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-ink/12 blur-2xl" />
        <SmartImage
          src={image}
          alt={alt}
          className="scale-[1.16] transition duration-500 group-hover:scale-[1.19]"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
      <div className="flex flex-col p-9 sm:p-12 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Laikfvea</p>
        <h3 className="mt-5 text-5xl font-semibold text-ink">{name}</h3>
        <p className="mt-5 text-xl font-semibold text-ink">{intro}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
        <ul className="mt-8 grid gap-3 text-sm text-muted">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9">
          <ArrowButton href={href}>{cta}</ArrowButton>
        </div>
      </div>
    </article>
  );
}

function ComparisonSection() {
  return (
    <MotionSection id="products" className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <TextBlock eyebrow="THE LAIKFVEA COLLECTION" title="Choose Your Bottle." center>
          <p>
            Two hydrogen water systems designed for different routines — from effortless everyday
            hydration to advanced performance and expanded functionality.
          </p>
        </TextBlock>
        <div className="mt-20 grid gap-7 lg:grid-cols-2">
          <ProductCard
            name="GO"
            image={goBottle}
            alt="Laikfvea GO hydrogen water bottle"
            intro="Simple. Portable. Everyday."
            copy="Designed for convenient daily hydrogen-rich water at home, at work, at the gym and while travelling."
            cta="Explore GO"
            href="/#go"
            points={[
              "400 ml capacity",
              "Up to 1500 PPB hydrogen concentration",
              "5-minute enrichment cycle",
              "SPE/PEM technology",
              "USB-C charging",
              "Borosilicate glass body"
            ]}
          />
          <ProductCard
            name="PRO"
            image={proBottle}
            alt="Laikfvea PRO hydrogen water bottle"
            intro="Advanced hydration technology."
            copy="Designed for users seeking higher hydrogen concentration, greater control and additional wellness functionality."
            cta="Explore PRO"
            href="/#pro"
            points={[
              "350 ml capacity",
              "Up to 9000 PPB hydrogen concentration",
              "3-minute and 18-minute enrichment modes",
              "Bluetooth app control",
              "Hydrogen inhalation",
              "Mineralization option",
              "USB-C charging"
            ]}
          />
        </div>
      </div>
    </MotionSection>
  );
}

function InhalationSection() {
  return (
    <MotionSection className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ProductStage
          src={proBottle}
          alt="Laikfvea PRO hydrogen inhalation system"
          className="min-h-[560px] bg-white shadow-[0_28px_90px_rgba(28,28,28,0.065)]"
          imageClassName="scale-[1.12]"
        />
        <div>
          <TextBlock eyebrow="PRO EXCLUSIVE" title="More Than Hydration.">
            <p>
              The Laikfvea PRO also offers hydrogen inhalation — a direct way to introduce molecular
              hydrogen through the respiratory system.
            </p>
            <p className="mt-5">
              When inhaled, hydrogen passes through the lungs and enters the bloodstream, making it
              rapidly available throughout the body.
            </p>
          </TextBlock>
          <div className="mt-10 max-w-3xl">
            <h3 className="text-2xl font-semibold text-ink">Why Hydrogen Inhalation?</h3>
            <p className="mt-4 text-base leading-8 text-muted">
              Molecular hydrogen is known for its selective antioxidant properties, helping address
              harmful free radicals while preserving essential cellular processes.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              Designed to complement modern wellness routines, hydrogen inhalation offers another way
              to support recovery, manage oxidative stress and maintain everyday balance.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Rapid Availability",
                "Hydrogen enters through the lungs and becomes quickly available throughout the body."
              ],
              [
                "Selective Antioxidant Support",
                "Molecular hydrogen is recognised for interacting selectively with harmful free radicals while supporting normal cellular function."
              ],
              [
                "Recovery Support",
                "Designed to complement active lifestyles, demanding schedules and post-exercise recovery routines."
              ],
              [
                "Everyday Balance",
                "A simple inhalation function integrated into the PRO system for modern daily wellness."
              ]
            ].map(([title, copy]) => (
              <article key={title} className="rounded-brand bg-white p-6 shadow-[0_20px_60px_rgba(28,28,28,0.055)]">
                <h4 className="text-base font-semibold text-ink">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ArrowButton href="/#pro">Explore PRO</ArrowButton>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export function Footer() {
  return (
    <footer id="support" className="border-t border-ink/8 bg-white px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-muted">
          {[
            ["Products", "/#products"],
            ["Hydrogen Water", "/hydrogen-water"],
            ["Technology", "/#technology"],
            ["About", "/#about"],
            ["Support", "/#support"],
            ["Amazon", amazonUrl],
            ["Privacy", "#"],
            ["Terms", "#"],
            ["Instagram", "#"],
            ["YouTube", "#"]
          ].map(([item, href]) => (
            <a key={item} href={href} className="transition hover:text-ink">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  const [selectedDetail, setSelectedDetail] = useState("Electrolysis Chamber");
  const detailItems = useMemo(() => Object.keys(detailCopy), []);

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-10">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl lg:pb-8"
            >
              <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                Hydration, Reinvented.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
                Beautifully engineered hydrogen water technology designed to elevate one of life&apos;s
                most essential daily habits.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <AmazonButton />
                <SecondaryButton href="#technology">Explore Technology</SecondaryButton>
              </div>
            </motion.div>
            <HeroProduct />
          </div>
        </section>

        <ComparisonSection />
        <InhalationSection />

        <MotionSection id="about" className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <TextBlock title="Better Hydration Starts Here.">
              <p>
                Hydration is one of the few habits you repeat every single day. At Laikfvea, we
                believe that something so essential deserves thoughtful design, premium materials,
                and engineering you can trust.
              </p>
              <p className="mt-5">
                Whether you&apos;re starting your morning, working at your desk, finishing a workout,
                or travelling, Laikfvea is designed to fit seamlessly into your routine.
              </p>
            </TextBlock>
            <div className="relative min-h-[360px] overflow-hidden rounded-brand bg-white shadow-[0_28px_90px_rgba(28,28,28,0.065)] sm:min-h-[500px]">
              <AbstractScene label="Home" />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <TextBlock title="Designed Around Every Sip." center>
              <p>
                Laikfvea combines advanced hydrogen water technology with premium craftsmanship to
                create a beautifully engineered hydration experience.
              </p>
              <p className="mt-5">
                Every material, every detail and every interaction has been carefully considered,
                from the bottle body to the precision electrolysis system inside.
              </p>
            </TextBlock>
            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Five-Minute Cycle", "Transform ordinary drinking water into hydrogen-rich water in a single cycle."],
                ["SPE / PEM Technology", "Engineered to support clean, consistent hydrogen generation."],
                ["Premium Materials", "Crafted with refined materials designed for everyday use."],
                ["USB-C Rechargeable", "Simple charging for home, work, travel and daily routines."]
              ].map(([title, copy]) => (
                <article key={title} className="rounded-brand bg-white p-7 shadow-soft">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="technology" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <TextBlock title="Every Detail Has a Purpose.">
                <p>
                  Explore the craftsmanship behind every component. From the electrolysis chamber to
                  the charging system, each detail is designed to make better hydration feel effortless.
                </p>
              </TextBlock>
              <div className="rounded-brand bg-canvas p-5 shadow-[0_24px_80px_rgba(28,28,28,0.06)] sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
                  <ProductStage
                    src={proBottle}
                    alt="Laikfvea PRO bottle detail view"
                    className="min-h-[540px] bg-white"
                    imageClassName="scale-[1.16]"
                  />
                  <div>
                    <div className="grid gap-3">
                      {detailItems.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelectedDetail(item)}
                          className={`rounded-brand border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-accent ${
                            selectedDetail === item
                              ? "border-ink bg-white shadow-[0_14px_36px_rgba(28,28,28,0.075)]"
                              : "border-ink/8 bg-white/55 hover:bg-white"
                          }`}
                        >
                          <span className="text-sm font-semibold text-ink">{item}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 rounded-brand border border-ink/6 bg-white p-8 shadow-[0_22px_60px_rgba(28,28,28,0.06)]">
                      <h3 className="text-xl font-semibold text-ink">{selectedDetail}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{detailCopy[selectedDetail]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <TextBlock title="One Button. Five Minutes." center>
              <p>
                Creating hydrogen-rich water should feel effortless. Fill your bottle with drinking
                water, press once, and let Laikfvea prepare fresh hydrogen-rich water while you get on
                with your day.
              </p>
            </TextBlock>
            <div className="mt-16 grid gap-4 lg:grid-cols-4">
              {[
                ["01", "Fill", "Add clean drinking water."],
                ["02", "Press", "Start the cycle with one button."],
                ["03", "Generate", "Hydrogen bubbles form inside the bottle."],
                ["04", "Enjoy", "Drink fresh hydrogen-rich water after the cycle completes."]
              ].map(([number, title, copy]) => (
                <article key={title} className="relative rounded-brand border border-ink/7 bg-white p-7 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{number}</p>
                  <h3 className="mt-12 text-2xl font-semibold text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <TextBlock title="Precision Inside Every Sip." center>
              <p>
                Every Laikfvea bottle is built around carefully selected materials and hydrogen
                generation technology designed for consistent daily performance.
              </p>
            </TextBlock>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "SPE / PEM Electrolysis",
                "Titanium Electrodes",
                "Platinum Coating",
                "Borosilicate Glass",
                "USB-C Charging",
                "Up to 9000 PPB"
              ].map((item) => (
                <article key={item} className="rounded-brand bg-white p-7 shadow-soft">
                  <h3 className="text-lg font-semibold text-ink">{item}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Carefully specified to support a refined, consistent daily hydration experience.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-6 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-brand bg-white p-8 shadow-soft sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
                Experience Everyday Hydration, Elevated.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Designed with premium materials, advanced hydrogen technology and effortless usability,
                Laikfvea brings a more considered approach to everyday hydration.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <AmazonButton />
                <SecondaryButton href="#products">Compare Models</SecondaryButton>
              </div>
            </div>
            <ProductStage
              src={proBottle}
              alt="Laikfvea PRO hydrogen water bottle"
              className="min-h-[460px]"
              imageClassName="scale-[1.18]"
            />
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
