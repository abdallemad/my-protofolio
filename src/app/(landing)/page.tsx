import HeroSection from "@/components/landing/hero-secontion";
import AboutSection from "@/components/landing/about-section";
import ServicesSection from "@/components/landing/services-section";
import ProjectGallery from "@/components/landing/project-gallery";
import { projects } from "@/utils/links";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectGallery
        projects={projects
          .filter((project) => project.featured == true)
          .map((project) => ({
            label: project.label,
            primaryColor: project.primaryColor,
            image: project.image,
            index: project.index,
          }))}
      />
      <ServicesSection />
    </main>
  );
}
