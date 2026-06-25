"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, TrendingUp, Cpu, Server } from "lucide-react";

interface HeroSwiperProps {
  onBookDemo: (product?: string) => void;
}

const SLIDES = [
  {
    id: 1,
    badge: "Enterprise",
    icon: Server,
    title: "Library Management Software",
    subtitle: "Consolidate your entire business infrastructure into one unified, real-time operating center.",
    statValue: "45%",
    statLabel: "Increase in Efficiency",
    gradient: "from-[#c0392b] via-[#1e2f6b] to-[#1565c0]",
    glow: "rgba(30, 47, 107, 0.18)",
  },
  {
    id: 2,
    badge: "Retail & Commerce",
    icon: TrendingUp,
    title: "School Management Sofware",
    subtitle: "Powering omnichannel sales, high-speed checkout registers, and smart inventory pipelines globally.",
    statValue: "15M+",
    statLabel: "Daily Transactions",
    gradient: "from-[#1e2f6b] via-[#1565c0] to-[#2196f3]",
    glow: "rgba(21, 101, 192, 0.18)",
  },
  {
    id: 3,
    badge: "Fintech & Ledger",
    icon: Cpu,
    title: "Pharmaceutical Software",
    subtitle: "Next-generation multi-ledger networks built for transaction speed, encryption, and banking compliance.",
    statValue: "0.03ms",
    statLabel: "Average Settlement Delay",
    gradient: "from-[#1565c0] via-[#1e2f6b] to-[#c0392b]",
    glow: "rgba(192, 57, 43, 0.14)",
  },
];

