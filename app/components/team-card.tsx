"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface Logo {
  url: string;
  name: string;
}

interface TeamCardProps {
  imageUrl: string;
  name: string;
  percentile: string;
  examLabel?: string;
  collegeName: string;
  companyName: string;
  logos: Logo[];
  linkedinUrl?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  percentile,
  examLabel = "CAT 19",
  collegeName,
  companyName,
  logos,
  linkedinUrl,
}) => {
  const handleClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`relative w-68 h-96 flex items-end rounded-2xl overflow-visible shadow-2xl font-sans hover:scale-110 transition-all duration-200 ${linkedinUrl ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#4959BE]/30">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
            fill
          />
        </div>

        <div className="px-4 py-3 w-full absolute bottom-0 bg-linear-to-b from-white/0 to-black/90">
          <p className="text-neutral-100 text-xl font-bold leading-tight">
            {name}
          </p>
          <p className="text-lg font-semibold mt-0.5 text-impact-orange">
            {percentile} %ile, {examLabel}
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-white/90 text-xs font-bold">
              {collegeName} <span className="text-white/40">·</span>{" "}
              {companyName}
            </p>
            <div className="flex items-center gap-1.5 ml-2 shrink-0">
              {logos.map((logo, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div
                      className="relative w-7 h-7 rounded-md bg-white flex items-center justify-center overflow-hidden cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={logo.url}
                        alt={logo.name}
                        fill
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{logo.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
