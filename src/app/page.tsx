"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroSwiper from "@/components/HeroSwiper";
import ClientMarquee from "@/components/ClientMarquee";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WebDevSection from "@/components/WebDevSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import DemoModal from "@/components/DemoModal";
import Footer from "@/components/Footer";

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
      rootMargin: "-40% 0px -55% 0px", // High precision active window boundary
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
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white dark:selection:bg-cyan-500 transition-colors duration-300">

      {/* Dynamic Background decorative glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 dark:opacity-40">
        <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute top-[50%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[100px]" />
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

        {/* Home Banner Section */}
        <div id="home">
          <HeroSwiper onBookDemo={triggerBookDemo} />
        </div>

        {/* Brand client logo banner */}
        <ClientMarquee />

        {/* Vision & Core Pillars Section */}
        <AboutSection />

        {/* Core Products Grid Section */}
        <ProductsSection onBookDemo={triggerBookDemo} />

        {/* Customized Web Stack Section */}
        <WebDevSection />

        {/* Testimonials Block */}
        <section className="relative py-20 bg-zinc-50 dark:bg-zinc-950/45 sm:py-24 border-y border-zinc-200/50 dark:border-zinc-850">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400">
                <MessageSquareQuote className="h-3.5 w-3.5" />
                Customer Success
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                What Our Partners Say About <br /><span className="text-gradient ">VISION SOFTWARE SOLUTIONS</span>
              </h2>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Feedback from technical directors and founders who rely on S.R Software Solutions platforms every day.
              </p>
            </div>

            {/* Testimonials Grid Cards */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {TESTIMONIALS.map((test, index) => (
                <div
                  key={index}
                  className="interactive-card flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 relative overflow-hidden group"
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
                  <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white font-extrabold flex items-center justify-center text-sm">
                      {test.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900 dark:text-white">{test.author}</div>
                      <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">{test.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources / PDF downloads Section */}
        <DownloadSection />

        {/* Map & Feedback inquiries Section */}
        <ContactSection />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Demo Scheduler Modal dialog */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        selectedProduct={selectedProductDemo}
      />

    </div>
  );
}
