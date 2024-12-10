"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export function MagneticLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = (e: React.MouseEvent) => {
    setPosition({ x: 0, y: 0 });
  };
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      animate={{ x: position.x, y: position.y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
