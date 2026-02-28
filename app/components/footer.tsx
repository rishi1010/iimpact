"use client";

import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, stagger, Variants } from "motion/react";
import { useRef } from "react";

export interface Sections {
  label: string;
  href: string;
}

interface FooterProps {
  section: Sections[];
}

const pages = [
  { label: "Main Page", href: "/" },
  { label: "3 Phase System", href: "/three-phase" },
  { label: "Courses", href: "https://www.iimpact.mba/learn" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const linkClass =
  "text-impact-blue font-sans text-sm hover:underline decoration-impact-orange underline-offset-4 transition-all duration-150";

// ─── Shared child item variant ────────────────────────────────────────────────
// No delay here — the parent's staggerChildren handles timing automatically
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// Social icon variant — adds a subtle scale pop
const iconVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.75 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const Footer: React.FC<FooterProps> = ({ section }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const animate = inView ? "visible" : "hidden";

  return (
    <footer
      ref={ref}
      className="relative bg-[#f6f4f0] pt-20 pb-0 px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 pb-16">
        {/* ── 1. Logo + tagline ─────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-4 max-w-xs"
          initial="hidden"
          animate={animate}
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0,
              },
            },
          }}
        >
          <Image
            src="/main-logo.png"
            alt="IIMPact Logo"
            width={160}
            height={48}
            className="object-contain object-left"
          />
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            India's MBA dream, redefined. Learn from 100%ilers and crack CAT
            with a proven 3-phase system.
          </p>
        </motion.div>

        {/* ── 2. "On this page" — heading + each link staggers in one by one ── */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate={animate}
          variants={{
            hidden: {},
            visible: {
              transition: {
                // stagger() from motion/react: each child 0.09s apart, starting after 0.3s
                delayChildren: stagger(0.09, { startDelay: 0.3 }),
              },
            },
          }}
        >
          <motion.p
            className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold"
            variants={itemVariants}
          >
            On this page
          </motion.p>
          {section.map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              className={linkClass}
              variants={itemVariants}
            >
              {s.label}
            </motion.a>
          ))}
        </motion.div>

        {/* ── 3. "Pages" — same pattern, offset startDelay ─────────────────── */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate={animate}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: stagger(0.09, { startDelay: 0.55 }),
              },
            },
          }}
        >
          <motion.p
            className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold"
            variants={itemVariants}
          >
            Pages
          </motion.p>
          {pages.map((p) => (
            <motion.div key={p.href} variants={itemVariants}>
              <Link href={p.href} className={linkClass}>
                {p.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── 4. Contact block ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 max-w-xs">
          {/* 4a. Label + body text + button stagger in */}
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate={animate}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: stagger(0.12, { startDelay: 0.85 }),
                },
              },
            }}
          >
            <motion.p
              className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold"
              variants={itemVariants}
            >
              Get in touch
            </motion.p>
            <motion.p
              className="text-neutral-500 font-sans text-sm leading-relaxed"
              variants={itemVariants}
            >
              Have questions? We're always here to help you find the right
              course for your CAT journey.
            </motion.p>
            <motion.a
              href="#contact-cta"
              className="mt-1 inline-block bg-impact-orange text-white text-sm font-bold font-sans px-5 py-2.5 rounded-full w-fit hover:bg-orange-500 transition-colors duration-200"
              variants={itemVariants}
            >
              Talk to us →
            </motion.a>
          </motion.div>

          {/* 4b. Social icons — each pops in with stagger after button */}
          <motion.div
            className="flex w-full items-center justify-start mt-4 text-impact-orange/70 cursor-pointer gap-5"
            initial="hidden"
            animate={animate}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: stagger(0.1, { startDelay: 1.25 }),
                },
              },
            }}
          >
            {[
              {
                icon: <Mail size={24} />,
                href: "mailto:iimpact.mba@gmail.com",
                label: "Email Us",
              },
              {
                icon: <FaLinkedinIn size={24} />,
                href: "https://www.linkedin.com/company/mba-iimpact/",
                label: "LinkedIn",
              },
              {
                icon: <FiInstagram size={24} />,
                href: "https://www.instagram.com/iimpact.mba/",
                label: "Instagram",
              },
              {
                icon: <FiYoutube size={24} />,
                href: "https://www.youtube.com/@iimpactmba",
                label: "Youtube",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={iconVariants}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── 5. Divider — sweeps in from left ─────────────────────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto border-t border-neutral-300"
        initial="hidden"
        animate={animate}
        style={{ originX: 0 }}
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.55,
            },
          },
        }}
      />

      {/* ── 6. Bottom bar — copyright and credit stagger in ───────────────────── */}
      <motion.div
        className="max-w-6xl mx-auto py-4 flex items-center justify-between"
        initial="hidden"
        animate={animate}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: stagger(0.15, { startDelay: 1.7 }),
            },
          },
        }}
      >
        <motion.p
          className="text-neutral-400 font-sans text-xs"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} IIMPact. All rights reserved.
        </motion.p>
        <motion.p
          className="text-neutral-400 font-sans text-xs"
          variants={itemVariants}
        >
          Built By Toppers, Designed By{" "}
          <a
            className="underline underline-offset-2"
            href="mailto:apurvwork13@gmail.com"
          >
            Apurv
          </a>
          .
        </motion.p>
      </motion.div>

      {/* ── 7. Watermark logo — rises up last ────────────────────────────────── */}
      <motion.div
        className="flex justify-center -mb-20 pointer-events-none select-none"
        initial="hidden"
        animate={animate}
        variants={{
          hidden: { opacity: 0, y: 48 },
          visible: {
            opacity: 0.9,
            y: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.9 },
          },
        }}
      >
        <Image
          src="/iimpact_logo.png"
          alt=""
          width={160}
          height={160}
          className="size-72 object-contain"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
