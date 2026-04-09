import React from "react";
import QuestionCard from "./question-card";
import { QuestionSet } from "./pyq-types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { contextComponents } from "@/app/mdx-components";
import remarkGfm from "remark-gfm";

interface QuestionSetCardProps {
  group: QuestionSet;
  startIndex: number;
}

const QuestionSetCard = ({ group, startIndex }: QuestionSetCardProps) => {
  return (
    <div id={group.id} className="w-full flex flex-col gap-6 scroll-mt-6">
      {/* context */}
      {group.context && (
        <div className="">
          <MDXRemote
            source={group.context}
            components={contextComponents} // Use the specialized set here
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
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
              className="h-40 md:h-68 max-w-[85vw] md:max-w-xl w-auto object-contain rounded shrink-0 border "
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
