"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { SlotDeck } from "../components/flip-cards";
import Navbar from "../components/navbar";
import Image from "next/image";

const sections = [
  {
    id: "varc",
    label: "VARC",
    title: "VARC",
    accent: "#E8D5B7",
    border: "border-[#E8D5B7]/20",
    textAccent: "text-[#E8D5B7]",
    coverLink: "varc_cover.png",
  },
  {
    id: "dilr",
    label: "DILR",
    title: "DILR",
    accent: "#B7D5E8",
    border: "border-[#B7D5E8]/20",
    textAccent: "text-[#B7D5E8]",
    coverLink: "dilr_cover.png",
  },
  {
    id: "qa",
    label: "QA",
    title: "QA",
    accent: "#C4E8B7",
    border: "border-[#C4E8B7]/20",
    textAccent: "text-[#C4E8B7]",
    coverLink: "qa_cover.png",
  },
];

type SlotCard = {
  year: string;
  slotCount: 2 | 3; // NEW
};

const sectionCards: Record<string, SlotCard[]> = {
  varc: [
    { year: "2025", slotCount: 3 },
    { year: "2024", slotCount: 3 },
    { year: "2023", slotCount: 3 },
    { year: "2022", slotCount: 3 },
    { year: "2021", slotCount: 3 },
    { year: "2020", slotCount: 3 },
    { year: "2019", slotCount: 2 },
    { year: "2018", slotCount: 2 },
    { year: "2017", slotCount: 2 },
  ],
  dilr: [
    { year: "2025", slotCount: 3 },
    { year: "2024", slotCount: 3 },
    { year: "2023", slotCount: 3 },
    { year: "2022", slotCount: 3 },
    { year: "2021", slotCount: 3 },
    { year: "2020", slotCount: 3 },
    { year: "2019", slotCount: 2 },
    { year: "2018", slotCount: 2 },
    { year: "2017", slotCount: 2 },
  ],
  qa: [
    { year: "2025", slotCount: 3 },
    { year: "2024", slotCount: 3 },
    { year: "2023", slotCount: 3 },
    { year: "2022", slotCount: 3 },
    { year: "2021", slotCount: 3 },
    { year: "2020", slotCount: 3 },
    { year: "2019", slotCount: 2 },
    { year: "2018", slotCount: 2 },
    { year: "2017", slotCount: 2 },
  ],
};

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const selectedSection = sections.find((s) => s.id === selected);

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(() => setShowContent(true), 600);
  };

  const handleBack = () => {
    setShowContent(false);
    setIsCollapsing(true);
    setTimeout(() => {
      setSelected(null);
      setIsCollapsing(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-[#798AFC] to-impact-blue flex items-center justify-center overflow-hidden">
      {!selected && <Navbar />}

      {/* Collapsed: 3 sections */}
      <AnimatePresence>
        {!selected && !isCollapsing && (
          <motion.div
            key="sections"
            className="flex flex-col md:flex-row w-full h-auto md:h-screen pt-20 md:pt-0"
          >
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                className="flex-1 flex flex-col items-center justify-center cursor-pointer relative group py-10 md:py-0"
                style={{
                  borderBottom:
                    i < sections.length - 1
                      ? "1px solid rgba(255,255,255,0.25)"
                      : "none",
                }}
                // on md+ switch to borderRight
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleSelect(section.id)}
              >
                <motion.h2
                  className="font-spectral text-white text-4xl md:text-6xl mb-5 tracking-wide select-none"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.25, duration: 0.4 }}
                >
                  {section.label}
                </motion.h2>

                <motion.div
                  className="rounded-3xl relative w-48 h-64 md:w-82.5 md:h-99 bg-linear-to-b from-[#f5d6c0] to-[#f0c4a4] shadow-2xl"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: i * 0.1 + 0.35,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Image
                    src={`/pyq-assets/${section.coverLink}`}
                    alt="book cover"
                    fill
                    className="object-center"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded: selected section */}
      <AnimatePresence>
        {(selected || isCollapsing) && selectedSection && (
          <motion.div
            key="expanded"
            className={`fixed inset-0 bg-linear-to-b from-[#798AFC] to-impact-blue flex flex-col overflow-y-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Noise texture */}
            <div
              className="fixed inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 w-full max-w-8xl mx-auto px-10 py-10 flex flex-col min-h-screen">
              {/* Back button */}
              <AnimatePresence>
                {showContent && (
                  <motion.button
                    key="back"
                    onClick={handleBack}
                    className="flex items-center gap-2 mb-10 w-fit group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: selectedSection.accent }}
                    whileHover={{ x: -4 }}
                  >
                    <ArrowLeft
                      size={22}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    <span className="text-sm tracking-widest uppercase font-mono opacity-70 group-hover:opacity-100 transition-opacity">
                      Back
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Title */}
              <AnimatePresence>
                {showContent && (
                  <motion.h1
                    key="title"
                    className="text-6xl font-black tracking-tight mb-16 font-spectral"
                    style={{
                      color: selectedSection.accent,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {selectedSection.title}
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* 3x3 SlotDeck Grid */}
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    key="grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20  justify-items-center px-4 pb-10"
                  >
                    {(sectionCards[selectedSection.id] ?? []).map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{
                          delay: i * 0.06,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <SlotDeck
                          year={card.year}
                          slotCount={card.slotCount}
                          onSelect={(slot) =>
                            console.log(
                              `${selectedSection.id} ${card.year} ${slot}`,
                            )
                          }
                          slug={`${selectedSection.id}_${card.year}`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
