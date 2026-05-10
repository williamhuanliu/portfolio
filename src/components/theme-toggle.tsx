"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";
const THEMES: ThemePreference[] = ["system", "light", "dark"];

function applyTheme(theme: ThemePreference) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }

  document.documentElement.dataset.theme = theme;
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme: ThemePreference): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme = THEMES.includes(stored as ThemePreference)
      ? (stored as ThemePreference)
      : "system";

    setTheme(initialTheme);
    setResolvedTheme(resolveTheme(initialTheme));
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => setResolvedTheme(getSystemTheme());

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const nextTheme: Exclude<ThemePreference, "system"> =
    resolvedTheme === "dark" ? "light" : "dark";
  const Icon = nextTheme === "dark" ? Moon : Sun;
  const currentLabel = resolvedTheme === "dark" ? "深色" : "浅色";
  const nextLabel = nextTheme === "dark" ? "深色" : "浅色";

  return (
    <button
      type="button"
      aria-label={`切换到${nextLabel}主题，当前为${currentLabel}主题`}
      title={`切换到${nextLabel}主题`}
      onClick={() => {
        setTheme(nextTheme);
        setResolvedTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      }}
      className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--border-subtle)] text-[var(--text-tertiary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
    >
      <Icon className="h-4 w-4" strokeWidth={1.6} />
    </button>
  );
}
