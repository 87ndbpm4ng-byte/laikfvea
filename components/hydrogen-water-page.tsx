"use client";

import { useState } from "react";
import {
  Footer,
  Header,
  MotionSection,
  ProductStage,
  TextBlock,
  proBottle
} from "@/components/home-page";

const faqs = [
  [
    "What is hydrogen water good for?",
    "Hydrogen water contains dissolved molecular hydrogen, which is recognised for its antioxidant properties and its potential role in supporting everyday wellness and balance."
  ],
  [
    "How often should I drink hydrogen water?",
    "Hydrogen water can be enjoyed as part of your normal daily hydration routine and consumed in the same way as ordinary drinking water."
  ],
  [
    "Does hydrogen water support the body’s natural cleansing processes?",
    "Hydration supports the body’s natural functions. Hydrogen water may also complement a balanced lifestyle by supporting everyday cellular balance."
  ],
  [
    "Can hydrogen water support weight management?",
    "Like ordinary water, hydrogen water supports hydration and a healthy lifestyle. It may also complement recovery routines and help maintain balance after physical activity."
  ],
  [
    "Can hydrogen water support an active lifestyle?",
    "Many people include hydrogen water before or after exercise as part of their hydration and recovery routines."
  ],
  [
    "Is hydrogen water flammable or combustible?",
    "Hydrogen water is not flammable. It is drinking water containing a small amount of dissolved molecular hydrogen and is intended to be consumed like ordinary water."
  ]
];

export function HydrogenWaterPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                UNDERSTANDING HYDROGEN WATER
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                Hydrogen Water.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
                A modern approach to everyday hydration, enriched with dissolved molecular hydrogen.
              </p>
            </div>
            <ProductStage
              src={proBottle}
              alt="Laikfvea PRO bottle for hydrogen water"
              priority
              className="min-h-[560px]"
              imageClassName="scale-[1.14]"
            />
          </div>
        </section>

        <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-4xl">
            <TextBlock title="What Is Hydrogen Water?">
              <p>
                Hydrogen water is drinking water infused with dissolved molecular hydrogen, also known
                as H₂.
              </p>
              <p className="mt-5">
                It looks and tastes like ordinary water, but contains additional hydrogen molecules
                associated with antioxidant support, active lifestyles and everyday wellness.
              </p>
            </TextBlock>
          </div>
        </MotionSection>

        <MotionSection className="bg-panel px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <TextBlock title="Why Do People Drink Hydrogen Water?" center>
              <p>
                Hydrogen water is commonly incorporated into daily routines by people looking for a
                simple way to combine hydration with modern wellness habits.
              </p>
            </TextBlock>
            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Everyday Hydration",
                  "A refreshing addition to a regular daily hydration routine."
                ],
                [
                  "Active Lifestyles",
                  "Suitable for people who exercise, travel and maintain demanding schedules."
                ],
                [
                  "Recovery Routines",
                  "Often enjoyed before or after physical activity as part of a balanced recovery routine."
                ],
                [
                  "Overall Wellness",
                  "A simple way to introduce molecular hydrogen into everyday life."
                ]
              ].map(([title, copy]) => (
                <article key={title} className="rounded-brand bg-white p-7 shadow-[0_20px_60px_rgba(28,28,28,0.055)]">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-4xl">
            <TextBlock title="Hydrogen Water Questions." center />
            <div className="mt-14 divide-y divide-ink/8 rounded-brand border border-ink/8 bg-white shadow-[0_24px_80px_rgba(28,28,28,0.06)]">
              {faqs.map(([question, answer], index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={question}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent sm:px-8"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="text-base font-semibold text-ink sm:text-lg">{question}</span>
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
                          {answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </>
  );
}
