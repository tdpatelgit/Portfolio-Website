import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const NAV = [
  { href: '#flagships', label: 'Flagships' },
  { href: '#projects', label: 'Systems' },
  { href: '#intelligence', label: 'Intelligence' },
  { href: '#achievements', label: 'Record' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" className="font-mono text-lg font-bold tracking-tighter">
          ARCHITECT<span className="text-accent">.</span>T
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="h-6 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
