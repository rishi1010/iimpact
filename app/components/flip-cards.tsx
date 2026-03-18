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
  onClick: () => void;
  zIndex: number;
}

export interface SlotDeckProps {
  year?: string;
  colorStop1?: string;
  colorStop2?: string;
  onSelect?: (slot: "slot-1" | "slot-3") => void;
  slug?: string;
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

  const handleClick = () => {
    if (revealed) {
      router.push(`/pyqs/${slug}_slot_2`);
    } else {
      onClick();
    }
  };

  return (
    <div
      className="absolute inset-0 cursor-pointer"
      style={{ perspective: 1000, zIndex: 3 }}
      onClick={handleClick}
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
          <span className="font-mono text-[8px] text-white/30 tracking-[0.25em] uppercase">
            CAT PYQ
          </span>
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
  onClick,
  zIndex,
}: SideCardProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-1"
      style={{
        background: `linear-gradient(160deg, ${colorStop2}cc 0%, ${colorStop1}cc 100%)`,
        boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
        cursor: isOut ? "pointer" : "default",
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
      onClick={isOut ? onClick : undefined}
    >
      <span className="font-mono text-[8px] text-white/40 tracking-[0.35em] uppercase mb-1">
        {year}
      </span>
      <span className="font-serif text-[28px] font-bold text-white/95 tracking-tight">
        {label}
      </span>
      <div className="w-6 h-px bg-white/20 my-1.5" />
      <span className="font-mono text-[8px] text-white/30 tracking-[0.25em] uppercase">
        CAT PYQ
      </span>
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

  useEffect(() => {
    if (!revealed) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setRevealed(false);
      }
    };

    // Delay so the reveal click itself doesn't immediately re-close
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
    /*
     * The outer div is always exactly CARD_W × CARD_H and never moves.
     * overflow: visible lets the side cards fan out without disturbing layout.
     * The invisible hit-area div (pointer-events: none on children, none on
     * the expanded sentinel) just gives containerRef the full fanned width
     * so outside-click detection is accurate.
     */
    <div
      ref={containerRef}
      style={{
        width: CARD_W,
        height: CARD_H,
        position: "relative",
        // Extend the hit-testable area to cover all 3 cards when revealed
        // by using an inset negative padding trick via outline (no layout impact)
      }}
    >
      {/* Transparent sentinel that stretches to cover the full fanned area */}
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

      {/* Side cards use absolute + overflow:visible; x animation moves them */}
      <SideCard
        label="Slot 1"
        year={year}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        targetX={-FAN_OFFSET}
        isOut={revealed}
        zIndex={1}
        onClick={() => {
          onSelect?.("slot-1");
          router.push(`/pyqs/${derivedSlug}_slot_1`);
        }}
      />

      <SideCard
        label="Slot 3"
        year={year}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        targetX={FAN_OFFSET}
        isOut={revealed}
        zIndex={1}
        onClick={() => {
          onSelect?.("slot-3");
          router.push(`/pyqs/${derivedSlug}_slot_3`);
        }}
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
