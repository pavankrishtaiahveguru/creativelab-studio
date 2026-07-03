import { lazy, Suspense } from "react";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureProject from "../components/FeatureProject";
import Services from "../components/Services";
import Philosophy from "../components/Philosophy";
import CTA from "../components/CTA";
import Clients from "../components/shared/Clients";

const Testimonials = lazy(() => import("../components/Testimonials"));

function Home() {
  return (
    <>
      <div id="home">
        <Hero />
        <Services />
        <FeatureProject />
        <Suspense fallback={<div className="min-h-[420px]" />}>
          <Testimonials />
        </Suspense>
        <Philosophy />
        <CTA />
        <Clients />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default Home;
