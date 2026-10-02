import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisons = [
  {
    feature: "Review Speed & Cycle Time",
    traditional: "1 to 5 days of manual page-by-page document verification",
    veribatch: "Under 15 minutes automated reconciliation & audit",
  },
  {
    feature: "Deviation & Out-of-Spec (OOS) Detection",
    traditional: "Manual line inspection; high risk of oversight or human error",
    veribatch: "100% parameter-level specification verification in seconds",
  },
  {
    feature: "Root Cause & Exception Triage",
    traditional: "Siloed investigations; delayed CAPA logging and sign-off",
    veribatch: "Automated 6M Fishbone RCA & ICH Q9 risk scoring",
  },
  {
    feature: "Audit Readiness & Governance",
    traditional: "Paper-heavy records; fragmented audit trails and archives",
    veribatch: "ALCOA+ compliant, immutable digital audit trail with 1-click export",
  },
  {
    feature: "Decision Authority",
    traditional: "Dependent on physical paper routing between departments",
    veribatch: "Human-in-the-loop QA sign-off with role-based routing",
  },
];

export default function ComparisonSection() {
  return (
    <section className="section py-20 bg-slate-50 border-y border-purple-100">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            Operational Comparison
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-900"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Traditional Review vs{" "}
            <span className="gradient-text">VeriBatch™ AI</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            See how LifeScienceX AI VeriBatch™ modernizes pharmaceutical manufacturing quality by transforming slow, paper-based BMR reviews into instant digital operational intelligence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl shadow-purple-500/5">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-purple-950 text-white font-bold text-xs uppercase tracking-wider">
            <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-purple-800/50">
              Evaluation Criteria
            </div>
            <div className="md:col-span-4 p-4 text-amber-300 border-b md:border-b-0 md:border-r border-purple-800/50">
              Traditional Paper BMR Review
            </div>
            <div className="md:col-span-4 p-4 text-emerald-400">
              LifeScienceX AI VeriBatch™ AI Platform
            </div>
          </div>

          <div className="divide-y divide-purple-50 text-xs">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 items-stretch transition-colors hover:bg-purple-50/20"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 p-4 font-bold text-slate-900 bg-slate-50/50 md:border-r border-purple-50 flex items-center">
                  {item.feature}
                </div>

                {/* Traditional */}
                <div className="md:col-span-4 p-4 text-slate-600 md:border-r border-purple-50 flex items-start gap-2 bg-amber-50/20">
                  <XCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                {/* VeriBatch */}
                <div className="md:col-span-4 p-4 text-slate-900 font-semibold flex items-start gap-2 bg-emerald-50/30">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.veribatch}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold" style={{ fontFamily: "var(--font-jakarta)" }}>
                Ready to accelerate your batch disposition timeline?
              </div>
              <div className="text-xs text-purple-200">
                Experience VeriBatch™ live with your organization's batch records.
              </div>
            </div>
            <Link href="/contact" className="btn-primary text-xs px-6 py-3 shrink-0">
              Schedule a Custom Demo
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
