"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel, SectionTitle, SectionIntro } from "./section-components";

interface TimelineItem {
  year: string;
  title: string;
  body: string;
  position: "left" | "right";
  isHero?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    year: "1787",
    title: "The Province of Freedom",
    body: 'Freed enslaved Africans and Black Loyalists from Britain arrive on Sierra Leone\'s coast, establishing what they call "The Province of Freedom." On the peninsula they name Freetown, they build a community from nothing — a rare, self-determined Black settlement in a world consumed by the slave trade.',
    position: "left",
  },
  {
    year: "1850s",
    title: "Temne & Mende Sovereignty",
    body: "Inland Sierra Leone flourishes under the governance of Temne and Mende paramount chiefs. Trade routes stretch across West Africa. Communities hold courts, settle disputes, raise children in oral traditions stretching back centuries. This is not \"pre-history.\" This is civilisation.",
    position: "right",
  },
  {
    year: "1884 – 1885",
    title: "Berlin Conference — No One Asked Us",
    body: "Fourteen European nations meet in Berlin to divide Africa among themselves. Not one African representative is invited. Not one African government is consulted. In the span of months, Sierra Leone's ancient kingdoms become a line on a British map. The people within those lines are not informed.",
    position: "left",
  },
  {
    year: "1896",
    title: "The Hut Tax — A Home Is Not Property",
    body: 'Britain declares a Protectorate over the Sierra Leone interior and immediately imposes the "Hut Tax" — a levy on every home. Cannot pay? Your labour is taken. Resist? Your village burns. It is not merely a tax. It is a declaration: you do not own what you built.',
    position: "right",
  },
  {
    year: "1898",
    title: "Bai Bureh Rises",
    body: "Temne chief Bai Bureh refuses to pay. He rallies warriors — men and women — in what becomes the Hut Tax War. For ten months, his forces hold off the British army using guerrilla tactics drawn from deep knowledge of their own land. He is captured, exiled to the Gold Coast, then returned. He dies free in his homeland. The British never broke him.",
    position: "left",
    isHero: true,
  },
  {
    year: "27 April 1961",
    title: "Independence — The Echoes Were Always Here",
    body: "Sierra Leone becomes independent. The green, white and blue flag rises over Freetown. But independence is not an ending — it is the honouring of everyone who resisted so that this day could exist. The echoes of Bai Bureh, Madam Yoko, and all the unnamed resisters reach forward into this moment.",
    position: "right",
  },
];

function TimelineItemComponent({ item }: { item: TimelineItem }) {
  const itemRef = useRef<HTMLDivElement>(null);
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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`mb-16 grid grid-cols-1 transition-all duration-700 md:grid-cols-[1fr_64px_1fr] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {/* Left content */}
      {item.position === "left" ? (
        <div
          className="px-8 pb-8 text-left md:text-right"
          style={{
            background: "linear-gradient(135deg, rgba(201, 168, 76, 0.035), transparent)",
            border: "1px solid rgba(201, 168, 76, 0.09)",
          }}
        >
          <div
            className="pb-3 pt-6 text-[0.62rem] uppercase tracking-[0.3em]"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--gold)",
            }}
          >
            {item.year}
          </div>
          <div
            className="mb-4 text-lg leading-snug"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--cream)",
            }}
          >
            {item.title}
          </div>
          <p
            className="text-base font-light leading-relaxed opacity-75 md:text-right"
            style={{ color: "var(--cream)" }}
          >
            {item.body}
          </p>
        </div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* Dot */}
      <div className="hidden items-start justify-center pt-7 md:flex">
        <div
          className="h-3.5 w-3.5 flex-shrink-0 rounded-full"
          style={{
            background: item.isHero ? "var(--gold-light)" : "var(--gold)",
            border: "3px solid var(--black)",
            boxShadow: item.isHero
              ? "0 0 0 2px var(--gold), 0 0 25px rgba(232, 201, 110, 0.55)"
              : "0 0 0 1px var(--gold-dark), 0 0 18px rgba(201, 168, 76, 0.35)",
          }}
        />
      </div>

      {/* Right content */}
      {item.position === "right" ? (
        <div
          className="px-8 pb-8 text-left"
          style={{
            background: "linear-gradient(135deg, rgba(201, 168, 76, 0.035), transparent)",
            border: "1px solid rgba(201, 168, 76, 0.09)",
          }}
        >
          <div
            className="pb-3 pt-6 text-[0.62rem] uppercase tracking-[0.3em]"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--gold)",
            }}
          >
            {item.year}
          </div>
          <div
            className="mb-4 text-lg leading-snug"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--cream)",
            }}
          >
            {item.title}
          </div>
          <p
            className="text-base font-light leading-relaxed opacity-75"
            style={{ color: "var(--cream)" }}
          >
            {item.body}
          </p>
        </div>
      ) : (
        <div className="hidden md:block" />
      )}
    </div>
  );
}

export function TimelineSection() {
  return (
    <section
      id="timeline-section"
      style={{
        background: "linear-gradient(160deg, var(--deep) 0%, rgba(22, 16, 8, 0.6) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-8 py-28">
        <div className="text-center">
          <SectionLabel>The Day Before</SectionLabel>
          <SectionTitle>Life, Before It Was Taken</SectionTitle>
          <SectionIntro centered>
            History remembers battles. But before every battle, there was ordinary
            life — joy, harvest, ceremony, love. Here is what colonialism erased.
          </SectionIntro>
        </div>

        <div className="relative mt-16">
          {/* Center line */}
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--gold-dark) 8%, var(--gold-dark) 92%, transparent)",
            }}
          />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <TimelineItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
