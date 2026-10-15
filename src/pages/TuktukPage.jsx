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
        <div className="ios-card" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem',
                border: '1px solid var(--border-light)'
              }}>
                <img
                  src={selectedImg}
                  alt={tuktuk.name}
                  style={{ width: '100%', height: '360px', objectFit: 'cover', transition: 'opacity 0.25s ease' }}
                  onError={(e) => {
                    e.currentTarget.src = tuktuk.image;
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'right'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Starting from</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#b45309' }}>
                    $15 - $18 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/ day</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                <div
                  onClick={() => setSelectedImg(tuktuk.image)}
                  style={{
                    height: '75px',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImg === tuktuk.image ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)'
                  }}
                >
                  <img
                    src={tuktuk.image}
                    alt="Tuk Tuk"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg';
                    }}
                  />
                </div>
                {tuktuk.secondaryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImg(img)}
                    style={{
                      height: '75px',
                      borderRadius: 'var(--radius-xs)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: selectedImg === img ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)'
                    }}
                  >
                    <img
                      src={img}
                      alt="Tuk Tuk Sri Lanka"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = tuktuk.image;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="page-pill" style={{ marginBottom: '0.5rem' }}>Full Package Details</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{tuktuk.name}</h2>
              <p style={{ color: '#b45309', fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.25rem' }}>{tuktuk.tagline}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{tuktuk.description}</p>

              {/* Rate Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {tuktuk.prices.map((p, idx) => (
                  <div key={idx} style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.range}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#b45309', margin: '0.15rem 0' }}>
                      {p.price}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{p.period}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          <div className="ios-card" style={{ padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎓</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Free 1-on-1 Driving Training</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Never driven a manual 3-wheeler before? No problem. Our expert instructors spend as much time as you need in quiet Negombo streets until you are 100% confident.
            </p>
          </div>

          <div className="ios-card" style={{ padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🪪</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Legal Sri Lankan Driving Permit</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Foreign licenses require official endorsement by the Automobile Association of Ceylon (AAC). Send us your documents in advance ($40 fee) and arrive with your legal permit ready.
            </p>
          </div>

          <div className="ios-card" style={{ padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚂</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Kandy to Ella Train Transfer</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Don’t miss Sri Lanka’s world-famous scenic blue train! Enjoy the ride from Kandy to Ella with your luggage, and Pick &amp; Go will drive your Tuk Tuk to Ella station waiting for you.
            </p>
          </div>

          <div className="ios-card" style={{ padding: '1.75rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🛠️</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>24/7 Island Breakdown Support</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Every vehicle includes a spare tire, jack, and roadside kit. If you ever need mechanical help, our nationwide network of trusted mechanics is always on call.
            </p>
          </div>
        </div>

        {/* Included Equipment Checklist */}
        <div className="ios-card" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
            Equipment &amp; Amenities Included Free:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
            {tuktuk.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <Check size={18} color="var(--accent-emerald)" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Tuk Tuk Questions */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="page-header" style={{ marginBottom: '2rem' }}>
            <span className="page-pill">Frequently Asked Questions</span>
            <h2 className="page-title" style={{ fontSize: '2rem' }}>Everything About Renting a Tuk Tuk</h2>
          </div>
          {faqs.slice(0, 4).map((faq, idx) => (
            <div key={idx} className="ios-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{faq.q}</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
