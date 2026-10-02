import { Target, UserCheck, BookOpen, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Precision at Scale",
    description:
      "Systematic comparison logic checks every parameter against master record specs — reducing human oversight gaps across high-volume production.",
    stat: "100%",
    statLabel: "Parameter Verification",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop Control",
    description:
      "Automated analysis acts strictly as an advisory tool — ensuring qualified human QA professionals maintain full decision authority over final batch release.",
    stat: "Human-Led",
    statLabel: "QA Authorization",
  },
  {
    icon: BookOpen,
    title: "Complete Traceability",
    description:
      "Every user action, annotation, and decision is logged with user identity and timestamp, creating an unbroken audit trail for the life of the batch.",
    stat: "Full",
    statLabel: "Audit Trail",
  },
  {
    icon: TrendingUp,
    title: "Operational Visibility",
    description:
      "Executive dashboards provide real-time insight into batch disposition status, pending QA queues, exception trends, and throughput metrics.",
    stat: "Real-Time",
    statLabel: "QA Dashboards",
  },
];

export default function KeyBenefits() {
  return (
    <section id="benefits" className="section" style={{background: "white"}}>
      <div className="container-xl">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="section-label mb-4 inline-flex">Key Benefits</span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
            >
              Built for the Demands of Pharmaceutical Quality
            </h2>
          </div>
          <p className="text-base max-w-xs" style={{color: "#4b4565", flexShrink: 0}}>
            Designed with the rigor of GMP environments in mind — structured, traceable, and reviewer-friendly.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                id={`benefit-${i + 1}`}
                className="flex flex-col p-6 rounded-2xl border card-hover"
                style={{
                  borderColor: "#e8e4f4",
                  background: "white",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{background: "#f5f0ff"}}
                >
                  <Icon size={21} style={{color: "#6c3fc5"}} strokeWidth={1.8} />
                </div>

                {/* Stat Badge */}
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold block"
                    style={{color: "#4e27c3", fontFamily: "var(--font-jakarta)"}}
                  >
                    {benefit.stat}
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{color: "#8b879e"}}>
                    {benefit.statLabel}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold mb-2"
                  style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color: "#6b6880"}}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
