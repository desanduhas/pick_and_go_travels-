import React, { useState, useEffect } from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function Calculator({ selectedVehicleId, onBookPackage }) {
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || 'tuktuk-bajaj');
  const [days, setDays] = useState(7);
  const [includeLicense, setIncludeLicense] = useState(true);
  const [includeInsurance, setIncludeInsurance] = useState(true);

  useEffect(() => {
    if (selectedVehicleId) {
      setVehicleId(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  const vehicle = SITE_DATA.fleet.find((v) => v.id === vehicleId) || SITE_DATA.fleet[0];

  // Calculate daily price based on duration tiers
  let dailyRate = 18;
  if (vehicle.prices && vehicle.prices.length > 0) {
    if (vehicle.category === 'atv') {
      dailyRate = 40;
    } else {
      if (days <= 7) {
        dailyRate = parseInt(vehicle.prices[0].price.replace(/[^0-9]/g, ''), 10) || 18;
      } else if (days <= 14) {
        dailyRate = parseInt((vehicle.prices[1] || vehicle.prices[0]).price.replace(/[^0-9]/g, ''), 10) || 17;
      } else {
        dailyRate = parseInt((vehicle.prices[2] || vehicle.prices[vehicle.prices.length - 1]).price.replace(/[^0-9]/g, ''), 10) || 15;
      }
    }
  }

  const baseRentalTotal = dailyRate * days;
  const licenseFee = includeLicense ? 40 : 0;
  const insuranceFee = includeInsurance ? 60 : 0;
  const grandTotal = baseRentalTotal + licenseFee + insuranceFee;

  const whatsappMessage = encodeURIComponent(
    `Hello Rocky! I calculated a rental package on your website:\n\n` +
    `• Vehicle: ${vehicle.name}\n` +
    `• Duration: ${days} Days ($${dailyRate}/day)\n` +
    `• Sri Lanka AAC License: ${includeLicense ? 'Yes ($40)' : 'No'}\n` +
    `• Full Insurance: ${includeInsurance ? 'Yes ($60)' : 'No'}\n` +
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
            Transparent, all-inclusive pricing with zero surprises. Choose your vehicle, duration, and optional perks.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-grid">
            {/* Controls */}
            <div className="calc-form">
              <div className="form-group">
                <label htmlFor="calcVehicle" className="form-label">1. Select Vehicle</label>
                <select
                  id="calcVehicle"
                  className="form-select"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                >
                  {SITE_DATA.fleet.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.category.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label htmlFor="calcDays" className="form-label" style={{ margin: 0 }}>2. Rental Duration (Days)</label>
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

              <div className="form-group">
                <label className="form-label">3. Optional Legal &amp; Protection Add-ons</label>
                <div className="checkbox-addon-group">
                  <label className="addon-checkbox-label">
                    <div className="addon-left">
                      <input
                        type="checkbox"
                        checked={includeLicense}
                        onChange={(e) => setIncludeLicense(e.target.checked)}
                      />
                      <div>
                        <div className="addon-name">Sri Lankan AAC Driving License Endorsement</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          Required legally by Sri Lanka Police. We handle prior to arrival.
                        </div>
                      </div>
                    </div>
                    <span className="addon-badge-price">+$40</span>
                  </label>

                  <label className="addon-checkbox-label">
                    <div className="addon-left">
                      <input
                        type="checkbox"
                        checked={includeInsurance}
                        onChange={(e) => setIncludeInsurance(e.target.checked)}
                      />
                      <div>
                        <div className="addon-name">Comprehensive Full Insurance Coverage</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          Complete peace of mind island-wide. Zero deposit needed.
                        </div>
                      </div>
                    </div>
                    <span className="addon-badge-price">+$60</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Breakdown Summary Box */}
            <div className="calc-summary-box">
              <h3 className="summary-heading">Estimated Cost Breakdown</h3>
              <div className="summary-row">
                <span>{vehicle.name}</span>
                <span>${dailyRate} / day</span>
              </div>
              <div className="summary-row">
                <span>Rental Period</span>
                <span>{days} Days</span>
              </div>
              <div className="summary-row">
                <span>Vehicle Rental Total</span>
                <span>${baseRentalTotal}</span>
              </div>
              {includeLicense && (
                <div className="summary-row">
                  <span>Legal License Endorsement</span>
                  <span>$40</span>
                </div>
              )}
              {includeInsurance && (
                <div className="summary-row">
                  <span>Full Insurance</span>
                  <span>$60</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span>Total Estimated</span>
                <span className="summary-total-price">${grandTotal}</span>
              </div>

              <div className="calc-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (onBookPackage) onBookPackage(vehicle, days, grandTotal);
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
