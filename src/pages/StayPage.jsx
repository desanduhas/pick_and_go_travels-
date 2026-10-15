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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          <div className="ios-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-blue-soft)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Plane size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>15 Min from Airport</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Swift pickup &amp; drop-off to CMB</p>
            </div>
          </div>

          <div className="ios-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-gold-soft)', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Luggage size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>Free Luggage Storage</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Safe storage during your tour</p>
            </div>
          </div>

          <div className="ios-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-emerald-soft)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Wifi size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>High-Speed Wi-Fi</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Fast connection in every room</p>
            </div>
          </div>

          <div className="ios-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: '#f1f5f9', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Coffee size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>5 Mins to Beach</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Walk to cafes, pubs &amp; sea</p>
            </div>
          </div>
        </div>

        {/* Embedded Stay Section with Rooms & Amenities */}
        <StaySection onBookStay={handleBookStay} />
      </div>
    </div>
  );
}
