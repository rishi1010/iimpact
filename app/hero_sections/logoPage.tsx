"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppCommunityPopup } from "../components/popup";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import { Testimonials } from "../data";

const TestimonialCard = ({
  text,
  name,
  score,
  avatarUrl,
}: {
  text: string;
  name: string;
  score?: string;
  avatarUrl: string;
}) => (
  <div className="w-72 sm:w-80 shrink-0 h-auto sm:h-96 bg-linear-to-b from-white to-[#fafafa] p-5 sm:p-7 rounded-3xl flex flex-col gap-6 sm:gap-10 shadow-sm mx-2">
    <div className="text-balance text-zinc-500 font-light font-spectral text-base sm:text-lg leading-relaxed">
      &ldquo;{text}&rdquo;
    </div>
    <div className="flex w-full items-center gap-4 mt-auto">
      <div className=" relative rounded-full overflow-hidden size-10 sm:size-14 bg-gray-300 shrink-0">
        <Image src={avatarUrl} alt={name} fill />
      </div>
      <div className="font-sans flex flex-col gap-1 text-base sm:text-lg text-[#555555]">
        <div className="">{name}</div>
        <div className="">
          {score && <span className="text-impact-orange">{score}</span>}
        </div>
      </div>
    </div>
  </div>
);

const logos = Array.from({ length: 8 }, (_, i) => `/logos/logo-${i + 1}.png`);

const LogoPage = () => {
  return (
    <div
      id="logo"
      className="relative w-full min-h-dvh flex items-center overflow-y-hidden pt-32 sm:pt-40 lg:pt-52"
    >
      <WhatsAppCommunityPopup isPopUp={true} />
      <Image src="/logo-page-bg.png" alt="" fill quality={100} sizes="100vw" />

      {/* main body */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-10 sm:gap-14 w-full pb-12">
        {/* Testimonials Marquee */}
        <div className="relative w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:0.875rem]">
            {Testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </Marquee>
        </div>

        {/* See All Results button */}
        <Link
          href={"/testimonials"}
          className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]"
        >
          <div className="flex items-center justify-center rounded-full h-12 sm:h-14 lg:h-16 px-6 bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans text-base font-bold text-neutral-800">
              See All Results
            </div>
          </div>
        </Link>

        {/* IIM logos section */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-0 lg:justify-between px-6 sm:px-10 lg:px-16">
          {/* Text */}
          <div className="font-light text-white text-base sm:text-xl lg:text-2xl text-center lg:text-left max-w-sm lg:w-md">
            Hundreds of our students have made it to these top B-schools and
            beyond.
          </div>

          {/* Logo Marquee */}
          <div className="relative w-full lg:w-2xl overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s] [--gap:2.75rem]">
              {logos.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`IIM Logo ${i + 1}`}
                  width={50}
                  height={50}
                  className="object-contain mx-5"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
