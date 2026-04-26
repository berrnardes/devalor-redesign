import Header from "./components/Header";
import Hero from "./components/Hero";
import Differentials from "./components/Differentials";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Directors from "./components/Directors";
import Testimonials from "./components/Testimonials";
import Metrics from "./components/Metrics";
import ProcessTimeline from "./components/ProcessTimeline";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <HowItWorks />
        <ProcessTimeline />
        <Metrics />        
        <Benefits />
        <Directors />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
