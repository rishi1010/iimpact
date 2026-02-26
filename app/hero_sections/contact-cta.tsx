"use client";

import React from "react";
import { motion } from "motion/react";

const ContactCta = () => {
  return (
    <section
      className="bg-[url('/hero-bg.png')] w-full min-h-64 sm:min-h-96 lg:h-141 bg-no-repeat bg-cover flex items-center justify-center flex-col gap-6 sm:gap-8 lg:gap-9 px-6 sm:px-12 lg:px-20 py-16 lg:py-0 text-center"
      id="contact-cta"
    >
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-manrope text-neutral-900 font-semibold">
        Lets Talk!
      </h1>
      <p className="text-base sm:text-xl lg:text-2xl font-manrope text-neutral-600 font-medium text-balance max-w-2xl">
        Turn confusion into a clear plan with a free 1-on-1 conversation with a
        100%iler mentor.
      </p>
      <motion.a
        href="/contact"
        className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 flex items-center rounded-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="px-8 h-12 sm:h-14 lg:h-16 flex items-center justify-center rounded-full bg-linear-to-b from-black to-[#333] inset-shadow-xs inset-shadow-white">
          <div className="font-sans font-bold text-base lg:text-xl text-neutral-100">
            Contact Us
          </div>
        </div>
      </motion.a>
    </section>
  );
};

export default ContactCta;
