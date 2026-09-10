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
import { Section } from "./pyq-types";

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
// Table-width helpers
// Used to size the dialog based on the widest markdown table found in the
// explanation content, so wide tables get a wider dialog instead of getting
// squashed. Only relevant for the MDX (non-LaTeX) explanation path, since
// LaTeX explanations don't contain GFM tables.
// ---------------------------------------------------------------------------

// Finds every markdown table (header row + separator row) in the given
// string and returns the largest column count among them, or null if there
// are no tables at all.
//
// The count comes from the separator row (|---|---|), which is the only row
// GFM guarantees has one cell per column. Counting non-empty *header* cells
// undercounts grouped headers badly — a row like
//   |  | Window |  |  | Split |  |  | Grand Total |
// has 8 columns but only 3 non-empty labels, which sized an 8-column table
// as if it were 3 columns and left it scrolling inside the dialog.
function getTableColumnCount(markdown: string): number | null {
  const matches = [
    ...markdown.matchAll(/^\|.+\|[ \t]*\n\|([ \t\-:|]+)\|[ \t]*$/gm),
  ];
  if (matches.length === 0) return null;

  return Math.max(...matches.map((m) => m[1].split("|").length));
}

// Minimum width the table-sized dialog is allowed to shrink to, per section.
// VARC explanations are prose-heavy and their tables are usually narrow
// (2-3 columns), so the column-derived width would squash the surrounding
// text — they get a wider floor than the other sections.
const sectionMinWidth: Record<Section, number> = {
  varc: 900,
  dilr: 480,
  qa: 480,
};

// VARC explanations use a standard "Option | Verdict | Why" table where the
// verdict is a short label ("Affirms gap - eliminate") that reads badly when
// it wraps onto two lines. Pinning that column to a single line lets the
// auto table layout give it exactly the width it needs, and the wide "Why"
// column absorbs what's left — so the dialog itself doesn't grow.
const varcTableClass =
  "[&_th:nth-child(2)]:whitespace-nowrap [&_td:nth-child(2)]:whitespace-nowrap";

// Converts a column count into an inline width style for the dialog,
// clamped between the section's floor and a sensible ceiling, and never
// exceeding the viewport. Returns undefined when there's no table, so the
// dialog falls back to its normal section-based width.
function getDialogWidthStyle(
  columns: number | null,
  minWidth: number,
): React.CSSProperties | undefined {
  if (!columns) return undefined;

  const px = Math.min(Math.max(columns * 160, minWidth), 1100);
  return { width: `min(${px}px, 95vw)`, maxWidth: `min(${px}px, 95vw)` };
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
  section?: Section;
}

const ExplanationDialog = ({
  trigger,
  question,
  options,
  correctAnswer,
  explanation,
  tita_answer,
  renderLatex = false,
  section,
}: ExplanationDialogProps) => {
  const isTita = options.length === 0 || correctAnswer === null;

  // Fall back to the old renderLatex-based guess when no section is given.
  const dialogSection: Section = section ?? (renderLatex ? "qa" : "dilr");

  // Only the MDX path can contain GFM tables, so skip detection for LaTeX.
  const tableColumns = !renderLatex ? getTableColumnCount(explanation) : null;
  const dialogWidthStyle = getDialogWidthStyle(
    tableColumns,
    sectionMinWidth[dialogSection],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <VisuallyHidden.Root>
        <DialogTitle>{question}</DialogTitle>
      </VisuallyHidden.Root>
      <DialogContent
        section={dialogSection}
        className="max-h-[90vh] flex flex-col transition-[width,max-width] duration-200 ease-out"
        style={dialogWidthStyle}
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
              <div
                className={
                  dialogSection === "varc" ? varcTableClass : undefined
                }
              >
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
