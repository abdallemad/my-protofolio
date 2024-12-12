"use client";
import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Magnetic from "./magnetic";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// rounded-full
// normal button
// primary secondary

const MagneticButtonVariants = cva(
  "overflow-hidden relative rounded-full cursor-pointer",
  {
    variants: {
      colors: {
        primary: "",
        secondary: "",
      },
      sizes: {
        sm: "",
        base: "",
        lg: "",
      },
      shape: {
        button: "",
        circle: "aspect-square",
      },
    },
    defaultVariants: {},
  }
);

interface Props {
  space?: number;
  secondSpace?: number;
  parentClassName?: string;
  backClassName?: string;
  className?: string;
  children: React.ReactNode;
}
function MagneticRoundedButton({
  children,
  space = 40,
  secondSpace = 30,
  parentClassName,
  className,
  backClassName,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Magnetic
      space={space}
      setIsHovered={setIsHovered}
      className={cn(
        "size-48 overflow-hidden relative bg-primary text-primary-content rounded-full grid place-items-center cursor-pointer text-2xl border-2 border-primary hover:border-zinc-400 transition-colors duration-300",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            variants={{
              show: {
                y: "0",
              },
              initial: {
                y: "100%",
              },
              exit: {
                y: "-100%",
              },
            }}
            animate={"show"}
            initial={"initial"}
            exit={"exit"}
            transition={{ duration: 0.4, type: "tween" }}
            className={cn(
              "inset-0 bg-base-100  absolute rounded-full pointer-events-none",
              backClassName
            )}
          />
        )}
      </AnimatePresence>
      <Magnetic
        space={secondSpace}
        className="h-full w-full z-[9999] rounded-full grid place-items-center select-non transition-colors duration-200"
      >
        {children}
      </Magnetic>
    </Magnetic>
  );
}

export default MagneticRoundedButton;
