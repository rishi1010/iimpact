import Navbar from "./components/navbar";
import Bento from "./hero_sections/bento";
import Hero from "./hero_sections/hero";
import LogoPage from "./hero_sections/logoPage";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoPage />
      <Bento />
    </div>
  );
}
