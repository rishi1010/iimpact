import React from "react";

interface PhaseCardProps {
  title: string;
  points: string[];
}

const PhaseCard: React.FC<PhaseCardProps> = ({ title, points }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-manrope font-medium text-impact-blue text-3xl">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2  font-poppins text-neutral-800 text-base"
          >
            <span className="mt-1.5 size-1.5 rounded-full bg-neutral-800 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhaseCard;
