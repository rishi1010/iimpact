"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { WhatsAppCommunityPopup } from "./popup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "3-Phases", href: "/three-phase" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  const resourceLinks = [
    { label: "PYQs", href: "/pyqs" },
    { label: "Blogs", href: "/blogs" },
    { label: "Free Community", href: null }, // opens popup
  ];

  return (
    <>
      <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
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

            {/* Free Resources dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-impact-blue font-bold hover:underline decoration-impact-orange flex items-center gap-1 outline-none">
                  Free Resources
                  <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-white/80 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-1 min-w-36"
              >
                <DropdownMenuItem asChild>
                  <a
                    href="/pyqs"
                    className="text-impact-blue font-bold cursor-pointer rounded-lg px-3 py-2 hover:bg-white/50 focus:bg-white/50"
                  >
                    PYQs
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/blogs"
                    className="text-impact-blue font-bold cursor-pointer rounded-lg px-3 py-2 hover:bg-white/50 focus:bg-white/50"
                  >
                    Blogs
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSheetOpen(true)}
                  className="text-impact-blue font-bold cursor-pointer rounded-lg px-3 py-2 hover:bg-white/50 focus:bg-white/50"
                >
                  Free Community
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() =>
                window.open("https://www.learn.iimpact.mba", "_blank")
              }
              className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
            >
              Student Portal
            </button>
          </div>

          {/* Hamburger */}
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

            {/* Mobile free resources — inline expand */}
            <button
              onClick={() => setResourcesOpen((o) => !o)}
              className="text-impact-blue font-bold hover:underline decoration-[#F26828] flex items-center gap-1"
            >
              Free Resources
              <ChevronDown
                className={`h-3.5 w-3.5 mt-0.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {resourcesOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l border-impact-orange/30">
                <a
                  href="/pyqs"
                  onClick={() => setIsOpen(false)}
                  className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
                >
                  PYQs
                </a>
                <a
                  href="/blogs"
                  onClick={() => setIsOpen(false)}
                  className="text-impact-blue font-bold hover:underline decoration-[#F26828]"
                >
                  Blogs
                </a>
                <button
                  onClick={() => {
                    setSheetOpen(true);
                    setIsOpen(false);
                  }}
                  className="text-impact-blue font-bold hover:underline decoration-[#F26828] text-left"
                >
                  Free Community
                </button>
              </div>
            )}

            <button
              onClick={() =>
                window.open("https://www.learn.iimpact.mba", "_blank")
              }
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
