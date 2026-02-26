import React from "react";
import FaqCard from "../components/faq-card";

const Faqs = () => {
  const faqs = [
    {
      question:
        "What is the biggest difference between IIMpact and other coaching institutions?",
      answer:
        "IIMpact is built by toppers, for aspirants. Both mentors are 100-percentilers from top B-schools who personally guide every student. The course is sharply focused — cutting redundant effort — and we stay with you till the final day before CAT. Every class, every doubt, every strategy — handled end-to-end by us.",
    },
    {
      question: "Who teaches at IIMpact?",
      answer:
        "All sessions are personally conducted by Rishi Sir and Divyansh Sir, who've together mentored over 5,000 students into top B-schools and Tier-I roles.",
    },
    {
      question: "What is the mode of classes?",
      answer:
        "All classes are live and interactive on Zoom. Students can unmute to ask questions anytime, making every lecture engaging and discussion-driven. Recordings are provided for all sessions and remain accessible till the XAT exam.",
    },
    {
      question: "How are doubts solved?",
      answer:
        "We follow a three-layer doubt-solving system:\n A 24×7 WhatsApp community for instant clarifications.\n Dedicated Doubt-Solving Lectures every week.\n Live class interaction, where students can revisit doubts from previous sessions.",
    },
    {
      question: "What level of personal attention can students expect?",
      answer:
        "Every student receives personal oversight and continuous performance tracking. We monitor progress across mocks, identify weak areas, and provide customised guidance — ensuring focused, consistent growth throughout the prep journey.",
    },
  ];

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
        <div className="flex flex-col items-center w-full gap-0.5">
          {faqs.map((faq, idx) => (
            <FaqCard key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
