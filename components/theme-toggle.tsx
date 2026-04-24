"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isHydrated = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!isHydrated) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/25 bg-[#f8f9fc] text-[#1f2937] shadow-sm transition"
      >
        <span className="h-[18px] w-[18px]" />
      </button>
    );
  }

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/25 bg-[#f8f9fc] text-[#1f2937] shadow-sm transition hover:scale-105"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
