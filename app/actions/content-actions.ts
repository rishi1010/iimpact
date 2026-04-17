import { supabase } from "@/lib/supabase";

// ─── types ───────────────────────────────────────────────────────────────────

export type Blog = {
  id: string;
  title: string;
  blurb: string;
  content: string;
  cover_image_url: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Question = {
  id: string;
  paper_id: string;
  set_id: string | null;
  text: string;
  options: string[];
  answer: number | null;
  explanation: string;
  is_tita: boolean;
  tita_answer: string;
  order_index: number;
  video_url: string;
  label: string;
};

export type QuestionSet = {
  id: string;
  paper_id: string;
  label: string;
  context: string;
  context_images: string[];
  order_index: number;
  questions: Question[];
};

export type PYQPaper = {
  id: string;
  section: "VARC" | "DILR" | "QA";
  year: number;
  slot: number;
  created_at: string;
  sets: QuestionSet[];
  standalones: Question[];
};

// ─── blog functions ──────────────────────────────────────────────────────────

export async function getBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

// ─── pyq functions ───────────────────────────────────────────────────────────

// parses "dilr_2024_slot_2" → { section: "DILR", year: 2024, slot: 2 }
export function parsePaperSlug(slug: string): {
  section: string;
  year: number;
  slot: number;
} | null {
  // expected format: {section}_{year}_slot_{slot}
  const match = slug.match(/^([a-zA-Z]+)_(\d{4})_slot_(\d+)$/);
  if (!match) return null;

  return {
    section: match[1].toUpperCase(),
    year: parseInt(match[2]),
    slot: parseInt(match[3]),
  };
}

export async function getPaperBySlug(slug: string): Promise<PYQPaper | null> {
  const parsed = parsePaperSlug(slug);
  if (!parsed) return null;

  // 1. fetch the paper
  const { data: paper, error: paperError } = await supabase
    .from("pyq_papers")
    .select("*")
    .eq("section", parsed.section)
    .eq("year", parsed.year)
    .eq("slot", parsed.slot)
    .single();

  if (paperError || !paper) return null;

  // 2. fetch all sets for this paper
  const { data: sets, error: setsError } = await supabase
    .from("question_sets")
    .select("*")
    .eq("paper_id", paper.id)
    .order("order_index", { ascending: true });

  if (setsError) throw new Error(setsError.message);

  // 3. fetch all questions for this paper
  const { data: questions, error: questionsError } = await supabase
    .from("questions")
    .select("*")
    .eq("paper_id", paper.id)
    .order("order_index", { ascending: true });

  if (questionsError) throw new Error(questionsError.message);

  // 4. attach questions to their sets
  const setsWithQuestions: QuestionSet[] = (sets ?? []).map((set) => ({
    ...set,
    questions: (questions ?? []).filter((q) => q.set_id === set.id),
  }));

  // 5. pull out standalones (no set_id)
  const standalones: Question[] = (questions ?? []).filter(
    (q) => q.set_id === null,
  );

  return {
    ...paper,
    sets: setsWithQuestions,
    standalones,
  };
}

// Use Pick to select specific keys from your PYQPaper interface
export async function getPapers(): Promise<
  Pick<PYQPaper, "id" | "section" | "year" | "slot" | "created_at">[]
> {
  const { data, error } = await supabase
    .from("pyq_papers")
    .select("id, section, year, slot, created_at")
    .order("year", { ascending: false });

  if (error) throw new Error(error.message);

  // Cast the data to the Picked type to satisfy the return signature
  return (
    (data as Pick<
      PYQPaper,
      "id" | "section" | "year" | "slot" | "created_at"
    >[]) ?? []
  );
}
