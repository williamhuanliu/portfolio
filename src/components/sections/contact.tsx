"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/i18n/dictionary-provider";

export function ContactSection() {
  const { dict } = useDictionary();
  const t = dict.contact;

  return (
    <section id="contact" className="section-shell border-t border-[var(--border-subtle)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] px-8 py-14 text-center sm:px-16"
        >
          <p className="section-kicker relative">{t.kicker}</p>
          <h2 className="relative mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm text-[var(--text-secondary)] leading-relaxed">
            {t.subtitle}
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="mailto:williamhuanliu@gmail.com"
              className="inline-flex max-w-full items-center gap-3 rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] px-5 py-3 text-[var(--text-primary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
            >
              <Mail className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
              <span className="truncate font-mono text-sm tracking-wide sm:text-base">
                williamhuanliu@gmail.com
              </span>
            </Link>
            <Link
              href="tel:13682370883"
              className="inline-flex max-w-full items-center gap-3 rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] px-5 py-3 text-[var(--text-primary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--accent)]"
            >
              <Phone className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
              <span className="font-mono text-sm tracking-wide sm:text-base">13682370883</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
