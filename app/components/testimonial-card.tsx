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

interface TestiCardProps {
  imageUrl: string;
  name: string;
  percentile: string;
  collegeName: string;
  logo: Logo;
  body: string;
}

const TestimonialCard: React.FC<TestiCardProps> = ({
  imageUrl,
  name,
  percentile,
  collegeName,
  logo,
  body,
}) => {
  return (
    <div className="w-70 bg-linear-to-br from-neutral-100 to-neutral-200 shadow-sm rounded-2xl h-full flex flex-col justify-between gap-10 items-center px-6 py-4">
      {/* Image and college */}
      <div className="flex w-full items-center justify-between">
        <div className="size-12 relative overflow-hidden rounded-full shrink-0 bg-gray-600 text-black font-sans">
          <Image src={imageUrl} alt={name} fill />
        </div>
        <div className="">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="size-12 rounded-md bg-neutral-300 flex items-center justify-center overflow-hidden cursor-pointer">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{logo.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      {/* the testimonials */}
      <div className="flex flex-col items-start justify-between">
        <p className="text-3xl font-mono text-impact-orange text-left">“</p>
        <p className="text-xl font-spectral text-impact-blue font-medium">
          {body}
        </p>
      </div>
      {/* name and percentile and other credentials. */}
      <div className="border-l w-full border-impact-orange flex pl-2 flex-col items-start gap-1">
        <p className="font-bold text-neutral-900 text-lg">{name}</p>
        <p className="font-medium text-neutral-700 text-md">{percentile}</p>
        <p className="font-medium text-neutral-500 text-md">{collegeName}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
