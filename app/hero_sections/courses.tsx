"use client";

import CourseCard, { CourseFeature } from "../components/course-card";
import ScribbleArrow from "../components/scribble-arrow";
import { useRouter } from "next/navigation";

const ALL_FEATURES = [
  "Live Concept Lectures + Recordings",
  "Live Doubt Sessions + Recordings",
  "Live Mock Analysis + Recordings",
  "Rich Repository of Practice Resources",
  "24*7 Doubt Clearing",
  "PYQ Quizzes",
  "AMA Sessions",
  "OMET Prep",
  "Revision Lectures + Final Booster",
  "15 Full Mocks + Topical Tests",
  "Form Writing Mentorship",
  "Free Batch Transfer",
  "Mock PIs + Mentorship Sessions",
  "Live WATPI Lectures",
  "College Specific Sessions",
  "Current Affairs + Practice Resources",
];

const individualFeatures: CourseFeature[] = ALL_FEATURES.map((label) => ({
  label,
  included: [
    "Live Concept Lectures + Recordings",
    "Live Doubt Sessions + Recordings",
    "Live Mock Analysis + Recordings",
    "Rich Repository of Practice Resources",
    "24*7 Doubt Clearing",
    "PYQ Quizzes",
  ].includes(label),
}));

const fullCourseFeatures: CourseFeature[] = ALL_FEATURES.map((label) => ({
  label,
  included: ![
    "Form Writing Mentorship",
    "Free Batch Transfer",
    "Mock PIs + Mentorship Sessions",
    "Live WATPI Lectures",
    "College Specific Sessions",
    "Current Affairs + Practice Resources",
  ].includes(label),
}));

const flagshipFeatures: CourseFeature[] = ALL_FEATURES.map((label) => ({
  label,
  included: true,
}));

const Courses = () => {
  const router = useRouter();
  return (
    <section id="courses" className="w-full relative  bg-[#f6f4f0] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-impact-orange font-sans font-semibold text-sm uppercase tracking-widest mb-2">
          Choose your path
        </p>
        <h2 className="text-4xl md:text-6xl font-playfair italic text-impact-blue">
          Our Offerings
        </h2>
        <p className="text-neutral-500 font-sans mt-3 max-w-xl mx-auto text-base">
          Every course is led by 100%ilers. Pick the depth that matches your
          ambition.
        </p>
      </div>

      {/* Cards — grow left to right */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-stretch gap-6 justify-center">
        {/* Smallest — Individual Section */}
        <div className="w-full md:w-[30%]">
          <CourseCard
            title="CAT'26 Individual Section"
            subtitle="Pick one or more subjects"
            pricing={{
              originalPrice: "INR 9,999 each",
              earlyBirdPrice: "INR 7,000 each",
            }}
            features={individualFeatures}
            onEnroll={() => router.push("/contact")}
          />
        </div>

        {/* Middle — Full Course */}
        <div className="w-full md:w-[30%]">
          <CourseCard
            title="CAT'26 Full Course"
            subtitle="Complete CAT preparation"
            pricing={{
              originalPrice: "INR 29,999",
              earlyBirdPrice: "INR 21,000",
            }}
            features={fullCourseFeatures}
            isMiddle
            onEnroll={() => router.push("/contact")}
          />
        </div>

        {/* Flagship — Full Course + WATPI */}
        <div className="w-full md:w-[39%]">
          <CourseCard
            title="CAT'26 Full Course + WATPI '26–'27"
            subtitle="With you from day-one to your first day in your dream B-school"
            pricing={{
              originalPrice: "INR 39,999",
              earlyBirdPrice: "INR 29,500",
            }}
            features={flagshipFeatures}
            isFlagship
            onEnroll={() => router.push("/contact")}
          />
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-neutral-400 font-sans mt-12">
        All purchases are final. No refunds will be issued once a course has
        been purchased. Early bird prices are limited time offers.
      </p>
    </section>
  );
};

export default Courses;
