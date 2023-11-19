import { createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./i18n-config";
import { cookies } from "next/headers";

const initI18next: (ns: string) => Promise<i18n> = async (ns) => {
  const cookie = cookies();
  const lng = cookie.get("i18n");
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(ns));
  return i18nInstance;
};

export async function useTranslation(ns?: string, options?: any) {
  const cookie = cookies();
  const lng = cookie.get("i18n")?.value as string;

  const i18nextInstance = await initI18next(ns as string);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
