import React from 'react';
import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import { SITE_DATA } from '../data/siteData';
import { ArrowRight, Compass, ShieldCheck, Star, Award, Check, Clock, GraduationCap, Gauge, Wrench } from 'lucide-react';
import {
  TukTukIcon,
  ChauffeurCarIcon,
  MotorbikeIcon,
  VanIcon,
  ExpeditionMapIcon,
  VillaStayIcon,
  TrainIcon
} from '../components/Icons';

export default function HomePage({ onNavigate, onSelectCalculatorVehicle }) {
  const { fleet, reviews, company } = SITE_DATA;
  const tuktuk = fleet.find((f) => f.id === 'tuktuk-bajaj');
  const topReviews = reviews.slice(0, 3);

  const signaturePackages = [
    {
      id: 'pkg-tuktuk',
      badgeIcon: <TukTukIcon size={14} />,
      badge: 'Most Popular Travel',
      title: 'Self-Drive Tuk Tuk Adventure',
      image: '/images/background/moment-04.jpg',
      duration: 'Flexible (1 to 30+ Days)',
      price: 'From $14 / day',
      desc: 'Experience total freedom exploring Sri Lanka’s beaches, waterfalls, and tea country behind the handlebars of your own tuk tuk.',
      features: [
        '1-on-1 Driving Lesson & Local License',
        '100% Unlimited Kilometers',
        '24/7 Breakdown & Mechanic Support',
        'Kandy-to-Ella Train Luggage Delivery'
      ],
      ctaText: 'Explore Tuk Tuk Rental',
      target: 'tuktuk'
    },
    {
      id: 'pkg-driver',
      badgeIcon: <ChauffeurCarIcon size={14} />,
      badge: 'Private Chauffeur & Guide',
      title: 'Rent A Car with Driver (Chauffeured Tour)',
      image: '/images/honda-shuttle.jpg',
      duration: 'Custom Itinerary (1 to 30 Days)',
      price: 'From $44 / day (Car + Driver)',
      desc: 'Travel in air-conditioned comfort with a friendly, professional English-speaking chauffeur who handles all driving, parking, and navigation.',
      features: [
        'Driver Meals & Hotel 100% Included',
        '130 Free Kilometers Per Day',
        'Comprehensive Vehicle Insurance',
        'CMB Airport Pickup & Hotel Drop'
      ],
      ctaText: 'View Driver Packages',
      target: 'driver'
    },
    {
      id: 'pkg-motorbike',
      badgeIcon: <MotorbikeIcon size={14} />,
      badge: 'Guided Off-Road Tour',
      title: '12-Day Off Road Classic Motorcycle Tour',
      image: '/images/background/moment-05.jpg',
      duration: '12 Days / 11 Nights',
      price: 'All-Inclusive Guided Tour',
      desc: 'An adrenaline-fueled off-road motorbike journey across ancient kingdoms, tea highlands, rainforest switchbacks, and wildlife national parks.',
      features: [
        'Honda NC 700X / XR Baja Adventure Bikes',
        'Support Van with Luggage & Spares',
        'Expert Local Lead Rider & Mechanic',
        'Scenic Mountain & Wildlife Trails'
      ],
      ctaText: 'View Motorcycle Itinerary',
      target: 'tours'
    }
  ];

  const categories = [
    {
      id: 'tuktuk',
      title: 'Self Drive Tuk Tuks',
      desc: 'Bajaj 205cc from $14/day',
      icon: <TukTukIcon size={26} />,
      themeClass: 'cat-theme-tuktuk',
      target: 'tuktuk'
    },
    {
      id: 'driver',
      title: 'Rent A Car with Driver',
      desc: 'Chauffeur, Room & Meals Included',
      icon: <ChauffeurCarIcon size={26} />,
      themeClass: 'cat-theme-driver',
      target: 'driver'
    },
    {
      id: 'motorbike',
      title: 'Adventure Motorbikes',
      desc: 'Honda NC700X, FMX, XR',
      icon: <MotorbikeIcon size={26} />,
      themeClass: 'cat-theme-bike',
      target: 'rentals',
      cat: 'motorbike'
    },
    {
      id: 'car',
      title: 'Self Drive Cars & Vans',
      desc: 'Wagon R, Spacia & Toyota KDH Auto',
      icon: <VanIcon size={26} />,
      themeClass: 'cat-theme-car',
      target: 'rentals',
      cat: 'car-with-driver'
    },
    {
      id: 'tours',
      title: 'Epic Island Tours',
      desc: '6-12 Day Off-Road & Day Trips',
      icon: <ExpeditionMapIcon size={26} />,
      themeClass: 'cat-theme-tours',
      target: 'tours'
    },
    {
      id: 'stay',
      title: 'Whitehouse Stay',
      desc: 'Negombo Rooms from $18/night',
      icon: <VillaStayIcon size={26} />,
      themeClass: 'cat-theme-stay',
      target: 'stay'
    }
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
                className={`ios-card home-category-card ${c.themeClass}`}
                onClick={() => onNavigate(c.target, c.cat)}
              >
                <div className={`home-category-icon ${c.themeClass}`}>
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
                    <Award size={13} style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'text-top' }} /> Sri Lanka’s #1 Experience
                  </span>
                  <h2 className="home-spotlight-title">
                    Drive Your Own Tuk Tuk Across the Island
                  </h2>
                  <p className="home-spotlight-desc">
                    A self-drive tuk tuk gives you total freedom to stop at roadside coconut stands, climb mountain switchbacks, and swim in secluded beaches at your own pace.
                  </p>

                  {/* 4 Feature Badges in 2x2 Grid with vector icons */}
                  <div className="home-spotlight-badges">
                    {[
                      { title: 'Free Driving Lesson', desc: '1-on-1 Negombo training', icon: <GraduationCap size={18} />, theme: 'badge-theme-orange' },
                      { title: 'Unlimited Kilometers', desc: 'No daily distance caps', icon: <Gauge size={18} />, theme: 'badge-theme-blue' },
                      { title: '24/7 Breakdown Help', desc: 'Island-wide mechanic net', icon: <Wrench size={18} />, theme: 'badge-theme-emerald' },
                      { title: 'Kandy-to-Ella Train', desc: 'We drive your tuk tuk', icon: <TrainIcon size={18} />, theme: 'badge-theme-purple' }
                    ].map((f, i) => (
                      <div key={i} className="home-spotlight-badge-item">
                        <div className={`badge-item-icon ${f.theme}`}>{f.icon}</div>
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
                    {/* Model Tag Pill with vector icon */}
                    <div className="home-spotlight-model-tag">
                      <TukTukIcon size={16} strokeWidth={2} />
                      <span>Bajaj RE 205cc</span>
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

      {/* Featured Travel Packages: Tuk Tuk, Car with Driver, Motorbike Tour */}
      <section className="home-tours-section">
        <div className="container">
          <div className="home-section-header-row">
            <div>
              <span className="page-pill">Signature Travel Styles</span>
              <h2 className="page-title">Top Sri Lanka Travel Packages</h2>
              <p className="page-subtitle">
                Choose how you want to experience paradise: drive an iconic tuk tuk, tour in comfort with a private chauffeur, or conquer mountain trails on a motorbike.
              </p>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => onNavigate('tours')}>
              View All Tours &amp; Rentals <ArrowRight size={14} />
            </button>
          </div>

          <div className="home-tours-grid">
            {signaturePackages.map((pkg) => (
              <div key={pkg.id} className="ios-card home-tour-card">
                <div
                  className="home-tour-img-box"
                  onClick={() => onNavigate(pkg.target)}
                  style={{ cursor: 'pointer' }}
                  title={`View ${pkg.title}`}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="home-tour-img"
                    loading="lazy"
                  />
                  <span className="home-tour-badge">
                    {pkg.badgeIcon}
                    <span>{pkg.badge}</span>
                  </span>
                  <span className="home-tour-price-pill">{pkg.price}</span>
                </div>
                <div className="home-tour-body">
                  <h3
                    className="home-tour-title"
                    onClick={() => onNavigate(pkg.target)}
                    style={{ cursor: 'pointer' }}
                  >
                    {pkg.title}
                  </h3>
                  <div className="home-tour-duration">
                    <Clock size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>{pkg.duration}</span>
                  </div>
                  <p className="home-tour-desc">{pkg.desc}</p>
                  <ul className="home-tour-features-list">
                    {pkg.features.map((f, i) => (
                      <li key={i}>
                        <Check size={14} color="var(--accent-emerald)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', marginTop: 'auto', gap: '0.4rem', justifyContent: 'center' }}
                    onClick={() => onNavigate(pkg.target)}
                  >
                    {pkg.ctaText} <ArrowRight size={14} />
                  </button>
                </div>
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
                <span className="page-pill">
                  <Star size={13} fill="currentColor" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'text-top' }} /> Google Verified (5.0 ★ · 120+ Reviews)
                </span>
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
                    <div className="home-review-stars">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} size={15} fill="#f59e0b" color="#f59e0b" style={{ display: 'inline-block', marginRight: '2px' }} />
                      ))}
                    </div>
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
