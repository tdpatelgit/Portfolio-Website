'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        System Ready: Engineer Mode Active
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl font-bold tracking-tighter md:text-7xl"
      >
        ARCHITECT<span className="text-accent">.</span>T
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 max-w-xl text-lg text-muted-foreground"
      >
        Engineering scalable automation, resilient software, and AI-driven
        systems — from CRM platforms to autonomous news pipelines.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 h-12 w-px bg-gradient-to-b from-accent to-transparent"
      />
    </section>
  );
}
