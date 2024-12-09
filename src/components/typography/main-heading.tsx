import React from "react";
import { cn } from "@/lib/utils";
function MainHeading({ children }: { children: string; className?: string }) {
  return (
    <h1 className={cn("text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-pretty")}>
      {children}
    </h1>
  );
}

export default MainHeading;
