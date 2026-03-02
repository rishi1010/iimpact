"use client";

import React from "react";
import TestimonialCard from "@/app/components/testimonial-card";
import { Testimonials_data } from "@/app/data";

const col1 = Testimonials_data.slice(0, 5);
const col2 = Testimonials_data.slice(5, 10);
const col3 = Testimonials_data.slice(10, 15);

const TestiOne = () => {
  return (
    <section
      id="testi"
      className="w-full flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {Testimonials_data.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Desktop: 3 staggered columns */}
        <div className="hidden md:flex gap-6 items-start">
          <div className="flex-1 flex flex-col gap-6">
            {col1.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-6 mt-16">
            {col2.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-6">
            {col3.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiOne;
