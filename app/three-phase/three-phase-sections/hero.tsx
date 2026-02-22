import Navbar from "@/app/components/navbar";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto min-h-dvh flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-6xl font-manrope text-neutral-900 font-bold">
        The <span className="underline decoration-impact-orange">3-Phase</span>{" "}
        <span className="italic font-playfair">System</span>
      </h1>
      <div className="relative w-3xl h-1/2 mt-2">
        {/* Image + mask */}
        <img
          src="/3p-assets/3p-hero-bg.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-impact-blue to-impact-orange mix-blend-lighten" />

        {/* Arrow + text — anchored to bottom center of image */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <svg
            width="872"
            height="30"
            viewBox="0 0 872 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M871.414 16.1421C872.195 15.3611 872.195 14.0948 871.414 13.3137L858.686 0.5858C857.905 -0.195249 856.639 -0.195249 855.858 0.5858C855.077 1.36685 855.077 2.63318 855.858 3.41423L867.172 14.7279L855.858 26.0416C855.077 26.8227 855.077 28.089 855.858 28.8701C856.639 29.6511 857.905 29.6511 858.686 28.8701L871.414 16.1421ZM0 14.7279V16.7279H870V14.7279V12.7279H0V14.7279Z"
              fill="#1E1E1E"
            />
          </svg>
          <p className="text-neutral-800 font-semibold font-mono text-xl text-center whitespace-nowrap">
            Concepts → Strategy → Execution
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
