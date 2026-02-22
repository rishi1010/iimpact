"use client";

import { Video } from "lucide-react";
import CountUp from "react-countup";

const MetricBento = () => {
  return (
    <div className="relative grid grid-cols-6 font-mono grid-rows-4 gap-4 w-3/4 h-full">
      {/* 1 in 6 - col 1-2, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-[url('/purple-bg.png')] bg-cover flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl font-bold text-shadow-md">1 in 6</p>
        <p className="text-white/80 font-sans text-lg">
          Scored 99.5+ percentile
        </p>
      </div>

      {/* 25% - col 3-4, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-linear-to-t from-[#AEDCEF] to-[#E2F7FF] flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl tracking-tight font-bold text-shadow-md">
          <CountUp end={25} suffix="%" enableScrollSpy scrollSpyOnce />
          <span className="text-xl"> students</span>
        </p>
        <p className="text-impact-blue font-sans text-lg">
          Scored 99+ percentile
        </p>
      </div>

      {/* 50% - col 5-6, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-linear-to-t from-impact-orange to-[#FED39E] flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl font-bold">
          <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
          <span className="text-xl"> students</span>
        </p>
        <p className="text-impact-blue font-sans text-lg">
          Scored 95+ percentile
        </p>
      </div>

      {/* 8000+ Questions - col 1-2, row 3-4 */}
      <div className="col-span-2 row-span-2 text-center rounded-3xl bg-[url('/orange-bg.png')] bg-cover flex flex-col justify-center gap-1 p-6">
        <p className="text-neutral-100 text-5xl text-shadow-md font-bold">
          <CountUp end={8000} suffix="+" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-impact-blue text-xl font-sans font-medium">
          Questions
        </p>
      </div>

      {/* 100+ Tests - col 3-4, row 3-4 */}
      <div className="col-span-2 row-span-2 text-center rounded-3xl bg-linear-to-t from-impact-blue to-impact-blue/30 flex flex-col justify-center gap-1 p-6">
        <p className="text-neutral-100  text-5xl font-bold">
          <CountUp end={100} suffix="+" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-white text-xl font-sans font-medium">Tests</p>
      </div>

      {/* 300hrs - col 5-6, row 3-4 */}
      <div className="col-span-2 row-span-2 shadow-2xl rounded-3xl bg-white border border-gray-100 flex flex-col items-center justify-center gap-2 p-8">
        <Video className="text-impact-orange size-16 fill-impact-orange" />
        <p className="text-impact-blue text-5xl font-bold">
          <CountUp end={300} suffix="hrs" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-impact-blue text-xl font-sans font-medium text-center leading-tight">
          Live Lectures & Sessions
        </p>
      </div>
    </div>
  );
};

export default MetricBento;
