"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Calendar, Truck, Globe, Package } from "lucide-react";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsub = springValue.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Calendar,
    value: 12,
    suffix: "",
    label: "лет на рынке",
    sub: "с 2013 года",
  },
  {
    icon: Package,
    value: 50000,
    suffix: "+",
    label: "доставок",
    sub: "выполнено успешно",
  },
  {
    icon: Truck,
    value: 200,
    suffix: "+",
    label: "машин",
    sub: "собственный автопарк",
  },
  {
    icon: Globe,
    value: 8,
    suffix: "",
    label: "стран",
    sub: "география присутствия",
  },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-border text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-blue" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-1">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm font-semibold mb-0.5">{stat.label}</p>
              <p className="text-xs text-gray">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
