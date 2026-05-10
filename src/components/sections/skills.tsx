"use client";

import { motion } from "framer-motion";

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "核心技术",
    items: ["React", "Next.js", "TypeScript", "Node.js (SSR/BFF)"],
  },
  {
    title: "移动端 / 跨领域",
    items: ["React Native", "Unity3D", "C++"],
  },
  {
    title: "数据可视化",
    items: [
      "Three.js（3D 组件）",
      "AntV",
      "ECharts",
      "D3.js",
      "Canvas",
      "SVG",
      "WebGL 渲染机理",
    ],
  },
  {
    title: "AI 落地应用",
    items: ["ChatBI 架构设计", "Data Agent 工作流", "Prompt 调优", "流式交互"],
  },
  {
    title: "工程体系",
    items: ["Turborepo", "Vite", "Webpack", "开源社区维护", "自动化 CI/CD"],
  },
];

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
  return (
    <section
      id="skills"
      className="section-shell border-t border-[var(--border-subtle)]"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div>
            <p className="section-kicker">Stack</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">核心技能</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-5"
        >
          {skillGroups.map((group) => (
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
                    className="rounded-full border border-white/[0.06] bg-[var(--bg-base)]/70 px-3 py-1.5 text-xs leading-none text-[var(--text-secondary)]"
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
