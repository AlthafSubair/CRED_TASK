'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false); // hydration guard

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(saved || (prefersDark ? 'dark' : 'light'));
    setMounted(true);
  }, [setTheme]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  if (!mounted) return null; // Prevents mismatch during hydration

  return <>{children}</>;
}

