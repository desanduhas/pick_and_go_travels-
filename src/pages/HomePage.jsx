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
    { id: 'tuktuk', title: 'Self Drive Tuk Tuks', desc: 'Bajaj 205cc from $15/day', icon: '🛺', target: 'tuktuk' },
    { id: 'motorbike', title: 'Adventure Motorbikes', desc: 'Honda NC700X, FMX, XR', icon: '🏍️', target: 'rentals', cat: 'motorbike' },
    { id: 'car', title: 'Car with Driver', desc: 'Chauffeured Toyota Voxy & KDH', icon: '🚗', target: 'rentals', cat: 'car-with-driver' },
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
      <section className="section" style={{ padding: '3.5rem 0 2rem' }}>
        <div className="container">
          <div className="page-header" style={{ marginBottom: '2rem' }}>
            <span className="page-pill">Explore Our Services</span>
            <h2 className="page-title">Everything You Need for Sri Lanka Adventure</h2>
            <p className="page-subtitle">
              Choose your ideal vehicle, curated expedition, or comfortable beach stay in Negombo.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}>
            {categories.map((c) => (
              <div
                key={c.id}
                className="ios-card"
                onClick={() => onNavigate(c.target, c.cat)}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  fontSize: '2.2rem',
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {c.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{c.desc}</p>
                </div>
                <ArrowRight size={18} color="var(--text-muted)" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight: Flagship Tuk Tuk Teaser (Distinct Floating Showcase Card) */}
      {tuktuk && (
        <section style={{ padding: '2rem 0 3.5rem' }}>
          <div className="container">
            <div
              className="ios-card"
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(245, 158, 11, 0.22)',
                boxShadow: '0 20px 45px -12px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
                padding: 'clamp(2rem, 4vw, 3.25rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Ambient atmospheric warm orange/gold glow covering the right section */}
              <div
                style={{
                  position: 'absolute',
                  top: '-80px',
                  right: '-60px',
                  width: '540px',
                  height: '540px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(234, 88, 12, 0.09) 45%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(2rem, 4vw, 3.5rem)',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div>
                  <span className="page-pill" style={{ marginBottom: '0.75rem' }}>
                    ⭐ Sri Lanka’s #1 Experience
                  </span>
                  <h2
                    style={{
                      fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                      marginBottom: '1rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      fontWeight: 800
                    }}
                  >
                    Drive Your Own Tuk Tuk Across the Island
                  </h2>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '1.75rem',
                      fontSize: '1.02rem'
                    }}
                  >
                    A self-drive tuk tuk gives you total freedom to stop at roadside coconut stands, climb mountain switchbacks, and swim in secluded beaches at your own pace.
                  </p>

                  {/* 4 Feature Badges in 2x2 Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                      gap: '0.85rem',
                      marginBottom: '2rem'
                    }}
                  >
                    {[
                      { title: 'Free Driving Lesson', desc: '1-on-1 Negombo training', icon: '🎓' },
                      { title: 'Unlimited Kilometers', desc: 'No daily distance caps', icon: '🛣️' },
                      { title: '24/7 Breakdown Help', desc: 'Island-wide mechanic net', icon: '🛠️' },
                      { title: 'Kandy-to-Ella Train', desc: 'We drive your tuk tuk', icon: '🚂' }
                    ].map((f, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-light)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <div style={{ fontSize: '1.25rem', lineHeight: 1 }}>{f.icon}</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                            {f.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {f.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" onClick={() => onNavigate('tuktuk')}>
                      View Complete Tuk Tuk Details <ArrowRight size={16} />
                    </button>
                    <button className="btn btn-outline" onClick={() => onNavigate('pricing')}>
                      Check Price Calculator
                    </button>
                  </div>
                </div>

                {/* Right Vehicle Showcase Box with Glowing Orange Halo around the entire image */}
                <div style={{ position: 'relative' }}>
                  {/* Dedicated Orange/Gold Halo surrounding the image frame */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-12px',
                      borderRadius: 'calc(var(--radius-lg) + 12px)',
                      background:
                        'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.42) 0%, rgba(234, 88, 12, 0.22) 55%, transparent 75%)',
                      filter: 'blur(16px)',
                      pointerEvents: 'none',
                      zIndex: 0
                    }}
                  />

                  {/* Image Card Frame */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      boxShadow:
                        '0 18px 40px -8px rgba(245, 158, 11, 0.3), 0 4px 14px rgba(0, 0, 0, 0.06)',
                      border: '2px solid rgba(245, 158, 11, 0.45)',
                      background: '#ffffff'
                    }}
                  >
                  <img
                    src={tuktuk.image}
                    alt={tuktuk.name}
                    style={{
                      width: '100%',
                      height: '390px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg';
                    }}
                  />
                  {/* Model Tag Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(15, 23, 42, 0.82)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    <span>🛺</span> Bajaj RE 205cc
                  </div>
                  {/* Price Tag Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(12px)',
                      padding: '0.75rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                      textAlign: 'right'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Starting from
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#b45309',
                        lineHeight: 1.1
                      }}
                    >
                      $15 - $18{' '}
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        / day
                      </span>
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
      <section style={{ padding: '3.5rem 0 4.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="page-pill">Curated Adventures</span>
              <h2 className="page-title" style={{ marginBottom: '0.25rem' }}>Popular Island Expeditions</h2>
              <p className="page-subtitle">Expertly planned routes across ancient cities, misty tea country, and southern coastlines.</p>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => onNavigate('tours')}>
              View All Tours <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {featuredTours.map((t) => (
              <div key={t.id} className="ios-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
                <span className="tour-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{t.badge}</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>⏱️ {t.duration}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {t.overview}
                </p>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
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
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <div
            className="ios-card"
            style={{
              background: '#ffffff',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 20px 45px -12px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient soft gold corner glow */}
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                left: '-80px',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
                filter: 'blur(24px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="page-header" style={{ marginBottom: '3rem' }}>
                <span className="page-pill">⭐ Google Verified (5.0 ★ · 120+ Reviews)</span>
                <h2 className="page-title">Loved by Travelers Worldwide</h2>
                <p className="page-subtitle">Read real reviews from international adventurers who explored with Pick &amp; Go Travels.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
                {topReviews.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                      <img
                        src={r.avatar}
                        alt={r.name}
                        style={{ width: '46px', height: '46px', borderRadius: '50%', border: '2px solid var(--accent-gold)' }}
                        onError={(e) => { e.currentTarget.src = company.favicon; }}
                      />
                      <div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{r.name}</h4>
                        <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>✓ Verified Google Review</span>
                      </div>
                    </div>
                    <div style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '0.85rem', letterSpacing: '2px' }}>★★★★★</div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.65, flexGrow: 1 }}>
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
