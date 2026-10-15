import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Footer({ onNavigate }) {
  const { company } = SITE_DATA;

  const handleNav = (page, category = null) => {
    if (onNavigate) {
      onNavigate(page, category);
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <button
              onClick={() => handleNav('home')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
            >
              <img src={company.logoDark} alt="Pick & Go Travels" style={{ height: '44px' }} />
            </button>
            <p>
              Pick &amp; Go Travels is one of the most trusted Sri Lanka tuk tuk and vehicle rental companies based in Negombo. We specialize in self-drive tuk tuks, motorbikes, private chauffeurs, guest house accommodation, and unforgettable island adventures.
            </p>
            <div className="social-links">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Vehicle Rentals</h4>
            <ul className="footer-menu">
              <li><button onClick={() => handleNav('tuktuk')} className="footer-link-btn">Self Drive Tuk Tuk Rental</button></li>
              <li><button onClick={() => handleNav('rentals', 'motorbike')} className="footer-link-btn">Honda NC 700X Touring</button></li>
              <li><button onClick={() => handleNav('rentals', 'motorbike')} className="footer-link-btn">Honda FMX 650 &amp; XR Baja</button></li>
              <li><button onClick={() => handleNav('rentals', 'scooter')} className="footer-link-btn">Honda Dio &amp; TVS Scooters</button></li>
              <li><button onClick={() => handleNav('rentals', 'car-with-driver')} className="footer-link-btn">Chauffeured Cars &amp; Vans</button></li>
              <li><button onClick={() => handleNav('rentals', 'atv')} className="footer-link-btn">Negombo Beach Quad ATVs</button></li>
              <li><button onClick={() => handleNav('rentals', 'bicycle')} className="footer-link-btn">Foot Bicycles</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tours &amp; Travel</h4>
            <ul className="footer-menu">
              <li><button onClick={() => handleNav('tours', 'group-tour')} className="footer-link-btn">TukTuk Group Tour Adventure</button></li>
              <li><button onClick={() => handleNav('tours', 'motorcycle-tour')} className="footer-link-btn">12-Day Off-Road Classic</button></li>
              <li><button onClick={() => handleNav('tours', 'motorcycle-tour')} className="footer-link-btn">07-Day Off-Road Classic</button></li>
              <li><button onClick={() => handleNav('tours', 'motorcycle-tour')} className="footer-link-btn">06-Day Off-Road Classic</button></li>
              <li><button onClick={() => handleNav('tours', 'exploration-tour')} className="footer-link-btn">Cultural Heritage Tour</button></li>
              <li><button onClick={() => handleNav('tours', 'day-tour')} className="footer-link-btn">Sigiriya &amp; Kandy Day Trips</button></li>
              <li><button onClick={() => handleNav('stay')} className="footer-link-btn">Pick &amp; Go Whitehouse Stay</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Assistance</h4>
            <ul className="footer-menu">
              <li><button onClick={() => handleNav('pricing')} className="footer-link-btn">Instant Price Calculator</button></li>
              <li><button onClick={() => handleNav('pricing')} className="footer-link-btn">Transparent Price Table</button></li>
              <li><button onClick={() => handleNav('about')} className="footer-link-btn">License &amp; Permit Rules (FAQs)</button></li>
              <li><button onClick={() => handleNav('about')} className="footer-link-btn">Meet Rocky &amp; Our Story</button></li>
              <li><button onClick={() => handleNav('about')} className="footer-link-btn">Google Reviews (5.0★)</button></li>
              <li><button onClick={() => handleNav('contact')} className="footer-link-btn">Book Online / Inquire</button></li>
              <li><a href={`tel:${company.phone1.replace(/\s+/g, '')}`} className="footer-link-btn">{company.phone1}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pick &amp; Go Travels. All Rights Reserved. {company.address}.</p>
          <p>Licensed &amp; Registered Sri Lanka Vehicle Rental &amp; Tourism Service Provider.</p>
        </div>
      </div>
    </footer>
  );
}
