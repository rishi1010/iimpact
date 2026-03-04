import React from "react";
import Image from "next/image";
import { Globe } from "@/components/ui/globe";
import LessonCards from "../components/lesson-cards";

const phases = [
  { blue: "Concepts", orange: "(How To Solve)" },
  { blue: "Strategy", orange: "(What To Solve)" },
  { blue: "Performance", orange: "(How To Score)" },
];

const MobileBento = () => {
  return (
    <section
      id="bento"
      className="relative w-full overflow-visible bg-linear-to-b from-[#addcee] to-[#F6F4F0] px-4 pt-10 pb-16"
    >
      {/* Section title */}
      <div className="text-4xl text-impact-blue italic font-playfair mb-8 text-center">
        Why{" "}
        <span className="not-italic font-manrope font-medium underline decoration-impact-orange">
          IIMpact MBA?
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {/* ── 1. 3-Phase Card — full width ──────────────────────────── */}
        <div className="bento-card p-5 flex flex-col gap-4">
          <h2 className="font-poppins font-bold text-base text-center leading-tight">
            <span className="text-impact-blue">Structured</span>{" "}
            <span className="text-impact-orange">3-Phase</span>{" "}
            <span className="text-impact-blue">Approach</span>
          </h2>

          <div className="flex flex-col items-center gap-1  w-full">
            {/* Replace this div with your SVG/Image */}
            <svg
              width="390"
              height="40"
              viewBox="0 0 431 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="24"
                y1="13.5"
                x2="412"
                y2="13.5001"
                stroke="#222958"
                strokeWidth="5"
              />
              <ellipse
                cx="17"
                cy="12.5"
                rx="12.5"
                ry="12"
                transform="rotate(-90 17 12.5)"
                fill="#FE8B00"
              />
              <path
                d="M19.0057 7.36364V19H16.5455V9.69886H16.4773L13.8125 11.3693V9.1875L16.6932 7.36364H19.0057Z"
                fill="white"
              />
              <ellipse
                cx="408"
                cy="13.5"
                rx="12.5"
                ry="12"
                transform="rotate(-90 408 13.5)"
                fill="#FE8B00"
              />
              <path
                d="M407.744 19.6591C406.896 19.6591 406.14 19.5133 405.477 19.2216C404.818 18.9261 404.297 18.5208 403.915 18.0057C403.536 17.4867 403.341 16.8883 403.33 16.2102H405.807C405.822 16.4943 405.915 16.7443 406.085 16.9602C406.259 17.1723 406.491 17.3371 406.778 17.4545C407.066 17.572 407.39 17.6307 407.75 17.6307C408.125 17.6307 408.456 17.5644 408.744 17.4318C409.032 17.2992 409.258 17.1155 409.42 16.8807C409.583 16.6458 409.665 16.375 409.665 16.0682C409.665 15.7576 409.578 15.483 409.403 15.2443C409.233 15.0019 408.987 14.8125 408.665 14.6761C408.347 14.5398 407.968 14.4716 407.528 14.4716H406.443V12.6648H407.528C407.9 12.6648 408.227 12.6004 408.511 12.4716C408.799 12.3428 409.023 12.1648 409.182 11.9375C409.341 11.7064 409.42 11.4375 409.42 11.1307C409.42 10.839 409.35 10.5833 409.21 10.3636C409.074 10.1402 408.881 9.96591 408.631 9.84091C408.384 9.71591 408.097 9.65341 407.767 9.65341C407.434 9.65341 407.129 9.71402 406.852 9.83523C406.576 9.95265 406.354 10.1212 406.188 10.3409C406.021 10.5606 405.932 10.8182 405.92 11.1136H403.563C403.574 10.4432 403.765 9.85227 404.136 9.34091C404.508 8.82955 405.008 8.42992 405.636 8.14205C406.269 7.85038 406.983 7.70455 407.778 7.70455C408.581 7.70455 409.284 7.85038 409.886 8.14205C410.489 8.43371 410.956 8.82765 411.29 9.32386C411.627 9.81629 411.794 10.3693 411.79 10.983C411.794 11.6345 411.591 12.178 411.182 12.6136C410.777 13.0492 410.248 13.3258 409.597 13.4432V13.5341C410.453 13.6439 411.104 13.9413 411.551 14.4261C412.002 14.9072 412.225 15.5095 412.222 16.233C412.225 16.8958 412.034 17.4848 411.648 18C411.265 18.5152 410.737 18.9205 410.063 19.2159C409.388 19.5114 408.616 19.6591 407.744 19.6591Z"
                fill="white"
              />
              <ellipse
                cx="213"
                cy="12.5"
                rx="12.5"
                ry="12"
                transform="rotate(-90 213 12.5)"
                fill="#FE8B00"
              />
              <path
                d="M208.943 18V16.2273L213.085 12.392C213.438 12.0511 213.733 11.7443 213.972 11.4716C214.214 11.1989 214.398 10.9318 214.523 10.6705C214.648 10.4053 214.71 10.1193 214.71 9.8125C214.71 9.47159 214.633 9.17803 214.477 8.93182C214.322 8.68182 214.11 8.49053 213.841 8.35795C213.572 8.22159 213.267 8.15341 212.926 8.15341C212.57 8.15341 212.259 8.22538 211.994 8.36932C211.729 8.51326 211.525 8.7197 211.381 8.98864C211.237 9.25758 211.165 9.57765 211.165 9.94886H208.83C208.83 9.1875 209.002 8.52652 209.347 7.96591C209.691 7.4053 210.174 6.97159 210.795 6.66477C211.417 6.35795 212.133 6.20455 212.943 6.20455C213.777 6.20455 214.502 6.35227 215.119 6.64773C215.741 6.93939 216.223 7.3447 216.568 7.86364C216.913 8.38258 217.085 8.97727 217.085 9.64773C217.085 10.0871 216.998 10.5208 216.824 10.9489C216.653 11.3769 216.348 11.8523 215.909 12.375C215.47 12.8939 214.85 13.517 214.051 14.2443L212.352 15.9091V15.9886H217.239V18H208.943Z"
                fill="white"
              />
            </svg>

            <div className="flex w-full  justify-evenly  py-1">
              {phases.map((p, i) => (
                <div
                  key={i}
                  className="font-poppins font-bold text-base leading-tight"
                >
                  <span className="text-impact-blue">{p.blue}</span>
                  <div className="text-impact-orange">{p.orange}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. Watch From Anywhere — text left, globe right ───────── */}
        <div className="bento-card p-5 flex flex-col overflow-hidden relative min-h-52">
          <div className="flex flex-col gap-1 relative z-10 max-w-[55%]">
            <h2 className="font-poppins font-bold text-base leading-tight">
              <span className="text-impact-orange">Watch</span>{" "}
              <span className="text-impact-blue">From Anywhere</span>
            </h2>
            <p className="text-impact-blue/70 font-sans tracking-tighter text-sm">
              Complete video coverage of every concept, formula, and strategy.
              Missed a live class? Our entire curriculum is available on-demand,
              anytime.
            </p>
          </div>
          <Globe className="top-4 -right-10 left-auto absolute w-52 h-52 opacity-90" />
        </div>

        {/* ── 3. Graph + Strategy — two equal columns ───────────────── */}
        <div className="grid grid-cols-2 gap-4">
          {/* Graph card */}
          <div className="bento-card p-4 flex flex-col justify-between gap-3">
            {/* Graph placeholder — replace with your SVG/Image */}
            <Image
              src="/graph.svg"
              alt="graph"
              width={100}
              height={240}
              className="object-contain object-center scale-190 translate-x-[20%]  "
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-poppins font-bold text-base leading-tight">
                <span className="text-impact-orange">Boost</span>{" "}
                <span className="text-impact-blue">Your Scores</span>
              </h2>
              <p className="text-impact-blue/70 font-sans tracking-tighter text-base line-clamp-3">
                Understand the 'why' behind every concept. No rote learning,
                only deep comprehension.
              </p>
            </div>
          </div>

          {/* Strategy card */}
          <div className="bento-card p-4 flex flex-col justify-between gap-3">
            <div className="relative w-full aspect-square">
              <Image
                src="/strategy_pic.png"
                alt="dart board"
                fill
                className="object-contain object-top"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-poppins font-bold text-xs leading-tight">
                <span className="text-impact-orange">Strategic</span>{" "}
                <span className="text-impact-blue">Mock Analysis</span>
              </h2>
              <p className="text-impact-blue/70 font-sans tracking-tighter text-xs line-clamp-3">
                Learn question selection and time management with detailed mock
                reviews.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4. Lesson Cards — full width ──────────────────────────── */}
        <div className="bento-card p-5 flex flex-col justify-between gap-4 overflow-hidden relative min-h-56">
          <LessonCards />
          <div className="flex flex-col gap-1 mt-auto">
            <h2 className="font-poppins font-bold text-base leading-tight">
              <span className="text-impact-orange">Premium</span>{" "}
              <span className="text-impact-blue">Resources</span>
            </h2>
            <p className="text-impact-blue/70 font-sans tracking-tighter text-sm">
              High-quality formula books, revision materials, and structured
              study resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileBento;
