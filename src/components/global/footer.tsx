import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import MagneticRoundedButton from "../animated-components/magnetic-rounded-button";
import Link from "next/link";
function Footer() {
  return (
    <div className="h-screen bg-base-300 sticky bottom-0">
      <MaxWidthWrapper className="h-full grid place-content-center z-20">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-4 lg:mb-6 xl:mb-8">
              Let{"'"}s Build something Together
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              {"I'm"} always open to new opportunities and collaborations. If
              you have a project in mind or just want to chat, {"don't"}{" "}
              hesitate to get in touch.
            </p>
          </div>
          <Link href={"/contact"}>
            <MagneticRoundedButton parentClassName="flex-1">
              <span className="capitalize">Contact Me</span>
            </MagneticRoundedButton>
          </Link>
        </div>
        <div className="w-full h-1 bg-neutral-400 mt-8"></div>
        <div className="grid grid-cols-2 max-w-[70%] gap-4 mt-8">
          <Link href={"mailto:abdallaemad1.3.2.0.0.5@gmail.com"}>
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              parentClassName="sm:h-16 h-10 w-full text-base border-2 border-primary hover:text-[#cdcdcd] hover:border-primary  transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              abdallaemad1.3.2.0.0.5@gmail.com
            </MagneticRoundedButton>
          </Link>
          <Link href={"tel:+201557646408"}>
            <MagneticRoundedButton
              space={20}
              secondSpace={15}
              backClassName="bg-base-200"
              parentClassName="sm:h-16 h-10 w-full bg-secondary text-secondary-content text-base border-2 border-secondary hover:text-[#cdcdcd] hover:border-secondary  transition-colors duration-300 hover:border-[#cdcdcd]"
            >
              +20 155 764 6408
            </MagneticRoundedButton>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Footer;
