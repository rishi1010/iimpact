"use client";

import { Video } from "lucide-react";
import CountUp from "react-countup";

const MetricBento = () => {
  return (
    <div
      className="relative grid font-mono gap-4 w-full max-w-5xl
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-6 lg:grid-rows-4 lg:w-3/4 lg:h-full
    "
    >
      {/* 1 in 6 */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 rounded-3xl bg-[url('/purple-bg.png')] bg-cover flex flex-col items-center justify-center gap-2 p-6 aspect-square lg:aspect-auto">
        <p className="text-white text-2xl lg:text-6xl font-bold text-shadow-md">
          1 in 6
        </p>
        <p className="text-white/80 font-sans text-sm lg:text-lg text-center">
          Scored 99.5+ percentile
        </p>
      </div>

      {/* 25% */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 rounded-3xl bg-linear-to-t from-[#AEDCEF] to-[#E2F7FF] flex flex-col items-center justify-center gap-2 p-6 aspect-square lg:aspect-auto">
        <p className="text-white text-2xl lg:text-6xl tracking-tight font-bold text-shadow-md">
          <CountUp end={25} suffix="%" enableScrollSpy scrollSpyOnce />
          <span className="text-sm lg:text-xl"> students</span>
        </p>
        <p className="text-impact-blue font-sans text-sm lg:text-lg text-center">
          Scored 99+ percentile
        </p>
      </div>

      {/* 50% */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 rounded-3xl bg-linear-to-t from-impact-orange to-[#FED39E] flex flex-col items-center justify-center gap-2 p-6 aspect-square lg:aspect-auto">
        <p className="text-white text-2xl lg:text-6xl font-bold">
          <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
          <span className="text-sm lg:text-xl"> student</span>
        </p>
        <p className="text-impact-blue font-sans text-sm lg:text-lg text-center">
          Scored 95+ percentile
        </p>
      </div>

      {/* 8000+ Questions */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 text-center rounded-3xl bg-[url('/orange-bg.png')] bg-cover flex flex-col justify-center gap-1 p-6 aspect-square lg:aspect-auto">
        <p className="text-neutral-100 text-2xl lg:text-5xl text-shadow-md font-bold">
          <CountUp end={8000} suffix="+" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-impact-blue text-base lg:text-xl font-sans font-medium">
          Questions
        </p>
      </div>

      {/* 100+ Tests */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 text-center rounded-3xl bg-linear-to-t from-impact-blue to-impact-blue/30 flex flex-col justify-center gap-1 p-6 aspect-square lg:aspect-auto">
        <p className="text-neutral-100 text-2xl lg:text-5xl font-bold">
          <CountUp end={100} suffix="+" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-white text-base lg:text-xl font-sans font-medium">
          Tests
        </p>
      </div>

      {/* 300hrs */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 shadow-2xl rounded-3xl bg-white border border-gray-100 flex flex-col items-center justify-center gap-0.75 md:gap-2 p-8 aspect-square lg:aspect-auto">
        <Video className="text-impact-orange size-10 lg:size-16 fill-impact-orange" />
        <p className="text-impact-blue text-2xl lg:text-5xl font-bold">
          <CountUp end={300} suffix="hrs" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-impact-blue text-xs lg:text-xl font-sans font-medium text-center leading-tight">
          Live Lectures & Sessions
        </p>
      </div>
    </div>
  );
};

export default MetricBento;
