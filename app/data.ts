// This is the data for the FAQs. the question is what will be visible first
// and the answer is what will be visible when expanded.
// if you want to add a new faq, add this to the faqs_data before ]
// {
//     question: "",
//     answer:
//       "",
//   },

// do not forget the ',' at the end, or it will show an error.
// similarly for removing, make sure each {} is separated by a ','

export const Faqs_data = [
  {
    question: "Is online coaching good for CAT?",
    answer:
      "Yes. CAT is an exam that most take while being engaged in a job or undergraduate degree. The time commitment and logistics associated with in-person coaching often outweigh the results. IIMpact's learning model is fully online, offering high-quality teaching and resources with an understanding of the constraints that a promising CAT student may have to account for.",
  },
  {
    question: "How should I prepare for the CAT?",
    answer:
      "Effective CAT preparation begins with a clear plan, guidance from the right mentor, and consistent execution. A well-rounded approach includes:\n• Building conceptual clarity across all three sections\n• Practising a wide range of quality questions\n• Taking regular sectional tests and full-length mocks\n• Analysing performance to identify strengths and improvement areas\n• Developing a personalised attempt strategy\n\nConsistency matters more than intensity — studying regularly, revising concepts, and tracking progress over time builds both confidence and accuracy.",
  },
  {
    question: "Which exams are covered under the IIMpact CAT Programs?",
    answer:
      "IIMpact's flagship program includes structured preparation for:\n• CAT (Common Admission Test)\n• Other Management Entrance Tests (OMETs) such as XAT, SNAP, and NMAT",
  },
  {
    question: "What resources and support will I get after enrolling?",
    answer:
      "The program offers a complete academic ecosystem:\n• 150+ hours of live interactive classes (with recordings)\n• 8,000+ high-quality practice questions\n• 15 full-length mocks and sectional tests\n• Dedicated OMET course\n• Daily and weekly curated tasks\n• Live sectional solving sessions\n• Live mock analysis by 100 percentiler mentors\n• Strategy, speed, and accuracy training\n• D-Day planning\n• Customised performance trackers to monitor growth across all stages of preparation",
  },
  {
    question:
      "What is the biggest difference between IIMpact and other coaching institutes?",
    answer:
      "The biggest difference lies in the depth of mentorship and the structure of preparation. IIMpact is backed by two CAT 100 percentilers who achieved the mark as students themselves, when everything was at stake. Their singular goal is to be the mentor they never had — identifying individual problems and offering practical solutions. The 3-phase system trims irrelevant material and ensures every minute of study contributes meaningfully on the D-Day.",
  },
  {
    question: "What is the mode of classes?",
    answer:
      "All classes at IIMpact are conducted as live interactive sessions. Students learn in real time with the mentors, allowing them to ask questions, clarify doubts instantly, and actively participate in problem solving. Recordings of all sessions are also available for revision, ensuring students can revisit concepts whenever needed.",
  },
  {
    question: "What devices is the IIMpact app compatible with?",
    answer:
      "The IIMpact app supports seamless learning across:\n• Laptop / Desktop\n• iOS devices (iPhone & iPad)\n• Android phones and tablets\n\nThis flexibility allows you to attend live sessions, revise recordings, and continue preparation anytime, from anywhere.",
  },
  {
    question: "Who are the instructors for the IIMpact CAT course?",
    answer:
      "The IIMpact CAT course is exclusively led by Divyansh Gupta and Rishi Mittal — toppers who have each achieved 100 percentile in CAT. As the founders and sole instructors, they personally conduct all academic sessions, bringing deep insight, proven strategies, and firsthand understanding of what it takes to excel at the highest level.",
  },
  {
    question: "How are doubts solved?",
    answer:
      "Doubt resolution at IIMpact is continuous, accessible, and highly supportive. Students receive help through:\n• 24×7 mentor support within the student community\n• Detailed video solutions for practice questions and tests\n• Dedicated live doubt-solving sessions for in-depth clarity\n• Interactive discussion spaces where queries are addressed promptly",
  },
  {
    question: "What level of personal attention can students expect?",
    answer:
      "Students receive a high level of personal attention through direct access to the mentors themselves — both 100 percentilers who teach and guide the program. As founders and primary instructors, they remain closely involved in each student's journey, offering guidance on:\n• Concepts and strategy\n• Preparation planning\n• Performance improvement and progress tracking",
  },
];

// from here starts the data for the testimonials on the testimonials page.

// DO NOT TOUCH THIS!!!!
interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}
// DO NOT TOUCH THIS!!!!
interface Testimonial {
  name: string;
  percentile: string;
  description: string;
  linkedinUrl?: string;
  avatarUrl: string;
  questions: QuestionItem[];
}

