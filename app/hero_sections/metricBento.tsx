import React from "react";
import MetricBento from "../components/metric-bento";
import ScribbleArrow from "../components/scribble-arrow";

const MetricPage = () => {
  return (
    <section
      id="metrics"
      className=" relative w-screen h-[100dvh] bg-[#F6F4F0] p-12"
    >
      <ScribbleArrow
        text="In Just One Year"
        className="absolute top-40 left-16 items-end"
        rotation={180}
        textPosition="above"
        color="impact-orange"
      />
      <div className="w-full h-full flex flex-col items-center gap-13">
        <h1 className="text-7xl font-manrope font-bold tracking-tight text-impact-blue">
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
