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
  lid: { left: 47, top: 17, width: 72, height: 44 },
  body: { left: 47, top: 45, width: 112, height: 168 },
  chamber: { left: 47, top: 68, width: 100, height: 60 },
  charging: { left: 50, top: 81, width: 64, height: 42 },
  base: { left: 47, top: 90, width: 100, height: 32 }
};

function FeatureCard({ feature }: { feature: BottleFeature }) {
  return (
    <div className="mt-12 max-w-[410px] rounded-[18px] border border-ink/[0.07] bg-panel/75 p-8 shadow-[0_18px_45px_rgba(28,28,28,0.045)] sm:p-9">
      <p className="text-[0.58rem] font-medium uppercase tracking-[0.24em] text-muted/75">Feature</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={feature.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <h3 className="mt-6 text-[1.45rem] font-semibold leading-tight text-ink sm:text-[1.65rem]">{feature.title}</h3>
          <p className="mt-5 text-sm leading-[1.85] text-muted sm:text-[0.95rem]">{feature.body}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductStage({
  features,
  activeIndex,
  onSelect
}: {
  features: BottleFeature[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const feature = features[activeIndex];
  const highlight = highlightMap[feature.highlightTarget];

  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[28px] bg-[#F6F7F6] sm:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_41%,rgba(167,216,245,0.19),transparent_38%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.92),transparent_40%)]" />
      <div className="absolute bottom-[10%] left-[28%] h-14 w-[34%] -translate-x-1/2 rounded-full bg-ink/12 blur-2xl" />
      <div className="absolute bottom-[13.5%] left-[28%] h-4 w-[18%] -translate-x-1/2 rounded-full bg-white/70 blur-md" />

      <motion.div
        className="absolute inset-y-[4%] left-[17%] w-[78%] max-w-[650px] -translate-x-1/2 sm:inset-y-[1%] sm:left-[19%] sm:w-[71%] lg:left-[12%] lg:w-[69%]"
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

      <div className="absolute right-[9%] top-1/2 z-30 hidden w-[25%] -translate-y-1/2 flex-col gap-5 lg:flex">
        {features.map((item, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title} detail`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(index)}
              onMouseEnter={() => onSelect(index)}
              className={`flex h-11 w-full items-center gap-3 rounded-full border bg-white/82 px-4 text-left text-[0.72rem] font-semibold text-ink/70 transition duration-300 hover:border-ink/22 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#F6F7F6] ${
                active
                  ? "border-ink/34 text-ink shadow-[0_12px_28px_rgba(28,28,28,0.055)]"
                  : "border-ink/[0.09]"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition duration-300 ${active ? "bg-ink" : "bg-ink/24"}`} />
              <span className="whitespace-nowrap">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-6 bottom-6 z-30 flex flex-col gap-2 lg:hidden">
        {features.map((item, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title} detail`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(index)}
              className={`flex h-10 w-full items-center gap-3 rounded-full border bg-white/86 px-4 text-left text-[0.7rem] font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#F6F7F6] ${
                active ? "border-ink/34 text-ink" : "border-ink/[0.09] text-ink/62"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition duration-300 ${active ? "bg-ink" : "bg-ink/24"}`} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
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
            <ProductStage features={features} activeIndex={activeIndex} onSelect={setActiveIndex} />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
