import React from "react";
import FaqCard from "../components/faq-card";
import { Faqs_data } from "../data";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="relative w-full bg-[#f6f4f0] px-6 sm:px-10 lg:px-12 py-16 lg:py-20"
    >
      <div className="flex flex-col h-full items-center gap-12 lg:gap-20">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="text-impact-orange font-mono text-lg sm:text-2xl">
            FAQ
          </p>
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-impact-blue">
            Got Questions?
          </h1>
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-impact-blue">
            We've Got{" "}
            <span className="font-playfair italic underline decoration-impact-orange">
              Answers
            </span>
          </h1>
        </div>

        {/* FAQ cards */}
        <div className="flex flex-col items-center w-full gap-1">
          {Faqs_data.map((faq, idx) => (
            <FaqCard key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
