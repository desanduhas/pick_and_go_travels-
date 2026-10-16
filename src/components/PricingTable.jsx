import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function PricingTable() {
  const { fleet } = SITE_DATA;

  return (
    <section className="section" id="pricing-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Price Matrix</span>
          <h2 className="section-title">Transparent Vehicle Rental Prices</h2>
          <p className="section-subtitle">
            Direct comparison across all vehicles and rental durations. No deposit required, transparent inclusions, and 100% unlimited kilometers.
          </p>
        </div>

        <div className="table-scroll-hint">
          <span>👈 Swipe horizontally to view full price matrix 👉</span>
        </div>

        <div className="table-responsive">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Vehicle Type / Model</th>
                <th>Category</th>
                <th>01 - 07 / 10 Days</th>
                <th>08 - 14 / 21 Days</th>
                <th>15 - 30 Days</th>
                <th>Key Inclusions</th>
              </tr>
            </thead>
            <tbody>
              {fleet.map((v) => {
                const p1 = v.prices && v.prices[0] ? `${v.prices[0].price} / ${v.prices[0].period}` : '$15 / day';
                const p2 = v.prices && v.prices[1] ? `${v.prices[1].price} / ${v.prices[1].period}` : '$14 / day';
                const p3 = v.prices && v.prices[2] ? `${v.prices[2].price} / ${v.prices[2].period}` : '$12 / day';
                const inclusions = v.features ? v.features.slice(0, 3).join(', ') : 'Unlimited KMs, Tools';

                return (
                  <tr key={v.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{v.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{v.tagline || ''}</div>
                    </td>
                    <td>
                      <span className="vehicle-badge-category" style={{ position: 'static' }}>
                        {v.category}
                      </span>
                    </td>
                    <td className="price-highlight">{p1}</td>
                    <td className="price-highlight">{p2}</td>
                    <td className="price-highlight">{p3}</td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{inclusions}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          padding: '1.5rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>
              Need a Long-Term Rental (30+ Days) or Custom Fleet?
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Special monthly rates and seasonal group discounts are available directly with Rocky.
            </p>
          </div>
          <a
            href={`https://wa.me/94776464346?text=${encodeURIComponent('Hi Rocky, I am interested in a long-term vehicle rental discount.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={14} />
            WhatsApp Rocky Directly
          </a>
        </div>
      </div>
    </section>
  );
}
