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
  lid: { left: 50, top: 18, width: 88, height: 56 },
  body: { left: 50, top: 45, width: 126, height: 188 },
  chamber: { left: 50, top: 67, width: 118, height: 78 },
  charging: { left: 55, top: 80, width: 78, height: 54 },
  base: { left: 50, top: 91, width: 116, height: 46 }
};

function FeatureCard({ feature }: { feature: BottleFeature }) {
  return (
    <div className="mt-10 max-w-[440px] rounded-brand border border-ink/8 bg-panel/70 p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected detail</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <h3 className="mt-4 text-2xl font-semibold text-ink">{feature.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{feature.body}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductStage({ feature }: { feature: BottleFeature }) {
  const reduceMotion = useReducedMotion();
  const highlight = highlightMap[feature.highlightTarget];

  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[24px] bg-[#F6F7F6] sm:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(167,216,245,0.14),transparent_35%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.86),transparent_38%)]" />
      <div className="absolute bottom-[10%] left-1/2 h-16 w-[38%] -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />

      <motion.div
        className="absolute inset-y-[1%] left-1/2 w-[68%] max-w-[520px] -translate-x-1/2 sm:w-[54%] lg:w-[58%]"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.highlightTarget}
            className="pointer-events-none absolute z-10 rounded-full bg-white/74 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
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
    <div className="mt-8 flex items-center justify-center gap-6">
      <button
        type="button"
        onClick={onPrevious}
        className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
      >
        Previous
      </button>
      <div className="flex items-center gap-2" aria-label="Feature selector">
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show feature ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white ${
              current === index ? "w-6 bg-ink" : "w-2.5 bg-ink/18 hover:bg-ink/34"
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white"
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
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center xl:gap-20">
          <div>
            <SectionHeading title={content.heading}>
              <p>{content.body}</p>
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
