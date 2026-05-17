"use client";

import Link from "next/link";
import { useDictionary } from "@/i18n/dictionary-provider";
import { locales, type Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const { locale, dict } = useDictionary();
  const other = locales.find((l) => l !== locale) as Locale;

  return (
    <Link
      href={`/${other}`}
      className="shrink-0 rounded-full border border-[var(--border-subtle)] px-2.5 py-1 font-mono text-[11px] tracking-wide text-[var(--text-tertiary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
      aria-label={dict.locale.switchAria}
      hrefLang={other}
    >
      {dict.locale[other]}
    </Link>
  );
}
