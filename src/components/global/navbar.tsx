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
      if (window.scrollY > 150) setShowSidebarButton(true);
      else if (!isSidebarOpen) setShowSidebarButton(false);
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
          <Link href={"/"}>
            <motion.span
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden whitespace-nowrap font-bold text-lg sm:text-xl lg:text-2xl"
            >
              <div>
                {"Abdalla Emad".split("").map((char, i) => {
                  return (
                    <motion.span
                      variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                      }}
                      transition={{
                        duration: 0.2,
                        delay: (i * 0.2) / 3,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                      key={`${char}-${i}`}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </div>
              <div className="absolute inset-0 ">
                {"Abdalla Emad".split("").map((char, i) => {
                  return (
                    <motion.span
                      variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                      }}
                      transition={{
                        duration: 0.2,
                        delay: (i * 0.2) / 3,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                      key={`${char}-${i}`}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </div>
            </motion.span>
          </Link>
          <ul className=" items-center gap-4 hidden lg:flex">
            {links.map((link) => {
              const isActive =
                (pathname === link.href && hoveredLink == null) ||
                hoveredLink === link.href;
              return (
                <li key={link.href}  className="relative">
                  <MagneticLink>
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
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
              setShowSidebarButton(true);
            }}
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
            <MagneticRoundedButton
              space={30}
              secondSpace={20}
              className="bg-primary rounded-full z-[999] inline-block cursor-pointer size-16 sm:size-24"
            >
              <div className="flex flex-col w-[40%] gap-2 items-center z-10">
                <motion.span
                  variants={{
                    isOpen: { rotate: "45deg", y: "4px" },
                    not: { rotate: 0, y: 0 },
                  }}
                  animate={isSidebarOpen ? "isOpen" : "not"}
                  className="w-full h-[2px] bg-zinc-200 z-[999]"
                />
                <motion.span
                  animate={isSidebarOpen ? "isOpen" : "not"}
                  variants={{
                    isOpen: { rotate: "-45deg", y: "-4px" },
                    not: { rotate: 0, y: 0 },
                  }}
                  className="w-full h-[2px] bg-zinc-200 z-[999]"
                />
              </div>
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
