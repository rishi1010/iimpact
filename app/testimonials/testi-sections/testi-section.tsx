"use client";

import React from "react";
import TestimonialCard from "@/app/components/testimonial-card";

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  percentile: string;
  description: string;
  linkedinUrl: string;
  avatarUrl: string;
  questions: QuestionItem[];
}

const testimonials: Testimonial[] = [
  {
    name: "Apurv H.",
    percentile: "99.99%ile",
    description:
      "From struggling with logic to mastering it in weeks — the personalized curriculum was a total game-changer for me.",
    linkedinUrl: "https://linkedin.com/in/apurv",
    avatarUrl: "https://avatar.vercel.sh/apurv",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Pushing through the first two weeks when nothing seemed to click. The structured daily problems kept me going.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The mentor sessions. Having someone break down my exact weak spots instead of generic advice was everything.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I cracked my dream college interview and realized I was answering questions I would have blanked on before.",
      },
    ],
  },
  {
    name: "Sarah J.",
    percentile: "99.8%ile",
    description:
      "The community here is unlike anything I've experienced. Everyone pushes each other to be their absolute best.",
    linkedinUrl: "https://linkedin.com/in/sarah-j",
    avatarUrl: "https://avatar.vercel.sh/sarah",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Balancing this with school. But the bite-sized modules made it surprisingly manageable on tough days.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The community forums. Reading how others approached the same problem taught me more than the material alone.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "My percentile jumped 12 points in a single month. That number told me the method was working.",
      },
    ],
  },
  {
    name: "Kenji W.",
    percentile: "100%ile",
    description:
      "The depth of the technical modules is unmatched. It felt like getting a master's degree in record time.",
    linkedinUrl: "https://linkedin.com/in/kenji-w",
    avatarUrl: "https://avatar.vercel.sh/kenji",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Accepting that I had to unlearn some bad habits before rebuilding my approach from scratch.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "First-principles thinking. Once I stopped pattern-matching and started reasoning, everything opened up.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I hit a perfect score and genuinely felt I deserved it — not lucky, just prepared.",
      },
    ],
  },
  {
    name: "Elena V.",
    percentile: "99.9%ile",
    description:
      "I finally understood the 'why' behind the concepts, not just the 'how'. Truly a transformative experience.",
    linkedinUrl: "https://linkedin.com/in/elena-v",
    avatarUrl: "https://avatar.vercel.sh/elena",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Getting comfortable with uncertainty. Timed sections used to paralyze me; now I treat them as puzzles.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The error-log habit. Tracking every mistake helped me see patterns I was completely blind to before.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "Oxford's offer letter arrived and I burst into tears. Months of early mornings finally had a face.",
      },
    ],
  },
  {
    name: "Marcus D.",
    percentile: "98.5%ile",
    description:
      "Slick interface, even slicker content. This is genuinely the gold standard of learning platforms.",
    linkedinUrl: "https://linkedin.com/in/marcus-dev",
    avatarUrl: "https://avatar.vercel.sh/marcus",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Trusting the process when my mock scores were inconsistent. Consistency came later than I expected.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Simulated test conditions every Sunday. Treating mocks like the real thing removed all the exam-day nerves.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I walked out of the exam hall smiling. That feeling alone was worth every late night.",
      },
    ],
  },
  {
    name: "Priya S.",
    percentile: "99.5%ile",
    description:
      "If you're serious about your career trajectory, this is the best investment you'll make this year.",
    linkedinUrl: "https://linkedin.com/in/priya-stats",
    avatarUrl: "https://avatar.vercel.sh/priya",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "The quant section. Numbers were never my strong suit — the step-by-step breakdowns saved me.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Seeing my weak areas mapped visually. Knowing exactly where to spend my time was a revelation.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "Wharton called. I had to replay the voicemail three times before I believed it was real.",
      },
    ],
  },
  {
    name: "Rohan M.",
    percentile: "99.7%ile",
    description:
      "I was stuck at 95%ile for months. The strategy sessions here broke the ceiling I didn't know I had.",
    linkedinUrl: "https://linkedin.com/in/rohan-m",
    avatarUrl: "https://avatar.vercel.sh/rohan",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "DILR. I could never finish the sets in time until I learned proper triage — which sets to attempt and which to leave.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The mock review sessions. Watching how the mentors approached the same paper I just attempted was eye-opening.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "IIM Calcutta's admit came through. I called my parents first and didn't say a word — just cried.",
      },
    ],
  },
  {
    name: "Ananya K.",
    percentile: "99.6%ile",
    description:
      "The VARC modules alone are worth it. I went from dreading RC to genuinely enjoying it by the end.",
    linkedinUrl: "https://linkedin.com/in/ananya-k",
    avatarUrl: "https://avatar.vercel.sh/ananya",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Reading comprehension speed. I was accurate but slow — the timed drills here forced me to trust my instincts.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Learning to identify question types before diving into the passage. That single habit saved me minutes per section.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I scored a 99.6 and realized my weakest section had become my strongest. The irony wasn't lost on me.",
      },
    ],
  },
  {
    name: "Dev P.",
    percentile: "98.9%ile",
    description:
      "Coming from a non-engineering background, I was terrified of quant. IIMPact made it feel approachable and even fun.",
    linkedinUrl: "https://linkedin.com/in/dev-p",
    avatarUrl: "https://avatar.vercel.sh/devp",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Algebra. It had been years since school and I had forgotten the basics. The foundation module rebuilt everything.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Shortcut derivations instead of rote memorization. Understanding why a formula works means you can reconstruct it under pressure.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "MDI Gurgaon offered me a seat and I realized the arts kid had actually cracked it.",
      },
    ],
  },
  {
    name: "Zara T.",
    percentile: "99.4%ile",
    description:
      "The doubt-solving WhatsApp group alone is worth the entire fee. No question goes unanswered for more than an hour.",
    linkedinUrl: "https://linkedin.com/in/zara-t",
    avatarUrl: "https://avatar.vercel.sh/zara",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Staying motivated in the middle stretch when progress felt invisible. The weekly check-ins from mentors kept me anchored.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The concept trees. Having every topic mapped out visually meant I always knew where I was in the bigger picture.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I got three IIM calls and converted two. Six months ago I wasn't sure I could even clear the cutoffs.",
      },
    ],
  },
  {
    name: "Vikram N.",
    percentile: "99.3%ile",
    description:
      "I tried two other platforms before this. Nothing came close to the quality of teaching and personal attention here.",
    linkedinUrl: "https://linkedin.com/in/vikram-n",
    avatarUrl: "https://avatar.vercel.sh/vikram",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Unlearning the wrong strategies I'd picked up elsewhere. It took a few weeks to fully trust the new approach.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The PYQ-based practice. Every question felt familiar on exam day because we'd seen every pattern in class.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "IIFT Delhi's offer landed in my inbox and I just sat there staring at the screen for five minutes.",
      },
    ],
  },
  {
    name: "Meera R.",
    percentile: "99.1%ile",
    description:
      "As a working professional, I had maybe 2 hours a day to prep. The structured plan made every minute count.",
    linkedinUrl: "https://linkedin.com/in/meera-r",
    avatarUrl: "https://avatar.vercel.sh/meera",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Finding time. My job was demanding and some weeks I could barely manage an hour. The flexible recordings saved me.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The D-Day strategy session. Having a concrete plan for the exam itself — which section to attempt first, how to manage time — removed so much anxiety.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "IIM Lucknow called and my manager was happier than I was. He'd watched me prep on lunch breaks for months.",
      },
    ],
  },
  {
    name: "Arjun B.",
    percentile: "99.2%ile",
    description:
      "The live sessions have an energy that recorded content just can't replicate. I never missed a single class.",
    linkedinUrl: "https://linkedin.com/in/arjun-b",
    avatarUrl: "https://avatar.vercel.sh/arjun",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Geometry. I could handle numbers but spatial reasoning under time pressure was a completely different beast.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Being able to unmute and ask during class. Real-time answers to real-time confusion is something no recorded course can offer.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I walked into the GD-PI at IIM Kozhikode feeling genuinely ready, not just hopeful. That confidence was new.",
      },
    ],
  },
  {
    name: "Nisha C.",
    percentile: "98.7%ile",
    description:
      "I appreciated that the mentors treated us like intelligent adults, not students to be spoon-fed.",
    linkedinUrl: "https://linkedin.com/in/nisha-c",
    avatarUrl: "https://avatar.vercel.sh/nisha",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Para-jumbles. My instinct was always off and I couldn't figure out why. The structural approach here changed everything.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Learning to treat language logically — identifying connectors, thesis statements, examples. English suddenly had rules I could apply.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "SP Jain admitted me and I realised the girl who once feared verbal had cleared one of the toughest VARC cutoffs.",
      },
    ],
  },
  {
    name: "Kabir A.",
    percentile: "99.0%ile",
    description:
      "Rishi Sir's mock analysis sessions are legendary. He finds things in your attempt that you didn't even know were problems.",
    linkedinUrl: "https://linkedin.com/in/kabir-a",
    avatarUrl: "https://avatar.vercel.sh/kabir",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "Accepting my mock scores honestly. It's easy to blame the paper — harder to look at your own decisions clearly.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "The attempt audit. Going question by question through a mock with a mentor and understanding every decision — right or wrong — was brutal but transformative.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "CAT result day. 99 percentile on the screen and months of honest, painful work suddenly made complete sense.",
      },
    ],
  },
];

const col1 = testimonials.slice(0, 5);
const col2 = testimonials.slice(5, 10);
const col3 = testimonials.slice(10, 15);

const TestiOne = () => {
  return (
    <section id="testi" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Desktop: 3 staggered columns */}
        <div className="hidden md:flex gap-6 items-start">
          <div className="flex-1 flex flex-col gap-6">
            {col1.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-6 mt-16">
            {col2.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-6">
            {col3.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiOne;
