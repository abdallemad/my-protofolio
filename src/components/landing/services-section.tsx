"use client";
import { services } from "@/utils/links";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import MagneticRoundedButton from "../ui/animated-components/magnetic-rounded-button";
import RotatedHoveredCard from "../ui/animated-components/rotated-hovered-card";
import MaxWidthWrapper from "../global/max-width-wrapper";
import SectionTitle from "../global/typography/section-title";
import SubHeading from "../global/typography/sub-heading";

function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-20% end", "end 50%"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <div ref={containerRef} className="">
      <MaxWidthWrapper className=" py-12 sm:py-16 lg:py-24 mb-4">
        <div className="flex max-lg:flex-col gap-8 mb-24 mx-auto text-center max-w-[70%]">
          <div className="">
            <SectionTitle className="sm:mb-4 lg:mb-8">
              How Can I Help You
            </SectionTitle>
            <SubHeading className="">
              I provide a range of services to help you achieve your goals, from
              developing scalable web applications to designing user-friendly
              interfaces and animations.
            </SubHeading>
          </div>
        </div>
        <div className="flex max-lg:flex-col gap-4 items-center justify-center">
          {services.map((service) => (
            <RotatedHoveredCard
              backDropClassName="flex-1 self-stretch h-full text-pretty"
              className=" "
              degree="8.5deg"
              key={service.description}
            >
              <div className="w-full h-full flex flex-col gap-4 items-center text-center px-6">
                <Image
                  src={service.icon}
                  alt=""
                  width={200}
                  height={100}
                  className="h-24"
                />
                <div className="text-pretty">
                  <h3 className="md:mb-2 text-lg sm:text-xl lg:text-2xl font-bold">
                    {`${service.label}`}
                  </h3>
                  <p className="mb-2 md:mb-4">{`${service.description}`}</p>
                </div>
              </div>
            </RotatedHoveredCard>
          ))}
        </div>
        <motion.div style={{ x }} className="max-lg:self-end mx-auto flex justify-center mt-8">
          <Link href={"/services"}>
            <MagneticRoundedButton 
            className="ms:ml-auto max-sm:self-end shrink-0 max-sm:size-32 max-lg:text-sm max-lg:size-44 "
            >
              Learn More
            </MagneticRoundedButton>
          </Link>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ServicesSection;
