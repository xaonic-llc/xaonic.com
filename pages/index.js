import Head from 'next/head';
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
      <Head>
        <title>Xaonic - Web Development Company | MVP, SaaS & Shopify Apps</title>
        <meta name="description" content="Xaonic helps startups build MVPs, SaaS platforms, and Shopify apps. 10+ years experience with Laravel, Node.js, React, Vue.js. Customer-focused development partner." />
        <meta name="keywords" content="web development, MVP development, SaaS development, Shopify apps, Laravel, Node.js, React, Vue.js, startup development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xaonic.com/" />
        <meta property="og:title" content="Xaonic - Web Development Company" />
        <meta property="og:description" content="Transform your startup ideas into digital reality with our expert development team." />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xaonic.com/" />
        <meta property="twitter:title" content="Xaonic - Web Development Company" />
        <meta property="twitter:description" content="Transform your startup ideas into digital reality with our expert development team." />
        <meta property="twitter:image" content="/og-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Xaonic",
              "url": "https://xaonic.com",
              "logo": "https://xaonic.com/logo.svg",
              "description": "Web development company specializing in MVP development, SaaS platforms, and Shopify apps",
              "foundingDate": "2014",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "email": "hello@xaonic.com"
              },
              "sameAs": [
                "https://linkedin.com/company/xaonic",
                "https://twitter.com/xaonic"
              ],
              "service": [
                "MVP Development",
                "SaaS Development", 
                "Shopify App Development",
                "Team Building",
                "Web Development Consulting"
              ]
            })
          }}
        />
      </Head>

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
