"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  bottom: number;
  dx: number;
  duration: number;
  delay: number;
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 2.5 + 0.8,
        left: Math.random() * 100,
        bottom: Math.random() * 15,
        dx: (Math.random() - 0.5) * 180,
        duration: Math.random() * 14 + 9,
        delay: Math.random() * 10,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle pointer-events-none absolute rounded-full opacity-0"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: `${particle.bottom}%`,
            background: "var(--gold)",
            // @ts-expect-error CSS custom property
            "--dx": `${particle.dx}px`,
            animation: `float-up ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
}
