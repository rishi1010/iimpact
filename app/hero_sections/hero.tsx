"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6">
      <Image src="/hero-bg.png" alt="" fill quality={100} sizes="100vw" />
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-14">
        {/* hero text */}
        <motion.div
          className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-manrope text-impact-blue flex-col gap-2 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        >
          <h1 className="font-semibold">India's MBA Dream</h1>
          <h1 className="italic underline decoration-impact-orange font-playfair">
            Redefined
          </h1>
        </motion.div>

        {/* subtext */}
        <motion.div
          className="text-balance text-base sm:text-lg md:text-xl font-sans max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-center text-impact-blue"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          A smarter way to crack CAT. Learn the topper's way of thinking with a
          proven 3-phase system led by{" "}
          <span className="font-bold">100%ilers</span> from IIM Bangalore & FMS
          Delhi.
        </motion.div>

        {/* button */}
        <motion.div
          className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 shadow-2xl flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 flex items-center justify-center rounded-full bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans font-bold text-base md:text-xl text-neutral-800">
              Join Now
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
