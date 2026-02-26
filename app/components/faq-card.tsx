"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<CardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full sm:w-3/4 lg:w-1/2 px-4 py-4 flex flex-col overflow-hidden">
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-impact-orange" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-impact-orange" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-impact-orange" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-impact-orange" />

      {/* Question + icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 w-full text-left"
      >
        <h1 className="font-manrope text-base sm:text-lg lg:text-xl text-neutral-900 tracking-wide">
          {question}
        </h1>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="size-6 text-impact-blue rounded-full flex items-center justify-center bg-impact-orange shrink-0"
        >
          <Plus size={16} />
        </motion.div>
      </button>

      {/* Answer — slides down */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 font-sans whitespace-pre-line text-neutral-500 text-sm sm:text-base lg:text-lg tracking-tight">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
