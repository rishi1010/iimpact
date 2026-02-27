import React from "react";
import Hero from "./testi-sections/hero";
import Footer from "../components/footer";
import TestiOne from "./testi-sections/testi-section";
import TestiBento from "./testi-sections/test-bento";
import ContactCta from "../three-phase/three-phase-sections/contact-cta";
import type { Sections } from "../components/footer";

const TestimonialPage = () => {
  const sections: Sections[] = [
    { label: "Testimonials", href: "#testi" },
    { label: "Metrics", href: "#metrics" },
  ];
  return (
    <div>
      <Hero />
      <TestiOne />
      {/* <TestiBento /> */}
      <ContactCta />
      <Footer section={sections} />
    </div>
  );
};

export default TestimonialPage;
