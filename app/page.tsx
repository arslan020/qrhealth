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
import { getContent } from "@/lib/store";

export const revalidate = 0;

export default async function Home() {
  const content = await getContent();

  return (
    <>
      <Header />
      <main>
        <Hero site={content.site} />
        <Therapies therapies={content.therapies} />
        <Conditions conditions={content.conditions} />
        <PriceList priceList={content.priceList} />
        <Booking />
        <PhotoBreak image={content.photoBreakImage} />
        <Contact contact={content.contact} />
        <Disclaimer disclaimer={content.disclaimer} />
      </main>
      <Footer site={content.site} contact={content.contact} />
    </>
  );
}
