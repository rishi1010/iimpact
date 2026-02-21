import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
}

export const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  percentile,
  examLabel = "CAT 19",
  collegeName,
  companyName,
  logos,
}) => {
  return (
    <div className="relative w-65 h-96 flex items-end rounded-2xl overflow-hidden shadow-2xl font-sans bg-[#4959BE]/30 hover:scale-110 transition-all duration-200">
      {/* Member photo */}
      <div className="inset-0 absolute overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info overlay */}
      <div className="px-4 py-3 w-full self-end bg-linear-to-b from-white/0 to-black/90 z-10">
        {/* Name */}
        <p className="text-neutral-100 text-xl font-bold leading-tight">
          {name}
        </p>

        {/* Percentile */}
        <p className="text-lg font-semibold mt-0.5 text-impact-orange">
          {percentile} %ile, {examLabel}
        </p>

        {/* Divider row: college · company + logos */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-white/90 text-xs font-bold">
            {collegeName} <span className="text-white/40">·</span> {companyName}
          </p>

          {/* Logos with Tooltips */}
          <div className="flex items-center gap-1.5 ml-2 shrink-0">
            {logos.map((logo, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center overflow-hidden cursor-pointer">
                    <img
                      src={logo.url}
                      alt={logo.name}
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
  );
};
