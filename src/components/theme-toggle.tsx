'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <Sun className="h-4 w-4 text-accent" />
          ) : (
            <Moon className="h-4 w-4 text-accent" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
