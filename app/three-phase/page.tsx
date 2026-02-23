import React from "react";
import Footer from "../components/footer";
import Hero from "./three-phase-sections/hero";
import Testimonial from "./three-phase-sections/testi";
import Phase1 from "./three-phase-sections/phase-1";
import Phase2 from "./three-phase-sections/phase-2";
import Phase3 from "./three-phase-sections/phase-3";
import DDay from "./three-phase-sections/d-day";
import ContactCta from "./three-phase-sections/contact-cta";

const ThreePhase = () => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <DDay />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default ThreePhase;
