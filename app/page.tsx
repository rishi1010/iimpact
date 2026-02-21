import Footer from "./components/footer";
import Bento from "./hero_sections/bento";
import ContactCta from "./hero_sections/contact-cta";
import Courses from "./hero_sections/courses";
import Faqs from "./hero_sections/faqs";
import Hero from "./hero_sections/hero";
import LogoPage from "./hero_sections/logoPage";
import MetricPage from "./hero_sections/metricBento";
import Teams from "./hero_sections/teams";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <LogoPage />
      <Bento />
      <Teams />
      <MetricPage />
      <Courses />
      <Faqs />
      <ContactCta />
      <Footer />
    </div>
  );
}
