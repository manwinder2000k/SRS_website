"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Workflow,
  Database,
  Terminal,
  Coins,
  Activity,
  CloudLightning,
  Lock
} from "lucide-react";

const CLIENTS = [
  { name: "Apex Retail", icon: Coins, color: "text-amber-500" },
  { name: "Vertex Care", icon: Activity, color: "text-emerald-500" },
  { name: "Nova Ledger", icon: ShieldCheck, color: "text-indigo-500" },
  { name: "Quantum Logix", icon: Workflow, color: "text-pink-500" },
  { name: "Skyline Cloud", icon: CloudLightning, color: "text-cyan-500" },
  { name: "Hexa Core Systems", icon: Terminal, color: "text-violet-500" },
  { name: "Secure Trust", icon: Lock, color: "text-blue-500" },
  { name: "Matrix DB", icon: Database, color: "text-rose-500" },
];

export default function ClientMarquee() {
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative bg-zinc-50 py-10 sm:py-12 dark:bg-zinc-950/60 overflow-hidden border-y border-zinc-200/50 dark:border-zinc-850">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-450 dark:text-zinc-550">
          Trusted by Industry Leaders Worldwide
        </h2>
      </div>

      {/* Row 1 - Left direction */}
      <div className="relative flex w-full overflow-hidden py-3 sm:py-4 select-none">
        {/* Left/right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-zinc-50 dark:from-zinc-950/60 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-zinc-50 dark:from-zinc-950/60 to-transparent" />
        <div className="flex w-max shrink-0 items-center gap-4 sm:gap-8 animate-marquee">
          {duplicatedClients.map((client, idx) => {
            const BrandIcon = client.icon;
            return (
              <div
                key={`${client.name}-r1-${idx}`}
                className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-zinc-200/60 bg-white px-3 sm:px-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-cyan-400 group"
              >
                <div className={`rounded-lg sm:rounded-xl p-1.5 sm:p-2 bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform duration-300 ${client.color}`}>
                  <BrandIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 - Right direction */}
      <div className="relative flex w-full overflow-hidden pb-3 sm:pb-4 select-none">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-zinc-50 dark:from-zinc-950/60 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-zinc-50 dark:from-zinc-950/60 to-transparent" />
        <div className="flex w-max shrink-0 items-center gap-4 sm:gap-8 animate-marquee-reverse">
          {duplicatedClients.map((client, idx) => {
            const BrandIcon = client.icon;
            return (
              <div
                key={`${client.name}-r2-${idx}`}
                className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-zinc-200/60 bg-white px-3 sm:px-6 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-cyan-400 group"
              >
                <div className={`rounded-lg sm:rounded-xl p-1.5 sm:p-2 bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform duration-300 ${client.color}`}>
                  <BrandIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
