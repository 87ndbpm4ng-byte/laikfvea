import { products } from "@/config/products";

export const productPageContent = {
  go: {
    hero: {
      label: "LAIKFVEA GO",
      heading: "Simple. Portable. Everyday.",
      body: products.go.description
    },
    specs: products.go.specs
  },
  pro: {
    hero: {
      label: "LAIKFVEA PRO",
      heading: "Advanced hydration technology.",
      body: products.pro.description
    },
    specs: products.pro.specs
  }
};
