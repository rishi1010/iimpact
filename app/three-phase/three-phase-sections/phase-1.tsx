import PhaseCard from "@/app/components/phase-cards";
import React from "react";
import Image from "next/image";

const Phase1 = () => {
  return (
    <section id="phase1" className="relative w-full  min-h-dvh">
      <Image
        src="/3p-assets/p1-bg.png"
        alt=""
        fill
        quality={100}
        sizes="90vw"
        className="object-cover -z-10"
      />
      <div className="max-w-7xl  mx-auto flex flex-col items-center p-9 justify-between">
        <h1 className="text-6xl font-manrope text-center text-neutral-900 font-bold">
          Phase 1:{" "}
          <span className="underline decoration-impact-orange italic font-playfair">
            Concepts
          </span>
        </h1>
        <div className="flex self-end gap-5 mt-20 items-stretch  justify-end">
          <PhaseCard
            title="Live Interactive Classes"
            points={[
              "50 hours (not 300+ like other coaching classes)",
              "Unmute and ask questions anytime",
              "Learn how to think, not just formulas",
            ]}
          />
          <PhaseCard
            title="For Beginners to Pros"
            points={[
              "Complete beginners & veterans in same class",
              "Taught by 100%ilers who know how to simplify",
            ]}
          />
          <PhaseCard
            title="Practice from Day 1"
            points={[
              "Timed practice quizzes from the start",
              "Homework to reinforce concepts",
              "Application exercises, not just theory",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Phase1;
