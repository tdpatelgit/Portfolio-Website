import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="font-mono text-lg font-bold tracking-tighter">
          ARCHITECT<span className="text-accent">.</span>T
        </span>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link href="#projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="#intelligence" className="transition-colors hover:text-foreground">
              Intelligence
            </Link>
            <Link href="#achievements" className="transition-colors hover:text-foreground">
              Records
            </Link>
          </div>
          <div className="h-6 w-px bg-border" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
