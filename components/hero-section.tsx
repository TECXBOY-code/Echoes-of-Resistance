"use client";

import Image from "next/image";
import Link from "next/link";
import { Particles } from "./particles";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden text-center"
      style={{ height: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 50% 50%, rgba(139, 69, 19, 0.25) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(10, 8, 4, 0.6) 0%, rgba(10, 8, 4, 0.1) 50%, rgba(10, 8, 4, 0.85) 100%)
            `,
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80"
          alt="West African landscape"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: "center 35%",
            filter: "brightness(0.22) saturate(0.6) sepia(0.4)",
            transform: "scale(1.06)",
            animation: "hero-drift 25s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Frame */}
      <div
        className="pointer-events-none absolute z-[2]"
        style={{
          inset: "2.5rem",
          border: "1px solid rgba(201, 168, 76, 0.12)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "-1px",
            left: "-1px",
            width: "20px",
            height: "20px",
            borderColor: "var(--gold-dark)",
            borderStyle: "solid",
            borderWidth: "2px 0 0 2px",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-1px",
            right: "-1px",
            width: "20px",
            height: "20px",
            borderColor: "var(--gold-dark)",
            borderStyle: "solid",
            borderWidth: "2px 2px 0 0",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-1px",
            left: "-1px",
            width: "20px",
            height: "20px",
            borderColor: "var(--gold-dark)",
            borderStyle: "solid",
            borderWidth: "0 0 2px 2px",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-1px",
            right: "-1px",
            width: "20px",
            height: "20px",
            borderColor: "var(--gold-dark)",
            borderStyle: "solid",
            borderWidth: "0 2px 2px 0",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-[850px] px-8">
        <div
          className="mb-6 text-4xl opacity-0"
          style={{ animation: "fade-up 1s 0.2s forwards" }}
        >
          🇸🇱
        </div>
        <div
          className="mb-7 text-[0.62rem] uppercase tracking-[0.55em] opacity-0"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold)",
            animation: "fade-up 1s 0.5s forwards",
          }}
        >
          Sierra Leone · West Africa · 1787 – 1961
        </div>
        <h1
          className="mb-5 text-[clamp(2.6rem,7.5vw,6.5rem)] font-black leading-none opacity-0"
          style={{
            fontFamily: "var(--font-cinzel-decorative), serif",
            background:
              "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 40%, var(--earth-light) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "fade-up 1.2s 0.8s forwards",
          }}
        >
          Echoes of
          <br />
          Resistance
        </h1>
        <div
          className="mb-10 text-[clamp(0.65rem,1.2vw,0.85rem)] uppercase tracking-[0.4em] opacity-0"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
            animation: "fade-up 1s 1.1s forwards",
          }}
        >
          A Digital Memorial to Those Who Never Surrendered
        </div>
        <p
          className="mx-auto mb-12 max-w-[580px] text-[clamp(1rem,1.6vw,1.2rem)] font-light italic leading-8 opacity-0"
          style={{
            color: "var(--cream)",
            animation: "fade-up 1s 1.4s forwards",
          }}
        >
          History is not only what was written by those who conquered. It lives
          in the silences — the letters unsent, the names erased, the kingdoms
          unmapped. This is Sierra Leone&apos;s story.
        </p>
        <Link
          href="#map-section"
          className="inline-block px-10 py-4 text-[0.6rem] uppercase tracking-[0.4em] opacity-0 transition-all duration-300 hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.1)]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold)",
            border: "1px solid var(--gold-dark)",
            animation: "fade-up 1s 1.7s forwards",
            textDecoration: "none",
          }}
        >
          Begin the Journey
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 opacity-0"
        style={{ animation: "fade-up 1s 2.2s forwards" }}
      >
        <span
          className="text-[0.5rem] uppercase tracking-[0.45em]"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
          }}
        >
          Scroll
        </span>
        <div
          className="h-14 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--gold-dark), transparent)",
            animation: "scroll-pulse 2.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Particles */}
      <Particles />
    </section>
  );
}
