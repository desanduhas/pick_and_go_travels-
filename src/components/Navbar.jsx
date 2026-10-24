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
  Palmtree,
  ChevronRight,
  Award,
  CreditCard
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

  const mobileNavSections = [
    {
      sectionLabel: 'VEHICLES & FLEET',
      items: [
        {
          id: 'home',
          title: 'Home',
          subtitle: 'Overview & Signature Travel Styles',
          icon: <Home size={19} />,
          theme: 'nav-theme-home',
          onClick: () => handleNav('home')
        },
        {
          id: 'tuktuk',
          title: 'Rent a TukTuk (Self Drive)',
          subtitle: 'Bajaj 205cc • Unlimited KMs • From $14/day',
          badge: 'TOP PICK',
          icon: <TukTukIcon size={19} />,
          theme: 'nav-theme-tuktuk',
          onClick: () => handleNav('tuktuk')
        },
        {
          id: 'driver',
          title: 'Rent A Car with Driver',
          subtitle: 'Private Chauffeur, Fuel & Free Hotel/Meals',
          badge: 'CHAUFFEUR',
          icon: <ChauffeurCarIcon size={19} />,
          theme: 'nav-theme-driver',
          onClick: () => handleNav('driver')
        },
        {
          id: 'rentals',
          title: 'All Rental Vehicles',
          subtitle: 'Adventure Motorbikes, Scooters & Bicycles',
          icon: <MotorbikeIcon size={19} />,
          theme: 'nav-theme-bike',
          onClick: () => handleNav('rentals', 'all')
        }
      ]
    },
    {
      sectionLabel: 'EXPEDITIONS & STAYS',
      items: [
        {
          id: 'tours',
          title: 'Island Tours & Safaris',
          subtitle: 'Group TukTuk Road Trips & Day Tours',
          badge: 'POPULAR',
          icon: <ExpeditionMapIcon size={19} />,
          theme: 'nav-theme-tours',
          onClick: () => handleNav('tours', 'all')
        },
        {
          id: 'stay',
          title: 'Pick & Go Whitehouse',
          subtitle: 'Negombo Beach Stay from $18/night',
          icon: <VillaStayIcon size={19} />,
          theme: 'nav-theme-stay',
          onClick: () => handleNav('stay')
        }
      ]
    },
    {
      sectionLabel: 'RATES & SUPPORT',
      items: [
        {
          id: 'pricing',
          title: 'Live Price Calculator & Rates',
          subtitle: 'Instant accurate quotes with discounts',
          icon: <Calculator size={19} />,
          theme: 'nav-theme-calc',
          onClick: () => handleNav('pricing')
        },
        {
          id: 'about',
          title: 'About Rocky & Reviews',
          subtitle: '5.0 ★ Google Verified (120+ Reviews)',
          icon: <Star size={19} />,
          theme: 'nav-theme-about',
          onClick: () => handleNav('about')
        },
        {
          id: 'contact',
          title: 'Contact & Bookings',
          subtitle: 'Direct reservation & airport pickup setup',
          icon: <Phone size={19} />,
          theme: 'nav-theme-contact',
          onClick: () => handleNav('contact')
        }
      ]
    }
  ];

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

      {/* Mobile Drawer Menu (Luxury iOS Sheet Style) */}
      <div
        className={`mobile-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile Navigation Menu">
        {/* Subtle Warm Ambient Glow */}
        <div className="drawer-ambient-glow" />

        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-brand-block" onClick={() => handleNav('home')}>
            <img src={company.logoDark} alt="Pick and Go Travels" className="drawer-logo" />
            <div className="drawer-badge-pill">
              <Award size={11} color="var(--accent-orange)" />
              <span>Official Fleet Hub</span>
            </div>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="drawer-scroll-body">
          {mobileNavSections.map((sec, sIdx) => (
            <div key={sIdx} className="drawer-section">
              <div className="drawer-section-label">{sec.sectionLabel}</div>
              <div className="drawer-items-group">
                {sec.items.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      className={`drawer-nav-row ${isActive ? 'active' : ''}`}
                      onClick={item.onClick}
                    >
                      <div className={`drawer-row-icon ${item.theme}`}>
                        {item.icon}
                      </div>
                      <div className="drawer-row-content">
                        <div className="drawer-row-title-line">
                          <span className="drawer-row-title">{item.title}</span>
                          {item.badge && (
                            <span className="drawer-row-badge">{item.badge}</span>
                          )}
                        </div>
                        <span className="drawer-row-sub">{item.subtitle}</span>
                      </div>
                      <ChevronRight size={15} className="drawer-row-arrow" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer">
          <a
            href={`https://wa.me/${company.whatsapp}`}
            className="btn btn-whatsapp drawer-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            <span>Chat with Rocky on WhatsApp</span>
          </a>

          <div className="drawer-footer-badges">
            <div className="drawer-footer-chip">
              <Star size={11} fill="#f59e0b" color="#f59e0b" />
              <span>5.0 Google Verified</span>
            </div>
            <div className="drawer-footer-chip">
              <CreditCard size={11} color="var(--accent-orange)" />
              <span>Visa Accepted (+3.5%)</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
