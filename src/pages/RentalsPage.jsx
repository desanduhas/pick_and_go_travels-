import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';
import { Check, MessageCircle, Calculator, Users, Gauge, Settings, Fuel } from 'lucide-react';

export default function RentalsPage({ initialCategory, onSelectCalculatorVehicle, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'car-with-driver', label: 'Rent-A-Car' },
    { id: 'motorbike', label: 'Motorbikes' },
    { id: 'scooter', label: 'Scooters' },
    { id: 'atv', label: 'Beach ATVs' },
    { id: 'bicycle', label: 'Foot Bicycles' },
    { id: 'tuktuk', label: 'Tuk Tuks' }
  ];

  const filteredFleet = selectedCategory === 'all'
    ? SITE_DATA.fleet
    : SITE_DATA.fleet.filter((item) => item.category === selectedCategory);

  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Explore Our Complete Fleet</span>
          <h1 className="page-title">Vehicle Rentals in Sri Lanka</h1>
          <p className="page-subtitle">
            Reliable automatic rental cars, motorbikes, scooters, beach quad buggies, and touring bicycles with transparent pricing and zero hidden fees.
          </p>
        </div>

        {/* Apple iOS Segmented Control Bar */}
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

        {/* Vehicle Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((item) => (
            <article key={item.id} className="vehicle-card" data-category={item.category}>
              <div className="vehicle-card-img">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://pickandgotravels.com/wp-content/uploads/2024/05/IMG_20230603_141753_464.jpg';
                  }}
                />
                <span className="vehicle-badge-category">{item.category.replace('-', ' ')}</span>
                <div className="vehicle-price-tag">
                  <div className="price-from-label">Rates from</div>
                  <span className="price-main">{item.prices ? item.prices[0].price : '$15'}</span>
                  <span className="price-period">/ {item.prices ? item.prices[0].period : 'day'}</span>
                </div>
              </div>

              <div className="vehicle-card-body">
                <h3 className="vehicle-name">{item.name}</h3>
                <p className="vehicle-tagline">{item.tagline || ''}</p>

                <div className="vehicle-specs-list">
                  {item.engine && (
                    <div className="spec-item">
                      <Settings size={14} />
                      <span>{item.engine}</span>
                    </div>
                  )}
                  {item.transmission && (
                    <div className="spec-item">
                      <Gauge size={14} />
                      <span>{item.transmission}</span>
                    </div>
                  )}
                  {item.capacity && (
                    <div className="spec-item">
                      <Users size={14} />
                      <span>{item.capacity}</span>
                    </div>
                  )}
                  {item.fuelEconomy && (
                    <div className="spec-item">
                      <Fuel size={14} />
                      <span>{item.fuelEconomy}</span>
                    </div>
                  )}
                </div>

                <ul className="vehicle-features-bullets">
                  {item.features.slice(0, 4).map((f, i) => (
                    <li key={i}>
                      <Check size={14} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="vehicle-card-footer">
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => {
                      if (onSelectCalculatorVehicle) onSelectCalculatorVehicle(item.id);
                      onNavigate('pricing');
                    }}
                  >
                    <Calculator size={14} />
                    Check Price
                  </button>
                  <a
                    href={`https://wa.me/${SITE_DATA.company.whatsapp}?text=${encodeURIComponent(`Hi Rocky! I am interested in renting the ${item.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
