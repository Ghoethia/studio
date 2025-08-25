import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
