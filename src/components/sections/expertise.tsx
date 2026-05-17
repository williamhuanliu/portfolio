"use client";

import { motion } from "framer-motion";
import { Bot, LayoutDashboard, UsersRound, Workflow } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";

const icons = [LayoutDashboard, Bot, Workflow, UsersRound] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ExpertiseSection() {
  const { dict } = useDictionary();
  const t = dict.expertise;

  return (
    <section id="expertise" className="section-shell">
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

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch"
        >
          {t.items.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.li
                key={card.title}
                variants={itemVariants}
                className="glass-panel hover-lift relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl p-6 sm:p-7"
              >
                <div className="relative mb-5 grid size-11 shrink-0 place-items-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)] sm:mb-6 sm:size-12">
                  <Icon
                    className="h-5 w-5 text-[var(--accent)] sm:h-6 sm:w-6"
                    strokeWidth={1.35}
                  />
                </div>
                <h3 className="relative shrink-0 text-base font-semibold tracking-tight sm:text-lg">
                  {card.title}
                </h3>
                <p className="relative mt-2 min-h-0 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-3">
                  {card.desc}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
