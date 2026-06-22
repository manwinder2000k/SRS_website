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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section id="webdev" className="relative py-14 dark:bg-zinc-950 sm:py-20 lg:py-24">
      <div className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Web Development Services
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
            Custom Web Development Built for{" "}
            <span className="text-gradient-cyan">Maximum Performance</span>
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            We build more than just websites. We deliver fast, secure, and SEO-optimized web systems that drive real business conversion.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="rounded-xl bg-cyan-500/10 p-2.5 sm:p-3 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest text-right leading-tight">
                      {serv.metric}
                    </span>
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
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">
            Our Execution Roadmap
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            From architecture plan to edge caching — here is our 4-phase deployment cycle.
          </p>
        </div>

        {/* Process Timeline Blocks */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl border border-zinc-200/50 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/10 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <span className="absolute right-4 top-4 text-2xl sm:text-3xl font-extrabold text-indigo-500/10 dark:text-cyan-400/10 group-hover:scale-105 transition-transform duration-300">
                {step.step}
              </span>
              <div className="text-sm font-bold text-zinc-900 dark:text-white pr-8">
                {step.name}
              </div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-450">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
