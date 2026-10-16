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
        <div className="contact-cards-grid">
          {/* Card 1: WhatsApp */}
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky, I want to inquire about a vehicle rental / tour.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card contact-quick-card"
          >
            <div>
              <div className="contact-quick-icon contact-icon-green">
                <MessageCircle size={24} />
              </div>
              <h3 className="contact-quick-title">WhatsApp (Fastest)</h3>
              <p className="contact-quick-desc">
                Instant replies directly from Rocky for quick questions, availability, and quotes.
              </p>
            </div>
            <div style={{ color: '#15803d', fontWeight: 700, fontSize: '0.95rem' }}>
              Chat Now →
            </div>
          </a>

          {/* Card 2: Phone */}
          <div className="ios-card contact-quick-card">
            <div>
              <div className="contact-quick-icon contact-icon-blue">
                <Phone size={24} />
              </div>
              <h3 className="contact-quick-title">Call Us Directly</h3>
              <p className="contact-quick-desc">
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
            className="ios-card contact-quick-card"
          >
            <div>
              <div className="contact-quick-icon contact-icon-gold">
                <MapPin size={24} />
              </div>
              <h3 className="contact-quick-title">Negombo Office</h3>
              <p className="contact-quick-desc">
                {company.address}
              </p>
            </div>
            <div style={{ color: '#b45309', fontWeight: 700, fontSize: '0.95rem' }}>
              View on Google Maps →
            </div>
          </a>

          {/* Card 4: Email */}
          <div className="ios-card contact-quick-card">
            <div>
              <div className="contact-quick-icon contact-icon-gray">
                <Mail size={24} />
              </div>
              <h3 className="contact-quick-title">Email Inquiries</h3>
              <p className="contact-quick-desc">
                For detailed group itineraries, commercial agreements, and custom quotes.
              </p>
            </div>
            <a href={`mailto:${company.email}`} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>
              {company.email}
            </a>
          </div>
        </div>

        {/* Airport & Location Advisory Strip */}
        <div className="contact-advisory-strip">
          <div className="contact-advisory-item">
            <div className="contact-advisory-icon">
              <Plane size={20} />
            </div>
            <div>
              <h4 className="advisory-title">15 Mins from CMB Airport</h4>
              <p className="advisory-desc">
                We provide round-the-clock airport meet &amp; greet or drop-off directly to our depot or your hotel.
              </p>
            </div>
          </div>

          <div className="contact-advisory-item">
            <div className="contact-advisory-icon">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="advisory-title">Open 24/7 Everyday</h4>
              <p className="advisory-desc">
                Late flights or early morning departures are seamlessly accommodated with our 24/7 staff.
              </p>
            </div>
          </div>

          <div className="contact-advisory-item">
            <div className="contact-advisory-icon">
              <Compass size={20} />
            </div>
            <div>
              <h4 className="advisory-title">Free Luggage Storage</h4>
              <p className="advisory-desc">
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
