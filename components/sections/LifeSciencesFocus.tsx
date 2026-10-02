import Image from "next/image";
import Link from "next/link";
import { Microscope, Pill, FlaskConical, ArrowRight } from "lucide-react";

const focusAreas = [
  {
    icon: Pill,
    title: "Pharmaceutical Manufacturing",
    description:
      "Built for solid dosage, sterile, and API manufacturing — where batch record accuracy is critical to product quality.",
  },
  {
    icon: FlaskConical,
    title: "Biotech & Biologics",
    description:
      "Supports complex batch documentation requirements for biologics, vaccines, and cell & gene therapy manufacturing.",
  },
  {
    icon: Microscope,
    title: "Quality Operations",
    description:
      "Designed around QA and QC workflows — supporting exception investigation, disposition decisions, and documentation review.",
  },
];

export default function LifeSciencesFocus() {
  return (
    <section
      id="life-sciences-focus"
      className="section"
      style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 50%, white 100%)"}}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{background: "linear-gradient(135deg, rgba(108,63,197,0.1) 0%, transparent 60%)"}}
            />
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{borderColor: "#e8e4f4", boxShadow: "0 20px 60px rgba(108,63,197,0.12)"}}
            >
              <Image
                src="/images/pharma_manufacturing.png"
                alt="Pharmaceutical manufacturing professional reviewing batch documentation in a modern GMP facility"
                width={700}
                height={520}
                className="w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-5 -right-5 glass-card p-4 flex items-center gap-3"
              style={{boxShadow: "var(--shadow-hover)"}}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{background: "linear-gradient(135deg, #4e27c3, #6c3fc5)"}}
              >
                <Microscope size={18} color="white" />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{color: "#0f0a1e", fontFamily: "var(--font-jakarta)"}}>
                  Designed for Life Sciences
                </div>
                <div className="text-xs" style={{color: "#8b879e"}}>
                  Pharma · Biotech · Quality Operations
                </div>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div>
            <span className="section-label mb-5 inline-flex">Life Sciences Focus</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
            >
              Purpose-Built for Pharmaceutical Quality Teams
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{color: "#4b4565"}}>
              AILifeX Labs is developed specifically for the Life Sciences industry. Our VeriBatch™ Batch Review
              System reflects a deep understanding of pharmaceutical manufacturing documentation,
              quality processes, and review workflows — not a generic document management tool.
            </p>

            {/* Focus Areas */}
            <div className="flex flex-col gap-5 mb-8">
              {focusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{background: "#f0ebfd"}}
                    >
                      <Icon size={17} style={{color: "#6c3fc5"}} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold mb-1"
                        style={{color: "#0f0a1e", fontFamily: "var(--font-jakarta)"}}
                      >
                        {area.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{color: "#6b6880"}}>
                        {area.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/product" className="btn-primary inline-flex">
              Explore VeriBatch™
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
