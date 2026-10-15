import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function FaqSection() {
  const { faqs } = SITE_DATA;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="faqs">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about driving, permits, breakdowns, and planning your Sri Lanka road trip.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button className="faq-header" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <Plus
                    className="faq-icon"
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="faq-body" style={{ maxHeight: '400px' }}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
