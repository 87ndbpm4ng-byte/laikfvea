import { SITE_CONFIG } from "@/config/site";

export const hydrogenInhalationContent = {
  hero: {
    label: "LAIKFVEA PRO",
    heading: "Hydrogen Inhalation",
    body:
      "Experience molecular hydrogen in a new way with the Laikfvea PRO. Designed to combine hydrogen-rich water and inhalation in one elegant device.",
    primaryCta: "Explore PRO",
    primaryHref: SITE_CONFIG.routes.proPage,
    secondaryCta: "Buy on Amazon"
  },
  why: {
    heading: "Why Hydrogen Inhalation?",
    body: [
      "The Laikfvea PRO provides an additional way to experience molecular hydrogen through a dedicated inhalation accessory.",
      "This dual-function design allows users to enjoy hydrogen-rich water or use the inhalation attachment as part of their daily wellness routine."
    ]
  },
  howItWorks: {
    heading: "Simple Setup",
    steps: [
      "Generate Hydrogen",
      "Attach the inhalation tube",
      "Breathe comfortably",
      "Continue your daily routine"
    ]
  },
  dualFunction: {
    heading: "One Device. Two Experiences.",
    cards: [
      {
        title: "Hydrogen Water",
        items: ["Fresh hydrogen-rich water", "Everyday hydration", "Portable design"]
      },
      {
        title: "Hydrogen Inhalation",
        items: ["Dedicated inhalation accessory", "Easy attachment", "Premium all-in-one solution"]
      }
    ]
  },
  premiumDesign: {
    heading: "Designed for Everyday Use",
    features: [
      {
        title: "Premium Materials",
        body: "A refined device experience built around clean surfaces, durable components and considered details."
      },
      {
        title: "Portable Design",
        body: "Compact enough for modern routines, with an all-in-one form that feels composed at home, work or away."
      },
      {
        title: "Easy Maintenance",
        body: "Simple setup and care help keep the inhalation accessory ready when it becomes part of your routine."
      }
    ]
  },
  faq: {
    heading: "Hydrogen Inhalation Questions.",
    items: [
      {
        question: "What is hydrogen inhalation?",
        answer:
          "Hydrogen inhalation introduces molecular hydrogen through a dedicated accessory connected to the Laikfvea PRO."
      },
      {
        question: "How do I use the inhalation attachment?",
        answer:
          "Generate hydrogen with the PRO, attach the inhalation tube, and breathe comfortably as part of your daily wellness routine."
      },
      {
        question: "Can I still use the bottle for hydrogen water?",
        answer:
          "Yes. The PRO is designed as a dual-function device for hydrogen-rich water and hydrogen inhalation."
      },
      {
        question: "How long is a typical inhalation session?",
        answer:
          "Session length depends on your routine and the selected PRO mode. Use the inhalation accessory in a comfortable, considered way."
      }
    ]
  },
  cta: {
    heading: "Experience the Laikfvea PRO",
    primaryCta: "Buy on Amazon",
    secondaryCta: "Compare GO & PRO",
    secondaryHref: SITE_CONFIG.routes.products
  }
};
