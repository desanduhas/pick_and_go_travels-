import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { company } = SITE_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page, category = null) => {
    if (onNavigate) {
      onNavigate(page, category);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="mainHeader">
        <div className="container nav-wrapper">
          <button
            onClick={() => handleNav('home')}
            className="brand-logo"
            aria-label="Pick & Go Travels Home"
          >
            <img src={company.logoDark} alt="Pick And Go Travels Logo" />
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNav('home')}
            >
              Home
            </button>

            <button
              className={`nav-link ${currentPage === 'tuktuk' ? 'active' : ''}`}
              onClick={() => handleNav('tuktuk')}
            >
              Rent a TukTuk
            </button>

            <button
              className={`nav-link ${currentPage === 'driver' ? 'active' : ''}`}
              onClick={() => handleNav('driver')}
            >
              Car with Driver
            </button>

            <div className="nav-dropdown">
              <button
                className={`nav-link ${currentPage === 'rentals' ? 'active' : ''}`}
                onClick={() => handleNav('rentals', 'all')}
              >
                Other Rentals <ChevronDown size={14} style={{ marginLeft: '4px' }} />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => handleNav('driver')}>
                  🚗 <strong>Rent A Car with Driver</strong> <span className="badge-new">NEW</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'car-with-driver')}>
                  🚗 Rent-A-Car (Self Drive)
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'bicycle')}>
                  🚲 Foot Bicycles
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'all')}>
                  📋 View All Vehicles
                </div>
              </div>
            </div>

            <div className="nav-dropdown">
              <button
                className={`nav-link ${currentPage === 'tours' ? 'active' : ''}`}
                onClick={() => handleNav('tours', 'all')}
              >
                Tours <ChevronDown size={14} style={{ marginLeft: '4px' }} />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => handleNav('tours', 'group-tour')}>
                  🛺 TukTuk Group Tour <span className="badge-new">POPULAR</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'motorcycle-tour')}>
                  🏍️ Off-Road Motorbike Tours (6-12 Days)
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'day-tour')}>
                  🗺️ Negombo Day Excursions
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'exploration-tour')}>
                  🌿 Cultural &amp; Nature Expeditions
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'custom-tour')}>
                  ✨ Tailor-Made Custom Tour
                </div>
              </div>
            </div>

            <button
              className={`nav-link ${currentPage === 'pricing' ? 'active' : ''}`}
              onClick={() => handleNav('pricing')}
            >
              Pricing
            </button>

            <button
              className={`nav-link ${currentPage === 'stay' ? 'active' : ''}`}
              onClick={() => handleNav('stay')}
            >
              Stay
            </button>

            <button
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNav('about')}
            >
              About Us
            </button>

            <button
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNav('contact')}
            >
              Contact
            </button>
          </nav>

          {/* Header CTAs */}
          <div className="header-cta-group">
            <button
              className="btn btn-outline btn-sm desktop-only-btn"
              onClick={() => handleNav('pricing')}
            >
              Calculator
            </button>
            <button
              className="btn btn-primary btn-sm header-book-btn"
              onClick={() => handleNav('contact')}
            >
              Book Now
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile Menu">
        <div className="drawer-header">
          <div className="brand-logo" style={{ cursor: 'default' }}>
            <img src={company.logoDark} alt="Pick and Go Travels" />
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={26} />
          </button>
        </div>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'home' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('home')}
            >
              🏠 Home
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'tuktuk' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('tuktuk')}
            >
              🛺 Rent a TukTuk (Self Drive)
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'driver' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('driver')}
            >
              🚗 Rent A Car with Driver (Chauffeur)
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'rentals' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('rentals', 'all')}
            >
              🏍️ All Rental Vehicles (Bikes, Cars, Scooters)
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'tours' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('tours', 'all')}
            >
              🗺️ Island Tours &amp; Expeditions
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'pricing' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('pricing')}
            >
              🧮 Live Price Calculator &amp; Rates
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'stay' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('stay')}
            >
              🏡 Pick &amp; Go Whitehouse (Negombo Stay)
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'about' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('about')}
            >
              ⭐ About Rocky &amp; Reviews
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', font: 'inherit', color: currentPage === 'contact' ? 'var(--accent-blue)' : 'inherit', cursor: 'pointer' }}
              onClick={() => handleNav('contact')}
            >
              📞 Contact &amp; Bookings
            </button>
          </li>
        </ul>
        <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Direct (+94 77 6464 346)
          </a>
          <button
            className="btn btn-primary"
            onClick={() => handleNav('contact')}
          >
            Book Now
          </button>
        </div>
      </aside>
    </>
  );
}
