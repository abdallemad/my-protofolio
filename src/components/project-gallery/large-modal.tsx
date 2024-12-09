"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { projects } from "@/utils/links";
import Image from "next/image";
import Modal from "./modal";
function LargeModal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const animatedX = useSpring(x, { stiffness: 300, damping: 20 });
  const animatedY = useSpring(y, { stiffness: 300, damping: 20 });
  const animatedButtonX = useSpring(x, { stiffness: 300, damping: 10 });
  const animatedButtonY = useSpring(y, { stiffness: 300, damping: 10 });
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