// This is the data for the testimonials. if you want to add a new testimonials,
// add the image in testi-pics folder, in the public folder.
// then copy one of the {} and paste it in the end, or any position you want
// keeping the ',' in mind. and change the data.
// and rename the avatar_url to what it needs to be
// the name of the picture added in the testi-pics section, with the extension like .png .jpeg
export const Testimonials_data: Testimonial[] = [
  {
    name: "Rohan Vig",
    percentile: "99.91%ile",
    description: " Serial start-up founder",
    linkedinUrl: "https://www.linkedin.com/in/rohanvig/",
    avatarUrl: "/testi-pics/Rohan.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "being consistent with CAT prep while running my own business",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "a tightly focused, mentor-curated plan designed by proven 100-percentilers.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I achieved a 99.9+ percentile while working as a start-up founder",
      },
    ],
  },
  {
    name: "Gursimar S Tuteja",
    percentile: "99.9%ile",
    description: " Last read a book during school times",
    linkedinUrl: "https://www.linkedin.com/in/gursimarsingh03/",
    avatarUrl: "/testi-pics/Gursimar.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "having no sustained reading habit for tackling dense VARC passages.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "IIMpact's daily intent-driven reading combined with structured passage analysis.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer: "VARC stabilised as my highest-scoring section.",
      },
    ],
  },
  {
    name: "Aryan Chaudhary",
    percentile: "99.89%ile",
    description: "Chasing momentum, not months",
    linkedinUrl: "https://www.linkedin.com/in/aryan1305choudhary/",
    avatarUrl: "/testi-pics/Aryan.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "beginning serious CAT preparation far later than most aspirants.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "IIMpact's sharply prioritised revision cycles with close personal mentor oversight.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "the nervous aspirant who started in September walked into an IIM A interview in February",
      },
    ],
  },
  {
    name: "Arindam Kanoria",
    percentile: "99.85%ile",
    description: " Analysis turned effort into results",
    linkedinUrl: "https://www.linkedin.com/in/arindamkanoria/",
    avatarUrl: "/testi-pics/Arindam.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "when the hours I put in weren't translating into marks",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Rishi and Divyansh Sir's detailed insights from analysing my mock attempts",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "my sharpest peak happened after my last mock, on the real CAT :)",
      },
    ],
  },
  {
    name: "Shweth Shetty",
    percentile: "99.84%ile",
    description: " Multiple CAT attempts",
    linkedinUrl: "https://www.linkedin.com/in/shweth-shetty-19ba08222/",
    avatarUrl: "/testi-pics/Shweth.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "gathering the resolve to re-attempt with purpose after a disappointing CAT 2024",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer: "a clear, focused roadmap curated by Divyansh and Rishi Sir",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer: "the anxiety disappeared on seeing my scores rise sharply.",
      },
    ],
  },
  {
    name: "Eeshan Joshi",
    percentile: "99.72%ile",
    description: " Aced despite a 70-hr work week",
    linkedinUrl: "https://www.linkedin.com/in/eeshan-joshi/",
    avatarUrl: "/testi-pics/Eeshan.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "staying disciplined and consistent over months of prep",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "well-structured, achievable schedules and IIMpact's mentors actually tracking my progress, ",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer: "mock percentiles started climbing faster with time",
      },
    ],
  },
  {
    name: "Radha Agrawal",
    percentile: "99.71%ile",
    description: " Almost gave up on CAT midway",
    avatarUrl: "/testi-pics/Radha.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "feeling demotivated during a difficult time right in the middle of prep",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Divyansh and Rishi sir's consistent support through my toughest times",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer: "I achieved my dream score against all odds",
      },
    ],
  },
  {
    name: "Aastik Bhatt",
    percentile: "99.7%ile",
    description: "Found a helping hand in IIMpact",
    linkedinUrl: "https://www.linkedin.com/in/aastik-bhatt-25889419b/",
    avatarUrl: "/testi-pics/Aastik.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "not having anyone with real CAT experience to guide me.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "talking to mentors who had themselves aced the CAT and were keen to tailor my prep journey.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "my prep finally matched what CAT actually demands- no more and no less.",
      },
    ],
  },
  {
    name: "Aditya Mukherjee",
    percentile: "99.69%ile",
    description: " Last solved a math problem 6 years ago",
    linkedinUrl: "https://www.linkedin.com/in/aditya-mukherjee-5699331a9/",
    avatarUrl: "/testi-pics/Aditya.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "re-training my mind to solve multi-step problems without getting lost",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "replacing brute force practice with DG and Rishi Sir's emphasis on structure, error analysis, and cataloguing",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "my weakest sections gave me the scores that fetched me BLACKI calls",
      },
    ],
  },
  {
    name: "Dhruv Kalra",
    percentile: "99.68%ile",
    description: " Learnt to beat the clock",
    linkedinUrl: "https://www.linkedin.com/in/dhruv-kalra-590915217/",
    avatarUrl: "/testi-pics/Dhruv.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "adjusting to the fast pace that CAT demands",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer: "timed homework and practice from Day 1",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I finished all sections well in time, maximising my attempt rate on the CAT day",
      },
    ],
  },
  {
    name: "Tushar Bajaj",
    percentile: "99.62%ile",
    description: " Cut through the chaos with insight",
    linkedinUrl: "https://www.linkedin.com/in/tusharbajaj111/",
    avatarUrl: "/testi-pics/Tushar.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "confusion from conflicting advice across multiple coaching sources and materials",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer: "IIMpact's no-nonsense, easy to follow program and syllabus",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I delivered on my strengths and secured shortlists from IIM ABC ",
      },
    ],
  },
  {
    name: "Yash Gupta",
    percentile: "99.60%ile",
    description: " Unlearning JEE math to ace CAT",
    linkedinUrl: "https://www.linkedin.com/in/yash-yg-gupta/",
    avatarUrl: "/testi-pics/Yash.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "unlearning the complex math methods used in engineering classes",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer: "Divyansh Sir's practical, pattern-based approach to CAT quant",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "the entire exam became an exercise in using the tools I had in my catalogue",
      },
    ],
  },
  {
    name: "Kanishk Sehgal",
    percentile: "99.54%ile",
    description: " First dance with competition",
    avatarUrl: "/testi-pics/Kanishk.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "having no sense of how competitive exams or CAT questions really work.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "Phase 2 practice with past CAT papers and clear attempt strategy.",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer: "my mock scores became a reality on CAT day",
      },
    ],
  },
  {
    name: "Mohan G Nayak",
    percentile: "99.53%ile",
    description: " Self-Prep to Guided Excellence",
    linkedinUrl: "https://www.linkedin.com/in/mohannayak4/",
    avatarUrl: "/testi-pics/Mohan.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer: "doing self-prep without knowing if I was on the right track.",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "putting my trust in DG Sir and Rishi Sir's experience and methods",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I performed way better on the D-Day than my mocks during self-prep",
      },
    ],
  },
  {
    name: "Drona Kathuria",
    percentile: "99.48%ile",
    description: " Faced my DILR demons",
    linkedinUrl: "https://www.linkedin.com/in/drona-kathuria-7a386a213/",
    avatarUrl: "/testi-pics/Drona.jpeg",
    questions: [
      {
        id: "Q1",
        question: "The hardest part was ...",
        answer:
          "making sense of new DILR sets of varying difficulties from scratch ",
      },
      {
        id: "Q2",
        question: "What made things click...",
        answer:
          "understanding the pattern's using Rishi Sir's strategy playbook",
      },
      {
        id: "Q3",
        question: "It all paid off when ...",
        answer:
          "I knew exactly what to attack and what to avoid to get my best score",
      },
    ],
  },
];

