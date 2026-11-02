'use client';

import { achievements } from '@/lib/content';
import { CertificateRail } from '@/components/ui/certificate-rail';

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

        <CertificateRail />
      </div>
    </section>
  );
}
