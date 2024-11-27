"use client";
import React from "react";
import { motion } from "framer-motion";
import LinkPreview from "./ui/LinkPreview";
import { Milestone } from "lucide-react";

export function LinkPreviewDemo() {
    return (
        <div className="flex justify-end h-[28rem] xlg:h-[40rem] flex-col px-1">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:w-full max-w-5xl">
                <div className="text-neutral-500 text-start dark:text-neutral-400 text-xl md:text-3xl mb-10 w-[70vw]">
                    Currently, I am working on{" "}
                    <LinkPreview url="https://campus-buzz.vercel.app" className="font-bold">
                        CampusBuzz
                    </LinkPreview>{" "}
                    which is in development for{" "}
                    <LinkPreview url="https://kiit.ac.in" className="font-bold">
                        KIIT Students
                    </LinkPreview>{" "}
                    to manage events.
                </div>
            </div>
        </div>
    );
}
