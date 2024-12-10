"use client";
import { projects } from "@/utils/links";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import RotatedHoveredCard from "@/components/ui/animated-components/rotated-hovered-card";
import Image from "next/image";
// bg-[#ef9995] shadow-[#ef9995]
// bg-[#3659b1] shadow-[#3659b1]
// bg-[#16a34a] shadow-[#16a34a]
// bg-[#3b82f6] shadow-[#3b82f6]
// bg-[#313131] shadow-[#313131]

const SmallProjectsGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((project) => {
            return (
              <RotatedHoveredCard
                key={project.index}
                backDropClassName={`sm:h-[450px] sm:w-[450px] w-[300px] h-[400px] bg-${project.primaryColor} bg-[${project.primaryColor}] bg-opacity-40 shadow-2xl shadow-[${project.primaryColor}]`}
                className={`bg-[${project.primaryColor}]`}
              >
                <div 
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(75px)",
                }}
                className="h-full w-full grid place-content-center cursor-pointer">
                  <Image src={project.image} alt="" width={400} height={400} className="group-hover:rotate-[9deg] transition-all duration-500" />
                  <h2 className="text-center font-bold text-xl mt-2">{project.label}</h2>
                </div>
              </RotatedHoveredCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default SmallProjectsGallery;

