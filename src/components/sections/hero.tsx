"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { ProfilePhoto } from "@/components/profile-photo";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 gradient-radial" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-40" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-start px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:justify-center lg:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div className="min-w-0 lg:max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.5 }}
                className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase sm:text-sm"
              >
                Front-end Architecture · Platform Engineering
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
                className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
              >
                <span className="text-[var(--text-primary)]">刘欢</span>
                <span className="text-[var(--text-tertiary)]"> · </span>
                <span className="text-gradient">前端架构与平台工程</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
                className="mt-3 text-base text-[var(--text-secondary)]"
              >
                资深前端工程师 / 前端架构负责人
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5 }}
                className="mt-6 font-mono text-xs text-[var(--text-tertiary)] sm:text-sm"
              >
                <Link href="tel:13682370883" className="transition-colors hover:text-[var(--accent)]">
                  13682370883
                </Link>
                <span className="mx-2 text-white/15">|</span>
                <Link
                  href="mailto:liuhuan_0708@163.com"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  liuhuan_0708@163.com
                </Link>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.55 }}
                className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--text-secondary)] sm:text-base"
              >
                <p>
                  拥有 10 年以上前端开发与架构经验，长期参与数据中台、BI
                  与复杂业务系统建设，具备大规模产品从 0 到 1 的全链路实战背景。
                </p>
                <p>
                  担任腾讯音乐开源 ChatBI 项目{" "}
                  <strong className="font-medium text-[var(--text-primary)]">Supersonic</strong>{" "}
                  前端负责人；在平台化、BI 与 AI Data Agent 方向有完整落地经验，实践大语言模型在分析场景下的工作流编排。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.45 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-sm font-medium text-[var(--bg-base)] transition-opacity hover:opacity-90"
                >
                  工作经历
                </Link>
                <Link
                  href="#project"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] px-6 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
                >
                  开源项目
                </Link>
                <Link
                  href="#expertise"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] px-6 py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
                >
                  专业能力
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex justify-center lg:justify-end"
            >
              <ProfilePhoto />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-20 flex justify-center lg:mt-24"
          >
            <Link
              href="#expertise"
              aria-label="向下滚动"
              className="flex flex-col items-center gap-2 text-[var(--text-tertiary)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
