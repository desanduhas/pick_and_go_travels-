import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function AboutFounder() {
  const { company } = SITE_DATA;

  return (
    <section className="section" id="about-showcase">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img
              src="https://pickandgotravels.com/wp-content/uploads/2024/05/photo3jpg-1.jpg"
              alt="Pick and Go Travels Founder and Travelers"
            />
            <div className="about-badge-floating">
              <h4>{company.founder}</h4>
              <p>Founder &amp; Managing Director</p>
            </div>
          </div>

          <div className="about-text-content">
            <span className="section-pill">Our Story &amp; Leadership</span>
            <h2 className="section-title">Sri Lanka’s Most Trusted Tuk Tuk &amp; Adventure Travel Family</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Based in coastal Negombo, <strong>{company.name}</strong> was founded with a singular passion: to empower travelers from all over the world to experience the authentic magic, hospitality, and raw beauty of Sri Lanka freely.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Under the personal guidance of <strong>Rocky</strong>, our team has helped thousands of tourists navigate the island safely. From securing official local permits before your flight lands, to delivering thoroughly inspected vehicles with comprehensive insurance, to coordinating emergency roadside mechanics in distant mountain passes—we treat every traveler like family.
            </p>

            <div className="about-stats-grid">
              <div className="about-stat-card">
                <h4 className="about-stat-number">1,000+</h4>
                <p className="about-stat-label">International Travelers Hosted Annually</p>
              </div>
              <div className="about-stat-card">
                <h4 className="about-stat-number">100%</h4>
                <p className="about-stat-label">Legal AAC License &amp; Police Compliance</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              Message Rocky on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
