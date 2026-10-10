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
  title: "LifeScienceX AI | VeriBatch™ Intelligent BMR Review System",
  description:
    "LifeScienceX AI delivers VeriBatch™ — extracting executed BMR data, validating against MBR, SOPs, ERP, MES, and LIMS, identifying discrepancies, and automating downstream release workflows.",
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
