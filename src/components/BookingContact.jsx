import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export default function BookingContact({ initialService, initialMessage, initialDates }) {
  const { company } = SITE_DATA;

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    service: initialService || 'TukTuk Self Drive',
    startDate: initialDates?.start || '',
    endDate: initialDates?.end || '',
    message: initialMessage || ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialService) setFormData((prev) => ({ ...prev, service: initialService }));
    if (initialMessage) setFormData((prev) => ({ ...prev, message: initialMessage }));
    if (initialDates?.start) setFormData((prev) => ({ ...prev, startDate: initialDates.start }));
    if (initialDates?.end) setFormData((prev) => ({ ...prev, endDate: initialDates.end }));
  }, [initialService, initialMessage, initialDates]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMsg = encodeURIComponent(
      `Hello Rocky! I am submitting an inquiry via your website:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone/WhatsApp: ${formData.whatsapp}\n` +
      `• Email: ${formData.email}\n` +
      `• Service: ${formData.service}\n` +
      `• Dates: ${formData.startDate || 'Flexible'} to ${formData.endDate || 'Flexible'}\n` +
      `• Notes: ${formData.message || 'No additional note'}\n\n` +
      `Looking forward to confirming with you!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${company.whatsapp}?text=${formattedMsg}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleDirectWhatsapp = () => {
    const formattedMsg = encodeURIComponent(
      `Hello Rocky! My name is ${formData.name || 'Traveler'}.\n` +
      `I am interested in: ${formData.service}\n` +
      `Details: ${formData.message || 'I would like to inquire about booking.'}`
    );
    window.open(`https://wa.me/${company.whatsapp}?text=${formattedMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section section-alt" id="contact-showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Get In Touch</span>
          <h2 className="section-title" id="booking">Book Your Ride or Inquire Online</h2>
          <p className="section-subtitle">
            Send us your travel dates, vehicle preference, or custom tour requirements. Rocky and our team will get back to you immediately.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Headquarters &amp; Pickup Hub
            </h3>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <MapPin size={22} />
              </div>
              <div className="contact-detail-text">
                <h4>Our Office Address</h4>
                <p>{company.name}<br />{company.address}</p>
                <a
                  href={company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', display: 'inline-block', marginTop: '0.25rem' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <Phone size={22} />
              </div>
              <div className="contact-detail-text">
                <h4>Give Us a Call</h4>
                <p><a href={`tel:${company.phone1.replace(/\s+/g, '')}`}>{company.phone1}</a></p>
                <p><a href={`tel:${company.phone2.replace(/\s+/g, '')}`}>{company.phone2}</a></p>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <MessageCircle size={22} />
              </div>
              <div className="contact-detail-text">
                <h4>WhatsApp Fast Support</h4>
                <p>
                  <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {company.phone1} (Instant Chat)
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <Mail size={22} />
              </div>
              <div className="contact-detail-text">
                <h4>Email Enquiries</h4>
                <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)'
            }}>
              <h5 style={{ color: '#b45309', marginBottom: '0.25rem', fontWeight: 700 }}>Airport Transfers</h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                We are located just 15 minutes from Bandaranaike International Airport (CMB). Airport pick-up and vehicle delivery is readily available.
              </p>
            </div>
          </div>

          {/* Interactive Booking Form */}
          <div className="booking-form-card">
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Reservation &amp; Inquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill in your trip details below. Submitting generates an instant confirmation and direct WhatsApp link with Rocky!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsapp" className="form-label">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="form-input"
                    placeholder="+1 234 567 890"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Type *</label>
                  <select
                    id="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="TukTuk Self Drive">Bajaj RE 205cc Tuk Tuk (Self Drive)</option>
                    <option value="Motorbike Rental">Motorbike / Scooter Rental</option>
                    <option value="Car with Driver">Private Car / Van with Driver</option>
                    <option value="Beach ATV">Beach Quad ATV Ride</option>
                    <option value="Foot Bicycle">Foot Bicycle Rental</option>
                    <option value="TukTuk Group Tour">TukTuk Group Tour</option>
                    <option value="Motorbike Tour">Motorbike Off-Road Tour (6/7/12 Days)</option>
                    <option value="Day Excursion">Day Excursion from Negombo</option>
                    <option value="Whitehouse Stay">Whitehouse Room Stay (Negombo)</option>
                    <option value="Tailor Made">Custom Tailor-Made Tour</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate" className="form-label">Start / Pickup Date</label>
                  <input
                    type="date"
                    id="startDate"
                    className="form-input"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate" className="form-label">End / Return Date</label>
                  <input
                    type="date"
                    id="endDate"
                    className="form-input"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message / Special Requests / Flight Info</label>
                <textarea
                  id="message"
                  className="form-input"
                  rows={3}
                  placeholder="Tell us about your flight time, license questions, or custom travel plans..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                  Submit Reservation
                </button>
                <button
                  type="button"
                  className="btn btn-whatsapp btn-lg"
                  onClick={handleDirectWhatsapp}
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
              </div>

              {submitted && (
                <div style={{
                  marginTop: '1.25rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-emerald-soft)',
                  border: '1px solid var(--accent-emerald)',
                  color: '#065f46',
                  fontWeight: 600
                }}>
                  Thank you, {formData.name}! Your inquiry has been prepared. Opening WhatsApp with Rocky now...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
