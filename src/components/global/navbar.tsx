"use client";
import { links } from "@/utils/links";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MagneticLink } from "../animated-components/magnetic-link";
import MaxWidthWrapper from "./max-width-wrapper";
import Sidebar from "./sidebar";
function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setIsHoveredLink] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <nav className="py-3 md:py-5 lg:py-7">
        <MaxWidthWrapper className="flex items-center justify-between">
          <span className="font-bold sm:text-lg lg:text-xl cursor-pointer">
            Abdalla Codding
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
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer transition-colors duration-500 block lg:hidden rounded-full hover:bg-[#cdcdcd] hover:text-base-200 p-2 border-2 border-[#cdcdcd]"
          >
            <Menu className="block lg:hidden text-6 sm:text-8 " />
          </button>
        </MaxWidthWrapper>
      </nav>
      <AnimatePresence mode="wait">
        {
          isSidebarOpen && (
            <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default Navbar;
