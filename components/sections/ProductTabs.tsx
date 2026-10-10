"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FileCheck,
  GitMerge,
  GitCompare,
  FileText,
  ShieldCheck,
  AlertTriangle,
  LayoutDashboard,
  Users,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Lock,
  BarChart3,
  SlidersHorizontal,
  CheckSquare,
  ArrowRight,
  Layers,
  Database,
  Workflow,
  Cpu,
} from "lucide-react";

// VeriBatch features
const veribatchFeatures = [
  {
    id: "mbr-golden",
    icon: GitCompare,
    title: "MBR Golden Target Verification",
    headline: "Automated Extraction & Master Record Matching",
    description:
      "Extracts execution data from paper scans, hybrid PDFs, or digital EBRs and performs 100% parameter-level verification against the Master Batch Record (MBR)—verifying Critical Process Parameters (CPPs), CQAs, and step sequence.",
    points: [
      "AI vision & structured data extraction",
      "Nominal, USL, LSL, NMT & NLT limit checks",
      "Chronological process sequence audit",
    ],
  },
  {
    id: "multi-system",
    icon: Database,
    title: "Multi-System Cross-Validation",
    headline: "Harmonizing SOPs, ERP, MES & LIMS Data",
    description:
      "Eliminates data silos across the plant. Automatically cross-validates batch execution against active SOP revisions, ERP material lots & BOM, MES machine telemetry, LIMS release testing, and predefined business rules.",
    points: [
      "ERP material lot & expiration verification",
      "MES shop-floor sensor telemetry auditing",
      "LIMS analytical CoA release synchronization",
    ],
  },
  {
    id: "discrepancies",
    icon: AlertTriangle,
    title: "Discrepancy & Deviation Intelligence",
    headline: "Real-Time OOS, OOT & Anomaly Detection",
    description:
      "Instantly identifies parameter excursions, statistical out-of-trend drifts, missing witness signatures, and yield reconciliation gaps with automated severity classification (Critical, Major, Minor).",
    points: [
      "Automated OOS & OOT excursion classification",
      "ALCOA+ signature & data integrity audit",
      "Yield & mass balance reconciliation",
    ],
  },
  {
    id: "downstream-workflows",
    icon: Workflow,
    title: "Automated Downstream Workflows",
    headline: "Review-by-Exception, SAP Release & QMS Routing",
    description:
      "Triggers automated downstream actions tailored to your requirements: fast-track Review-by-Exception (RbE) with automated ERP release status triggers, or automated QMS deviation and CAPA initiation.",
    points: [
      "Review-by-Exception (RbE) fast-tracking",
      "Automated ERP inventory release triggers",
      "Auto-generated QMS deviation & CAPA drafts",
    ],
  },
  {
    id: "batch-review",
    icon: FileText,
    title: "Batch Record Review Workspace",
    headline: "Contextual Human-in-the-Loop QA Review",
    description:
      "Reviewers access a unified, form-based workspace of the complete batch record—with side-by-side MBR specifications, multi-system telemetry, discrepancy flags, and collaborative annotation threads.",
    points: [
      "Side-by-side MBR vs BMR parameter view",
      "Inline reviewer query & annotation threads",
      "21 CFR Part 11 compliant digital sign-off",
    ],
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Review Dashboard & Governance",
    headline: "Real-Time Batch Disposition Visibility",
    description:
      "Provides QA directors and Qualified Persons with real-time visibility across active batch pipelines—monitoring review cycle times, reviewer SLA countdowns, and plant-wide exception analytics.",
    points: [
      "Real-time batch disposition pipeline",
      "Reviewer workload & SLA performance tracking",
      "ICH Q9 batch risk scoring & audit logs",
    ],
  },
];

