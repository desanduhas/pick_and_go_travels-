import React from 'react';
import StaySection from '../components/StaySection';
import { SITE_DATA } from '../data/siteData';
import { Home, ShieldCheck, Plane, Coffee, Wifi, Luggage } from 'lucide-react';

export default function StayPage({ onNavigate }) {
  const handleBookStay = (roomName) => {
    const msg = roomName 
      ? `Hi Rocky, I would like to reserve the ${roomName} at Pick & Go Whitehouse in Negombo.`
      : 'Hi Rocky, I would like to reserve a room at Pick & Go Whitehouse in Negombo.';
    onNavigate('contact', null, 'Whitehouse Stay', msg);
  };

  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Negombo Accommodation</span>
          <h1 className="page-title">Pick &amp; Go Whitehouse Stay</h1>
          <p className="page-subtitle">
            Clean, comfortable rooms in the heart of Ettukala tourist area, Negombo. The ideal base for travelers before and after island exploration.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="stay-features-grid">
          <div className="ios-card stay-feature-item">
            <div className="stay-feature-icon stay-icon-blue">
              <Plane size={22} />
            </div>
            <div>
              <h4 className="stay-feature-title">15 Min from Airport</h4>
              <p className="stay-feature-desc">Swift pickup &amp; drop-off to CMB</p>
            </div>
          </div>

          <div className="ios-card stay-feature-item">
            <div className="stay-feature-icon stay-icon-gold">
              <Luggage size={22} />
            </div>
            <div>
              <h4 className="stay-feature-title">Free Luggage Storage</h4>
              <p className="stay-feature-desc">Safe storage during your tour</p>
            </div>
          </div>

          <div className="ios-card stay-feature-item">
            <div className="stay-feature-icon stay-icon-emerald">
              <Wifi size={22} />
            </div>
            <div>
              <h4 className="stay-feature-title">High-Speed Wi-Fi</h4>
              <p className="stay-feature-desc">Fast connection in every room</p>
            </div>
          </div>

          <div className="ios-card stay-feature-item">
            <div className="stay-feature-icon stay-icon-gray">
              <Coffee size={22} />
            </div>
            <div>
              <h4 className="stay-feature-title">5 Mins to Beach</h4>
              <p className="stay-feature-desc">Walk to cafes, pubs &amp; sea</p>
            </div>
          </div>
        </div>

        {/* Embedded Stay Section with Rooms & Amenities */}
        <StaySection onBookStay={handleBookStay} />
      </div>
    </div>
  );
}
