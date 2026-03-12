"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#map-section", label: "The Land" },
  { href: "#timeline-section", label: "Timeline" },
  { href: "#letters-section", label: "Letters" },
  { href: "#figures-section", label: "The Resisters" },
  { href: "#reflection", label: "Reflect" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[500] flex items-center justify-between px-12 py-5 transition-all duration-400 ${
        isScrolled
          ? "border-b border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,4,0.97)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="text-[0.7rem] uppercase tracking-[0.35em]"
        style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--gold)" }}
      >
        Echoes of Resistance
      </div>
      <div className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[0.6rem] uppercase tracking-[0.25em] text-[var(--cream)] opacity-50 transition-all duration-300 hover:text-[var(--gold)] hover:opacity-100"
            style={{ fontFamily: "var(--font-cinzel), serif", textDecoration: "none" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
