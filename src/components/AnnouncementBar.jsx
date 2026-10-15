import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function AnnouncementBar() {
  const { company } = SITE_DATA;

  return (
    <div className="announcement-bar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="announcement-content">
          <span className="announcement-badge">SPECIAL OFFER</span>
          <span>Book Your TukTuk Online Now &amp; Get A Free 1-on-1 Driving Training Session!</span>
        </div>
        <div className="announcement-contact">
          <a href={`tel:${company.phone1.replace(/\s+/g, '')}`} className="announcement-link">
            <Phone size={14} />
            {company.phone1}
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-link"
            style={{ color: '#25d366' }}
          >
            <MessageCircle size={14} />
            WhatsApp Live
          </a>
        </div>
      </div>
    </div>
  );
}
