import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Clock, Tag } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function ToursShowcase({ activeCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory || 'all');
  const [openAccordions, setOpenAccordions] = useState({});

  useEffect(() => {
    if (activeCategory) {
      setSelectedCategory(activeCategory);
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'group-tour', label: 'TukTuk Group Tours' },
    { id: 'motorcycle-tour', label: 'Off-Road Classic (6-12 Days)' },
    { id: 'day-tour', label: 'Day Excursions' },
    { id: 'exploration-tour', label: 'Cultural & Nature' },
    { id: 'custom-tour', label: 'Tailor-Made' }
  ];

  const filteredTours = selectedCategory === 'all'
    ? SITE_DATA.tours
    : SITE_DATA.tours.filter((t) => t.category === selectedCategory);

  const toggleAccordion = (tourId, dayIdx) => {
    const key = `${tourId}-${dayIdx}`;
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="section section-alt" id="tours-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Curated Expeditions</span>
          <h2 className="section-title">Sri Lanka Tours &amp; Safaris</h2>
          <p className="section-subtitle">
            Pre-planned off-road motorcycle tours, epic tuk tuk group road trips, cultural triangle excursions, and breathtaking nature safaris.
          </p>
        </div>

        {/* Tour Filter Tabs */}
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

        {/* Tours Grid */}
        <div className="tours-grid">
          {filteredTours.map((tour) => (
            <article key={tour.id} className="tour-card" data-category={tour.category}>
              <div className="tour-card-header">
                <span className="tour-badge">{tour.badge}</span>
                <h3 className="tour-title">{tour.title}</h3>
                <div className="tour-meta-row">
                  {tour.duration && (
                    <div className="tour-meta-item">
                      <Clock size={14} />
                      {tour.duration}
                    </div>
                  )}
                  {tour.pricing && (
                    <div className="tour-meta-item">
                      <Tag size={14} />
                      {tour.pricing}
                    </div>
                  )}
                </div>
              </div>

              <div className="tour-card-body">
                {tour.route && (
                  <div className="tour-route-badge">
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
                      Route:
                    </strong>
                    {tour.route}
                  </div>
                )}

                <p className="tour-overview-text">{tour.overview}</p>

                {/* Day Trips List if applicable */}
                {tour.dayTrips && (
                  <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1rem' }}>
                    <strong style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                      Popular Day Trips Available:
                    </strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                      {tour.dayTrips.map((dt, i) => (
                        <li key={i} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem' }}>
                          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>• {dt.name}: </span>
                          <span style={{ color: 'var(--text-muted)' }}>{dt.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Day-by-Day Accordion for Multi-Day Tours */}
                {tour.itinerary && (
                  <div className="itinerary-accordion">
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', margin: '0.75rem 0 0.25rem' }}>
                      Day-by-Day Itinerary ({tour.itinerary.length} Days):
                    </strong>
                    {tour.itinerary.map((dayItem, dIdx) => {
                      const isOpen = !!openAccordions[`${tour.id}-${dIdx}`];
                      return (
                        <div key={dIdx} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                          <button
                            className="accordion-trigger"
                            onClick={() => toggleAccordion(tour.id, dIdx)}
                          >
                            <span>
                              <span className="accordion-day-tag">{dayItem.day}: </span>
                              <span>{dayItem.title}</span>
                            </span>
                            <ChevronDown
                              size={16}
                              className="accordion-icon"
                              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                            />
                          </button>
                          {isOpen && (
                            <div className="accordion-content" style={{ maxHeight: '500px' }}>
                              <div className="accordion-content-inner">
                                {dayItem.desc}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="tour-card-footer">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Includes Guide &amp; Full Support</span>
                <a
                  href={`https://wa.me/94776464346?text=${encodeURIComponent(`Hi Rocky! I am interested in the ${tour.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle size={14} />
                  Book This Tour
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
