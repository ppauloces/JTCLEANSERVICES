import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactBanner from "./components/ContactBanner";
import WhyChoose from "./components/WhyChoose";
import WhatsappButton from "./components/WhatsappButton";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContactBanner/>
      <WhyChoose />
      <Services />
      <Testimonials />
      <Contact />
      <WhatsappButton />
    </>
  );
}

export default App;
