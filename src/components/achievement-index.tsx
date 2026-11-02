'use client';

import { achievements } from '@/lib/content';
import { CertificateRail } from '@/components/ui/certificate-rail';

const years = achievements.map((a) => Number(a.year));

export function AchievementIndex() {
  return (
    <section id="achievements" className="border-t border-border bg-muted/30 pt-24">
      <div className="mx-auto mb-4 flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // Certificates
          </span>
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">The Record</h2>
          <p className="text-muted-foreground">
            Competitions, hackathons and pathways, hung up on the rail.
          </p>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          {achievements.length} entries · {Math.min(...years)}–{Math.max(...years)}
        </div>
      </div>

      {/* Full-bleed: the rail spans the viewport rather than the content column */}
      <CertificateRail />
    </section>
  );
}
