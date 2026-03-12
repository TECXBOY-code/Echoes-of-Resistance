import type { Metadata, Viewport } from "next";
import { Cinzel, Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Echoes of Resistance - Sierra Leone",
  description:
    "A digital memorial to Sierra Leone's history of colonial resistance (1787-1961). Honoring Bai Bureh, Madam Yoko, and all who resisted.",
  keywords: [
    "Sierra Leone",
    "colonial resistance",
    "Bai Bureh",
    "Madam Yoko",
    "African history",
    "West Africa",
    "decolonization",
  ],
  authors: [{ name: "Echoes of Resistance" }],
  openGraph: {
    title: "Echoes of Resistance - Sierra Leone",
    description:
      "A digital memorial to Sierra Leone's history of colonial resistance",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0804",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {children}
      </body>
    </html>
  );
}
