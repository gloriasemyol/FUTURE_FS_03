import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SocialFloat from "./components/SocialFloat";

function App() {
  return (
    <div className="bg-offwhite min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <SocialFloat />
    </div>
  );
}

export default App;