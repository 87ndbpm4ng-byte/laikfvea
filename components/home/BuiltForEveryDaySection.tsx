"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rowVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function BuiltForEveryDaySection() {
  const content = homepageContent.lifestyle;
  const reduceMotion = useReducedMotion();

  return (
    <section id="everyday-lifestyle" className="bg-white px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow={content.label} title={content.heading} center>
          <p>{content.body}</p>
        </SectionHeading>

        <div className="mt-20 grid gap-10 lg:gap-12">
          {content.features.map((feature, index) => {
            const imageFirst = index !== 1;

            return (
              <motion.article
                key={feature.title}
                className="group grid overflow-hidden rounded-[24px] bg-white shadow-[0_24px_80px_rgba(28,28,28,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(28,28,28,0.085)] lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-stretch"
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                variants={rowVariants}
              >
                <div
                  className={`relative min-h-[340px] overflow-hidden rounded-[24px] bg-[#F4F5F5] sm:min-h-[460px] lg:min-h-[560px] ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.82),rgba(242,244,245,0.48))]" />
                  <div className="absolute inset-5 overflow-hidden rounded-[18px] sm:inset-7">
                    <Image
                      src={feature.image}
                      alt={`${feature.title.toLowerCase()} lifestyle`}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className={`object-center transition duration-700 group-hover:scale-[1.02] ${
                        feature.title === "WORK" ? "object-cover saturate-95" : "object-contain"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`flex min-h-[320px] flex-col justify-center px-8 py-12 sm:px-12 lg:min-h-[560px] lg:px-16 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Everyday Lifestyle
                  </p>
                  <h3 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
                    {feature.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{feature.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
