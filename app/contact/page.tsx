import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import type { Sections } from "../components/footer";

export default function Contact() {
  const sections: Sections[] = [{ label: "Contact Us", href: "#contact" }];

  return (
    <section className="relative w-full min-h-dvh flex flex-col">
      <Navbar />

      {/* body content */}
      <div
        id="contact"
        className="flex-1 w-full mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
      >
        {/* Logo — hidden on mobile, shows on lg+ */}
        <div className="hidden lg:block shrink-0">
          <Image
            src="/iimpact_logo.png"
            alt="IIMPact's logo"
            width={291}
            height={480}
            className="object-contain"
          />
        </div>

        {/* Text + QR */}
        <div className="flex flex-col w-full lg:w-1/2 gap-5 items-center text-center">
          <h1 className="text-balance tracking-tighter text-4xl sm:text-5xl lg:text-7xl text-neutral-900 font-manrope font-bold">
            Seen Enough? Let&apos;s Talk!
          </h1>
          <p className="text-balance text-lg sm:text-xl lg:text-2xl text-neutral-700 font-manrope">
            Book a free 1-on-1 call with a <strong>100%ile</strong> mentor
          </p>
          <p className="text-sm sm:text-base text-neutral-600 font-sans">
            Scan the QR Code below or click the link below it to start a chat
            with Rishi Sir!
          </p>
          <Image
            src="/qr-code.svg"
            alt="WhatsApp QR code"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72"
          />
          <a
            href="https://wa.me/919969195741?text=I%20am%20interested%20in%20knowing%20more%20about%20IIMPact's%20MBA%20Courses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base -mt-3 text-impact-orange font-sans underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            or click here to open WhatsApp →
          </a>
        </div>
      </div>

      <Footer section={sections} />
    </section>
  );
}
