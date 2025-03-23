import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Logos from "./Logos/Logos";
import Navigation from "./Navigation/Navigation";
import Team from "./Team/Team";
import SmoothScroll from "./components/SmoothScroll";
import { useState } from "react";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(false);

  if (loading === true) {
    return <Preloader setIsLoading={setLoading}></Preloader>;
  }
  return (
    <SmoothScroll>
      <Navigation></Navigation>
      <Header></Header>
      <Logos></Logos>
      <About></About>
      <Banner></Banner>
      <Team></Team>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </SmoothScroll>
  );
}
