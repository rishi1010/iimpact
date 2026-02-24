import PhaseCard from "@/app/components/phase-cards";
import React from "react";
import Image from "next/image";

const Phase3 = () => {
  return (
    <section id="phase3" className="w-full relative  min-h-dvh">
      <Image
        src="/3p-assets/p3-bg.png"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="max-w-7xl  mx-auto flex flex-col items-center p-9 justify-between">
        <h1 className="text-6xl font-manrope text-center text-neutral-900 font-bold">
          Phase 3:{" "}
          <span className="underline decoration-impact-orange italic font-playfair">
            Execution
          </span>
        </h1>
        <div className="flex gap-17 mt-32 self-start items-stretch  justify-center">
          <PhaseCard
            title="Live Mock Analysis"
            points={[
              "We analyse each question with you",
              "From a CONCEPT lens (phase 1)",
              "From a STRATEGY lens (phase 2)",
            ]}
          />
          <PhaseCard
            title="Target Final Revision"
            points={[
              "Fast Paced Lectures on MVP Topics",
              "Quizzes on Most Expected Questions",
              "Key Formulas, Patterns & Conclusions",
              "Last Month, Week & D-Day Strategy",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Phase3;
