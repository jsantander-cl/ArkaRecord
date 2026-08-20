import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-primary-container selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Clients />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}