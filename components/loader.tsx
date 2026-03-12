"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-out ${
        isHidden ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
      style={{ background: "var(--black)" }}
    >
      <div
        className="relative mb-10 flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          border: "1px solid var(--gold-dark)",
          animation: "spin-slow 8s linear infinite",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            inset: "-8px",
            border: "1px solid transparent",
            borderTopColor: "var(--gold)",
            animation: "spin-fast 1.5s linear infinite",
          }}
        />
        <span
          className="text-3xl"
          style={{ animation: "pulse-fade 1.5s ease-in-out infinite" }}
        >
          🦁
        </span>
      </div>
      <div
        className="text-[0.6rem] uppercase tracking-[0.6em]"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          color: "var(--gold-dark)",
          animation: "pulse-fade 2s ease-in-out infinite",
        }}
      >
        Sierra Leone · Echoes of Resistance
      </div>
      <div
        className="mt-8 h-px w-[200px] overflow-hidden"
        style={{ background: "rgba(201, 168, 76, 0.15)" }}
      >
        <div
          className="h-full w-0"
          style={{
            background: "var(--gold)",
            animation: "load-fill 2s ease-out 0.3s forwards",
          }}
        />
      </div>
    </div>
  );
}
