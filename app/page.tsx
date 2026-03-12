import { Loader } from "@/components/loader";
import { ProgressBar } from "@/components/progress-bar";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { MapSection } from "@/components/map-section";
import { Divider } from "@/components/section-components";
import { TimelineSection } from "@/components/timeline-section";
import { CinematicBreak } from "@/components/cinematic-break";
import { LettersSection } from "@/components/letters-section";
import { FiguresSection } from "@/components/figures-section";
import { LegacySection } from "@/components/legacy-section";
import { ReflectionSection } from "@/components/reflection-section";
import { ClosingSection } from "@/components/closing-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Loader />
      <ProgressBar />
      <Navigation />
      
      <HeroSection />
      <StatsSection />
      <MapSection />
      
      <Divider />
      
      <TimelineSection />
      
      <CinematicBreak
        imageSrc="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=80"
        quote="&ldquo;We were not waiting to be discovered.<br/>We were already here — fully alive, fully human, fully home.&rdquo;"
        attribution="Sierra Leone · Before the Protectorate · 1896"
      />
      
      <LettersSection />
      
      <Divider />
      
      <FiguresSection />
      
      <Divider />
      
      <LegacySection />
      
      <CinematicBreak
        imageSrc="https://images.unsplash.com/photo-1489392191049-fc10c97e64b8?auto=format&fit=crop&w=1920&q=80"
        quote="Sierra Leone became independent on 27 April 1961.<br/>The resistance that made this possible began long before."
        attribution="🇸🇱 &nbsp; Independence Day · 27 April 1961"
        height="280px"
      />
      
      <ReflectionSection />
      
      <Divider />
      
      <ClosingSection />
      
      <Footer />
    </main>
  );
}
