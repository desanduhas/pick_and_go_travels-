import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const { company } = SITE_DATA;

  useEffect(() => {
    // Reset scroll immediately on mount
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Start fade out after 1500ms
    const fadeTimer = setTimeout(() => {
      setFading(true);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 1500);

    // Completely remove from DOM after 2000ms
    const removeTimer = setTimeout(() => {
      setVisible(false);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen ${fading ? 'fade-out' : ''}`}
      aria-hidden="true"
    >
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <div className="splash-glow-ring" />
          <img
            src={company.logoDark}
            alt={company.name}
            className="splash-logo"
          />
        </div>
        <p className="splash-tagline">{company.tagline || 'Drive | Discover | Delight'}</p>
        <div className="splash-progress-track">
          <div className="splash-progress-bar" />
        </div>
      </div>
    </div>
  );
}
