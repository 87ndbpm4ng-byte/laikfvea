import { SITE_CONFIG } from "@/config/site";

export const AMAZON_GO_URL = SITE_CONFIG.amazon.go;

export const links = {
  ...SITE_CONFIG.routes,
  amazonGo: AMAZON_GO_URL
};
