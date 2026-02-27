"use client";

import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold tracking-tight block">
                  ВОСТОК
                </span>
                <span className="text-orange text-[10px] font-semibold uppercase tracking-widest">
                  Логистик
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Надёжные грузоперевозки по СНГ с 2013 года. Собственный автопарк,
              страхование, отслеживание.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Услуги</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#services"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Сборные грузы
              </a>
              <a
                href="#services"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Полная загрузка
              </a>
              <a
                href="#services"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Экспресс-доставка
              </a>
              <a
                href="#services"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Негабарит
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Компания</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#geography"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                География
              </a>
              <a
                href="#calculator"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Калькулятор
              </a>
              <a
                href="#"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                О компании
              </a>
              <a
                href="#"
                className="text-white/50 text-sm hover:text-orange transition-colors"
              >
                Вакансии
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:info@vostok-logistic.ru"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-orange transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                info@vostok-logistic.ru
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>г. Москва, ул. Тверская, 22/1</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Пн–Пт: 09:00–18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs">
            &copy; 2025 ООО «Восток Логистик». Все права защищены.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-orange transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-orange transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
