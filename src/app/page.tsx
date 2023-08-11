import Features from "@/blocks/Features";
import Hero from "@/blocks/Hero";
import Pricing from "@/blocks/Pricing";
import PlaceholderBanner from "@/blocks/PlaceholderBanner";
import Services from "@/blocks/Services";
import Works from "@/blocks/Works";
import WhyUs from "@/blocks/WhyUs";
import Reviews from "@/blocks/Reviews";
import Newsletter from "@/blocks/Newsletter";

const Home = () => {
  return (
    <main className="relative">
      <Hero/>
      <PlaceholderBanner/>
      <Features/>
      <Services/>
      <Works/>
      <WhyUs/>
      <Pricing/>
      <Reviews/>
      <Newsletter/>
    </main>
  )
}

export default Home;
