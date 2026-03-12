"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel, SectionTitle, SectionIntro } from "./section-components";

interface LegacyItem {
  number: string;
  title: string;
  body: string;
}

const legacyItems: LegacyItem[] = [
  {
    number: "01",
    title: "The Language of Freedom",
    body: "Krio — the creole language born from the Krio community of Freetown — became Sierra Leone's lingua franca. A language built from Yoruba, English, Temne, and dozens of others, it is itself an act of cultural resistance: proof that identity survives displacement.",
  },
  {
    number: "02",
    title: "The Paramount Chiefs Today",
    body: "Sierra Leone still operates its system of Paramount Chiefs — a direct continuation of the governance structures that existed before colonialism. Bai Bureh's title, his authority, his land: none of these were ultimately extinguished. The colonial chapter was long. It was not final.",
  },
  {
    number: "03",
    title: "Culture as Archive",
    body: "The Poro and Sande secret societies of the Mende and Temne continue to transmit law, medicine, art, and history. They survived colonialism because they operated in the spaces colonisers could not reach. Culture, it turns out, is the most durable form of resistance.",
  },
  {
    number: "04",
    title: "Reclaiming the Narrative",
    body: "A new generation of Sierra Leonean historians, artists, and builders is reclaiming the story. Digital tools — like this very artifact — are part of that reclamation. The lion, as the proverb says, is learning to write. And the stories are extraordinary.",
  },
];

function LegacyCard({ item, index }: { item: LegacyItem; index: number }) {
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
      className={`px-10 pb-10 pt-12 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        background: "var(--ash)",
        borderTop: "2px solid var(--gold-dark)",
        transitionDelay: `${index * 140}ms`,
      }}
    >
      <div
        className="mb-4 text-5xl leading-none"
        style={{
          fontFamily: "var(--font-cinzel-decorative), serif",
          color: "rgba(201, 168, 76, 0.15)",
        }}
      >
        {item.number}
      </div>
      <div
        className="mb-4 text-[0.85rem] tracking-[0.15em]"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          color: "var(--gold)",
        }}
      >
        {item.title}
      </div>
      <p
        className="text-base font-light leading-relaxed opacity-70"
        style={{ color: "var(--cream)" }}
      >
        {item.body}
      </p>
    </div>
  );
}

export function LegacySection() {
  return (
    <section id="legacy" style={{ background: "var(--black)" }}>
      <div className="mx-auto max-w-[1100px] px-8 py-28">
        <div className="text-center">
          <SectionLabel>Living Legacy</SectionLabel>
          <SectionTitle>The Resistance Continues</SectionTitle>
          <SectionIntro centered>
            The story did not end at independence. The echoes of resistance shaped
            — and still shape — who Sierra Leone is today.
          </SectionIntro>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[3px] md:grid-cols-2">
          {legacyItems.map((item, index) => (
            <LegacyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
