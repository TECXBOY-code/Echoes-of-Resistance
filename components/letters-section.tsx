"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel, SectionTitle, SectionIntro } from "./section-components";

interface Letter {
  from: string;
  to: string;
  stampIcon: string;
  stampText: string[];
  text: string;
  signature: string;
  location: string;
}

const letters: Letter[] = [
  {
    from: "From: Bai Bureh, Paramount Chief of the Temne",
    to: "To: Governor Frederic Cardew, British Sierra Leone · 1898",
    stampIcon: "🦁",
    stampText: ["Undelivered", "Port Loko"],
    text: "You call what you have done governance. I call it occupation dressed in paperwork. You came to our shores with treaties we did not write, in a language we were not taught, to claim a land that was never yours to claim. You have now put a price on the roof above my people's heads. Know this: we did not build our homes to pay you rent for them. We will not. The forest knows our names. The rivers have carried our dead. This is not your country to administer. We have administered it for longer than your empire has existed. And we will be here long after it has fallen. I am not a subject. I am a chief. My people will fight.",
    signature: "Bai Bureh",
    location: "Undelivered · Port Loko, Sierra Leone · 1898",
  },
  {
    from: "From: A Mende Mother, Name Unrecorded",
    to: "To: Her Daughter, Hidden in the Forest · 1898",
    stampIcon: "🌿",
    stampText: ["Undelivered", "Southern SL"],
    text: "My child, I told you to stay hidden until the soldiers pass. I do not say this because I am afraid. I say it because you are the future and I am already the past. Do you know your great-grandmother danced at harvest in these same fields? That your grandfather negotiated trade with chiefs across the river before any British ship entered our waters? They cannot take that from you — even if they take everything else. Remember every story I have ever told you. They are your inheritance. No tax can be levied on memory.",
    signature: "Her Mother",
    location: "Undelivered · Southern Sierra Leone · 1898",
  },
  {
    from: "From: A Krio Scholar, Freetown",
    to: "To: The Editors of The Times, London · 1896",
    stampIcon: "✒️",
    stampText: ["Unpublished", "Freetown"],
    text: "I write as a man educated in your schools, fluent in your language, familiar with your philosophers who wrote at length of liberty. Tell me — where is that liberty in the Protectorate your government has just declared over my neighbours? You speak of civilising. I ask: what civilisation builds itself by dismantling another's? Sierra Leone had courts, trade, governance, and art before you arrived. We do not need to be civilised. We need to be left alone — or, failing that, heard. I write this knowing you will not publish it. I write it anyway. Some truths must be spoken even into silence.",
    signature: "A Krio Intellectual",
    location: "Unpublished · Freetown, Sierra Leone · 1896",
  },
];

function LetterCard({ letter, index }: { letter: Letter; index: number }) {
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
      className={`relative overflow-hidden transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(201, 168, 76, 0.038) 0%, rgba(139, 69, 19, 0.05) 100%)",
        border: "1px solid rgba(201, 168, 76, 0.1)",
        borderLeft: "3px solid var(--gold-dark)",
        transitionDelay: `${index * 180}ms`,
      }}
    >
      {/* Quote mark */}
      <div
        className="pointer-events-none absolute left-5 top-2 text-[6rem] leading-none opacity-[0.055]"
        style={{
          fontFamily: "var(--font-cinzel-decorative), serif",
          color: "var(--gold)",
        }}
      >
        &quot;
      </div>

      {/* Header */}
      <div
        className="flex flex-wrap items-start justify-between gap-8 px-8 pb-6 pt-8 md:px-12"
        style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.08)" }}
      >
        <div className="flex-1">
          <div
            className="mb-1 text-[0.58rem] uppercase tracking-[0.4em]"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--gold)",
            }}
          >
            {letter.from}
          </div>
          <div
            className="text-[0.55rem] uppercase tracking-[0.3em] opacity-65"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--earth-pale)",
            }}
          >
            {letter.to}
          </div>
        </div>
        <div
          className="hidden h-[70px] w-[60px] flex-shrink-0 flex-col items-center justify-center p-1.5 opacity-60 md:flex"
          style={{ border: "1px solid rgba(201, 168, 76, 0.25)" }}
        >
          <div className="mb-1 text-xl">{letter.stampIcon}</div>
          <div
            className="text-center text-[0.35rem] uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--gold)",
            }}
          >
            {letter.stampText[0]}
            <br />
            {letter.stampText[1]}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pb-10 pt-8 md:px-12">
        <p
          className="mb-8 text-lg font-light italic leading-8 opacity-[0.88]"
          style={{ color: "var(--cream)" }}
        >
          {letter.text}
        </p>
        <div
          className="flex items-center justify-between pt-5 text-[0.72rem] tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
            borderTop: "1px solid rgba(201, 168, 76, 0.12)",
          }}
        >
          <span>{letter.location}</span>
          <span style={{ color: "var(--gold)" }}>{letter.signature}</span>
        </div>
      </div>
    </div>
  );
}

export function LettersSection() {
  return (
    <section
      id="letters-section"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 25% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 60%),
          var(--black)
        `,
      }}
    >
      <div className="mx-auto max-w-[1100px] px-8 py-28">
        <div className="text-center">
          <SectionLabel>Letters Never Sent</SectionLabel>
          <SectionTitle>Words History Swallowed</SectionTitle>
          <SectionIntro centered>
            These letters are imagined — but they are not invented. Each is
            grounded in historical record and oral tradition. They are the words
            that had no audience. Now they do.
          </SectionIntro>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10">
          {letters.map((letter, index) => (
            <LetterCard key={index} letter={letter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
