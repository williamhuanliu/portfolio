"use client";

import { useDictionary } from "@/i18n/dictionary-provider";

export function SiteFooter() {
  const { dict } = useDictionary();

  return (
    <footer className="border-t border-[var(--border-subtle)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} {dict.hero.name} · Portfolio
        </p>
        <p className="text-xs text-[var(--text-tertiary)]">{dict.footer.tagline}</p>
      </div>
    </footer>
  );
}
