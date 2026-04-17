"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 md:top-8 right-8 z-50">
      <div
        className="size-10 rounded-full flex items-center justify-center shadow-md"
        style={{
          background: `conic-gradient(#222958 ${progress}%, #f6f4f0 ${progress}%)`,
        }}
      >
        <div className="size-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-[10px] font-semibold text-impact-orange select-none">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
