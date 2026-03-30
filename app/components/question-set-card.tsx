import React from "react";
import QuestionCard from "./question-card";
import { QuestionSet } from "./pyq-types";

interface QuestionSetCardProps {
  group: QuestionSet;
  startIndex: number; // global question number for the first question in this set
}

const QuestionSetCard = ({ group, startIndex }: QuestionSetCardProps) => {
  return (
    <div id={group.id} className="w-full flex flex-col gap-6 scroll-mt-6">
      {/* context */}
      {group.context && (
        <div className="w-full text-neutral-800 whitespace-break-spaces font-spectral text-lg font-bold tracking-tight">
          {group.context}
        </div>
      )}

      {/* context images */}
      {group.contextImages && group.contextImages.length > 0 && (
        <div className="w-full flex flex-row gap-3 overflow-x-auto py-1">
          {group.contextImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Context image ${index + 1}`}
              className="h-48 max-w-xs w-auto object-contain rounded shrink-0 border border-neutral-200"
            />
          ))}
        </div>
      )}

      {/* questions */}
      <div className="flex flex-col gap-8">
        {group.questions.map((question, i) => (
          <QuestionCard
            key={question.id}
            question={question}
            globalIndex={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionSetCard;
