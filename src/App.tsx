import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header/Header";
import Logos from "./Logos/Logos";

export default function App() {
  return (
    <>
      <Header></Header>
      <Logos></Logos>
      <About></About>
      <Banner></Banner>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
