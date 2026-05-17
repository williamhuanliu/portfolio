"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/i18n/dictionary-provider";

const REPO = "https://github.com/tencentmusic/supersonic";

export function FeaturedProjectSection() {
  const { dict } = useDictionary();
  const t = dict.project;

  return (
    <section id="project" className="section-shell border-t border-[var(--border-subtle)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          </div>
          <p className="max-w-md text-[var(--text-secondary)] leading-relaxed">
            {t.subtitlePrefix}{" "}
            <Link href="#experience" className="text-[var(--accent)] underline-offset-4 hover:underline">
              {t.subtitleLink}
            </Link>
            {t.subtitleSuffix}
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-12"
        >
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1 font-mono text-[11px] tracking-wide text-[var(--text-secondary)]">
                {t.badge}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.heading}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {t.desc}
              </p>
              <div className="grid max-w-xl grid-cols-3 gap-3">
                {t.tags.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--surface-border-faint)] bg-[var(--surface-soft)] p-4"
                  >
                    <p className="font-mono text-sm text-[var(--text-primary)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--bg-base)] transition-opacity hover:opacity-90"
              >
                {t.viewRepo}
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-subtle)] px-6 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
              >
                {t.relatedExperience}
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
