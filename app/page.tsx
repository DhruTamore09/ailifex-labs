import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ProductHighlight from "@/components/sections/ProductHighlight";
import MotionScenarios from "@/components/sections/MotionScenarios";
import ComparisonSection from "@/components/sections/ComparisonSection";
import KeyBenefits from "@/components/sections/KeyBenefits";
import LifeSciencesFocus from "@/components/sections/LifeSciencesFocus";
import RequestDemo from "@/components/sections/RequestDemo";

export const metadata: Metadata = {
  title: "LifeScienceX AI | VeriBatch™ Life Sciences Batch Review System",
  description:
    "Technology for smarter Life Sciences operations. LifeScienceX AI delivers VeriBatch™ — MBR/BMR comparison, batch record review, exception management, and reviewer workflows.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductHighlight />
      <MotionScenarios />
      <ComparisonSection />
      <KeyBenefits />
      <LifeSciencesFocus />
      <RequestDemo />
    </>
  );
}
