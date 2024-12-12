"use client";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import MainHeading from "../global/typography/main-heading";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import MagneticRoundedButton from "@/components/ui/animated-components/magnetic-rounded-button";
import SubHeading from "../global/typography/sub-heading";
import TypingAnimation from "../ui/animated-components/typing-animation";
import Image from "next/image";
import my_Image from "/public/images/my_img.jpg";
import Magnetic from "../ui/animated-components/magnetic";
import Link from "next/link";
function HeroSection() {
  const heading = `Hi, I’m Abdullah—Your Partner for Web Excellence`;
  const letter_duration = 50;
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const introAnimation = async () => {
      await new Promise((resolve) =>
        setTimeout(resolve, heading.length * letter_duration + 1000)
      );
      await animate(
        ".sub_heading",
        { opacity: 1, x: 0 },
        { type: "spring", duration: 0.5 }
      );
      await animate(
        ".btn-1",
        { opacity: 1, y: 0, scale: 1 },
        { type: "spring", duration: 0.5 }
      );
      await animate(
        ".btn-2",
        { opacity: 1, y: 0, scale: 1 },
        { type: "spring", duration: 0.5 }
      );
      await animate(
        ".my_image",
        { scaleY: 1, opacity: 1, y: 0 },
        { type: "spring", duration: 1 }
      );
      await animate(
        ".cover_my_image",
        { scaleY: 0 },
        { type: "spring", duration: 1 }
      );
      await animate(
        ".marque-1",
        { scaleX: 1, rotateY: "0deg" },
        { type: "spring", duration: 0.8 }
      );
    };
    try {
      introAnimation();
    } catch (error) {
      console.log("some thing not working.");
    }
  }, [animate, heading.length]);
  return (
    <section className="relative max-sm:pb-24 pb-[4.5rem] overflow-x-hidden" ref={scope}>
      <MaxWidthWrapper className="pt-[12dvh] lg:pt-[9dvh] max-lg:mb-[10dvh] mb-[7dvh] flex items-center gap-8">
        {/* FIRST COLUMN */}
        <div className=" max-lg:text-center">
          {/* HEADING */}
          <MainHeading>
            <TypingAnimation text={heading} duration={letter_duration} />
          </MainHeading>
          {/* SUB HEADING */}
          <motion.div
            style={{ opacity: 0, x: -200 }}
            className="max-lg:mx-auto max-w-sm sm:max-w-2xl text-gray-400 mb-12 sub_heading"
          >
            <SubHeading className="font-semibold text-pretty">
              {`Passionate about creating impactful digital experiences that help businesses grow through custom web development and design.`}
            </SubHeading>
          </motion.div>
          {/* BUTTONs */}
          <div className="flex items-center md:gap-8 sm:gap-4 gap-2 max-lg:justify-center sm:flex-row flex-col font-semibold">
            <motion.div
              style={{ opacity: 0, y: 200, scale: 0 }}
              className="btn-1 max-sm:w-[80%] max-sm:mx-auto sm:w-44"
            >
              <Link href={"/work"}>
                <MagneticRoundedButton
                  space={20}
                  secondSpace={15}
                  backClassName="bg-base-200"
                  className="sm:h-16 h-10 w-full text-base border-2 border-primary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
                >
                  View My Work
                </MagneticRoundedButton>
              </Link>
            </motion.div>
            <motion.div
              style={{ opacity: 0, y: 200, scale: 0 }}
              className="btn-2 max-sm:w-[80%] max-sm:mx-auto sm:w-44"
            >
              <Link href="/contact">
                <MagneticRoundedButton
                  space={20}
                  secondSpace={15}
                  backClassName="bg-base-200"
                  className="sm:h-16 h-10 w-full bg-secondary text-secondary-content text-base border-2 border-secondary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
                >
                  {"let's Collaborate"}
                </MagneticRoundedButton>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* SECOND COLUMN */}
        <Magnetic space={20}>
          <motion.div
            style={{ opacity: 0, scaleY: 0, y: 200 }}
            className="hidden lg:block w-fit h-full my_image bg-primary relative p-1 rounded-box "
          >
            <motion.div className="absolute inset-0 bg-primary cover_my_image origin-top rounded-box" />
            <Magnetic space={5}>
              <Image
                src={my_Image}
                alt="my image"
                className="aspect-square xl:max-w-[350px] lg:max-w-[300px] rounded- object-cover select-none pointer-events-none rounded-box hover:scale-90 transition-all duration-300"
              />
            </Magnetic>
          </motion.div>
        </Magnetic>
      </MaxWidthWrapper>

      <motion.div
        style={{ scaleX: 0, rotateY: "90deg" }}
        className="w-screen h-16 sm:h-20 md:h-24 bg-primary text-primary-content mb-2 flex items-center text-2xl font-bold z-[999] select-none marque-1 origin-bottom"
      >
        <VelocityScroll
          default_velocity={-0.7}
          className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase"
          text="height quality and performance🚀 cool animations🔥 SEO optimize📈 let's build something cool✨ "
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