// ------------------------------------------------------------------------

// these are testimonials for the landing page. similar instructions
// apply.

// Do Not Touch This!!!
type TestimonialMain = {
  text: string;
  name: string;
  score?: string;
  avatarUrl: string;
};

// this is the data the can be updated. Please make sure if a new data is added,
// they have text, name and avatarUrl. score is optional.
export const Testimonials: TestimonialMain[] = [
  {
    text: "IIMpact's structured approach was exactly what I needed. Divyansh Sir's VARC sessions sharpened my reading, and Rishi Sir's DILR methods turned puzzles into patterns. Converted IIM B, C, L — joined IIM Calcutta, now interning at BCG.",
    name: "Tanishq Gupta",
    score: "IIM C",
    avatarUrl: "/testi-pics/Tanishq.png",
  },
  {
    text: "Everyone said CAT is an engineer's game, but Divyansh Sir broke down QA in a way that just clicked. It was never about 8-hour grinds — smart strategy and consistency got me here.",
    name: "Krish Kukreja",
    score: "IIM Shilong",
    avatarUrl: "/testi-pics/Krish.png",
  },
  {
    text: "As a BDS graduate, I wasn't sure how I fit into the MBA crowd. Divyansh Sir's logical VARC approach and Rishi Sir's mock strategy gave me a clear roadmap. Converted IIM C & FMS.",
    name: "Dr.Saleha Perween",
    avatarUrl: "/testi-pics/Saleha.png",
    score: "IIM C",
  },
  {
    text: "Practicing law full-time, quant felt impossible to crack. Rishi Sir and Divyansh Sir made it about understanding over speed, and IIMpact's peer group kept me consistent. Converted IIM A, now with an offer from BCG.",
    name: "Vipula Bhatt",
    avatarUrl: "/testi-pics/Vipula.png",
    score: "IIM A",
  },
  {
    text: "Coming from MBBS, I wasn't used to math-heavy exams at all. The structured approach made quant finally make sense and VARC stopped feeling like guesswork. Now at FMS, interning at Accenture Strategy.",
    name: "Dr. Parth",
    avatarUrl: "/testi-pics/Parth.png",
    score: "FMS",
  },
  {
    text: "Preparing after 3 years off books while working oil rig shifts wasn't easy. IIMpact's weekend planner kept me on schedule, and Rishi Sir's DILR videos were gold for someone returning to study mode.",
    name: "Tharun Vijay",
    avatarUrl: "/testi-pics/Tharun.png",
    score: "IIM B",
  },
  {
    text: "Juggling a 9-to-7 job, I couldn't afford to overthink my prep. Divyansh Sir's daily calendar removed all the guesswork, and Rishi Sir's SOTDs became my wind-down ritual every night.",
    name: "Tanisha Tyagi",
    avatarUrl: "/testi-pics/Tanisha.png",
    score: "IIM K",
  },
];
