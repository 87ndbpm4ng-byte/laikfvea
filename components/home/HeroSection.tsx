"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homepageContent } from "@/content/homepage";
import { products } from "@/config/products";
import { AmazonButton, SecondaryButton } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

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
      <ProductImage
        src={products.pro.image}
        alt={products.pro.alt}
        priority
        className="scale-[0.98] sm:scale-100 lg:scale-[1.02]"
        sizes="(min-width: 1024px) 62vw, 100vw"
      />
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
