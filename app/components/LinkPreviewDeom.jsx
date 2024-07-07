"use client";
import React from "react";
import { motion } from "framer-motion";
import LinkPreview from "./ui/LinkPreview";
import { Milestone } from "lucide-react";

export function LinkPreviewDemo() {
    return (
        <div className="flex justify-end  h-[28rem] xlg:h-[40rem] flex-col px-4">
            <div className="flex flex-row justify-between w-[90vw] ">
                <p className="text-neutral-500 text-start dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  mb-10">
                    Currently I am working on{" "}
                    <LinkPreview url="https://tailwindcss.com" className="font-bold">
                        CampusBuzz
                    </LinkPreview>{" "}
                    and{" "}it is in devlopment for
                    <LinkPreview url="https://framer.com/motion" className="font-bold">
                        KIIT Students
                    </LinkPreview>{" "}
                    for event management
                </p>
                
            </div>
        </div>
    );
}
