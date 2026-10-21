import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import { SITE_DATA } from '../data/siteData';
import { ArrowRight, Compass, ShieldCheck, Star, Award, Check } from 'lucide-react';

export default function HomePage({ onNavigate, onSelectCalculatorVehicle }) {
  const { fleet, tours, reviews, company } = SITE_DATA;
  const tuktuk = fleet.find((f) => f.id === 'tuktuk-bajaj');
  const featuredTours = tours.slice(0, 3);
  const topReviews = reviews.slice(0, 3);

  const categories = [
    { id: 'tuktuk', title: 'Self Drive Tuk Tuks', desc: 'Bajaj 205cc from $14/day', icon: '🛺', target: 'tuktuk' },
    { id: 'motorbike', title: 'Adventure Motorbikes', desc: 'Honda NC700X, FMX, XR', icon: '🏍️', target: 'rentals', cat: 'motorbike' },
    { id: 'car', title: 'Rent-A-Car', desc: 'Suzuki Wagon R & Spacia Auto', icon: '🚗', target: 'rentals', cat: 'car-with-driver' },
    { id: 'tours', title: 'Epic Island Tours', desc: '6-12 Day Off-Road & Day Trips', icon: '🗺️', target: 'tours' },
    { id: 'stay', title: 'Whitehouse Stay', desc: 'Negombo Rooms from $18/night', icon: '🏡', target: 'stay' },
    { id: 'calculator', title: 'Live Price Calculator', desc: 'Get instant transparent quotes', icon: '🧮', target: 'pricing' }
  ];

  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 4 Pillars Strip */}
      <FeatureStrip />

      {/* Quick Category Navigation Tiles (Apple iOS Grid) */}
      <section className="section home-categories-section">
        <div className="container">
          <div className="page-header home-categories-header">
            <span className="page-pill">Explore Our Services</span>
            <h2 className="page-title">Everything You Need for Sri Lanka Adventure</h2>
            <p className="page-subtitle">
              Choose your ideal vehicle, curated expedition, or comfortable beach stay in Negombo.
            </p>
          </div>

          <div className="home-categories-grid">
            {categories.map((c) => (
              <div
                key={c.id}
                className="ios-card home-category-card"
                onClick={() => onNavigate(c.target, c.cat)}
              >
                <div className="home-category-icon">
                  {c.icon}
                </div>
                <div className="home-category-body">
                  <h4 className="home-category-title">{c.title}</h4>
                  <p className="home-category-desc">{c.desc}</p>
                </div>
                <ArrowRight size={18} className="home-category-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight: Flagship Tuk Tuk Teaser (Distinct Floating Showcase Card) */}
      {tuktuk && (
        <section className="home-spotlight-section">
          <div className="container">
            <div className="ios-card home-spotlight-card">
              {/* Ambient atmospheric warm orange/gold glow covering the right section */}
              <div className="home-spotlight-glow" />

              <div className="home-spotlight-grid">
                <div className="home-spotlight-content">
                  <span className="page-pill">
                    ⭐ Sri Lanka’s #1 Experience
                  </span>
                  <h2 className="home-spotlight-title">
                    Drive Your Own Tuk Tuk Across the Island
                  </h2>
                  <p className="home-spotlight-desc">
                    A self-drive tuk tuk gives you total freedom to stop at roadside coconut stands, climb mountain switchbacks, and swim in secluded beaches at your own pace.
                  </p>

                  {/* 4 Feature Badges in 2x2 Grid */}
                  <div className="home-spotlight-badges">
                    {[
                      { title: 'Free Driving Lesson', desc: '1-on-1 Negombo training', icon: '🎓' },
                      { title: 'Unlimited Kilometers', desc: 'No daily distance caps', icon: '🛣️' },
                      { title: '24/7 Breakdown Help', desc: 'Island-wide mechanic net', icon: '🛠️' },
                      { title: 'Kandy-to-Ella Train', desc: 'We drive your tuk tuk', icon: '🚂' }
                    ].map((f, i) => (
                      <div key={i} className="home-spotlight-badge-item">
                        <div className="badge-item-icon">{f.icon}</div>
                        <div>
                          <div className="badge-item-title">{f.title}</div>
                          <div className="badge-item-desc">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="home-spotlight-actions">
                    <button className="btn btn-primary" onClick={() => onNavigate('tuktuk')}>
                      View Complete Tuk Tuk Details <ArrowRight size={16} />
                    </button>
                    <button className="btn btn-outline" onClick={() => onNavigate('pricing')}>
                      Check Price Calculator
                    </button>
                  </div>
                </div>

                {/* Right Vehicle Showcase Box with Glowing Orange Halo around the entire image */}
                <div className="home-spotlight-visual-col">
                  {/* Dedicated Orange/Gold Halo surrounding the image frame */}
                  <div className="home-spotlight-halo" />

                  {/* Image Card Frame */}
                  <div className="home-spotlight-img-frame">
                    <img
                      src={tuktuk.image}
                      alt={tuktuk.name}
                      className="home-spotlight-img"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg';
                      }}
                    />
                    {/* Model Tag Pill */}
                    <div className="home-spotlight-model-tag">
                      <span>🛺</span> Bajaj RE 205cc
                    </div>
                    {/* Price Tag Badge */}
                    <div className="home-spotlight-price-tag">
                      <div className="spotlight-price-label">Starting from</div>
                      <div className="spotlight-price-value">
                        $14 - $16 <span className="spotlight-price-period">/ day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Tours Teaser */}
      <section className="home-tours-section">
        <div className="container">
          <div className="home-section-header-row">
            <div>
              <span className="page-pill">Curated Adventures</span>
              <h2 className="page-title">Popular Island Expeditions</h2>
              <p className="page-subtitle">Expertly planned routes across ancient cities, misty tea country, and southern coastlines.</p>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => onNavigate('tours')}>
              View All Tours <ArrowRight size={14} />
            </button>
          </div>

          <div className="home-tours-grid">
            {featuredTours.map((t) => (
              <div key={t.id} className="ios-card home-tour-card">
                <span className="tour-badge">{t.badge}</span>
                <h3 className="home-tour-title">{t.title}</h3>
                <div className="home-tour-duration">⏱️ {t.duration}</div>
                <p className="home-tour-desc">{t.overview}</p>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onNavigate('tours')}
                >
                  View Itinerary &amp; Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Summary (Distinct Floating Showcase Card) */}
      <section className="home-reviews-section">
        <div className="container">
          <div className="ios-card home-reviews-card">
            {/* Ambient soft gold corner glow */}
            <div className="home-reviews-glow" />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="page-header home-reviews-header">
                <span className="page-pill">⭐ Google Verified (5.0 ★ · 120+ Reviews)</span>
                <h2 className="page-title">Loved by Travelers Worldwide</h2>
                <p className="page-subtitle">Read real reviews from international adventurers who explored with Pick &amp; Go Travels.</p>
              </div>

              <div className="home-reviews-grid">
                {topReviews.map((r, i) => (
                  <div key={i} className="home-review-item">
                    <div className="home-review-user-row">
                      <img
                        src={r.avatar}
                        alt={r.name}
                        className="home-review-avatar"
                        onError={(e) => { e.currentTarget.src = company.favicon; }}
                      />
                      <div>
                        <h4 className="home-review-user-name">{r.name}</h4>
                        <span className="home-review-badge">✓ Verified Google Review</span>
                      </div>
                    </div>
                    <div className="home-review-stars">★★★★★</div>
                    <p className="home-review-text">
                      “{r.text}”
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <button className="btn btn-outline" onClick={() => onNavigate('about')}>
                  Read More About Rocky &amp; Team <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
