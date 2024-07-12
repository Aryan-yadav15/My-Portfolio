"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "../HoverCard";

export function ThreeDCardDemo({ project }) {
  return (
    <CardContainer className="inter-var transition-width duration-500 ease-in-out">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl hover:max-w-2xl h-auto rounded-xl transition-all duration-500 ease-in-out">
        <div>
          <Image src={project.img} alt="Project Image" width={900} height={900} className="w-[150%] h-auto rounded-t-xl" />
        </div>
      </CardBody>
    </CardContainer>
  );
}
