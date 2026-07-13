"use client";

import { useMemo, useState } from "react";
import { products } from "@/config/products";
import { homepageContent } from "@/content/homepage";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProductStage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BottleExplorerSection() {
  const [selectedDetail, setSelectedDetail] = useState("Electrolysis Chamber");
  const detailItems = useMemo(() => Object.keys(homepageContent.bottleExplorer.details), []);
  const content = homepageContent.bottleExplorer;

  return (
    <MotionSection id="technology" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading title={content.heading}>
            <p>{content.body}</p>
          </SectionHeading>
          <div className="rounded-brand bg-canvas p-5 shadow-[0_24px_80px_rgba(28,28,28,0.06)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
              <ProductStage
                src={products.pro.image}
                alt="Laikfvea PRO bottle detail view"
                className="min-h-[540px] bg-white"
                imageClassName="scale-[1.16]"
              />
              <div>
                <div className="grid gap-3">
                  {detailItems.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedDetail(item)}
                      className={`rounded-brand border px-5 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-accent ${
                        selectedDetail === item
                          ? "border-ink bg-white shadow-[0_14px_36px_rgba(28,28,28,0.075)]"
                          : "border-ink/8 bg-white/55 hover:bg-white"
                      }`}
                    >
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-6 rounded-brand border border-ink/6 bg-white p-8 shadow-[0_22px_60px_rgba(28,28,28,0.06)]">
                  <h3 className="text-xl font-semibold text-ink">{selectedDetail}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {content.details[selectedDetail as keyof typeof content.details]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
