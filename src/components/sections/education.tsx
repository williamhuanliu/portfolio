"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="section-shell border-t border-[var(--border-subtle)]"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="section-kicker">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            教育背景与语言
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel hover-lift flex gap-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)]">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--accent)]">2008.09 — 2012.06</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">西安财经大学</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">电子商务 · 本科</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="glass-panel hover-lift flex gap-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)]">
              <Languages className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">语言能力</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                英语：具有良好的英语读写能力以及日常口语能力。
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
