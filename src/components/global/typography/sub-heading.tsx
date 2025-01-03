import React from "react";
import { cn } from "@/lib/utils";
function SubHeading({ className, children }: { children: string; className?: string }) {
  return <h6 className={cn("text-sm sm:text-base md:text-md lg:text-lg text-pretty", className)}>{children}</h6>;
}

export default SubHeading;
