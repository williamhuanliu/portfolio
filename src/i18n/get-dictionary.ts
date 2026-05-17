import type { Locale } from "@/i18n/config";
import type zh from "@/messages/zh.json";

export type Dictionary = typeof zh;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  zh: () => import("@/messages/zh.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
