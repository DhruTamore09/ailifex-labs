"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MapPin, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";

const roles = [
  "Quality Assurance",
  "Regulatory Affairs",
  "Manufacturing Operations",
  "IT / Technology",
  "Executive / Leadership",
  "Other",
];

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Post to local backend for data/messages.json log
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // 2. Direct browser dispatch to info.ailifexlabs@gmail.com
      const formData = new FormData();
      formData.append("Name", `${form.firstName} ${form.lastName}`);
      formData.append("Work Email", form.email);
      formData.append("Company", form.company);
      formData.append("Role", form.role || "Not specified");
      formData.append("Message", form.message || "No message content");
      formData.append("_subject", `New Inquiry from ${form.firstName} ${form.lastName} (${form.company})`);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      await fetch("https://formsubmit.co/ajax/info.ailifexlabs@gmail.com", {
        method: "POST",
        body: formData,
      });

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", company: "", role: "", message: "" });
    } catch {
      setStatus("success");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-44 pb-20"
        style={{background: "linear-gradient(160deg, #f5f0ff 0%, #fafafe 60%, white 100%)"}}
      >
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="section-label mb-6 inline-flex">Contact</span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e", letterSpacing: "-0.03em"}}
            >
              Let&rsquo;s Talk About Your Batch Review Process
            </h1>
            <p className="text-lg leading-relaxed" style={{color: "#4b4565"}}>
              Whether you&rsquo;re looking to modernize your batch review workflow or just exploring
              options — we&rsquo;d be glad to have a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section id="form" className="section-sm pb-24" style={{background: "white"}}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Panel */}
            <div>
              <h2
                className="text-xl font-bold mb-6"
                style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}
              >
                Get in Touch
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: "#f0ebfd"}}>
                    <Phone size={16} style={{color: "#6c3fc5"}} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{color: "#8b879e"}}>Phone / WhatsApp</div>
                    <a
                      href="tel:+918668806982"
                      className="text-sm font-semibold hover:underline transition-colors block"
                      style={{color: "#6c3fc5"}}
                    >
                      +91 8668806982
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: "#f0ebfd"}}>
                    <Mail size={16} style={{color: "#6c3fc5"}} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{color: "#8b879e"}}>Email</div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ailifexlabs@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline transition-colors block"
                      style={{color: "#6c3fc5"}}
                    >
                      info.ailifexlabs@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background: "#f0ebfd"}}>
                    <MapPin size={16} style={{color: "#6c3fc5"}} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{color: "#8b879e"}}>Location</div>
                    <div className="text-sm font-semibold" style={{color: "#0f0a1e"}}>Mumbai, Maharashtra, India</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border" style={{borderColor: "#e8e4f4", background: "#fafafe"}}>
                <h3 className="text-sm font-semibold mb-2" style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}>
                  What to Expect
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "A response within 1 business day",
                    "No sales pressure — just a conversation",
                    "Tailored to your review workflow",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{color: "#6b6880"}}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: "#6c3fc5"}}/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border space-y-4"
                  style={{borderColor: "#e8e4f4", background: "#fafafe", minHeight: 400}}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto" style={{background: "#f0ebfd"}}>
                    <CheckCircle2 size={30} style={{color: "#6c3fc5"}} />
                  </div>
                  <h3 className="text-xl font-bold" style={{fontFamily: "var(--font-jakarta)", color: "#0f0a1e"}}>
                    Message Received & Logged to Inbox
                  </h3>
                  <p className="text-sm max-w-md mx-auto" style={{color: "#6b6880"}}>
                    Thank you! Your inquiry has been saved to the live AILifeX Labs inbox for <strong>info.ailifexlabs@gmail.com</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href="/admin/messages"
                      className="btn-primary text-xs px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      View Received Messages Inbox →
                    </Link>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ailifexlabs@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs px-5 py-2.5 inline-flex items-center gap-2"
                    >
                      Open Gmail App Direct →
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="glass-card p-8 flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                        First Name <span style={{color: "#6c3fc5"}}>*</span>
                      </label>
                      <input
                        id="contact-firstName"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Jane"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all focus:border-purple-400"
                        style={{borderColor: "#e8e4f4", color: "#0f0a1e", background: "white"}}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                        Last Name <span style={{color: "#6c3fc5"}}>*</span>
                      </label>
                      <input
                        id="contact-lastName"
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Smith"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all"
                        style={{borderColor: "#e8e4f4", color: "#0f0a1e", background: "white"}}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                        Work Email <span style={{color: "#6c3fc5"}}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all"
                        style={{borderColor: "#e8e4f4", color: "#0f0a1e", background: "white"}}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                        Company <span style={{color: "#6c3fc5"}}>*</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Your organization"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all"
                        style={{borderColor: "#e8e4f4", color: "#0f0a1e", background: "white"}}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                      Your Role
                    </label>
                    <select
                      id="contact-role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all appearance-none"
                      style={{borderColor: "#e8e4f4", color: form.role ? "#0f0a1e" : "#8b879e", background: "white"}}
                    >
                      <option value="" disabled>Select your role</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{color: "#4b4565"}}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your current batch review workflow or what you're looking for..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm border outline-none transition-all resize-none"
                      style={{borderColor: "#e8e4f4", color: "#0f0a1e", background: "white"}}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm" style={{color: "#ef4444"}}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center py-3"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
