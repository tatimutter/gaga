import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import CtaBanner from "./components/CtaBanner";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team.tsx";
import Pricing from "./components/Pricing.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
