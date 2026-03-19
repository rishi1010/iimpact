import React from "react";
import CornerFillButton from "./corner-button";
import ExplanationDialog from "./explanation-dialog";

export interface Question {
  id: string;
  context?: string;
  contextImages?: string[];
  text: string;
  options: string[];
  answer: number;
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

const buttons = ["Check Stats"];

const QuestionCard = ({ question }: { question: Question }) => {
  const hover_label = (question.answer + 10).toString(36).toUpperCase();
  return (
    <div className="w-3/4 flex flex-col gap-4 p-4">
      {question.context && (
        <div className="w-full text-neutral-800 whitespace-break-spaces font-spectral text-lg font-bold tracking-tight">
          {question.context}
        </div>
      )}

      <div className="w-full flex items-start gap-4 border-t border-impact-blue pt-4">
        <p className="text-2xl text-impact-orange font-spectral font-bold">
          {question.id.toUpperCase()}
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

        <div className="flex ml-4 flex-col min-w-32 gap-4 ">
          <CornerFillButton label="Correct Answer" hover_label={hover_label} />
          <div className="">
            <ExplanationDialog
              key={question.id}
              trigger={<CornerFillButton label="Explanation" />}
              question={question.text}
              options={question.options}
              correctAnswer={question.answer} // 0-indexed
              explanation={question.explanation}
            />
          </div>
          {buttons.map((label) => (
            <CornerFillButton key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
