import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Therapies from "@/components/Therapies";
import Conditions from "@/components/Conditions";
import PriceList from "@/components/PriceList";
import PhotoBreak from "@/components/PhotoBreak";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Therapies />
        <Conditions />
        <PriceList />
        <Booking />
        <PhotoBreak />
        <Contact />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
