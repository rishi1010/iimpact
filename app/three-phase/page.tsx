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
    <div>
      <Hero />
      <Testimonial />
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <DDay />
      <ContactCta />
      <Footer section={sections} />
    </div>
  );
};

export default ThreePhase;
