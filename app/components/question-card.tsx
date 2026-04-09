import React from "react";
import CornerFillButton from "./corner-button";
import ExplanationDialog from "./explanation-dialog";
import { Question } from "./pyq-types";
import { LatexText } from "./latex-text";
import { VideoDialog } from "./video-dialog";

interface QuestionCardProps {
  question: Question;
  globalIndex: number;
  renderLatex?: boolean;
}

const QuestionCard = ({
  question,
  globalIndex,
  renderLatex = false,
}: QuestionCardProps) => {
  const isTita = question.is_tita ?? false;

  const hover_label = isTita
    ? (question.tita_answer ?? "N/A")
    : question.answer !== null
      ? (question.answer + 10).toString(36).toUpperCase()
      : "N/A";

  return (
    <div className="w-full flex flex-col gap-4 border-t border-impact-blue pt-4 text-justify">
      {/* question number + text + buttons: side by side on md+ */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-4">
        {/* left: number + text + options */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <p className="text-2xl text-impact-orange font-spectral font-bold shrink-0">
            Q{globalIndex}
          </p>

          <div className="w-full flex flex-col gap-2">
            {renderLatex ? (
              <LatexText className="text-neutral-800 font-spectral text-lg font-medium tracking-tight">
                {question.text}
              </LatexText>
            ) : (
              <p className="text-neutral-800 text-justify font-spectral text-lg font-medium tracking-tight whitespace-pre-wrap">
                {question.text}
              </p>
            )}

            {isTita ? (
              <p className="ml-4 text-impact-orange font-mono text-sm tracking-widest">
                [TITA — Type In The Answer]
              </p>
            ) : (
              <ol className="ml-4 text-neutral-600 font-sans text-md list-[upper-alpha]">
                {question.options.map((option, index) => (
                  <li key={index} className="marker:text-impact-orange mt-2">
                    {renderLatex ? <LatexText>{option}</LatexText> : option}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>

        {/* right: buttons — column on md+, row wrap on mobile */}
        <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap gap-3 pl-10 md:pl-0 md:ml-4 md:min-w-32 md:shrink-0 mt-4 md:mt-0">
          <CornerFillButton label="Correct Answer" hover_label={hover_label} />
          <ExplanationDialog
            key={question.id}
            trigger={<CornerFillButton label="Explanation" />}
            question={question.text}
            options={isTita ? [] : question.options}
            correctAnswer={isTita ? null : question.answer}
            explanation={question.explanation}
            tita_answer={question.tita_answer}
            renderLatex={renderLatex}
          />
          {question.video_url ? (
            <VideoDialog video_url={question.video_url} />
          ) : (
            <CornerFillButton
              label="Video Explanation"
              hover_label="Video Coming Soon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
