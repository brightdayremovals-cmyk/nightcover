import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhatYouHear from "@/components/WhatYouHear";
import PricingFrame from "@/components/PricingFrame";
import Pilot from "@/components/Pilot";
import Compliance from "@/components/Compliance";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import PilotFormSection from "@/components/PilotFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Problem />
        <HowItWorks />
        <Services />
        <WhatYouHear />
        <PricingFrame />
        <Pilot />
        <Compliance />
        <FAQ />
        <FinalCTA />
        <CalendlyEmbed />
        <PilotFormSection />
      </main>
      <Footer />
    </>
  );
}
