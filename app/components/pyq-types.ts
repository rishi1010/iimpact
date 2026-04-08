export type Section = "varc" | "dilr" | "qa";

export interface Question {
  id: string;
  text: string;
  options: string[];
  answer: number | null;
  explanation: string;
  is_tita?: boolean;
  tita_answer?: string;
  video_url: string;
}

export interface QuestionSet {
  type: "set";
  id: string; // e.g. "set-1" — used for index anchor
  label?: string; // optional title e.g. "RC Passage 1" shown in index
  context?: string;
  contextImages?: string[];
  questions: Question[];
}

export interface StandaloneQuestion {
  type: "standalone";
  question: Question;
}

export type QuestionGroup = QuestionSet | StandaloneQuestion;

export interface PyqData {
  section: Section;
  year: number;
  slot: number;
  groups: QuestionGroup[];
}

// ─── helpers ────────────────────────────────────────────────────────────────

/** Flatten all questions from groups with a global 1-based number assigned */
export function flattenQuestions(
  groups: QuestionGroup[],
): { question: Question; globalIndex: number; groupId: string }[] {
  let counter = 1;
  const result: { question: Question; globalIndex: number; groupId: string }[] =
    [];

  for (const group of groups) {
    if (group.type === "set") {
      for (const q of group.questions) {
        result.push({ question: q, globalIndex: counter++, groupId: group.id });
      }
    } else {
      result.push({
        question: group.question,
        globalIndex: counter++,
        groupId: group.question.id,
      });
    }
  }

  return result;
}

/** Derive index entries from groups — what the sidebar renders */
export interface IndexEntry {
  anchorId: string;
  label: string;
  questionRange: string; // e.g. "Q1–Q4" or "Q7"
}

export function deriveIndexEntries(groups: QuestionGroup[]): IndexEntry[] {
  let counter = 1;
  return groups.map((group) => {
    if (group.type === "set") {
      const start = counter;
      const end = counter + group.questions.length - 1;
      counter += group.questions.length;
      return {
        anchorId: group.id,
        label: group.label ?? `Set`,
        questionRange: `Q${start}–Q${end}`,
      };
    } else {
      const idx = counter++;
      return {
        anchorId: group.question.id,
        label: `Q${idx}`,
        questionRange: `Q${idx}`,
      };
    }
  });
}
