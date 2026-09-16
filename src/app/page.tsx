import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Flagships } from '@/components/flagships';
import { ProjectBento } from '@/components/project-bento';
import { IntelligencePorts } from '@/components/intelligence-ports';
import { AchievementIndex } from '@/components/achievement-index';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Flagships />
      <ProjectBento />
      <IntelligencePorts />
      <AchievementIndex />

      <footer className="border-t border-border py-12 text-center font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} ARCHITECT.T // ALL SYSTEMS OPERATIONAL</p>
      </footer>
    </main>
  );
}
