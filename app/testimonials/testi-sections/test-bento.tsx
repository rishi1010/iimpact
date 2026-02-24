"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const TestiBento = () => {
  return (
    <section className="w-full min-h-dvh bg-linear-to-b from-[#f6f4f0] via-[#AEDCEF] to-[#f4f6f0] flex items-center py-16 lg:py-0">
      <div className="w-full mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between px-6 lg:p-10 gap-12 lg:gap-16">
        {/* Text Area */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-manrope text-center lg:text-left text-impact-blue flex flex-col gap-2">
          <h1 className="font-bold">
            Proven <span className="text-impact-orange">Results.</span>
          </h1>
          <h1 className="font-bold">Better Outcomes!</h1>
        </div>

        {/* Bento Grid: 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 w-full lg:w-1/2 gap-6 lg:gap-10 h-auto lg:h-[75vh]">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-2 bg-linear-to-t from-impact-blue to-impact-blue/40 rounded-3xl flex flex-col items-center justify-center p-8 lg:p-4 font-poppins gap-4 shadow-xl "
          >
            <p className="text-white text-5xl lg:text-6xl font-bold drop-shadow-sm">
              1 in 6
            </p>
            <p className="text-white/90 font-sans text-base lg:text-lg text-center">
              Scored 99.5+ percentile
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-2 bg-linear-to-t from-impact-blue to-impact-blue/40 rounded-3xl flex flex-col items-center justify-center p-8 lg:p-4 font-poppins gap-4 shadow-xl  "
          >
            <p className="text-white text-5xl lg:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={25} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-xl font-medium opacity-80"> students</span>
            </p>
            <p className="text-white/90 font-sans text-base lg:text-lg text-center">
              Scored 99+ percentile
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-2 bg-linear-to-t from-impact-orange to-impact-orange/40 rounded-3xl flex flex-col items-center justify-center p-8 lg:p-4 font-poppins gap-4 shadow-xl "
          >
            <p className="text-white text-5xl lg:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-xl font-medium opacity-80"> students</span>
            </p>
            <p className="text-white/90 font-sans text-base lg:text-lg text-center">
              Scored 95+ percentile
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:row-span-2 lg:col-span-2 bg-linear-to-t from-impact-orange to-impact-orange/40 rounded-3xl flex flex-col items-center justify-center p-8 lg:p-4 font-poppins gap-4 shadow-xl "
          >
            <p className="text-white text-5xl lg:text-6xl tracking-tight font-bold drop-shadow-sm">
              <CountUp end={70} suffix="%" enableScrollSpy scrollSpyOnce />
              <span className="text-xl font-medium opacity-80"> students</span>
            </p>
            <p className="text-white/90 font-sans text-base lg:text-lg text-center">
              Scored 90+ percentile
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestiBento;
