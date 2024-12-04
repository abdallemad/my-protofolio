"use client";
import { useState } from "react";
import React from "react";
import Magnetic from "./magnetic";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
interface Props {
  space?: number;
  secondSpace?: number;
  parentClassName?: string;
  backClassName?: string;
  children: React.ReactNode;
}
function MagneticRoundedButton({
  children,
  space = 40,
  secondSpace = 30,
  parentClassName,
  backClassName
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Magnetic
      space={space}
      setIsHovered={setIsHovered}
      className={cn(
        "size-48 overflow-hidden relative bg-primary text-primary-content rounded-full grid place-items-center cursor-pointer text-2xl",
        parentClassName
      )}
    >
      <Magnetic
        space={secondSpace}
        className="h-full w-full z-10 rounded-full grid place-items-center select-none"
      >
        {children}
      </Magnetic>
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
              "inset-0 bg-white/20  absolute rounded-full pointer-events-none",
              backClassName
            )}
          />
        )}
      </AnimatePresence>
    </Magnetic>
  );
}

export default MagneticRoundedButton;
