export const productImages = {
  go: "/go/go-transparent.png",
  pro: "/pro/pro-transparent.png",
  logoBlack: "/logos/logo black.svg"
};

export const products = {
  go: {
    name: "GO",
    image: productImages.go,
    alt: "Laikfvea GO hydrogen water bottle",
    tagline: "Simple. Portable. Everyday.",
    description:
      "Designed for convenient daily hydrogen-rich water at home, at work, at the gym and while travelling.",
    specs: [
      "400 ml capacity",
      "Up to 1500 PPB hydrogen concentration",
      "5-minute enrichment cycle",
      "SPE/PEM technology",
      "USB-C charging",
      "Borosilicate glass body"
    ]
  },
  pro: {
    name: "PRO",
    image: productImages.pro,
    alt: "Laikfvea PRO hydrogen water bottle",
    tagline: "Advanced hydration technology.",
    description:
      "Designed for users seeking higher hydrogen concentration, greater control and additional wellness functionality.",
    specs: [
      "350 ml capacity",
      "Up to 9000 PPB hydrogen concentration",
      "3-minute and 18-minute enrichment modes",
      "Bluetooth app control",
      "Hydrogen inhalation",
      "Mineralization option",
      "USB-C charging"
    ]
  }
};
