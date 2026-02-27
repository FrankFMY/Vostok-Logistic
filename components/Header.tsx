"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";

const links = [
  { label: "Калькулятор", href: "#calculator" },
  { label: "География", href: "#geography" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-border"
          : "bg-dark/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span
              className={`text-base font-bold tracking-tight block ${scrolled ? "text-dark" : "text-white"}`}
            >
              ВОСТОК
            </span>
            <span className="text-orange text-[10px] font-semibold uppercase tracking-widest">
              Логистик
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-gray hover:text-dark"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            className="bg-orange hover:bg-orange-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Рассчитать стоимость
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-dark" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray hover:text-dark py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#calculator"
                onClick={() => setOpen(false)}
                className="bg-orange hover:bg-orange-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center transition-colors mt-2"
              >
                Рассчитать стоимость
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
