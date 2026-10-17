import React, { useState } from 'react';
import { SITE_DATA } from '../data/siteData';
import { Check, ShieldCheck, Award, Train, HelpCircle, MessageCircle, Calculator } from 'lucide-react';

export default function TuktukPage({ onNavigate, onSelectCalculatorVehicle }) {
  const tuktuk = SITE_DATA.fleet.find((f) => f.id === 'tuktuk-bajaj');
  const [selectedImg, setSelectedImg] = useState(tuktuk?.image);
  const { company, faqs } = SITE_DATA;

  if (!tuktuk) return null;

  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Self-Drive Tuk Tuk Rental</span>
          <h1 className="page-title">Rent a Tuk Tuk in Sri Lanka</h1>
          <p className="page-subtitle">
            Reliable Bajaj RE 205cc Tuk Tuks, unlimited kilometers, nationwide breakdown support, and official Sri Lankan driving permit assistance.
          </p>
        </div>

        {/* Showcase Banner Card */}
        <div className="ios-card tuktuk-hero-card">
          <div className="tuktuk-hero-grid">
            <div className="tuktuk-visual-col">
              <div className="tuktuk-main-img-box">
                <img
                  src={selectedImg}
                  alt={tuktuk.name}
                  className="tuktuk-main-img"
                  onError={(e) => {
                    e.currentTarget.src = tuktuk.image;
                  }}
                />
                <div className="tuktuk-hero-price-badge">
                  <div className="tuktuk-price-label">Starting from</div>
                  <div className="tuktuk-price-val">
                    $14 - $16 <span className="tuktuk-price-unit">/ day</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="tuktuk-thumbs-grid">
                <div
                  onClick={() => setSelectedImg(tuktuk.image)}
                  className={`tuktuk-thumb-item ${selectedImg === tuktuk.image ? 'active' : ''}`}
                >
                  <img
                    src={tuktuk.image}
                    alt="Tuk Tuk"
                    onError={(e) => {
                      e.currentTarget.src = 'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg';
                    }}
                  />
                </div>
                {tuktuk.secondaryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImg(img)}
                    className={`tuktuk-thumb-item ${selectedImg === img ? 'active' : ''}`}
                  >
                    <img
                      src={img}
                      alt="Tuk Tuk Sri Lanka"
                      onError={(e) => {
                        e.currentTarget.src = tuktuk.image;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="tuktuk-details-col">
              <span className="page-pill">Full Package Details</span>
              <h2 className="tuktuk-details-title">{tuktuk.name}</h2>
              <p className="tuktuk-details-tagline">{tuktuk.tagline}</p>
              <p className="tuktuk-details-desc">{tuktuk.description}</p>

              {/* Rate Cards */}
              <div className="tuktuk-rates-grid">
                {tuktuk.prices.map((p, idx) => (
                  <div key={idx} className="tuktuk-rate-box">
                    <div className="rate-box-range">{p.range}</div>
                    <div className="rate-box-price">{p.price}</div>
                    <div className="rate-box-period">{p.period}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="tuktuk-action-btns">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (onSelectCalculatorVehicle) onSelectCalculatorVehicle('tuktuk-bajaj');
                    onNavigate('pricing');
                  }}
                >
                  <Calculator size={18} />
                  Calculate Live Price
                </button>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I want to book the Bajaj RE 205cc Tuk Tuk.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="tuktuk-pillars-grid">
          <div className="ios-card tuktuk-pillar-card">
            <div className="pillar-icon">🎓</div>
            <h3 className="pillar-title">Free 1-on-1 Driving Training</h3>
            <p className="pillar-desc">
              Never driven a manual 3-wheeler before? No problem. Our expert instructors spend as much time as you need in quiet Negombo streets until you are 100% confident.
            </p>
          </div>

          <div className="ios-card tuktuk-pillar-card">
            <div className="pillar-icon">🪪</div>
            <h3 className="pillar-title">Legal Sri Lankan Driving Permit</h3>
            <p className="pillar-desc">
              Foreign licenses require official endorsement by the Automobile Association of Ceylon (AAC). Send us your documents in advance ($40 fee) and arrive with your legal permit ready.
            </p>
          </div>

          <div className="ios-card tuktuk-pillar-card">
            <div className="pillar-icon">🚂</div>
            <h3 className="pillar-title">Kandy to Ella Train Transfer</h3>
            <p className="pillar-desc">
              Don’t miss Sri Lanka’s world-famous scenic blue train! Enjoy the ride from Kandy to Ella with your luggage, and Pick &amp; Go will drive your Tuk Tuk to Ella station waiting for you.
            </p>
          </div>

          <div className="ios-card tuktuk-pillar-card">
            <div className="pillar-icon">🛠️</div>
            <h3 className="pillar-title">24/7 Island Breakdown Support</h3>
            <p className="pillar-desc">
              Every vehicle includes a spare tire, jack, and roadside kit. If you ever need mechanical help, our nationwide network of trusted mechanics is always on call.
            </p>
          </div>
        </div>

        {/* Included Equipment Checklist */}
        <div className="ios-card tuktuk-equipment-card">
          <h3 className="equipment-card-title">
            Equipment &amp; Amenities Included Free:
          </h3>
          <div className="tuktuk-equipment-grid">
            {tuktuk.features.map((f, i) => (
              <div key={i} className="equipment-item">
                <Check size={18} color="var(--accent-emerald)" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Tuk Tuk Questions */}
        <div className="tuktuk-faq-wrapper">
          <div className="page-header tuktuk-faq-header">
            <span className="page-pill">Frequently Asked Questions</span>
            <h2 className="page-title" style={{ fontSize: '2rem' }}>Everything About Renting a Tuk Tuk</h2>
          </div>
          {faqs.slice(0, 4).map((faq, idx) => (
            <div key={idx} className="ios-card tuktuk-faq-card">
              <h4 className="faq-question-title">{faq.q}</h4>
              <p className="faq-answer-text">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
