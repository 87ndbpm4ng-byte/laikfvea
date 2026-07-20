"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BottleFeature = (typeof homepageContent.bottleExplorer.details)[number];

const highlightMap: Record<BottleFeature["highlightTarget"], { left: number; top: number; width: number; height: number }> = {
  lid: { left: 50, top: 17, width: 76, height: 48 },
  body: { left: 50, top: 45, width: 118, height: 176 },
  chamber: { left: 50, top: 68, width: 106, height: 64 },
  charging: { left: 55, top: 80, width: 68, height: 44 },
  base: { left: 50, top: 91, width: 104, height: 34 }
};

function FeatureCard({ feature }: { feature: BottleFeature }) {
  return (
    <div className="mt-12 max-w-[410px] rounded-[18px] border border-ink/[0.07] bg-panel/75 p-7 shadow-[0_18px_45px_rgba(28,28,28,0.045)] sm:p-8">
      <p className="text-[0.64rem] font-medium uppercase tracking-[0.22em] text-muted/75">Feature</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <h3 className="mt-5 text-[1.45rem] font-semibold leading-tight text-ink sm:text-[1.65rem]">{feature.title}</h3>
          <p className="mt-4 text-sm leading-[1.85] text-muted sm:text-[0.95rem]">{feature.body}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductStage({ feature }: { feature: BottleFeature }) {
  const reduceMotion = useReducedMotion();
  const highlight = highlightMap[feature.highlightTarget];

  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[28px] bg-[#F6F7F6] sm:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_41%,rgba(167,216,245,0.19),transparent_38%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.92),transparent_40%)]" />
      <div className="absolute bottom-[10%] left-1/2 h-14 w-[36%] -translate-x-1/2 rounded-full bg-ink/12 blur-2xl" />
      <div className="absolute bottom-[13.5%] left-1/2 h-4 w-[20%] -translate-x-1/2 rounded-full bg-white/70 blur-md" />

      <motion.div
        className="absolute inset-y-[2%] left-[23%] w-[76%] max-w-[580px] -translate-x-1/2 sm:inset-y-[-1%] sm:left-[36%] sm:w-[62%] lg:left-[34%] lg:w-[64%]"
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 0.45, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.highlightTarget}
            className="pointer-events-none absolute z-10 rounded-full bg-white/78 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              left: `calc(${highlight.left}% - ${highlight.width / 2}px)`,
              top: `calc(${highlight.top}% - ${highlight.height / 2}px)`,
              width: `${highlight.width}px`,
              height: `${highlight.height}px`
            }}
          />
        </AnimatePresence>
        <ProductImage
          src={products.pro.image}
          alt="Laikfvea PRO bottle detail showcase"
          priority
          sizes="(min-width: 1024px) 38vw, 86vw"
          className="scale-100"
        />
      </motion.div>
    </div>
  );
}

function CarouselNav({
  current,
  total,
  onPrevious,
  onNext,
  onSelect
}: {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-7 flex items-center justify-center gap-5">
      <button
        type="button"
        onClick={onPrevious}
        className="rounded-full border border-ink/[0.08] bg-white px-4 py-2 text-xs font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-ink/18 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
      >
        Previous
      </button>
      <div className="flex items-center gap-2.5" aria-label="Feature selector">
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show feature ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white ${
              current === index ? "w-6 bg-[#111111] shadow-[0_6px_18px_rgba(28,28,28,0.16)]" : "w-2 bg-ink/16 hover:bg-ink/32"
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="rounded-full border border-ink/[0.08] bg-white px-4 py-2 text-xs font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-ink/18 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
      >
        Next
      </button>
    </div>
  );
}

export function BottleExplorerSection() {
  const content = homepageContent.bottleExplorer;
  const features = content.details;
  const [activeIndex, setActiveIndex] = useState(2);
  const [paused, setPaused] = useState(false);
  const activeFeature = features[activeIndex];

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % features.length);
    }, 7000);

    return () => window.clearInterval(id);
  }, [features.length, paused]);

  const goPrevious = () => setActiveIndex((index) => (index - 1 + features.length) % features.length);
  const goNext = () => setActiveIndex((index) => (index + 1) % features.length);

  return (
    <MotionSection id="technology" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.74fr_1.26fr] lg:items-center xl:gap-24">
          <div>
            <SectionHeading title={content.heading}>
              <p className="leading-[1.9]">{content.body}</p>
            </SectionHeading>
            <FeatureCard feature={activeFeature} />
          </div>

          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <ProductStage feature={activeFeature} />
            <CarouselNav
              current={activeIndex}
              total={features.length}
              onPrevious={goPrevious}
              onNext={goNext}
              onSelect={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
