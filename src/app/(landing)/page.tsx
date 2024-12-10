import HeroSection from "@/components/landing/hero-secontion";
import AboutSection from '@/components/landing/about-section'
import ServicesSection from "@/components/landing/services-section";
import ProjectGallery from "@/components/landing/project-gallery";
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
