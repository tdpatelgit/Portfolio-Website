'use client';

import { motion } from 'framer-motion';
import { Activity, ArrowRight, Network } from 'lucide-react';
import { ports } from '@/lib/content';
import { cn } from '@/lib/utils';

export function IntelligencePorts() {
  return (
    <section id="intelligence" className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Intelligence Ports</h2>
            <p className="max-w-md text-muted-foreground">
              Active automation interfaces bridging disparate data streams.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            <Activity className="h-3 w-3" />
            SYSTEMS_ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ports.map((port) => (
            <motion.div
              key={port.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-xl bg-accent/10 p-2.5">
                  <Network className="h-5 w-5 text-accent" />
                </div>
                <span
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-tighter',
                    port.status === 'active'
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : 'bg-muted-foreground/10 text-muted-foreground'
                  )}
                >
                  {port.status}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold">{port.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{port.description}</p>

              <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                <span>{port.flow}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
