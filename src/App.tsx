import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Menu from './components/Menu';
import InstagramFeed from './components/InstagramFeed';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Vestiges Café',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
      '@id': '',
      url: '',
      telephone: '',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '19:30',
      },
      servesCuisine: ['Coffee', 'Desserts', 'Pastries'],
      description:
        'Vestiges Café is a small artisanal space in the heart of Paris. We serve handmade desserts, specialty coffee, and floral-inspired drinks in a cozy, slow-living atmosphere.',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Featured />
      <Menu />
      <InstagramFeed />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="reserve">
        <Reservation />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
