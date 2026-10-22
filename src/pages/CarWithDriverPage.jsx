import React, { useState } from 'react';
import {
  Check,
  XCircle,
  Fuel,
  Users,
  Briefcase,
  ShieldCheck,
  MapPin,
  Calendar,
  MessageCircle,
  HelpCircle,
  Car,
  ChevronRight,
  ArrowRight,
  Calculator,
  Sparkles,
  Award,
  Navigation
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function CarWithDriverPage({ onNavigate }) {
  const { carWithDriverPackages, company } = SITE_DATA;
  const [selectedVehicleId, setSelectedVehicleId] = useState(carWithDriverPackages[0].id);
  const [calcDays, setCalcDays] = useState(7);
  const [calcDailyKm, setCalcDailyKm] = useState(130);
  const [activePhoto, setActivePhoto] = useState({});

  const selectedPkg = carWithDriverPackages.find((p) => p.id === selectedVehicleId) || carWithDriverPackages[0];

  // Helper to get daily rate for a package based on days
  const getRateForDays = (pkg, days) => {
    const tier = pkg.prices.find((p) => days >= p.daysMin && days <= p.daysMax);
    return tier ? tier.price : pkg.prices[0].price;
  };

  const currentDailyRate = getRateForDays(selectedPkg, calcDays);
  const baseRentalCost = currentDailyRate * calcDays;
  const totalFreeKm = calcDays * selectedPkg.freeKmDaily;
  const totalEstimatedKm = calcDays * calcDailyKm;
  const extraKm = Math.max(0, totalEstimatedKm - totalFreeKm);
  const extraKmCost = extraKm * selectedPkg.extraKmRate;
  const grandTotalEstimate = baseRentalCost + extraKmCost;

  const handleBookVehicle = (pkg, customDays = null) => {
    const days = customDays || calcDays;
    const rate = getRateForDays(pkg, days);
    const total = rate * days;
    const message = `Hi Rocky! I want to book the "${pkg.name}" (Rent A Car with Driver) for ${days} days (Rate: $${rate}/day, Base: $${total}). Please confirm availability!`;

    if (onNavigate) {
      onNavigate('contact', null, 'Car with Driver', message);
    } else {
      window.location.hash = 'contact';
    }
  };

  const handleWhatsAppBooking = (pkg) => {
    const rate = getRateForDays(pkg, calcDays);
    const text = encodeURIComponent(
      `Hello Rocky! I am interested in booking:\n\n` +
      `🚗 Vehicle: ${pkg.name}\n` +
      `⏱️ Duration: ${calcDays} Days\n` +
      `💵 Rate: $${rate}/day (Est. Base: $${rate * calcDays})\n` +
      `📍 Free Mileage: ${calcDays * 130} KM included (Extra $0.40/km)\n` +
      `✅ Inclusions: Driver, Guiding, Driver Accommodation & Meals, Full Insurance\n` +
      `⛽ Fuel & Tolls: Paid separately as required\n\n` +
      `Please check availability for my travel dates!`
    );
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-container driver-car-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">
            <Sparkles size={14} style={{ marginRight: '6px', color: 'var(--accent-gold)' }} />
            Private Chauffeur &amp; Guided Travel
          </span>
          <h1 className="page-title">Rent A Car with Driver in Sri Lanka</h1>
          <p className="page-subtitle">
            Sit back, relax, and savor the breathtaking scenery of Sri Lanka. Our experienced, courteous chauffeur guides take care of the driving, navigation, and vehicle upkeep. <strong>Driver meals, driver accommodation, and comprehensive insurance are 100% included!</strong>
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="driver-highlights-grid">
          <div className="driver-highlight-card">
            <div className="driver-highlight-icon">👨‍✈️</div>
            <div className="driver-highlight-content">
              <h4>Expert Chauffeur &amp; Guide</h4>
              <p>English-speaking, certified tour drivers who know the best routes, safe roads, and hidden island gems.</p>
            </div>
          </div>

          <div className="driver-highlight-card highlight-featured">
            <div className="driver-highlight-icon">🛏️</div>
            <div className="driver-highlight-content">
              <h4>Driver Stay &amp; Meals Included</h4>
              <p>You never have to find rooms or pay meal allowances for your driver. It's completely covered by us!</p>
            </div>
          </div>

          <div className="driver-highlight-card">
            <div className="driver-highlight-icon">🛡️</div>
            <div className="driver-highlight-content">
              <h4>Full Vehicle Insurance</h4>
              <p>Zero worries on the road. All vehicles carry comprehensive commercial insurance for total safety.</p>
            </div>
          </div>

          <div className="driver-highlight-card">
            <div className="driver-highlight-icon">🛣️</div>
            <div className="driver-highlight-content">
              <h4>130 KM Free Every Day</h4>
              <p>Generous 130 KM daily allowance included with fair and transparent extra mileage at only $0.40/km.</p>
            </div>
          </div>
        </div>

        {/* Vehicle Package Cards */}
        <div className="driver-packages-section">
          <div className="driver-packages-header">
            <div>
              <span className="page-pill">Our Fleet with Driver</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.4rem', marginBottom: '0.25rem' }}>
                Select Your Chauffeured Vehicle
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                All 3 vehicle options include private driver, tour guiding, driver room &amp; meals, and 130 free KM/day.
              </p>
            </div>
          </div>

          <div className="driver-fleet-grid">
            {carWithDriverPackages.map((pkg) => {
              const currentImg = activePhoto[pkg.id] || pkg.image;
              const hasAlternativeImg = pkg.secondaryImage && pkg.secondaryImage !== pkg.image;

              return (
                <article key={pkg.id} className="driver-card ios-card">
                  {/* Top Image & Badge */}
                  <div className="driver-card-img-wrap">
                    <img
                      src={currentImg}
                      alt={pkg.name}
                      className="driver-card-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = pkg.image;
                      }}
                    />
                    <div className="driver-card-badge">{pkg.badge}</div>

                    {/* Secondary Image toggle if available (e.g. Spacia vs Wagon R) */}
                    {hasAlternativeImg && (
                      <div className="driver-img-toggle-pills">
                        <button
                          type="button"
                          className={`img-toggle-pill ${currentImg === pkg.image ? 'active' : ''}`}
                          onClick={() => setActivePhoto({ ...activePhoto, [pkg.id]: pkg.image })}
                        >
                          Spacia
                        </button>
                        <button
                          type="button"
                          className={`img-toggle-pill ${currentImg === pkg.secondaryImage ? 'active' : ''}`}
                          onClick={() => setActivePhoto({ ...activePhoto, [pkg.id]: pkg.secondaryImage })}
                        >
                          Wagon R
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="driver-card-body">
                    <div className="driver-title-row">
                      <div>
                        <h3 className="driver-card-title">{pkg.name}</h3>
                        <span className="driver-card-type">{pkg.type}</span>
                      </div>
                    </div>

                    {/* Quick Specs Strip */}
                    <div className="driver-specs-row">
                      <div className="driver-spec-badge">
                        <Users size={14} />
                        <span>{pkg.passengers}</span>
                      </div>
                      <div className="driver-spec-badge">
                        <Briefcase size={14} />
                        <span>{pkg.luggage}</span>
                      </div>
                      <div className="driver-spec-badge">
                        <Navigation size={14} />
                        <span>130 KM Free / Day</span>
                      </div>
                    </div>

                    {/* Rates Showcase */}
                    <div className="driver-rates-box">
                      <div className="driver-rates-header">
                        <span>Transparent Daily Rates</span>
                        <span className="driver-extra-note">+ Extra KM: $0.40/km</span>
                      </div>
                      <div className="driver-rates-grid">
                        {pkg.prices.map((p, idx) => (
                          <div key={idx} className="driver-rate-item">
                            <span className="driver-rate-duration">{p.range}</span>
                            <div className="driver-rate-price-line">
                              <span className="driver-rate-val">{p.priceDisplay}</span>
                              <span className="driver-rate-unit">/ day</span>
                            </div>
                            <span className="driver-rate-sub">{p.daysMin >= 15 ? '🔥 Long Stay Deal' : 'Standard Rate'}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="driver-inclusions-box">
                      <h4 className="inclusions-headline">
                        What is Included
                      </h4>
                      <ul className="driver-feature-list">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i}>
                            <span className="check-bullet">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is NOT Included */}
                    <div className="driver-exclusions-box">
                      <h4 className="exclusions-headline">
                        Not Included
                      </h4>
                      <ul className="driver-exclusion-list">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="fuel-hint-pill">
                        <Fuel size={13} style={{ color: '#ea580c' }} />
                        <span>Fuel rate: {pkg.fuelInfo.type} ({pkg.fuelInfo.priceLkr}) — Pay directly at pumps</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="driver-card-actions">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleBookVehicle(pkg)}
                      >
                        Book This Car
                        <ArrowRight size={16} />
                      </button>
                      <button
                        className="btn btn-whatsapp"
                        onClick={() => handleWhatsAppBooking(pkg)}
                      >
                        <MessageCircle size={16} />
                        WhatsApp Inquire
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Interactive Driver Trip Cost Estimator */}
        <div className="driver-calculator-card ios-card" id="driverCalculator">
          <div className="calc-header-block">
            <span className="page-pill">
              <Calculator size={13} style={{ marginRight: '6px' }} />
              Live Price &amp; Mileage Estimator
            </span>
            <h2 className="calc-title">Estimate Your Driver &amp; Car Rental Total</h2>
            <p className="calc-desc">
              Calculate your exact rental cost based on your trip length and daily driving distance.
            </p>
          </div>

          <div className="driver-calc-grid">
            {/* Left Controls */}
            <div className="driver-calc-controls">
              {/* Vehicle Selection */}
              <div className="calc-group">
                <label className="calc-label">1. Choose Chauffeured Vehicle</label>
                <div className="vehicle-pill-selector">
                  {carWithDriverPackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      className={`vehicle-select-btn ${selectedVehicleId === pkg.id ? 'active' : ''}`}
                      onClick={() => setSelectedVehicleId(pkg.id)}
                    >
                      <Car size={16} />
                      <span>{pkg.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Days Slider */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label className="calc-label">2. Trip Duration (Days)</label>
                  <span className="calc-val-pill">{calcDays} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="calc-range-labels">
                  <span>1 Day</span>
                  <span>14 Days</span>
                  <span>30 Days</span>
                </div>
              </div>

              {/* Daily Distance */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label className="calc-label">3. Estimated Daily Kilometers</label>
                  <span className="calc-val-pill">{calcDailyKm} KM / Day</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="280"
                  step="10"
                  value={calcDailyKm}
                  onChange={(e) => setCalcDailyKm(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="calc-range-labels">
                  <span>50 KM</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>130 KM (Included Free)</span>
                  <span>280 KM</span>
                </div>
              </div>

              <div className="calc-helper-note">
                💡 <strong>Tip:</strong> 130 KM per day is ideal for comfortable island touring (e.g. Negombo → Sigiriya → Kandy → Ella → South Coast).
              </div>
            </div>

            {/* Right Summary */}
            <div className="driver-calc-summary">
              <h3 className="summary-title">Trip Cost Breakdown</h3>
              <div className="summary-veh-tag">
                <Car size={15} />
                <span>{selectedPkg.name}</span>
              </div>

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Duration</span>
                  <strong>{calcDays} Days</strong>
                </div>
                <div className="summary-row">
                  <span>Applied Daily Rate</span>
                  <strong>${currentDailyRate} / day</strong>
                </div>
                <div className="summary-row">
                  <span>Base Chauffeured Rental</span>
                  <strong>${baseRentalCost}</strong>
                </div>
                <div className="summary-row">
                  <span>Total Distance Allowed Free</span>
                  <strong>{totalFreeKm} KM ({calcDays} × 130 KM)</strong>
                </div>
                <div className="summary-row">
                  <span>Estimated Total Distance</span>
                  <strong>{totalEstimatedKm} KM</strong>
                </div>
                {extraKm > 0 ? (
                  <div className="summary-row" style={{ color: '#ea580c' }}>
                    <span>Extra Mileage ({extraKm} KM @ $0.40)</span>
                    <strong>+${extraKmCost.toFixed(2)}</strong>
                  </div>
                ) : (
                  <div className="summary-row" style={{ color: 'var(--accent-emerald)' }}>
                    <span>Extra Mileage Charge</span>
                    <strong>$0.00 (Within Free 130 KM/day)</strong>
                  </div>
                )}
                <div className="summary-row">
                  <span>Driver Food &amp; Lodging</span>
                  <strong style={{ color: 'var(--accent-emerald)' }}>100% INCLUDED</strong>
                </div>
                <div className="summary-row">
                  <span>Comprehensive Insurance</span>
                  <strong style={{ color: 'var(--accent-emerald)' }}>100% INCLUDED</strong>
                </div>
              </div>

              <div className="summary-divider" />

              <div className="summary-total-row">
                <div>
                  <div className="total-label">Estimated Vehicle &amp; Driver Cost</div>
                  <div className="total-sub">Excludes petrol &amp; toll tickets</div>
                </div>
                <div className="total-price">${grandTotalEstimate.toFixed(0)}</div>
              </div>

              <div className="summary-actions">
                <button
                  type="button"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => handleWhatsAppBooking(selectedPkg)}
                >
                  <MessageCircle size={18} />
                  Book Now on WhatsApp
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => handleBookVehicle(selectedPkg, calcDays)}
                >
                  Reserve Online via Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works & Transparency Cards */}
        <div className="driver-steps-section">
          <div className="section-header">
            <span className="section-pill">Effortless &amp; Transparent</span>
            <h2 className="section-title">How Our Chauffeured Car Service Works</h2>
            <p className="section-subtitle">
              We make traveling Sri Lanka as comfortable, safe, and stress-free as possible.
            </p>
          </div>

          <div className="driver-steps-grid">
            <div className="driver-step-card ios-card">
              <div className="step-num-badge">1</div>
              <h4>Pick Your Vehicle</h4>
              <p>Choose from our hybrid mini MPVs, comfortable KDH vans, or luxury Toyota Voxy depending on your group size.</p>
            </div>
            <div className="driver-step-card ios-card">
              <div className="step-num-badge">2</div>
              <h4>Airport or Hotel Meet</h4>
              <p>Your driver meets you at Bandaranaike Airport (CMB) or your Negombo hotel with a warm Sri Lankan welcome.</p>
            </div>
            <div className="driver-step-card ios-card">
              <div className="step-num-badge">3</div>
              <h4>Driver Handles Everything</h4>
              <p>Forget traffic, narrow roads, or parking worries. Your driver takes care of driving, cleaning, and route guiding.</p>
            </div>
            <div className="driver-step-card ios-card">
              <div className="step-num-badge">4</div>
              <h4>Zero Driver Expense Worries</h4>
              <p>You never have to pay for the driver's room or meals. That is 100% taken care of by Pick &amp; Go Travels.</p>
            </div>
          </div>
        </div>

        {/* FAQs Specific to Rent A Car with Driver */}
        <div className="driver-faq-section ios-card">
          <div className="driver-faq-header">
            <HelpCircle size={24} style={{ color: 'var(--accent-blue)' }} />
            <div>
              <h3>Driver Service Frequently Asked Questions</h3>
              <p>Common questions travelers ask about our private car &amp; driver packages.</p>
            </div>
          </div>

          <div className="driver-faq-grid">
            <div className="driver-faq-item">
              <h5>Do I have to pay for the driver's hotel room and meals?</h5>
              <p><strong>No!</strong> The driver's accommodation and all meals are fully included in our package. You do not have to book rooms for the driver or pay any daily meal allowances.</p>
            </div>

            <div className="driver-faq-item">
              <h5>How does fuel payment work?</h5>
              <p>Fuel is not included in the rental price so you pay only for what you actually use at official Sri Lankan petrol station rates (Petrol 92 is LKR 414/L, Petrol 95 is LKR 475/L). You can pay directly at the fuel pump by cash or card.</p>
            </div>

            <div className="driver-faq-item">
              <h5>How does the 130 KM free allowance work?</h5>
              <p>The 130 KM is cumulative across your entire trip! For example, for a 10-day trip, you have a generous 1,300 KM total allowance. If you exceed the cumulative limit, each additional kilometer is just $0.40 cent.</p>
            </div>

            <div className="driver-faq-item">
              <h5>Are highway toll tickets and parking fees included?</h5>
              <p>Highway expressways (e.g. Airport Highway or Southern Expressway) and local vehicle parking fees are paid on the go as you travel through them.</p>
            </div>

            <div className="driver-faq-item">
              <h5>Can the driver help with sightseeing &amp; itineraries?</h5>
              <p>Yes! Our drivers are seasoned island tour guides who can suggest the most scenic viewpoints, authentic local restaurants, wildlife safari times, and cultural attractions.</p>
            </div>

            <div className="driver-faq-item">
              <h5>Do you provide airport pickup and drop-off?</h5>
              <p>Yes! Our base is just 15 minutes from Colombo Bandaranaike International Airport (CMB). Your driver can pick you up straight from the arrivals terminal at any time of day or night.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="driver-bottom-cta ios-card">
          <div className="driver-cta-content">
            <span className="page-pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
              Direct Contact
            </span>
            <h2 style={{ fontSize: '2rem', margin: '0.6rem 0', color: '#ffffff' }}>
              Ready to Tour Sri Lanka in Comfort?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Message Rocky directly on WhatsApp with your travel dates and vehicle preference to lock in your driver today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky, I want to inquire about renting a car with driver in Sri Lanka!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                WhatsApp Rocky (+94 77 6464 346)
              </a>
              <button
                className="btn btn-outline-white btn-lg"
                onClick={() => onNavigate('contact', null, 'Car with Driver')}
              >
                Send Online Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
