import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';
import {
  Clock,
  Tag,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Users,
  Sparkles,
  HelpCircle,
  Truck,
  MapPin,
  Compass,
  Award
} from 'lucide-react';

export default function ToursPage({ initialCategory, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [openAccordions, setOpenAccordions] = useState({});
  const [groupPackageTier, setGroupPackageTier] = useState('standard');
  const [openGuidelines, setOpenGuidelines] = useState({ 'guideline-0': true });

  const { company, tuktukGroupTour } = SITE_DATA;
  const [selectedGroupImg, setSelectedGroupImg] = useState(tuktukGroupTour?.image || '/images/background/moment-04.jpg');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'group-tour', label: '🛺 TukTuk Group Tour' },
    { id: 'motorcycle-tour', label: '🏍️ Off-Road Classic (6-12 Days)' },
    { id: 'day-tour', label: '🗺️ Day Excursions' },
    { id: 'exploration-tour', label: '🌿 Cultural & Nature' },
    { id: 'custom-tour', label: '✨ Tailor-Made' }
  ];

  const filteredTours = selectedCategory === 'all'
    ? SITE_DATA.tours
    : SITE_DATA.tours.filter((t) => t.category === selectedCategory);

  const toggleAccordion = (tourId, dayIdx) => {
    const key = `${tourId}-${dayIdx}`;
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleGuideline = (idx) => {
    const key = `guideline-${idx}`;
    setOpenGuidelines((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activePackageData = groupPackageTier === 'standard'
    ? tuktukGroupTour.standardPackages
    : tuktukGroupTour.premiumPackages;

  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Curated Expeditions</span>
          <h1 className="page-title">Sri Lanka Tours &amp; Safaris</h1>
          <p className="page-subtitle">
            Epic self-drive tuk tuk group road trips, pre-planned off-road motorcycle routes, coastal day excursions, and deep cultural heritage tours across the island.
          </p>
        </div>

        {/* Segmented Control Bar */}
        <div className="segmented-wrapper">
          <div className="segmented-control">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`segmented-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* DEDICATED TUK TUK GROUP TOUR SHOWCASE VIEW */}
        {selectedCategory === 'group-tour' && tuktukGroupTour && (
          <div className="group-tour-showcase">
            {/* Hero Showcase Card */}
            <div className="ios-card group-tour-hero-card">
              <div className="group-tour-hero-grid">
                {/* Visual Column */}
                <div className="group-tour-visual-col">
                  <div className="group-tour-main-img-box">
                    <img
                      src={selectedGroupImg}
                      alt={tuktukGroupTour.title}
                      className="group-tour-main-img"
                    />
                    <span className="group-tour-badge">
                      <Sparkles size={14} /> {tuktukGroupTour.badge}
                    </span>
                    <div className="group-tour-price-badge">
                      <div className="group-tour-price-label">Group Rates From</div>
                      <div className="group-tour-price-val">
                        {tuktukGroupTour.startingPrice} <span className="group-tour-price-unit">{tuktukGroupTour.pricePeriod}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="group-tour-thumbs-grid">
                    {tuktukGroupTour.secondaryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className={`group-tour-thumb-item ${selectedGroupImg === img ? 'active' : ''}`}
                        onClick={() => setSelectedGroupImg(img)}
                      >
                        <img src={img} alt={`Tuk Tuk Group Tour ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Column */}
                <div className="group-tour-details-col">
                  <span className="page-pill">7–14 Day Ultimate Road Trip</span>
                  <h2 className="group-tour-details-title">{tuktukGroupTour.title}</h2>
                  <div className="group-tour-details-subtitle">{tuktukGroupTour.subtitle}</div>
                  <p className="group-tour-tagline">{tuktukGroupTour.tagline}</p>
                  <p className="group-tour-desc">{tuktukGroupTour.overview}</p>

                  {/* Key Highlights */}
                  <div className="group-tour-highlights-grid">
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>10 to 22+ Persons Convoys</span>
                    </div>
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>24/7 Breakdown &amp; Mechanic</span>
                    </div>
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>Dedicated Luggage Backup Van</span>
                    </div>
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>Kandy to Ella Train Transit</span>
                    </div>
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>AAC Driving Permits Arranged</span>
                    </div>
                    <div className="group-tour-highlight-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>VIP Comprehensive Insurance</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="group-tour-action-btns">
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I am interested in booking a Sri Lanka Tuk Tuk Group Tour for my squad.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <MessageCircle size={18} />
                      Book Group Tour on WhatsApp
                    </a>
                    <a
                      href="#group-packages"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('group-packages')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      View 7–14 Day Packages <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Pick & Go Grid (10 Feature Pillars) */}
            <div>
              <div className="group-tour-section-header">
                <span className="page-pill">Unrivaled Group Experience</span>
                <h2 className="group-tour-section-title">Why Choose Pick &amp; Go Travels?</h2>
                <p className="group-tour-section-sub">
                  We are Sri Lanka’s premier self-drive Tuk Tuk tour specialists with over 120+ 5-star verified reviews, authentic mechanical support, and total freedom on the open road.
                </p>
              </div>

              <div className="group-tour-why-grid">
                {tuktukGroupTour.whyChoose.map((why, idx) => (
                  <div key={idx} className="group-tour-why-card">
                    <div className="group-why-icon">{why.icon}</div>
                    <h3 className="group-why-title">{why.title}</h3>
                    <p className="group-why-desc">{why.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Package Selector (Standard vs Premium) */}
            <div id="group-packages" className="group-packages-section">
              <div className="group-tour-section-header" style={{ marginBottom: '1.75rem' }}>
                <span className="page-pill">Group Itinerary Options</span>
                <h2 className="group-tour-section-title">Select Your Group Tour Package</h2>
                <p className="group-tour-section-sub">
                  Choose between our Standard Squad Convoy (10–12 Persons) or all-inclusive Premium VIP Adventure (20–22 Persons with dedicated Luggage Van &amp; Free Activities).
                </p>
              </div>

              {/* Toggle Switch */}
              <div className="group-packages-toggle-wrapper">
                <div className="group-packages-toggle-box">
                  <button
                    className={`group-packages-toggle-btn ${groupPackageTier === 'standard' ? 'active' : ''}`}
                    onClick={() => setGroupPackageTier('standard')}
                  >
                    <Users size={16} /> Standard Packages (10 - 12 Persons)
                  </button>
                  <button
                    className={`group-packages-toggle-btn ${groupPackageTier === 'premium' ? 'active' : ''}`}
                    onClick={() => setGroupPackageTier('premium')}
                  >
                    <Sparkles size={16} /> Premium Packages (20 - 22 Persons + Backup Van)
                  </button>
                </div>
              </div>

              {/* Package Inclusions Checklist Banner */}
              <div className="group-inclusions-banner">
                <div className="group-inclusions-header">
                  <h3 className="group-inclusions-title">
                    <Award size={18} color="var(--accent-orange)" />
                    {activePackageData.title} Inclusions:
                  </h3>
                  <span className="group-inclusions-badge">{activePackageData.badge}</span>
                </div>
                <div className="group-inclusions-grid">
                  {activePackageData.inclusions.map((inc, i) => (
                    <div key={i} className="group-inclusion-item">
                      <Check size={16} color="var(--accent-emerald)" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration Cards Grid */}
              <div className="group-packages-grid">
                {activePackageData.durations.map((pkg, idx) => (
                  <div key={idx} className={`group-package-card ${pkg.popular ? 'popular' : ''}`}>
                    {pkg.popular && <div className="group-package-popular-tag">MOST POPULAR</div>}
                    <div className="group-package-days">{pkg.days}</div>
                    <div className="group-package-capacity">{activePackageData.groupSize}</div>

                    <div className="group-package-price-row">
                      {pkg.pricePerPerson ? (
                        <>
                          <span className="group-package-price">{pkg.pricePerPerson}</span>
                          <span className="group-package-unit">/ person total</span>
                          {pkg.perDay && <span className="group-package-perday-pill">{pkg.perDay}</span>}
                        </>
                      ) : (
                        <>
                          <span className="group-package-price" style={{ fontSize: '1.25rem' }}>All-Inclusive</span>
                          <span className="group-package-unit">VIP Group Rate</span>
                        </>
                      )}
                    </div>

                    <p className="group-package-desc">{pkg.desc}</p>

                    <a
                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi Rocky! I want to book the ${pkg.days} ${activePackageData.title} (${activePackageData.groupSize}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-sm`}
                      style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
                    >
                      <MessageCircle size={15} /> Book {pkg.days} Tour
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Dedicated Backup Vehicle & Luggage Support Van Spotlight */}
            <div className="group-backup-card">
              <div className="group-backup-grid">
                <div className="group-backup-visual">
                  <img
                    src={tuktukGroupTour.backupVehicle.image}
                    alt="Pick & Go Support Backup Van"
                    className="group-backup-img"
                  />
                  <span className="group-tour-badge" style={{ bottom: '16px', top: 'auto', left: '16px' }}>
                    <Truck size={14} /> Full Luggage &amp; Repair Support
                  </span>
                </div>

                <div className="group-backup-details">
                  <span className="page-pill">Zero Luggage Hassle</span>
                  <h3 className="group-backup-title">{tuktukGroupTour.backupVehicle.title}</h3>
                  <div className="group-backup-subtitle">{tuktukGroupTour.backupVehicle.subtitle}</div>
                  <p className="group-backup-desc">{tuktukGroupTour.backupVehicle.description}</p>

                  <div className="group-backup-features">
                    {tuktukGroupTour.backupVehicle.features.map((feat, i) => (
                      <div key={i} className="group-backup-feature-item">
                        <Check size={16} color="var(--accent-emerald)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* "For Your Information" Guidelines & FAQs */}
            <div className="group-guidelines-section">
              <div className="group-tour-section-header">
                <span className="page-pill">Essential Travel Information</span>
                <h2 className="group-tour-section-title">For Your Information (Group Tour Guidelines)</h2>
                <p className="group-tour-section-sub">
                  Everything you need to know about customizing your group size, travel routes, luggage transport, and inclusions.
                </p>
              </div>

              <div className="group-guidelines-accordion">
                {tuktukGroupTour.guidelines.map((g, idx) => {
                  const isOpen = !!openGuidelines[`guideline-${idx}`];
                  return (
                    <div key={idx} className={`group-guideline-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="group-guideline-trigger"
                        onClick={() => toggleGuideline(idx)}
                      >
                        <h4 className="group-guideline-q">{g.q}</h4>
                        <ChevronDown
                          size={18}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform var(--transition-fast)',
                            color: isOpen ? 'var(--accent-orange)' : 'var(--text-muted)'
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div className="group-guideline-content">
                          <p className="group-guideline-a" style={{ margin: 0 }}>{g.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Effortless 3-Step Renting Process */}
            <div>
              <div className="group-tour-section-header">
                <span className="page-pill">Simple 3 Steps</span>
                <h2 className="group-tour-section-title">Effortless Renting Process</h2>
                <p className="group-tour-section-sub">
                  From planning your route to driving off with your crew, we take care of all paperwork, permits, and road support.
                </p>
              </div>

              <div className="group-steps-grid">
                {tuktukGroupTour.rentingProcess.map((step, idx) => (
                  <div key={idx} className="group-step-card">
                    <div className="group-step-num">{step.step}</div>
                    <h3 className="group-step-title">{step.title}</h3>
                    <p className="group-step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Squad Inquiries Box */}
            <div className="group-custom-cta-card">
              <div>
                <h3 className="group-custom-cta-title">Have a Custom Group Size or Custom Dates?</h3>
                <p className="group-custom-cta-desc">
                  Traveling with 8 people, 15 people, or a squad of 30? Want a 5-day or 20-day road trip? Rocky and our travel experts can easily tailor a customized Tuk Tuk group package to match your exact dates, budget, and route!
                </p>
              </div>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I want to request a custom Tuk Tuk group tour package for my group.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ whiteSpace: 'nowrap' }}
              >
                <MessageCircle size={18} />
                Plan Custom Group Tour
              </a>
            </div>
          </div>
        )}

        {/* ALL TOURS & OTHER CATEGORIES VIEW */}
        {selectedCategory !== 'group-tour' && (
          <div className="tours-grid">
            {filteredTours.map((tour) => (
              <article key={tour.id} className="tour-card" data-category={tour.category}>
                {/* Photo Header if available */}
                {tour.image && (
                  <div
                    className="tour-card-img-box"
                    onClick={() => {
                      if (tour.category === 'group-tour') setSelectedCategory('group-tour');
                    }}
                    style={{ cursor: tour.category === 'group-tour' ? 'pointer' : 'default' }}
                  >
                    <img src={tour.image} alt={tour.title} className="tour-card-img" loading="lazy" />
                    <span className="tour-card-floating-badge">{tour.badge}</span>
                    {tour.pricing && (
                      <span className="tour-card-floating-price">{tour.pricing}</span>
                    )}
                  </div>
                )}

                <div className="tour-card-header">
                  {!tour.image && <span className="tour-badge">{tour.badge}</span>}
                  <h3
                    className="tour-title"
                    onClick={() => {
                      if (tour.category === 'group-tour') setSelectedCategory('group-tour');
                    }}
                    style={{ cursor: tour.category === 'group-tour' ? 'pointer' : 'default' }}
                  >
                    {tour.title}
                  </h3>
                  <div className="tour-meta-row">
                    {tour.duration && (
                      <div className="tour-meta-item">
                        <Clock size={14} />
                        {tour.duration}
                      </div>
                    )}
                    {tour.pricing && !tour.image && (
                      <div className="tour-meta-item">
                        <Tag size={14} />
                        {tour.pricing}
                      </div>
                    )}
                  </div>
                </div>

                <div className="tour-card-body">
                  {tour.route && (
                    <div className="tour-route-badge">
                      <strong style={{ color: '#b45309', display: 'block', marginBottom: '0.25rem' }}>
                        Route:
                      </strong>
                      {tour.route}
                    </div>
                  )}

                  <p className="tour-overview-text">{tour.overview}</p>

                  {/* Features list if available */}
                  {tour.features && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem' }}>
                      {tour.features.slice(0, 5).map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                          <Check size={14} color="var(--accent-emerald)" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Day Trips List if applicable */}
                  {tour.dayTrips && (
                    <div style={{ background: 'var(--bg-body)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1rem', border: '1px solid var(--border-light)' }}>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
                        Popular Day Trips Available:
                      </strong>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                        {tour.dayTrips.map((dt, i) => (
                          <li key={i} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem' }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>• {dt.name}: </span>
                            <span style={{ color: 'var(--text-muted)' }}>{dt.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Day-by-Day Accordion for Multi-Day Tours */}
                  {tour.itinerary && (
                    <div className="itinerary-accordion">
                      <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', margin: '0.75rem 0 0.25rem' }}>
                        Day-by-Day Itinerary ({tour.itinerary.length} Days):
                      </strong>
                      {tour.itinerary.map((dayItem, dIdx) => {
                        const isOpen = !!openAccordions[`${tour.id}-${dIdx}`];
                        return (
                          <div key={dIdx} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                            <button
                              className="accordion-trigger"
                              onClick={() => toggleAccordion(tour.id, dIdx)}
                            >
                              <span>
                                <span className="accordion-day-tag">{dayItem.day}: </span>
                                <span>{dayItem.title}</span>
                              </span>
                              <ChevronDown
                                size={16}
                                className="accordion-icon"
                                style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                              />
                            </button>
                            {isOpen && (
                              <div className="accordion-content" style={{ maxHeight: '500px' }}>
                                <div className="accordion-content-inner">
                                  {dayItem.desc}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="tour-card-footer">
                  {tour.category === 'group-tour' ? (
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => setSelectedCategory('group-tour')}
                    >
                      Explore Group Packages (7–14 Days) <ArrowRight size={14} />
                    </button>
                  ) : (
                    <>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Includes Guide &amp; Support</span>
                      <a
                        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi Rocky! I am interested in the ${tour.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        <MessageCircle size={14} />
                        Book This Tour
                      </a>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

