"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { projects } from "@/utils/links";
import Image from "next/image";

function LargeModal() {
  const showLargeModalWidth = 1024;
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
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
      setModalPosition({ x: mouseProgressX, y: mouseProgressY });
    });
  };

  const handleMouseEnter = () => setModalOpen(true);
  const handleMouseLeave = () => setModalOpen(false);

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
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute xl:w-[500px] xl:h-[400px] w-[400px] h-[270px] pointer-events-none overflow-hidden"
              >
                <motion.div
                  animate={{
                    x: `-${hoveredProjectIndex}00%`,
                    transition: { type: "spring", duration: 0.5 },
                  }}
                  className="flex w-full h-full"
                >
                  {projects.map((project) => (
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
                        className="xl:w-[calc(100%-1rem)] lg:w-[calc(100%-0.5rem)]"
                      />
                    </div>
                  ))}
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
                  background: projects.filter(
                    (project) => project.index == hoveredProjectIndex
                  )[0].primaryColor,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute xl:size-24 size-20 z-20 pointer-events-none rounded-full font-bold text-white grid place-items-center"
              >
                View
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            {projects.map((project) => (
              <div
                key={project.label}
                onMouseMove={handelMouseMove}
                onMouseOver={() => setHoveredProjectIndex(project.index)}
                className="w-full py-8 px-6 flex items-center justify-between group cursor-pointer border-b-2 hover:border-b-gray-700 duration-500 transition-all hover:px-24 hover:text-gray-500"
              >
                <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold capitalize">
                  {project.label}
                </h4>
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
