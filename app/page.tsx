
import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Recommendations from '@/components/recommendations';
import SectionDivider from '@/components/sectiondivider';
import Skills from '@/components/skills';
import Image from 'next/image'

export default function Home() {
  return (
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Recommendations/>
      </main>
    
  );
}