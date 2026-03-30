"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const CARD_W = 160;
const CARD_H = 220;
const FAN_OFFSET = CARD_W + 24;

interface CenterCardProps {
  year: string;
  colorStop1: string;
  colorStop2: string;
  isFlipped: boolean;
  onClick: () => void;
  slug: string;
  revealed: boolean;
}

interface SideCardProps {
  label: string;
  year: string;
  colorStop1: string;
  colorStop2: string;
  targetX: number;
  isOut: boolean;
  onNavigate: () => void;
  onMock: () => void;
  zIndex: number;
}

export interface SlotDeckProps {
  year?: string;
  colorStop1?: string;
  colorStop2?: string;
  onSelect?: (slot: "slot-1" | "slot-3") => void;
  slug?: string;
}

function CardButtons({
  onNavigate,
  onMock,
}: {
  onNavigate: () => void;
  onMock: () => void;
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full px-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate();
        }}
        className="w-full py-1.5 rounded-xl text-[10px] font-mono tracking-[0.2em] uppercase font-semibold bg-white/20 hover:bg-white/30 text-white/90 transition-colors"
      >
        Practice
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMock();
        }}
        className="w-full py-1.5 rounded-xl text-[10px] font-mono tracking-[0.2em] uppercase font-semibold bg-white/10 hover:bg-white/20 text-white/70 transition-colors border border-white/15"
      >
        Take as Mock
      </button>
    </div>
  );
}

function CenterCard({
  year,
  colorStop1,
  colorStop2,
  isFlipped,
  onClick,
  slug,
  revealed,
}: CenterCardProps) {
  const router = useRouter();

  // TODO: replace with real Slot 2 mock URL
  const MOCK_URL = "https://example.com/mock";

  const handleCardClick = () => {
    if (!revealed) onClick();
  };

  return (
    <div
      className="absolute inset-0 cursor-pointer"
      style={{ perspective: 1000, zIndex: 3 }}
      onClick={handleCardClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Front — Year */}
        <div
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-1.5 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            background: `linear-gradient(160deg, ${colorStop2} 0%, ${colorStop1} 100%)`,
            boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div className="absolute w-32 h-32 rounded-full border border-white/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-20 h-20 rounded-full border border-white/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="font-serif text-[38px] font-bold text-white/90 tracking-tight leading-none">
            {year}
          </span>
          <span className="font-mono text-[8px] text-white/35 tracking-[0.3em] uppercase">
            tap to reveal
          </span>
        </div>

        {/* Back — Slot 2 */}
        <div
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-1"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(160deg, ${colorStop2} 0%, ${colorStop1} 100%)`,
            boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
          }}
        >
          <span className="font-mono text-[8px] text-white/40 tracking-[0.35em] uppercase mb-1">
            {year}
          </span>
          <span className="font-serif text-[28px] font-bold text-white/95 tracking-tight">
            Slot 2
          </span>
          <div className="w-6 h-px bg-white/20 my-1.5" />
          <span className="font-mono text-[8px] text-white/30 tracking-[0.25em] uppercase mb-2">
            CAT PYQ
          </span>
          <CardButtons
            onNavigate={() => router.push(`/pyqs/${slug}_slot_2`)}
            onMock={() => window.open(MOCK_URL, "_blank")}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SideCard({
  label,
  year,
  colorStop1,
  colorStop2,
  targetX,
  isOut,
  onNavigate,
  onMock,
  zIndex,
}: SideCardProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-1"
      style={{
        background: `linear-gradient(160deg, ${colorStop2} 0%, ${colorStop1} 100%)`,
        boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
        cursor: isOut ? "default" : "default",
        zIndex,
      }}
      animate={{
        x: isOut ? targetX : 0,
        opacity: isOut ? 1 : 0,
        scale: isOut ? 1 : 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 22,
        delay: isOut ? 0.1 : 0,
      }}
      whileHover={isOut ? { y: -4, scale: 1.02 } : {}}
    >
      <span className="font-mono text-[8px] text-white/40 tracking-[0.35em] uppercase mb-1">
        {year}
      </span>
      <span className="font-serif text-[28px] font-bold text-white/95 tracking-tight">
        {label}
      </span>
      <div className="w-6 h-px bg-white/20 my-1.5" />
      <span className="font-mono text-[8px] text-white/30 tracking-[0.25em] uppercase mb-2">
        CAT PYQ
      </span>
      {isOut && <CardButtons onNavigate={onNavigate} onMock={onMock} />}
    </motion.div>
  );
}

export function SlotDeck({
  year = "2025",
  colorStop1 = "#F26828",
  colorStop2 = "#FFAC86",
  onSelect,
  slug,
}: SlotDeckProps) {
  const [revealed, setRevealed] = useState<boolean>(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // TODO: replace these with real mock URLs per slot
  const MOCK_URL_SLOT_1 = "https://example.com/mock";
  const MOCK_URL_SLOT_3 = "https://example.com/mock";

  useEffect(() => {
    if (!revealed) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setRevealed(false);
      }
    };

    const id = setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);

    return () => {
      clearTimeout(id);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [revealed]);

  const derivedSlug = slug ?? year;

  return (
    <div
      ref={containerRef}
      style={{
        width: CARD_W,
        height: CARD_H,
        position: "relative",
      }}
    >
      {revealed && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: -FAN_OFFSET,
            width: CARD_W + FAN_OFFSET * 2,
            height: CARD_H,
            pointerEvents: "none",
          }}
        />
      )}

      <SideCard
        label="Slot 1"
        year={year}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        targetX={-FAN_OFFSET}
        isOut={revealed}
        zIndex={1}
        onNavigate={() => {
          onSelect?.("slot-1");
          router.push(`/pyqs/${derivedSlug}_slot_1`);
        }}
        onMock={() => window.open(MOCK_URL_SLOT_1, "_blank")}
      />

      <SideCard
        label="Slot 3"
        year={year}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        targetX={FAN_OFFSET}
        isOut={revealed}
        zIndex={1}
        onNavigate={() => {
          onSelect?.("slot-3");
          router.push(`/pyqs/${derivedSlug}_slot_3`);
        }}
        onMock={() => window.open(MOCK_URL_SLOT_3, "_blank")}
      />

      <CenterCard
        year={year}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        isFlipped={revealed}
        onClick={() => setRevealed(true)}
        slug={derivedSlug}
        revealed={revealed}
      />
    </div>
  );
}