export default function HeroSwiper({ onBookDemo }: HeroSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideDuration = 6000;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, slideDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying, handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const ActiveIcon = SLIDES[currentIndex].icon;
  const slide = SLIDES[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f6fc] via-[#edf0f9] to-[#f4f6fc] pt-24 pb-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-24">

      {/* Background Graphic blobs — pure CSS, no JS animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-70">
        <div className="hero-bg-blob hero-bg-blob-1" />
        <div className="hero-bg-blob hero-bg-blob-2" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Floating decorative orbs — CSS only, hidden on mobile */}
      <div className="hidden sm:block">
        <div className="hero-orb" style={{ top: "15%", left: "8%", width: 12, height: 12, background: "#c0392b" }} />
        <div className="hero-orb" style={{ top: "35%", left: "3%", width: 8, height: 8, background: "#1e2f6b" }} />
        <div className="hero-orb" style={{ top: "70%", left: "6%", width: 16, height: 16, background: "#1565c0" }} />
        <div className="hero-orb" style={{ top: "20%", left: "92%", width: 10, height: 10, background: "#c0392b" }} />
        <div className="hero-orb" style={{ top: "55%", left: "95%", width: 14, height: 14, background: "#1e2f6b" }} />
        <div className="hero-orb" style={{ top: "80%", left: "90%", width: 9, height: 9, background: "#1565c0" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Hero panel — CSS entrance animation, synced to browser paint */}
        <div
          className="relative rounded-2xl sm:rounded-3xl glass-panel glass-panel-mobile p-4 sm:p-8 lg:p-16 overflow-hidden animate-fade-in-up"
        >
          {/* Subtle border glow — CSS only */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none animate-border-glow"
            style={{
              background: `linear-gradient(135deg, rgba(192,57,43,0.08) 0%, rgba(30,47,107,0.05) 50%, rgba(21,101,192,0.08) 100%)`,
            }}
          />

          {/* Top Info Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/30 border border-[#1e2f6b]/15 dark:border-[#4a72d4]/25 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#1e2f6b] dark:text-[#79a8f0] shrink-0">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#c0392b]" />
                Featured
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={slide.badge}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] sm:text-xs font-bold text-[#c0392b] dark:text-[#e05444] truncate"
                >
                  {slide.badge}
                </motion.span>
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full p-1.5 sm:p-2 text-zinc-400 hover:bg-zinc-200/50 hover:text-zinc-700 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-200 transition-colors shrink-0"
              title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </button>
          </div>

          {/* Slider Container */}
          <div className="mt-5 sm:mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            {/* Slide Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Static children — no nested initial/animate to avoid layout thrashing */}
                  <h1
                    className={`text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r ${slide.gradient} leading-tight`}
                  >
                    {slide.title}
                  </h1>
                  <p className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed max-w-xl sm:text-base lg:text-lg">
                    {slide.subtitle}
                  </p>

                  {/* Internal metrics */}
                  <div className="inline-flex items-center gap-3 bg-[#1e2f6b]/5 dark:bg-[#1e2f6b]/20 border border-[#1e2f6b]/10 dark:border-[#4a72d4]/20 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-[#0e1223] text-[#1e2f6b] dark:text-[#79a8f0] shadow-sm shrink-0">
                      <ActiveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {slide.statValue}
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                        {slide.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                    <button
                      onClick={() => onBookDemo(slide.title)}
                      className={`rounded-xl px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:brightness-110 transition-all cursor-pointer bg-gradient-to-r ${slide.gradient} hover:scale-[1.03] active:scale-[0.98]`}
                    >
                      Book Live Demo
                    </button>
                    <a
                      href="#products"
                      className="rounded-xl border border-[#1e2f6b]/20 dark:border-[#4a72d4]/25 bg-white/60 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#1e2f6b] dark:text-[#79a8f0] backdrop-blur hover:bg-white hover:border-[#c0392b]/40 hover:text-[#c0392b] dark:hover:bg-[#1e2f6b]/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      View Capabilities
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Graphic Panel */}
            <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full max-w-[360px] aspect-square rounded-2xl border border-zinc-200/50 bg-white/40 p-6 dark:border-zinc-800/40 dark:bg-zinc-900/35 flex flex-col justify-between shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-radial from-transparent to-black/5 opacity-50 dark:to-black/35" />

                  {/* Decorative blobs — CSS animations only */}
                  <div className={`absolute right-4 top-4 h-12 w-12 rounded-full opacity-20 blur-sm bg-gradient-to-r ${slide.gradient} animate-float-slow`} />
                  <div className={`absolute left-4 bottom-4 h-16 w-16 rounded-full opacity-10 blur-sm bg-gradient-to-r ${slide.gradient} animate-float-slow-reverse`} />

                  <div className="flex items-center justify-between border-b border-zinc-200/40 dark:border-zinc-800/40 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">System Dashboard</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  </div>

                  <div className="my-auto space-y-4 relative z-10">
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/3 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <div className="h-4.5 w-full rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[10px] flex items-center px-2 text-zinc-500 animate-pulse-label">
                        {`{"status": "active", "latency": "12ms"}`}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/2 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <div className="h-7 w-full rounded bg-gradient-to-r from-zinc-250 to-zinc-150 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-between px-2 text-xs font-mono text-[#1e2f6b] dark:text-[#79a8f0]">
                        <span>API Load</span>
                        <span className="font-bold text-emerald-500 animate-pulse-label">
                          Normal
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200/40 dark:border-zinc-800/40 pt-3 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                    <span>Server Status: ONLINE</span>
                    <span>v9.2.4</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Dot controls + Progress Timer Bar */}
          <div className="mt-8 sm:mt-12 flex items-center justify-between border-t border-zinc-200/30 dark:border-zinc-800/30 pt-4 sm:pt-6">
            {/* Arrows */}
            <div className="flex gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition-colors hover:scale-110 active:scale-90"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition-colors hover:scale-110 active:scale-90"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Position Indicators */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: idx === currentIndex ? 28 : 8,
                    backgroundColor: idx === currentIndex ? "#c0392b" : "rgba(30,47,107,0.25)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Autoplay line indicator */}
          {isPlaying && (
            <motion.div
              key={`progress-${currentIndex}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: slideDuration / 1000, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0392b] via-[#1e2f6b] to-[#1565c0] origin-left"
              style={{ willChange: "transform" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
