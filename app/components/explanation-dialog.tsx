import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { LatexText } from "./latex-text";
import { MDXRemote } from "next-mdx-remote/rsc";
import { explanationComponents } from "@/app/mdx-components";
import remarkGfm from "remark-gfm";

// ---------------------------------------------------------------------------
// LatexWithImages
// Splits a string on markdown image tokens (![]()) and renders each segment
// with the appropriate renderer — <img> for images, <LatexText> for everything
// else. Order is fully preserved so images appear inline with the math text.
// ---------------------------------------------------------------------------
function LatexWithImages({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  // Split on markdown image syntax, keeping the delimiter in the array
  const parts = children.split(/(!\[.*?\]\(.*?\))/g);

  return (
    <div className={className}>
      {parts.map((part, i) => {
        const imageMatch = part.match(/!\[(.*?)\]\((.*?)\)/);

        if (imageMatch) {
          const [, alt, src] = imageMatch;
          return (
            <img
              key={i}
              src={src}
              alt={alt}
              className="my-4 max-w-full rounded-md"
            />
          );
        }

        // Skip empty / whitespace-only segments
        return part.trim() ? <LatexText key={i}>{part}</LatexText> : null;
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ExplanationDialog
// ---------------------------------------------------------------------------
interface ExplanationDialogProps {
  trigger: React.ReactNode;
  question: string;
  options: string[];
  correctAnswer: number | null;
  explanation: string;
  tita_answer?: string;
  renderLatex?: boolean;
}

const ExplanationDialog = ({
  trigger,
  question,
  options,
  correctAnswer,
  explanation,
  tita_answer,
  renderLatex = false,
}: ExplanationDialogProps) => {
  const isTita = options.length === 0 || correctAnswer === null;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <VisuallyHidden.Root>
        <DialogTitle>{question}</DialogTitle>
      </VisuallyHidden.Root>
      <DialogContent
        section={renderLatex ? "qa" : "dilr"}
        className="max-h-[90vh] flex flex-col"
      >
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 flex flex-col gap-6 py-4">
          {/* Question title */}
          {renderLatex ? (
            <LatexText className="font-spectral text-lg font-medium text-neutral-800 leading-snug">
              {question}
            </LatexText>
          ) : (
            <p className="font-spectral text-lg font-medium text-neutral-800 leading-snug whitespace-pre-wrap">
              {question}
            </p>
          )}

          <div className="border-t border-neutral-200" />

          {/* Options or TITA answer */}
          {isTita ? (
            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Correct Answer
              </p>
              <p className="text-impact-orange font-spectral text-2xl font-bold">
                {tita_answer ?? "—"}
              </p>
            </div>
          ) : (
            <ol className="ml-4 list-[upper-alpha] flex flex-col gap-2">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`marker:font-bold text-justify ${
                    index === correctAnswer
                      ? "text-impact-orange marker:text-impact-orange"
                      : "text-neutral-400 marker:text-neutral-400"
                  }`}
                >
                  {renderLatex ? <LatexText>{option}</LatexText> : option}
                </li>
              ))}
            </ol>
          )}

          <div className="border-t border-neutral-200" />

          {/* Explanation */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm font-bold text-impact-blue uppercase tracking-widest">
              Explanation
            </p>
            {renderLatex ? (
              // LatexWithImages handles inline images mixed with KaTeX math,
              // preserving the order of all segments.
              <LatexWithImages className="font-spectral text-neutral-700 leading-relaxed">
                {explanation}
              </LatexWithImages>
            ) : (
              <div>
                <MDXRemote
                  source={explanation}
                  components={explanationComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer — stays outside the scroll area */}
        <DialogFooter className="border-t border-neutral-100 pt-4">
          <DialogClose asChild>
            <button className="group relative overflow-hidden text-impact-blue hover:text-white font-mono text-sm font-bold px-4 py-1 transition-colors duration-300">
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-impact-orange z-10" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-impact-orange z-10" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-impact-orange z-10" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-impact-orange z-10" />
              <span className="absolute top-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute top-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-impact-orange -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <span className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-impact-orange translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-0" />
              <p className="relative z-10">Close</p>
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExplanationDialog;
