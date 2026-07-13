"use client";

import { useState } from "react";

export function Accordion({
  items,
  defaultOpenIndex = 0
}: {
  items: Array<{ question: string; answer: string }>;
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="mt-14 divide-y divide-ink/8 rounded-brand border border-ink/8 bg-white shadow-[0_24px_80px_rgba(28,28,28,0.06)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent sm:px-8"
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-ink sm:text-lg">{item.question}</span>
              <span className="text-2xl leading-none text-muted" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-muted sm:px-8 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
