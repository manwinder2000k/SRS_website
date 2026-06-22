"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Phone, ShieldCheck } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  activeSection: string;
  onBookDemo: () => void;
}

export default function Navbar({ theme, toggleTheme, activeSection, onBookDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home Page", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Web Development", href: "#webdev" },
    { name: "Our Clients", href: "#clients" },
    { name: "Download", href: "#download" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${scrolled
          ? "border-b border-zinc-200/50 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/90"
          : "bg-white/40 dark:bg-zinc-950/20 backdrop-blur-sm"
          }`}
      >
        {/* Main Navbar container - Double Tier on Desktop, single tier on Mobile */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* TIER 1: Logo & Key Actions (Desktop) / Full Header (Mobile) */}
          <div className="flex items-center justify-between py-3">
            {/* Logo Group */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-md transition group-hover:scale-105">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-lg">
                  VISION SOFTWARE
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-550 dark:text-cyan-400">
                  Solutions
                </span>
              </div>
            </a>

            {/* Desktop Tier 1 Right Actions */}
            <div className="hidden items-center gap-5 md:flex">
              {/* Phone Line */}
              <a
                href="tel:+18005550199"
                className="flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-cyan-400 transition"
                title="Sales Support Direct"
              >
                <Phone className="h-4 w-4 text-indigo-500 dark:text-cyan-450" />
                <span>+0183-5031999</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-2 text-zinc-650 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-50"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
              </button>

              {/* Booking Button */}
              <button
                onClick={onBookDemo}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Actions Header Bar */}
            <div className="flex items-center gap-2.5 md:hidden">
              {/* Mobile Mode Switcher */}
              <button
                onClick={toggleTheme}
                className="rounded-xl border border-zinc-200/80 p-2 text-zinc-650 transition hover:bg-zinc-105 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4.5 w-4.5" />}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-xl border border-zinc-200/80 p-2 text-zinc-655 transition hover:bg-zinc-105 dark:border-zinc-800 dark:text-zinc-450"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* TIER 2: Centered Navigation links (Desktop only, visible md and above) */}
          <div className="hidden border-t border-zinc-200/40 dark:border-zinc-800/40 md:block">
            <nav className="flex justify-center items-center py-2 gap-1.5 lg:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide transition duration-200 lg:text-sm ${activeSection === item.href.slice(1)
                    ? "text-indigo-600 dark:text-cyan-400"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-50"
                    }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </header>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-64 max-w-xs border-l border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-850 dark:bg-zinc-950 md:hidden"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <span className="text-xs font-extrabold tracking-wider text-indigo-500 dark:text-cyan-400 uppercase">
                  Navigation Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav item lists */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${activeSection === item.href.slice(1)
                      ? "bg-indigo-50/50 text-indigo-650 dark:bg-indigo-950/20 dark:text-cyan-400"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Actions Drawer Footer */}
              <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800 space-y-4">
                <a
                  href="tel:+18005550199"
                  className="flex items-center gap-2.5 text-xs font-bold text-zinc-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-cyan-400"
                >
                  <Phone className="h-4.5 w-4.5 text-indigo-500" />
                  <span>+0183-5031999</span>
                </a>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookDemo();
                  }}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-3 text-xs font-bold text-white shadow-md hover:brightness-110"
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
