"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-0.5 transition-[width] duration-100"
      style={{
        width: `${progress}%`,
        background:
          "linear-gradient(to right, var(--earth), var(--gold), var(--gold-light))",
        boxShadow: "0 0 8px rgba(201, 168, 76, 0.5)",
      }}
    />
  );
}
