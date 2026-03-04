"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppCommunityPopup } from "./popup"; // adjust import path
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const router = useRouter();

  const links = [
    { label: "Home", href: "/" },
    { label: "3-Phases", href: "/three-phase" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
        {/* Main row */}
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
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
                className="text-impact-blue font-bold hover:underline decoration-impact-orange"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setSheetOpen(true)}
              className="text-impact-blue font-bold hover:underline decoration-impact-orange"
            >
              Free Resources
            </button>
            <button
              onClick={() => {
                window.open("https://www.learn.iimpact.mba", "_blank");
              }}
              className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
            >
              Student Portal
            </button>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden text-impact-blue"
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
                className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setSheetOpen(true);
                setIsOpen(false);
              }}
              className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
            >
              Free Resources
            </button>
            <button
              onClick={() => {
                window.open("https://www.learn.iimpact.mba", "_blank");
              }}
              className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
            >
              Student Portal
            </button>
          </div>
        )}
      </nav>

      <WhatsAppCommunityPopup open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  );
};

export default Navbar;
