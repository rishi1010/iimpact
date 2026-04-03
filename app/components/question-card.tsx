import React from "react";
import CornerFillButton from "./corner-button";
import ExplanationDialog from "./explanation-dialog";
import { Question } from "./pyq-types";

interface QuestionCardProps {
  question: Question;
  globalIndex: number;
}

const QuestionCard = ({ question, globalIndex }: QuestionCardProps) => {
  const isTita = question.is_tita ?? false;

  const hover_label = isTita
    ? (question.tita_answer ?? "N/A")
    : question.answer !== null
      ? (question.answer + 10).toString(36).toUpperCase()
      : "N/A";

  return (
    <div className="w-full flex items-start gap-4 border-t border-impact-blue pt-4">
      <p className="text-2xl text-impact-orange font-spectral font-bold shrink-0">
        Q{globalIndex}
      </p>

      <div className="w-full flex flex-col gap-2 mr-4">
        <p className="text-neutral-800 font-spectral text-lg font-medium tracking-tight whitespace-pre-wrap">
          {question.text}
        </p>

        {isTita ? (
          <p className="ml-4 text-impact-orange font-mono text-sm tracking-widest">
            [TITA — Type In The Answer]
          </p>
        ) : (
          <ol className="ml-4 text-neutral-600 font-sans text-md list-[upper-alpha]">
            {question.options.map((option, index) => (
              <li key={index} className="marker:text-impact-orange mt-2">
                {option}
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="flex ml-4 flex-col min-w-32 gap-4 shrink-0">
        <CornerFillButton label="Correct Answer" hover_label={hover_label} />
        <ExplanationDialog
          key={question.id}
          trigger={<CornerFillButton label="Explanation" />}
          question={question.text}
          options={isTita ? [] : question.options}
          correctAnswer={isTita ? null : question.answer}
          explanation={question.explanation}
          tita_answer={question.tita_answer}
        />
        <CornerFillButton
          label="Video Explanation"
          href="https://www.youtube.com"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
