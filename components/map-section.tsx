"use client";

import { useRef, useState, useEffect } from "react";
import { SectionLabel, SectionTitle, SectionIntro } from "./section-components";

interface TooltipData {
  name: string;
  desc: string;
  x: number;
  y: number;
}

export function MapSection() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent,
    name: string,
    desc: string
  ) => {
    setTooltip({
      name,
      desc,
      x: e.clientX + 14,
      y: e.clientY - 8,
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <section
      id="map-section"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(to bottom, var(--black), var(--deep) 30%, var(--black))",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-8 py-28 text-center">
        <SectionLabel isVisible={isVisible}>The Land</SectionLabel>
        <SectionTitle isVisible={isVisible}>
          Before & After the Berlin Conference
        </SectionTitle>
        <SectionIntro isVisible={isVisible} centered>
          In 1884, fourteen European nations met in Berlin to divide a continent
          they had never walked. Centuries of West African kingdoms, trade routes
          and governance were redrawn as colonial property. Sierra Leone was no
          exception.
        </SectionIntro>

        <div className="relative mx-auto mt-16 grid max-w-[880px] grid-cols-1 gap-[3px] md:grid-cols-2">
          {/* Pre-Colonial Map */}
          <div
            className="relative aspect-[4/3] cursor-pointer overflow-hidden transition-transform duration-500 hover:z-[2] hover:scale-[1.025]"
            style={{ background: "var(--ash)" }}
          >
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <defs>
                <radialGradient id="mg" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0a0804" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="300" fill="#110f0a" />
              <rect width="400" height="300" fill="url(#mg)" />
              <path
                className="cursor-pointer transition-all duration-300 hover:fill-[var(--gold-dark)] hover:opacity-100"
                d="M100 80 L200 70 L240 100 L220 160 L160 180 L100 160Z"
                fill="var(--earth)"
                stroke="var(--gold-dark)"
                strokeWidth="0.5"
                opacity="0.8"
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    "Temne Kingdom",
                    "Powerful Temne chiefs controlled the northern highlands"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <path
                className="cursor-pointer transition-all duration-300 hover:fill-[var(--gold-dark)] hover:opacity-100"
                d="M160 180 L240 170 L290 200 L270 260 L180 270 L140 240Z"
                fill="#7a4010"
                stroke="var(--gold-dark)"
                strokeWidth="0.5"
                opacity="0.8"
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    "Mende Kingdom",
                    "The Mende fiercely defended southern Sierra Leone"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <path
                className="cursor-pointer transition-all duration-300 hover:fill-[var(--gold-dark)] hover:opacity-100"
                d="M60 120 L100 110 L100 160 L80 190 L50 170Z"
                fill="#6b5020"
                stroke="var(--gold-dark)"
                strokeWidth="0.5"
                opacity="0.8"
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    "Krio Settlement",
                    "Freed enslaved Africans built the Krio community in Freetown"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <path
                className="cursor-pointer transition-all duration-300 hover:fill-[var(--gold-dark)] hover:opacity-100"
                d="M150 40 L220 50 L200 80 L160 80 L130 60Z"
                fill="#9a5518"
                stroke="var(--gold-dark)"
                strokeWidth="0.5"
                opacity="0.8"
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    "Limba Territory",
                    "The Limba people held the northern highlands"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <path
                d="M80 80 Q100 120 90 180 Q85 220 75 250"
                stroke="#c9a84c"
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
              />
              <path
                d="M180 60 Q200 120 210 200 Q215 240 200 270"
                stroke="#c9a84c"
                strokeWidth="1"
                fill="none"
                opacity="0.18"
              />
              <text
                x="152"
                y="128"
                fontFamily="Cinzel"
                fontSize="9"
                fill="#c9a84c"
                opacity="0.85"
                textAnchor="middle"
              >
                TEMNE
              </text>
              <text
                x="218"
                y="225"
                fontFamily="Cinzel"
                fontSize="9"
                fill="#c9a84c"
                opacity="0.85"
                textAnchor="middle"
              >
                MENDE
              </text>
              <text
                x="74"
                y="146"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#e8c96e"
                opacity="0.7"
                textAnchor="middle"
              >
                KRIO
              </text>
              <text
                x="178"
                y="61"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#c9a84c"
                opacity="0.65"
                textAnchor="middle"
              >
                LIMBA
              </text>
            </svg>
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.3em]"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                color: "var(--gold)",
                background: "rgba(10, 8, 4, 0.88)",
                border: "1px solid rgba(201, 168, 76, 0.18)",
              }}
            >
              Pre-Colonial Kingdoms
            </div>
          </div>

          {/* Colonial Map */}
          <div
            className="relative aspect-[4/3] cursor-pointer overflow-hidden transition-transform duration-500 hover:z-[2] hover:scale-[1.025]"
            style={{ background: "var(--ash)" }}
          >
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <rect width="400" height="300" fill="#0e0c08" />
              <rect width="400" height="300" fill="#1e180d" stroke="#4a3510" strokeWidth="0.5" />
              <path
                className="cursor-pointer transition-all duration-300 hover:fill-[var(--earth)]"
                d="M60 70 L290 65 L300 280 L55 285Z"
                fill="#3d1e0a"
                stroke="var(--gold-dark)"
                strokeWidth="1"
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    "British Sierra Leone",
                    "Arbitrarily bordered British Crown Colony — 1896"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <line
                x1="0"
                y1="118"
                x2="400"
                y2="113"
                stroke="#c9a84c"
                strokeWidth="1.5"
                strokeDasharray="7,5"
                opacity="0.45"
              />
              <line
                x1="172"
                y1="0"
                x2="177"
                y2="300"
                stroke="#c9a84c"
                strokeWidth="1.5"
                strokeDasharray="7,5"
                opacity="0.45"
              />
              <text
                x="180"
                y="178"
                fontFamily="Cinzel"
                fontSize="10"
                fill="#7a5530"
                textAnchor="middle"
              >
                BRITISH
              </text>
              <text
                x="180"
                y="194"
                fontFamily="Cinzel"
                fontSize="10"
                fill="#7a5530"
                textAnchor="middle"
              >
                SIERRA LEONE
              </text>
              <text
                x="180"
                y="210"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#6a4520"
                textAnchor="middle"
              >
                Crown Colony · 1896
              </text>
              <text
                x="28"
                y="88"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#4a3218"
                opacity="0.5"
              >
                French
              </text>
              <text
                x="318"
                y="88"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#4a3218"
                opacity="0.5"
              >
                French
              </text>
              <text
                x="28"
                y="245"
                fontFamily="Cinzel"
                fontSize="7"
                fill="#4a3218"
                opacity="0.5"
              >
                Liberia
              </text>
            </svg>
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.3em]"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                color: "var(--gold)",
                background: "rgba(10, 8, 4, 0.88)",
                border: "1px solid rgba(201, 168, 76, 0.18)",
              }}
            >
              After Colonial Partition · 1896
            </div>
          </div>

          {/* VS Badge */}
          <div
            className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[0.55rem] md:flex"
            style={{
              background: "var(--black)",
              border: "1px solid var(--gold-dark)",
              fontFamily: "var(--font-cinzel), serif",
              color: "var(--gold)",
            }}
          >
            VS
          </div>
        </div>

        <p
          className={`mx-auto mt-10 max-w-[680px] text-center text-base italic leading-relaxed opacity-0 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-70" : "translate-y-6"
          }`}
          style={{ color: "var(--cream)" }}
        >
          Hover the regions to reveal the kingdoms that thrived long before
          colonial borders were drawn. The Temne, Mende, Limba, and Krio peoples
          — each with their own governance, trade, and culture — were collapsed
          into a single administrative unit by a power that had never set foot on
          most of this land.
        </p>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-[600] max-w-[220px] px-4 py-3 transition-opacity duration-150"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            background: "rgba(10, 8, 4, 0.97)",
            border: "1px solid var(--gold-dark)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.6rem",
            color: "var(--gold)",
          }}
        >
          <strong>{tooltip.name}</strong>
          <br />
          <span className="opacity-65" style={{ fontSize: "0.55rem" }}>
            {tooltip.desc}
          </span>
        </div>
      )}
    </section>
  );
}
