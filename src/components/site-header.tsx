"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useDictionary } from "@/i18n/dictionary-provider";

export function SiteHeader() {
  const { dict } = useDictionary();

  const nav = [
    { href: "#expertise", label: dict.nav.expertise },
    { href: "#experience", label: dict.nav.experience },
    { href: "#project", label: dict.nav.project },
    { href: "#skills", label: dict.nav.skills },
    { href: "#education", label: dict.nav.education },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80 backdrop-blur-xl"
    >
      <div className="px-5 sm:px-8">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between">
          <a
            href="#"
            className="text-sm font-medium tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            {dict.hero.name}
          </a>
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <nav className="flex gap-5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-7 [&::-webkit-scrollbar]:hidden">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 text-sm text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
