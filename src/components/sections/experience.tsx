"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/i18n/dictionary-provider";

const REPO = "https://github.com/tencentmusic/supersonic";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((text, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4 }}
          className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
        >
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
            strokeWidth={1.5}
          />
          <span>{text}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function TimelineAside({
  period,
  company,
  role,
  roleSub,
  delay = 0,
}: {
  period: string;
  company: string;
  role: string;
  roleSub?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="md:sticky md:top-24 md:self-start"
    >
      <p className="font-mono text-xs tracking-wide text-[var(--accent)]">{period}</p>
      <p className="mt-3 text-lg font-semibold leading-snug text-[var(--text-primary)]">{company}</p>
      <p className="mt-2 text-sm font-medium tracking-tight text-[var(--text-secondary)]">{role}</p>
      {roleSub ? <p className="mt-0.5 text-[var(--text-secondary)]">{roleSub}</p> : null}
    </motion.div>
  );
}

function CardShell({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: delay }}
      className="glass-panel relative rounded-3xl p-7 md:p-9"
    >
      <div className="absolute left-0 top-9 hidden h-[calc(100%-4.5rem)] w-px bg-gradient-to-b from-[var(--accent)]/55 via-[var(--border-subtle)] to-transparent md:left-[-2.5rem] md:block" aria-hidden />
      {children}
    </motion.div>
  );
}

export function ExperienceSection() {
  const { dict } = useDictionary();
  const t = dict.experience;
  const tencent = t.tencent;
  const pingan = t.pingan;
  const earlier = t.earlier;

  return (
    <section id="experience" className="section-shell border-t border-[var(--border-subtle)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          </div>
          <p className="max-w-md text-[var(--text-secondary)] leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="space-y-14 md:space-y-18">
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
            <TimelineAside
              period={tencent.period}
              company={tencent.company}
              role={tencent.role}
              roleSub={tencent.roleSub}
            />
            <CardShell delay={0.06}>
              <p className="mb-6 inline-flex rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                {tencent.coreTag}
              </p>
              <BulletList items={tencent.bullets} />
              <div className="mt-9 border-t border-[var(--border-subtle)] pt-8">
                <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  {tencent.ossTitle}
                </h3>
                <Link
                  href={REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-mono text-xs text-[var(--accent)] underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:underline"
                >
                  github.com/tencentmusic/supersonic
                </Link>
                <div className="mt-6">
                  <BulletList items={tencent.ossBullets} />
                </div>
              </div>
            </CardShell>
          </div>

          <div className="section-rule" aria-hidden />

          <div className="relative grid gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
            <TimelineAside
              period={pingan.period}
              company={pingan.company}
              role={pingan.role}
              delay={0.05}
            />
            <CardShell delay={0.06}>
              <div className="space-y-9">
                <div>
                  <h3 className="inline-flex rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                    {pingan.biTag}
                  </h3>
                  <div className="mt-5">
                    <BulletList items={pingan.biBullets} />
                  </div>
                </div>
                <div className="border-t border-[var(--border-subtle)] pt-8">
                  <h3 className="inline-flex rounded-full border border-[var(--surface-border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                    {pingan.appTag}
                  </h3>
                  <div className="mt-5">
                    <BulletList items={pingan.appBullets} />
                  </div>
                </div>
              </div>
            </CardShell>
          </div>

          <div className="section-rule" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker">{earlier.kicker}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{earlier.title}</h3>
            <p className="mt-2 font-mono text-sm text-[var(--text-tertiary)]">{earlier.period}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {earlier.roles.map((item, i) => (
                <motion.li
                  key={item.org}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="glass-panel hover-lift rounded-2xl p-5"
                >
                  <p className="font-mono text-xs text-[var(--accent)]">{item.period}</p>
                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">{item.org}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-tertiary)]">
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
