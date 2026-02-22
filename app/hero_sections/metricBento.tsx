import React from "react";
import MetricBento from "../components/metric-bento";

const MetricPage = () => {
  return (
    <section
      id="metrics"
      className=" relative w-full h-[100dvh] bg-[#F6F4F0] p-12"
    >
      <div className="w-full h-full flex flex-col items-center gap-13">
        <h1 className="text-6xl font-manrope font-bold tracking-tight text-impact-blue">
          What{" "}
          <span className="underline decoration-impact-orange">IIMPact</span>{" "}
          delivered in 2025{" "}
        </h1>

        <MetricBento />
      </div>
    </section>
  );
};

export default MetricPage;
