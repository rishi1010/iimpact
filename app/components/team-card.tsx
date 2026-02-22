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

interface ScribbleProps {
  text: string;
  side: "left" | "right";
  color?: string; // e.g. "impact-orange" or "impact-blue"
}

interface TeamCardProps {
  imageUrl: string;
  name: string;
  percentile: string;
  examLabel?: string;
  collegeName: string;
  companyName: string;
  logos: Logo[];
  scribble?: ScribbleProps;
}

const ScribbleSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M0.678041 -2.21372e-06L0.503765 1.04942L-2.38451e-06 1.36727C1.63383 1.22478 2.39629 3.78396 3.94843 4.3758C4.4168 4.5539 4.49577 4.00316 4.34872 3.83602C4.31332 3.79492 3.74148 3.636 3.39021 3.29898C3.09067 3.00853 1.642 1.70155 1.90342 1.37001C6.1296 1.79471 10.0045 2.80851 13.6834 4.98135C21.1799 9.40373 25.289 17.4046 25.9807 26C26.5144 13.3055 15.9108 2.29887 3.53725 1.09052C3.82317 0.37264 6.14049 1.13984 5.98528 -1.74974e-06L0.680763 -2.21348e-06L0.678041 -2.21372e-06Z"
      fill="currentColor"
    />
  </svg>
);

export const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  percentile,
  examLabel = "CAT 19",
  collegeName,
  companyName,
  logos,
  scribble,
}) => {
  return (
    <div className="relative w-68 h-96 flex items-end rounded-2xl overflow-visible shadow-2xl font-sans hover:scale-110 transition-all duration-200">
      {/* Scribble arrow — hidden on sm/md, visible on lg+ */}
      {scribble && (
        <div
          className={`
            hidden lg:flex absolute top-[-15%] flex-col gap-1
            text-${scribble.color ?? "impact-blue"}
            ${
              scribble.side === "right"
                ? "right-[-45%] items-start"
                : "left-[-45%] items-end"
            }
          `}
        >
          <span className="font-homemade text-lg">{scribble.text}</span>
          {/* Arrow points down-left for right side, down-right for left side */}
          <div
            className={
              scribble.side === "right" ? "rotate-250" : "rotate-180 self-end"
            }
          >
            <ScribbleSvg />
          </div>
        </div>
      )}

      {/* Card itself needs overflow-hidden for the photo */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#4959BE]/30">
        {/* Member photo */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Info overlay */}
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
    </div>
  );
};
