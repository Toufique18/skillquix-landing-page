import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero/>
      <Price/>
      <Carousel/>
      <Faq/>
      <Footer/>

    </main>
  );
}