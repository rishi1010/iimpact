"use client";

import React, { useRef } from "react";
import { motion, useInView, stagger, Variants } from "motion/react";

interface PhaseCardProps {
  title: string;
  points: string[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const PhaseCard: React.FC<PhaseCardProps> = ({ title, points }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {/* Title animates first */}
      <motion.h2
        className="font-manrope font-medium text-impact-blue text-3xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {/* Bullet points stagger in after title */}
      <motion.ul
        className="flex flex-col gap-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: stagger(0.08, { startDelay: 0.25 }),
            },
          },
        }}
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2 font-poppins text-neutral-800 text-base"
            variants={itemVariants}
          >
            <span className="mt-1.5 size-1.5 rounded-full bg-neutral-800 shrink-0" />
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default PhaseCard;
