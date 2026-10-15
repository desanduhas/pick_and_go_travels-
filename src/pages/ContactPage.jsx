import React from 'react';
import BookingContact from '../components/BookingContact';
import { SITE_DATA } from '../data/siteData';
import { MapPin, Phone, MessageCircle, Mail, Clock, Plane, Compass } from 'lucide-react';

export default function ContactPage({ initialService, initialMessage }) {
  const { company } = SITE_DATA;

  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">We Are Here For You</span>
          <h1 className="page-title">Contact &amp; Bookings</h1>
          <p className="page-subtitle">
            Get in touch with Rocky and our team in Negombo. Whether you want to book a Tuk Tuk, arrange an airport pickup, or design a custom tour across Sri Lanka.
          </p>
        </div>

        {/* 4 iOS Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {/* Card 1: WhatsApp */}
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky, I want to inquire about a vehicle rental / tour.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card"
            style={{
              padding: '1.75rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: '#dcfce7',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <MessageCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>WhatsApp (Fastest)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Instant replies directly from Rocky for quick questions, availability, and quotes.
              </p>
            </div>
            <div style={{ color: '#15803d', fontWeight: 700, fontSize: '0.95rem' }}>
              Chat Now →
            </div>
          </a>

          {/* Card 2: Phone */}
          <div className="ios-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-blue-soft)',
                color: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Call Us Directly</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Available 24 hours a day for airport arrivals, driving support, and emergencies.
              </p>
            </div>
            <div>
              <a href={`tel:${company.phone1.replace(/\s+/g, '')}`} style={{ color: 'var(--text-primary)', fontWeight: 700, display: 'block', fontSize: '0.92rem' }}>
                {company.phone1}
              </a>
              <a href={`tel:${company.phone2.replace(/\s+/g, '')}`} style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>
                {company.phone2}
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <a
            href={company.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card"
            style={{
              padding: '1.75rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-gold-soft)',
                color: '#b45309',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Negombo Office</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {company.address}
              </p>
            </div>
            <div style={{ color: '#b45309', fontWeight: 700, fontSize: '0.95rem' }}>
              View on Google Maps →
            </div>
          </a>

          {/* Card 4: Email */}
          <div className="ios-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: '#f1f5f9',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Mail size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Email Inquiries</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                For detailed group itineraries, commercial agreements, and custom quotes.
              </p>
            </div>
            <a href={`mailto:${company.email}`} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>
              {company.email}
            </a>
          </div>
        </div>

        {/* Airport & Location Advisory Strip */}
        <div style={{
          background: '#ffffff',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2rem',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309', flexShrink: 0 }}>
              <Plane size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>15 Mins from CMB Airport</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                We provide round-the-clock airport meet &amp; greet or drop-off directly to our depot or your hotel.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309', flexShrink: 0 }}>
              <Clock size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Open 24/7 Everyday</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Late flights or early morning departures are seamlessly accommodated with our 24/7 staff.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309', flexShrink: 0 }}>
              <Compass size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Free Luggage Storage</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Traveling light around the island? Leave your big hard-shell suitcases safely in our secure depot for free.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Booking / Reservation Form Component */}
        <div style={{ marginBottom: '3rem' }}>
          <BookingContact
            initialService={initialService}
            initialMessage={initialMessage}
          />
        </div>
      </div>
    </div>
  );
}
