"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const ContactCta = () => {
  return (
    <section
      className="w-full h-141  flex items-center justify-center flex-col gap-9"
      id="ContactCta"
    >
      <div className="flex gap-8 items-center">
        <Image
          src={"/3p-assets/leaf.png"}
          alt="olympic leaf"
          width={140}
          height={213}
        />
        <h1 className="text-7xl font-manrope text-neutral-900 font-semibold">
          Lets Talk!
        </h1>
        <Image
          src={"/3p-assets/leaf.png"}
          alt="olympic leaf"
          width={140}
          height={213}
          className="scale-x-[-1]"
        />
      </div>
      <p className="text-2xl font-manrope text-neutral-600 font-medium">
        Turn your confusion into a winning strategy with a free 1-on-1 with a
        100%ile Mentor
      </p>
      <motion.div
        className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200  flex items-center rounded-full "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 flex items-center justify-center rounded-full bg-linear-to-b from-black to-[#333] inset-shadow-xs inset-shadow-white">
          <div className="font-sans font-bold text-base md:text-xl text-neutral-100">
            Contact Us
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCta;
