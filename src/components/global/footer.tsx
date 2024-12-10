"use client";
import { socialLinks } from "@/utils/links";
import Link from "next/link";
import MagneticRoundedButton from "../ui/animated-components/magnetic-rounded-button";
import MaxWidthWrapper from "./max-width-wrapper";
import MainHeading from "./typography/main-heading";
import SubHeading from "./typography/sub-heading";
function Footer() {
  return (
    <div className=" bg-base-300 sticky bottom-0">
      <MaxWidthWrapper className="h-full py-24 sm:py-32 lg:py-40">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex-1">
            <div className="max-w-[950px]">
              <MainHeading className="mb-2 sm:mb-4 lg:mb-6 xl:mb-8 ">
                {`Let's Build something Together`}
              </MainHeading>
              <SubHeading className="text-sm sm:text-base md:text-lg lg:text-xl ">
                {`I'm always open to new opportunities and collaborations. If
              you have a project in mind or just want to chat, don't
              hesitate to get in touch.`}
              </SubHeading>
            </div>
          </div>
          <MagneticRoundedButton
            parentClassName="shrink-0 lg:mt-12 max-md:self-end"
            className="lg:mt-12 max-md:self-end ms:ml-auto max-sm:self-end shrink-0 max-sm:size-32 max-lg:text-sm max-lg:size-44"
          >
            Get In Touch
          </MagneticRoundedButton>
        </div>
        <div className="w-full h-px bg-neutral-400 mt-8"></div>
        <div className="grid grid-cols-2 max-w-[70%] gap-4 mt-8">
          <Link href={"mailto:abdallaemad1.3.2.0.0.5@gmail.com"}>
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              className="sm:h-16 max-sm:text-base max-md:text-lg h-10 w-full text-base border-2 border-primary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              abdallaemad1.3.2.0.0.5@gmail.com
            </MagneticRoundedButton>
          </Link>
          <Link href={"tel:+201557646408"}>
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              className="sm:h-16 h-10 w-full bg-secondary text-secondary-content text-base border-2 border-secondary hover:text-[#cdcdcd] transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              +20 155 764 6408
            </MagneticRoundedButton>
          </Link>
        </div>
      </MaxWidthWrapper>
      <footer className="border-t">
        <MaxWidthWrapper className="  px-2 md:px-4 py-2 flex flex-wrap-reverse items-center justify-between">
          <div className="flex  gap-4 ">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">2024 </span>
              <span>&copy; Abdalla Emad</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">Build with </span>
              <span>Next js</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">SOCAILS</span>
            <ul className="flex gap-4">
              {
                socialLinks.map(link=>{
                  return (
                    <li key={link.href} className="capitalize cursor-pointer hover:text-primary transition-colors duration-500">
                      <a target="_blank" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
}

export default Footer;
