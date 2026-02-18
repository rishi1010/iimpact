import Navbar from "./components/navbar";
import Hero from "./hero_sections/hero";
import LogoPage from "./hero_sections/logoPage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <LogoPage />
    </div>
  );
}
