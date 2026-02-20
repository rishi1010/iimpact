"use client";

import { motion, useAnimation } from "motion/react";
import Image from "next/image";

const phases = [
  {
    blue: "Concepts",
    orange: "(How To Solve)",
  },
  {
    blue: "Strategy",
    orange: "(What To Solve)",
  },
  {
    blue: "Performance",
    orange: "(How To Score)",
  },
];

export default function ThreePhaseCard() {
  const lineControls = useAnimation();
  const textControls = [useAnimation(), useAnimation(), useAnimation()];

  const handleHoverStart = async () => {
    lineControls.set({ scaleY: 0 });
    textControls.forEach((ctrl) => ctrl.set({ opacity: 0, x: -16 }));

    lineControls.start({
      scaleY: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    });

    // Use transition.delay instead of setTimeout
    const delays = [0.1, 0.35, 0.6];
    textControls.forEach((ctrl, i) => {
      ctrl.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, ease: "easeOut", delay: delays[i] },
      });
    });
  };

  const handleHoverEnd = () => {
    lineControls.start({
      scaleY: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    });
    textControls.forEach((ctrl) =>
      ctrl.start({
        opacity: 0,
        x: -16,
        transition: { duration: 0.25, ease: "easeIn" },
      }),
    );
  };

  return (
    <motion.div
      className="row-span-8 col-span-2 bento-card p-4 flex items-center justify-between flex-col gap-2"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <h2 className="font-poppins font-bold text-lg leading-tight">
        <span className="text-impact-blue">Structured</span>{" "}
        <span className="text-impact-orange">3-Phase</span>{" "}
        <span className="text-impact-blue">Approach</span>
      </h2>

      <div className="flex items-center justify-between gap-4">
        {/* SVG line with scale animation from top */}
        <motion.div
          animate={lineControls}
          initial={{ scaleY: 1 }}
          style={{ transformOrigin: "top" }}
        >
          <Image
            src={"/three-phase.svg"}
            alt="three phase line with numbers 1,2,3"
            width={40}
            height={431}
          />
        </motion.div>

        {/* Text phases */}
        <div className="flex h-full justify-between flex-col">
          {phases.map((phase, i) => (
            <motion.h1
              key={i}
              animate={textControls[i]}
              initial={{ opacity: 1, x: 0 }}
              className="font-poppins font-bold text-lg leading-tight"
            >
              <span className="text-impact-blue">{phase.blue}</span>{" "}
              <div className="text-impact-orange">{phase.orange}</div>
            </motion.h1>
          ))}
        </div>
      </div>

      <h1 className="font-poppins text-impact-blue font-bold text-xl self-start leading-tight">
        Day One to{" "}
        <span className="text-impact-orange italic font-playfair">D-Day</span>
      </h1>
    </motion.div>
  );
}
