"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Gauge, Search, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Laptop,
    title: "Responsive Web Design",
    desc: "Mobile-first, dynamic interfaces adjusted to any viewport down to 320px with smooth glassmorphism graphics.",
    metric: "100% Mobile Score",
  },
  {
    icon: Code2,
    title: "Modern React Architecture",
    desc: "Constructed with Next.js App Router, React Server Components, and optimized state stores for instant responses.",
    metric: "0s Page Jitter",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    desc: "Lightweight packages, static page generation, and image compression to hit green ranges in Core Web Vitals.",
    metric: "99+ Lighthouse Score",
  },
  {
    icon: Search,
    title: "SEO-Ready Structuring",
    desc: "Semantic HTML markups, automated metadata generators, search indexing layouts, and social media sharing cards.",
    metric: "1st Page Ranking SEO",
  },
];

const PROCESS_STEPS = [
  { step: "01", name: "Requirements & Plan", desc: "Aligning product features with business KPIs." },
  { step: "02", name: "UX Design & Mock", desc: "Constructing dark/light responsive layouts." },
  { step: "03", name: "High-Fidelity Code", desc: "Developing in Next.js, TypeScript, and Tailwind." },
  { step: "04", name: "Audit & Launch", desc: "Verifying speed, security, and deploying to Edge CDN." },
];

export default function WebDevSection() {
  return (
    <section id="webdev" className="relative py-14 dark:bg-zinc-950 sm:py-20 lg:py-24">
      <motion.div
        className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(21,101,192,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#1e2f6b]/20 bg-[#1e2f6b]/5 px-3 py-1 text-xs font-semibold text-[#1e2f6b] dark:text-[#79a8f0] dark:border-[#4a72d4]/25 dark:bg-[#4a72d4]/8"
          >
            <motion.span
              animate={{ rotate: [0, 20, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#c0392b]" />
            </motion.span>
            Web Development Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl"
          >
            Custom Web Development Built for{" "}
            <span className="text-gradient-cyan">Maximum Performance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            We build more than just websites. We deliver fast, secure, and SEO-optimized web systems that drive real business conversion.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.93 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 280 } }}
                className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group cursor-default"
              >
                {/* Corner accent on hover */}
                <motion.div
                  className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#1e2f6b]/10 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div>
                  <div className="flex items-start justify-between gap-2">
                    <motion.div
                      className="rounded-xl bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/25 border border-[#1e2f6b]/10 dark:border-[#4a72d4]/20 p-2.5 sm:p-3 text-[#1e2f6b] dark:text-[#79a8f0] shrink-0"
                      whileHover={{ scale: 1.18, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                    <motion.span
                      className="text-[9px] sm:text-[10px] font-bold text-[#c0392b] dark:text-[#e05444] uppercase tracking-widest text-right leading-tight"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    >
                      {serv.metric}
                    </motion.span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                    {serv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Map Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 sm:mt-20 lg:mt-24 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">
            Our Execution Roadmap
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            From architecture plan to edge caching — here is our 4-phase deployment cycle.
          </p>
        </motion.div>

        {/* Process Timeline — sequential spring reveal with connector line */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#c0392b]/20 via-[#1e2f6b]/30 to-[#1565c0]/20 z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.15 }}
              whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(192,57,43,0.4)", transition: { type: "spring", stiffness: 300 } }}
              className="relative p-5 sm:p-6 rounded-2xl border border-[#d4daf0]/60 dark:border-[#1e2f6b]/20 bg-[#f0f3fa]/60 dark:bg-[#0e1223]/30 group z-10 cursor-default"
            >
              {/* Step number watermark */}
              <motion.span
                className="absolute right-4 top-4 text-2xl sm:text-3xl font-extrabold text-[#1e2f6b]/10 dark:text-[#4a72d4]/15"
                whileHover={{ scale: 1.3, opacity: 0.25 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.step}
              </motion.span>

              {/* Step dot */}
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-br from-[#c0392b] to-[#1e2f6b] mb-3 shadow-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
              />

              <div className="text-sm font-bold text-zinc-900 dark:text-white pr-8">
                {step.name}
              </div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-450">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
