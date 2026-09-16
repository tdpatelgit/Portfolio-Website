'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Boxes,
  Cpu,
  LineChart,
  Network,
  Server,
  Sparkles,
  TerminalSquare,
  Zap,
} from 'lucide-react';
import { flagships, type Flagship } from '@/lib/content';
import { cn } from '@/lib/utils';

const ACCENT: Record<
  Flagship['accent'],
  {
    ring: string;
    dot: string;
    chip: string;
    orb: string;
    icon: React.ComponentType<{ className?: string }>;
    detailIcons: React.ComponentType<{ className?: string }>[];
  }
> = {
  ledger: {
    ring: 'ring-amber-500/25',
    dot: 'bg-amber-500',
    chip: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    orb: 'from-amber-500/25',
    icon: LineChart,
    detailIcons: [Boxes, Server, TerminalSquare],
  },
  hermes: {
    ring: 'ring-cyan-500/25',
    dot: 'bg-cyan-500',
    chip: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    orb: 'from-cyan-500/25',
    icon: Network,
    detailIcons: [Zap, Cpu, Sparkles],
  },
};

export function Flagships() {
  return (
    <section id="flagships" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-muted-foreground">
          // Featured work
        </span>
        <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          Flagship Systems
        </h2>
        <p className="text-muted-foreground">
          Two long-running builds that anchor the rest of my work — one that runs a real
          business, and one that runs my own workflow.
        </p>
      </div>

      <div className="space-y-8">
        {flagships.map((f, idx) => (
          <FlagshipCard key={f.id} flagship={f} index={idx} />
        ))}
      </div>
    </section>
  );
}

function FlagshipCard({ flagship, index }: { flagship: Flagship; index: number }) {
  const skin = ACCENT[flagship.accent];
  const Icon = skin.icon;
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-border bg-card p-8 ring-1 md:p-12',
        skin.ring
      )}
    >
      {/* Ambient glow */}
      <div
        className={cn(
          'pointer-events-none absolute -top-32 h-72 w-72 rounded-full bg-gradient-radial to-transparent opacity-60 blur-3xl',
          skin.orb,
          reversed ? '-right-24' : '-left-24'
        )}
      />

      <div
        className={cn(
          'relative grid gap-10 md:grid-cols-5 md:items-start',
          reversed && 'md:[direction:rtl]'
        )}
      >
        {/* Left / textual column */}
        <div
          className={cn('md:col-span-3 space-y-6', reversed && 'md:[direction:ltr]')}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl border',
                skin.chip
              )}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
              {flagship.eyebrow}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              {flagship.title}
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">{flagship.tagline}</p>
          </div>

          <p className="max-w-xl leading-relaxed text-foreground/85">
            {flagship.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {flagship.tech.map((t) => (
              <span
                key={t}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium',
                  skin.chip
                )}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-4 font-mono text-xs text-muted-foreground">
            <span className={cn('h-1.5 w-1.5 animate-pulse rounded-full', skin.dot)} />
            LIVE_SYSTEM
          </div>
        </div>

        {/* Right / highlights column */}
        <div
          className={cn(
            'md:col-span-2 space-y-3',
            reversed && 'md:[direction:ltr]'
          )}
        >
          {flagship.highlights.map((h, i) => {
            const DetailIcon = skin.detailIcons[i % skin.detailIcons.length];
            return (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-background/40 p-4 backdrop-blur"
              >
                <div className="mb-1 flex items-center gap-2">
                  <DetailIcon className={cn('h-3.5 w-3.5', skin.chip.split(' ')[0])} />
                  <span className="text-sm font-semibold">{h.label}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>
            );
          })}
          <div className="flex items-center justify-end gap-2 pt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>Case study soon</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
