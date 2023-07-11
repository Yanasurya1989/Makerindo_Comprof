import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Socials from "../components/home/Socials";
import Gallery from "../components/home/Gallery";
import Products from "../components/home/Products";
import News from "../components/home/News";
import Hiring from "../components/home/Hiring";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero tagline="Build Solution Without Exception"/>
      <Socials />
      <About />
      <Gallery />
      <Products />
      <News />
      <Hiring />
      <Contact />
    </>
  )
}