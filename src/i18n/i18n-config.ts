import { DEFAULT_LANGUAGE } from "@/config";

export const languages = [DEFAULT_LANGUAGE, "fa"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = DEFAULT_LANGUAGE, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng: DEFAULT_LANGUAGE,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
