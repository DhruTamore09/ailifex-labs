import { Zap, ShieldCheck, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "85%+",
    label: "Reduction in Batch Review Cycle Time",
    subtext: "From days down to minutes",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Audit Readiness & Data Traceability",
    subtext: "ALCOA+ compliant audit trail",
  },
  {
    icon: Zap,
    value: "< 15 Min",
    label: "Average Batch Release Time",
    subtext: "Automated MBR/BMR reconciliation",
  },
  {
    icon: CheckCircle,
    value: "0%",
    label: "OOS Deviation Miss Rate",
    subtext: "Parameter-level specification verification",
  },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 mb-12">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-purple-100 shadow-[0_8px_32px_rgba(108,63,197,0.08)]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/40 border border-purple-100/60 hover:border-purple-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/20">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <div
                    className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-none mb-1"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-purple-950 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
