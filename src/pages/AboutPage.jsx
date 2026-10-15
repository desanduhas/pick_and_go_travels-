import React from 'react';
import AboutFounder from '../components/AboutFounder';
import ReviewsSection from '../components/ReviewsSection';
import FaqSection from '../components/FaqSection';

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="page-pill">Our Heritage &amp; Mission</span>
          <h1 className="page-title">About Pick &amp; Go Travels</h1>
          <p className="page-subtitle">
            Founded in Negombo with a commitment to honest pricing, reliable vehicles, and genuine local hospitality for adventurous travelers from all over the world.
          </p>
        </div>

        {/* Founder Story */}
        <div style={{ marginBottom: '4rem' }}>
          <AboutFounder />
        </div>

        {/* Customer Reviews */}
        <div style={{ marginBottom: '4rem' }}>
          <ReviewsSection />
        </div>

        {/* FAQs */}
        <FaqSection />
      </div>
    </div>
  );
}
