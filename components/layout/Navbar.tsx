"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, ChevronDown, FileCheck, GitMerge, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e8e4f4] shadow-[0_2px_24px_rgba(108,63,197,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="LifeScienceX AI Logo"
              width={38}
              height={38}
              priority
              className="w-9 h-9 object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105"
            />
            <div>
              <span className="text-[16px] font-bold tracking-tight text-slate-900 font-jakarta block leading-tight">
                LifeScienceX AI
              </span>
              <div className="text-[10px] font-semibold tracking-widest uppercase text-purple-600 leading-tight">
                Life Sciences Technology
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 relative" aria-label="Main navigation">
            <Link
              href="/"
              className="px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:bg-[#f5f0ff] text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:bg-[#f5f0ff] text-slate-700"
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/product"
                id="nav-link-products"
                onClick={() => {
                  setDropdownOpen(false);
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "veribatch" }));
                  }
                }}
                className="px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:bg-[#f5f0ff] text-slate-700 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-purple-600" : "text-slate-500"}`}
                />
              </Link>

              {/* Dropdown Menu Box */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-96 p-3 bg-white rounded-2xl border border-purple-100 shadow-2xl shadow-purple-950/10 text-xs animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-purple-600 border-b border-purple-50 flex items-center justify-between">
                    <span>Product Suite</span>
                    <span className="text-[9px] bg-purple-50 px-2 py-0.5 rounded-full text-purple-700 font-semibold">Life Sciences Platforms</span>
                  </div>

                  <div className="flex flex-col gap-1 mt-2">
                    {/* VeriBatch */}
                    <Link
                      href="/product?tab=veribatch#veribatch"
                      id="nav-dropdown-veribatch"
                      onClick={() => {
                        setDropdownOpen(false);
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "veribatch" }));
                        }
                      }}
                      className="p-3 rounded-xl hover:bg-purple-50/70 transition-colors border border-transparent hover:border-purple-100 flex items-start gap-3 group/item cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover/item:scale-105">
                        <FileCheck size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm font-jakarta group-hover/item:text-purple-700 flex items-center gap-1.5">
                          VeriBatch™
                          <span className="text-[9px] font-bold bg-purple-600 text-white px-1.5 py-0.2 rounded-full">
                            Flagship
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          Life Sciences Batch Review System
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          MBR/BMR comparison, 100% parameter checking & QA sign-off.
                        </div>
                      </div>
                    </Link>

                    {/* ChangeSure */}
                    <Link
                      href="/product?tab=changesure#changesure"
                      id="nav-dropdown-changesure"
                      onClick={() => {
                        setDropdownOpen(false);
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "changesure" }));
                        }
                      }}
                      className="p-3 rounded-xl hover:bg-sky-50/70 transition-colors border border-transparent hover:border-sky-100 flex items-start gap-3 group/item cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover/item:scale-105">
                        <GitMerge size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm font-jakarta group-hover/item:text-sky-700 flex items-center gap-1.5">
                          ChangeSure™
                          <span className="text-[9px] font-bold bg-sky-600 text-white px-1.5 py-0.2 rounded-full">
                            Quality Governance
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          Enterprise Change Control Platform
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          Digitized change control, risk assessment & audit trails.
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="pt-2 mt-2 border-t border-purple-50 flex items-center justify-between px-2">
                    <span className="text-[10px] text-slate-500">Explore complete product features</span>
                    <Link
                      href="/product"
                      id="nav-dropdown-all-products"
                      onClick={() => {
                        setDropdownOpen(false);
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "veribatch" }));
                        }
                      }}
                      className="text-[11px] font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1"
                    >
                      All Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:bg-[#f5f0ff] text-slate-700"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Request Demo
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white border-purple-100">
          <div className="container-xl py-4 flex flex-col gap-2 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-2 font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="px-4 py-2 font-medium">About Us</Link>
            
            <div className="px-4 pt-2">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/product"
                  id="mobile-nav-products-overview"
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "veribatch" }));
                    }
                  }}
                  className="font-bold text-xs uppercase tracking-wider text-purple-600 hover:text-purple-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Products Suite</span>
                  <ArrowRight size={13} />
                </Link>
                <span className="text-[9px] bg-purple-50 px-2 py-0.5 rounded-full text-purple-700 font-semibold">Overview</span>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/product?tab=veribatch#veribatch"
                  id="mobile-nav-veribatch"
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "veribatch" }));
                    }
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-purple-50/70 border border-purple-100 font-semibold text-slate-900 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck size={16} className="text-purple-600" />
                    <span>VeriBatch™ — <span className="font-normal text-slate-600">Batch Review System</span></span>
                  </div>
                  <ChevronRight size={14} className="text-purple-600" />
                </Link>

                <Link
                  href="/product?tab=changesure#changesure"
                  id="mobile-nav-changesure"
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("product-tab-change", { detail: "changesure" }));
                    }
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-sky-50/70 border border-sky-100 font-semibold text-slate-900 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <GitMerge size={16} className="text-sky-600" />
                    <span>ChangeSure™ — <span className="font-normal text-slate-600">Change Control</span></span>
                  </div>
                  <ChevronRight size={14} className="text-sky-600" />
                </Link>
              </div>
            </div>

            <Link href="/contact" onClick={() => setIsOpen(false)} className="px-4 py-2 font-medium">Contact</Link>

            <div className="pt-3 border-t border-purple-100 mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
