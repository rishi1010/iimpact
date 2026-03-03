"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, ChevronRight, CircleStar } from "lucide-react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

interface QuestionRowProps {
  item: QuestionItem;
}

interface TestimonialCardProps {
  name: string;
  percentile: string;
  description: string;
  linkedinUrl?: string;
  avatarUrl?: string;
  questions: QuestionItem[];
}

// ─── Default data (swap out as needed) ───────────────────────────────────────

const DEFAULT_QUESTIONS: QuestionItem[] = [
  {
    id: "Q1",
    question: "The hardest part was ...",
    answer:
      "Staying consistent when results weren't visible yet. The grind before the breakthrough required serious mental discipline.",
  },
  {
    id: "Q2",
    question: "What made things click...",
    answer:
      "Breaking problems into first principles instead of memorizing patterns. Once I understood the why, everything became intuitive.",
  },
  {
    id: "Q3",
    question: "It all paid off when ...",
    answer:
      "I solved a problem I once thought was impossible — and realized I'd quietly become someone who does hard things.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function QuestionRow({ item }: QuestionRowProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-neutral-200 last:border-none">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 py-3 text-left group"
        aria-expanded={open}
        aria-controls={`answer-${item.id}`}
      >
        {/* Q label */}
        <span className="font-playfair text-lg font-bold shrink-0 leading-snug text-impact-orange">
          <CircleStar />
        </span>

        {/* Question text */}
        <span className="flex-1 text-neutral-700 text-sm leading-snug pt-0.5">
          {item.question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0 mt-0.5 text-impact-orange"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`answer-${item.id}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-3 pl-9 pr-2 text-sm text-neutral-500 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TestimonialCard({
  name = "Name",
  percentile = "99.99%ile",
  description = "Aspiring engineer with a passion for solving hard problems and building things that matter.",
  linkedinUrl,
  avatarUrl,
  questions = DEFAULT_QUESTIONS,
}: Partial<TestimonialCardProps>) {
  return (
    <div
      className=" flex items-center justify-center p-6"
      style={{ backgroundColor: "#f6f4f0" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-neutral-100 rounded-2xl shadow-sm border border-neutral-200 p-6 flex flex-col gap-5"
      >
        {/* Header row */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className=" relative w-14 h-14 rounded-full bg-neutral-300 shrink-0 overflow-hidden">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className="w-full h-full object-cover object-center"
                fill
              />
            )}
          </div>

          {/* Name + percentile */}
          <div className="flex-1 min-w-0">
            <h2 className="text-neutral-900 font-poppins font-semibold text-lg leading-tight truncate">
              {name}
            </h2>
            <p className="text-sm font-medium text-impact-orange">
              {percentile}
            </p>
          </div>

          {/* LinkedIn icon */}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center  hover:opacity-80 transition-opacity"
            >
              <Linkedin
                size={16}
                strokeWidth={1}
                color="#0A66C2"
                fill="#0A66C2"
                className="cursor-pointer"
              />
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-200" />

        {/* Description */}
        <p className="text-neutral-600 text-sm italic font-spectral leading-relaxed text-center px-1">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px bg-neutral-200" />

        {/* Questions */}
        <div className="flex flex-col">
          {questions.map((item: QuestionItem) => (
            <QuestionRow key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
