"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  DollarSign,
  Stethoscope,
  Check,
  Sparkles,
  ArrowUpRight
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
    gradient: "from-indigo-500 to-purple-600",
  },

  {
    id: "pertrol",
    name: "Pertrol Pump Software",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-indigo-500 to-purple-600",
  },

  {
    id: "jewl",
    name: "Jewellery Management Software",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-indigo-500 to-purple-600",
  },


  {
    id: "erp",
    name: "School Management Sofware",
    icon: Building2,
    description: "Our comprehensive resource planner built for multi-entity firms to govern warehousing, staff payroll, procurement, and financials.",
    features: ["Automated Financial Audits", "Predictive Logistics Dispatch", "HR Workflow Automation", "Global Tax Localization"],
    tech: ["Next.js", "Golang", "PostgreSQL", "Kafka"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "retail",
    name: "Library Management Software",
    icon: ShoppingBag,
    description: "An offline-capable point-of-sale app that integrates directly with warehouse databases, supplier pipelines, and analytics modules.",
    features: ["Offline POS Operations", "Real-Time Stock Counter", "Loyalty Rewards System", "Supplier Invoice Tracking"],
    tech: ["React Native", "Node.js", "Redis", "MongoDB"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "fintech",
    name: "Payroll Software",
    icon: DollarSign,
    description: "A secure double-entry accounting and ledger framework with transaction fraud analysis engine and automated reconciliation APIs.",
    features: ["Double-Entry Verification", "AI-Powered Fraud Flags", "PCI-DSS Level 1 Compliance", "Instant Payout Gateway"],
    tech: ["Rust", "C++", "Cassandra", "gRPC"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "hospital",
    name: "Hospital Management Software",
    icon: Stethoscope,
    description: "Digital health portal providing doctor schedules, pharmacy prescriptions tracking, outpatient billing, and HL7 electronic health records.",
    features: ["EHR Patient Portability", "Pharmacy Inventory Sync", "OPD Queue Optimization", "HL7/FHIR Data Standard"],
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    gradient: "from-rose-500 to-pink-600",
  },

  {
    id: "hotel",
    name: "Hotel & Restaurant Management",
    icon: Stethoscope,
    description: "Digital health portal providing doctor schedules, pharmacy prescriptions tracking, outpatient billing, and HL7 electronic health records.",
    features: ["EHR Patient Portability", "Pharmacy Inventory Sync", "OPD Queue Optimization", "HL7/FHIR Data Standard"],
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    gradient: "from-rose-500 to-pink-600",
  },
];

export default function ProductsSection({ onBookDemo }: ProductsSectionProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section id="products" className="relative py-14 bg-zinc-50 dark:bg-zinc-950/40 sm:py-20 lg:py-24 border-y border-zinc-200/50 dark:border-zinc-850">
      <div className="absolute top-10 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Software Products
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
            Empower Your Business With Our{" "}
            <span className="text-gradient">Core Applications</span>
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Engineered for high performance, compliance, and user accessibility. Explore our suite of dedicated applications built for major industries.
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2"
        >
          {PRODUCTS.map((prod) => {
            const ProductIcon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                variants={cardVariants}
                className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className={`rounded-xl bg-gradient-to-br ${prod.gradient} p-2.5 sm:p-3 text-white shadow-md shrink-0`}>
                      <ProductIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
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

                  {/* Checklist */}
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5">
                    {prod.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-zinc-800 text-indigo-500">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer and Tags */}
                <div className="mt-6 sm:mt-8 border-t border-zinc-100 pt-4 sm:pt-6 dark:border-zinc-800/80 space-y-3 sm:space-y-4">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {prod.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Book Demo CTA */}
                  <button
                    onClick={() => onBookDemo(prod.name)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 py-2.5 sm:py-3 text-xs font-bold transition hover:brightness-110 hover:shadow-md cursor-pointer group/btn"
                  >
                    <span>Book a Custom Demo</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
