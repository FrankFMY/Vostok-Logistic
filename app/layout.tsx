import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Восток Логистик — Грузоперевозки по СНГ",
  description:
    "Доставим груз в любую точку СНГ. Сборные грузы, полная загрузка, экспресс-доставка. 12 лет на рынке, 50 000+ доставок.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
