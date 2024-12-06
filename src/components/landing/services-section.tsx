"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import RotatedHoveredCard from "../animated-components/rotated-hovered-card";
import Link from "next/link";
import MagneticRoundedButton from "../animated-components/magnetic-rounded-button";
import { useRef } from "react";
import { FaCode, FaServer, FaPalette } from "react-icons/fa";
function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div ref={containerRef}>
      <MaxWidthWrapper className=" py-12 sm:py-16 lg:py-24">
        <div className="flex max-lg:flex-col gap-8 mb-24 max-w-[1200px] mx-auto">
          <div className="">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 lg:mb-8">
              How Can I Help You
            </h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
              I provide a range of services to help you achieve your goals, from
              developing scalable web applications to designing user-friendly
              interfaces and animations.
            </p>
          </div>
          <motion.div style={{ x, y: x }} className="max-lg:self-end">
            <Link href={"/services"}>
              <MagneticRoundedButton parentClassName="ms:ml-auto max-sm:self-end shrink-0 max-sm:size-32 max-lg:text-sm max-lg:size-44 ">
                Learn More
              </MagneticRoundedButton>
            </Link>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <RotatedHoveredCard className="">
              <FaCode className="size-40 max-xl:mx-auto" />
              <div className="text-center xl:text-left">
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  Front End
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
              </div>
            </RotatedHoveredCard>
          </div>
          <div>
            <RotatedHoveredCard className="">
              <FaServer className="size-40 max-xl:mx-auto" />
              <div className="text-center xl:text-left">
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  Back End
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
              </div>
            </RotatedHoveredCard>
          </div>
          <div className="lg:col-span-2 xl:col-span-1">
            <RotatedHoveredCard className="max-xl:flex lg:gap-2">
              <FaPalette className="size-40" />
              <div>
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  UI / UX
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
              </div>
            </RotatedHoveredCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ServicesSection;
