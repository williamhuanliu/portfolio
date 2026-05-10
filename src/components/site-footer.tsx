export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} Liu Huan · Portfolio
        </p>
        <p className="text-xs text-[var(--text-tertiary)]">
          个人作品集 · 信息持续更新
        </p>
      </div>
    </footer>
  );
}
