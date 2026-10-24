import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function StaySection({ onBookStay }) {
  const { stay } = SITE_DATA;
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Gallery items combining rooms and property photos
  const galleryItems = stay.gallery || [
    { url: '/images/rooms/optimized/whitehouse-exterior.jpg', title: 'Pick & Go Whitehouse Villa' },
    { url: '/images/rooms/optimized/room-double.jpg', title: 'Double Bedroom with Balcony' },
    { url: '/images/rooms/optimized/room-triple.jpg', title: 'Triple Bedroom (1 Double + 1 Single Bed)' },
    { url: '/images/rooms/optimized/room-triple-suite.jpg', title: 'Triple Suite with Balcony & TV' },
    { url: '/images/rooms/optimized/room-double-front.jpg', title: 'King Double Bed with Fresh Linens' },
    { url: '/images/rooms/optimized/bathroom-luxury.jpg', title: 'Modern Marble Tiled Bathroom' },
    { url: '/images/rooms/optimized/gallery-07.jpg', title: 'Sunny Bedroom with Tropical Balcony' },
    { url: '/images/rooms/optimized/bathroom-modern.jpg', title: 'En-suite Bathroom with Hot Water' }
  ];

  const handleOpenPhoto = (index) => {
    setActivePhotoIndex(index);
  };

  const handleClosePhoto = () => {
    setActivePhotoIndex(null);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="section section-alt" id="stay-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Accommodation</span>
          <h2 className="section-title">Stay in Negombo – Pick &amp; Go Whitehouse</h2>
          <p className="section-subtitle">
            A welcoming home away from home located in the tourist area of Ettukala, Negombo—just 5 minutes to the beach and 15 minutes to CMB International Airport.
          </p>
        </div>

        <div className="stay-hero-banner">
          <div className="stay-hero-content">
            <span className="hero-pill" style={{ marginBottom: '0.75rem' }}>Guest House &amp; Tourist Lodge</span>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Your Perfect Base Before &amp; After Island Exploration
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Whether arriving on a late flight, preparing for your self-drive tuk tuk orientation, or needing free luggage storage while touring the island, Pick &amp; Go Whitehouse offers clean modern comfort with genuine Sri Lankan hospitality.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (onBookStay) onBookStay();
                const el = document.getElementById('stay-rooms');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reserve a Room
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="stay-grid" id="stay-rooms">
          {stay.rooms.map((room, idx) => (
            <div key={idx} className="room-card">
              {room.image && (
                <div
                  className="room-card-media"
                  onClick={() => {
                    const foundIndex = galleryItems.findIndex((g) => g.url === room.image);
                    handleOpenPhoto(foundIndex !== -1 ? foundIndex : 0);
                  }}
                  title="Click to view full photo"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-card-img"
                    loading="lazy"
                  />
                  {room.badge && (
                    <span className="room-card-badge">{room.badge}</span>
                  )}
                  <div className="room-card-img-overlay">
                    <span className="room-view-btn">
                      <Eye size={13} /> View Photo
                    </span>
                  </div>
                </div>
              )}
              <div className="room-card-body">
                <div className="room-price-row">
                  <div>
                    <h3 className="room-name">{room.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                      {room.tagline}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '0.5rem' }}>
                    <div className="room-price">{room.price}</div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{room.period}</span>
                  </div>
                </div>
                <ul className="room-features-list">
                  {room.features.map((f, i) => (
                    <li key={i}>
                      <Check size={14} color="var(--accent-emerald)" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <a
                    href={`https://wa.me/94776464346?text=${encodeURIComponent(`Hi Rocky! I would like to reserve the ${room.name} ($${room.price.replace('$', '')} ${room.period}) at Pick & Go Whitehouse.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', gap: '0.5rem' }}
                  >
                    <MessageCircle size={16} />
                    Book Room
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Photo Gallery */}
        <div className="stay-gallery-section">
          <div className="section-header" style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
            <span className="section-pill">
              <Camera size={13} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              Visual Tour
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-primary)' }}>
              Pick &amp; Go Whitehouse Photo Gallery
            </h3>
            <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
              Explore our guest rooms, comfortable beds, modern en-suite marble bathrooms, and peaceful garden villa in Ettukala, Negombo.
            </p>
          </div>

          <div className="stay-gallery-grid">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="stay-gallery-item"
                onClick={() => handleOpenPhoto(idx)}
                title={`${item.title} (Click to zoom)`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="stay-gallery-img"
                />
                <div className="stay-gallery-caption">
                  <span>{item.title}</span>
                  <span className="stay-gallery-icon">
                    <Eye size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Highlights */}
        <div className="stay-amenities-box">
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>Included Guest Amenities</h3>
          <div className="amenities-grid">
            {stay.amenities.map((am, idx) => (
              <div key={idx} className="amenity-item">
                <Sparkles size={18} color="var(--accent-gold)" />
                <span>{am}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div className="stay-lightbox-overlay" onClick={handleClosePhoto}>
          <div className="stay-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="stay-lightbox-close" onClick={handleClosePhoto} aria-label="Close modal">
              <X size={20} />
            </button>
            <button className="stay-lightbox-prev" onClick={handlePrevPhoto} aria-label="Previous photo">
              <ChevronLeft size={24} />
            </button>
            <img
              src={galleryItems[activePhotoIndex].url}
              alt={galleryItems[activePhotoIndex].title}
              className="stay-lightbox-img"
            />
            <button className="stay-lightbox-next" onClick={handleNextPhoto} aria-label="Next photo">
              <ChevronRight size={24} />
            </button>
            <div className="stay-lightbox-info">
              <span className="stay-lightbox-title">{galleryItems[activePhotoIndex].title}</span>
              <span className="stay-lightbox-counter">
                {activePhotoIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
