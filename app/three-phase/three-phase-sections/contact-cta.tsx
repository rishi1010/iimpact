"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ContactCta = () => {
  return (
    <section
      className="w-full min-h-64 sm:min-h-96 lg:h-141 flex items-center justify-center flex-col gap-6 sm:gap-8 lg:gap-9 px-6 sm:px-12 lg:px-20 py-16 lg:py-0 text-center"
      id="ContactCta"
    >
      {/* Heading with leaves */}
      <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center">
        <Image
          src="/3p-assets/leaf.png"
          alt="olympic leaf"
          width={140}
          height={213}
          className="w-12 sm:w-20 lg:w-[140px] h-auto"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-manrope text-neutral-900 font-semibold">
          Lets Talk!
        </h1>
        <Image
          src="/3p-assets/leaf.png"
          alt="olympic leaf"
          width={140}
          height={213}
          className="w-12 sm:w-20 lg:w-[140px] h-auto scale-x-[-1]"
        />
      </div>

      {/* Subtext */}
      <p className="text-base sm:text-xl lg:text-2xl font-manrope text-neutral-600 font-medium text-balance max-w-2xl">
        Turn your confusion into a winning strategy with a free 1-on-1 with a
        100%ile Mentor
      </p>

      {/* CTA Button */}
      <motion.div
        className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 flex items-center rounded-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <Link href="/contact">
          <div className="px-8 h-12 sm:h-14 lg:h-16 flex items-center justify-center rounded-full bg-linear-to-b from-black to-[#333] inset-shadow-xs inset-shadow-white">
            <div className="font-sans font-bold text-base lg:text-xl text-neutral-100">
              Contact Us
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactCta;
