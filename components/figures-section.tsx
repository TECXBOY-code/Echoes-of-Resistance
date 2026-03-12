"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionLabel, SectionTitle } from "./section-components";

interface Figure {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const figures: Figure[] = [
  {
    name: "Bai Bureh",
    role: "Temne Paramount Chief · Warrior · c.1840 – 1908",
    description:
      "Led the Hut Tax War of 1898 — the most organised armed resistance to British rule in Sierra Leone's history. His guerrilla tactics confounded British forces for ten months. Exiled to the Gold Coast, returned in 1905. He never surrendered his identity, and died a chief in his homeland.",
    imageSrc: "/images/bai-bureh.jpg",
  },
  {
    name: "Madam Yoko",
    role: "Mende Queen · Diplomat · c.1849 – 1906",
    description:
      "One of the most powerful women in 19th century West Africa. She became Paramount Chief of the Kpa Mende Confederacy — a vast alliance of chiefdoms. Where war would have brought destruction, she used diplomacy of extraordinary intelligence to protect her people from colonial overreach.",
    imageSrc: "/images/madam-yoko.jpg",
  },
  {
    name: "The Krio Intellectuals",
    role: "Writers · Lawyers · Journalists · Freetown",
    description:
      "Educated in British schools yet fiercely critical of colonial rule, Krio intellectuals wielded newspapers, petitions, and letters to contest British authority. They laid the groundwork for independence movements across West Africa — and remain largely uncredited in mainstream historical accounts.",
    imageSrc: "/images/krio-intellectuals.jpg",
  },
];

function FigureCard({ figure, index }: { figure: Figure; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        background: "var(--ash)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src={figure.imageSrc}
          alt={figure.name}
          fill
          className="object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
          style={{
            filter: "sepia(0.45) brightness(0.75) contrast(1.15)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLImageElement).style.filter =
              "sepia(0.2) brightness(0.9) contrast(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLImageElement).style.filter =
              "sepia(0.45) brightness(0.75) contrast(1.15)";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--ash) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="relative px-8 pb-10 pt-7">
        <div
          className="absolute left-8 right-8 top-0 h-0.5"
          style={{
            background: "linear-gradient(to right, var(--gold), transparent)",
          }}
        />
        <div
          className="mb-1 text-base tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold)",
          }}
        >
          {figure.name}
        </div>
        <div
          className="mb-5 text-[0.52rem] uppercase tracking-[0.3em] opacity-65"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--earth-pale)",
          }}
        >
          {figure.role}
        </div>
        <p
          className="text-[0.9rem] font-light leading-relaxed opacity-70"
          style={{ color: "var(--cream)" }}
        >
          {figure.description}
        </p>
      </div>
    </div>
  );
}

export function FiguresSection() {
  return (
    <section id="figures-section" style={{ background: "var(--deep)" }}>
      <div className="mx-auto max-w-[1100px] px-8 py-28">
        <div className="text-center">
          <SectionLabel>The Resisters</SectionLabel>
          <SectionTitle>Faces the History Books Forgot</SectionTitle>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[3px] md:grid-cols-3">
          {figures.map((figure, index) => (
            <FigureCard key={index} figure={figure} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
