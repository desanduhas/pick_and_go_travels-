import React, { useState } from 'react';

/**
 * Primitive Skeleton Shimmer element
 */
export function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--radius-sm)',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Image wrapper with integrated Skeleton Shimmer until loaded
 */
export function SkeletonImage({
  src,
  alt = '',
  className = '',
  aspectRatio = '16/10',
  style = {},
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`skeleton-image-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Shimmer Placeholder behind image */}
      {!isLoaded && !hasError && (
        <div className="skeleton-image-placeholder skeleton-shimmer" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'relative',
          zIndex: 1
        }}
        {...props}
      />
    </div>
  );
}

/**
 * Skeleton for a Vehicle Rental Card
 */
export function SkeletonVehicleCard() {
  return (
    <div className="skeleton-card vehicle-card-skeleton">
      <div className="skeleton-card-media skeleton-shimmer" style={{ height: '220px' }} />
      <div className="skeleton-card-body">
        <Skeleton width="40%" height="16px" borderRadius="12px" style={{ marginBottom: '8px' }} />
        <Skeleton width="75%" height="24px" style={{ marginBottom: '12px' }} />
        <Skeleton width="90%" height="14px" style={{ marginBottom: '20px' }} />
        <div className="skeleton-specs-row">
          <Skeleton width="22%" height="14px" />
          <Skeleton width="22%" height="14px" />
          <Skeleton width="22%" height="14px" />
          <Skeleton width="22%" height="14px" />
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
          <Skeleton width="60%" height="42px" borderRadius="var(--radius-md)" />
          <Skeleton width="40%" height="42px" borderRadius="var(--radius-md)" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for a Tour Package Card
 */
export function SkeletonTourCard() {
  return (
    <div className="skeleton-card tour-card-skeleton">
      <div className="skeleton-card-media skeleton-shimmer" style={{ height: '230px' }} />
      <div className="skeleton-card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <Skeleton width="30%" height="16px" borderRadius="12px" />
          <Skeleton width="25%" height="16px" borderRadius="12px" />
        </div>
        <Skeleton width="85%" height="26px" style={{ marginBottom: '12px' }} />
        <Skeleton width="100%" height="14px" style={{ marginBottom: '8px' }} />
        <Skeleton width="70%" height="14px" style={{ marginBottom: '20px' }} />
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <Skeleton width="28%" height="26px" borderRadius="16px" />
          <Skeleton width="32%" height="26px" borderRadius="16px" />
          <Skeleton width="30%" height="26px" borderRadius="16px" />
        </div>
        <Skeleton width="100%" height="44px" borderRadius="var(--radius-md)" />
      </div>
    </div>
  );
}

/**
 * Full Page Skeleton Layouts based on active page route
 */
export default function PageSkeleton({ page = 'home' }) {
  return (
    <div className="page-skeleton-container" aria-busy="true" aria-label="Loading content...">
      <div className="container">
        {/* Page Header Skeleton */}
        <div className="skeleton-page-header">
          <Skeleton width="130px" height="26px" borderRadius="16px" style={{ margin: '0 auto 14px' }} />
          <Skeleton width="55%" height="42px" style={{ margin: '0 auto 12px' }} />
          <Skeleton width="40%" height="18px" style={{ margin: '0 auto 36px' }} />
        </div>

        {/* Dynamic Page Specific Body Skeleton */}
        {(page === 'home' || page === 'rentals' || page === 'tuktuk') && (
          <div className="skeleton-fleet-section">
            {/* Filter Tabs Skeleton */}
            <div className="skeleton-tabs-bar">
              <Skeleton width="100px" height="38px" borderRadius="20px" />
              <Skeleton width="110px" height="38px" borderRadius="20px" />
              <Skeleton width="120px" height="38px" borderRadius="20px" />
              <Skeleton width="95px" height="38px" borderRadius="20px" />
              <Skeleton width="130px" height="38px" borderRadius="20px" />
            </div>

            {/* Grid of Vehicle Card Skeletons */}
            <div className="skeleton-cards-grid">
              <SkeletonVehicleCard />
              <SkeletonVehicleCard />
              <SkeletonVehicleCard />
              <SkeletonVehicleCard />
              <SkeletonVehicleCard />
              <SkeletonVehicleCard />
            </div>
          </div>
        )}

        {page === 'tours' && (
          <div className="skeleton-tours-section">
            <div className="skeleton-tabs-bar">
              <Skeleton width="110px" height="38px" borderRadius="20px" />
              <Skeleton width="130px" height="38px" borderRadius="20px" />
              <Skeleton width="120px" height="38px" borderRadius="20px" />
              <Skeleton width="140px" height="38px" borderRadius="20px" />
            </div>
            <div className="skeleton-cards-grid">
              <SkeletonTourCard />
              <SkeletonTourCard />
              <SkeletonTourCard />
              <SkeletonTourCard />
            </div>
          </div>
        )}

        {page === 'pricing' && (
          <div className="skeleton-pricing-section">
            <div className="skeleton-calculator-grid">
              {/* Left Form Box Skeleton */}
              <div className="skeleton-card" style={{ padding: '2rem' }}>
                <Skeleton width="45%" height="24px" style={{ marginBottom: '18px' }} />
                <Skeleton width="100%" height="48px" style={{ marginBottom: '24px' }} />
                <Skeleton width="50%" height="24px" style={{ marginBottom: '18px' }} />
                <Skeleton width="100%" height="48px" style={{ marginBottom: '24px' }} />
                <Skeleton width="55%" height="24px" style={{ marginBottom: '18px' }} />
                <Skeleton width="100%" height="70px" borderRadius="12px" style={{ marginBottom: '24px' }} />
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Skeleton width="70px" height="32px" borderRadius="16px" />
                  <Skeleton width="90px" height="32px" borderRadius="16px" />
                  <Skeleton width="80px" height="32px" borderRadius="16px" />
                  <Skeleton width="110px" height="32px" borderRadius="16px" />
                </div>
              </div>

              {/* Right Summary Box Skeleton */}
              <div className="skeleton-card" style={{ padding: '2rem' }}>
                <Skeleton width="60%" height="28px" style={{ marginBottom: '24px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <Skeleton width="40%" height="16px" />
                  <Skeleton width="20%" height="16px" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <Skeleton width="35%" height="16px" />
                  <Skeleton width="25%" height="16px" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <Skeleton width="45%" height="16px" />
                  <Skeleton width="20%" height="16px" />
                </div>
                <div style={{ height: '1px', background: '#e2e8f0', margin: '20px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <Skeleton width="40%" height="26px" />
                  <Skeleton width="30%" height="32px" />
                </div>
                <Skeleton width="100%" height="48px" borderRadius="var(--radius-md)" style={{ marginBottom: '12px' }} />
                <Skeleton width="100%" height="48px" borderRadius="var(--radius-md)" />
              </div>
            </div>
          </div>
        )}

        {(page === 'stay' || page === 'driver') && (
          <div className="skeleton-cards-grid">
            <SkeletonVehicleCard />
            <SkeletonVehicleCard />
            <SkeletonVehicleCard />
          </div>
        )}

        {(page === 'about' || page === 'contact') && (
          <div className="skeleton-calculator-grid">
            <div className="skeleton-card" style={{ padding: '2.5rem' }}>
              <Skeleton width="60%" height="32px" style={{ marginBottom: '16px' }} />
              <Skeleton width="100%" height="18px" style={{ marginBottom: '10px' }} />
              <Skeleton width="90%" height="18px" style={{ marginBottom: '10px' }} />
              <Skeleton width="80%" height="18px" style={{ marginBottom: '28px' }} />
              <Skeleton width="100%" height="220px" borderRadius="16px" />
            </div>
            <div className="skeleton-card" style={{ padding: '2.5rem' }}>
              <Skeleton width="50%" height="28px" style={{ marginBottom: '20px' }} />
              <Skeleton width="100%" height="44px" style={{ marginBottom: '16px' }} />
              <Skeleton width="100%" height="44px" style={{ marginBottom: '16px' }} />
              <Skeleton width="100%" height="44px" style={{ marginBottom: '16px' }} />
              <Skeleton width="100%" height="90px" style={{ marginBottom: '20px' }} />
              <Skeleton width="100%" height="48px" borderRadius="var(--radius-md)" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
