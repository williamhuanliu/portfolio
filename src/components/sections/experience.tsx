"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const REPO = "https://github.com/tencentmusic/supersonic";

const tencentCoreBullets = [
  "产品规划：主导核心业务需求定义与交互原型，推动技术方案与业务目标对齐。",
  "平台架构：建设企业级 BI 前端体系与 Schema Driven 可视化组件，支撑多业务线分析决策。",
  "Agent 闭环：设计工作流引擎，串联取数、图表匹配与报告生成，提升分析自动化程度。",
  "高性能导出：自研 Node.js SSR 渲染方案，解决千级图表导出的内存瓶颈。",
  "性能调优：结合 Web Worker 与 Canvas 增量渲染，保障万级监控数据平滑交互。",
];

const supersonicBullets = [
  "产品规划：制定开源项目特性与版本路线，持续优化 ChatBI 交互体验。",
  "架构设计：基于 Headless BI 设计语义模型驱动配置体系，解耦业务逻辑与展示层。",
  "AI 交互：实现对话式分析链路，支持流式渲染、多轮上下文与图表推荐。",
];

const pinganBiBullets = [
  "源码重构：改造 Apache Superset 插件层、布局引擎与数据探索模块，增强自助分析能力。",
  "可视化工程：使用 Three.js 与 D3.js 定制 3D 组件和动态图表，兼顾表现力与渲染性能。",
];

const pinganAppBullets = [
  "跨端开发：基于 React Native 从 0 到 1 搭建 APP 架构，完成 iOS / Android 双端交付。",
  "性能调优：优化渲染周期与原生桥接，解决长列表滚动卡顿和多媒体加载瓶颈。",
];

const earlyRoles = [
  {
    period: "2014.08 — 2016.08",
    org: "上海奇赋网络科技有限公司",
    role: "Web 前端开发",
    desc: "负责企业级 Web 应用的研发与交付。",
  },
  {
    period: "2013.06 — 2014.07",
    org: "上海越途网络科技有限公司",
    role: "Unity3D 手机游戏开发",
    desc: "负责核心玩法逻辑实现。",
  },
  {
    period: "2012.07 — 2013.06",
    org: "上海微电子装备有限公司",
    role: "C++ 软件开发",
    desc: "负责半导体精密设备控制软件的研发工作。",
  },
];

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
      <div className="absolute left-0 top-9 hidden h-[calc(100%-4.5rem)] w-px bg-gradient-to-b from-[var(--accent)]/55 via-[var(--border-subtle)] to-transparent md:left-[-2.5rem] md:block" />
      {children}
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-shell border-t border-[var(--border-subtle)]"
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
            <p className="section-kicker">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">工作经历</h2>
          </div>
          <p className="max-w-md text-[var(--text-secondary)] leading-relaxed">
            腾讯音乐期间覆盖企业级 BI、AI Data Agent 与开源 Supersonic；此前于平安智慧城市负责政务级 BI 与智慧教育跨端应用。
          </p>
        </motion.div>

        <div className="space-y-14 md:space-y-18">
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
            <TimelineAside
              period="2020.08 — 至今"
              company="腾讯音乐"
              role="资深前端工程师"
              roleSub="前端架构负责人"
            />
            <CardShell delay={0.06}>
              <p className="mb-6 inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                核心业务：企业级 BI 平台与 AI Data Agent
              </p>
              <BulletList items={tencentCoreBullets} />
              <div className="mt-9 border-t border-[var(--border-subtle)] pt-8">
                <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  开源项目：Supersonic 前端负责人
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
                  <BulletList items={supersonicBullets} />
                </div>
              </div>
            </CardShell>
          </div>

          <div className="section-rule" aria-hidden />

          <div className="relative grid gap-8 md:grid-cols-[minmax(0,220px)_1fr]">
            <TimelineAside
              period="2016.08 — 2020.07"
              company="平安智慧城市"
              role="高级前端工程师"
              delay={0.05}
            />
            <CardShell delay={0.06}>
              <div className="space-y-9">
                <div>
                  <h3 className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                    政务级 BI 系统：智慧城市大数据驾驶舱
                  </h3>
                  <div className="mt-5">
                    <BulletList items={pinganBiBullets} />
                  </div>
                </div>
                <div className="border-t border-[var(--border-subtle)] pt-8">
                  <h3 className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
                    智慧教育 APP
                  </h3>
                  <div className="mt-5">
                    <BulletList items={pinganAppBullets} />
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
            <p className="section-kicker">
              Earlier
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              早期职业经历
            </h3>
            <p className="mt-2 font-mono text-sm text-[var(--text-tertiary)]">2012.07 — 2016.08</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {earlyRoles.map((item, i) => (
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
