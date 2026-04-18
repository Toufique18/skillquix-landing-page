'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="px-3 py-2 rounded-lg border">🌓</button>;
  }

  // Cycle: light → dark → system → light
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const icon = theme === 'dark' ? '🌞' : theme === 'light' ? '🌙' : '💻';
  const label = theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System';

  return (
    <button
      onClick={cycleTheme}
      className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1.5"
      title={`Current: ${label}. Click to switch.`}
    >
      <span>{icon}</span>
      {/*<span className="text-xs hidden sm:inline">{label}</span>*/}
    </button>
  );
}