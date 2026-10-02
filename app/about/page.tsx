import type { Metadata } from "next";
import { Heart, Target, Lightbulb, Shield } from "lucide-react";
import RequestDemo from "@/components/sections/RequestDemo";

export const metadata: Metadata = {
  title: "About",
  description:
    "LifeScienceX AI is a Life Sciences technology company building enterprise software for pharmaceutical batch record review and quality operations.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We build for environments where accuracy is non-negotiable. Every feature is designed to reduce ambiguity and support informed decisions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Data integrity and traceability are first-class concerns in every component we build — from the database schema to the user interface.",
  },
  {
    icon: Lightbulb,
    title: "Clarity",
    description:
      "Complex pharmaceutical data deserves clear, structured presentation. We design software that makes review work intuitive, not burdensome.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We work closely with Life Sciences teams to understand real-world review challenges and translate them into practical software solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20"
        style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 60%, white 100%)"}}
      >
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="section-label mb-6 inline-flex">About LifeScienceX AI</span>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e", letterSpacing: "-0.03em"}}
            >
              Software Built for Life Sciences Quality
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{color: "#4b4565"}}>
              LifeScienceX AI is a pharmaceutical technology company focused on one mission: making
              batch record review more structured, efficient, and traceable for Life Sciences
              manufacturers.
            </p>
            <p className="text-base leading-relaxed" style={{color: "#6b6880"}}>
              We develop enterprise software tailored to the documentation-heavy, quality-critical
              workflows of pharmaceutical manufacturing — centered on our flagship product, VeriBatch™
              (Life Sciences Batch Review System).
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{background: "white"}}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-5 inline-flex">Our Mission</span>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
              >
                Turning Batch Documentation into Operational Intelligence
              </h2>
              <div className="purple-divider" />
              <p className="text-base leading-relaxed mb-5" style={{color: "#4b4565"}}>
                Pharmaceutical batch records contain some of the most critical information in
                manufacturing — yet reviewing them remains a largely manual, document-intensive
                process. LifeScienceX AI exists to change that.
              </p>
              <p className="text-base leading-relaxed" style={{color: "#4b4565"}}>
                We build software that transforms how quality teams interact with batch
                documentation — making comparison, exception identification, and review sign-off
                structured, consistent, and fully auditable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Focus Area", value: "Batch Review" },
                { label: "Industry", value: "Life Sciences" },
                { label: "Approach", value: "Enterprise SaaS" },
                { label: "Built For", value: "QA Teams" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border"
                  style={{borderColor: "#e8e4f4", background: "#fafafe"}}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color: "#8b879e"}}>
                    {item.label}
                  </div>
                  <div className="text-xl font-bold" style={{fontFamily: "var(--font-jakarta)", color: "#4e27c3"}}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 100%)"}}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Values</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
            >
              What Guides How We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="glass-card card-hover p-7 text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{background: "linear-gradient(135deg, #4e27c3, #6c3fc5)"}}
                  >
                    <Icon size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{color: "#6b6880"}}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RequestDemo />
    </>
  );
}
