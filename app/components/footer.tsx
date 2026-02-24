import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiYoutube } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

export interface Sections {
  label: string;
  href: string;
}

interface FooterProps {
  section: Sections[];
}

const sections: Sections[] = [
  { label: "Features", href: "#bento" },
  { label: "Metrics", href: "#metrics" },
  { label: "Testimonials", href: "#logo" },
  { label: "Our Team", href: "#teams" },
  { label: "Courses", href: "#courses" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact-cta" },
];

const pages = [
  { label: "3 Phase System", href: "/three-phase" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const linkClass =
  "text-impact-blue font-sans text-sm hover:underline decoration-impact-orange underline-offset-4 transition-all duration-150";

const Footer: React.FC<FooterProps> = ({ section }) => {
  return (
    <footer className="relative bg-[#f6f4f0] pt-20 pb-0 px-12 overflow-hidden">
      {/* Main content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 pb-16">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-4 max-w-xs">
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
        </div>

        {/* On this page */}
        <div className="flex flex-col gap-3">
          <p className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold">
            On this page
          </p>
          {section.map((s) => (
            <a key={s.href} href={s.href} className={linkClass}>
              {s.label}
            </a>
          ))}
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <p className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold">
            Pages
          </p>
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className={linkClass}>
              {p.label}
            </Link>
          ))}
        </div>

        {/* Contact blurb */}
        <div className="flex flex-col gap-3 max-w-xs">
          <p className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-semibold">
            Get in touch
          </p>
          <p className="text-neutral-500 font-sans text-sm leading-relaxed">
            Have questions? We're always here to help you find the right course
            for your CAT journey.
          </p>
          <a
            href="#contact-cta"
            className="mt-1 inline-block bg-impact-orange text-white text-sm font-bold font-sans px-5 py-2.5 rounded-full w-fit hover:bg-orange-500 transition-colors duration-200"
          >
            Talk to us →
          </a>

          <div className="flex w-full items-center justify-start mt-4 text-impact-orange/70 cursor-pointer gap-5">
            <Link href="/placeholder">
              <Mail size={24} />
            </Link>
            <Link href="/placeholder">
              <FaLinkedinIn size={24} />
            </Link>
            <Link href="/placeholder">
              <FiInstagram size={24} />
            </Link>
            <Link href="/placeholder">
              <FiYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-neutral-300 py-4 flex items-center justify-between">
        <p className="text-neutral-400 font-sans text-xs">
          © {new Date().getFullYear()} IIMPact. All rights reserved.
        </p>
        <p className="text-neutral-400 font-sans text-xs">
          Built By Toppers, Designed By Apurv.
        </p>
      </div>

      {/* Giant watermark logo — bottom half clipped */}
      <div className="flex justify-center -mb-20 pointer-events-none select-none">
        <Image
          src="/iimpact_logo.png"
          alt=""
          width={160}
          height={160}
          className="size-72 object-contain opacity-90"
        />
      </div>
    </footer>
  );
};

export default Footer;
