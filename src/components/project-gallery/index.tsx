"use client";
import MaxWidthWrapper from "../global/max-width-wrapper";
import ProjectGallery from "./large-modal";
import { useMediaQuery } from "react-responsive";
import SmallProjectsGallery from "./small-project-gallery";
import SectionTitle from "../typography/section-title";
import SubHeading from "../typography/sub-heading";
export default function ProjectGalleryWrapper() {
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center ">
          <SectionTitle className="lg:mb-8 sm:mb-4">Projects</SectionTitle>
          <SubHeading className="font-semibold max-w-[70%] mx-auto mb-4">
            {`Here’s a selection of projects I’ve worked on, showcasing my
            expertise in web development, UI/UX design`}
          </SubHeading>
        </div>
      </MaxWidthWrapper>
      {isLarge ? <ProjectGallery /> : <SmallProjectsGallery />}
    </section>
  );
}
