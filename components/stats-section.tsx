"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  target: number;
  suffix: string;
  label: string[];
}

const stats: Stat[] = [
  {
    target: 0,
    suffix: "",
    label: ["African Representatives", "at the Berlin Conference"],
  },
  {
    target: 10,
    suffix: " mo",
    label: ["Months Bai Bureh Held", "Off the British Army"],
  },
  {
    target: 174,
    suffix: "",
    label: ["Chiefdoms Collapsed into", "One Colonial Unit"],
  },
  {
    target: 1961,
    suffix: "",
    label: ["Year Sierra Leone", "Won Independence"],
  },
];

function AnimatedNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = target > 1000 ? 2200 : target > 100 ? 1800 : 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span
      className="mb-3 block text-[clamp(2rem,4vw,3.5rem)] leading-none"
      style={{
        fontFamily: "var(--font-cinzel-decorative), serif",
        color: "var(--gold)",
      }}
    >
      {value}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="px-8 py-20"
      style={{
        background: "var(--ash)",
        borderTop: "1px solid rgba(201, 168, 76, 0.08)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
      }}
    >
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-0 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative px-8 py-10 text-center"
            style={{
              borderRight:
                index < stats.length - 1
                  ? "1px solid rgba(201, 168, 76, 0.1)"
                  : "none",
            }}
          >
            <AnimatedNumber
              target={stat.target}
              suffix={stat.suffix}
              isVisible={isVisible}
            />
            <span
              className="text-[0.55rem] uppercase leading-relaxed tracking-[0.35em] opacity-55"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                color: "var(--cream)",
              }}
            >
              {stat.label[0]}
              <br />
              {stat.label[1]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
