"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import astroAnimation from "../../../public/lottie/astro-animation-lottei.json";
import developerThinking from "../../../public/lottie/developer-thinking.json";
import figmaAnimation from "../../../public/lottie/figma-animation.json";

// Dynamically import Lottie to prevent SSR issues
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const SECTIONS_HEIGHTS = {
  small: 596,
  medium: 787,
  large: "100dvh",
} as const;
export default function AboutSection() {
  const { device } = useMediaQuery();

  const sectionHeight =
    device === "mobile"
      ? SECTIONS_HEIGHTS.small
      : device === "tablet"
      ? SECTIONS_HEIGHTS.medium
      : SECTIONS_HEIGHTS.large;

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transformations for scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 0.33], ["1", "0.4"]);
  const rotate = useTransform(scrollYProgress, [0, 0.33], ["0deg", "-22deg"]);

  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66],
    ["0.6", "1", "0.5"]
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66],
    ["-12deg", "0deg", "12deg"]
  );
  const y = useTransform(scrollYProgress, [0, 0.33], [130, 0]);

  return (
    <div>
      <div ref={targetRef} className="relative lg:px-4">
        {/* Section 1 */}
        <motion.div
          style={{
            scale,
            transformOrigin: "center",
            rotate,
            height: sectionHeight,
          }}
          className=" bg-secondary text-secondary-content sticky top-0 md:top-2 lg:top-4"
        >
          <div className="relative h-full w-full grid lg:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:max-w-[90%] mx-auto px-12">
            <DynamicLottie
              animationData={astroAnimation}
              loop
              className="max-lg:w-[80%] max-lg:mx-auto max-lg:-mt-2"
            />
            <div className="xl:col-span-2 pt-4 max-lg:text-center">
              <h2 className="lg:text-5xl xl:text-7xl font-bold text-4xl mb-2 lg:mb-8 sm:text-4xl sm:mb-4">
                Hello, I’m Abdullah Emad
              </h2>
              <p className="text-sm sm:text-lg lg:text-3xl xl:text-4xl text-opacity-60">
                I’m a 19-year-old full-stack developer passionate about turning
                creative ideas into functional, visually stunning digital
                experiences. With expertise in the MERN stack, Next.js, and
                animations, I love bridging the gap between design and
                technology. When I’m not coding, you’ll find me exploring ways
                to make digital interactions more human.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{
            scale: scale2,
            transformOrigin: "top center",
            rotate: rotate2,
            y,
            height: sectionHeight,
          }}
          className="bg-primary text-primary-content sticky top-0 md:top-2 lg:top-4"
        >
          <div className="relative h-full w-full grid lg:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:max-w-[90%] mx-auto px-12">
            <div className="xl:col-span-2 pt-4 max-lg:text-center">
              <h2 className="lg:text-5xl xl:text-7xl font-bold text-4xl mb-2 lg:mb-8 sm:text-4xl sm:mb-4">
                Crafting the Future of the Web
              </h2>
              <p className="text-sm sm:text-lg lg:text-3xl xl:text-4xl text-opacity-60">
                I specialize in building user-friendly interfaces and scalable
                web apps. From designing seamless user experiences to
                implementing efficient backends, I bring ideas to life. My
                toolkit includes Next.js, MongoDB, shadcn UI, and Framer Motion
                for animations that captivate and engage.
              </p>
            </div>
            <DynamicLottie
              animationData={developerThinking}
              loop
              className="max-lg:w-[80%] max-lg:mx-auto max-lg:-mt-2"
            />
          </div>
        </motion.div>

        {/* Section 3 */}
        <div
          style={{ height: sectionHeight }}
          className="flex flex-col bg-base-100 w-full z-20 sticky p-px"
        >
          <div className="relative h-full w-full grid lg:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:max-w-[90%] mx-auto px-12">
            <DynamicLottie
              animationData={figmaAnimation}
              loop
              className="max-lg:w-[80%] max-lg:mx-auto max-lg:-mt-2 bg-black"
            />
            <div className="xl:col-span-2 pt-4 max-lg:text-center">
              <h2 className="lg:text-5xl xl:text-7xl font-bold text-4xl mb-2 lg:mb-8 sm:text-4xl sm:mb-4">
                Designing for Impact
              </h2>
              <p className="text-sm sm:text-lg lg:text-3xl xl:text-4xl text-opacity-60">
                {`Design is more than just aesthetics—it's about creating
                intuitive, engaging experiences. With expertise in Figma, I
                bring ideas to life by crafting wireframes, prototypes, and
                pixel-perfect designs that resonate with users. From color
                theory to typography, I ensure every detail is aligned with the
                brand’s vision and the user's needs`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
