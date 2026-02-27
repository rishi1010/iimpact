"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay, // This now correctly maps to the 'custom' prop
    },
  }),
};

const diamonds = [
  { label: "Concepts", src: "/3p-assets/concept.png", delay: 0.2 },
  { label: "Strategy", src: "/3p-assets/strat.png", delay: 0.35 },
  { label: "Execution", src: "/3p-assets/exec.png", delay: 0.5 },
];

const MobileHero = () => {
  return (
    <section className="relative w-full min-h-dvh bg-[#f6f4f0] flex flex-col justify-between px-6 pt-28 pb-12 overflow-hidden">
      <Navbar />
      {/* ── Title ─────────────────────────────────────────────────── */}
      <motion.div className="flex flex-col" initial="hidden" animate="visible">
        <motion.h1
          className="font-manrope text-center font-bold text-4xl text-neutral-900 leading-tight"
          variants={fadeUp}
          custom={0.05}
        >
          The 3 Phase{" "}
          <span className="font-playfair italic font-normal underline decoration-impact-orange underline-offset-4">
            System
          </span>
        </motion.h1>
      </motion.div>

      {/* ── Diamonds ──────────────────────────────────────────────── */}
      {/* Rendered bottom-first in DOM but layered via z-index        */}
      <div className="relative flex flex-col items-center -my-4">
        {[...diamonds].reverse().map((diamond, i) => (
          <motion.div
            key={diamond.label}
            className="relative -mt-10 first:mt-0"
            style={{ zIndex: i + 1 }}
            initial="hidden"
            animate="visible"
            // 1. Pass the object directly
            variants={slideFromRight}
            // 2. Pass the dynamic value here
            custom={diamond.delay}
          >
            {/* Placeholder — swap with real <Image> when assets are ready */}
            <div className=" relative w-64 h-48 flex items-center justify-center">
              {/* Replace below div with:
                  <Image src={diamond.src} alt={diamond.label} width={260} height={190} className="object-contain" /> */}
              <Image
                src={diamond.src}
                alt={diamond.label}
                width={260}
                height={190}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom tagline ────────────────────────────────────────── */}
      <motion.p
        className="font-playfair text-3xl text-neutral-900 text-center leading-snug"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0.75}
      >
        A bespoke framework,
        <br />
        that works everytime!
      </motion.p>
    </section>
  );
};

export default MobileHero;
