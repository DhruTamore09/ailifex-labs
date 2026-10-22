"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  Building,
  User,
  RefreshCw,
  ArrowLeft,
  MessageSquare,
  Lock,
  ShieldAlert,
  LogOut,
  KeyRound,
} from "lucide-react";

interface ContactMessage {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [adminPin, setAdminPin] = useState<string | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const fetchMessagesWithPin = useCallback(async (pin: string) => {
    setLoading(true);
    setAuthError(null);
    try {
      const res = await fetch("/api/messages", {
        headers: {
          "x-admin-pin": pin,
        },
      });

      if (res.status === 401) {
        setAuthError("Invalid Admin PIN. Access denied.");
        sessionStorage.removeItem("lifesciencex_admin_pin");
        setAdminPin(null);
        setMessages([]);
        return false;
      }

      if (!res.ok) {
        throw new Error("Failed to load messages");
      }

      const data = await res.json();
      setMessages(data.messages ? [...data.messages].reverse() : []);
      return true;
    } catch {
      setAuthError("Network or server error. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial authentication & data load from sessionStorage
  useEffect(() => {
    const savedPin = typeof window !== "undefined" ? sessionStorage.getItem("lifesciencex_admin_pin") : null;
    if (!savedPin) return;

    let isMounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/messages", {
          headers: { "x-admin-pin": savedPin },
        });

        if (!isMounted) return;

        if (res.ok) {
          const data = await res.json();
          setAdminPin(savedPin);
          setMessages(data.messages ? [...data.messages].reverse() : []);
        } else if (res.status === 401) {
          sessionStorage.removeItem("lifesciencex_admin_pin");
        }
      } catch {
        // Silently catch initial load network errors
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) {
      setAuthError("Please enter your admin PIN");
      return;
    }

    setIsVerifying(true);
    const success = await fetchMessagesWithPin(pinInput.trim());
    setIsVerifying(false);

    if (success) {
      sessionStorage.setItem("lifesciencex_admin_pin", pinInput.trim());
      setAdminPin(pinInput.trim());
      setPinInput("");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("lifesciencex_admin_pin");
    setAdminPin(null);
    setMessages([]);
    setPinInput("");
    setAuthError(null);
  };

  const filteredMessages = messages.filter(
    (m) =>
      m.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      m.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      m.email.toLowerCase().includes(filter.toLowerCase()) ||
      m.company.toLowerCase().includes(filter.toLowerCase()) ||
      m.message.toLowerCase().includes(filter.toLowerCase())
  );

  // --- LOCKED SCREEN (If not authenticated) ---
  if (!adminPin) {
    return (
      <div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-white flex items-center justify-center px-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-purple-500/5 text-center">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Lock size={30} />
          </div>

          <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 inline-block mb-3">
            Confidential Admin Area
          </span>

          <h1 className="text-2xl font-bold text-slate-900 font-jakarta mb-2">
            Restricted Admin Access
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed mb-6">
            Customer inquiries are strictly private. Please enter your administrator PIN to unlock the inquiry inbox.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Admin PIN (Default: admin2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                autoFocus
                className="w-full px-4 py-3 text-sm text-center tracking-widest rounded-xl border border-slate-200 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all bg-slate-50/50"
              />
            </div>

            {authError && (
              <div className="flex items-center justify-center gap-2 text-xs text-rose-600 bg-rose-50 border border-rose-200/60 p-2.5 rounded-xl font-medium">
                <ShieldAlert size={14} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full btn-primary py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-500/20 hover:shadow-lg transition-all"
            >
              <KeyRound size={14} />
              {isVerifying ? "Verifying..." : "Unlock Messages Inbox"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <Link
              href="/"
              className="hover:text-purple-600 transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft size={12} /> Back to Homepage
            </Link>
            <span>LifeScienceX Secure Portal</span>
          </div>
        </div>
      </div>
    );
  }

  // --- UNLOCKED ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50 text-slate-800 font-sans">
      <div className="container-xl">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-700 mb-2"
            >
              <ArrowLeft size={14} /> Back to Contact Page
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 font-jakarta flex items-center gap-3">
              <MessageSquare className="text-purple-600" size={28} />
              Received Inquiries Inbox
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Private portal for <strong>LifeScienceX AI</strong> lead inquiries
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchMessagesWithPin(adminPin)}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
            >
              <RefreshCw size={14} className={loading ? "animate-spin text-purple-600" : ""} />
              Refresh
            </button>

            <div className="px-4 py-2.5 rounded-xl bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold">
              Total: {messages.length}
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold hover:bg-rose-100 transition-colors cursor-pointer"
              title="Lock inbox and clear credentials"
            >
              <LogOut size={14} />
              Lock Inbox
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, email, company, or message..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-md px-4 py-2.5 rounded-xl text-xs border border-slate-200 shadow-sm outline-none focus:border-purple-500 bg-white"
          />
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="p-12 text-center text-slate-400 text-sm bg-white rounded-2xl border border-slate-200">
            Loading received messages...
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
            <Mail className="mx-auto text-purple-300 mb-3" size={40} />
            <h3 className="text-lg font-bold text-slate-700">No Messages Found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              When visitors submit the contact form on your website, their inquiries will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-purple-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 text-sm">
                      {msg.firstName?.[0] || "U"}
                      {msg.lastName?.[0] || ""}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {msg.firstName} {msg.lastName}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Building size={12} className="text-slate-400" /> {msg.company}
                        </span>
                        {msg.role && (
                          <span className="flex items-center gap-1">
                            <User size={12} className="text-slate-400" /> {msg.role}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock size={13} /> {new Date(msg.timestamp).toLocaleString()}
                    </span>
                    <a
                      href={`mailto:${msg.email}`}
                      className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <Mail size={13} /> Reply to {msg.email}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-xs leading-relaxed text-slate-700 whitespace-pre-wrap font-mono border border-slate-100">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
