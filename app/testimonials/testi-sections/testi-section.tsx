"use client";

import React from "react";
import TestimonialCard from "@/app/components/testimonial-card";

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  percentile: string;
  description: string;
  linkedinUrl: string;
  avatarUrl: string;
  questions: QuestionItem[];
}

const testimonials: Testimonial[] = [
  {
    name: "Apurv H.",
    percentile: "99.99%ile",
    description:
      "From struggling with logic to mastering it in weeks — the personalized curriculum was a total game-changer for me.",
    linkedinUrl: "https://linkedin.com/in/apurv",
    avatarUrl: "https://avatar.vercel.sh/apurv",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Pushing through the first two weeks when nothing seemed to click. The structured daily problems kept me going.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The mentor sessions. Having someone break down my exact weak spots instead of generic advice was everything.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I cracked my dream college interview and realized I was answering questions I would have blanked on before.",
      },
    ],
  },
  {
    name: "Sarah J.",
    percentile: "99.8%ile",
    description:
      "The community here is unlike anything I've experienced. Everyone pushes each other to be their absolute best.",
    linkedinUrl: "https://linkedin.com/in/sarah-j",
    avatarUrl: "https://avatar.vercel.sh/sarah",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Balancing this with school. But the bite-sized modules made it surprisingly manageable on tough days.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The community forums. Reading how others approached the same problem taught me more than the material alone.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "My percentile jumped 12 points in a single month. That number told me the method was working.",
      },
    ],
  },
  {
    name: "Kenji W.",
    percentile: "100%ile",
    description:
      "The depth of the technical modules is unmatched. It felt like getting a master's degree in record time.",
    linkedinUrl: "https://linkedin.com/in/kenji-w",
    avatarUrl: "https://avatar.vercel.sh/kenji",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Accepting that I had to unlearn some bad habits before rebuilding my approach from scratch.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "First-principles thinking. Once I stopped pattern-matching and started reasoning, everything opened up.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I hit a perfect score and genuinely felt I deserved it — not lucky, just prepared.",
      },
    ],
  },
  {
    name: "Elena V.",
    percentile: "99.9%ile",
    description:
      "I finally understood the 'why' behind the concepts, not just the 'how'. Truly a transformative experience.",
    linkedinUrl: "https://linkedin.com/in/elena-v",
    avatarUrl: "https://avatar.vercel.sh/elena",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Getting comfortable with uncertainty. Timed sections used to paralyze me; now I treat them as puzzles.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The error-log habit. Tracking every mistake helped me see patterns I was completely blind to before.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "Oxford's offer letter arrived and I burst into tears. Months of early mornings finally had a face.",
      },
    ],
  },
  {
    name: "Marcus D.",
    percentile: "98.5%ile",
    description:
      "Slick interface, even slicker content. This is genuinely the gold standard of learning platforms.",
    linkedinUrl: "https://linkedin.com/in/marcus-dev",
    avatarUrl: "https://avatar.vercel.sh/marcus",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Trusting the process when my mock scores were inconsistent. Consistency came later than I expected.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Simulated test conditions every Sunday. Treating mocks like the real thing removed all the exam-day nerves.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I walked out of the exam hall smiling. That feeling alone was worth every late night.",
      },
    ],
  },
  {
    name: "Priya S.",
    percentile: "99.5%ile",
    description:
      "If you're serious about your career trajectory, this is the best investment you'll make this year.",
    linkedinUrl: "https://linkedin.com/in/priya-stats",
    avatarUrl: "https://avatar.vercel.sh/priya",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "The quant section. Numbers were never my strong suit — the step-by-step breakdowns saved me.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Seeing my weak areas mapped visually. Knowing exactly where to spend my time was a revelation.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "Wharton called. I had to replay the voicemail three times before I believed it was real.",
      },
    ],
  },
];

// Split into two columns, interleaved
const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
const rightColumn = testimonials.filter((_, i) => i % 2 !== 0);

const TestiOne = () => {
  return (
    <section className="w-full py-20 px-6">
      {/* Pinterest-style two-column grid */}
      <div className="max-w-4xl mx-auto">
        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Desktop: staggered two columns */}
        <div className="hidden md:flex gap-6 items-start">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6">
            {leftColumn.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          {/* Right column — offset downward to create stagger */}
          <div className="flex-1 flex flex-col gap-6 mt-16">
            {rightColumn.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiOne;
