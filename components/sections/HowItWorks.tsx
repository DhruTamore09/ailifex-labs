import Image from "next/image";
import { Database, Cpu, CheckSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Ingest Batch Data",
    description:
      "Import batch records, master batch records, in-process data, and manufacturing documentation from your existing systems.",
    details: ["Electronic batch record import", "Structured data parsing", "Multi-format support"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Automated Analysis",
    description:
      "The system performs parameter-by-parameter comparison against specifications, flagging deviations and calculating review priorities.",
    details: ["Parameter comparison", "Specification checking", "Exception classification"],
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Reviewer Workflow",
    description:
      "Qualified reviewers receive structured review queues with full context, annotations, and exception details for informed sign-off decisions.",
    details: ["Role-based routing", "Annotation & sign-off", "Complete audit trail"],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section"
      style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 60%, #f0ebfd 100%)"}}
    >
      <div className="container-xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">How It Works</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
          >
            From Data to Decision
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{color: "#4b4565"}}>
            A streamlined three-stage process that transforms complex batch documentation into
            actionable review outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-px z-0"
                    style={{
                      background: "linear-gradient(90deg, #c4b5fd 0%, transparent 100%)",
                      width: "calc(100% - 3rem)",
                      left: "calc(100% - 1rem)",
                    }}
                  />
                )}

                <div className="glass-card p-8 h-full relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-4xl font-black"
                      style={{color: "#ede9fe", fontFamily: "var(--font-jakarta)", lineHeight: 1}}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{background: "linear-gradient(135deg, #4e27c3, #6c3fc5)"}}
                    >
                      <Icon size={20} color="white" strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{color: "#4b4565"}}>
                    {step.description}
                  </p>

                  {/* Detail Bullets */}
                  <ul className="flex flex-col gap-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm" style={{color: "#6c3fc5"}}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: "#6c3fc5"}} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagram Image */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border" style={{borderColor: "#e8e4f4"}}>
            <Image
              src="/images/how_it_works.png"
              alt="LifeScienceX AI batch review process flow: data ingestion, automated analysis, and reviewer workflow"
              width={900}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
