import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";

export default function RequestDemo() {
  return (
    <section
      id="request-demo"
      className="section"
      style={{
        background: "linear-gradient(135deg, #1a0a3d 0%, #2d1575 40%, #4e27c3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(108,63,197,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)"}}
          >
            <CalendarDays size={26} color="white" />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-jakarta)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            See VeriBatch™ in Action
          </h2>
          <p className="text-base md:text-lg mb-10 leading-relaxed" style={{color: "rgba(255,255,255,0.7)"}}>
            Request a personalized demonstration of VeriBatch™ with
            your team. See how it fits your current review workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" id="footer-cta-demo" className="btn-white px-8 py-3.5">
              Request a Demo
              <ChevronRight size={17} />
            </Link>
            <Link href="/product" className="btn-secondary px-8 py-3.5" style={{color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.25)"}}>
              Explore the Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
