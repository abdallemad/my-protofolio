"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import SkillCard from "../ui/skill-card";
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
              Building your vision into reality with tailored web solutions,
              we&apos;re here to transform your ideas into functional,
              user-friendly digital experiences. With a focus on clean code and
              innovation, we deliver high-quality solutions that exceed your
              expectations.
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
            <SkillCard className="">
              <FaCode className="size-40 max-xl:mx-auto" />
              <div className="text-center xl:text-left">
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  Front End
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
                <button className="w-full btn btn-outline px-4 py-2 duration-500 ease-in-out">
                  Learn More
                </button>
              </div>
            </SkillCard>
          </div>
          <div>
            <SkillCard className="">
              <FaServer className="size-40 max-xl:mx-auto" />
              <div className="text-center xl:text-left">
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  Back End
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
                <button className="w-full btn btn-outline px-4 py-2 duration-500 ease-in-out">
                  Learn More
                </button>
              </div>
            </SkillCard>
          </div>
          <div className="lg:col-span-2 xl:col-span-1">
            <SkillCard className="max-xl:flex lg:gap-2">
              <FaPalette className="size-40" />
              <div>
                <h4 className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl mb-2 sm:mb-4 lg:mb-6">
                  UI / UX
                </h4>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  incidunt.
                </p>
                <button className="xl:w-full btn btn-outline px-4 py-2 duration-500 ease-in-out">
                  Learn More
                </button>
              </div>
            </SkillCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ServicesSection;
