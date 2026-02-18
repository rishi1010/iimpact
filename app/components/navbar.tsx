"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "3-Phases", href: "#3-phases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Courses", href: "#courses" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
      {/* Main row */}
      <div className="flex items-center justify-between px-10 py-4">
        <Link href="/">
          <Image
            src="/iimpact_logo.png"
            alt="iImpact Logo"
            width={25}
            height={42}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#222958] font-bold hover:underline decoration-[#F26828]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-[#222958]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-10 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#222958] font-bold hover:underline decoration-[#F26828]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
