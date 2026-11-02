'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Zap } from 'lucide-react';
import { projects } from '@/lib/content';
import { cn } from '@/lib/utils';

const typeIcon = {
  software: Code2,
  automation: Zap,
  game: Cpu,
};

export function ProjectBento() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        // Satellite work
      </span>
      <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Other Systems</h2>
      <p className="mb-12 text-muted-foreground">
        Smaller, self-contained projects and experiments running alongside the flagships.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = typeIcon[project.type];
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className={cn(
                'flex flex-col justify-between rounded-2xl border border-border bg-card p-6',
                'transition-colors hover:border-accent/50'
              )}
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {project.type}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
