"use client";

import Image from "next/image";

interface CinematicBreakProps {
  imageSrc: string;
  quote: string;
  attribution: string;
  height?: string;
}

export function CinematicBreak({
  imageSrc,
  quote,
  attribution,
  height = "400px",
}: CinematicBreakProps) {
  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{ height }}
    >
      <Image
        src={imageSrc}
        alt="Sierra Leone"
        fill
        className="object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-[1.07]"
        style={{
          objectPosition: "center 55%",
          filter: "brightness(0.28) saturate(0.55) sepia(0.45)",
          transform: "scale(1.04)",
        }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center"
        style={{
          background:
            "linear-gradient(to right, rgba(10, 8, 4, 0.88) 0%, rgba(10, 8, 4, 0.25) 50%, rgba(10, 8, 4, 0.88) 100%)",
        }}
      >
        <p
          className="mb-5 max-w-[680px] italic leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(1.2rem, 2.8vw, 2.1rem)",
            color: "var(--cream)",
          }}
          dangerouslySetInnerHTML={{ __html: quote }}
        />
        <div
          className="text-[0.58rem] uppercase tracking-[0.45em]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
          }}
        >
          {attribution}
        </div>
      </div>
    </div>
  );
}
