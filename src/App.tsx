import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Logos from "./Logos/Logos";
import Navigation from "./Navigation/Navigation";
import Team from "./Team/Team";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Lenis from "lenis";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {loading && <Preloader setIsLoading={setLoading} />}
      <Navigation></Navigation>
      <Header></Header>
      <Logos></Logos>
      <About></About>
      <Banner></Banner>
      <Team></Team>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
