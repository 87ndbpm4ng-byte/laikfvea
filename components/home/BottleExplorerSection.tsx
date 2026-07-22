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

const connectorMap: Record<
  BottleFeature["highlightTarget"],
  { hotspotX: number; hotspotY: number; pillY: number }
> = {
  lid: { hotspotX: 47, hotspotY: 18, pillY: 20 },
  body: { hotspotX: 47, hotspotY: 45, pillY: 34 },
  chamber: { hotspotX: 47, hotspotY: 68, pillY: 48 },
  charging: { hotspotX: 50, hotspotY: 81, pillY: 62 },
  base: { hotspotX: 47, hotspotY: 90, pillY: 76 }
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
  const guideX = 62;
  const pillX = 66;

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

      <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {features.map((item, index) => {
          const point = connectorMap[item.highlightTarget];
          const active = index === activeIndex;

          return (
            <motion.path
              key={item.title}
              d={`M ${point.hotspotX} ${point.hotspotY} H ${guideX} V ${point.pillY} H ${pillX}`}
              fill="none"
              stroke={active ? "rgba(28,28,28,0.42)" : "rgba(28,28,28,0.18)"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          );
        })}
        {features.map((item, index) => {
          const point = connectorMap[item.highlightTarget];
          const active = index === activeIndex;

          return (
            <motion.circle
              key={`${item.title}-endpoint`}
              cx={pillX}
              cy={point.pillY}
              r={0.38}
              fill={active ? "rgba(28,28,28,0.38)" : "rgba(28,28,28,0.18)"}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 z-30 hidden lg:block">
        {features.map((item, index) => {
          const point = connectorMap[item.highlightTarget];
          const active = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title} detail`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(index)}
              onMouseEnter={() => onSelect(index)}
              className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#F6F7F6] ${
                active
                  ? "border-ink/55 bg-ink shadow-[0_0_0_3px_rgba(28,28,28,0.075)]"
                  : "border-ink/24 bg-white/80 hover:border-ink/40 hover:bg-white"
              }`}
              style={{ left: `${point.hotspotX}%`, top: `${point.hotspotY}%` }}
            >
              <span className="sr-only">{item.title}</span>
            </button>
          );
        })}
      </div>

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
              className={`flex h-11 w-full items-center gap-3 rounded-full border bg-white/82 px-4 text-left text-[0.72rem] font-semibold text-ink/70 transition duration-200 hover:border-ink/22 hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#F6F7F6] ${
                active
                  ? "border-ink/34 text-ink shadow-[0_12px_28px_rgba(28,28,28,0.07)]"
                  : "border-ink/[0.09]"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition ${active ? "bg-ink" : "bg-ink/24"}`} />
              <span className="whitespace-nowrap">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-6 bottom-6 z-30 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {features.map((item, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title} detail`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(index)}
              className={`shrink-0 rounded-full border bg-white/86 px-4 py-2 text-[0.7rem] font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#F6F7F6] ${
                active ? "border-ink/34 text-ink" : "border-ink/[0.09] text-ink/62"
              }`}
            >
              {item.title}
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
