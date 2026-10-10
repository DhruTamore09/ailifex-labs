import type { Metadata } from "next";
import { Suspense } from "react";
import ProductTabs from "@/components/sections/ProductTabs";
import RequestDemo from "@/components/sections/RequestDemo";

export const metadata: Metadata = {
  title: "Product Suite — VeriBatch™ & ChangeSure™ | LifeScienceX AI",
  description:
    "Explore LifeScienceX AI enterprise platforms: VeriBatch™ BMR Review System and ChangeSure™ Enterprise Change Control & Quality Governance Platform.",
};

export default function ProductPage() {
  return (
    <>
      <Suspense fallback={
        <div className="min-h-screen pt-36 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin mx-auto mb-4" />
            <div className="text-sm font-bold text-slate-700">Loading Product View...</div>
          </div>
        </div>
      }>
        <ProductTabs />
      </Suspense>

      <RequestDemo />
    </>
  );
}
