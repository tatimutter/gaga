import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CtaBanner from "./components/CtaBanner";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main">
        <Services />
        <CtaBanner />
        <Portfolio />
        <About />
        <Team />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
