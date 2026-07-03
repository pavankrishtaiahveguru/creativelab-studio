// src/pages/About.jsx
import { lazy, Suspense } from "react";
import PageHero from "../components/shared/PageHero";
import StandOut from "../components/about/StandOut";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/shared/WhyChooseUs";
import MarqueeStrip from "../components/about/MarqueeStrip";
import Clients from "../components/shared/Clients";
import Process from "../components/shared/Process";

const Story = lazy(() => import("../components/about/Story"));
const TeamSection = lazy(() => import("../components/TeamSection"));

const About = () => {
  return (
    <>
      <PageHero />
      <StandOut />
      <Process />
      <Suspense fallback={<div className="min-h-[420px]" />}>
        <Story />
      </Suspense>
      <Suspense fallback={<div className="min-h-[420px]" />}>
        <TeamSection />
      </Suspense>
      <Clients />
      <WhyChooseUs />
      <MarqueeStrip />
      <Footer />
    </>
  );
};

export default About;
