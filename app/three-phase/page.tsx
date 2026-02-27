import React from "react";
import Footer from "../components/footer";
import Hero from "./three-phase-sections/hero";
import Testimonial from "./three-phase-sections/testi";
import Phase1 from "./three-phase-sections/phase-1";
import Phase2 from "./three-phase-sections/phase-2";
import Phase3 from "./three-phase-sections/phase-3";
import DDay from "./three-phase-sections/d-day";
import ContactCta from "./three-phase-sections/contact-cta";
import type { Sections } from "../components/footer";
import MobileHero from "./three-phase-sections/mobile-hero";
import MPhase1 from "./three-phase-sections/mobile-phase1";
import MPhase2 from "./three-phase-sections/mobile-phase2";
import MPhase3 from "./three-phase-sections/mobile-phase3";

const ThreePhase = () => {
  const sections: Sections[] = [
    { label: "Testimonial", href: "#testimonial" },
    { label: "Phase-1", href: "#phase1" },
    { label: "Phase-2", href: "#phase2" },
    { label: "Phase-3", href: "#phase3" },
    { label: "D-Day", href: "#dday" },
    { label: "Contact Us", href: "#ContactCta" },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="hidden lg:block">
        <Hero />
      </div>
      <div className="lg:hidden">
        <MobileHero />
      </div>
      <Testimonial />
      <div className="hidden lg:block">
        <Phase1 />
      </div>
      <div className="lg:hidden">
        <MPhase1 />
      </div>
      <div className="hidden lg:block">
        <Phase2 />
      </div>
      <div className="lg:hidden">
        <MPhase2 />
      </div>
      <div className="hidden lg:block">
        <Phase3 />
      </div>
      <div className="lg:hidden">
        <MPhase3 />
      </div>
      <div className="hidden lg:block">
        <DDay />
      </div>
      <ContactCta />
      <Footer section={sections} />
    </div>
  );
};

export default ThreePhase;
