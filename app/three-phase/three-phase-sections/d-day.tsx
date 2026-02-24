import PhaseCard from "@/app/components/phase-cards";
import React from "react";
import Image from "next/image";

const DDay = () => {
  return (
    <section id="dday" className="w-full relative  min-h-dvh">
      <Image
        src="/3p-assets/dd-bg.png"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="max-w-7xl  mx-auto flex flex-col items-center p-9  justify-between">
        <h1 className="text-6xl font-manrope text-center text-neutral-900 font-bold">
          D-Day:{" "}
          <span className="underline decoration-impact-orange italic font-playfair">
            Success
          </span>
        </h1>
        <div className="flex self-start gap-17 mt-32  items-stretch  justify-center">
          <PhaseCard
            title="You Have (from P-1)"
            points={[
              "Strong Conceptual Foundation",
              "Problem Solving Intuition",
              "Timed Solving Practice",
            ]}
          />
          <PhaseCard
            title="You Have (from P-2)"
            points={[
              "Pattern Recognition",
              "Smart Attempt Strategy",
              "Question Selection",
            ]}
          />
          <PhaseCard
            title="You Have (from P-3)"
            points={[
              "Full Length Mock Experience",
              "Analysis Skill",
              "Last Minute Revision Locked In",
              "D-Day Confidence",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default DDay;
