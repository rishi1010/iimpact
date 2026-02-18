import React from "react";
import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import LessonCards from "../components/lesson-cards";

const Bento = () => {
  return (
    <div className="w-screen h-screen pt-11 bg-linear-to-b from-[#addcee] to-[#F5F5F7]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-8xl text-impact-blue italic font-playfair mb-10 ">
          Why{" "}
          <span className="not-italic font-manrope font-medium underline decoration-impact-orange">
            IIMPact MBA?
          </span>
        </div>
        {/* Bento */}

        <div className="grid bg-linear-to-br from-[#F3EADB] shadow-xl  rounded-2xl to-[#F3D7A7] p-2 grid-flow-col grid-rows-8 grid-cols-6 gap-6 text-white w-4xl h-3xl">
          {/* 3-phase */}
          <div className="row-span-8 col-span-2 bento-card "></div>
          {/* graph */}
          <div className="row-span-4 col-span-2 bento-card flex flex-col p-4">
            {/* Graph area */}
            <div className="relative w-full h-64 flex-1 overflow-hidden group">
              {/* <Image
                src="/graph-axis.svg"
                alt="graph axis"
                className="object-bottom-left "
                width={330}
                height={340}
              /> */}
              <Image
                src="/graph.svg"
                alt="graph"
                width={330}
                height={340}
                className="object-contain object-bottom-left scale-140 translate-x-[20%] transition-transform duration-500 ease-out group-hover:-translate-x-[20%]  "
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-2 mt-1">
              <h2 className="font-poppins font-bold text-md leading-tight">
                <span className="text-impact-orange">Boost</span>{" "}
                <span className="text-impact-blue">
                  Your Scores through Strategy
                </span>
              </h2>
              <p className="text-impact-blue/70 w-full text-left font-sans tracking-tighter text-sm">
                Understand the 'why' behind every concept. No rote learning,
                Only deep comprehension.
              </p>
            </div>
          </div>
          {/* resources */}
          <div className=" relative row-span-4 col-span-2 overflow-hidden bento-card p-4 flex flex-col justify-between">
            <LessonCards />
            <div className=""></div>
            <div className="flex flex-col justify-end gap-2 mt-1">
              <h2 className="font-poppins font-bold text-lg leading-tight">
                <span className="text-impact-orange">Premium</span>{" "}
                <span className="text-impact-blue">Resources</span>
              </h2>
              <p className="text-impact-blue/70 w-full text-left font-sans tracking-tighter text-sm">
                High-quality formula books, revision materials, and structured
                study resources.
              </p>
            </div>
          </div>
          {/* strategy */}
          <div className="row-span-4 col-span-2 bento-card"></div>
          {/* from anywhere */}
          <div className="row-span-4 col-span-2 overflow-hidden relative bento-card p-4 flex flex-col">
            <Globe className="top-28" />
            <div className="flex flex-col gap-2 mt-1">
              <h2 className="font-poppins font-bold text-lg leading-tight">
                <span className="text-impact-orange">Watch</span>{" "}
                <span className="text-impact-blue">From Anywhere</span>
              </h2>
              <p className="text-impact-blue/70 w-full text-left font-sans tracking-tighter text-sm">
                Complete video coverage of every concept, formula, and strategy.
                Missed a live class? Our entire curriculum is available
                on-demand, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
