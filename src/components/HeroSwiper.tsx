"use client";

import { useState, useEffect, useRef } from "react";
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
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    id: 2,
    badge: "Retail & Commerce",
    icon: TrendingUp,
    title: "School Management Sofware",
    subtitle: "Powering omnichannel sales, high-speed checkout registers, and smart inventory pipelines globally.",
    statValue: "15M+",
    statLabel: "Daily Transactions",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    id: 3,
    badge: "Fintech & Ledger",
    icon: Cpu,
    title: "Pharmaceutical Software",
    subtitle: "Next-generation multi-ledger networks built for transaction speed, encryption, and banking compliance.",
    statValue: "0.03ms",
    statLabel: "Average Settlement Delay",
    gradient: "from-emerald-500 via-teal-600 to-cyan-500",
    glow: "rgba(16, 185, 129, 0.15)",
  },
];

export default function HeroSwiper({ onBookDemo }: HeroSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideDuration = 6000;

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, slideDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const ActiveIcon = SLIDES[currentIndex].icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-50 pt-24 pb-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-24">
      {/* Background Graphic blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
        <div
          className="absolute -top-40 right-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full blur-[120px] transition-all duration-700"
          style={{ backgroundColor: SLIDES[currentIndex].id === 1 ? "#6366f1" : SLIDES[currentIndex].id === 2 ? "#06b6d4" : "#10b981" }}
        />
        <div
          className="absolute -bottom-20 left-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full blur-[100px] transition-all duration-700"
          style={{ backgroundColor: SLIDES[currentIndex].id === 1 ? "#ec4899" : SLIDES[currentIndex].id === 2 ? "#3b82f6" : "#06b6d4" }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-8 lg:p-16 overflow-hidden">

          {/* Top Info Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-zinc-200/50 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300 shrink-0">
                <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-500" />
                Featured
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-indigo-600 dark:text-cyan-400 truncate">
                {SLIDES[currentIndex].badge}
              </span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full p-1.5 sm:p-2 text-zinc-400 hover:bg-zinc-200/50 hover:text-zinc-700 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-200 transition shrink-0"
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
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h1 className={`text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r ${SLIDES[currentIndex].gradient} leading-tight`}>
                    {SLIDES[currentIndex].title}
                  </h1>
                  <p className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed max-w-xl sm:text-base lg:text-lg">
                    {SLIDES[currentIndex].subtitle}
                  </p>

                  {/* Internal metrics */}
                  <div className="inline-flex items-center gap-3 bg-zinc-200/20 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/30 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 text-indigo-500 shadow-sm shrink-0">
                      <ActiveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {SLIDES[currentIndex].statValue}
                      </div>
                      <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                        {SLIDES[currentIndex].statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
                    <button
                      onClick={() => onBookDemo(SLIDES[currentIndex].title)}
                      className={`rounded-xl px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:brightness-110 transition cursor-pointer bg-gradient-to-r ${SLIDES[currentIndex].gradient}`}
                    >
                      Book Live Demo
                    </button>
                    <a
                      href="#products"
                      className="rounded-xl border border-zinc-300 bg-white/40 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-zinc-800 backdrop-blur hover:bg-white hover:text-indigo-650 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-900 transition"
                    >
                      View Capabilities
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Graphic Panel — hidden on mobile, shows on lg */}
            <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full max-w-[360px] aspect-square rounded-2xl border border-zinc-200/50 bg-white/40 p-6 dark:border-zinc-800/40 dark:bg-zinc-900/35 flex flex-col justify-between shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-radial from-transparent to-black/5 opacity-50 dark:to-black/35" />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className={`absolute right-4 top-4 h-12 w-12 rounded-full opacity-20 blur-sm bg-gradient-to-r ${SLIDES[currentIndex].gradient}`}
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                    className={`absolute left-4 bottom-4 h-16 w-16 rounded-full opacity-10 blur-sm bg-gradient-to-r ${SLIDES[currentIndex].gradient}`}
                  />

                  <div className="flex items-center justify-between border-b border-zinc-200/40 dark:border-zinc-800/40 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">System Dashboard</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  <div className="my-auto space-y-4 relative z-10">
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/3 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <div className="h-4.5 w-full rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[10px] flex items-center px-2 text-zinc-500">
                        {`{"status": "active", "latency": "12ms"}`}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/2 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <div className="h-7 w-full rounded bg-gradient-to-r from-zinc-250 to-zinc-150 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-between px-2 text-xs font-mono text-indigo-500">
                        <span>API Load</span>
                        <span className="font-bold">Normal</span>
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
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Position Indicators */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 sm:w-8 bg-indigo-500" : "w-2 bg-zinc-300 dark:bg-zinc-800"
                    }`}
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
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left"
            />
          )}

        </div>
      </div>
    </section>
  );
}
