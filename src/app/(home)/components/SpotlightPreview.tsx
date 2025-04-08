import React from "react";
import { Spotlight } from "@/components/ui/spotlight_new";

export function SpotlightNewDemo() {
  return (
    <div className="h-[60rem] w-full rounded-md flex md:items-center md:justify-center bg-[#0e0e10]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-5xl md:text-8xl font-bold text-center animated-gradient">
        Enes Yilmaz <br />
        </h1>
        <p className="mt-6 font-normal text-lg max-w-lg text-center mx-auto p-text-effect">
          Computer Science @ Ohio State University + Researcher
        </p>
      </div>
    </div>
  );
}
