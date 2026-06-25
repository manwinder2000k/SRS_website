"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Shield, Sparkles, Zap, HeartHandshake, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "High-Performance Code",
    desc: "Our products are compiled with state-of-the-art frameworks to deliver sub-millisecond execution speeds.",
    color: "from-[#c0392b] to-[#e05444]",
    dir: "left",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    desc: "End-to-end data encryption, identity access management, and multi-region disaster recovery protocols.",
    color: "from-[#1e2f6b] to-[#1565c0]",
    dir: "bottom",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Interfaces",
    desc: "We focus heavily on UX/UI design. Our applications are beautiful, accessible, and intuitive to use.",
    color: "from-[#1565c0] to-[#2196f3]",
    dir: "bottom",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Support",
    desc: "Dedicated account managers and 24/7 technical operations center monitoring your services.",
    color: "from-[#1e2f6b] to-[#c0392b]",
    dir: "right",
  },
];

const STATS = [
  { value: 15, suffix: "+", label: "Proprietary Products" },
  { value: 5000, suffix: "+", label: "Total Clients" },
  { value: 99, suffix: ".99%", label: "Platform SLA", decimal: true },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

/* ── Animated number counter ─────────────────────────────── */
function AnimatedStat({ value, suffix, label, decimal, delay = 0 }: {
  value: number; suffix: string; label: string; decimal?: boolean; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 2.2,
      ease: "easeOut",
      delay,
      onUpdate: (v) => {
        setDisplay(decimal ? v.toFixed(2) : Math.round(v).toLocaleString());
      },
    });
    return controls.stop;
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="space-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
    >
      <div className="text-2xl sm:text-3xl font-extrabold text-[#c0392b] dark:text-[#e05444] md:text-4xl tabular-nums">
        {display}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
    </motion.div>
  );
}

/* ── Pillar card with directional reveal ──────────────────── */
function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[0];
  index: number;
}) {
  const Icon = pillar.icon;
  const dirMap: Record<string, { x: number; y: number }> = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    bottom: { x: 0, y: 60 },
  };
  const initial = dirMap[pillar.dir] ?? { x: 0, y: 60 };

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
      className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group cursor-default"
    >
      {/* Corner glow on hover */}
      <motion.div
        className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${pillar.color} opacity-0 blur-2xl`}
        whileHover={{ opacity: 0.25 }}
        transition={{ duration: 0.3 }}
      />

      <div>
        <motion.div
          className={`w-fit rounded-xl bg-gradient-to-br ${pillar.color} p-2.5 sm:p-3 text-white shadow-md`}
          whileHover={{ scale: 1.15, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
        <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
          {pillar.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 dark:bg-zinc-950 sm:py-20 lg:py-24">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <motion.div
          className="absolute top-1/2 left-0 h-[250px] w-[250px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(30,47,107,0.15) 0%, transparent 70%)" }}
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(192,57,43,0.10) 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 10, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="badge-brand inline-flex"
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

        {/* Pillars Grid — directional reveal */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Animated Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl border border-zinc-200/50 bg-zinc-50/50 p-5 sm:p-8 dark:border-zinc-850 dark:bg-zinc-900/20 glass-panel"
        >
          <div className="grid grid-cols-2 gap-5 sm:gap-8 text-center md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <AnimatedStat
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimal={stat.decimal}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
