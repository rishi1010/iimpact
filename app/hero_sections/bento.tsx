import React from "react";
import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import LessonCards from "../components/lesson-cards";
import ThreePhaseCard from "../components/three-phase-card";

const Bento = () => {
  return (
    <div className="relative w-screen h-screen pt-11 bg-linear-to-b from-[#addcee] to-[#F6F4F0]">
      <div className="absolute top-96 left-52  text-impact-orange items-end flex flex-col gap-1">
        <div className="text-lg font-homemade">Hover over me</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 26 26"
          fill="none"
          className="rotate-180"
        >
          <path
            d="M0.678041 -2.21372e-06L0.503765 1.04942L-2.38451e-06 1.36727C1.63383 1.22478 2.39629 3.78396 3.94843 4.3758C4.4168 4.5539 4.49577 4.00316 4.34872 3.83602C4.31332 3.79492 3.74148 3.636 3.39021 3.29898C3.09067 3.00853 1.642 1.70155 1.90342 1.37001C6.1296 1.79471 10.0045 2.80851 13.6834 4.98135C21.1799 9.40373 25.289 17.4046 25.9807 26C26.5144 13.3055 15.9108 2.29887 3.53725 1.09052C3.82317 0.37264 6.14049 1.13984 5.98528 -1.74974e-06L0.680763 -2.21348e-06L0.678041 -2.21372e-06Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-8xl text-impact-blue italic font-playfair mb-10 ">
          Why{" "}
          <span className="not-italic font-manrope font-medium underline decoration-impact-orange">
            IIMPact MBA?
          </span>
        </div>
        {/* Bento */}

        <div className="grid bg-linear-to-br from-[#F3EADB] shadow-sm rounded-2xl to-[#F3D7A7] p-2 grid-flow-col grid-rows-8 grid-cols-6 gap-6 text-white w-4xl h-3xl">
          {/* 3-phase */}
          <ThreePhaseCard />
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
          <div className="row-span-4 col-span-2 bento-card p-4 flex flex-col justify-between">
            <Image
              src={"/strategy_pic.png"}
              alt="dart board picture"
              width={186}
              height={177}
            />
            <div className="flex flex-col justify-end gap-2 mt-1">
              <h2 className="font-poppins font-bold text-lg leading-tight">
                <span className="text-impact-orange">Strategic</span>{" "}
                <span className="text-impact-blue">Mock Analysis</span>
              </h2>
              <p className="text-impact-blue/70 w-full text-left font-sans tracking-tighter text-sm">
                Learn question selection, and time management with detailed mock
                reviews and analysis.
              </p>
            </div>
          </div>
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
