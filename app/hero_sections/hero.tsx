"use client";
import Navbar from "../components/navbar";

import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-dvh flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <Navbar />
      </motion.div>
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        className="z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-14">
        {/* hero text — no animation, renders immediately for LCP */}
        <div className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-manrope text-impact-blue flex-col gap-2 items-center text-center">
          <h1 className="font-semibold">India's MBA Dream</h1>
          <h1 className="italic underline decoration-impact-orange font-playfair">
            Redefined
          </h1>
        </div>

        {/* subtext */}
        <div className="text-balance text-base sm:text-lg md:text-xl font-sans max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-center text-impact-blue">
          IIMpact is the smarter way to crack CAT. Think like a topper using a
          proven system developed by CAT{" "}
          <span className="font-bold">100%ilers</span> from India’s best
          B-Schools.
        </div>

        {/* button */}
        <motion.a
          href="/contact"
          className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 shadow-2xl flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="sm:w-36 sm:h-14 md:w-36 md:h-12 flex items-center justify-center rounded-full px-6 py-2 bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans font-bold text-base md:text-lg text-neutral-800">
              Join Now
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
