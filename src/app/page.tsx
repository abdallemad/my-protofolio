import HeroSection from "@/components/landing/hero-secontion";
import AboutSection from '@/components/landing/about-section'
import ProjectsGallery from "@/components/landing/prject gallery";
import ServicesSection from "@/components/landing/services-section";
export default function Home() {

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsGallery />
    </main>
  );
}
