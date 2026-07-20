"use client";

import { useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BottleFeature = (typeof homepageContent.bottleExplorer.details)[number];

function HotspotButton({
  feature,
  active,
  onSelect
}: {
  feature: BottleFeature;
  active: boolean;
  onSelect: () => void;
}) {
  const direction = feature.label.x < feature.marker.x ? "right" : "left";

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={`Show ${feature.title} detail`}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onPointerDown={onSelect}
      className="group absolute hidden min-h-11 rounded-full outline-none transition lg:block"
      style={{ left: `${feature.label.x}%`, top: `${feature.label.y}%` }}
    >
      <span
        className={`absolute top-1/2 h-px origin-left transition ${
          active ? "bg-ink" : "bg-ink/24 group-hover:bg-ink/55"
        }`}
        style={{
          width: `${feature.line.width}px`,
          rotate: `${feature.line.rotate}deg`,
          [direction === "right" ? "left" : "right"]: "calc(100% - 6px)"
        }}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] shadow-[0_14px_36px_rgba(28,28,28,0.065)] backdrop-blur-md transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas ${
          active
            ? "border-ink/18 bg-white text-ink"
            : "border-white/75 bg-white/68 text-ink/68 group-hover:border-ink/12 group-hover:bg-white group-hover:text-ink"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full border transition ${
            active ? "scale-125 border-ink bg-ink" : "border-ink/32 bg-white group-hover:scale-110"
          }`}
          aria-hidden="true"
        />
        {feature.title}
      </span>
    </button>
  );
}

function Marker({
  feature,
  active,
  onSelect
}: {
  feature: BottleFeature;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Show ${feature.title} detail`}
      aria-pressed={active}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onPointerDown={onSelect}
      className={`absolute hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas lg:flex ${
        active
          ? "scale-110 border-ink bg-white shadow-[0_10px_30px_rgba(28,28,28,0.14)]"
          : "border-white/80 bg-white/72 shadow-[0_8px_24px_rgba(28,28,28,0.08)] hover:scale-105"
      }`}
      style={{ left: `${feature.marker.x}%`, top: `${feature.marker.y}%` }}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${active ? "bg-ink" : "bg-ink/45"}`} />
    </button>
  );
}

function MobileSelector({
  features,
  selected,
  onSelect
}: {
  features: BottleFeature[];
  selected: BottleFeature;
  onSelect: (feature: BottleFeature) => void;
}) {
  return (
    <div className="-mx-5 mt-6 flex gap-3 overflow-x-auto px-5 pb-2 lg:hidden" aria-label="Bottle details">
      {features.map((feature) => {
        const active = selected.title === feature.title;

        return (
          <button
            key={feature.title}
            type="button"
            aria-label={`Show ${feature.title} detail`}
            aria-pressed={active}
            onClick={() => onSelect(feature)}
            onFocus={() => onSelect(feature)}
            onPointerDown={() => onSelect(feature)}
            className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas ${
              active ? "border-ink bg-white text-ink shadow-[0_12px_30px_rgba(28,28,28,0.08)]" : "border-ink/8 bg-white/58 text-muted"
            }`}
          >
            {feature.title}
          </button>
        );
      })}
    </div>
  );
}

function DetailPanel({ feature }: { feature: BottleFeature }) {
  return (
    <div className="rounded-brand border border-white/80 bg-white/74 p-6 shadow-[0_22px_70px_rgba(28,28,28,0.07)] backdrop-blur-md sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected detail</p>
      <h3 className="mt-4 text-2xl font-semibold text-ink">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{feature.body}</p>
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
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[#F6F7F6] p-5 shadow-[0_28px_90px_rgba(28,28,28,0.07)] sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(167,216,245,0.22),transparent_38%),radial-gradient(circle_at_50%_78%,rgba(255,255,255,0.92),transparent_36%)]" />

      <div className="relative mx-auto min-h-[560px] max-w-[720px] sm:min-h-[680px] lg:min-h-[720px]">
        <div className="absolute bottom-[9%] left-1/2 h-14 w-1/2 -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />
        <div
          className="pointer-events-none absolute h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/24 blur-2xl transition-all duration-500"
          style={{ left: `${selected.marker.x}%`, top: `${selected.marker.y}%` }}
        />

        <div className="absolute inset-y-8 left-1/2 w-[54%] max-w-[330px] -translate-x-1/2 sm:w-[46%] lg:w-[40%]">
          <ProductImage
            src={products.pro.image}
            alt="Laikfvea PRO bottle interactive detail view"
            priority
            sizes="(min-width: 1024px) 28vw, 70vw"
            className="scale-[1.02]"
          />
        </div>

        {features.map((feature) => (
          <Marker
            key={`${feature.title}-marker`}
            feature={feature}
            active={selected.title === feature.title}
            onSelect={() => onSelect(feature)}
          />
        ))}

        {features.map((feature) => (
          <HotspotButton
            key={`${feature.title}-label`}
            feature={feature}
            active={selected.title === feature.title}
            onSelect={() => onSelect(feature)}
          />
        ))}
      </div>

      <MobileSelector features={features} selected={selected} onSelect={onSelect} />

      <div className="relative mt-5 lg:absolute lg:bottom-8 lg:left-8 lg:mt-0 lg:max-w-[360px]">
        <DetailPanel feature={selected} />
      </div>
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
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <SectionHeading title={content.heading}>
            <p>{content.body}</p>
          </SectionHeading>
          <ProductCanvas features={features} selected={selectedDetail} onSelect={setSelectedDetail} />
        </div>
      </div>
    </MotionSection>
  );
}
