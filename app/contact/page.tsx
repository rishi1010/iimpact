import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import type { Sections } from "../components/footer";

export default function Contact() {
  const sections: Sections[] = [{ label: "Contact Us", href: "#contact" }];
  return (
    <section className=" relative w-full h-dvh  p-20">
      {/* navbar */}
      <Navbar />

      {/* body content */}
      <div
        id="contact"
        className=" w-full h-full mx-auto max-w-7xl flex gap-80 items-center "
      >
        {/* body: image */}
        <Image
          src={"/iimpact_logo.png"}
          alt="iimpact's logo"
          width={291}
          height={480}
        />

        {/* text with qr and link */}
        <div className="flex flex-col w-1/2 h-full mt-10 gap-6 items-center text-center">
          <h1 className="text-balance text-7xl text-neutral-900 font-manrope font-bold">
            Seen Enough? Lets Talk
          </h1>
          <p className="text-balance text-2xl text-neutral-700 font-manrope">
            Book a free 1-on-1 call with a <strong>100%ile</strong> mentor
          </p>
          <p className="text-base text-neutral-600 font-sans">
            Scan the QR Code below or click the link below it!
          </p>
        </div>
      </div>
      <Footer section={sections} />
    </section>
  );
}
