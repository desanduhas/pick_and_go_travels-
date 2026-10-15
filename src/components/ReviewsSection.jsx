import React from 'react';
import { SITE_DATA } from '../data/siteData';

export default function ReviewsSection() {
  const { reviews } = SITE_DATA;

  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Customer Stories</span>
          <h2 className="section-title">What Our Travelers Say on Google</h2>
          <p className="section-subtitle">
            Real 5-star experiences from adventurers who explored Sri Lanka with Pick &amp; Go Travels.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <article key={idx} className="review-card">
              <div className="review-header">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="reviewer-img"
                  onError={(e) => {
                    e.currentTarget.src = 'https://pickandgotravels.com/wp-content/uploads/2024/05/Icon-N-150x150.png';
                  }}
                />
                <div className="reviewer-info">
                  <h4>{rev.name}</h4>
                  <div className="reviewer-platform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    </svg>
                    <span>Verified Google Review</span>
                  </div>
                </div>
              </div>

              <div className="star-rating">
                {'★'.repeat(rev.rating)}
              </div>

              <p className="review-body">“{rev.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
