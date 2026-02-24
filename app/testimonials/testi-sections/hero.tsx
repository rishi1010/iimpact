"use client";

import Navbar from "@/app/components/navbar";
import React from "react";
import { motion, Variants } from "motion/react";
import { Star } from "lucide-react";

const Hero = () => {
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren ensures the stars wait for the H1 (0.6s) before starting
        delayChildren: 0.8,
        staggerChildren: 0.15, // Time between each star appearing
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
      className="relative w-full h-[60vh] flex flex-col items-center justify-center px-6"
    >
      {/* 1. Ensure Navbar is absolute so it doesn't push the flex content down */}

      <Navbar />

      {/* 2. This container will now be perfectly centered vertically */}
      <div className="flex max-w-7xl flex-col items-center gap-5 w-full ">
        {/* The Stars Container */}
        <motion.div
          className="flex text-lg gap-2 text-impact-blue"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} variants={starVariants}>
              <Star className="fill-impact-orange stroke-impact-blue" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-manrope text-impact-blue flex-col gap-2 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-semibold">What Students Say About</h1>
          <h1 className="italic underline decoration-impact-orange font-playfair">
            IIMPact
          </h1>
        </motion.div>

        {/* 3. Testimonials beneath
        <div className="w-full">
          <Marquee pauseOnHover className="[--duration:30s]">
            {reviews.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
