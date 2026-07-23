import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Catalog from "@/components/Catalog";
import LabSection from "@/components/LabSection";
import Production from "@/components/Production";
import Delivery from "@/components/Delivery";
import Objects from "@/components/Objects";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        К содержимому
      </a>

      <Header />

      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <LabSection />
        <Production />
        <Delivery />
        <Objects />
        <About />
        <Calculator />
        <Contact />
      </main>

      <Footer />
      <FloatingCall />
    </>
  );
}
