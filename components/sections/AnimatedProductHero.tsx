"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  Check,
  Bell,
  Sparkles,
  Activity,
} from "lucide-react";

const logMessages = [
  "14:02:14 UTC - Mixing Time: 155 min within tolerance limits",
  "14:02:17 UTC - Temp Excursion 26°C analyzed by RCAAgent",
  "14:02:20 UTC - Filling Volume: 49.8ml verified (Pass)",
  "14:02:23 UTC - Labeling Check: Verified (Pass)",
  "14:02:26 UTC - 100% Batch Reconciliation Complete → CoA Generated",
];

export default function AnimatedProductHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scanStep, setScanStep] = useState(0);
  const [progress, setProgress] = useState(75);
  const [completedSteps, setCompletedSteps] = useState(15);
  const [logs, setLogs] = useState<string[]>([
    "14:02:10 UTC - Ingested MBR Recipe #BR-7890 (Lysovir)",
    "14:02:12 UTC - Raw Material QA status verified: Approved",
  ]);

  // Main animation loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScanStep((prev) => {
        const next = (prev + 1) % 6;
        if (next === 0) {
          setProgress(75);
          setCompletedSteps(15);
          setLogs(["14:02:10 UTC - Ingested MBR Recipe #BR-7890 (Lysovir)"]);
        } else {
          setProgress((p) => Math.min(100, p + 5));
          setCompletedSteps((c) => Math.min(20, c + 1));
          if (next <= logMessages.length) {
            setLogs((prevLogs) => [logMessages[next - 1], ...prevLogs.slice(0, 3)]);
          }
        }
        return next;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const rows = [
    {
      section: "Raw Material QA",
      mbr: "Approved",
      actual: "Approved",
      status: "Approved",
      pass: true,
    },
    {
      section: "Mixing Time",
      mbr: "150 min",
      actual: "155 min",
      status: scanStep >= 1 ? "Approved" : "Pending Review",
      pass: scanStep >= 1,
    },
    {
      section: "Temperature Log",
      mbr: "22°C",
      actual: "26°C",
      status: scanStep >= 2 ? "Exception Resolved" : scanStep === 1 ? "Scanning..." : "Exception Found",
      pass: scanStep >= 2,
      warning: scanStep < 2,
    },
    {
      section: "Filling Volume",
      mbr: "50ml",
      actual: "49.8ml",
      status: scanStep >= 3 ? "Approved" : "Pending Review",
      pass: scanStep >= 3,
    },
    {
      section: "Labeling Check",
      mbr: "Verified",
      actual: "Verified",
      status: scanStep >= 4 ? "Approved" : "Pending Review",
      pass: scanStep >= 4,
    },
  ];

  return (
    <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-purple-100 font-sans text-xs">
      {/* Video Overlay Top Badge */}
      <div className="absolute top-3 right-4 z-30 flex items-center gap-2 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="text-red-400">● DEMO VIDEO</span>
      </div>

      {/* Main SaaS Dashboard Frame */}
      <div className="flex min-h-[560px]">
        {/* Left Navigation Sidebar */}
        <div className="w-48 bg-purple-50/40 border-r border-purple-100 p-4 flex flex-col justify-between shrink-0">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                L
              </div>
              <span className="font-bold text-purple-950 text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                LifeScienceX AI
              </span>
            </div>

            {/* Steps Menu */}
            <div className="space-y-1.5">
              {[
                { name: "Batch Initiation", done: true },
                { name: "Material Verification", done: true },
                { name: "Production Steps", done: true },
                { name: "Quality Testing", done: true },
                { name: "Packaging", done: true },
                { name: "Final Review", active: true },
                { name: "Release", done: false },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-2 rounded-lg text-[11px] font-medium transition-colors ${
                    m.active
                      ? "bg-purple-600 text-white font-semibold shadow-sm shadow-purple-500/20"
                      : "text-gray-600 hover:bg-purple-100/50"
                  }`}
                >
                  <span className="truncate">{m.name}</span>
                  {m.done && <Check size={12} className={m.active ? "text-white" : "text-purple-600"} />}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[10px] text-gray-400 font-medium">
            Version 4.2 · Live Sim
          </div>
        </div>

        {/* Right Dashboard Body */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-white space-y-4 overflow-x-auto">
          {/* Header Tabs Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-purple-100">
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
              <span className="text-purple-700 font-bold border-b-2 border-purple-600 pb-1">
                Dashboard
              </span>
              <span className="hover:text-purple-600 cursor-pointer">Batches</span>
              <span className="hover:text-purple-600 cursor-pointer">Reports</span>
              <span className="hover:text-purple-600 cursor-pointer">Settings</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                <Bell size={14} />
              </div>
              <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs border border-purple-200">
                SJ
              </div>
            </div>
          </div>

          {/* Top 3 Summary Cards */}
          <div className="grid grid-cols-3 gap-3">
            {/* Card 1: Review Completion */}
            <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-bold text-gray-900">Review completion: #BR-7890</span>
                <span className="text-purple-600 font-semibold">(Product: Lysovir)</span>
              </div>
              <div className="text-xs text-gray-500">Review in progress</div>
              {/* Animated Progress Bar */}
              <div className="w-full bg-purple-200/60 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-purple-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-700">
                <span>{progress}% complete</span>
                <span>{completedSteps}/20 steps</span>
              </div>
            </div>

            {/* Card 2: Review Time Trend SVG Chart */}
            <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-bold text-gray-900">Review time</span>
                <span className="text-purple-600 font-mono text-[10px]">~14 min avg</span>
              </div>
              {/* Simple Animated Line Chart */}
              <svg viewBox="0 0 100 30" className="w-full h-8 stroke-purple-600 fill-none stroke-2">
                <path
                  d="M0 25 Q20 20 40 10 T80 18 T100 5"
                  className="transition-all duration-1000"
                  strokeDasharray="200"
                  strokeDashoffset={100 - progress}
                />
              </svg>
              <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
              </div>
            </div>

            {/* Card 3: Exceptions by type */}
            <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-gray-900 mb-1">Exceptions by type</div>
                <div className="space-y-0.5 text-[9px] text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-600" /> Process
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Temperature
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" /> Verified
                  </div>
                </div>
              </div>
              {/* Mini Donut Chart */}
              <div className="w-10 h-10 rounded-full border-4 border-purple-600 border-t-amber-500 border-r-green-500 shrink-0" />
            </div>
          </div>

          {/* Main Batch Record Comparison Table */}
          <div className="space-y-2 relative">
            <div className="flex items-center justify-between text-xs font-bold text-gray-900">
              <span>Batch Record Comparison: #BR-7890 (Product: Lysovir)</span>
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1">
                <Activity size={13} className="animate-pulse" /> Live Scanner Active
              </span>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-purple-100 bg-white relative">
              {/* Laser Scan Line Overlay */}
              <div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_12px_#8b5cf6] transition-all duration-700 pointer-events-none z-20"
                style={{ top: `${(scanStep + 1) * 20}%` }}
              />

              <table className="w-full text-left text-xs">
                <thead className="bg-purple-50/80 text-purple-900 font-semibold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-2.5">Section</th>
                    <th className="p-2.5">MBR Requirement</th>
                    <th className="p-2.5">Actual Value</th>
                    <th className="p-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50 text-gray-700">
                  {rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors duration-300 ${
                        scanStep === idx ? "bg-purple-50/60 font-semibold" : ""
                      }`}
                    >
                      <td className="p-2.5 font-medium text-gray-900">{row.section}</td>
                      <td className="p-2.5 text-gray-500">{row.mbr}</td>
                      <td className="p-2.5 font-mono font-semibold">{row.actual}</td>
                      <td className="p-2.5">
                        <span
                          className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[10px] ${
                            row.warning
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : row.pass
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {row.pass ? <Check size={11} /> : row.warning ? <AlertTriangle size={11} /> : null}
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Live Feed Logs & Reviewers */}
          <div className="grid grid-cols-3 gap-3 pt-1 border-t border-purple-50">
            {/* Live Feed Ticker */}
            <div className="col-span-2 p-2.5 rounded-xl bg-purple-50/40 border border-purple-100 space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1">
                <Sparkles size={11} /> Real-Time Audit Feed
              </div>
              <div className="space-y-0.5 font-mono text-[10px] text-gray-600">
                {logs.map((log, i) => (
                  <div key={i} className="truncate">
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Review Team */}
            <div className="p-2.5 rounded-xl bg-purple-50/40 border border-purple-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-gray-900 mb-0.5">Review Team</div>
                <div className="text-[9px] text-gray-500">Dr. Sarah Jenkins (QA)</div>
                <div className="text-[9px] text-gray-500">Natel Jone (Reviewer)</div>
              </div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[9px] border-2 border-white">
                  SJ
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-400 text-white flex items-center justify-center font-bold text-[9px] border-2 border-white">
                  NJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Control Bar at Bottom Overlay */}
      <div className="bg-purple-950 text-white px-5 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 font-bold transition-colors shadow-sm"
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            {isPlaying ? "Pause Video" : "Play Video"}
          </button>
          <button
            onClick={() => {
              setScanStep(0);
              setProgress(75);
              setCompletedSteps(15);
              setIsPlaying(true);
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 transition-colors"
          >
            <RotateCcw size={12} /> Restart Video
          </button>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-purple-300 font-mono">
          <span>Batch: #BR-7890</span>
          <span>•</span>
          <span>Reconciliation: {progress}%</span>
        </div>
      </div>
    </div>
  );
}
