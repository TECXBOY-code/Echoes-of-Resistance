"use client";

export function ClosingSection() {
  return (
    <section
      id="closing"
      className="px-8 py-36 text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 69, 19, 0.07), transparent 70%), var(--black)",
      }}
    >
      <blockquote
        className="mx-auto mb-10 max-w-[720px] font-light italic leading-relaxed opacity-[0.92]"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
          color: "var(--cream)",
        }}
      >
        &quot;Until the lion learns to write, every story will glorify the hunter.&quot;
      </blockquote>
      <div
        className="text-[0.6rem] uppercase tracking-[0.45em]"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          color: "var(--gold-dark)",
        }}
      >
        — West African Proverb
      </div>
      <p
        className="mx-auto mt-14 max-w-[580px] text-lg italic leading-8 opacity-65"
        style={{ color: "var(--cream)" }}
      >
        This artifact was built so that the lion might write. Sierra Leone&apos;s
        story of resistance is not a tragedy — it is a testimony. It lives in
        every person who chooses to remember, research, and refuse the version of
        history that erases the people who were here first.
      </p>
    </section>
  );
}
