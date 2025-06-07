import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import CallToAction from '../components/CallToAction';
import TechStack from '../components/TechStack';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO />
      <StructuredData />

      <Header />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <CallToAction />
        <TechStack />
        <Partners />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
