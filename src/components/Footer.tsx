"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Send, CheckCircle2, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-zinc-100 border-t border-zinc-200/60 dark:bg-zinc-950 dark:border-zinc-900/60 relative z-10">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-12 lg:gap-12">

          {/* Brand/Summary column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center group w-fit">
              <Image
                src="/vision-logo.png"
                alt="Gulati's Vision Software & Website Development"
                width={140}
                height={56}
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
              />
            </a>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Designing high-performance, compliant, and intuitive enterprise products. Empowering companies globally to scale operations with confidence.
            </p>
            {/* Social Network links */}
            <div className="flex gap-2 sm:gap-3">
              {/* Twitter SVG */}
              <a href="#" className="rounded-lg border border-zinc-250 p-2 text-zinc-555 hover:bg-zinc-200 hover:text-zinc-950 dark:border-zinc-850 dark:hover:bg-zinc-900 dark:hover:text-white transition">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="rounded-lg border border-zinc-250 p-2 text-zinc-555 hover:bg-zinc-200 hover:text-zinc-950 dark:border-zinc-850 dark:hover:bg-zinc-900 dark:hover:text-white transition">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* GitHub SVG */}
              <a href="#" className="rounded-lg border border-zinc-250 p-2 text-zinc-555 hover:bg-zinc-200 hover:text-zinc-950 dark:border-zinc-850 dark:hover:bg-zinc-900 dark:hover:text-white transition">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Globe (Lucide) */}
              <a href="#" className="rounded-lg border border-zinc-250 p-2 text-zinc-555 hover:bg-zinc-200 hover:text-zinc-950 dark:border-zinc-850 dark:hover:bg-zinc-900 dark:hover:text-white transition">
                <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-555">
              Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs sm:text-sm">
              <a href="#home" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Home Page</a>
              <a href="#about" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">About Us</a>
              <a href="#products" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Products</a>
              <a href="#webdev" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Web Development</a>
              <a href="#clients" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Our Clients</a>
              <a href="#download" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Downloads</a>
              <a href="#contact" className="text-zinc-600 hover:text-[#c0392b] dark:text-zinc-400 dark:hover:text-[#4fc3f7] transition">Contact Us</a>
            </div>
          </div>

          {/* Newsletter subscription Column */}
          <div className="sm:col-span-2 md:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 dark:text-zinc-555">
              Product Newsletter
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Subscribe to receive software release notes, feature tutorials, and updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-zinc-250 bg-white/50 px-3 py-2 text-xs outline-none transition focus:border-indigo-500 dark:border-zinc-850 dark:bg-zinc-900/40 dark:focus:border-indigo-500"
                  placeholder="name@company.com"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#1e2f6b] px-3 py-2 text-white dark:bg-[#1565c0] dark:text-white hover:brightness-110 active:scale-[0.98] transition cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Subscription successful!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom row copyrights */}
        <div className="mt-10 sm:mt-12 border-t border-zinc-200/60 pt-5 sm:pt-6 dark:border-zinc-900/60 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-xs text-zinc-550">
          <span>
            &copy; {new Date().getFullYear()} S.R Software Solutions. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition">SLA Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
