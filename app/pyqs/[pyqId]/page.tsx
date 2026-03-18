import { FaArrowLeft } from "react-icons/fa";
import { Star } from "lucide-react";
import QuestionCard, { Question } from "@/app/components/question-card";

type Section = "varc" | "dilr" | "qa";

interface ParsedPyq {
  section: Section;
  year: number;
  slot: number;
}

// e.g. "dilr_2024_slot_2" → ["dilr", "2024", "slot", "2"]
function parsePyqId(pyqID: string): ParsedPyq | null {
  const parts = pyqID.split("_");
  // Must have exactly 4 parts: section, year, "slot", slotNumber
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

  const dummy_passage = `Often the well intentioned music lover or the traditionally-minded professional composer asks two basic questions when faced with the electronic music phenomena: (1) . . . is this type of artistic creation music at all? and, (2) given that the product is accepted as music of a new type or order, is not such music "inhuman"? . . . As Lejaren Hiller points out in his book Experimental Music (co-author Leonard M. Isaacson), two questions which often arise when music is discussed are: (a) the substance of musical communication and its symbolic and semantic significance, if any, and (b) the particular processes, both mental and technical, which are involved in creating and responding to musical composition. The ever-present popular concept of music as a direct, open, emotional expression and as a subjective form of communication from the composer, is, of course still that of the nineteenth century, when composers themselves spoke of music in those terms . . . But since the third decade of our century many composers have preferred more objective definitions of music, epitomized in Stravinsky's description of it as "a form of speculation in terms of sound and time". An acceptance of this more characteristic twentieth-century view of the art of musical composition will of course immediately bring the layman closer to an understanding of, and sympathetic response to, electronic music, even if the forms, sounds and approaches it uses will still be of a foreign nature to him.

A communication problem however will still remain. The principal barrier that electronic music presents at large, in relation to the communication process, is that composers in this medium are employing a new language of forms . . . where terms like 'densities', 'indefinite pitch relations', 'dynamic serialization', 'permutation', etc., are substitutes (or remote equivalents) for the traditional concepts of harmony, melody, rhythm, etc. . . . When the new structural procedures of electronic music are at last fully understood by the listener the barriers between him and the work he faces will be removed. . . .

The medium of electronic music has of course tempted many kinds of composers to try their hand at it . . . But the serious-minded composer approaches the world of electronic music with a more sophisticated and profound concept of creation. Although he knows that he can reproduce and employ melodic, rhythmic patterns and timbres of a traditional nature, he feels that it is in the exploration of sui generis languages and forms that the aesthetic magic of the new medium lies. And, conscientiously, he plunges into this search.

The second objection usually levelled against electronic music is much more innocent in nature. When people speak—sometimes very vehemently—of the 'inhuman' quality of this music they seem to forget that the composer is the one who fires the machines, collects the sounds, manipulates them, pushes the buttons, programs the computer, filters the sounds, establishes pitches and scales, splices tape, thinks of forms, and rounds up the over-all structure of the piece, as well as every detail of it.`;

  const dummy_question: Question = {
    id: "q1",
    context: dummy_passage,
    text: `What relation does the "communication problem" mentioned in paragraph 2 have to the questions that the author recounts at the beginning of the passage?`,
    options: [
      "The communication problem is what allows us to see electronic music as music because music must be difficult to understand.",
      "Unfamiliar forms and terms might get in the way of our seeing electronic music as music, but this can be overcome.",
      "None; they are unrelated to one another and form parts of different discussions.",
      'Its unfamiliar "language of forms" and novel terms mean that we cannot see electronic music as music since it does not employ traditional musical concepts.',
    ],
    answer: "B",
    explanation: "",
  };

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
        </div>
      </main>
    );
  }

  const { section, year, slot } = parsed;

  return (
    <main className="min-h-screen bg-[#f6f4f0] text-neutral-900 px-5 py-4 font-sans">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#F26828 1px, transparent 1px), linear-gradient(90deg, #212859 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="flex flex-col gap-10 w-full h-full items-center z-10">
        {/* banner div */}
        <div className="w-full bg-linear-to-b from-[#EA804E] py-6 px-7 to-impact-orange flex flex-col justify-evenly gap-6">
          {/* button */}
          <div className="w-full flex flex-start">
            <a
              href="/blogs"
              className="size-10 flex items-center justify-center self-start bg-impact-blue rounded-full hover:bg-impact-orange hover:scale-105 transition-all duration-200 active:scale-95 text-white"
            >
              <FaArrowLeft />
            </a>
          </div>
          {/* title */}
          <div className="w-full text-center font-spectral text-5xl text-white font-regular">
            {section.toUpperCase()} - Slot {slot} - CAT {year}
          </div>

          {/* number of questions and difficulty */}
          <div className="w-full flex flex-start gap-2">
            <span className="text-impact-blue/40 font-mono text-lg">
              {" "}
              24 Questions |
            </span>
            <div className="flex gap-2 items-center">
              <span className="text-impact-blue/40 font-mono text-xl">
                {" "}
                Difficulty:
              </span>
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <Star className="fill-impact-orange stroke-impact-blue size-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* question map */}
        <div className="self-start">
          <QuestionCard question={dummy_question} />
        </div>
      </div>
    </main>
  );
}
