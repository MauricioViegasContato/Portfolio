import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import Preloader from '@/components/ui/Preloader';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-neon-purple selection:text-white">
      <Preloader />
      <Hero />
      <Stats />
      <Projects />


    </main>
  );
}
