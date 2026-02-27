"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, MapPin, Package, Weight, Clock, Banknote } from "lucide-react";

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Екатеринбург",
  "Новосибирск",
  "Минск",
  "Астана",
  "Алматы",
  "Ташкент",
  "Бишкек",
  "Душанбе",
  "Тбилиси",
  "Баку",
  "Ереван",
  "Караганда",
  "Шымкент",
];

const cargoTypes = [
  "Генеральный груз",
  "Сборный груз",
  "Негабаритный",
  "Опасный (ADR)",
  "Скоропортящийся",
  "Хрупкий",
];

function fakeCalculate(from: string, to: string, weight: string): { price: string; days: string } {
  const w = parseInt(weight) || 100;
  const base = from !== to ? 800 : 400;
  const distance = Math.abs(cities.indexOf(from) - cities.indexOf(to)) + 1;
  const price = Math.round(base * distance + w * 2.5);
  const days = Math.max(2, Math.min(14, distance * 2));
  return {
    price: price.toLocaleString("ru-RU"),
    days: `${days}–${days + 2}`,
  };
}

export default function Calculator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cargo, setCargo] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ price: string; days: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to && cargo && weight) {
      setResult(fakeCalculate(from, to, weight));
    }
  };

  const selectClass =
    "w-full pl-4 pr-10 py-3 rounded-lg border border-gray-border bg-white text-sm text-dark focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-no-repeat";

  return (
    <section id="calculator" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-orange" />
            <span className="text-orange text-xs font-semibold uppercase tracking-widest">
              Калькулятор
            </span>
            <div className="w-8 h-px bg-orange" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Рассчитайте стоимость доставки
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, margin: "-60px" }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-border shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue" />
                Откуда
              </label>
              <select
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Город отправления
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange" />
                Куда
              </label>
              <select
                required
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Город назначения
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium mb-1.5">
                <Package className="w-3.5 h-3.5 text-blue" />
                Тип груза
              </label>
              <select
                required
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Выберите тип
                </option>
                {cargoTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium mb-1.5">
                <Weight className="w-3.5 h-3.5 text-blue" />
                Вес (кг)
              </label>
              <input
                type="number"
                required
                min="1"
                max="25000"
                placeholder="Введите вес"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-border bg-white text-sm placeholder:text-gray-light focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue hover:bg-blue-dark text-white py-3.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue/20"
          >
            <CalcIcon className="w-4 h-4" />
            Рассчитать
          </button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 grid sm:grid-cols-2 gap-4"
            >
              <div className="bg-blue-light rounded-xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue flex items-center justify-center shrink-0">
                  <Banknote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray mb-0.5">
                    Ориентировочная стоимость
                  </p>
                  <p className="text-xl font-bold text-blue">
                    {result.price} ₽
                  </p>
                </div>
              </div>
              <div className="bg-orange-light rounded-xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-orange flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray mb-0.5">Срок доставки</p>
                  <p className="text-xl font-bold text-orange-dark">
                    {result.days} дней
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
