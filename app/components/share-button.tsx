"use client";

import { IoMdShare } from "react-icons/io";

const ShareButton = ({ title }: { title: string }) => {
  const handleShare = () => {
    navigator.share?.({ title, url: window.location.href });
  };

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-6 left-6 size-12 flex items-center justify-center bg-neutral-400 rounded-full shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
      aria-label="Share"
    >
      <IoMdShare className="text-white text-xl" />
    </button>
  );
};

export default ShareButton;
