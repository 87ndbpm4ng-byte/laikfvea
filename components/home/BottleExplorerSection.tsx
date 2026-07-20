"use client";

import { useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

type BottleFeature = (typeof homepageContent.bottleExplorer.details)[number];

function DetailPanel({ feature }: { feature: BottleFeature }) {
  return (
    <div data-selected-detail className="mt-10 max-w-[420px] rounded-brand border border-ink/8 bg-panel/70 p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Selected detail</p>
      <h3 className="mt-4 text-2xl font-semibold text-ink">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{feature.body}</p>
    </div>
  );
}

function ConnectorLine({ feature, active }: { feature: BottleFeature; active: boolean }) {
  const direction = feature.label.x < feature.marker.x ? "right" : "left";

  return (
    <span
      className={`absolute top-1/2 h-px origin-left transition ${
        active ? "bg-ink/60" : "bg-ink/20 group-hover:bg-ink/38"
      }`}
      style={{
        width: `${feature.line.width}px`,
        rotate: `${feature.line.rotate}deg`,
        [direction === "right" ? "left" : "right"]: "calc(100% - 4px)"
      }}
      aria-hidden="true"
    />
  );
}

function HotspotLabel({
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
      aria-pressed={active}
      aria-label={`Show ${feature.title} detail`}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onPointerDown={onSelect}
      className="group absolute hidden min-h-10 w-[156px] rounded-full outline-none lg:block xl:w-[174px]"
      style={{ left: `${feature.label.x}%`, top: `${feature.label.y}%` }}
    >
      <ConnectorLine feature={feature} active={active} />
      <span
        className={`relative z-10 inline-flex w-full items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas ${
          active
            ? "border-ink/28 bg-white text-ink"
            : "border-ink/8 bg-white/74 text-ink/58 group-hover:border-ink/18 group-hover:text-ink"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full border transition ${
            active ? "scale-125 border-ink bg-ink" : "border-ink/30 bg-white"
          }`}
          aria-hidden="true"
        />
        <span className="truncate">{feature.title}</span>
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
      className={`absolute hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas lg:flex ${
        active
          ? "scale-110 border-ink bg-white"
          : "border-ink/12 bg-white/78 hover:scale-105"
      }`}
      style={{ left: `${feature.marker.x}%`, top: `${feature.marker.y}%` }}
    >
      <span className={`h-2 w-2 rounded-full ${active ? "bg-ink" : "bg-ink/45"}`} />
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
    <div
      data-product-canvas
      className="relative overflow-hidden rounded-[24px] border border-ink/6 bg-[#F6F7F6] p-5 shadow-[0_24px_80px_rgba(28,28,28,0.055)] sm:p-7 lg:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(167,216,245,0.18),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.86),transparent_38%)]" />

      <div className="relative mx-auto min-h-[500px] max-w-[760px] sm:min-h-[620px] lg:min-h-[660px]">
        <div className="absolute bottom-[13%] left-1/2 h-12 w-[34%] -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />

        <div className="absolute inset-y-[13%] left-1/2 w-[42%] max-w-[260px] -translate-x-1/2 sm:w-[34%] lg:w-[30%]">
          <ProductImage
            src={products.pro.image}
            alt="Laikfvea PRO bottle interactive detail view"
            priority
            sizes="(min-width: 1024px) 22vw, 62vw"
            className="scale-100"
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
          <HotspotLabel
            key={`${feature.title}-label`}
            feature={feature}
            active={selected.title === feature.title}
            onSelect={() => onSelect(feature)}
          />
        ))}
      </div>

      <MobileSelector features={features} selected={selected} onSelect={onSelect} />
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
