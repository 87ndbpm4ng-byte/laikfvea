"use client";

import { useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BottleFeature = (typeof homepageContent.bottleExplorer.details)[number];

const markerPositions = [
  { x: 41, y: 20 },
  { x: 39, y: 43 },
  { x: 42, y: 65 },
  { x: 44, y: 79 },
  { x: 40, y: 92 }
];

const controlCenters = [22, 39, 56, 73, 88];

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

function Marker({
  feature,
  active,
  index,
  onSelect
}: {
  feature: BottleFeature;
  active: boolean;
  index: number;
  onSelect: () => void;
}) {
  const marker = markerPositions[index];

  return (
    <button
      type="button"
      aria-label={`Show ${feature.title} detail`}
      aria-pressed={active}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onPointerDown={onSelect}
      className={`absolute z-20 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas lg:flex ${
        active ? "scale-105 border-ink bg-white" : "border-ink/12 bg-white/78 hover:scale-105"
      }`}
      style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
    >
      <span className={`h-2 w-2 rounded-full ${active ? "bg-ink" : "bg-ink/42"}`} />
    </button>
  );
}

function ConnectorMap({ selectedIndex }: { selectedIndex: number }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {markerPositions.map((marker, index) => {
        const active = selectedIndex === index;
        const controlY = controlCenters[index];
        const bendX = 56;

        return (
          <path
            key={`${marker.x}-${marker.y}`}
            d={`M ${marker.x} ${marker.y} H ${bendX} V ${controlY} H 67`}
            fill="none"
            stroke="currentColor"
            strokeWidth={active ? 0.48 : 0.32}
            className={active ? "text-ink/62" : "text-ink/30"}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

function ControlStack({
  features,
  selected,
  onSelect
}: {
  features: BottleFeature[];
  selected: BottleFeature;
  onSelect: (feature: BottleFeature) => void;
}) {
  return (
    <div className="absolute bottom-[12%] right-[4%] top-[18%] z-20 hidden w-[36%] max-w-[270px] flex-col justify-between lg:flex">
      {features.map((feature) => {
        const active = selected.title === feature.title;

        return (
          <button
            key={feature.title}
            type="button"
            aria-label={`Show ${feature.title} detail`}
            aria-pressed={active}
            onClick={() => onSelect(feature)}
            onMouseEnter={() => onSelect(feature)}
            onFocus={() => onSelect(feature)}
            onPointerDown={() => onSelect(feature)}
            className={`flex min-h-12 w-full items-center gap-3 rounded-full border px-4 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas ${
              active
                ? "border-ink/30 bg-white text-ink"
                : "border-ink/8 bg-white/64 text-ink/58 hover:border-ink/18 hover:bg-white/82 hover:text-ink"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full border transition ${
                active ? "border-ink bg-ink" : "border-ink/28 bg-white"
              }`}
              aria-hidden="true"
            />
            <span className="whitespace-nowrap">{feature.title}</span>
          </button>
        );
      })}
    </div>
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
  const selectedIndex = Math.max(
    0,
    features.findIndex((feature) => feature.title === selected.title)
  );

  return (
    <div
      data-product-canvas
      className="relative overflow-hidden rounded-[24px] border border-ink/6 bg-[#F6F7F6] p-5 shadow-[0_24px_80px_rgba(28,28,28,0.055)] sm:p-7 lg:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_48%,rgba(167,216,245,0.18),transparent_34%),radial-gradient(circle_at_44%_82%,rgba(255,255,255,0.82),transparent_38%)]" />

      <div className="relative mx-auto min-h-[500px] max-w-[780px] sm:min-h-[620px] lg:min-h-[660px]">
        <div className="absolute bottom-[12%] left-[38%] h-12 w-[30%] -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />

        <div className="absolute inset-y-[8%] left-1/2 w-[48%] max-w-[280px] -translate-x-1/2 sm:w-[38%] lg:left-[38%] lg:w-[38%] lg:max-w-[315px]">
          <ProductImage
            src={products.pro.image}
            alt="Laikfvea PRO bottle interactive detail view"
            priority
            sizes="(min-width: 1024px) 24vw, 64vw"
            className="scale-100"
          />
        </div>

        <ConnectorMap selectedIndex={selectedIndex} />

        {features.map((feature, index) => (
          <Marker
            key={`${feature.title}-marker`}
            feature={feature}
            index={index}
            active={selected.title === feature.title}
            onSelect={() => onSelect(feature)}
          />
        ))}

        <ControlStack features={features} selected={selected} onSelect={onSelect} />
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
