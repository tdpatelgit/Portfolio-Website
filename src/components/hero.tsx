'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center"
    >
      {/* Blueprint grid, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      {/* Accent glow behind the title */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

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
        className="text-6xl font-bold tracking-tighter md:text-8xl"
      >
        ARCHITECT<span className="text-accent">.</span>T
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
      >
        Tejas Dharmendra Patel
      </motion.p>

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <Link
          href="#flagships"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          See my work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </motion.div>

      <motion.a
        href="#flagships"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 1 }, y: { delay: 1.2, duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
