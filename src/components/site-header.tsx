"use client";

import { motion } from "framer-motion";

const nav = [
  { href: "#expertise", label: "专长" },
  { href: "#experience", label: "经历" },
  { href: "#project", label: "开源" },
  { href: "#skills", label: "技能" },
  { href: "#education", label: "教育" },
  { href: "#contact", label: "联系" },
];

export function SiteHeader() {
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
            刘欢
          </a>
          <nav className="flex gap-6 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 [&::-webkit-scrollbar]:hidden">
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
        </div>
      </div>
    </motion.header>
  );
}
