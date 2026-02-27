"use client";

import { motion } from "framer-motion";

const points = [
  { name: "Москва", x: 30, y: 22, country: "Россия" },
  { name: "Санкт-Петербург", x: 22, y: 15, country: "Россия" },
  { name: "Екатеринбург", x: 55, y: 20, country: "Россия" },
  { name: "Новосибирск", x: 80, y: 22, country: "Россия" },
  { name: "Минск", x: 20, y: 26, country: "Беларусь" },
  { name: "Астана", x: 68, y: 32, country: "Казахстан" },
  { name: "Алматы", x: 78, y: 44, country: "Казахстан" },
  { name: "Ташкент", x: 64, y: 52, country: "Узбекистан" },
  { name: "Бишкек", x: 72, y: 50, country: "Кыргызстан" },
  { name: "Душанбе", x: 64, y: 58, country: "Таджикистан" },
  { name: "Тбилиси", x: 35, y: 46, country: "Грузия" },
  { name: "Баку", x: 44, y: 50, country: "Азербайджан" },
  { name: "Ереван", x: 40, y: 53, country: "Армения" },
];

const routes = [
  { from: 0, to: 1 },
  { from: 0, to: 4 },
  { from: 0, to: 2 },
  { from: 0, to: 10 },
  { from: 2, to: 3 },
  { from: 2, to: 5 },
  { from: 5, to: 6 },
  { from: 5, to: 7 },
  { from: 7, to: 8 },
];

function routePath(fromIdx: number, toIdx: number) {
  const a = points[fromIdx];
  const b = points[toIdx];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - dist * 0.1;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

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
            Собственные представительства и партнёрская сеть в 9 странах
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative bg-bg rounded-2xl border border-gray-border p-6 sm:p-10 overflow-hidden"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
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

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 70"
              fill="none"
            >
              <path
                d="M 12 12 Q 18 8 28 12 Q 40 8 55 10 Q 70 6 85 14 Q 92 18 88 24 Q 84 28 78 30 Q 76 36 78 44 Q 80 50 74 54 Q 68 60 60 58 Q 52 56 46 52 Q 40 56 34 50 Q 28 44 22 36 Q 16 30 14 24 Q 10 18 12 12 Z"
                fill="#1E40AF"
                fillOpacity="0.05"
                stroke="#1E40AF"
                strokeWidth="0.3"
                strokeOpacity="0.2"
              />
            </svg>

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 70"
              fill="none"
            >
              {routes.map((route, i) => (
                <motion.path
                  key={i}
                  d={routePath(route.from, route.to)}
                  stroke="#1E40AF"
                  strokeWidth="0.25"
                  fill="none"
                  opacity={0.35}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                />
              ))}
            </svg>

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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "Россия",
              "Беларусь",
              "Казахстан",
              "Узбекистан",
              "Кавказ",
              "Кыргызстан",
              "Таджикистан",
            ].map((country) => (
              <div
                key={country}
                className="flex items-center gap-1.5 text-xs text-gray"
              >
                <div className="w-2 h-2 rounded-full bg-blue" />
                {country}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
