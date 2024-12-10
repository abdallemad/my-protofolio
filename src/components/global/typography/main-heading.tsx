import React from "react";
import { cn } from "@/lib/utils";
function MainHeading({ children }: { children: string; className?: string }) {
  return (
    <h1 className={cn("text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold mb-4 text-pretty")}>
      {children}
    </h1>
  );
}

export default MainHeading;
