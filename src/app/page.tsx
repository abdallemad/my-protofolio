import HeroSection from "@/components/landing/hero-secontion";
import AboutSection from '@/components/landing/about-section'
import ServicesSection from "@/components/landing/services-section";
import ProjectGallery from "@/components/project-gallery/magnetic-modal";
export default function Home() {

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectGallery />
      <ServicesSection />
    </main>
  );
}
