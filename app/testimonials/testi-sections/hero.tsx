"use client";

import Navbar from "@/app/components/navbar";
import React from "react";
import { motion, Variants } from "motion/react";
import { Star } from "lucide-react";
import CountUp from "react-countup";

const Hero = () => {
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const starVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-dvh bg-linear-to-b from-[#f6f4f0] via-[#AEDCEF] to-[#f4f6f0] flex flex-col"
    >
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 lg:px-10 py-27 lg:py-0 gap-12 lg:gap-16">
        {/* ── Left: Stars + Title ───────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2">
          {/* Stars */}
          <motion.div
            className="flex gap-2"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} variants={starVariants}>
                <Star className="fill-impact-orange stroke-impact-blue size-6" />
              </motion.div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.div
            className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-manrope font-semibold text-impact-blue leading-tight">
              Hear from past
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair italic underline decoration-impact-orange text-impact-blue leading-tight">
              IIMpact
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-manrope font-semibold text-impact-blue leading-tight">
              Achievers
            </h1>
          </motion.div>
        </div>

        {/* ── Right: Bento Grid ──────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 mt-10 lg:grid-cols-2 lg:grid-rows-4 w-full lg:w-1/2 gap-4 lg:gap-6 lg:h-[70vh]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-1 bg-linear-to-t from-impact-blue to-impact-blue/40 rounded-3xl flex flex-col items-center justify-center p-6 lg:p-4 font-poppins gap-3 shadow-xl"
          >
            <p className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold drop-shadow-sm">
              1 in 6
            </p>
            <p className="text-white/90 font-sans text-sm lg:text-base text-center">
              Scored 99.5+ percentile
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-1 bg-linear-to-t from-impact-blue to-impact-blue/40 rounded-3xl flex flex-col items-center justify-center p-6 lg:p-4 font-poppins gap-3 shadow-xl"
          >
            <p className="text-white text-3xl text-center lg:text-5xl xl:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={25} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-base font-medium opacity-80">
                {" "}
                students
              </span>
            </p>
            <p className="text-white/90 font-sans text-sm lg:text-base text-center">
              Scored 99+ percentile
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-1 bg-linear-to-t from-impact-orange to-impact-orange/40 rounded-3xl flex flex-col items-center justify-center p-6 lg:p-4 font-poppins gap-3 shadow-xl"
          >
            <p className="text-white text-3xl text-center lg:text-5xl xl:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-base font-medium opacity-80">
                {" "}
                students
              </span>
            </p>
            <p className="text-white/90 font-sans text-sm lg:text-base text-center">
              Scored 95+ percentile
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-1 bg-linear-to-t from-impact-orange to-impact-orange/40 rounded-3xl flex flex-col items-center justify-center p-6 lg:p-4 font-poppins gap-3 shadow-xl"
          >
            <p className="text-white text-3xl text-center lg:text-5xl xl:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={70} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-base font-medium opacity-80">
                {" "}
                students
              </span>
            </p>
            <p className="text-white/90 font-sans text-sm lg:text-base text-center">
              Scored 90+ percentile
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
