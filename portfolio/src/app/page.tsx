import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BentoGrid from "@/components/BentoGrid";
import SkillsSection from "@/components/SkillsSection";
import ProcessSteps from "@/components/ProcessSteps";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-base overflow-x-hidden min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <SkillsSection />
      <ProcessSteps />
      <About />
      <Footer />
    </main>
  );
}
