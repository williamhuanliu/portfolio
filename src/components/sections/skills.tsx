"use client";

import { motion } from "framer-motion";
import { useDictionary } from "@/i18n/dictionary-provider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SkillsSection() {
  const { dict } = useDictionary();
  const t = dict.skills;

  return (
    <section id="skills" className="section-shell border-t border-[var(--border-subtle)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-5"
        >
          {t.groups.map((group) => (
            <motion.article
              key={group.title}
              variants={cardVariants}
              className="glass-panel hover-lift flex h-full flex-col rounded-3xl p-6"
            >
              <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[var(--surface-border-faint)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs leading-none text-[var(--text-secondary)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
