"use client";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./max-width-wrapper";
import { links } from "@/utils/links";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ setIsSidebarOpen }: Props) {
  const [hoveredLink, setIsHoveredLink] = useState<string | null>(null);
  return (
    <>
      <motion.div
        initial={{height:0}}
        animate={{height:'fit-content',transition:{duration:0.8,ease:"backOut"}}}
        exit={{height:0, transition:{duration:.8,ease:"backInOut"}}}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="fixed inset-x-0 top-0 bg-zinc-900 text-zinc-400 overflow-hidden z-[9998]"
      >
        <MaxWidthWrapper className="pt-24  pb-4">
          <h2 className="mb-2">Navigation</h2>
          <div className="w-full h-px bg-zinc-400 mb-6" />
          <div className="flex items-center gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 font-bold text-5xl lg:text-7xl uppercase gap-x-6 gap-y-4 flex-1">
              {links.map((link) => {
                const isHovered = (hoveredLink !== link.label) && hoveredLink !== null;
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={cn('transition-all duration-500 w-full',{ "blur-sm": isHovered })}
                    onMouseOver={() => setIsHoveredLink(link.label)}
                    onMouseLeave={() => setIsHoveredLink(null)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="pt-16 pb-4"> hello links</div>
        </MaxWidthWrapper>
      </motion.div>

      <motion.div
        initial={{height:0}}
        animate={{height:'100dvh',transition:{duration:1.4,ease:"backOut"}}}
        exit={{height:0, transition:{duration:.5,ease:"backInOut"}}}
        transition={{ duration: 0.5, ease: "backInOut" }}
        className="bg-gray-300/30 backdrop-blur-md fixed inset-0 z-[9997]"
      />
    </>
  );
}

export default Sidebar;