import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import LoadingScreen from '@/components/LoadingScreen';
import PageTransition, { SectionReveal } from '@/components/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import HireMeSection from '@/components/sections/HireMeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smoother transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <ParticleBackground />
      <Navigation />
      
      <PageTransition isLoaded={showContent}>
        <main>
          <SectionReveal>
            <HeroSection />
          </SectionReveal>
          <SectionReveal>
            <AboutSection />
          </SectionReveal>
          <SectionReveal>
            <SkillsSection />
          </SectionReveal>
          <SectionReveal>
            <ProjectsSection />
          </SectionReveal>
          <SectionReveal>
            <ExperienceSection />
          </SectionReveal>
          <SectionReveal>
            <HireMeSection />
          </SectionReveal>
          <SectionReveal>
            <ContactSection />
          </SectionReveal>
        </main>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </PageTransition>
    </div>
  );
};

export default Index;