import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductosSection from "@/components/ProductosSection";
import NosotrosSection from "@/components/NosotrosSection";
import EventosSection from "@/components/EventosSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductosSection />
        <NosotrosSection />
        <EventosSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
