"use client";

import { useState, useEffect } from "react";
import {
  FileCheck,
  AlertTriangle,
  GitPullRequest,
  CheckCircle2,
  ShieldCheck,
  FileSignature,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Sparkles,
  Check,
  AlertCircle,
  Zap,
  Lock,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "1. Record Audit",
    shortName: "MBR vs BMR Audit",
    icon: FileCheck,
    agent: "ReviewAgent",
    badge: "Stage 1: Automated Audit",
    heading: "Automated Batch Record Reconciliation",
    summary: "Scans 100% of process parameters (temperature, speed, pressure) against validated master specifications in seconds.",
    statNumber: "148 / 148",
    statLabel: "Parameters Verified",
    statColor: "#4e27c3",
    tableData: [
      { name: "Blender Speed", target: "450 RPM ± 10", actual: "452 RPM", status: "PASS", pass: true },
      { name: "Granulation Liquid Temp", target: "65.0°C - 70.0°C", actual: "67.4°C", status: "PASS", pass: true },
      { name: "Main Compression Force", target: "22.0 kN ± 1.5", actual: "24.8 kN", status: "EXCURSION", pass: false },
      { name: "Tablet Hardness", target: "120 - 150 N", actual: "135.2 N", status: "PASS", pass: true },
    ],
  },
  {
    step: 2,
    title: "2. Deviation Scan",
    shortName: "OOS Excursion Triage",
    icon: AlertTriangle,
    agent: "DeviationAgent",
    badge: "Stage 2: Excursion Scan",
    heading: "Instant Deviation & Anomaly Detection",
    summary: "Automatically flags out-of-spec readings and classifies them into Process, Equipment, Material, or Operator categories.",
    statNumber: "1 Flagged",
    statLabel: "Minor Excursion",
    statColor: "#d97706",
    categories: [
      { name: "Equipment / Machine", desc: "Compression Pressure Drift", active: true },
      { name: "Process Parameters", desc: "Normal Range", active: false },
      { name: "Material Potency", desc: "Verified Compliant", active: false },
      { name: "Operator Signatures", desc: "Dual Signatures Verified", active: false },
    ],
  },
  {
    step: 3,
    title: "3. Root Cause",
    shortName: "6M Fishbone Analysis",
    icon: GitPullRequest,
    agent: "RCAAgent",
    badge: "Stage 3: 6M Investigation",
    heading: "Structured 6M Root Cause Analysis",
    summary: "Uses the 6M Fishbone model (Machine, Method, Material, etc.) to isolate the exact cause of process deviations.",
    statNumber: "96.4%",
    statLabel: "Historical AI Match",
    statColor: "#6c3fc5",
    causeHighlights: [
      { label: "Identified Cause", val: "Hydraulic Die Seal Wear (Machine Branch)" },
      { label: "5-Whys Analysis", val: "Seal wear after 1,200 hrs → Hydraulic pressure drift" },
      { label: "Historical Solution", val: "Resolved in Lot B-8821 via seal replacement" },
    ],
  },
  {
    step: 4,
    title: "4. CAPA Actions",
    shortName: "Prescribed CAPA Plan",
    icon: CheckCircle2,
    agent: "CAPAAgent",
    badge: "Stage 4: CAPA Prescription",
    heading: "Targeted Corrective & Preventive Actions",
    summary: "Generates clear containment steps and preventive action plans with estimated completion times.",
    statNumber: "94.2%",
    statLabel: "Recurrence Reduction",
    statColor: "#16a34a",
    tasks: [
      { type: "Immediate Action", title: "Replace Compression Die Seal & Recalibrate", time: "2 Hours" },
      { type: "Preventive Action", title: "Automate PM Maintenance Lockout in MES", time: "2 Days" },
    ],
  },
  {
    step: 5,
    title: "5. Risk Score",
    shortName: "ICH Q9 Risk Score",
    icon: ShieldCheck,
    agent: "RiskAgent",
    badge: "Stage 5: Quality Risk Rating",
    heading: "ICH Q9 Batch Failure Risk Scoring",
    summary: "Calculates an objective risk score to confirm whether a batch qualifies for fast-track release.",
    statNumber: "18.4 / 100",
    statLabel: "LOW RISK (Fast-Track Eligible)",
    statColor: "#16a34a",
    riskBreakdown: [
      { name: "Critical Deviations", val: "0 Found (Low Risk)" },
      { name: "Yield & Mass Balance", val: "Within 99.4% Spec" },
      { name: "Data Integrity & ALCOA+", val: "100% Compliant" },
    ],
  },
  {
    step: 6,
    title: "6. Batch Release",
    shortName: "QA Sign-off & Release",
    icon: FileSignature,
    agent: "InspectionAgent",
    badge: "Stage 6: Batch Disposition",
    heading: "Structured QA Sign-off & Disposition",
    summary: "Executes structured electronic sign-off, records user identity with timestamp, and locks the complete audit trail record.",
    statNumber: "RELEASED",
    statLabel: "QA Disposition Sign-off",
    statColor: "#16a34a",
    releaseDetails: {
      signer: "Dr. Sarah Jenkins, QA Director",
      timestamp: "2026-08-29 14:15:02 UTC",
      integrity: "Audit Trail & Electronic Record Locked",
    },
  },
];

