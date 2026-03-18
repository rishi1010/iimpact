import React from "react";
import CornerFillButton from "./corner-button";

export interface Question {
  id: string;
  context?: string;
  contextImages?: string[];
  text: string;
  options: string[];
  answer: string;
  explanation: string;
}

const cornerBorders = (
  <>
    <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-impact-orange" />
    <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-impact-orange" />
    <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-impact-orange" />
    <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-impact-orange" />
  </>
);

const buttons = ["Correct Answer", "Explanation", "Check Stats"];

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="w-3/4 flex flex-col gap-4 p-4">
      {question.context && (
        <div className="w-full text-neutral-800 whitespace-break-spaces font-spectral text-lg font-bold tracking-tight">
          {question.context}
        </div>
      )}

      <div className="w-full flex items-start gap-4 border-t border-impact-blue pt-4">
        <p className="text-2xl text-impact-orange font-spectral font-bold">
          Q1
        </p>

        <div className="w-full flex flex-col gap-2 mr-4">
          <p className="text-neutral-800 font-spectral text-lg font-medium tracking-tight">
            {question.text}
          </p>
          <ol className="ml-4 text-neutral-600 font-sans text-md list-[upper-alpha]">
            {question.options.map((option, index) => (
              <li key={index} className="marker:text-impact-orange mt-2">
                {option}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          {buttons.map((label) => (
            <CornerFillButton key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
