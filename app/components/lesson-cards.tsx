import { FileVideo } from "lucide-react";

const lessons = [
  { id: 1, title: "Lesson 1: Number Systems", duration: "42:32" },
  { id: 2, title: "Lesson 2: Algebra", duration: "36:14" },
  { id: 3, title: "Lesson 3: Geometry", duration: "51:08" },
];

const stackConfig = [
  { scale: 1, y: 0, opacity: 1, zIndex: 30 },
  { scale: 0.93, y: -28, opacity: 0.7, zIndex: 20 },
  { scale: 0.86, y: -52, opacity: 0.4, zIndex: 10 },
];

const LessonCards = () => {
  return (
    <div className="absolute top-20 -left-1 flex items-center justify-center w-full">
      {[...lessons].reverse().map((lesson, i) => {
        const realIndex = lessons.length - 1 - i;
        const config = stackConfig[realIndex];

        return (
          <div
            key={lesson.id}
            className="absolute w-56 rounded-2xl px-5 py-4 flex flex-col gap-2"
            style={{
              backgroundColor:
                realIndex === 0
                  ? "#F26828"
                  : realIndex === 1
                    ? "#F5843E"
                    : "#F8A060",
              zIndex: config.zIndex,
              transform: `translateY(${config.y}px) scale(${config.scale})`,
              opacity: config.opacity,
            }}
          >
            <div className="flex items-center gap-3">
              <FileVideo size={28} color="#f4f6f0" />
              <span className="text-[#f4f6f0] font-poppins font-bold text-sm">
                {lesson.title}
              </span>
            </div>
            <div className="flex items-center gap-4 pl-1">
              <span className="text-[#f4f6f0] font-manrope text-sm">
                {lesson.duration}
              </span>
              <button
                className="px-4 py-1 rounded-full text-xs font-bold text-impact-blue"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #cccccc)",
                }}
              >
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LessonCards;
