import React from 'react';
import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function StaySection({ onBookStay }) {
  const { stay } = SITE_DATA;

  return (
    <section className="section section-alt" id="stay-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Accommodation</span>
          <h2 className="section-title">Stay in Negombo – Pick &amp; Go Whitehouse</h2>
          <p className="section-subtitle">
            A welcoming home away from home located in the tourist area of Ettukala, Negombo—just 5 minutes to the beach and 15 minutes to CMB International Airport.
          </p>
        </div>

        <div className="stay-hero-banner">
          <div className="stay-hero-content">
            <span className="hero-pill" style={{ marginBottom: '0.75rem' }}>Guest House &amp; Tourist Lodge</span>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Your Perfect Base Before &amp; After Island Exploration
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Whether arriving on a late flight, preparing for your self-drive tuk tuk orientation, or needing free luggage storage while touring the island, Pick &amp; Go Whitehouse offers clean modern comfort with genuine Sri Lankan hospitality.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (onBookStay) onBookStay();
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reserve a Room
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="stay-grid">
          {stay.rooms.map((room, idx) => (
            <div key={idx} className="room-card">
              <div className="room-card-body">
                <div className="room-price-row">
                  <h3 className="room-name">{room.name}</h3>
                  <div className="room-price">
                    {room.price} <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>{room.period}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>{room.tagline}</p>
                <ul className="room-features-list">
                  {room.features.map((f, i) => (
                    <li key={i}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <a
                    href={`https://wa.me/94776464346?text=${encodeURIComponent(`Hi Rocky! I would like to reserve the ${room.name} at Pick & Go Whitehouse.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={16} />
                    Book Room
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Highlights */}
        <div className="stay-amenities-box">
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>Included Guest Amenities</h3>
          <div className="amenities-grid">
            {stay.amenities.map((am, idx) => (
              <div key={idx} className="amenity-item">
                <Sparkles size={18} color="var(--accent-gold)" />
                <span>{am}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
