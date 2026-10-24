import React, { useState, useEffect } from 'react';
import { Check, MessageCircle, Calculator, Users, Gauge, Settings, Fuel } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { SkeletonImage } from './SkeletonLoader';

export default function FleetShowcase({ activeCategory, onSelectCalculatorVehicle }) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory || 'all');

  useEffect(() => {
    if (activeCategory) {
      setSelectedCategory(activeCategory);
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'All Vehicles' },
    { id: 'tuktuk', label: 'Tuk Tuks' },
    { id: 'car-with-driver', label: 'Rent-A-Car' },
    { id: 'motorbike', label: 'Motorbikes' },
    { id: 'scooter', label: 'Scooters' },
    { id: 'bicycle', label: 'Foot Bicycles' }
  ];

  const filteredFleet = selectedCategory === 'all'
    ? SITE_DATA.fleet
    : SITE_DATA.fleet.filter((item) => item.category === selectedCategory);

  return (
    <section className="section" id="fleet">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Our Entire Fleet</span>
          <h2 className="section-title">Explore All Vehicles for Rent</h2>
          <p className="section-subtitle">
            From self-drive tuk tuks to automatic rental cars, adventure motorbikes, scooters, and touring bicycles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((item) => (
            <article key={item.id} className="vehicle-card" data-category={item.category}>
              <div className="vehicle-card-img">
                <SkeletonImage src={item.image} alt={item.name} />
                <span className="vehicle-badge-category">
                  {item.category === 'car-with-driver' ? 'Rent-A-Car' : item.category.replace('-', ' ')}
                </span>
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
                  {item.features.map((f, i) => (
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
                      const el = document.getElementById('calculator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Calculator size={14} />
                    Check Price
                  </button>
                  <a
                    href={`https://wa.me/94776464346?text=${encodeURIComponent(`Hi Rocky! I am interested in renting the ${item.name}.`)}`}
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
    </section>
  );
}
