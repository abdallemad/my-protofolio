import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

interface Props {
  title: string;
  description: string;
  icon: "react" | "nextjs" | "express";
}
export default function SkillCard({ title, description, icon }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["22.5deg", "-22.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-22.5deg", "22.5deg"]
  );

  const handelMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const horizontalProgress = (clientX - left) / width - 0.5;
    x.set(horizontalProgress);
    const verticalProgress = (clientY - top) / height - 0.5;
    y.set(verticalProgress);
  };
  const handleLeave = (e: React.MouseEvent) => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handelMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className="relative bg-gradient-to-b  p-2 rounded-xl bg-transparent shadow-2xl shadow-primary group h-full"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        className="p-4 h-full rounded-xl bg-base-100 shadow-lg group-hover:scale-1.1 duration-100 transition-all"
      >
        <div className="flex lg:flex-col lg:text-center items-center gap-4 lg:pb-4">
          {icon === "nextjs" ? (
            <RiNextjsFill
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(85px)",
              }}
              className="text-6xl lg:text-9xl block"
            />
          ) : icon === "express" ? (
            <SiExpress
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(85px)",
              }}
              className="text-6xl lg:text-9xl block"
            />
          ) : (
            <FaReact
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(85px)",
              }}
              className="text-6xl lg:text-9xl block"
            />
          )}
          <div>
            <p className=" font-bold text-2xl lg:text-4xl">{title}</p>
            <p className=" font-semibold text-lg lg:text-xl">{description}</p>
            <p className=" font-light text-xl">Unique Solution</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
