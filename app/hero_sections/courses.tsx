"use client";

import CourseCard, { CourseFeature } from "../components/course-card";
import ScribbleArrow from "../components/scribble-arrow";

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
  return (
    <section id="courses" className="w-full relative  bg-[#f6f4f0] py-20 px-6">
      <ScribbleArrow
        text=" For our Old Students"
        className="absolute top-[17%] right-[3%] items-start z-10"
        rotation={180}
        textPosition="above"
        color="impact-blue"
      />
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-6 justify-center">
        {/* Smallest — Individual Section */}
        <div className="w-full md:w-[28%]">
          <CourseCard
            title="CAT'26 Individual Section"
            subtitle="Pick any one section"
            pricing={{
              originalPrice: "INR 9,999 each",
              earlyBirdPrice: "INR 7,000 each",
              oldStudentPrice: "INR 6,500 each",
            }}
            features={individualFeatures}
            onEnroll={() => {}}
          />
        </div>

        {/* Middle — Full Course */}
        <div className="w-full md:w-[33%]">
          <CourseCard
            title="CAT'26 Full Course"
            subtitle="Complete CAT preparation"
            pricing={{
              originalPrice: "INR 29,999",
              earlyBirdPrice: "INR 21,000",
              oldStudentPrice: "INR 19,500",
            }}
            features={fullCourseFeatures}
            isMiddle
            onEnroll={() => {}}
          />
        </div>

        {/* Flagship — Full Course + WATPI */}
        <div className="w-full md:w-[39%]">
          <CourseCard
            title="CAT'26 Full Course + WATPI '26–'27"
            subtitle="Our most complete package"
            pricing={{
              originalPrice: "INR 39,999",
              earlyBirdPrice: "INR 29,500",
              oldStudentPrice: "INR 28,000",
            }}
            features={flagshipFeatures}
            isFlagship
            onEnroll={() => {}}
          />
        </div>
      </div>

      {/* Footer note */}
      <p className="text-center text-xs text-neutral-400 font-sans mt-12">
        * CAT'25 student pricing is exclusive and subject to verification. Early
        bird prices are limited time offers.
      </p>
    </section>
  );
};

export default Courses;