// ChangeSure features
const changesureFeatures = [
  {
    id: "digital-change-workflow",
    icon: GitMerge,
    title: "End-to-End Digital Workflow",
    headline: "Complete Change Control Lifecycle Management",
    description:
      "Digitizes the entire change control lifecycle—from initial request logging and impact evaluation to approval, execution, post-implementation verification, and QA sign-off in one unified platform.",
    points: [
      "Standardized change request logging & categorisation",
      "Configurable approval routing per change class (Minor/Major)",
      "Integrated task assignment & milestone tracking",
    ],
  },
  {
    id: "impact-risk-assessment",
    icon: SlidersHorizontal,
    title: "Impact & Risk Assessment",
    headline: "Cross-Functional Risk & Impact Evaluation",
    description:
      "Enables multi-departmental evaluations (Engineering, Regulatory, QA, Operations) using ICH Q9 risk matrices. Identify affected systems, documents, equipment, and validation statuses prior to change authorization.",
    points: [
      "ICH Q9 compliant risk score calculation",
      "System, facility & regulatory impact matrices",
      "Cross-functional stakeholder feedback & review",
    ],
  },
  {
    id: "audit-trail-signatures",
    icon: Lock,
    title: "Tamper-Evident Audit Trails",
    headline: "21 CFR Part 11 & ALCOA+ Compliant Traceability",
    description:
      "Maintains an immutable, time-stamped log of every edit, approval, comment, and document revision. Dual-factor electronic signatures ensure full compliance with global regulatory standards.",
    points: [
      "21 CFR Part 11 & EU Annex 11 e-signatures",
      "Complete version control & audit history logs",
      "Tamper-evident system log exports",
    ],
  },
  {
    id: "implementation-verification",
    icon: CheckSquare,
    title: "Implementation & Verification",
    headline: "Post-Change Execution & Effectiveness Verification",
    description:
      "Ensure changes are executed strictly as planned. Track action item completion, protocol executions, and conduct formal post-implementation effectiveness checks before final QA closure.",
    points: [
      "Action item assignment with automated due dates",
      "Verification protocols & evidence attachments",
      "Scheduled effectiveness review reminders",
    ],
  },
  {
    id: "realtime-dashboards",
    icon: BarChart3,
    title: "Real-Time Oversight & Reporting",
    headline: "Multi-Site Dashboards & Compliance Metrics",
    description:
      "Provide executive leadership and quality teams with complete visibility into change queues, cycle times, overdue action items, and risk profiles across all organizational sites.",
    points: [
      "Real-time change queue & status tracking",
      "Cycle time analytics & bottleneck detection",
      "Site-by-site compliance reporting",
    ],
  },
];

