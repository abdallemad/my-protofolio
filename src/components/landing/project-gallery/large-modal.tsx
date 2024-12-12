"use client";
import { useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import Modal from "./modal";
import SectionTitle from "@/components/global/typography/section-title";
import { StaticImageData } from "next/image";
function LargeModal({projects}: {
  projects: {
    label: string;
    primaryColor: string;
    image: StaticImageData;
    index: number;
  }[]
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number>(0);
  const animationFrame = useRef<number | null>(null);
  const handelMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const mouseProgressX = clientX - left;
    const mouseProgressY = clientY - top;

    // Debounce updates using requestAnimationFrame
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      x.set(mouseProgressX);
      y.set(mouseProgressY);
    });
  };

  const handleMouseEnter = () => setModalOpen(true);
  const handleMouseLeave = () => setModalOpen(false);

  console.log("rendering large modal");
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section>
      <MaxWidthWrapper className="">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          className="min-h-96 mb-24 relative flex flex-col"
        >
          <Modal
            hoveredProjectIndex={hoveredProjectIndex}
            modalOpen={modalOpen}
            x={x}
            y={y}
          />

          <div>
            {projects.map((project) => (
              <div
                key={project.label}
                onMouseMove={handelMouseMove}
                onMouseOver={() => setHoveredProjectIndex(project.index)}
                className="w-full py-4 px-6 flex items-center justify-between group cursor-pointer border-b-2 hover:border-b-gray-700 duration-500 transition-all hover:px-24 hover:text-gray-500"
              >
                <SectionTitle className="font-bold lg:mb-8 sm:mb-4">
                  {project.label}
                </SectionTitle>
                <p className="font-semibold text-2xl ">2023</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default LargeModal;
