import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Flagships } from '@/components/flagships';
import { ProjectBento } from '@/components/project-bento';
import { IntelligencePorts } from '@/components/intelligence-ports';
import { AchievementIndex } from '@/components/achievement-index';
import { Contact, SiteFooter } from '@/components/contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Flagships />
      <ProjectBento />
      <IntelligencePorts />
      <AchievementIndex />
      <Contact />

      <SiteFooter />
    </main>
  );
}
