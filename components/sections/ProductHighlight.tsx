import Link from "next/link";
import {
  FileCheck,
  GitMerge,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { productsData } from "@/data/products";

export default function ProductHighlight() {
  return (
    <section id="product-features" className="section py-24 bg-white relative overflow-hidden">
      <div className="container-xl relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 inline-flex items-center gap-1.5">
            <Sparkles size={14} className="text-purple-600" />
            Enterprise Product Suite
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5 text-slate-900 leading-tight"
            style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}
          >
            Built for Regulated <span className="gradient-text">Life Sciences</span> Operations
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Digitize end-to-end quality and manufacturing workflows with enterprise-grade traceability, compliance, and real-time oversight.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productsData.map((product) => {
            const isVeribatch = product.id === "veribatch";
            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className={`rounded-3xl border p-8 md:p-10 transition-all duration-300 relative flex flex-col justify-between ${
                  isVeribatch
                    ? "bg-gradient-to-b from-[#fbf9ff] to-white border-purple-200/80 hover:border-purple-300 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10"
                    : "bg-gradient-to-b from-[#f0f9ff] to-white border-sky-200/80 hover:border-sky-300 shadow-xl shadow-sky-900/5 hover:shadow-2xl hover:shadow-sky-900/10"
                }`}
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        isVeribatch
                          ? "bg-purple-100 text-purple-700"
                          : "bg-sky-100 text-sky-700"
                      }`}
                    >
                      {product.badge}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                        isVeribatch ? "bg-purple-600 text-white" : "bg-sky-600 text-white"
                      }`}
                    >
                      {isVeribatch ? <FileCheck size={24} /> : <GitMerge size={24} />}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 font-jakarta"
                  >
                    {product.name}
                  </h3>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                      isVeribatch ? "text-purple-600" : "text-sky-600"
                    }`}
                  >
                    {product.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                        <CheckCircle2
                          size={16}
                          className={`shrink-0 ${isVeribatch ? "text-purple-600" : "text-sky-600"}`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {isVeribatch ? "Automated MBR/BMR Review" : "Cross-Functional Governance"}
                  </span>
                  <Link
                    href={product.href}
                    className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
                      isVeribatch
                        ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
                        : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    Explore Product <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance Note */}
        <div className="rounded-2xl p-6 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-bold font-jakarta text-white">
                Built for Regulated GxP Environments
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Full 21 CFR Part 11 compliance, EU Annex 11 alignment, ALCOA+ audit trails, and ICH Q9 risk framework.
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-primary text-xs px-6 py-3 shrink-0 whitespace-nowrap"
          >
            Request Governance Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
