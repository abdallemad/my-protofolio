"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "../global/max-width-wrapper";
import SkillCard from "../ui/skill-card";
import Link from "next/link";
import MagneticRoundedButton from "../animated-components/magnetic-rounded-button";
import { useRef } from "react";

function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div ref={containerRef}>
      <MaxWidthWrapper className=" pt-12 sm:pt-16 lg:pt-24">
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
          <motion.div style={{x, y:x}} className="max-lg:self-end">
            <Link href={"/services"}>
              <MagneticRoundedButton parentClassName="ms:ml-auto max-sm:self-end shrink-0 max-sm:size-32 max-lg:text-sm max-lg:size-44 ">
                Learn More
              </MagneticRoundedButton>
            </Link>
          </motion.div>
        </div>
        <div>
          <SkillCard description="USER SELUTION" title="Web Development" icon="react"/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ServicesSection;
