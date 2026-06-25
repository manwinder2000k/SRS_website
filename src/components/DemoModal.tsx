"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
}

export default function DemoModal({ isOpen, onClose, selectedProduct = "S.R Cloud ERP" }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    product: selectedProduct,
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      date: "",
      product: selectedProduct,
      notes: "",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#c0392b] animate-pulse" />
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Book a Product Demo
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Switcher */}
            <div className="mt-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Full Name *
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
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Software Product
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-[#4a72d4]"
                      >
                        <option value="S.R Cloud ERP" className="dark:bg-zinc-900">S.R Cloud ERP</option>
                        <option value="S.R Retail Manager" className="dark:bg-zinc-900">S.R Retail Manager</option>
                        <option value="S.R FinTech Suite" className="dark:bg-zinc-900">S.R FinTech Suite</option>
                        <option value="S.R Hospital Management" className="dark:bg-zinc-900">S.R Hospital Management</option>
                        <option value="Custom Development" className="dark:bg-zinc-900">Custom Web Dev</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-[#1e2f6b] focus:ring-2 focus:ring-[#1e2f6b]/15 dark:border-zinc-800 dark:focus:border-[#4a72d4]"
                      placeholder="Tell us about your team size, current systems, or timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c0392b] via-[#1e2f6b] to-[#1565c0] py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:brightness-110 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Schedule Live Demo
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
                  <h4 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                    Demo Scheduled Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Thank you, <span className="font-semibold text-[#c0392b] dark:text-[#e05444]">{formData.name}</span>. 
                    We have reserved a demo session for <span className="font-semibold">{formData.date}</span>. 
                    A calendar invitation and zoom link have been sent to <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 rounded-lg bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
