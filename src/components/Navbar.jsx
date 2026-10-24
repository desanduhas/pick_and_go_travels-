import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Home,
  Calculator,
  Star,
  Phone,
  Layers,
  Sparkles,
  MapPin,
  Palmtree
} from 'lucide-react';
import {
  TukTukIcon,
  ChauffeurCarIcon,
  MotorbikeIcon,
  VanIcon,
  BicycleIcon,
  ExpeditionMapIcon,
  VillaStayIcon
} from './Icons';
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
                  <span className="dropdown-icon-wrap"><ChauffeurCarIcon size={16} /></span>
                  <span className="dropdown-item-text"><strong>Rent A Car with Driver</strong></span>
                  <span className="badge-new">NEW</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'car-with-driver')}>
                  <span className="dropdown-icon-wrap"><VanIcon size={16} /></span>
                  <span className="dropdown-item-text">Rent-A-Car (Self Drive)</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'bicycle')}>
                  <span className="dropdown-icon-wrap"><BicycleIcon size={16} /></span>
                  <span className="dropdown-item-text">Foot Bicycles</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('rentals', 'all')}>
                  <span className="dropdown-icon-wrap"><Layers size={16} /></span>
                  <span className="dropdown-item-text">View All Vehicles</span>
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
                  <span className="dropdown-icon-wrap"><TukTukIcon size={16} /></span>
                  <span className="dropdown-item-text">TukTuk Group Tour</span>
                  <span className="badge-new">POPULAR</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'motorcycle-tour')}>
                  <span className="dropdown-icon-wrap"><MotorbikeIcon size={16} /></span>
                  <span className="dropdown-item-text">Off-Road Motorbike Tours (6-12 Days)</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'day-tour')}>
                  <span className="dropdown-icon-wrap"><MapPin size={16} /></span>
                  <span className="dropdown-item-text">Negombo Day Excursions</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'exploration-tour')}>
                  <span className="dropdown-icon-wrap"><Palmtree size={16} /></span>
                  <span className="dropdown-item-text">Cultural &amp; Nature Expeditions</span>
                </div>
                <div className="dropdown-item" onClick={() => handleNav('tours', 'custom-tour')}>
                  <span className="dropdown-icon-wrap"><Sparkles size={16} /></span>
                  <span className="dropdown-item-text">Tailor-Made Custom Tour</span>
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
              className="mobile-nav-btn"
              style={{ color: currentPage === 'home' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('home')}
            >
              <span className="mobile-nav-icon"><Home size={18} /></span>
              <span>Home</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'tuktuk' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('tuktuk')}
            >
              <span className="mobile-nav-icon"><TukTukIcon size={18} /></span>
              <span>Rent a TukTuk (Self Drive)</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'driver' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('driver')}
            >
              <span className="mobile-nav-icon"><ChauffeurCarIcon size={18} /></span>
              <span>Rent A Car with Driver (Chauffeur)</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'rentals' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('rentals', 'all')}
            >
              <span className="mobile-nav-icon"><MotorbikeIcon size={18} /></span>
              <span>All Rental Vehicles (Bikes, Cars, Scooters)</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'tours' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('tours', 'all')}
            >
              <span className="mobile-nav-icon"><ExpeditionMapIcon size={18} /></span>
              <span>Island Tours &amp; Expeditions</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'pricing' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('pricing')}
            >
              <span className="mobile-nav-icon"><Calculator size={18} /></span>
              <span>Live Price Calculator &amp; Rates</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'stay' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('stay')}
            >
              <span className="mobile-nav-icon"><VillaStayIcon size={18} /></span>
              <span>Pick &amp; Go Whitehouse (Negombo Stay)</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'about' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('about')}
            >
              <span className="mobile-nav-icon"><Star size={18} /></span>
              <span>About Rocky &amp; Reviews</span>
            </button>
          </li>
          <li className="mobile-nav-item">
            <button
              className="mobile-nav-btn"
              style={{ color: currentPage === 'contact' ? 'var(--accent-blue)' : 'inherit' }}
              onClick={() => handleNav('contact')}
            >
              <span className="mobile-nav-icon"><Phone size={18} /></span>
              <span>Contact &amp; Bookings</span>
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
