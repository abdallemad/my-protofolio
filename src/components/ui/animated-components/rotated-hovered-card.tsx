import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
interface Props {
  className?:string,
  children?:React.ReactNode;
  backDropClassName?:string;
  degree?:string
}
export default function RotatedHoveredCard({ className, children,backDropClassName, degree='22.5deg' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [degree, `-${degree}`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${degree}`, degree]
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
      className={cn("relative p-2 rounded-xl bg-neutral-400 group h-full",backDropClassName)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        className={cn("p-4 group h-full rounded-xl bg-base-200 shadow-lg",className)}
      >
        {children}
      </div>
    </motion.div>
  );
}
