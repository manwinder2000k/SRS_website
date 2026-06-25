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

/* ── Floating decorative orb ───────────────────────────── */
function FloatingOrb({
  size,
  color,
  top,
  left,
  duration,
  delay,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: "blur(2px)",
        opacity: 0.35,
      }}
      animate={{
        y: [0, -20, 10, -15, 0],
        x: [0, 10, -8, 5, 0],
        scale: [1, 1.15, 0.95, 1.1, 1],
        opacity: [0.35, 0.55, 0.3, 0.5, 0.35],
      }}
      transition={{
        duration,
        delay: delay ?? 0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

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
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96,
    }),
  };

  const ActiveIcon = SLIDES[currentIndex].icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f6fc] via-[#edf0f9] to-[#f4f6fc] pt-24 pb-10 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-24">

      {/* Background Graphic blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-70">
        <motion.div
          className="absolute -top-40 right-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full blur-[120px]"
          style={{ backgroundColor: SLIDES[currentIndex].id === 1 ? "#c0392b" : SLIDES[currentIndex].id === 2 ? "#1565c0" : "#1e2f6b", opacity: 0.18 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 left-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full blur-[100px]"
          style={{ backgroundColor: SLIDES[currentIndex].id === 1 ? "#1e2f6b" : SLIDES[currentIndex].id === 2 ? "#c0392b" : "#1565c0", opacity: 0.15 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Floating decorative orbs */}
      <FloatingOrb size={12} color="#c0392b"  top="15%"  left="8%"   duration={5}  delay={0} />
      <FloatingOrb size={8}  color="#1e2f6b"  top="35%"  left="3%"   duration={7}  delay={1} />
      <FloatingOrb size={16} color="#1565c0"  top="70%"  left="6%"   duration={6}  delay={2} />
      <FloatingOrb size={10} color="#c0392b"  top="20%"  left="92%"  duration={8}  delay={0.5} />
      <FloatingOrb size={14} color="#1e2f6b"  top="55%"  left="95%"  duration={5.5} delay={1.5} />
      <FloatingOrb size={9}  color="#1565c0"  top="80%"  left="90%"  duration={7}  delay={0.8} />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Hero entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-8 lg:p-16 overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(192,57,43,0.08) 0%, rgba(30,47,107,0.05) 50%, rgba(21,101,192,0.08) 100%)`,
            }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Top Info Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <motion.span
                className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#1e2f6b]/8 dark:bg-[#1e2f6b]/30 border border-[#1e2f6b]/15 dark:border-[#4a72d4]/25 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#1e2f6b] dark:text-[#79a8f0] shrink-0"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#c0392b]" />
                </motion.span>
                Featured
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={SLIDES[currentIndex].badge}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="text-[10px] sm:text-xs font-bold text-[#c0392b] dark:text-[#e05444] truncate"
                >
                  {SLIDES[currentIndex].badge}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full p-1.5 sm:p-2 text-zinc-400 hover:bg-zinc-200/50 hover:text-zinc-700 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-200 transition shrink-0"
              title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </motion.button>
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
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="space-y-4 sm:space-y-6"
                >
                  <motion.h1
                    className={`text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r ${SLIDES[currentIndex].gradient} leading-tight`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {SLIDES[currentIndex].title}
                  </motion.h1>
                  <motion.p
                    className="text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed max-w-xl sm:text-base lg:text-lg"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {SLIDES[currentIndex].subtitle}
                  </motion.p>

                  {/* Internal metrics */}
                  <motion.div
                    className="inline-flex items-center gap-3 bg-[#1e2f6b]/5 dark:bg-[#1e2f6b]/20 border border-[#1e2f6b]/10 dark:border-[#4a72d4]/20 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-[#0e1223] text-[#1e2f6b] dark:text-[#79a8f0] shadow-sm shrink-0"
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ActiveIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                    <div>
                      <motion.div
                        className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
                        key={SLIDES[currentIndex].statValue}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {SLIDES[currentIndex].statValue}
                      </motion.div>
                      <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                        {SLIDES[currentIndex].statLabel}
                      </div>
                    </div>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <motion.button
                      onClick={() => onBookDemo(SLIDES[currentIndex].title)}
                      className={`rounded-xl px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg hover:brightness-110 transition cursor-pointer bg-gradient-to-r ${SLIDES[currentIndex].gradient}`}
                      whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(30,47,107,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Book Live Demo
                    </motion.button>
                    <motion.a
                      href="#products"
                      className="rounded-xl border border-[#1e2f6b]/20 dark:border-[#4a72d4]/25 bg-white/60 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#1e2f6b] dark:text-[#79a8f0] backdrop-blur hover:bg-white hover:border-[#c0392b]/40 hover:text-[#c0392b] dark:hover:bg-[#1e2f6b]/15 transition"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Capabilities
                    </motion.a>
                  </motion.div>
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
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                    <motion.span
                      className="h-2 w-2 rounded-full bg-emerald-500"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>

                  <div className="my-auto space-y-4 relative z-10">
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/3 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <motion.div
                        className="h-4.5 w-full rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[10px] flex items-center px-2 text-zinc-500"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        {`{"status": "active", "latency": "12ms"}`}
                      </motion.div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-1/2 rounded bg-zinc-250 dark:bg-zinc-800" />
                      <div className="h-7 w-full rounded bg-gradient-to-r from-zinc-250 to-zinc-150 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-between px-2 text-xs font-mono text-[#1e2f6b] dark:text-[#79a8f0]">
                        <span>API Load</span>
                        <motion.span
                          className="font-bold text-emerald-500"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        >
                          Normal
                        </motion.span>
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
              <motion.button
                onClick={handlePrev}
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition"
                whileHover={{ scale: 1.12, x: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="rounded-xl border border-zinc-300 p-1.5 sm:p-2 text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:border-zinc-850 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 transition"
                whileHover={{ scale: 1.12, x: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </motion.button>
            </div>

            {/* Position Indicators */}
            <div className="flex items-center gap-1.5">
              {SLIDES.map((slide, idx) => (
                <motion.button
                  key={slide.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  animate={{
                    width: idx === currentIndex ? 28 : 8,
                    backgroundColor: idx === currentIndex ? "#c0392b" : "rgba(30,47,107,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-2 rounded-full"
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
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
