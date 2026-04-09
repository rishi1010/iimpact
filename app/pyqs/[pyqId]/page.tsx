import { FaArrowLeft } from "react-icons/fa";
import { Star } from "lucide-react";
import QuestionCard from "@/app/components/question-card";
import QuestionSetCard from "@/app/components/question-set-card";
import PyqIndex from "@/app/components/pyq-index";
import { EmptyPyq } from "@/app/components/empty-pyq";
import {
  QuestionGroup,
  deriveIndexEntries,
  flattenQuestions,
} from "@/app/components/pyq-types";
import { getPaperBySlug } from "@/app/actions/content-actions";
import React from "react";

type Section = "varc" | "dilr" | "qa";

interface ParsedPyq {
  section: Section;
  year: number;
  slot: number;
}

function parsePyqId(pyqID: string): ParsedPyq | null {
  const parts = pyqID.split("_");
  if (parts.length !== 4) return null;
  const [sectionRaw, yearRaw, slotWord, slotRaw] = parts;
  if (slotWord !== "slot") return null;
  const section = sectionRaw.toLowerCase();
  if (section !== "varc" && section !== "dilr" && section !== "qa") return null;
  const year = parseInt(yearRaw, 10);
  if (isNaN(year)) return null;
  const slot = parseInt(slotRaw, 10);
  if (slot !== 1 && slot !== 2 && slot !== 3) return null;
  return { section: section as Section, year, slot };
}

export default async function PyqPage({
  params,
}: {
  params: Promise<{ pyqId: string }>;
}) {
  const { pyqId } = await params;
  const parsed = parsePyqId(pyqId);

  if (!parsed) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <p className="text-4xl">⚠️</p>
          <h1 className="text-2xl font-semibold text-white/80 font-mono">
            Invalid PYQ ID
          </h1>
          <p className="text-white/40 text-sm font-mono">
            Expected format:{" "}
            <span className="text-white/60">
              &lt;section&gt;_&lt;year&gt;_slot_&lt;1|2|3&gt;
            </span>
          </p>
          <p className="text-white/30 text-xs font-mono">Received: {pyqId}</p>
          <a
            className="w-22 h-12 px-4 py-2 border rounded-md border-neutral-700 text-white/60 font-mono"
            href="/pyqs"
          >
            Go Home
          </a>
        </div>
      </main>
    );
  }

  const { section, year, slot } = parsed;
  const renderLatex = section === "qa";

  // fetch from supabase
  const paper = await getPaperBySlug(pyqId);

  // no data yet for this paper
  if (!paper) {
    return <EmptyPyq />;
  }

  // map supabase data → QuestionGroup[]
  const groups: QuestionGroup[] = [
    // sets first, preserving order_index
    ...paper.sets.map((set) => ({
      type: "set" as const,
      id: set.id,
      label: set.label,
      context: set.context,
      contextImages: set.context_images ?? [],
      questions: set.questions.map((q) => ({
        id: q.id,
        text: q.text,
        options: q.options,
        answer: q.is_tita ? null : q.answer,
        explanation: q.explanation,
        is_tita: q.is_tita,
        tita_answer: q.tita_answer,
        video_url: q.video_url ?? "",
      })),
    })),

    // standalones
    ...paper.standalones.map((q) => ({
      type: "standalone" as const,
      question: {
        id: q.id,
        text: q.text,
        options: q.options,
        answer: q.is_tita ? null : q.answer,
        explanation: q.explanation,
        is_tita: q.is_tita,
        tita_answer: q.tita_answer,
        video_url: q.video_url ?? "",
      },
    })),
  ];

  // sort by order_index to preserve interleaved order
  const sortedGroups = [...groups].sort((a, b) => {
    const aIndex =
      a.type === "set"
        ? (paper.sets.find((s) => s.id === a.id)?.order_index ?? 0)
        : (paper.standalones.find((s) => s.id === a.question.id)?.order_index ??
          0);
    const bIndex =
      b.type === "set"
        ? (paper.sets.find((s) => s.id === b.id)?.order_index ?? 0)
        : (paper.standalones.find((s) => s.id === b.question.id)?.order_index ??
          0);
    return aIndex - bIndex;
  });

  const indexEntries = deriveIndexEntries(sortedGroups);
  const flatQuestions = flattenQuestions(sortedGroups);

  const globalIndexMap = new Map(
    flatQuestions.map(({ question, globalIndex }) => [
      question.id,
      globalIndex,
    ]),
  );

  const groupStartMap = new Map<string, number>();
  let counter = 1;
  for (const group of sortedGroups) {
    if (group.type === "set") {
      groupStartMap.set(group.id, counter);
      counter += group.questions.length;
    } else {
      groupStartMap.set(group.question.id, counter);
      counter++;
    }
  }

  return (
    <main className="min-h-screen w-full bg-[#f6f4f0] text-neutral-900 px-5 py-4 font-sans">
      <div className="flex flex-col gap-10 w-full h-full items-center z-10">
        {/* banner */}
        <div className="w-full bg-linear-to-b from-[#EA804E] py-6 px-7 to-impact-orange flex flex-col justify-evenly gap-6">
          <div className="w-full flex flex-start">
            <a
              href="/pyqs"
              className="size-10 flex items-center justify-center self-start bg-impact-blue rounded-full hover:bg-impact-orange hover:scale-105 transition-all duration-200 active:scale-95 text-white"
            >
              <FaArrowLeft />
            </a>
          </div>
          <div className="w-full text-center font-spectral text-3xl md:text-5xl text-white font-regular">
            {section.toUpperCase()} - Slot {slot} - CAT {year}
          </div>
          <div className="w-full flex flex-start gap-2">
            <span className="text-impact-blue/40 font-mono text-lg">
              {flatQuestions.length} Questions
            </span>
            {/* <div className="flex gap-2 items-center">
              <span className="text-impact-blue/40 font-mono text-xl">
                Difficulty:
              </span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-impact-orange stroke-impact-blue size-4"
                />
              ))}
            </div> */}
          </div>
        </div>

        {/* two-column layout: index + questions */}
        <div className="w-full max-w-7xl flex gap-20 px-2 md:px-4 pb-16">
          {/* hide index on mobile */}
          <div className="hidden md:block">
            <PyqIndex entries={indexEntries} />
          </div>

          <div className="flex flex-col gap-12 flex-1 min-w-0">
            {sortedGroups.map((group, index) => (
              <React.Fragment
                key={group.type === "set" ? group.id : group.question.id}
              >
                {/* Render the Card */}
                {group.type === "set" ? (
                  <QuestionSetCard
                    group={group}
                    startIndex={groupStartMap.get(group.id) ?? 1}
                  />
                ) : (
                  <div id={group.question.id} className="scroll-mt-6">
                    <QuestionCard
                      question={group.question}
                      globalIndex={globalIndexMap.get(group.question.id) ?? 1}
                      renderLatex={renderLatex}
                    />
                  </div>
                )}

                {/* Divider logic: Render if not the last item */}
                {index < sortedGroups.length - 1 && (
                  <div className="h-px w-full bg-impact-blue" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
