"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import astroAnimation from "../../../public/lottie/astro-animation-lottei.json";
import developerThinking from "../../../public/lottie/developer-thinking.json";
import MagneticRoundedButton from "../animated-components/magnetic-rounded-button";
import MaxWidthWrapper from "../global/max-width-wrapper";
import SkillCard from "../ui/skill-card";

export default function AboutSection() {
  // Animation Variants
  const globalVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  // Refs for animations
  const astroContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(astroContainerRef, { once: true, amount: 0.5 });

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isCardContainerInView = useInView(cardContainerRef, { once: true, amount: 0.2 });

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

  // Transformations for scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 0.33], ["1", "0.4"]);
  const rotate = useTransform(scrollYProgress, [0, 0.33], ["0deg", "-22deg"]);

  const scale2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ["0.6", "1", "0.5"]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.33, 0.66], ["-12deg", "0deg", "12deg"]);
  const y = useTransform(scrollYProgress, [0, 0.33], [130, 0]);

  return (
    <div>
      <div ref={targetRef} className="relative px-4 h-[300dvh]">
        {/* Section 1 */}
        <motion.div
          style={{ scale, transformOrigin: "center", rotate }}
          className="h-screen bg-secondary text-secondary-content sticky top-4"
        >
          <motion.div
            variants={{ show: { transition: { delayChildren: 0.1, staggerChildren: 0.075 } } }}
            animate={isInView ? "show" : "hidden"}
            ref={astroContainerRef}
            className="relative h-full w-full grid lg:grid-cols-3 items-center justify-center max-w-[90%] mx-auto px-12"
          >
            <motion.div variants={globalVariant}>
              <DynamicLottie animationData={astroAnimation} loop />
            </motion.div>
            <div className="lg:col-span-2 max-lg:row-start-1 pt-4">
              <motion.h2
                variants={globalVariant}
                className="lg:text-5xl xl:text-7xl font-bold text-3xl mb-2 max-sm:text-center lg:mb-8 sm:text-4xl sm:mb-4"
              >
                Who I am?
              </motion.h2>
              <motion.p
                variants={globalVariant}
                className="lg:text-3xl xl:text-4xl text-lg max-sm:text-center sm:text-2xl font-semibold"
              >
                With years of experience in crafting seamless digital experiences, I specialize in
                building full-stack applications using the latest technologies.
              </motion.p>
              <motion.p
                variants={globalVariant}
                className="lg:text-3xl xl:text-4xl text-lg max-sm:text-center sm:text-2xl font-semibold"
              >
                My passion for clean code and innovation drives me to create visually stunning and
                user-friendly applications that prioritize performance and accessibility.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ scale: scale2, transformOrigin: "top center", rotate: rotate2, y }}
          className="h-screen bg-primary text-primary-content sticky top-4"
        >
          <div className="relative h-full w-full grid lg:grid-cols-3 items-center justify-center max-w-[90%] mx-auto px-12">
            <div className="lg:col-span-2 py-8">
              <h2 className="lg:text-5xl xl:text-7xl font-bold text-3xl mb-2 max-sm:text-center lg:mb-8 sm:text-4xl sm:mb-4">
                My Passion
              </h2>
              <p className="lg:text-3xl xl:text-4xl text-lg max-sm:text-center sm:text-2xl font-semibold">
                Creating seamless digital experiences drives me. I thrive on transforming ideas into
                functional, beautiful designs with a focus on clean code and innovation.
              </p>
            </div>
            <DynamicLottie animationData={developerThinking} loop />
          </div>
        </motion.div>

        {/* Section 3 */}
        <div className="min-h-[100dvh] flex flex-col bg-base-100 w-full z-20 sticky p-px">
          <MaxWidthWrapper className="flex-1 flex flex-col">
            <div className="flex gap-[-40px] max-sm:flex-col sm:pt-12 pt-8 justify-between lg:pt-24 max-w-[90%] mx-auto lg:mb-24">
              <div className="max-w-[900px] max-lg:mb-8">
                <h2 className="xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-2 lg:mb-8">
                  How Can I Help You
                </h2>
                <p className="xl:text-xl sm:text-lg">
                  Building your vision into reality with tailored web solutions, we&apos;re here to
                  transform your ideas into functional, user-friendly digital experiences. With a
                  focus on clean code and innovation, we deliver high-quality solutions that exceed
                  your expectations.
                </p>
              </div>
              <Link href={"/services"}>
                <MagneticRoundedButton parentClassName="ms:ml-auto max-sm:self-end shrink-0 max-sm:size-32 max-lg:text-sm max-lg:size-44 ">
                  Learn More
                </MagneticRoundedButton>
              </Link>
            </div>

            <motion.div
              ref={cardContainerRef}
              variants={{
                show: {
                  transition: {
                    duration: 0.2,
                    type: "spring",
                    delayChildren: 0.1,
                    staggerChildren: 0.2,
                  },
                },
              }}
              animate={isCardContainerInView ? "show" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 items-stretch pb-4"
            >
              <motion.div variants={{ show: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}>
                <SkillCard title="Next Js" description="Full-Stack solution" icon="nextjs" />
              </motion.div>
              <motion.div variants={{ show: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}>
                <SkillCard title="React Js" description="Front-End solution" icon="react" />
              </motion.div>
              <motion.div variants={{ show: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}>
                <SkillCard title="Express" description="Back-End solution" icon="express" />
              </motion.div>
            </motion.div>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
}
