"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Monitor, RefreshCw, CheckCircle, Sparkles } from "lucide-react";

const RESOURCES = [
  {
    id: "catalog",
    name: "S.R Solutions Product Catalog",
    type: "PDF Document",
    size: "4.8 MB",
    icon: FileText,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: "erp-client",
    name: "S.R ERP Desktop Client v2.4",
    type: "Windows Application (x64)",
    size: "82.4 MB",
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: "pos-sync",
    name: "POS Offline Local Sync Agent",
    type: "MSI Installer Package",
    size: "18.1 MB",
    icon: RefreshCw,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function DownloadSection() {
  const [downloadStates, setDownloadStates] = useState<Record<string, "idle" | "loading" | "success">>({});

  const triggerDownload = (id: string) => {
    setDownloadStates((prev) => ({ ...prev, [id]: "loading" }));
    setTimeout(() => {
      setDownloadStates((prev) => ({ ...prev, [id]: "success" }));
      setTimeout(() => {
        setDownloadStates((prev) => ({ ...prev, [id]: "idle" }));
      }, 4000);
    }, 2000);
  };

  return (
    <section id="download" className="relative py-14 bg-zinc-50 dark:bg-zinc-950/40 sm:py-20 lg:py-24 border-y border-zinc-200/50 dark:border-zinc-850">
      <div className="absolute top-10 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Resource Downloads
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
            Get Our Product Manuals &{" "}
            <span className="text-gradient">Desktop Applications</span>
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Download our latest product documentation, offline sync agents, and core enterprise dashboards for direct deployment.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((res) => {
            const Icon = res.icon;
            const state = downloadStates[res.id] || "idle";

            return (
              <div
                key={res.id}
                className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group"
              >
                <div>
                  <div className={`rounded-xl ${res.bg} p-2.5 sm:p-3 w-fit ${res.color} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-bold text-zinc-900 dark:text-white">
                    {res.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between gap-2 text-xs text-zinc-550">
                    <span className="truncate">{res.type}</span>
                    <span className="font-semibold text-zinc-705 dark:text-zinc-350 shrink-0">{res.size}</span>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 border-t border-zinc-100 pt-4 sm:pt-6 dark:border-zinc-800/80">
                  {state === "idle" && (
                    <button
                      onClick={() => triggerDownload(res.id)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 py-2.5 sm:py-3 text-xs font-bold transition hover:brightness-110 cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      Download Resource
                    </button>
                  )}

                  {state === "loading" && (
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 py-2.5 sm:py-3 text-xs font-bold">
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Preparing download...
                    </div>
                  )}

                  {state === "success" && (
                    <motion.div
                      initial={{ scale: 0.98, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-2.5 sm:py-3 text-xs font-bold"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      Package compiling! File sent.
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
