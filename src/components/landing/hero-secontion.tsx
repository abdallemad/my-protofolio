"use client";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import MagneticRoundedButton from "@/components/animated-components/magnetic-rounded-button";
function HeroSection() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const startAnimate = async () => {
      await animate(".heading", { opacity: 1, y: 0 }, { duration: 1 });
      await animate(".description", { opacity: 1, y: 0 }, { duration: 1 });
      await animate(
        ".btn-1",
        { scale: 1, opacity: 1 },
        { duration: 0.3, type: "spring" }
      );
      await animate(
        ".btn-2",
        { scale: 1, opacity: 1 },
        { duration: 0.1, type: "spring" }
      );
      await animate(
        ".marque-1",
        { scaleY: 1, x: 0 },
        { duration: 0.4, type: "spring" }
      );
      await animate(
        ".marque-2",
        { scaleY: 1, x: 0 },
        { duration: 0.6, type: "spring" }
      );
    };
    startAnimate();
  }, [animate]);
  return (
    <div className="relative" ref={scope}>
      <MaxWidthWrapper className="pt-20 sm:pt-24 lg:pt-24 mb-16">
        <motion.h1
          style={{ opacity: 0, y: 200 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 heading"
        >
          Hi, I{"'"}m Abdullah Emad – Freelance Full-Stack Developer
        </motion.h1>
        <motion.p
          style={{ opacity: 0, y: 100 }}
          className="text-center max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto text-xs sm:text-sm lg:text-lg text-gray-400 description mb-12"
        >
          I design and develop stunning, high-performance web applications
          tailored to your unique needs. Let’s create something extraordinary
          together
        </motion.p>
        <div className="flex items-center gap-8 justify-center sm:flex-row flex-col font-semibold">
          <motion.div
            style={{ scale: 0, opacity: 0.4 }}
            className="btn-1 w-full sm:w-44"
          >
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              parentClassName="sm:h-16 h-12 w-full text-base border-2 border-primary hover:text-[#cdcdcd] hover:border-primary  transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              View My Work
            </MagneticRoundedButton>
          </motion.div>
          <motion.div
            style={{ scale: 0, opacity: 0.4 }}
            className="btn-2 w-full sm:w-44"
          >
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              parentClassName="sm:h-16 h-12 w-full bg-secondary text-secondary-content text-base border-2 border-secondary hover:text-[#cdcdcd] hover:border-secondary  transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              {"let's Collaborate"}
            </MagneticRoundedButton>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      <motion.div
        style={{ scaleY: 0, x: 100, rotate:'-4deg', y:'50%' }}
        className="w-screen h-16 bg-accent text-accent-content mb-2 marque-2 flex items-center text-2xl font-bold select-none"
      >
        <VelocityScroll
          default_velocity={-0.4}
          text="I design and develop stunning, high-performance web applications tailored to your unique needs. Let’s create something extraordinary together"
        />
      </motion.div>
      <motion.div
        style={{ scaleY: 0, x: 100, rotate:'4deg', y:'-50%' }}
        className="w-screen h-16 bg-primary text-primary-content mb-2 marque-1 flex items-center text-2xl font-bold z-[999] select-none"
      >
        <VelocityScroll
          default_velocity={0.4}
          text="I design and develop stunning, high-performance web applications tailored to your unique needs. Let’s create something extraordinary together"
        />
      </motion.div>
    </div>
  );
}

export default HeroSection
