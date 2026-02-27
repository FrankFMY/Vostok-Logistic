"use client";

import { motion } from "framer-motion";

const cities = [
  { name: "Москва", x: 57, y: 29, show: true },
  { name: "С.-Петербург", x: 38, y: 16, show: true },
  { name: "Екатеринбург", x: 114, y: 26, show: true },
  { name: "Новосибирск", x: 170, y: 31, show: true },
  { name: "Минск", x: 32, y: 35, show: true },
  { name: "Астана", x: 141, y: 43, show: false },
  { name: "Алматы", x: 155, y: 68, show: false },
  { name: "Ташкент", x: 136, y: 74, show: false },
  { name: "Бишкек", x: 149, y: 69, show: false },
  { name: "Душанбе", x: 135, y: 83, show: false },
  { name: "Тбилиси", x: 75, y: 73, show: false },
  { name: "Баку", x: 87, y: 77, show: false },
  { name: "Ереван", x: 74, y: 78, show: false },
];

const routes: [number, number][] = [
  [0, 1],
  [0, 4],
  [0, 2],
  [0, 10],
  [2, 3],
  [2, 5],
  [5, 6],
  [5, 7],
  [7, 8],
];

function routePath(i1: number, i2: number) {
  const a = cities[i1];
  const b = cities[i2];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - dist * 0.08;
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
          className="bg-bg rounded-2xl border border-gray-border p-4 sm:p-8 overflow-hidden"
        >
          <svg
            viewBox="0 0 200 100"
            className="w-full h-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <defs>
              <pattern
                id="map-dots"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="0.3" fill="#9CA3AF" opacity="0.3" />
              </pattern>
              <radialGradient id="coverage" cx="55%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.06" />
                <stop offset="70%" stopColor="#1E40AF" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="200" height="100" fill="url(#map-dots)" />
            <ellipse cx="110" cy="48" rx="85" ry="45" fill="url(#coverage)" />

            {routes.map(([from, to], i) => (
              <motion.path
                key={`r${from}-${to}`}
                d={routePath(from, to)}
                fill="none"
                stroke="#1E40AF"
                strokeWidth="0.4"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
            ))}

            {cities.map((city, i) => (
              <g key={city.name} className="group" style={{ cursor: "pointer" }}>
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="5"
                  fill="transparent"
                />

                {i === 0 && (
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="1.8"
                    fill="#1E40AF"
                    fillOpacity="0.15"
                  >
                    <animate
                      attributeName="r"
                      from="1.8"
                      to="6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="0.15"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                <circle
                  cx={city.x}
                  cy={city.y}
                  r="1.8"
                  fill="#1E40AF"
                  stroke="white"
                  strokeWidth="0.8"
                />

                <text
                  x={city.x}
                  y={city.y - 4}
                  textAnchor="middle"
                  fill="#111827"
                  fontSize="3.8"
                  fontWeight="600"
                  stroke="white"
                  strokeWidth="2.5"
                  paintOrder="stroke"
                  className={`transition-opacity duration-200 ${
                    city.show
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {city.name}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
