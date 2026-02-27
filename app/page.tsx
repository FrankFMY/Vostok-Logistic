import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Geography from "@/components/Geography";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Geography />
        <Stats />
        <Services />
      </main>
      <Footer />
    </>
  );
}
