import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function FloatingActions() {
  const { company } = SITE_DATA;

  return (
    <div className="floating-action-bar" aria-label="Quick Action Contacts">
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Rocky! I want to inquire about a vehicle or tour in Sri Lanka.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href={`tel:${company.phone1.replace(/\s+/g, '')}`}
        className="fab-btn fab-call"
        aria-label="Call Rocky Directly"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
