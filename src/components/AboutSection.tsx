"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Zap, HeartHandshake, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "High-Performance Code",
    desc: "Our products are compiled with state-of-the-art frameworks to deliver sub-millisecond execution speeds.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    desc: "End-to-end data encryption, identity access management, and multi-region disaster recovery protocols.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Interfaces",
    desc: "We focus heavily on UX/UI design. Our applications are beautiful, accessible, and intuitive to use.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Support",
    desc: "Dedicated account managers and 24/7 technical operations center monitoring your services.",
    color: "from-emerald-500 to-teal-500",
  },
];

const STATS = [
  { value: "15+", label: "Proprietary Products" },
  { value: "5000+", label: "Total Clients" },
  { value: "99.99%", label: "Platform SLA" },
  { value: "25+", label: "Years of Excellence" },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.6 },
    },
  } as const;

  return (
    <section id="about" className="relative py-14 dark:bg-zinc-950 sm:py-20 lg:py-24">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-0 h-[250px] w-[250px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400"
          >
            <Award className="h-3.5 w-3.5" />
            About S.R Software Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl"
          >
            Empowering Modern Enterprises with{" "}
            <span className="text-gradient">Scalable Software Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Founded on the pillars of innovation, safety, and performance, S.R Software Solutions designs
            high-end enterprise software. We assist industries ranging from retail and fintech to health
            administration in automating workflows.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group"
              >
                <div>
                  <div className={`w-fit rounded-xl bg-gradient-to-br ${pillar.color} p-2.5 sm:p-3 text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Metrics Grid Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl border border-zinc-200/50 bg-zinc-50/50 p-5 sm:p-8 dark:border-zinc-850 dark:bg-zinc-900/20 glass-panel"
        >
          <div className="grid grid-cols-2 gap-5 sm:gap-8 text-center md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-cyan-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
