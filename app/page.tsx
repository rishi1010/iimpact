import Bento from "./hero_sections/bento";
import Courses from "./hero_sections/courses";
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
    </div>
  );
}
