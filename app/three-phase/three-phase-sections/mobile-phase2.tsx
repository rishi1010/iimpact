"use client";

import React, { useRef } from "react";
import { motion, useInView, stagger, Variants } from "motion/react";
import { ArrowDown } from "lucide-react";

const points = [
  {
    num: 5,
    title: "Built on PYQ Testing",
    text: "Every strategy we teach is grounded in real CAT past year questions. We don't guess what the exam wants — we study it obsessively so you practice with gold-standard material that mirrors actual exam patterns.",
  },
  {
    num: 6,
    title: "Problem Catalogue",
    text: "For every concept you learn in Phase 1, we build a live catalogue of its question types. We discuss each variant, predict how it could be modified, and document everything into structured concept trees you can revise from.",
  },
  {
    num: 7,
    title: "Strategy Playbook",
    text: "Knowing how to solve isn't enough — you need to know what to attempt and in what order. We train you to identify which questions to solve first, which to rush through, and which to skip entirely, so you never waste a single minute on exam day.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const MPhase2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full min-h-dvh bg-linear-to-b from-[#ADDCEE] to-[#f6f4f0] flex flex-col justify-between px-6 pt-20 pb-12 overflow-hidden">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <motion.h1
        className="font-manrope font-bold text-4xl text-neutral-900 leading-tight mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        Phase 2:{" "}
        <span className="font-playfair italic font-normal underline decoration-impact-orange underline-offset-4">
          Strategy
        </span>
      </motion.h1>

      {/* ── Numbered points ───────────────────────────────────────── */}
      <motion.div
        ref={ref}
        className="flex flex-col gap-8 flex-1"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: stagger(0.12, { startDelay: 0.2 }),
            },
          },
        }}
      >
        {points.map((point, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-5"
            variants={itemVariants}
          >
            {/* Big number */}
            <span className="font-playfair text-7xl leading-none text-impact-orange shrink-0 w-12 text-center">
              {point.num}
            </span>
            {/* Text */}
            <div className="flex flex-col gap-1 pt-2">
              <p className="font-sans text-base text-neutral-900">
                <span className="font-bold underline decoration-impact-orange underline-offset-2">
                  {point.title}:
                </span>{" "}
                {point.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Bottom tagline + arrow ─────────────────────────────────── */}
      <motion.div
        className="flex flex-col items-start gap-2 mt-12"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
      >
        <p className="font-playfair text-3xl text-neutral-900 leading-snug">
          How we perform on the D-Day
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={28} className="text-neutral-900" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MPhase2;
