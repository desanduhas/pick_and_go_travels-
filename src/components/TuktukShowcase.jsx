import React, { useState } from 'react';
import { Check, MessageCircle, Calculator } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function TuktukShowcase({ onSelectCalculatorVehicle }) {
  const tuktuk = SITE_DATA.fleet.find((item) => item.id === 'tuktuk-bajaj');
  const [selectedImage, setSelectedImage] = useState(tuktuk?.image);
  const { company } = SITE_DATA;

  if (!tuktuk) return null;

  return (
    <section className="section" id="tuktuk-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Flagship Vehicle</span>
          <h2 className="section-title">Rent a Tuk Tuk Sri Lanka – Drive, Discover, Delight</h2>
          <p className="section-subtitle">
            Experience Sri Lanka’s most iconic way to travel. Reliable Bajaj RE 205cc Tuk Tuks equipped for comfort, adventure, and memories that last a lifetime.
          </p>
        </div>

        <div className="tuktuk-hero-card">
          <div className="tuktuk-hero-grid">
            {/* Visual Column */}
            <div>
              <div className="tuktuk-img-frame">
                <img
                  src={selectedImage}
                  alt={tuktuk.name}
                  className="tuktuk-main-img"
                />
                <span className="tuktuk-hero-badge">
                  Most Popular Choice
                </span>
                <div className="tuktuk-hero-price-badge">
                  <div className="tuktuk-price-label">Daily Rates from</div>
                  <div className="tuktuk-price-val">
                    $14 - $16 <span className="tuktuk-price-unit">/ day</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="tuktuk-thumbs-grid">
                <div
                  onClick={() => setSelectedImage(tuktuk.image)}
                  className={`tuktuk-thumb-item ${selectedImage === tuktuk.image ? 'active' : ''}`}
                >
                  <img src={tuktuk.image} alt="Tuk Tuk" />
                </div>
                {tuktuk.secondaryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`tuktuk-thumb-item ${selectedImage === img ? 'active' : ''}`}
                  >
                    <img src={img} alt="Tuk Tuk Sri Lanka" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div className="tuktuk-details-col">
              <h3 className="tuktuk-details-title">{tuktuk.name}</h3>
              <p className="tuktuk-details-tagline">{tuktuk.tagline}</p>
              <p className="tuktuk-details-desc">{tuktuk.description}</p>

              {/* Pricing Tiers Pills */}
              <div className="tuktuk-rates-grid">
                {tuktuk.prices.map((p, idx) => (
                  <div key={idx} className="tuktuk-rate-box">
                    <div className="rate-box-range">{p.range}</div>
                    <div className="rate-box-price">{p.price}</div>
                    <div className="rate-box-period">{p.period}</div>
                  </div>
                ))}
              </div>

              {/* Inclusions Checklist */}
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>What’s Included in Every Rental:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {tuktuk.features.map((f, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="tuktuk-action-btns">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (onSelectCalculatorVehicle) onSelectCalculatorVehicle('tuktuk-bajaj');
                    const el = document.getElementById('calculator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Calculator size={18} />
                  Calculate Exact Cost
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I want to rent the Bajaj RE 205cc Tuk Tuk.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Book Tuk Tuk on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
