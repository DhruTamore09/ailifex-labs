"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Clock, Building, User, RefreshCw, ArrowLeft, MessageSquare } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages ? data.messages.reverse() : []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filteredMessages = messages.filter(
    (m) =>
      m.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      m.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      m.email.toLowerCase().includes(filter.toLowerCase()) ||
      m.company.toLowerCase().includes(filter.toLowerCase()) ||
      m.message.toLowerCase().includes(filter.toLowerCase())
  );

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
              Received Messages Inbox
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              All website inquiries received for <strong>LifeScienceX AI Inbox</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchMessages}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm"
            >
              <RefreshCw size={14} className={loading ? "animate-spin text-purple-600" : ""} />
              Refresh Inbox
            </button>
            <div className="px-4 py-2.5 rounded-xl bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold">
              Total Messages: {messages.length}
            </div>
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
              When visitors submit the contact form on your website, their inquiries will instantly appear here.
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
                      {msg.firstName[0]}
                      {msg.lastName[0]}
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
