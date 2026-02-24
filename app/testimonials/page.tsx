import React from "react";
import Hero from "./testi-sections/hero";
import Footer from "../components/footer";
import TestiOne from "./testi-sections/testi-section";
import TestiBento from "./testi-sections/test-bento";
import ContactCta from "../three-phase/three-phase-sections/contact-cta";

const TestimonialPage = () => {
  return (
    <div>
      <Hero />
      <TestiOne />
      <TestiBento />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
