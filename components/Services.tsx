"use client";

import { motion } from "framer-motion";
import { PackageOpen, Truck, Zap, Container } from "lucide-react";

const services = [
  {
    icon: PackageOpen,
    title: "Сборные грузы",
    description:
      "Доставка от 1 кг. Консолидируем грузы от разных отправителей для оптимальной стоимости.",
    features: ["От 1 кг", "Еженедельные рейсы", "Склад хранения"],
  },
  {
    icon: Truck,
    title: "Полная загрузка (FTL)",
    description:
      "Выделенный транспорт для вашего груза. Тенты, рефрижераторы, контейнеровозы.",
    features: ["До 22 тонн", "GPS-мониторинг", "Прямая доставка"],
  },
  {
    icon: Zap,
    title: "Экспресс-доставка",
    description:
      "Срочная доставка в кратчайшие сроки. Приоритетная обработка и выделенный транспорт.",
    features: ["От 24 часов", "Приоритет", "Гарантия сроков"],
  },
  {
    icon: Container,
    title: "Негабаритные грузы",
    description:
      "Перевозка тяжёлых и крупногабаритных грузов. Спецтехника, оборудование, конструкции.",
    features: ["Сопровождение", "Спецтранспорт", "Разрешения"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-white">
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
              Услуги
            </span>
            <div className="w-8 h-px bg-orange" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Решения для вашего бизнеса
          </h2>
          <p className="text-gray text-sm sm:text-base max-w-2xl mx-auto">
            Полный спектр логистических услуг — от мелких отправлений до
            негабаритных грузов
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-bg rounded-2xl p-5 sm:p-6 border border-gray-border hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center mb-4 group-hover:bg-blue transition-colors duration-300">
                <service.icon className="w-5 h-5 text-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-[11px] text-blue bg-blue-light px-2 py-0.5 rounded-md font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
