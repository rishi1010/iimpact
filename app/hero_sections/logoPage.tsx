"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Tanishq Gupta",
    score: "99.99%ile",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Ananya Sharma",
    score: "99.85%ile",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Rohan Mehta",
    score: "99.72%ile",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Priya Iyer",
    score: "99.91%ile",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Kabir Singh",
    score: "99.68%ile",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, porta nec sodales et, convallis quis dui. Nulla rhoncus, elit sit amet efficitur consequat, mi mauris fringilla nibh, vel volutpat ligula purus vitae lorem.",
    name: "Meera Nair",
    score: "99.95%ile",
  },
];

const TestimonialCard = ({
  text,
  name,
  score,
}: {
  text: string;
  name: string;
  score: string;
}) => (
  <div className="w-80 shrink-0 h-96 bg-linear-to-b from-white to-[#fafafa] p-7 rounded-3xl flex flex-col gap-10 shadow-sm">
    <div className="text-balance text-zinc-500 font-light font-spectral text-lg leading-relaxed">
      "{text}"
    </div>
    <div className="flex w-full items-center gap-4 mt-auto">
      <div className="rounded-full size-11 bg-gray-300 shrink-0"></div>
      <div className="font-sans text-lg text-[#555555]">
        {name} <span className="text-impact-orange">{score}</span>
      </div>
    </div>
  </div>
);

const LogoPage = () => {
  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  const logos = Array.from({ length: 8 }, (_, i) => `/logos/logo-${i + 1}.png`);
  const doubled_logos = [...logos, ...logos];

  return (
    <div
      id="logo"
      className="relative w-full min-h-[100dvh] flex items-center  overflow-y-hidden pt-52"
    >
      <Image src="/logo-page-bg.png" alt="" fill quality={100} sizes="100vw" />
      {/* main body */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-14 w-full">
        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-linear-to-r from-white/60 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-linear-to-l from-white/60 to-transparent" />

          {/* Scrolling track */}
          <div className="flex gap-3.5 animate-marquee w-max">
            {doubled.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
        {/* button */}
        <div className="p-0.75 cursor-pointer hover:scale-105 active:scale-90 transition-all duration-200 flex items-center rounded-full bg-linear-to-br from-white to-[#cdcdcd]">
          <div className="sm:w-36 sm:h-14 md:w-40 md:h-12 flex items-center justify-center rounded-full h-16 bg-linear-to-b from-white to-[#e3e3e3]">
            <div className="font-sans font-bold text-md text-neutral-800">
              See All Results
            </div>
          </div>
        </div>
        {/* IIM logo container */}
        <div className="flex items-center w-full justify-between p-16">
          {/* text */}
          <div className="font-light text-white text-2xl w-md">
            100s of our students went to these top B schools with many more to
            others!
          </div>
          {/* logo container */}
          <div className="relative w-2xl overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-linear-to-r from-black/60 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-linear-to-l from-black/60 to-transparent" />

            <div className="flex gap-11 animate-marquee">
              {doubled_logos.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`IIM Logo ${i + 1}`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoPage;
