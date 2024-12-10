"use client";
import { useRef } from "react";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  children: React.ReactNode;
  space?: number;
  type?:string
  setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>;
}
function Magnetic({ children, className, space = 20, setIsHovered, }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x,{stiffness:100,damping:10});
  const springY = useSpring(y,{stiffness:100,damping:10});

  const translateX = useTransform(springX, [-0.5, 0.5], [space, -space]);
  const translateY = useTransform(springY, [-0.5, 0.5], [space, -space]);

  const handelMouseEnter = () => {
    if (typeof setIsHovered === "function") setIsHovered(true);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const xProgress = ((clientX - left) / width - 0.5) * -1;
    const yProgress = ((clientY - top) / height - 0.5) * -1;

    x.set(xProgress);
    y.set(yProgress);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (typeof setIsHovered === "function") setIsHovered(false);
  };
  return (
    <motion.div
      onMouseEnter={handelMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: translateX, y: translateY }}
      className={cn("h-fit w-fit", className)}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
