import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function AnnouncementBar() {
  const { company } = SITE_DATA;

  return (
    <div className="announcement-bar">
      <div className="container announcement-wrapper">
        <div className="announcement-content">
          <span className="announcement-badge">SPECIAL OFFER</span>
          <span className="announcement-text">Book your TukTuk &amp; Cars online Now &amp; Get A Free 1-on-1 TukTuk driving training lesson</span>
        </div>
        <div className="announcement-contact">
          <a href={`tel:${company.phone1.replace(/\s+/g, '')}`} className="announcement-link">
            <Phone size={14} />
            <span>{company.phone1}</span>
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-link"
            style={{ color: '#25d366' }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp Live</span>
          </a>
        </div>
      </div>
    </div>
  );
}
