import PhaseCard from "@/app/components/phase-cards";
import React from "react";
import Image from "next/image";

const Phase2 = () => {
  return (
    <div className="w-full relative  min-h-dvh">
      <Image
        src="/3p-assets/p2-bg.png"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="max-w-7xl  mx-auto flex flex-col items-center p-9 pr-0 justify-between">
        <h1 className="text-6xl font-manrope text-center text-neutral-900 font-bold">
          Phase 2:{" "}
          <span className="underline decoration-impact-orange italic font-playfair">
            Strategy
          </span>
        </h1>
        <div className="flex gap-17 self-end mt-35 items-stretch  justify-center">
          <PhaseCard
            title="Built On PYQ Testing"
            points={[
              "Gold Standard Practice Material",
              "Real Exam and Question Type",
              "Learn how to solve any pattern",
            ]}
          />
          <PhaseCard
            title="Problem Catalogue"
            points={[
              "Take Every Concept",
              "Discuss Live and Predict Modifications",
              "Document In Concept Trees",
            ]}
          />
          <PhaseCard
            title="Strategy Playbook"
            points={[
              "Identify Attempt Order",
              "Which to Solve Fast, Which to Solve First",
              "Which to Skip",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Phase2;
