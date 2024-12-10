"use client";
import { links } from "@/utils/links";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MagneticLink } from "../ui/animated-components/magnetic-link";
import MaxWidthWrapper from "./max-width-wrapper";
import Sidebar from "./sidebar";
import MagneticRoundedButton from "../ui/animated-components/magnetic-rounded-button";
function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setIsHoveredLink] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSidebarButton, setShowSidebarButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY > 150)) setShowSidebarButton(true);
      else if(!isSidebarOpen) setShowSidebarButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);
  return (
    <>
      <nav className="py-3 md:py-5 lg:py-7">
        <MaxWidthWrapper className="flex items-center justify-between">
          <span className="font-bold sm:text-lg lg:text-xl cursor-pointer">
            Abdalla Emad
          </span>
          <ul className=" items-center gap-6 hidden lg:flex">
            {links.map((link) => {
              const isActive =
                (pathname === link.href && hoveredLink == null) ||
                hoveredLink === link.href;
              return (
                <MagneticLink key={link.href} className="relative">
                  <Link
                    onMouseEnter={() => setIsHoveredLink(link.href)}
                    onMouseLeave={() => setIsHoveredLink(null)}
                    href={link.href}
                    className={"capitalize py-6 font-bold"}
                  >
                    {link.label}
                  </Link>
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        variants={{
                          hide: { scale: 0 },
                          show: { scale: 1 },
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="absolute top-[calc(100%+4px)]  w-full  h-1 bg-[#cdcdcd] rounded-full"
                      />
                    )}
                  </AnimatePresence>
                </MagneticLink>
              );
            })}
          </ul>
            <button
              onClick={() =>{ setIsSidebarOpen(!isSidebarOpen); setShowSidebarButton(true)}}
              className="cursor-pointer transition-colors duration-500 rounded-full hover:bg-[#cdcdcd] hover:text-base-200 p-2 border-2 border-[#181010] lg:hidden"
            >
              Menu
            </button>
        </MaxWidthWrapper>
      </nav>
      <AnimatePresence mode="wait">
        {showSidebarButton && (
          <motion.div
            variants={{
              show: { scale: 1, opacity: 1 },
              hide: { scale: 0, opacity: 0 },
            }}
            initial="hide"
            animate="show"
            exit="hide"
            className="fixed top-4 sm:top-8 sm:right-10 right-4 z-[9999]"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MagneticRoundedButton space={20} secondSpace={10} className="bg-primary rounded-full z-[999] inline-block cursor-pointer size-12 sm:size-24">
              <Menu className="text-primary-content sm:size-8 size-4" />
            </MagneticRoundedButton>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
