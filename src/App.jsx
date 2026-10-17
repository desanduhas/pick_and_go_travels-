import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SplashScreen from './components/SplashScreen';

// Dedicated iOS Light Mode Pages
import HomePage from './pages/HomePage';
import TuktukPage from './pages/TuktukPage';
import RentalsPage from './pages/RentalsPage';
import ToursPage from './pages/ToursPage';
import PricingPage from './pages/PricingPage';
import StayPage from './pages/StayPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Parse initial page from URL hash if available
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'tuktuk', 'rentals', 'tours', 'pricing', 'stay', 'about', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [fleetCategory, setFleetCategory] = useState('all');
  const [tourCategory, setTourCategory] = useState('all');
  const [calculatorVehicleId, setCalculatorVehicleId] = useState('tuktuk-bajaj');
  const [bookingService, setBookingService] = useState('TukTuk Self Drive');
  const [bookingMessage, setBookingMessage] = useState('');

  // Enforce scroll to top on initial page load / refresh and during splash screen
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();

    // Repeated clamp during initial hydration & splash screen (first 2.2 seconds)
    const interval = setInterval(resetScroll, 50);

    const stopTimer = setTimeout(() => {
      clearInterval(interval);
      resetScroll();
    }, 2200);

    window.addEventListener('load', resetScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(stopTimer);
      window.removeEventListener('load', resetScroll);
    };
  }, []);

  // Synchronize browser history (Back / Forward buttons) and reset scroll to top
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'tuktuk', 'rentals', 'tours', 'pricing', 'stay', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Apple iOS Scroll Reveal Observer
  useEffect(() => {
    const selector = '.ios-card, .vehicle-card, .tour-card, .stat-card, .room-card, .review-card, .faq-card, .feature-item, .page-header, .pricing-table-card, .about-img-box, .contact-info-card, .booking-form-card';
    
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
          const siblingIndex = Array.from(el.parentElement?.children || []).indexOf(el);
          if (siblingIndex > 0 && siblingIndex <= 5) {
            el.classList.add(`delay-${siblingIndex}`);
          }
        }
        
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    }, 60);

    return () => clearTimeout(timeoutId);
  }, [currentPage, fleetCategory, tourCategory]);

  // Central Navigation Handler
  const handleNavigate = (page, category = null, service = null, message = null) => {
    if (category) {
      if (page === 'rentals') setFleetCategory(category);
      if (page === 'tours') setTourCategory(category);
    }
    if (service) setBookingService(service);
    if (message) setBookingMessage(message);

    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleSelectCalculatorVehicle = (vehicleId) => {
    setCalculatorVehicleId(vehicleId);
  };

  const handleBookPackage = (vehicle, days, total, vehicleQty = 1, licenseCount = 1) => {
    let service = 'TukTuk Self Drive';
    if (vehicle.category === 'tuktuk') service = 'TukTuk Self Drive';
    else if (vehicle.category === 'motorbike' || vehicle.category === 'scooter') service = 'Motorbike Rental';
    else if (vehicle.category === 'car-with-driver') service = 'Car with Driver';
    else if (vehicle.category === 'atv') service = 'Beach ATV';
    else if (vehicle.category === 'bicycle') service = 'Foot Bicycle';

    setBookingService(service);
    const vehicleText = vehicleQty > 1 ? `${vehicleQty}x ${vehicle.name}` : vehicle.name;
    const licenseText = licenseCount > 0 ? `, ${licenseCount}x AAC License` : '';
    setBookingMessage(`Hi Rocky, I want to book ${vehicleText} for ${days} days with Full Insurance${licenseText} (Estimated total: $${total}). Please confirm availability.`);
    handleNavigate('contact');
  };

  return (
    <div className="app-root">
      <SplashScreen />
      <AnnouncementBar />
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main id="mainContent">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCalculatorVehicle={handleSelectCalculatorVehicle}
          />
        )}

        {currentPage === 'tuktuk' && (
          <TuktukPage
            onNavigate={handleNavigate}
            onSelectCalculatorVehicle={handleSelectCalculatorVehicle}
          />
        )}

        {currentPage === 'rentals' && (
          <RentalsPage
            initialCategory={fleetCategory}
            onSelectCalculatorVehicle={handleSelectCalculatorVehicle}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'tours' && (
          <ToursPage
            initialCategory={tourCategory}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            selectedVehicleId={calculatorVehicleId}
            onBookPackage={handleBookPackage}
          />
        )}

        {currentPage === 'stay' && (
          <StayPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={bookingService}
            initialMessage={bookingMessage}
          />
        )}
      </main>

      <Footer
        onNavigate={handleNavigate}
      />
      <FloatingActions />
    </div>
  );
}
