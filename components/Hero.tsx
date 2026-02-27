"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
          alt="Грузовой автомобиль на трассе"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-px bg-orange" />
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Грузоперевозки по СНГ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl mb-6"
        >
          Доставим груз в{" "}
          <span className="text-orange">любую точку</span> СНГ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Надёжные перевозки от 1 кг до полной фуры. Отслеживание в реальном
          времени, страхование, гарантия сроков.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#calculator"
            className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white px-7 py-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20"
          >
            Рассчитать стоимость
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white px-7 py-4 rounded-lg text-sm font-medium transition-colors"
          >
            Наши услуги
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3 sm:gap-12"
        >
          {[
            { value: "12 лет", label: "на рынке" },
            { value: "8 стран", label: "присутствия" },
            { value: "24/7", label: "поддержка" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl sm:text-2xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#calculator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
