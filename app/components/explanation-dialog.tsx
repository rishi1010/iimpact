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

interface ExplanationDialogProps {
  trigger: React.ReactNode;
  question: string;
  options: string[];
  correctAnswer: number | null;
  explanation: string;
  tita_answer?: string;
}

const ExplanationDialog = ({
  trigger,
  question,
  options,
  correctAnswer,
  explanation,
  tita_answer,
}: ExplanationDialogProps) => {
  const isTita = options.length === 0 || correctAnswer === null;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <VisuallyHidden.Root>
        <DialogTitle>{question}</DialogTitle>
      </VisuallyHidden.Root>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 flex flex-col gap-6 py-4">
          {/* question title */}
          <p className="font-spectral text-lg font-medium text-neutral-800 leading-snug whitespace-pre-wrap">
            {question}
          </p>

          <div className="border-t border-neutral-200" />

          {/* options or tita */}
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
                  className={`marker:font-bold ${
                    index === correctAnswer
                      ? "text-impact-orange marker:text-impact-orange"
                      : "text-neutral-400 marker:text-neutral-400"
                  }`}
                >
                  {option}
                </li>
              ))}
            </ol>
          )}

          <div className="border-t border-neutral-200" />

          {/* explanation */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm font-bold text-impact-blue uppercase tracking-widest">
              Explanation
            </p>
            <p className="font-spectral text-neutral-700 leading-relaxed">
              {explanation}
            </p>
          </div>
        </div>

        {/* footer stays outside scroll */}
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
