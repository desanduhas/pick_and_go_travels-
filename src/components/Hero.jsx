import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Compass } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const HERO_IMAGES = [
  {
    url: 'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg',
    label: 'Tuk Tuk Nature'
  },
  {
    url: 'https://pickandgotravels.com/wp-content/uploads/2024/05/IMG_20230603_141753_464.jpg',
    label: 'Coastal Road'
  },
  {
    url: 'https://pickandgotravels.com/wp-content/uploads/2024/05/Every-Road-Leads-to-Excitement-Explore-with-your-own-bike.jpg',
    label: 'Motorbike Tour'
  },
  {
    url: 'https://pickandgotravels.com/wp-content/uploads/2024/05/353022591_834461294772320_92441791089817420_n.jpg',
    label: 'Island Adventure'
  }
];

export default function Hero({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const { company } = SITE_DATA;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-wrapper">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`hero-bg-slide ${idx === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${img.url}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-pill">
          <Star size={14} fill="currentColor" />
          Sri Lanka's #1 Rated Self-Drive Rental Company
        </div>
        <h1 className="hero-title">
          Rent a Tuk Tuk in Sri Lanka &amp; <span className="text-gradient">Explore Without Limits</span>
        </h1>
        <p className="hero-desc">
          Discover Sri Lanka like a true adventurer. With your own self-drive tuk tuk or motorbike, explore tropical coastlines, misty tea mountains, roaring waterfalls, wildlife national parks, and ancient UNESCO kingdoms at your own pace.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary btn-lg hero-btn-primary"
            onClick={() => onNavigate && onNavigate('tuktuk')}
          >
            <Compass size={20} />
            Rent Your Tuk-Tuk
          </button>
          <div className="hero-sub-actions">
            <button
              className="btn btn-outline btn-lg hero-btn-secondary"
              onClick={() => onNavigate && onNavigate('pricing')}
            >
              Calculate Price
            </button>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I want to rent a tuk tuk in Sri Lanka.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg hero-btn-whatsapp"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Live Trust Statistics */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Unlimited Kilometers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Island-Wide Breakdown Help</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5.0 ★</span>
            <span className="stat-label">Google Verified Reviews</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">$14</span>
            <span className="stat-label">Daily Rates Starting From</span>
          </div>
        </div>
      </div>

      {/* Interactive Apple iOS Slide Indicators */}
      <div className="hero-slide-indicators" aria-label="Photo Slideshow Controls">
        {HERO_IMAGES.map((img, idx) => (
          <button
            key={idx}
            className={`hero-slide-dot ${idx === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(idx)}
            aria-label={`View photo ${idx + 1}: ${img.label}`}
          >
            <span className="dot-indicator" />
            <span>{img.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
