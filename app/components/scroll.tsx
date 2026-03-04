"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`
        hidden md:flex
        fixed bottom-8 right-8 z-50
        items-center justify-center
        w-10 h-10 rounded-full
        bg-impact-blue text-white shadow-lg
        transition-all duration-300
        hover:bg-impact-orange hover:scale-110 active:scale-95
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
