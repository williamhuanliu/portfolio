"use client";

import { motion } from "framer-motion";
import { Bot, LayoutDashboard, UsersRound, Workflow } from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    title: "复杂平台架构",
    desc: "主导数据中台与 BI 平台前端架构演进，沉淀 Schema-Driven 可视化体系，支撑多业务线分析决策。",
  },
  {
    icon: Bot,
    title: "AI Data Agent",
    desc: "设计 Agent 工作流引擎，串联取数、图表匹配与报告生成，提升分析链路的自动化程度。",
  },
  {
    icon: Workflow,
    title: "LLM 工作流",
    desc: "在数据分析场景中连接语义层、查询与呈现，优化大模型编排的体验、稳定性与可控性。",
  },
  {
    icon: UsersRound,
    title: "开源项目建设",
    desc: "担任腾讯音乐 Supersonic 开源前端负责人，推进 ChatBI 产品体验、前端架构与社区可维护性。",
  },
];

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
  return (
    <section
      id="expertise"
      className="section-shell"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <p className="section-kicker">Expertise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              专业能力
            </h2>
          </div>
          <p className="max-w-md text-[var(--text-secondary)] leading-relaxed">
            产品规划、交互与工程一体推进，让复杂数据能力以清晰、可扩展的方式落地。
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch"
        >
          {items.map((card) => (
            <motion.li
              key={card.title}
              variants={itemVariants}
              className="glass-panel hover-lift relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl p-6 sm:p-7"
            >
              <div className="relative mb-5 grid size-11 shrink-0 place-items-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)] sm:mb-6 sm:size-12">
                <card.icon
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
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
