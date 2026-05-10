"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "portfolio-theme";
const THEMES: ThemePreference[] = ["system", "light", "dark"];

const themeMeta = {
  system: {
    label: "系统",
    icon: Monitor,
  },
  light: {
    label: "浅色",
    icon: Sun,
  },
  dark: {
    label: "深色",
    icon: Moon,
  },
} satisfies Record<ThemePreference, { label: string; icon: typeof Monitor }>;

function applyTheme(theme: ThemePreference) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }

  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme = THEMES.includes(stored as ThemePreference)
      ? (stored as ThemePreference)
      : "system";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  const Icon = themeMeta[theme].icon;

  return (
    <button
      type="button"
      aria-label={`切换主题，当前为${themeMeta[theme].label}`}
      title={`主题：${themeMeta[theme].label}`}
      onClick={() => {
        setTheme(nextTheme);
        applyTheme(nextTheme);

        if (nextTheme === "system") {
          window.localStorage.removeItem(STORAGE_KEY);
        } else {
          window.localStorage.setItem(STORAGE_KEY, nextTheme);
        }
      }}
      className="grid size-8 shrink-0 place-items-center rounded-full border border-[var(--border-subtle)] text-[var(--text-tertiary)] transition-colors hover:border-[var(--border-glow)] hover:text-[var(--text-primary)]"
    >
      <Icon className="h-4 w-4" strokeWidth={1.6} />
    </button>
  );
}
