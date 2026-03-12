"use client";

export function Footer() {
  return (
    <>
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201, 168, 76, 0.15), transparent)",
        }}
      />
      <footer
        className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-4 px-8 py-10 md:justify-between"
        style={{ borderTop: "1px solid rgba(201, 168, 76, 0.08)" }}
      >
        <div
          className="text-[0.52rem] uppercase tracking-[0.3em] opacity-45"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
          }}
        >
          Echoes of Resistance · Sierra Leone · A Digital Cultural Artifact
        </div>
        <div className="text-2xl">🇸🇱</div>
        <div
          className="text-[0.52rem] uppercase tracking-[0.3em] opacity-45"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--gold-dark)",
          }}
        >
          Built with memory & purpose · 2025
        </div>
      </footer>
    </>
  );
}
