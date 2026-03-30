import { FaArrowLeft } from "react-icons/fa";
import { Star } from "lucide-react";
import QuestionCard from "@/app/components/question-card";
import QuestionSetCard from "@/app/components/question-set-card";
import PyqIndex from "@/app/components/pyq-index";
import {
  QuestionGroup,
  deriveIndexEntries,
  flattenQuestions,
} from "@/app/components/pyq-types";

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

  // ─── dummy data ──────────────────────────────────────────────────────────
  const dummy_passage = `Often the well intentioned music lover or the traditionally-minded professional composer asks two basic questions when faced with the electronic music phenomena: . . . is this type of artistic creation music at all? and, given that the product is accepted as music of a new type or order, is not such music "inhuman"? . . . As Lejaren Hiller points out in his book Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed are: (a) the substance of musical communication and its symbolic and semantic significance, if any, and (b) the particular processes, both mental and technical, which are involved in creating and responding to musical composition. The ever-present popular concept of music as a direct, open, emotional expression and as a subjective form of communication from the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in those terms . . . But since the third decade of our century many composers have preferred more objective definitions of music, epitomized in Stravinsky's description of it as "a form of speculation in terms of sound and time". An acceptance of this more characteristic twentieth-century view of the art of musical composition will of course immediately bring the layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds and approaches it uses will still be of a foreign nature to him.

A communication problem however will still remain. The principal barrier that electronic music presents at large, in relation to the communication process, is that composers in this medium are employing a new language of forms . . . where terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes (or remote equivalents) for the traditional concepts of harmony, melody, rhythm, etc. . . . When the new structural procedures of electronic music are at last fully understood by the listener the barriers between him and the work he faces will be removed. . . .

The medium of electronic music has of course tempted many kinds of composers to try their hand at it . . . But the serious-minded composer approaches the world of electronic music with a more sophisticated and profound concept of creation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional nature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new medium lies. And, conscientiously, he plunges into this search.

The second objection usually levelled against electronic music is much more innocent in nature. When people speak—sometimes very vehemently—of the 'inhuman' quality of this music they seem to forget that the composer is the one who fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters the sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the piece, as well as every detail of it.`;

  const groups: QuestionGroup[] = [
    // RC set — context lives here, not on individual questions
    {
      type: "set",
      id: "set-1",
      label: "Electronic Music",
      context: dummy_passage,
      questions: [
        {
          id: "q1",
          text: `What relation does the "communication problem" mentioned in paragraph 2 have to the questions that the author recounts at the beginning of the passage?`,
          options: [
            "The communication problem is what allows us to see electronic music as music because music must be difficult to understand.",
            "Unfamiliar forms and terms might get in the way of our seeing electronic music as music, but this can be overcome.",
            "None; they are unrelated to one another and form parts of different discussions.",
            'Its unfamiliar "language of forms" and novel terms mean that we cannot see electronic music as music since it does not employ traditional musical concepts.',
          ],
          answer: 1,
          explanation: `Option 1 cannot be inferred from the passage. Unfamiliar forms and terms might get in the way of our seeing electronic music as music, but this can be overcome. Option 3 is incorrect as they are related discussions.`,
        },
        {
          id: "q2",
          text: `The passage suggests that contact tracing apps could inadvertently raise risky interactions by altering local behaviour. Which one of the assumptions below is most necessary for that suggestion to hold?`,
          options: [
            "Individuals base movement choices partly on observed infections and on the behaviour of others.",
            "Urban networks have uniform traffic conditions at all hours.",
            "App alerts always include precise location to within one metre.",
            "Most users uninstall apps within a week.",
          ],
          answer: 0,
          explanation: `Local responses interact, which turns many small adjustments into large scale patterns that can frustrate the intended aim of risk reduction.`,
        },
      ],
    },

    // DILR-style set with images
    {
      type: "set",
      id: "set-2",
      label: "Tariff Table",
      context:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      contextImages: [
        "https://online.2iim.com/CAT-question-paper/CAT-2025-Question-Paper-Slot-1-DILR/figa/32842_332818_0_25976755_dilr_tarif.jpg?0.9398323363265785",
      ],
      questions: [
        {
          id: "q3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam?",
          options: [
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          ],
          answer: 2,
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
        },
      ],
    },

    // Standalone QA-style question
    {
      type: "standalone",
      question: {
        id: "q4",
        text: "If x² + y² = 25 and xy = 12, what is the value of (x + y)?",
        options: ["5", "7", "±7", "±5"],
        answer: 2,
        explanation: "(x + y)² = x² + 2xy + y² = 25 + 24 = 49, so x + y = ±7.",
      },
    },
  ];

  const indexEntries = deriveIndexEntries(groups);
  const flatQuestions = flattenQuestions(groups);

  // Build a map: questionId → globalIndex for O(1) lookup
  const globalIndexMap = new Map(
    flatQuestions.map(({ question, globalIndex }) => [
      question.id,
      globalIndex,
    ]),
  );

  // Build a map: groupId → startIndex
  const groupStartMap = new Map<string, number>();
  let counter = 1;
  for (const group of groups) {
    if (group.type === "set") {
      groupStartMap.set(group.id, counter);
      counter += group.questions.length;
    } else {
      groupStartMap.set(group.question.id, counter);
      counter++;
    }
  }
  // ─────────────────────────────────────────────────────────────────────────

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
          <div className="w-full text-center font-spectral text-5xl text-white font-regular">
            {section.toUpperCase()} - Slot {slot} - CAT {year}
          </div>
          <div className="w-full flex flex-start gap-2">
            <span className="text-impact-blue/40 font-mono text-lg">
              {flatQuestions.length} Questions |
            </span>
            <div className="flex gap-2 items-center">
              <span className="text-impact-blue/40 font-mono text-xl">
                Difficulty:
              </span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="fill-impact-orange stroke-impact-blue size-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* two-column layout: index + questions */}
        <div className="w-full max-w-6xl flex gap-8 px-4 pb-16">
          {/* sticky index */}
          <PyqIndex entries={indexEntries} />

          {/* question groups */}
          <div className="flex flex-col gap-12 flex-1 min-w-0">
            {groups.map((group) => {
              if (group.type === "set") {
                return (
                  <QuestionSetCard
                    key={group.id}
                    group={group}
                    startIndex={groupStartMap.get(group.id) ?? 1}
                  />
                );
              } else {
                const globalIndex = globalIndexMap.get(group.question.id) ?? 1;
                return (
                  <div
                    key={group.question.id}
                    id={group.question.id}
                    className="scroll-mt-6"
                  >
                    <QuestionCard
                      question={group.question}
                      globalIndex={globalIndex}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
