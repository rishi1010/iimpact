import Image from "next/image";

const phases = [
  {
    blue: "Concepts",
    orange: "(How To Solve)",
  },
  {
    blue: "Strategy",
    orange: "(What To Solve)",
  },
  {
    blue: "Performance",
    orange: "(How To Score)",
  },
];

export default function ThreePhaseCard() {
  return (
    <div className="row-span-8 col-span-2 bento-card p-4 flex items-center justify-between flex-col gap-2">
      <h2 className="font-poppins font-bold text-lg leading-tight">
        <span className="text-impact-blue">Structured</span>{" "}
        <span className="text-impact-orange">3-Phase</span>{" "}
        <span className="text-impact-blue">Approach</span>
      </h2>

      <div className="flex items-center justify-between gap-4">
        <Image
          src={"/three-phase.svg"}
          alt="three phase line with numbers 1,2,3"
          width={40}
          height={431}
        />

        <div className="flex h-full justify-between flex-col">
          {phases.map((phase, i) => (
            <h1
              key={i}
              className="font-poppins font-bold text-lg leading-tight"
            >
              <span className="text-impact-blue">{phase.blue}</span>{" "}
              <div className="text-impact-orange">{phase.orange}</div>
            </h1>
          ))}
        </div>
      </div>

      <h1 className="font-poppins text-impact-blue font-bold text-xl self-start leading-tight">
        Day 1 to{" "}
        <span className="text-impact-orange italic font-playfair">D-Day</span>
      </h1>
    </div>
  );
}
