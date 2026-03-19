import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExplanationDialogProps {
  trigger: React.ReactNode;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const ExplanationDialog = ({
  trigger,
  question,
  options,
  correctAnswer,
  explanation,
}: ExplanationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-spectral text-lg font-medium text-neutral-800 leading-snug">
            {question}
          </DialogTitle>
        </DialogHeader>

        <div className="-mx-4 no-scrollbar max-h-[60vh] overflow-y-auto px-4 flex flex-col gap-6">
          {/* options */}
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

          {/* divider */}
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

        <DialogFooter>
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
