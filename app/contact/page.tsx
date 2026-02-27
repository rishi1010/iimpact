"use client";

import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import type { Sections } from "../components/footer";
import { motion } from "motion/react";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Contact() {
  const sections: Sections[] = [{ label: "Contact Us", href: "#contact" }];

  return (
    <section className="relative w-full min-h-dvh flex flex-col">
      <Navbar />

      <div
        id="contact"
        className="flex-1 w-full mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
      >
        {/* Logo — slides in from left on desktop */}
        <motion.div
          className="hidden lg:block shrink-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Image
            src="/iimpact_logo.png"
            alt="IIMPact's logo"
            width={291}
            height={480}
            className="object-contain"
          />
        </motion.div>

        {/* Text + QR */}
        <div className="flex flex-col w-full lg:w-1/2 gap-5 items-center text-center">
          <motion.h1
            className="text-balance tracking-tighter text-4xl sm:text-5xl lg:text-7xl text-neutral-900 font-manrope font-bold"
            {...fadeUp(0.05)}
          >
            Seen Enough? Let&apos;s Talk!
          </motion.h1>

          <motion.p
            className="text-balance text-lg sm:text-xl lg:text-2xl text-neutral-700 font-manrope"
            {...fadeUp(0.2)}
          >
            Book a free 1-on-1 call with a <strong>100%ile</strong> mentor
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-balance text-neutral-600 font-sans"
            {...fadeUp(0.3)}
          >
            Scan the QR Code below or click the link below it to start a chat
            with Rishi Sir!
          </motion.p>

          {/* QR — subtle scale in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.45,
            }}
          >
            <Image
              src="/qr-code.svg"
              alt="WhatsApp QR code"
              width={300}
              height={300}
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72"
            />
          </motion.div>

          <motion.a
            href="https://wa.me/919969195741?text=I%20am%20interested%20in%20knowing%20more%20about%20IIMPact's%20MBA%20Courses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base -mt-3 text-impact-orange font-sans underline underline-offset-4 hover:opacity-70 transition-opacity"
            {...fadeUp(0.6)}
          >
            or click here to open WhatsApp →
          </motion.a>
        </div>
      </div>

      <Footer section={sections} />
    </section>
  );
}