export default function ProductTabs() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"veribatch" | "changesure">("veribatch");

  useEffect(() => {
    const syncTabFromUrl = () => {
      // Check URL query searchParams or hash
      const tabParam = searchParams.get("tab") || searchParams.get("product");
      const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";

      if (tabParam === "changesure" || hash === "changesure") {
        setActiveTab("changesure");
      } else if (tabParam === "veribatch" || hash === "veribatch") {
        setActiveTab("veribatch");
      } else {
        setActiveTab("veribatch");
      }
    };

    syncTabFromUrl();

    const handleCustomTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail === "changesure" || customEvent.detail === "veribatch") {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener("hashchange", syncTabFromUrl);
    window.addEventListener("popstate", syncTabFromUrl);
    window.addEventListener("product-tab-change", handleCustomTabChange);
    return () => {
      window.removeEventListener("hashchange", syncTabFromUrl);
      window.removeEventListener("popstate", syncTabFromUrl);
      window.removeEventListener("product-tab-change", handleCustomTabChange);
    };
  }, [searchParams]);

  const handleTabChange = (tab: "veribatch" | "changesure") => {
    setActiveTab(tab);
    // Update hash in address bar cleanly without full page jump
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `/product?tab=${tab}#${tab}`);
    }
  };

  return (
    <div className="w-full pt-[76px]">
      {/* Product Selection Tabs Navigation Header */}
      <div id="product-selection-tabs" className="sticky top-[76px] z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm py-4">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Product View:
            </div>

            {/* Tab Buttons Pill */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 w-full sm:w-auto">
              <button
                type="button"
                id="tab-btn-veribatch"
                onClick={() => handleTabChange("veribatch")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                  activeTab === "veribatch"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <FileCheck size={18} />
                <span>VeriBatch™</span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide ${
                    activeTab === "veribatch"
                      ? "bg-white/20 text-white"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  BMR Review
                </span>
              </button>

              <button
                type="button"
                id="tab-btn-changesure"
                onClick={() => handleTabChange("changesure")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                  activeTab === "changesure"
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <GitMerge size={18} />
                <span>ChangeSure™</span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide ${
                    activeTab === "changesure"
                      ? "bg-white/20 text-white"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  Change Control
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Sparkles size={14} className="text-purple-600" />
              <span>Switch tabs to view specific product architecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* TAB 1: VERIBATCH CONTENT */}
      {activeTab === "veribatch" && (
        <div id="veribatch" className="animate-in fade-in duration-300">
          {/* Product Banner */}
          <section
            className="py-16 md:py-20"
            style={{ background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 60%, white 100%)" }}
          >
            <div className="container-xl">
              <div className="max-w-3xl mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-4">
                  <FileCheck size={15} />
                  Flagship Platform · BMR Review System
                </span>
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.03em" }}
                >
                  VeriBatch™ <span className="gradient-text">BMR Review System</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Extracts executed Batch Manufacturing Record (BMR) data and validates it against the <strong>Master Batch Record (MBR)</strong> as the primary golden standard—cross-checked with SOPs, ERP, MES, LIMS, and predefined business rules—to identify discrepancies instantly and automate downstream release workflows.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request VeriBatch™ Demo
                    <ChevronRight size={16} />
                  </Link>
                  <button
                    type="button"
                    id="veribatch-hero-switch-btn"
                    onClick={() => {
                      handleTabChange("changesure");
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="btn-secondary inline-flex items-center gap-2 text-xs cursor-pointer"
                  >
                    View ChangeSure™ Platform <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* VeriBatch Interface Banner */}
              <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-2xl shadow-purple-500/10 bg-white">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-300 ml-2">
                      LifeScienceX AI VeriBatch™ MBR/BMR Multi-System Engine · Lot BT-2024-1185
                    </span>
                  </div>
                  <span className="bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-purple-400/30">
                    QA Sign-off Ready
                  </span>
                </div>
                <Image
                  src="/images/product_screenshot.png"
                  alt="VeriBatch product screenshot showing MBR vs BMR parameter comparison interface"
                  width={1200}
                  height={650}
                  className="w-full object-cover"
                />
              </div>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-purple-700 font-jakarta">95%</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Faster Review Cycle Time</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-purple-700 font-jakarta">100%</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">MBR Parameter Check</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-purple-700 font-jakarta">ALCOA+</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Audit Trail & E-Signatures</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-purple-700 font-jakarta">0 Misses</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Automated Discrepancy Triage</div>
                </div>
              </div>

              {/* Multi-System Architecture Banner */}
              <div className="mt-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#181135] to-[#28145a] text-white border border-purple-500/20 shadow-xl">
                <div className="max-w-3xl mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/30 mb-3">
                    <Sparkles size={14} /> Multi-System Validation Suite
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-jakarta text-white mb-2">
                    MBR as the Golden Baseline · Connected Plant Intelligence
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    VeriBatch extracts batch-record data, reconciles it against the Master Batch Record (MBR), and validates every parameter across your enterprise systems and custom business rules.
                  </p>
                </div>

                {/* 6 Connected Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-400/40">
                    <div className="flex items-center gap-2 text-purple-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      ⭐ Master Batch Record (MBR)
                    </div>
                    <div className="text-xs text-slate-200">The Primary Golden Target: CPPs, CQAs, recipe sequences, and specification limits.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <div className="flex items-center gap-2 text-sky-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      SOPs & Execution Guidelines
                    </div>
                    <div className="text-xs text-slate-200">Procedural compliance, environmental sampling frequencies, and current active SOP versions.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      ERP (SAP / Oracle)
                    </div>
                    <div className="text-xs text-slate-200">Raw material lots, expiration dates, BOM quantities, and inventory reconciliation.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      MES & Plant Telemetry
                    </div>
                    <div className="text-xs text-slate-200">In-process machine sensor data, equipment calibration status, and ALCOA+ timestamps.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      LIMS (Lab Information)
                    </div>
                    <div className="text-xs text-slate-200">Finished product release tests, Certificates of Analysis (CoA), assay potency, and sterility.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <div className="flex items-center gap-2 text-violet-300 text-xs font-bold mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                      Predefined Business Rules
                    </div>
                    <div className="text-xs text-slate-200">Site-specific exception tolerances, CDMO client release gates, and disposition logic.</div>
                  </div>
                </div>

                {/* Automated Downstream Bar */}
                <div className="p-5 rounded-2xl bg-white/5 border border-purple-400/20 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                      Automated Downstream Actions
                    </div>
                    <div className="text-xs text-slate-300">
                      Fast-track Review-by-Exception (RbE) directly to ERP batch release, or auto-route flagged discrepancies into TrackWise / Veeva QMS with pre-drafted 6M root cause analysis.
                    </div>
                  </div>
                  <Link href="/contact" className="btn-primary text-xs shrink-0 py-2.5 px-5 bg-purple-500 hover:bg-purple-600 border-none">
                    Schedule Validation Demo
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* VeriBatch Feature Cards */}
          <section className="section py-20 bg-white border-t border-slate-100">
            <div className="container-xl">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="section-label mb-3 inline-flex">VeriBatch™ Architecture</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-jakarta">
                  Core Modules & Workflow Features
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {veribatchFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="p-7 rounded-2xl border border-purple-100 bg-purple-50/20 hover:bg-white hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-jakarta mb-2">{feat.title}</h3>
                      <div className="text-xs font-semibold text-purple-600 mb-3">{feat.headline}</div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                      <ul className="space-y-2 border-t border-purple-100/60 pt-3">
                        {feat.points.map((pt, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <CheckCircle2 size={13} className="text-purple-600 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: CHANGESURE CONTENT */}
      {activeTab === "changesure" && (
        <div id="changesure" className="animate-in fade-in duration-300">
          {/* Product Banner */}
          <section
            className="py-16 md:py-20"
            style={{ background: "linear-gradient(160deg, #f0f9ff 0%, #f8fafc 60%, white 100%)" }}
          >
            <div className="container-xl">
              <div className="max-w-3xl mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold mb-4">
                  <GitMerge size={15} />
                  Enterprise Quality Governance · Change Control
                </span>
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.03em" }}
                >
                  ChangeSure™ <span className="text-sky-600">Change Control Platform</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Digitizes the complete lifecycle of operational and quality changes—from request and impact assessment to approval, implementation, verification, and closure in a single secure, traceable workflow built for pharmaceutical & biotech manufacturing.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary bg-sky-600 hover:bg-sky-700 border-sky-600">
                    Request ChangeSure™ Demo
                    <ChevronRight size={16} />
                  </Link>
                  <button
                    type="button"
                    id="changesure-hero-switch-btn"
                    onClick={() => {
                      handleTabChange("veribatch");
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="btn-secondary inline-flex items-center gap-2 text-xs border-purple-200 text-purple-900 hover:bg-purple-50 cursor-pointer"
                  >
                    View VeriBatch™ System <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* ChangeSure Interactive Dark UI Portal Display */}
              <div className="rounded-2xl overflow-hidden border border-sky-200 shadow-2xl shadow-sky-900/10 bg-white">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-300 ml-2">
                      ChangeSure™ Governance Portal · Request CC-2026-0492
                    </span>
                  </div>
                  <span className="bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-sky-400/30">
                    21 CFR Part 11 Verified
                  </span>
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-xs">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400">Change Request</div>
                      <div className="text-base font-bold text-sky-300 font-mono mt-1">CC-2026-0492</div>
                      <div className="text-[10px] text-slate-400 mt-1">Bioreactor Mod (Facility A)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400">Risk Matrix</div>
                      <div className="text-base font-bold text-amber-300 mt-1">ICH Q9 Level 3</div>
                      <div className="text-[10px] text-slate-400 mt-1">Cross-Functional Approval</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400">Governance Stage</div>
                      <div className="text-base font-bold text-emerald-300 mt-1">QA Release Verification</div>
                      <div className="text-[10px] text-slate-400 mt-1">Electronic Sign-Off Ready</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400">Audit Status</div>
                      <div className="text-base font-bold text-white mt-1">ALCOA+ Compliant</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Zero Discrepancies</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Lock className="text-sky-400 shrink-0" size={20} />
                      <div className="text-xs">
                        <span className="font-bold text-white">Secure Audit Trail Locked: </span>
                        <span className="text-slate-300">Multidisciplinary sign-offs secured with dual-factor e-signatures.</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="text-xs bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Request Interactive Demo
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-sky-700 font-jakarta">End-to-End</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Traceable Change Lifecycle</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-sky-700 font-jakarta">ICH Q9</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Risk Assessment Matrix</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-sky-700 font-jakarta">Multi-Site</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Global Quality Oversight</div>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-sky-700 font-jakarta">Part 11</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Electronic Approvals & Audit</div>
                </div>
              </div>
            </div>
          </section>

          {/* ChangeSure Feature Cards */}
          <section className="section py-20 bg-white border-t border-slate-100">
            <div className="container-xl">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="section-label mb-3 inline-flex bg-sky-100 text-sky-800 border-sky-200">
                  ChangeSure™ Governance Framework
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-jakarta">
                  Core Change Control Modules
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {changesureFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      className="p-7 rounded-2xl border border-sky-200 bg-sky-50/20 hover:bg-white hover:border-sky-400 transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-jakarta mb-2">{feat.title}</h3>
                      <div className="text-xs font-semibold text-sky-600 mb-3">{feat.headline}</div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                      <ul className="space-y-2 border-t border-sky-100 pt-3">
                        {feat.points.map((pt, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <CheckCircle2 size={13} className="text-sky-600 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
