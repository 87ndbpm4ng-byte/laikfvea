"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BottleFeature = (typeof homepageContent.bottleExplorer.details)[number];

const chipPositions = [
  { left: 50, top: 8 },
  { left: 17, top: 44 },
  { left: 82, top: 44 },
  { left: 22, top: 72 },
  { left: 50, top: 88 }
];

const highlightPositions = [
  { left: 50, top: 18, width: 86, height: 54 },
  { left: 50, top: 45, width: 118, height: 178 },
  { left: 50, top: 67, width: 112, height: 72 },
  { left: 54, top: 80, width: 74, height: 52 },
  { left: 50, top: 91, width: 112, height: 44 }
];

function DetailPanel({ feature }: { feature: BottleFeature }) {
  return (
    <div
      data-selected-detail
      className="mt-8 hidden max-w-[420px] rounded-brand border border-ink/8 bg-panel/70 p-5 lg:block"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected detail</p>
      <h3 className="mt-3 text-xl font-semibold text-ink">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
    </div>
  );
}

function FeatureChip({
  feature,
  active,
  position,
  onSelect,
  index
}: {
  feature: BottleFeature;
  active: boolean;
  position: { left: number; top: number };
  onSelect: () => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      aria-label={`Show ${feature.title} detail`}
      aria-pressed={active}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onPointerDown={onSelect}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 hidden min-h-10 -translate-x-1/2 items-center rounded-full border px-4 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas lg:inline-flex ${
        active
          ? "scale-[1.03] border-ink bg-ink text-white"
          : "border-ink/8 bg-white text-ink/68 hover:border-ink/20 hover:text-ink"
      }`}
      style={{ left: `${position.left}%`, top: `${position.top}%` }}
    >
      {feature.title}
    </motion.button>
  );
}

function MobileAccordion({
  features,
  selected,
  onSelect
}: {
  features: BottleFeature[];
  selected: BottleFeature;
  onSelect: (feature: BottleFeature) => void;
}) {
  return (
    <div className="relative mt-6 grid gap-3 lg:hidden" aria-label="Bottle details">
      {features.map((feature) => {
        const active = selected.title === feature.title;

        return (
          <div key={feature.title} className="rounded-brand border border-ink/8 bg-white/70">
            <button
              type="button"
              aria-label={`Show ${feature.title} detail`}
              aria-expanded={active}
              onClick={() => onSelect(feature)}
              onFocus={() => onSelect(feature)}
              onPointerDown={() => onSelect(feature)}
              className="flex min-h-12 w-full items-center gap-3 px-4 text-left text-sm font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full border ${active ? "border-ink bg-ink" : "border-ink/28 bg-white"}`}
                aria-hidden="true"
              />
              {feature.title}
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-7 text-muted">{feature.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProductCanvas({
  features,
  selected,
  onSelect
}: {
  features: BottleFeature[];
  selected: BottleFeature;
  onSelect: (feature: BottleFeature) => void;
}) {
  const reduceMotion = useReducedMotion();
  const selectedIndex = Math.max(
    0,
    features.findIndex((feature) => feature.title === selected.title)
  );
  const highlight = highlightPositions[selectedIndex];

  return (
    <div
      data-product-canvas
      className="relative overflow-hidden rounded-[24px] border border-ink/6 bg-[#F6F7F6] p-5 shadow-[0_24px_80px_rgba(28,28,28,0.055)] sm:p-7 lg:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(167,216,245,0.14),transparent_34%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.82),transparent_38%)]" />

      <div className="relative mx-auto min-h-[500px] max-w-[780px] sm:min-h-[620px] lg:min-h-[660px]">
        <div className="absolute bottom-[11%] left-1/2 h-12 w-[34%] -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />

        <motion.div
          className="absolute inset-y-[5%] left-1/2 w-[55%] max-w-[340px] -translate-x-1/2 sm:w-[44%] lg:w-[44%] lg:max-w-[380px]"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="pointer-events-none absolute z-10 rounded-full bg-white/72 blur-xl transition-all duration-300"
            style={{
              left: `calc(${highlight.left}% - ${highlight.width / 2}px)`,
              top: `calc(${highlight.top}% - ${highlight.height / 2}px)`,
              width: `${highlight.width}px`,
              height: `${highlight.height}px`
            }}
          />
          <ProductImage
            src={products.pro.image}
            alt="Laikfvea PRO bottle interactive detail view"
            priority
            sizes="(min-width: 1024px) 30vw, 72vw"
            className="scale-100"
          />
        </motion.div>

        {features.map((feature, index) => (
          <FeatureChip
            key={feature.title}
            feature={feature}
            index={index}
            active={selected.title === feature.title}
            position={chipPositions[index]}
            onSelect={() => onSelect(feature)}
          />
        ))}
      </div>

      <MobileAccordion features={features} selected={selected} onSelect={onSelect} />
    </div>
  );
}

export function BottleExplorerSection() {
  const content = homepageContent.bottleExplorer;
  const features = content.details;
  const [selectedDetail, setSelectedDetail] = useState<BottleFeature>(
    features.find((feature) => feature.title === "Electrolysis Chamber") ?? features[0]
  );

  return (
    <MotionSection id="technology" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center xl:gap-20">
          <div>
            <SectionHeading title={content.heading}>
              <p>{content.body}</p>
            </SectionHeading>
            <DetailPanel feature={selectedDetail} />
          </div>

          <ProductCanvas features={features} selected={selectedDetail} onSelect={setSelectedDetail} />
        </div>
      </div>
    </MotionSection>
  );
}
