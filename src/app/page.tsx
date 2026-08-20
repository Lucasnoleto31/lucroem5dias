import { MotionProvider } from "@/components/motion/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Mentor } from "@/components/Mentor";
import { LeadForm } from "@/components/LeadForm";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Features />
        <Mentor />
        <HowItWorks />
        <LeadForm />
        <FinalCta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
