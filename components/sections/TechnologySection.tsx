import { Server, Lock, GitBranch, Layers } from "lucide-react";

const techPillars = [
  {
    icon: Layers,
    title: "Structured Data Architecture",
    description:
      "Batch records and master records are parsed into structured, relational data — enabling precise parameter-level comparison and cross-batch analysis.",
  },
  {
    icon: GitBranch,
    title: "Configurable Workflow Engine",
    description:
      "Multi-stage review and approval routing adapts to your organization's SOPs, role structures, and escalation paths without code changes.",
  },
  {
    icon: Lock,
    title: "Audit-Ready Design",
    description:
      "Every user action is captured with identity, timestamp, and context — supporting 21 CFR Part 11-style electronic record and signature requirements.",
  },
  {
    icon: Server,
    title: "Enterprise Integration",
    description:
      "Designed for integration with existing ERP, LIMS, and MES systems. API-first approach enables data exchange with your manufacturing ecosystem.",
  },
];

export default function TechnologySection() {
  return (
    <section
      id="technology-overview"
      className="section"
      style={{background: "white"}}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left – Content */}
          <div>
            <span className="section-label mb-5 inline-flex">Technology</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
            >
              Enterprise-Grade Architecture for Life Sciences
            </h2>
            <p className="text-base leading-relaxed" style={{color: "#4b4565"}}>
              AILifeX Labs is built on a foundation designed to meet the reliability, traceability,
              and configurability demands of pharmaceutical operations — from single-site manufacturers
              to multi-site enterprise deployments.
            </p>

            {/* Visual divider */}
            <div className="purple-divider mt-6" />
          </div>

          {/* Right – Tech Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {techPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border card-hover"
                  style={{borderColor: "#e8e4f4", background: "#fafafe"}}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{background: "#f0ebfd"}}
                  >
                    <Icon size={19} style={{color: "#6c3fc5"}} strokeWidth={1.8} />
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{color: "#6b6880"}}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
