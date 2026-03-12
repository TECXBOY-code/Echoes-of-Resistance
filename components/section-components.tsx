"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  isVisible?: boolean;
  centered?: boolean;
}

export function SectionLabel({ children, isVisible = true }: SectionProps) {
  return (
    <div
      className={`mb-10 flex items-center justify-center gap-6 text-[0.58rem] uppercase tracking-[0.5em] transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{
        fontFamily: "var(--font-cinzel), serif",
        color: "var(--gold)",
      }}
    >
      <span
        className="h-px max-w-[80px] flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--gold-dark), transparent)",
        }}
      />
      {children}
      <span
        className="h-px max-w-[80px] flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, var(--gold-dark), transparent)",
        }}
      />
    </div>
  );
}

export function SectionTitle({ children, isVisible = true }: SectionProps) {
  return (
    <h2
      className={`mx-auto mb-6 text-center text-[clamp(1.8rem,4vw,3rem)] leading-tight transition-all duration-700 delay-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{
        fontFamily: "var(--font-cinzel-decorative), serif",
        color: "var(--gold-light)",
      }}
    >
      {children}
    </h2>
  );
}

export function SectionIntro({
  children,
  isVisible = true,
  centered = false,
}: SectionProps) {
  return (
    <p
      className={`mx-auto max-w-[680px] text-center text-lg italic leading-relaxed transition-all duration-700 delay-200 ${
        centered ? "mx-auto" : ""
      } ${isVisible ? "translate-y-0 opacity-70" : "translate-y-6 opacity-0"}`}
      style={{ color: "var(--cream)" }}
    >
      {children}
    </p>
  );
}

export function Divider() {
  return (
    <div
      className="flex items-center justify-center gap-4 py-12 opacity-40"
      style={{ color: "var(--gold)" }}
    >
      <span
        className="h-px max-w-[220px] flex-1"
        style={{
          background: "linear-gradient(to right, transparent, var(--gold-dark))",
        }}
      />
      <span className="text-[0.65rem] tracking-[0.3em]">◆ ◆ ◆</span>
      <span
        className="h-px max-w-[220px] flex-1"
        style={{
          background: "linear-gradient(to left, transparent, var(--gold-dark))",
        }}
      />
    </div>
  );
}