export default function MotionScenarios() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = steps[activeIdx];
  const IconComp = current.icon;

  return (
    <section
      id="batch-review-simulator"
      className="section py-20"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f7f4fe 50%, #ffffff 100%)",
      }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex justify-center mb-3">
            <span className="section-label">
              <Sparkles size={14} className="text-purple-600" />
              Automated Batch Disposition Workflow
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jakarta)", color: "#0f0a1e", letterSpacing: "-0.02em" }}
          >
            How LifeScienceX AI <span className="gradient-text">Simplifies Batch Release</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            A clear, 6-step automated process that takes pharmaceutical batch review from days down to under 15 minutes.
          </p>
        </div>

        {/* Clean Light Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {steps.map((st, idx) => {
            const isActive = idx === activeIdx;
            const TabIcon = st.icon;
            return (
              <button
                key={st.step}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? "bg-white border-purple-500 shadow-md shadow-purple-500/10 scale-[1.02]"
                    : "bg-white/60 border-purple-100 hover:bg-white hover:border-purple-200 text-gray-600"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isActive ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    Step {st.step}
                  </span>
                  <TabIcon size={15} className={isActive ? "text-purple-600" : "text-gray-400"} />
                </div>
                <div
                  className={`text-xs font-bold truncate ${isActive ? "text-purple-900" : "text-gray-700"}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {st.shortName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Play / Controls Bar */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 px-1">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-200 text-purple-700 font-semibold shadow-sm hover:bg-purple-50 transition-colors"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </button>
            <button
              onClick={() => {
                setActiveIdx(0);
                setIsPlaying(true);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-purple-50 text-gray-600 transition-colors"
            >
              <RotateCcw size={13} /> Reset
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Step {activeIdx + 1} of 6</span>
            <div className="flex items-center gap-1">
              <button
                disabled={activeIdx === 0}
                onClick={() => {
                  setActiveIdx((p) => Math.max(0, p - 1));
                  setIsPlaying(false);
                }}
                className="p-1 rounded bg-white border border-gray-200 disabled:opacity-30 hover:bg-purple-50"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                disabled={activeIdx === steps.length - 1}
                onClick={() => {
                  setActiveIdx((p) => Math.min(steps.length - 1, p + 1));
                  setIsPlaying(false);
                }}
                className="p-1 rounded bg-white border border-gray-200 disabled:opacity-30 hover:bg-purple-50"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Stage Display Card */}
        <div className="bg-white rounded-2xl border border-purple-100 p-6 md:p-8 shadow-xl shadow-purple-500/5 relative">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-purple-50">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <IconComp size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block">
                  {current.badge}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {current.heading}
                </h3>
              </div>
            </div>

            {/* Clean Stat Metric Badge */}
            <div className="bg-purple-50/60 border border-purple-100 px-5 py-2.5 rounded-xl text-right shrink-0">
              <div className="text-xs text-gray-500 font-medium">{current.statLabel}</div>
              <div className="text-lg font-bold" style={{ color: current.statColor, fontFamily: "var(--font-jakarta)" }}>
                {current.statNumber}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {current.summary}
          </p>

          {/* STEP 1: Simple Table */}
          {activeIdx === 0 && (
            <div className="overflow-x-auto rounded-xl border border-purple-100 bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-purple-50/70 text-purple-900 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3">Parameter / Spec</th>
                    <th className="p-3">Target Specs</th>
                    <th className="p-3">Actual Value</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50 text-gray-700">
                  {current.tableData?.map((row, i) => (
                    <tr key={i} className="hover:bg-purple-50/30">
                      <td className="p-3 font-semibold text-gray-900">{row.name}</td>
                      <td className="p-3 text-gray-500">{row.target}</td>
                      <td className="p-3 font-mono font-medium">{row.actual}</td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${
                            row.pass ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {row.pass ? <Check size={13} /> : <AlertCircle size={13} />}
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* STEP 2: Deviation Cards */}
          {activeIdx === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.categories?.map((cat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all ${
                    cat.active
                      ? "bg-purple-50/80 border-purple-300 text-purple-900"
                      : "bg-white border-purple-100 text-gray-500 opacity-75"
                  }`}
                >
                  <div className="text-xs font-bold text-gray-900 mb-1">{cat.name}</div>
                  <div className="text-xs text-purple-700 font-medium">{cat.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: Root Cause Bullet Cards */}
          {activeIdx === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {current.causeHighlights?.map((ch, i) => (
                <div key={i} className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                  <div className="text-xs font-semibold text-purple-600 mb-1">{ch.label}</div>
                  <div className="text-xs font-bold text-gray-900">{ch.val}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: Simple CAPA Tasks */}
          {activeIdx === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.tasks?.map((t, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-purple-100 shadow-sm space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                    {t.type}
                  </span>
                  <h4 className="text-xs font-bold text-gray-900">{t.title}</h4>
                  <div className="text-[11px] text-gray-500">Estimated Effort: {t.time}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 5: Risk Breakdown */}
          {activeIdx === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.riskBreakdown?.map((rb, i) => (
                <div key={i} className="p-4 rounded-xl bg-green-50/50 border border-green-100 text-center">
                  <div className="text-xs font-semibold text-green-800 mb-1">{rb.name}</div>
                  <div className="text-xs font-bold text-green-700">{rb.val}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 6: Clean 1-Click Release */}
          {activeIdx === 5 && (
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100/50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
                  <Lock size={14} /> Electronic Authorized Sign-off
                </div>
                <div className="text-sm font-bold text-gray-900">{current.releaseDetails?.signer}</div>
                <div className="text-xs text-gray-500">{current.releaseDetails?.integrity}</div>
              </div>

              <div className="shrink-0 text-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 text-white text-xs font-bold shadow-md shadow-green-600/20 mb-1">
                  <CheckCircle2 size={16} /> Batch Released
                </span>
                <div className="text-[10px] text-gray-500 font-mono">Timestamped & WORM Locked</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
