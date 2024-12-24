"use client";
import { cn } from "@/lib/utils";
import { links, socialLinks } from "@/utils/links";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
interface Props {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OPEN_DURATION = 0.8;
const CLOSE_DURATION = 1.1;
const LETTER_DURATION = 0.2;
function Sidebar({ setIsSidebarOpen }: Props) {
  const [hoveredLink, setIsHoveredLink] = useState<string | null>(null);
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: "fit-content",
          transition: { duration: OPEN_DURATION, ease: "backOut" },
        }}
        exit={{
          height: 0,
          transition: { duration: CLOSE_DURATION, ease: "backInOut" },
        }}
        className="fixed inset-x-0 top-0 bg-zinc-400 text-zinc-900 overflow-hidden z-[9998]"
      >
        <MaxWidthWrapper className="pt-24  pb-4">
          <h2 className="mb-2">Navigation</h2>
          <div className="w-full h-px bg-zinc-900 mb-6" />
          <div className="flex items-center gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 font-bold text-5xl lg:text-7xl uppercase gap-x-6 gap-y-4 flex-1">
              {[{label:"Home",href:"/"},...links].map((link) => {
                const isHovered =
                  hoveredLink !== link.label && hoveredLink !== null;
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={cn("transition-all duration-500 w-full", {
                      "blur-sm": isHovered,
                    })}
                    onMouseOver={() => setIsHoveredLink(link.label)}
                    onMouseLeave={() => setIsHoveredLink(null)}
                  >
                    <span className="relative block overflow-hidden whitespace-nowrap">
                      <div>
                        {link.label.split("").map((char, i) => {
                          return (
                            <motion.span
                              variants={{
                                initial: {
                                  y: "100%",
                                  transition: {
                                    delay: ((link.label.length - i) * LETTER_DURATION) /3,
                                    duration:LETTER_DURATION,
                                    type:'tween'
                                  },
                                },
                                animate: {
                                  y: 0,
                                  transition: {
                                    delay: (i * LETTER_DURATION) / 3,
                                    duration:LETTER_DURATION,
                                    type:'tween'
                                  },
                                },
                              }}
                              initial="initial"
                              animate="animate"
                              exit="initial"
                              key={`${char}-${i}`}
                              className="inline-block"
                            >
                              {char}
                            </motion.span>
                          );
                        })}
                      </div>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="pt-16 flex gap-4 flex-col">
            <span>SOCIALS</span>
            <ul className="grid grid-cols-3 gap-x-4 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  target="_blank"
                  href={link.href}
                  className="capitalize text-lg font-semibold cursor-pointer hover:text-primary transition-colors duration-300"
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </ul>
          </div>
        </MaxWidthWrapper>
      </motion.div>

      <motion.div
        onClick={() => setIsSidebarOpen(false)}
        initial={{ height: 0 }}
        animate={{
          height: "100dvh",
          transition: { duration: OPEN_DURATION + 0.4, ease: "backOut" },
        }}
        exit={{
          height: 0,
          transition: { duration: CLOSE_DURATION - 0.3, ease: "backInOut" },
        }}
        className="bg-gray-900/30 backdrop-blur-md fixed inset-0 z-[9997]"
      />
    </>
  );
}

export default Sidebar;
