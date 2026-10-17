import React, { useState, useEffect } from 'react';
import { MessageCircle, Minus, Plus, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const CATEGORY_NAMES = {
  'tuktuk': '🛺 Tuk Tuk (Self Drive)',
  'motorbike': '🏍️ Adventure Motorbike',
  'scooter': '🛵 Automatic Scooter',
  'car-with-driver': '🚗 Car with Private Driver',
  'atv': '🏎️ Quad Bike / Beach ATV',
  'bicycle': '🚲 Foot Bicycle'
};

export default function Calculator({ selectedVehicleId, onBookPackage }) {
  const categories = Array.from(new Set(SITE_DATA.fleet.map((v) => v.category)));

  const getInitialCategory = () => {
    if (selectedVehicleId) {
      const found = SITE_DATA.fleet.find((v) => v.id === selectedVehicleId);
      if (found) return found.category;
    }
    return 'tuktuk';
  };

  const [category, setCategory] = useState(getInitialCategory);
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || 'tuktuk-bajaj');
  const [vehicleQty, setVehicleQty] = useState(1);
  const [days, setDays] = useState(7);
  const [includeLicense, setIncludeLicense] = useState(false);
  const [licenseCount, setLicenseCount] = useState(1);
  const [includeTrainTransfer, setIncludeTrainTransfer] = useState(false);

  useEffect(() => {
    if (selectedVehicleId) {
      const found = SITE_DATA.fleet.find((v) => v.id === selectedVehicleId);
      if (found) {
        setCategory(found.category);
        setVehicleId(found.id);
      }
    }
  }, [selectedVehicleId]);

  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    const available = SITE_DATA.fleet.filter((v) => v.category === newCat);
    if (available.length > 0) {
      setVehicleId(available[0].id);
    }
  };

  // When vehicle quantity changes, auto-sync license count
  const handleVehicleQtyChange = (delta) => {
    const nextQty = Math.max(1, Math.min(10, vehicleQty + delta));
    if (nextQty !== vehicleQty) {
      setVehicleQty(nextQty);
      setLicenseCount(nextQty);
    }
  };

  const handleToggleLicense = (checked) => {
    setIncludeLicense(checked);
    if (checked && licenseCount <= 0) {
      setLicenseCount(vehicleQty);
    }
  };

  const handleLicenseCountChange = (delta) => {
    const nextCount = Math.max(1, Math.min(20, licenseCount + delta));
    setLicenseCount(nextCount);
  };

  const availableVehicles = SITE_DATA.fleet.filter((v) => v.category === category);
  const vehicle = availableVehicles.find((v) => v.id === vehicleId) || availableVehicles[0] || SITE_DATA.fleet[0];

  // Calculate daily price based on duration tiers
  let dailyRate = 16;
  if (vehicle.prices && vehicle.prices.length > 0) {
    if (vehicle.category === 'atv') {
      dailyRate = 40;
    } else {
      if (days <= 10) {
        dailyRate = parseInt(vehicle.prices[0].price.replace(/[^0-9]/g, ''), 10) || 16;
      } else if (days <= 21) {
        dailyRate = parseInt((vehicle.prices[1] || vehicle.prices[0]).price.replace(/[^0-9]/g, ''), 10) || 15;
      } else {
        dailyRate = parseInt((vehicle.prices[2] || vehicle.prices[vehicle.prices.length - 1]).price.replace(/[^0-9]/g, ''), 10) || 14;
      }
    }
  }

  const baseRentalTotal = dailyRate * days * vehicleQty;
  const insurancePerVehicle = 60;
  const insuranceTotal = insurancePerVehicle * vehicleQty; // Mandatory
  const licensePrice = 40;
  const licenseTotal = includeLicense ? licensePrice * licenseCount : 0;
  const trainTransferPerVehicle = 40;
  const trainTransferTotal = includeTrainTransfer ? trainTransferPerVehicle * vehicleQty : 0;
  const grandTotal = baseRentalTotal + insuranceTotal + licenseTotal + trainTransferTotal;

  const whatsappMessage = encodeURIComponent(
    `Hello Rocky! I calculated a rental package on your website:\n\n` +
    `• Vehicle: ${vehicleQty > 1 ? `${vehicleQty}x ` : ''}${vehicle.name}\n` +
    `• Duration: ${days} Days ($${dailyRate}/day per vehicle)\n` +
    `• Vehicle Rental Subtotal: $${baseRentalTotal}\n` +
    `• Comprehensive Full Insurance (Mandatory): $${insuranceTotal} ($60 × ${vehicleQty})\n` +
    `• Sri Lanka AAC License Endorsement: ${includeLicense ? `${licenseCount}x Driver${licenseCount > 1 ? 's' : ''} ($${licenseTotal})` : 'Not Selected ($0)'}\n` +
    `• Scenic Train Vehicle Transfer (Kandy-Ella): ${includeTrainTransfer ? `Yes - $${trainTransferTotal} ($40 × ${vehicleQty})` : 'Not Selected ($0)'}\n` +
    `• Estimated Total: $${grandTotal}\n\n` +
    `Please confirm vehicle availability for my dates!`
  );

  return (
    <section className="section section-alt" id="calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Instant Quote</span>
          <h2 className="section-title">Live Rental Price Calculator</h2>
          <p className="section-subtitle">
            Transparent, all-inclusive pricing with zero surprises. Choose your vehicle, quantity, duration, and optional perks.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-grid">
            {/* Controls */}
            <div className="calc-form">
              <div className="form-group">
                <label htmlFor="calcCategory" className="form-label">1. Select Vehicle Type</label>
                <select
                  id="calcCategory"
                  className="form-select"
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {CATEGORY_NAMES[cat] || cat.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="calcVehicle" className="form-label">2. Select Vehicle Model</label>
                <select
                  id="calcVehicle"
                  className="form-select"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                >
                  {availableVehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Quantity Stepper Section */}
              <div className="form-group">
                <label className="form-label">How Many Vehicles Do You Need?</label>
                <div className="vehicle-quantity-card">
                  <div>
                    <span className="qty-label">{vehicle.name} Quantity</span>
                    <span className="qty-subtext">Book multiple units together for your travel group</span>
                  </div>
                  <div className="stepper-control">
                    <button
                      type="button"
                      className="stepper-btn"
                      id="btn-vehicle-qty-minus"
                      aria-label="Decrease vehicle quantity"
                      disabled={vehicleQty <= 1}
                      onClick={() => handleVehicleQtyChange(-1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="stepper-value" id="vehicle-qty-display">{vehicleQty}</span>
                    <button
                      type="button"
                      className="stepper-btn"
                      id="btn-vehicle-qty-plus"
                      aria-label="Increase vehicle quantity"
                      disabled={vehicleQty >= 10}
                      onClick={() => handleVehicleQtyChange(1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Rental Duration Slider */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label htmlFor="calcDays" className="form-label" style={{ margin: 0 }}>3. Rental Duration (Days)</label>
                  <span style={{ fontWeight: 700, color: 'var(--accent-gold)', fontSize: '1.1rem' }}>
                    {days} Day{days > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  id="calcDays"
                  className="form-input"
                  min="1"
                  max="45"
                  value={days}
                  style={{ padding: '0.25rem 0' }}
                  onChange={(e) => setDays(parseInt(e.target.value, 10))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  <span>1 Day</span>
                  <span>7 Days</span>
                  <span>14 Days</span>
                  <span>21 Days</span>
                  <span>30+ Days</span>
                </div>
              </div>

              {/* Mandatory Insurance (Compulsory Full Coverage) */}
              <div className="form-group">
                <label className="form-label">Comprehensive Insurance (Mandatory)</label>
                <div className="mandatory-insurance-card">
                  <div className="mandatory-left">
                    <div className="mandatory-icon">
                      <ShieldCheck size={22} color="#15803d" />
                    </div>
                    <div>
                      <div className="mandatory-title">
                        <span>Full Comprehensive Insurance</span>
                        <span className="mandatory-badge">Compulsory</span>
                      </div>
                      <div className="mandatory-desc">
                        100% peace of mind island-wide. Zero deposit needed. ($60 per vehicle)
                      </div>
                    </div>
                  </div>
                  <div className="mandatory-price">
                    ${insuranceTotal}
                    <span className="mandatory-price-sub">${insurancePerVehicle} × {vehicleQty} unit{vehicleQty > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              {/* Optional Perks & Driver Endorsements */}
              <div className="form-group">
                <label className="form-label">Optional Add-ons &amp; Travel Perks (Select with Tick)</label>
                <div className="calc-addons-list">
                  {/* AAC Driving License Checkbox & Stepper Card */}
                  <div className={`calc-addon-item-card ${includeLicense ? 'is-active' : ''}`}>
                    <div className="addon-checkbox-row">
                      <input
                        type="checkbox"
                        id="calc-license-checkbox"
                        className="calc-custom-checkbox"
                        checked={includeLicense}
                        onChange={(e) => handleToggleLicense(e.target.checked)}
                      />
                      <div className="addon-info-col">
                        <label htmlFor="calc-license-checkbox" className="addon-name" style={{ cursor: 'pointer' }}>
                          Sri Lankan AAC Driving License Endorsement
                        </label>
                        <div className="addon-desc">
                          Required legally by Sri Lanka Police. Auto-matched to vehicle count; adjust if you have different driver numbers. ($40 per driver)
                        </div>
                      </div>
                    </div>
                    <div className="addon-action-col">
                      {includeLicense && (
                        <div className="stepper-control">
                          <button
                            type="button"
                            className="stepper-btn"
                            id="btn-license-minus"
                            aria-label="Decrease license count"
                            disabled={licenseCount <= 1}
                            onClick={() => handleLicenseCountChange(-1)}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="stepper-value" id="license-count-display">{licenseCount}</span>
                          <button
                            type="button"
                            className="stepper-btn"
                            id="btn-license-plus"
                            aria-label="Increase license count"
                            disabled={licenseCount >= 20}
                            onClick={() => handleLicenseCountChange(1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      )}
                      <span className={`addon-computed-price ${!includeLicense ? 'is-inactive' : ''}`}>
                        {includeLicense ? `$${licenseTotal}` : '+$40/ea'}
                      </span>
                    </div>
                  </div>

                  {/* Scenic Train Vehicle Transfer Checkbox Card */}
                  <div className={`calc-addon-item-card ${includeTrainTransfer ? 'is-active' : ''}`}>
                    <div className="addon-checkbox-row">
                      <input
                        type="checkbox"
                        id="calc-train-transfer-checkbox"
                        className="calc-custom-checkbox"
                        checked={includeTrainTransfer}
                        onChange={(e) => setIncludeTrainTransfer(e.target.checked)}
                      />
                      <div className="addon-info-col">
                        <label htmlFor="calc-train-transfer-checkbox" className="addon-name" style={{ cursor: 'pointer' }}>
                          Scenic Train Vehicle Transfer Service
                        </label>
                        <div className="addon-desc">
                          Ride the iconic tea-country train (Kandy → Nuwara Eliya → Ella) while we transport your vehicle to your destination. ($40 per vehicle)
                        </div>
                      </div>
                    </div>
                    <div className="addon-action-col">
                      <span className={`addon-computed-price ${!includeTrainTransfer ? 'is-inactive' : ''}`}>
                        {includeTrainTransfer ? `+$${trainTransferTotal}` : `+$${trainTransferPerVehicle * vehicleQty}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Breakdown Summary Box */}
            <div className="calc-summary-box">
              <h3 className="summary-heading">Estimated Cost Breakdown</h3>
              <div className="summary-row">
                <span>{vehicleQty > 1 ? `${vehicleQty}x ` : ''}{vehicle.name}</span>
                <span>${dailyRate} / day {vehicleQty > 1 ? `(${vehicleQty} units)` : ''}</span>
              </div>
              <div className="summary-row">
                <span>Rental Period</span>
                <span>{days} Day{days > 1 ? 's' : ''}</span>
              </div>
              <div className="summary-row">
                <span>Vehicle Rental Total</span>
                <span>${baseRentalTotal}</span>
              </div>
              <div className="summary-row">
                <span>Full Insurance ({vehicleQty} {vehicleQty > 1 ? 'units' : 'unit'})</span>
                <span>${insuranceTotal}</span>
              </div>
              {includeLicense && licenseCount > 0 && (
                <div className="summary-row">
                  <span>License Endorsement ({licenseCount} {licenseCount > 1 ? 'drivers' : 'driver'})</span>
                  <span>${licenseTotal}</span>
                </div>
              )}
              {includeTrainTransfer && (
                <div className="summary-row">
                  <span>Train Vehicle Transfer ({vehicleQty} {vehicleQty > 1 ? 'units' : 'unit'})</span>
                  <span>${trainTransferTotal}</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span>Total Estimated</span>
                <span className="summary-total-price">${grandTotal}</span>
              </div>

              <div className="calc-actions">
                <button
                  className="btn btn-primary"
                  id="calc-book-package-btn"
                  onClick={() => {
                    if (onBookPackage) onBookPackage(vehicle, days, grandTotal, vehicleQty, includeLicense ? licenseCount : 0);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book This Package
                </button>
                <a
                  href={`https://wa.me/94776464346?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="calc-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  Lock Deal on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
