'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { contact } from '@/lib/content';

const LINKS: { key: keyof typeof contact; label: string; icon: LucideIcon; href: (v: string) => string }[] = [
  { key: 'email', label: 'Email', icon: Mail, href: (v) => `mailto:${v}` },
  { key: 'github', label: 'GitHub', icon: Github, href: (v) => v },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: (v) => v },
];

const contactLinks = LINKS.filter((l) => contact[l.key]).map((l) => ({
  ...l,
  url: l.href(contact[l.key]),
}));

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-border py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full -z-10 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-muted-foreground">
          // Contact
        </span>
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s build something<span className="text-accent">.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
          Open to internships, collaborations and interesting problems in automation, AI and
          competitive programming.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map(({ key, label, icon: Icon, url }) => (
            <a
              key={key}
              href={url}
              target={key === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Tejas Dharmendra Patel · ARCHITECT.T</p>
        <div className="flex items-center gap-5">
          {contactLinks.map(({ key, label, url }) => (
            <a key={key} href={url} target={key === 'email' ? undefined : '_blank'} rel="noreferrer" className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
