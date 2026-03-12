"use client";

import { useState } from "react";
import { SectionLabel } from "./section-components";

const seedReflections = [
  "The Berlin Conference is one of the most violent acts of bureaucracy in history.",
  "I never knew Bai Bureh's name until today. Now I won't forget it.",
  "A mother hiding her daughter in the forest, asking her to remember the stories — that broke me.",
  "History is not the past. It is the story we choose to keep telling.",
];

export function ReflectionSection() {
  const [reflections, setReflections] = useState<string[]>(seedReflections);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setReflections([inputValue.trim(), ...reflections]);
    setInputValue("");
  };

  return (
    <section
      id="reflection"
      className="py-32 text-center"
      style={{
        background: "linear-gradient(135deg, var(--deep) 0%, rgba(30, 18, 8, 0.8) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-8">
        <SectionLabel>Your Voice</SectionLabel>
        <h2
          className="mx-auto mb-8 text-center text-[clamp(1.5rem,3.5vw,2.8rem)] leading-snug"
          style={{
            fontFamily: "var(--font-cinzel-decorative), serif",
            color: "var(--gold-light)",
          }}
        >
          What Will You Remember?
        </h2>
        <p
          className="mx-auto mb-14 max-w-[650px] text-center text-lg italic leading-8 opacity-80"
          style={{ color: "var(--cream)" }}
        >
          History lives when people choose to carry it forward. You have walked
          through Sierra Leone&apos;s story of resistance. What stays with you? What
          do you want to say?
        </p>

      <div className="mx-auto max-w-[600px]">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write your reflection here — a sentence, a feeling, a question..."
          className="w-full resize-y px-6 py-5 text-lg italic outline-none transition-colors duration-300 focus:border-[var(--gold-dark)]"
          style={{
            background: "rgba(201, 168, 76, 0.04)",
            border: "1px solid rgba(201, 168, 76, 0.2)",
            fontFamily: "var(--font-cormorant), serif",
            color: "var(--cream)",
            minHeight: "100px",
          }}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 cursor-pointer px-10 py-4 text-[0.6rem] uppercase tracking-[0.4em] transition-all duration-300 hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.08)]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold)",
            background: "transparent",
            border: "1px solid var(--gold-dark)",
          }}
        >
          Leave Your Mark
        </button>
      </div>

      {/* Reflections wall */}
      <div className="mx-auto mt-12 grid max-h-[300px] max-w-[680px] grid-cols-1 gap-4 overflow-y-auto">
        {reflections.map((reflection, index) => (
          <div
            key={index}
            className="px-6 py-4 text-left text-[0.95rem] italic leading-relaxed opacity-80"
            style={{
              background: "rgba(201, 168, 76, 0.04)",
              borderLeft: "2px solid var(--gold-dark)",
              color: "var(--cream)",
              animation: index === 0 ? "fade-up 0.6s ease forwards" : undefined,
            }}
          >
            {reflection}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
