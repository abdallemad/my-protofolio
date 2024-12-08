"use client";
import MaxWidthWrapper from "../global/max-width-wrapper";
import ProjectGallery from "./large-modal";
import { useMediaQuery } from "react-responsive";
import SmallProjectsGallery from "./small-project-gallery";
export default function ProjectGalleryWrapper() {
  const isLarge = useMediaQuery({query:'(min-width: 1024px)'});
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-4 lg:mb-6 xl:mb-8">
            Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Here’s a selection of projects I’ve worked on, showcasing my
            expertise in web development, UI/UX design
          </p>
        </div>
      </MaxWidthWrapper>
      {
        isLarge ? (
          <ProjectGallery />
        ) : (
          <SmallProjectsGallery />
        )
      }
    </section>
  );
}
