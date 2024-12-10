"use client";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import MainHeading from "../global/typography/main-heading";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import MagneticRoundedButton from "@/components/ui/animated-components/magnetic-rounded-button";
import SubHeading from "../global/typography/sub-heading";
function HeroSection() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const startAnimate = async () => {
      try {
        await animate(
          ".heading",
          { opacity: 1, x: 0 },
          { duration: 0.5, type: "spring" }
        );
        await animate(
          ".description",
          { opacity: 1, x: 0 },
          { duration: 0.5, type: "spring" }
        );
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
          { scaleY: 1, y: 0, rotateX: 0, translate: 0 },
          { duration: 0.4, type: "spring" }
        );
        await animate(
          ".marque-2",
          { scaleY: 1, y: 0, rotateX: 0, translate: 0 },
          { duration: 0.6, type: "spring" }
        );
      } catch (error) {
        throw new Error("there is one class messing up");
      }
    };
    try {
      startAnimate();
    } catch (error) {
      console.log("some thing not working.");
    }
  }, [animate]);
  return (
    <section className="relative pb-24 overflow-x-hidden" ref={scope}>
      <MaxWidthWrapper className="pt-20 sm:pt-[12dvh] lg:pt-[11dvh] mb-[10dvh]">
        <motion.div
          style={{ opacity: 0, x: 350 }}
          className="heading text-center"
        >
          <MainHeading className="text-center">
            {`Hi, I'm Abdullah Emad a Freelance Full-Stack Developer`}
          </MainHeading>
        </motion.div>
        <motion.div
          style={{ opacity: 0, x: -200 }}
          className="text-center mx-auto max-w-sm sm:max-w-xl text-gray-400 description mb-8"
        >
          <SubHeading className="font-semibold text-pretty">
            {`I design and develop stunning, high-performance web applications
          tailored to your unique needs. Let’s create something extraordinary
          together`}
          </SubHeading>
        </motion.div>
        <div className="flex items-center md:gap-8 sm:gap-4 gap-2 justify-center sm:flex-row flex-col font-semibold">
          <motion.div
            style={{ scale: 0, opacity: 0.4 }}
            className="btn-1 max-sm:w-[80%] max-sm:mx-auto sm:w-44"
          >
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              className="sm:h-16 h-10 w-full text-base border-2 border-primary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              View My Work
            </MagneticRoundedButton>
          </motion.div>
          <motion.div
            style={{ scale: 0, opacity: 0.4 }}
            className="btn-2 max-sm:w-[80%] max-sm:mx-auto sm:w-44"
          >
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              className="sm:h-16 h-10 w-full bg-secondary text-secondary-content text-base border-2 border-secondary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              {"let's Collaborate"}
            </MagneticRoundedButton>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      <motion.div
        style={{ scaleY: 0, y: 100, rotateX: 90, translateZ: 100 }}
        className="w-screen h-10 sm:h-12 md:h-14  lg:h-16 xl:h-20  bg-primary text-primary-content mb-2 marque-1 flex items-center text-2xl font-bold z-[999] select-none"
      >
        <VelocityScroll
          default_velocity={0.3}
          className=" text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl uppercase"
          text="height quality and performance🚀 cool animations🔥 SEO optimize📈 "
        />
      </motion.div>
      <motion.div
        style={{ scaleY: 0, y: 100, rotateX: 90, translateZ: 100 }}
        className="w-screen h-10 sm:h-12 md:h-14  lg:h-16 xl:h-20  bg-secondary text-secondary-content mb-2 marque-2 flex items-center text-2xl font-bold z-[999] select-none"
      >
        <VelocityScroll
          default_velocity={-0.6}
          text="Let's build something cool✨ and beautiful🎨  "
          className=" text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl uppercase"
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
