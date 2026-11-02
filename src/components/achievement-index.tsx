'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { achievements } from '@/lib/content';
import { cn } from '@/lib/utils';

export function AchievementIndex() {
  return (
    <section id="achievements" className="border-t border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Editorial masthead */}
        <div className="mb-16 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              // Index Nº.001
            </span>
            <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
              The Record
            </h2>
          </div>
          <div className="max-w-sm text-right font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <p>{achievements.length} entries</p>
            <p className="mt-1">
              {achievements[0]?.year} — {achievements[achievements.length - 1]?.year}
            </p>
          </div>
        </div>

        {/* Editorial index rows */}
        <ol className="divide-y divide-border">
          {achievements.map((ach, idx) => (
            <IndexRow key={ach.id} ach={ach} idx={idx} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function IndexRow({
  ach,
  idx,
}: {
  ach: (typeof achievements)[number];
  idx: number;
}) {
  const num = String(idx + 1).padStart(2, '0');
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative py-10 md:py-14"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {/* Number column */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-mono text-sm text-muted-foreground">Nº {num}</span>
        </div>

        {/* Year column */}
        <div className="col-span-3 md:col-span-2">
          <span className="font-serif text-3xl leading-none md:text-5xl">
            {ach.year}
          </span>
        </div>

        {/* Title + description column */}
        <div className="col-span-7 md:col-span-6">
          <h3 className="mb-2 font-serif text-xl leading-tight md:text-2xl">
            {ach.title}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {ach.description}
          </p>
        </div>

        {/* Image column — full-bleed thumbnail */}
        <div className="col-span-12 md:col-span-3">
          {ach.image ? (
            <div
              className={cn(
                'relative aspect-[3/4] w-full',
                'transition-transform duration-500 group-hover:scale-[1.03]',
                'flex items-center justify-center'
              )}
              >
              <Image
                src={ach.image}
                alt={ach.title}
                fill
                sizes="(max-width: 768px) 100vw, 260px"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] w-full bg-muted" />
          )}
        </div>
      </div>
    </motion.li>
  );
}
