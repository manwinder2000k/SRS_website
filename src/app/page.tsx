"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { Star, MessageSquareQuote } from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroSwiper from "@/components/HeroSwiper";
import ClientMarquee from "@/components/ClientMarquee";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy-load all below-fold sections for faster initial paint
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const WebDevSection = lazy(() => import("@/components/WebDevSection"));
const DownloadSection = lazy(() => import("@/components/DownloadSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const DemoModal = lazy(() => import("@/components/DemoModal"));
const Footer = lazy(() => import("@/components/Footer"));

// Lightweight skeleton used as Suspense fallback
function SectionSkeleton() {
  return (
    <div className="py-20 flex items-center justify-center opacity-30" aria-hidden="true">
      <div className="h-2 w-32 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
    </div>
  );
}

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "S.R Cloud ERP redesigned our entire warehouse system. The integration has dropped inventory lag to near zero. Absolutely vital for our growth.",
    author: "Elena Rostova",
    role: "VP of Logistics, Apex Retail",
    rating: 5,
  },
  {
    quote: "Reconciliation times dropped from days to minutes using their FinTech ledger. Compliance reports are compiled automatically. Five-star support!",
    author: "David Chen",
    role: "Chief Architect, Nova Ledger",
    rating: 5,
  },
  {
    quote: "Their Web Development team is incredible. They delivered a fully responsive, pixel-perfect Next.js store with an initial Lighthouse rating of 99.",
    author: "Sarah Jenkins",
    role: "Founder, Skyline Cloud",
    rating: 5,
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProductDemo, setSelectedProductDemo] = useState("S.R Cloud ERP");

  // Sync theme with local storage & document element classes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Section highlighting based on intersection scrolls
  useEffect(() => {
    const sections = ["home", "about", "products", "webdev", "clients", "download", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const triggerBookDemo = (productName?: string) => {
    if (productName) {
      setSelectedProductDemo(productName);
    }
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-[#1e2f6b] selection:text-white dark:selection:bg-[#1565c0] transition-colors duration-300">

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Dynamic Background — pure CSS keyframes, no JS-driven animation on fixed layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 dark:opacity-50">
        <div className="glow-blob glow-blob-1" />
        <div className="glow-blob glow-blob-2" />
        <div className="glow-blob glow-blob-3" />
      </div>

      {/* Navbar Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onBookDemo={() => triggerBookDemo()}
      />

      {/* Main Sections */}
      <main className="flex-grow z-10">

        {/* Home Banner Section — eager load, above fold */}
        <div id="home">
          <HeroSwiper onBookDemo={triggerBookDemo} />
        </div>

        {/* Brand client logo banner — eager load, visible immediately */}
        <ClientMarquee />

        {/* Below-fold sections — lazy loaded */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ProductsSection onBookDemo={triggerBookDemo} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <WebDevSection />
        </Suspense>

        {/* Testimonials Block */}
        <section className="relative py-20 bg-[#f0f3fa] dark:bg-zinc-950/60 sm:py-24 border-y border-[#d4daf0]/60 dark:border-[#1e2f6b]/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                className="badge-brand inline-flex"
              >
                <MessageSquareQuote className="h-3.5 w-3.5" />
                Customer Success
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
              >
                What Our Partners Say About <br /><span className="text-gradient">VISION SOFTWARE SOLUTIONS</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.2 }}
                className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed"
              >
                Feedback from technical directors and founders who rely on S.R Software Solutions platforms every day.
              </motion.p>
            </div>

            {/* Testimonials Grid Cards */}
            <motion.div
              className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {TESTIMONIALS.map((test, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
                  }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                  className="interactive-card flex flex-col justify-between rounded-2xl border border-[#d4daf0]/70 bg-white p-6 shadow-sm dark:border-[#1e2f6b]/25 dark:bg-[#0e1223]/70 relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 italic text-sm leading-relaxed">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#e8ecf5] pt-4 dark:border-[#1e2f6b]/30 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#c0392b] to-[#1e2f6b] text-white font-extrabold flex items-center justify-center text-sm">
                      {test.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900 dark:text-white">{test.author}</div>
                      <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">{test.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resources / PDF downloads Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <DownloadSection />
        </Suspense>

        {/* Map & Feedback inquiries Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>

      </main>

      {/* Footer Details */}
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>

      {/* Demo Scheduler Modal dialog */}
      <Suspense fallback={null}>
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          selectedProduct={selectedProductDemo}
        />
      </Suspense>

    </div>
  );
}
