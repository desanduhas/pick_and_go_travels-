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

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Visual Column */}
          <div>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              marginBottom: '1.25rem',
              border: '1px solid var(--border-light)'
            }}>
              <img
                src={selectedImage}
                alt={tuktuk.name}
                style={{ width: '100%', height: '340px', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(0,0,0,0.85)',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                border: '1px solid var(--border-gold)'
              }}>
                Most Popular Choice
              </span>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(11,15,25,0.92)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-gold)',
                textAlign: 'right'
              }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Daily Rates from</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                  $15 - $18 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/ day</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              <div
                onClick={() => setSelectedImage(tuktuk.image)}
                style={{
                  height: '75px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: selectedImage === tuktuk.image ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)'
                }}
              >
                <img src={tuktuk.image} alt="Tuk Tuk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {tuktuk.secondaryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    height: '75px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImage === img ? '2px solid var(--accent-gold)' : '1px solid var(--border-light)'
                  }}
                >
                  <img src={img} alt="Tuk Tuk Sri Lanka" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{tuktuk.name}</h3>
            <p style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>{tuktuk.tagline}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{tuktuk.description}</p>

            {/* Pricing Tiers Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {tuktuk.prices.map((p, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.range}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-gold)', margin: '0.15rem 0' }}>
                    {p.price}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{p.period}</div>
                </div>
              ))}
            </div>

            {/* Inclusions Checklist */}
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>What’s Included in Every Rental:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {tuktuk.features.map((f, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Check size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
    </section>
  );
}
