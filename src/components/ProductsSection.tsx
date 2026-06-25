"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  DollarSign,
  Stethoscope,
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface ProductsSectionProps {
  onBookDemo: (productName: string) => void;
}

const PRODUCTS = [
  {
    id: "app",
    name: "Pharmaceutical Software",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-[#c0392b] to-[#1e2f6b]",
  },
  {
    id: "pertrol",
    name: "Pertrol Pump Software",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-[#1e2f6b] to-[#1565c0]",
  },
  {
    id: "jewl",
    name: "Jewellery Management Software",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-[#1565c0] to-[#c0392b]",
  },
  {
    id: "erp",
    name: "School Management Sofware",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-[#1e2f6b] to-[#c0392b]",
  },
  {
    id: "retail",
    name: "Library Management Software",
    icon: ShoppingBag,
    description: "An offline-capable point-of-sale app that integrates directly with warehouse databases, supplier pipelines, and analytics modules.",
    features: ["Offline POS Operations", "Real-Time Stock Counter", "Loyalty Rewards System", "Supplier Invoice Tracking"],
    tech: ["React Native", "Node.js", "Redis", "MongoDB"],
    gradient: "from-[#c0392b] to-[#1565c0]",
  },
  {
    id: "fintech",
    name: "Payroll Software",
    icon: DollarSign,
    description: "A secure double-entry accounting and ledger framework with transaction fraud analysis engine and automated reconciliation APIs.",
    features: ["Double-Entry Verification", "AI-Powered Fraud Flags", "PCI-DSS Level 1 Compliance", "Instant Payout Gateway"],
    tech: ["Rust", "C++", "Cassandra", "gRPC"],
    gradient: "from-[#1565c0] to-[#1e2f6b]",
  },
  {
    id: "hospital",
    name: "Hospital Management Software",
    icon: Stethoscope,
    description: "Digital health portal providing doctor schedules, pharmacy prescriptions tracking, outpatient billing, and HL7 electronic health records.",
    features: ["EHR Patient Portability", "Pharmacy Inventory Sync", "OPD Queue Optimization", "HL7/FHIR Data Standard"],
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    gradient: "from-[#1e2f6b] to-[#c0392b]",
  },
  {
    id: "hotel",
    name: "Hotel & Restaurant Management",
    icon: Stethoscope,
    description: "Digital health portal providing doctor schedules, pharmacy prescriptions tracking, outpatient billing, and HL7 electronic health records.",
    features: ["EHR Patient Portability", "Pharmacy Inventory Sync", "OPD Queue Optimization", "HL7/FHIR Data Standard"],
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    gradient: "from-[#c0392b] to-[#1e2f6b]",
  },
];

/* ── 3-D tilt card ──────────────────────────────────────── */
function TiltCard({
  prod,
  index,
  onBookDemo,
}: {
  prod: (typeof PRODUCTS)[0];
  index: number;
  onBookDemo: (name: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: string[]) =>
      `radial-gradient(120px at ${gx} ${gy}, rgba(255,255,255,0.12), transparent)`
  );

  const ProductIcon = prod.icon;

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (isTouchDevice) return;
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
  }

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 90, damping: 18, delay: index * 0.07 },
        },
      }}
      style={{ rotateX: isTouchDevice ? 0 : rotateX, rotateY: isTouchDevice ? 0 : rotateY, transformPerspective: 1200, willChange: "transform" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 overflow-hidden group cursor-default"
    >
      {/* Dynamic glare shimmer */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: glowBackground,
        }}
      />

      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-2">
          <motion.div
            className={`rounded-xl bg-gradient-to-br ${prod.gradient} p-2.5 sm:p-3 text-white shadow-md shrink-0`}
            whileHover={{ scale: 1.12, rotate: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProductIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 text-right">
            Product Module
          </span>
        </div>

        <h3 className="mt-4 sm:mt-6 text-base sm:text-xl font-bold text-zinc-900 dark:text-white">
          {prod.name}
        </h3>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-655 dark:text-zinc-400 leading-relaxed">
          {prod.description}
        </p>

        {/* Checklist — single whileInView on the ul, not on each li */}
        <motion.ul
          className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {prod.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <motion.div
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/25 text-[#1e2f6b] dark:text-[#79a8f0]"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Check className="h-2.5 w-2.5" />
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Footer and Tags */}
      <div className="mt-6 sm:mt-8 border-t border-zinc-100 pt-4 sm:pt-6 dark:border-zinc-800/80 space-y-3 sm:space-y-4">
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {prod.tech.map((tag) => (
            <motion.span
              key={tag}
              className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400"
              whileHover={{ scale: 1.1, backgroundColor: "#1e2f6b", color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Book Demo CTA */}
        <motion.button
          onClick={() => onBookDemo(prod.name)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e2f6b] to-[#1565c0] text-white py-2.5 sm:py-3 text-xs font-bold cursor-pointer group/btn overflow-hidden relative"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(30,47,107,0.35)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#c0392b] via-[#1e2f6b] to-[#1565c0] opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Book a Custom Demo</span>
          <motion.span
            className="relative z-10"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function ProductsSection({ onBookDemo }: ProductsSectionProps) {
  return (
    <section
      id="products"
      className="relative py-14 bg-zinc-50 dark:bg-zinc-950/40 sm:py-20 lg:py-24 border-y border-zinc-200/50 dark:border-zinc-850"
    >
      <motion.div
        className="absolute top-10 left-1/3 h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,47,107,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#1e2f6b]/20 bg-[#1e2f6b]/5 px-3 py-1 text-xs font-semibold text-[#1e2f6b] dark:text-[#79a8f0] dark:border-[#4a72d4]/25 dark:bg-[#4a72d4]/8"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c0392b]" />
            Software Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl"
          >
            Empower Your Business With Our{" "}
            <span className="text-gradient">Core Applications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Engineered for high performance, compliance, and user accessibility. Explore our suite of dedicated applications built for major industries.
          </motion.p>
        </div>

        {/* Products Grid — 3D tilt cards */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2"
          style={{ perspective: 1200 }}
        >
          {PRODUCTS.map((prod, idx) => (
            <TiltCard key={prod.id} prod={prod} index={idx} onBookDemo={onBookDemo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
