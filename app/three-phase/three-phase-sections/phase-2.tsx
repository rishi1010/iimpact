import PhaseCard from "@/app/components/phase-cards";
import React from "react";
import Image from "next/image";

const Phase2 = () => {
  return (
    <section id="phase2" className="w-full relative  min-h-dvh">
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
        <div className="flex gap-12 self-end mt-35 items-stretch  justify-center">
          <PhaseCard
            title="Built On PYQ Testing"
            points={[
              "The gold-standard in practice material",
              "Learn to map theory to question-types",
              "Master every pattern of question asked",
            ]}
          />
          <PhaseCard
            title="Problem Catalogue"
            points={[
              "Revisit every concept through an exam lens",
              "Predict modifications- think like the setter",
              "Retain using handy concept-trees",
            ]}
          />
          <PhaseCard
            title="Strategy Playbook"
            points={[
              "Identify your ideal attempt strategy",
              "Know what to solve fast, what to solve first",
              "Know what to skip and why",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Phase2;
