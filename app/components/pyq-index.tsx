"use client";

import { useState } from "react";
import { IndexEntry } from "./pyq-types";

interface PyqIndexProps {
  entries: IndexEntry[];
}

const PyqIndex = ({ entries }: PyqIndexProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (anchorId: string) => {
    setActiveId(anchorId);
    const el = document.getElementById(anchorId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="sticky top-6 w-48 shrink-0 flex flex-col gap-1 self-start">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-impact-orange/60 mb-2 px-2">
        Index
      </p>

      {entries.map((entry) => {
        const isActive = activeId === entry.anchorId;
        const isSet = entry.label !== entry.questionRange; // sets have a distinct label

        return (
          <button
            key={entry.anchorId}
            onClick={() => handleClick(entry.anchorId)}
            className={`
              w-full text-left px-2 py-1.5 rounded transition-colors duration-150
              font-mono text-xs border-l-2
              ${
                isActive
                  ? "border-impact-blue text-impact-blue bg-impact-blue/5"
                  : "border-impact-orange/30 text-impact-orange hover:border-impact-orange hover:text-impact-orange/80"
              }
            `}
          >
            {isSet ? (
              <span className="flex flex-col gap-0.5">
                <span className="font-bold truncate">{entry.label}</span>
                <span
                  className={`text-[10px] ${isActive ? "text-impact-blue/60" : "text-impact-orange/50"}`}
                >
                  {entry.questionRange}
                </span>
              </span>
            ) : (
              <span className="font-bold">{entry.questionRange}</span>
            )}
          </button>
        );
      })}
    </aside>
  );
};

export default PyqIndex;
