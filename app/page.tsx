import Footer from "./components/footer";
import Bento from "./hero_sections/bento";
import ContactCta from "./hero_sections/contact-cta";
import Courses from "./hero_sections/courses";
import Faqs from "./hero_sections/faqs";
import Hero from "./hero_sections/hero";
import LogoPage from "./hero_sections/logoPage";
import MetricPage from "./hero_sections/metricBento";
import Teams from "./hero_sections/teams";
import type { Sections } from "./components/footer";

export default function Home() {
  const sections: Sections[] = [
    { label: "Features", href: "#bento" },
    { label: "Metrics", href: "#metrics" },
    { label: "Testimonials", href: "#logo" },
    { label: "Our Team", href: "#teams" },
    { label: "Courses", href: "#courses" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact Us", href: "#contact-cta" },
  ];
  return (
    <div>
      <Hero />
      <LogoPage />
      <Bento />
      <Teams />
      <MetricPage />
      <Courses />
      <Faqs />
      <ContactCta />
      <Footer section={sections} />
    </div>
  );
}
