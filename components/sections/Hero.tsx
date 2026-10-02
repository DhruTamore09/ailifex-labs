import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 40%, #ffffff 70%)"}}
    >
      {/* Background Orbs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{background: "radial-gradient(circle, rgba(108,63,197,0.08) 0%, transparent 70%)"}}
      />
      <div
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)"}}
      />

      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <div className="flex justify-center mb-6">
            <span className="section-label">
              <span style={{width: 6, height: 6, borderRadius: "50%", background: "#6c3fc5", display: "inline-block"}}/>
              Enterprise Life Sciences Platforms · VeriBatch™ & ChangeSure™
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]"
            style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e", letterSpacing: "-0.03em"}}
          >
            Digital Quality & Change Control for{" "}
            <span className="gradient-text">Life Sciences</span>{" "}
            Operations
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{color: "#4b4565"}}>
            Accelerate batch record review with <strong>VeriBatch™</strong> and automate enterprise change control governance with <strong>ChangeSure™</strong> — built for regulated pharmaceutical & biotech manufacturing.
          </p>

          {/* Key Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-semibold" style={{color: "#6c3fc5"}}>
            <span className="px-3.5 py-1.5 rounded-full" style={{background: "#f0ebfd", border: "1px solid #e8e4f4"}}>
              ⚡ VeriBatch™ MBR/BMR Review
            </span>
            <span className="px-3.5 py-1.5 rounded-full" style={{background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd"}}>
              🔄 ChangeSure™ Change Governance
            </span>
            <span className="px-3.5 py-1.5 rounded-full" style={{background: "#f0ebfd", border: "1px solid #e8e4f4"}}>
              🔒 Tamper-Evident Audit Trails
            </span>
            <span className="px-3.5 py-1.5 rounded-full" style={{background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd"}}>
              🎯 Cross-Functional Risk Assessment
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" id="hero-cta-demo" className="btn-primary px-7 py-3.5">
              Request a Demo
              <ChevronRight size={17} />
            </Link>
            <Link href="/product" id="hero-cta-product" className="btn-secondary px-7 py-3.5">
              Explore the Product
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
