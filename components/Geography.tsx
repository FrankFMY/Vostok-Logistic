"use client";

import { motion } from "framer-motion";

const points = [
  { name: "Москва", x: 37, y: 28, country: "Россия" },
  { name: "Минск", x: 30, y: 26, country: "Беларусь" },
  { name: "Астана", x: 68, y: 32, country: "Казахстан" },
  { name: "Алматы", x: 70, y: 42, country: "Казахстан" },
  { name: "Ташкент", x: 63, y: 45, country: "Узбекистан" },
  { name: "Бишкек", x: 68, y: 44, country: "Кыргызстан" },
  { name: "Душанбе", x: 63, y: 50, country: "Таджикистан" },
  { name: "Тбилиси", x: 42, y: 44, country: "Грузия" },
  { name: "Баку", x: 47, y: 46, country: "Азербайджан" },
  { name: "Ереван", x: 42, y: 48, country: "Армения" },
  { name: "Новосибирск", x: 72, y: 22, country: "Россия" },
  { name: "Екатеринбург", x: 57, y: 22, country: "Россия" },
];

export default function Geography() {
  return (
    <section id="geography" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-orange" />
            <span className="text-orange text-xs font-semibold uppercase tracking-widest">
              География
            </span>
            <div className="w-8 h-px bg-orange" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Работаем по всему СНГ
          </h2>
          <p className="text-gray text-sm sm:text-base max-w-2xl mx-auto">
            Собственные представительства и партнёрская сеть в 8 странах
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative bg-bg rounded-2xl border border-gray-border p-6 sm:p-10 overflow-hidden"
        >
          {/* Stylized CIS map area */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
            {/* Background grid lines */}
            <svg
              className="absolute inset-0 w-full h-full text-gray-border/50"
              viewBox="0 0 100 70"
              fill="none"
            >
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x) => (
                <line
                  key={`v${x}`}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="70"
                  stroke="currentColor"
                  strokeWidth="0.15"
                />
              ))}
              {[10, 20, 30, 40, 50, 60].map((y) => (
                <line
                  key={`h${y}`}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.15"
                />
              ))}
            </svg>

            {/* Simplified CIS land mass */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 70"
              fill="none"
            >
              <path
                d="M20 20 Q25 15 35 18 Q45 12 55 15 Q65 10 80 14 Q88 16 90 22 Q92 30 88 35 Q85 40 80 42 Q75 48 70 50 Q65 55 58 52 Q50 55 45 52 Q40 50 38 48 Q35 50 30 48 Q25 44 22 38 Q18 30 20 20 Z"
                fill="#1E40AF"
                fillOpacity="0.05"
                stroke="#1E40AF"
                strokeWidth="0.3"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Route lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 70"
              fill="none"
            >
              {[
                { from: points[0], to: points[2] },
                { from: points[0], to: points[1] },
                { from: points[2], to: points[3] },
                { from: points[2], to: points[4] },
                { from: points[4], to: points[5] },
                { from: points[0], to: points[7] },
                { from: points[0], to: points[10] },
                { from: points[10], to: points[2] },
              ].map((route, i) => (
                <motion.line
                  key={i}
                  x1={route.from.x}
                  y1={route.from.y}
                  x2={route.to.x}
                  y2={route.to.y}
                  stroke="#1E40AF"
                  strokeWidth="0.3"
                  strokeDasharray="1 0.5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              ))}
            </svg>

            {/* City points */}
            {points.map((point, i) => (
              <motion.div
                key={point.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                viewport={{ once: true }}
                className="absolute group"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue border-2 border-white shadow-sm" />
                  {i < 4 && (
                    <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue/30 animate-ping top-0 left-0" />
                  )}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -top-7 bg-dark text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded whitespace-nowrap transition-opacity pointer-events-none ${
                      i < 5
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {point.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Казахстан", "Россия", "Узбекистан", "Беларусь", "Кавказ", "Кыргызстан"].map(
              (country) => (
                <div
                  key={country}
                  className="flex items-center gap-1.5 text-xs text-gray"
                >
                  <div className="w-2 h-2 rounded-full bg-blue" />
                  {country}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
