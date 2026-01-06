import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Platform from './components/Platform.jsx';
import DynamicImageSlider from './components/DynamicImageSlider.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Platform />
      <DynamicImageSlider />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default App