"use client";

import HeroSection from "@/components/landing/hero-secontion";
import AboutSection from '@/components/landing/about-section'
import ProjectsGallery from "@/components/landing/prject gallery";
export default function Home() {

  return (
    <main className="min-h-[300dvh]">
      <HeroSection />
      <AboutSection />
      <ProjectsGallery />
    </main>
  );
}
