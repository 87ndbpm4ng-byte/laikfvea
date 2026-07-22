"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { homepageContent } from "@/content/homepage";
import { products } from "@/config/products";
import { AmazonButton, SecondaryButton } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

function HeroProduct() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.35 });
  const goX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const goY = useTransform(smoothY, [-1, 1], [-6, 6]);
  const proX = useTransform(smoothX, [-1, 1], [14, -14]);
  const proY = useTransform(smoothY, [-1, 1], [8, -8]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x * 2);
    pointerY.set(y * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="relative mx-auto h-[58vh] min-h-[430px] w-full max-w-[520px] sm:h-[60vh] sm:min-h-[500px] sm:max-h-[620px] sm:max-w-[660px] lg:h-[74vh] lg:min-h-[560px] lg:max-h-[720px] lg:max-w-[760px] lg:translate-x-4"
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-x-6 bottom-10 top-8 rounded-full bg-accent/14 blur-3xl" />
      <div className="absolute inset-x-12 top-1/4 h-1/2 rounded-full bg-panel/70 blur-3xl" />

      <div className="relative z-10 grid h-full grid-cols-2 items-end gap-3 md:block">
        <motion.a
          href="/#go"
          aria-label="Explore Laikfvea GO"
          className="group relative flex min-w-0 flex-col items-center outline-none md:absolute md:bottom-[9%] md:left-[5%] md:h-[60%] md:w-[43%] md:min-w-[160px] lg:bottom-[8%] lg:left-[4%] lg:h-[62%]"
          style={{ x: reduceMotion ? 0 : goX, y: reduceMotion ? 0 : goY }}
        >
          <motion.div
            className="flex h-full w-full flex-col items-center md:relative md:block"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-0.8, 0.8, -0.8] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative flex h-[300px] w-full items-end justify-center transition duration-500 group-hover:scale-[1.03] sm:h-[390px] md:h-full md:block">
              <div className="absolute bottom-2 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-ink/12 blur-2xl transition group-hover:bg-ink/16" />
              <ProductImage
                src={products.go.image}
                alt={products.go.alt}
                priority
                sizes="(min-width: 1024px) 26vw, 44vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 min-h-[82px] w-[calc(100%-8px)] max-w-[165px] rounded-brand bg-white/78 px-3 py-3.5 text-left shadow-[0_14px_40px_rgba(28,28,28,0.07)] backdrop-blur-md transition group-hover:-translate-y-0.5 md:absolute md:left-1 md:top-[18%] md:z-10 md:mt-0 md:w-auto md:max-w-none md:px-4 md:py-3 lg:-left-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition group-hover:text-ink">GO</p>
              <p className="mt-1 text-xs font-medium text-muted md:whitespace-nowrap">Compact Everyday Bottle</p>
            </div>
          </motion.div>
        </motion.a>

        <motion.a
          href="/#pro"
          aria-label="Explore Laikfvea PRO"
          className="group relative z-20 flex min-w-0 flex-col items-center outline-none md:absolute md:bottom-[3%] md:right-[1%] md:h-[78%] md:w-[58%] md:min-w-[210px] lg:right-[2%] lg:h-[80%]"
          style={{ x: reduceMotion ? 0 : proX, y: reduceMotion ? 0 : proY }}
        >
          <motion.div
            className="flex h-full w-full flex-col items-center md:relative md:block"
            animate={reduceMotion ? undefined : { y: [0, -13, 0], rotate: [0.8, -0.6, 0.8] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative flex h-[300px] w-full items-end justify-center transition duration-500 group-hover:scale-[1.03] sm:h-[390px] md:h-full md:block">
              <div className="absolute bottom-0 left-1/2 h-16 w-4/5 -translate-x-1/2 rounded-full bg-ink/14 blur-2xl transition group-hover:bg-ink/18" />
              <ProductImage
                src={products.pro.image}
                alt={products.pro.alt}
                priority
                sizes="(min-width: 1024px) 34vw, 56vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 min-h-[82px] w-[calc(100%-8px)] max-w-[165px] rounded-brand bg-white/82 px-3 py-3.5 text-left shadow-[0_14px_40px_rgba(28,28,28,0.075)] backdrop-blur-md transition group-hover:-translate-y-0.5 md:absolute md:right-3 md:top-[12%] md:z-10 md:mt-0 md:w-auto md:max-w-none md:px-4 md:py-3 lg:right-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/72 transition group-hover:text-ink">PRO</p>
              <p className="mt-1 text-xs font-medium text-muted md:whitespace-nowrap">Hydrogen + Inhalation</p>
            </div>
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const content = homepageContent.hero;

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl lg:pb-8"
        >
          <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {content.heading}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">{content.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AmazonButton label={content.primaryCta} />
            <SecondaryButton href={content.secondaryHref}>{content.secondaryCta}</SecondaryButton>
          </div>
        </motion.div>
        <HeroProduct />
      </div>
    </section>
  );
}
