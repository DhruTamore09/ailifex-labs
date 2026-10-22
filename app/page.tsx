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
  title: "LifeScienceX AI | AI Solutions for Life Sciences & Pharma",
  description:
    "LifeScienceX AI builds purpose-built AI solutions that help pharmaceutical and life sciences companies improve quality, cut compliance costs, automate batch record review, and deliver safe, affordable medicines worldwide.",
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
