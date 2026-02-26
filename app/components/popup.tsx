"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "radix-ui";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/919969195741?text=I%20am%20interested%20in%20knowing%20more%20about%20IIMPact's%20MBA%20Courses";

export function WhatsAppCommunityPopup() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // User has scrolled to this section — start the 3–4s timer
          const delay = 2000 + Math.random() * 1000;
          timer = setTimeout(() => setOpen(true), delay);
          // Stop observing once triggered so it only fires once
          observer.disconnect();
        }
      },
      { threshold: 0.3 }, // fires when 30% of the section is visible
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    // This wrapper div is what we observe — it should sit inside LogoPage
    <div ref={sectionRef}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="bg-[#f6f4f0] font-manrope border-t border-neutral-200 rounded-t-2xl px-0 pb-0 data-[side=bottom]:max-h-[90vh] sm:data-[side=bottom]:max-h-[60vh]"
        >
          {/* Required by Radix Dialog for screen reader accessibility */}
          <VisuallyHidden.Root>
            <SheetHeader>
              <SheetTitle>
                Join IIMPact&apos;s Free WhatsApp Community
              </SheetTitle>
            </SheetHeader>
          </VisuallyHidden.Root>

          {/* Inner layout */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 px-6 sm:px-10 pt-2 pb-8 max-w-4xl mx-auto w-full">
            {/* Left: Copy */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                Free · No catch
              </span>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-800 leading-tight tracking-tight">
                Free CAT Guidance —{" "}
                <span className="text-impact-orange"> on WhatsApp.</span>
              </h2>

              {/* Body */}
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                Join{" "}
                <strong className="text-neutral-700">
                  thousands of serious CAT aspirants
                </strong>{" "}
                in IIMPact&apos;s exclusive free community. Get daily prep
                resources, smart strategies, and live guidance from 100
                percentilers - delivered directly to your phone.
              </p>

              {/* Perks */}
              <ul className="flex flex-col gap-2 text-sm text-neutral-600">
                {[
                  "Daily comprehensive practice tests",
                  "600+ CAT level questions",
                  "Daily vocab & concept boosters",
                  "Quant techniques & shortcuts",
                  "Live doubt-solving",
                  "Weekly AMA sessions",
                ].map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <BadgeCheck className="text-impact-blue" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-impact-orange hover:bg-orange-500 text-white font-bold font-manrope rounded-full px-7 py-5 text-sm w-full sm:w-auto transition-colors duration-200">
                    Join the Community →
                  </Button>
                </a>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="text-neutral-400 hover:text-neutral-600 font-manrope text-sm rounded-full px-7 py-5 w-full sm:w-auto"
                  >
                    Maybe later
                  </Button>
                </SheetClose>
              </div>
            </div>

            {/* Right: QR Code (desktop only) */}
            <div className="hidden sm:flex flex-col items-center justify-center gap-3 shrink-0">
              {/* Replace this div with <Image src="/qr-whatsapp.png" width={160} height={160} alt="WhatsApp QR" /> */}
              <div className=" relative size-40 p-4 rounded-2xl bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-400 text-xs text-center px-3 leading-relaxed">
                <Image src={"/qr-code.svg"} alt="qr code for the link" fill />
              </div>
              <p className="text-neutral-400 text-xs text-center leading-snug max-w-[140px]">
                Scan with your phone to join instantly
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
