"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { projects } from "@/utils/links";
import Image from "next/image";


const MODAL_SIZES = {
  large: {
    width: 400,
    height: 270
  },
  xLarge: {
    width:500,
    height:400
  },
};
function ProjectGallery() {

  const containerRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const handelMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const mouseProgressX = clientX - left;
    const mouseProgressY = clientY - top;
    setModalPosition({ x: mouseProgressX, y: mouseProgressY });
  };
  const handleMouseEnter = () => setModalOpen(true);
  const handleMouseLeave = () => setModalOpen(false);
  return (
    <section className="overflow-hidden">
      <MaxWidthWrapper className="">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-4 lg:mb-6 xl:mb-8">
            Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Here’s a selection of projects I’ve worked on, showcasing my
            expertise in web development, UI/UX design
          </p>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          className="min-h-96 mb-24 relative flex flex-col"
        >
          {/* MODAL */}
          <AnimatePresence mode="wait">
            {modalOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  left: modalPosition.x,
                  top: modalPosition.y,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  left: {
                    type: "tween",
                    duration: 0.07,
                  },
                  top: {
                    type: "tween",
                    duration: 0.07,
                  },
                }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute w-[500px] h-[400px] pointer-events-none overflow-hidden"
              >
                <motion.div
                  animate={{
                    x: `-${hoveredProjectIndex}00%`,
                    transition: { type: "tween", duration: 0.5 },
                  }}
                  key={"inner"}
                  className="flex w-full h-full"
                >
                  {projects.map((project) => {
                    return (
                      <div
                        key={project.index}
                        style={{ background: project.primaryColor }}
                        className="w-full h-full shrink-0 grid place-items-center"
                      >
                        <Image
                          src={project.image}
                          width={500 - 30}
                          height={400}
                          alt={project.label}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* VIEW BUTTON */}
          <AnimatePresence mode="wait">
            {modalOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{
                  left: modalPosition.x,
                  top: modalPosition.y,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  left: {
                    type: "tween",
                    duration: 0.02,
                  },
                  top: {
                    type: "tween",
                    duration: 0.02,
                  },
                }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute size-24 z-20 bg-blue-500 pointer-events-none rounded-full font-bold text-white grid place-items-center"
              >
                View
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            {projects.map((project) => {
              return (
                <div
                  key={project.label}
                  onMouseMove={handelMouseMove}
                  onMouseOver={() => setHoveredProjectIndex(project.index)}
                  className="w-full py-8 px-6 flex items-center justify-between group cursor-pointer border-b-2 hover:border-b-gray-700 duration-500 transition-all hover:px-24 hover:text-gray-500 "
                >
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold capitalize">
                    {project.label}
                  </h4>
                  <p className="font-semibold text-2xl ">2023</p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectGallery;
