import React from "react";
import MetricBento from "../components/metric-bento";

const MetricPage = () => {
  return (
    <section
      id="metrics"
      className="relative w-full min-h-dvh bg-[#F6F4F0] px-6 sm:px-10 lg:px-12 py-16 lg:py-20"
    >
      <div className="w-full h-full flex flex-col items-center gap-10 lg:gap-13">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-manrope font-bold tracking-tight text-impact-blue text-center text-balance">
          What{" "}
          <span className="underline decoration-impact-orange">IIMpact</span>{" "}
          delivered in 2025
        </h1>

        <MetricBento />
      </div>
    </section>
  );
};

export default MetricPage;
