"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Dna,
  Atom,
  Activity,
  ShieldCheck,
  Zap,
  Sliders,
  Maximize2,
} from "lucide-react";

export default function LifeSciencesVideoHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<"dna" | "molecule" | "bioreactor">("dna");
  const [rotationSpeed, setRotationSpeed] = useState(0.015);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tickerIdx, setTickerIdx] = useState(0);

  const telemetryLogs = [
    "[14:12:08 UTC] Batch Telemetry: pH 7.40 | Temp 22.4°C | Dissolution 94.2% | Sterile Lock Active",
    "[14:12:12 UTC] DNA Sequence Alignment Verified: Base Pairs Match 100% | Target Acquired",
    "[14:12:16 UTC] Molecular Mass 508.42 g/mol | Assay Potency 99.85% | Cleanroom ISO Class 5",
    "[14:12:20 UTC] Real-time Bioreactor Wave Signal: Zero Excursion | Rate 450 RPM (Pass)",
  ];

  // Continuous Telemetry Ticker Loop
  useEffect(() => {
    if (!isPlaying) return;
    const tickerTimer = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % telemetryLogs.length);
    }, 3500);
    return () => clearInterval(tickerTimer);
  }, [isPlaying]);

  // 60fps Interactive HTML5 Canvas Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // Resize handler
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight || 540;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate background particle stars
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speedY: Math.random() * 0.4 + 0.1,
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep Scientific Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGrad.addColorStop(0, "#0a031a");
      bgGrad.addColorStop(0.5, "#160933");
      bgGrad.addColorStop(1, "#0d0422");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Subdued Radial Grid Lines
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
      ctx.lineWidth = 1;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let r = 50; r < Math.max(canvas.width, canvas.height); r += 70) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw Floating Micro-particles
      particles.forEach((p) => {
        if (isPlaying) {
          p.y -= p.speedY;
          if (p.y < 0) p.y = canvas.height;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 181, 253, ${p.alpha})`;
        ctx.fill();
      });

      // MODE 1: 3D DNA DOUBLE HELIX ANIMATION
      if (viewMode === "dna") {
        const strandLength = 26;
        const radius = Math.min(canvas.width, canvas.height) * 0.18;
        const spacing = 16;
        const startY = centerY - (strandLength * spacing) / 2;

        if (isPlaying) {
          angle += rotationSpeed;
        }

        for (let i = 0; i < strandLength; i++) {
          const y = startY + i * spacing;
          const currentAngle = angle + i * 0.25;

          // Strand A
          const xA = centerX + Math.cos(currentAngle) * radius + mousePos.x * 20;
          const zA = Math.sin(currentAngle) * radius;

          // Strand B (180 deg offset)
          const xB = centerX + Math.cos(currentAngle + Math.PI) * radius + mousePos.x * 20;
          const zB = Math.sin(currentAngle + Math.PI) * radius;

          // Scale & Opacity based on Z depth
          const scaleA = (zA + radius * 2) / (radius * 3);
          const scaleB = (zB + radius * 2) / (radius * 3);

          // Draw Connecting Hydrogen Base-Pair Rung
          ctx.beginPath();
          ctx.moveTo(xA, y);
          ctx.lineTo(xB, y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${Math.max(0.15, (scaleA + scaleB) / 4)})`;
          ctx.lineWidth = 2 * Math.max(scaleA, scaleB);
          ctx.stroke();

          // Draw Node A (Strand 1 - Violet/Cyan)
          ctx.beginPath();
          ctx.arc(xA, y, 5 * scaleA, 0, Math.PI * 2);
          ctx.fillStyle = zA > 0 ? "#a78bfa" : "#6c3fc5";
          ctx.shadowColor = "#8b5cf6";
          ctx.shadowBlur = zA > 0 ? 12 : 4;
          ctx.fill();

          // Draw Node B (Strand 2 - Cyan/White)
          ctx.beginPath();
          ctx.arc(xB, y, 5 * scaleB, 0, Math.PI * 2);
          ctx.fillStyle = zB > 0 ? "#38bdf8" : "#0284c7";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = zB > 0 ? 12 : 4;
          ctx.fill();
        }
        ctx.shadowBlur = 0; // Reset glow
      }

      // MODE 2: 3D MOLECULAR LATTICE ENGINE
      else if (viewMode === "molecule") {
        if (isPlaying) angle += rotationSpeed * 0.8;
        const numNodes = 14;
        const nodeRadius = 140;

        const nodes = Array.from({ length: numNodes }, (_, idx) => {
          const phi = Math.acos(-1 + (2 * idx) / numNodes);
          const theta = Math.sqrt(numNodes * Math.PI) * phi + angle;
          return {
            x: centerX + nodeRadius * Math.cos(theta) * Math.sin(phi),
            y: centerY + nodeRadius * Math.sin(theta) * Math.sin(phi),
            z: nodeRadius * Math.cos(phi),
          };
        });

        // Draw Bond Lines between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
            if (dist < 160) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(167, 139, 250, ${1 - dist / 160})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        }

        // Draw Atomic Spheres
        nodes.forEach((node) => {
          const scale = (node.z + nodeRadius * 1.5) / (nodeRadius * 2.5);
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8 * Math.max(0.4, scale), 0, Math.PI * 2);
          ctx.fillStyle = node.z > 0 ? "#c4b5fd" : "#6c3fc5";
          ctx.shadowColor = "#8b5cf6";
          ctx.shadowBlur = 10;
          ctx.fill();
        });
        ctx.shadowBlur = 0;
      }

      // MODE 3: BIOREACTOR TELEMETRY STREAM
      else if (viewMode === "bioreactor") {
        if (isPlaying) angle += 0.05;
        // Animated Bioreactor Wave Signal
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        for (let x = 0; x < canvas.width; x += 5) {
          const y = centerY + Math.sin(x * 0.02 + angle) * 35 + Math.cos(x * 0.01) * 15;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 3;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isPlaying, viewMode, rotationSpeed, mousePos]);

  // Mouse move handler for 3D interactive tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Continuous Automatic Scene Mode Transition Loop (DNA -> 3D Molecule -> Telemetry Wave)
  useEffect(() => {
    const modes: ("dna" | "molecule" | "bioreactor")[] = ["dna", "molecule", "bioreactor"];
    const modeTimer = setInterval(() => {
      setViewMode((prev) => {
        const nextIdx = (modes.indexOf(prev) + 1) % modes.length;
        return modes[nextIdx];
      });
    }, 7000);
    return () => clearInterval(modeTimer);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[580px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-purple-800/40 text-white font-sans select-none"
    >
      {/* HTML5 Interactive 60fps Canvas Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
