"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API request
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      // Reset after 4 seconds
      setTimeout(() => {
        setIsSent(false);
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-14 dark:bg-zinc-950 sm:py-20 lg:py-24">
      {/* Visual background details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/3 right-10 h-[250px] w-[250px] bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 h-[300px] w-[300px] bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1e2f6b]/20 bg-[#1e2f6b]/5 px-3 py-1 text-xs font-semibold text-[#1e2f6b] dark:text-[#79a8f0] dark:border-[#4a72d4]/25 dark:bg-[#4a72d4]/8">
            <Sparkles className="h-3.5 w-3.5 text-[#c0392b]" />
            Contact S.R Solutions
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
            Let&apos;s Build Something <span className="text-gradient">Outstanding Together</span>
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions about integrations, enterprise volume pricing, or custom features? Reach out to our engineers.
          </p>
        </div>

        {/* Contact Grid layout */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Info Details column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-450 leading-relaxed">
                Connect with our commercial sales teams or technical operations offices. We typically reply within 2 hours.
              </p>
            </div>

            {/* Direct Channels cards */}
            <div className="space-y-4">
              {/* Telephone */}
              <div className="flex items-center gap-3 rounded-xl border border-[#d4daf0]/70 bg-white/60 p-3 sm:p-4 dark:border-[#1e2f6b]/25 dark:bg-[#0e1223]/50">
                <div className="rounded-lg bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/20 p-2 sm:p-2.5 text-[#1e2f6b] dark:text-[#79a8f0] shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Call Hotline</div>
                  <a href="tel:+0183-5031999" className="text-xs sm:text-sm font-bold text-zinc-850 dark:text-white hover:text-[#c0392b] dark:hover:text-[#e05444] transition truncate block">
                    +0183-5031999
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 rounded-xl border border-[#d4daf0]/70 bg-white/60 p-3 sm:p-4 dark:border-[#1e2f6b]/25 dark:bg-[#0e1223]/50">
                <div className="rounded-lg bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/20 p-2 sm:p-2.5 text-[#1e2f6b] dark:text-[#79a8f0] shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email Inquiry</div>
                  <a href="mailto:info@srsolutions.com" className="text-xs sm:text-sm font-bold text-zinc-850 dark:text-white hover:text-[#c0392b] dark:hover:text-[#e05444] transition truncate block">
                    avneet_gulati_2000@yahoo.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3 rounded-xl border border-[#d4daf0]/70 bg-white/60 p-3 sm:p-4 dark:border-[#1e2f6b]/25 dark:bg-[#0e1223]/50">
                <div className="rounded-lg bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/20 p-2 sm:p-2.5 text-[#1e2f6b] dark:text-[#79a8f0] shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Global Headquarters</div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-850 dark:text-white leading-snug block">
                    Nehru Shooping Complex shop no.8 2nd floor Amritsar
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 rounded-xl border border-[#d4daf0]/70 bg-white/60 p-3 sm:p-4 dark:border-[#1e2f6b]/25 dark:bg-[#0e1223]/50">
                <div className="rounded-lg bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/20 p-2 sm:p-2.5 text-[#1e2f6b] dark:text-[#79a8f0] shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Operating Hours</div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-850 dark:text-white leading-snug block">
                    Monday - Seturday: 10:00 AM - 7:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form details column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden">

              {!isSent ? (
                <form onSubmit={handleSend} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-[#4a72d4]"
                    >
                      <option value="General Inquiry" className="dark:bg-zinc-900">General Inquiry</option>
                      <option value="Product Demo Support" className="dark:bg-zinc-900">Product Demo Support</option>
                      <option value="Custom Web Development" className="dark:bg-zinc-900">Custom Web Development</option>
                      <option value="Billing / Accounts" className="dark:bg-zinc-900">Billing / Accounts</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Message Body
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                      placeholder="Outline details of your project context..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c0392b] via-[#1e2f6b] to-[#1565c0] py-3 text-sm font-semibold text-white shadow-md hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition duration-205 cursor-pointer"
                  >
                    {isSending ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 dark:text-emerald-450" />
                  <h4 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
                    Thank you for reaching out, <span className="font-semibold text-[#c0392b]">{formData.name}</span>.
                    An S.R Software Solutions representative has been assigned to your ticket.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
