"use client";

import { Video } from "lucide-react";
import CountUp from "react-countup";

const MetricBento = () => {
  return (
    <div className="relative grid grid-cols-6 font-mono grid-rows-4 gap-4 w-3/4 h-full">
      {/* 1 in 6 - col 1-2, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-[url('/purple-bg.png')] bg-cover flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl font-bold text-shadow-md">1 in 6</p>
        <p className="text-white/80 font-sans text-xl">
          Scored 99.5+ percentile
        </p>
      </div>

      {/* 25% - col 3-4, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-linear-to-t from-[#AEDCEF] to-[#E2F7FF] flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl font-bold text-shadow-md">
          <CountUp end={25} suffix="%" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-neutral-800 font-sans text-xl">Scored 99+ %ile</p>
      </div>

      {/* 50% - col 5-6, row 1-2 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-linear-to-t from-impact-orange to-[#FED39E] flex flex-col items-center justify-center gap-2 p-6">
        <p className="text-white text-6xl font-bold">
          <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-neutral-800 font-sans text-xl">Scored 95+ %ile</p>
      </div>

      {/* 8000+ Questions / 100+ Tests - col 1-2, row 3-4 */}
      <div className="col-span-2 row-span-2 rounded-3xl bg-[url('/orange-bg.png')] bg-cover flex flex-col justify-center gap-1 p-6">
        <p className="text-neutral-900 text-5xl font-bold">
          <CountUp end={8000} suffix="+" enableScrollSpy scrollSpyOnce />
        </p>
        <p className="text-white text-5xl font-sans font-bold">Questions</p>
        <p className="text-white text-5xl font-bold mt-2">
          <CountUp end={100} suffix="+ Tests" enableScrollSpy scrollSpyOnce />
        </p>
      </div>

      {/* Live Lectures - col 3-6, row 3-4 */}
      <div className="col-span-4 shadow-2xl row-span-2 rounded-3xl bg-white border border-gray-100 flex items-center justify-center gap-14 p-8">
        <div className="flex flex-col items-center gap-2">
          <Video className="text-impact-orange size-16 fill-impact-orange" />
          <p className="text-gray-900 text-5xl font-bold">
            <CountUp end={300} suffix="hrs" enableScrollSpy scrollSpyOnce />
          </p>
        </div>
        <p className="text-gray-900 text-5xl font-sans font-medium leading-tight">
          Live Lectures <br /> & Sessions
        </p>
      </div>
    </div>
  );
};

export default MetricBento;
