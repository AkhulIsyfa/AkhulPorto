'use client';

import { useTheme } from '@/hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center
        hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-surface)]
        transition-all duration-200 cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className="w-4 h-4 text-[var(--color-text-primary)]" />
      ) : (
        <FiSun className="w-4 h-4 text-[var(--color-text-primary)]" />
      )}
    </button>
  );
}
