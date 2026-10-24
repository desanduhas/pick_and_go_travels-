import React from 'react';

// ============================================================================
// Pick & Go Travels - Premium Vector Icon Suite
// Designed in Apple iOS / Linear / Stripe minimal line-art aesthetic.
// Consistent 24x24 viewBox, stroke-based, strokeWidth 1.8, strokeLinecap="round"
// ============================================================================

export const TukTukIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Wheels */}
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.5 18h7" />
    {/* Body chassis */}
    <path d="M3.5 15.5h2.5l2-9.5h8.5l3 5.5v4h-1.5" />
    {/* Soft canopy roof & windscreen */}
    <path d="M7 6h9.5l2.5 4H8.5" />
    <path d="M12 6v9.5" />
    <path d="M4 12h3" />
    {/* Headlight */}
    <path d="M3 15.5h1" />
  </svg>
);

export const ChauffeurCarIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Luxury Sedan Profile */}
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.6 0-1.1.2-1.5.6L3 10s-1 .3-1.5 1c-.3.4-.5.9-.5 1.5v3.5c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
    <path d="M9 17h6" />
    {/* Window Split */}
    <path d="M6 10.5h10l-1-2.5h-5.5z" />
  </svg>
);

export const MotorbikeIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Dual Sport / Enduro Motorcycle */}
    <circle cx="5" cy="16" r="3" />
    <circle cx="19" cy="16" r="3" />
    <path d="M5 16l4-6h4l2 6" />
    <path d="M13 10l3-5h2" />
    <path d="M16 16l-3-6" />
    <path d="M9 10h4l1-2H10z" />
    <path d="M8 12h3" />
    <path d="M15 17h3" />
  </svg>
);

export const ScooterIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Step-Through Automatic Scooter */}
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="18.5" cy="17.5" r="2.5" />
    <path d="M8 17.5h7" />
    <path d="M5.5 15V11l4 2h2l2-4h2.5" />
    <path d="M15 9l2.5 6" />
    <path d="M18.5 15v-5l-2-2" />
    <path d="M16 7h3" />
  </svg>
);

export const BicycleIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* City / Touring Bicycle */}
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-3 11.5l2.5-6H18" />
    <path d="M5.5 17.5l4.5-6 4 6H5.5z" />
    <path d="M10 11.5L8.5 7H7" />
  </svg>
);

export const VanIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Passenger Van / Toyota KDH */}
    <path d="M3 16V8a2 2 0 0 1 2-2h11l4 4v6a1 1 0 0 1-1 1h-1" />
    <path d="M3 16h2" />
    <circle cx="7" cy="16.5" r="2" />
    <circle cx="17" cy="16.5" r="2" />
    <path d="M9 16.5h6" />
    <path d="M5 9h4v3H5z" />
    <path d="M11 9h4v3h-4z" />
    <path d="M17 10l2 2h-2z" />
  </svg>
);

export const ExpeditionMapIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Folded Expedition Map with Waypoint */}
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
    <circle cx="12" cy="11" r="1.5" fill={color} />
  </svg>
);

export const VillaStayIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Boutique Villa / Guesthouse */}
    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
    <path d="M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7" />
    <line x1="7" y1="9" x2="7.01" y2="9" />
    <line x1="17" y1="9" x2="17.01" y2="9" />
  </svg>
);

export const TrainIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Sri Lanka Blue Mountain Train */}
    <rect x="4" y="3" width="16" height="15" rx="3" />
    <line x1="4" y1="10" x2="20" y2="10" />
    <circle cx="8.5" cy="14.5" r="1" fill={color} />
    <circle cx="15.5" cy="14.5" r="1" fill={color} />
    <line x1="8" y1="18" x2="5" y2="21" />
    <line x1="16" y1="18" x2="19" y2="21" />
  </svg>
);

export const TollRoadIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Highway / Expressway Road */}
    <path d="M4 21L8 3" />
    <path d="M20 21L16 3" />
    <line x1="12" y1="6" x2="12" y2="8" strokeDasharray="1 2" />
    <line x1="12" y1="12" x2="12" y2="14" strokeDasharray="1 2" />
    <line x1="12" y1="18" x2="12" y2="20" strokeDasharray="1 2" />
  </svg>
);

export const FuelIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Fuel Dispenser / Petrol Pump */}
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    <path d="M4 10h12" />
    <path d="M16 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-2-2" />
    <rect x="7" y="6" width="6" height="2" rx="0.5" />
    <line x1="3" y1="21" x2="17" y2="21" />
  </svg>
);

export const DriverCapIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Chauffeur / Guide Driver Cap & Badge */}
    <path d="M4 14c0-4 3.5-7 8-7s8 3 8 7" />
    <path d="M2 14h20c-1.5 3-4.5 4-10 4s-8.5-1-10-4z" />
    <path d="M12 4v3" />
    <circle cx="12" cy="10" r="1.5" fill={color} />
  </svg>
);

export const LicenseCardIcon = ({ size = 24, color = 'currentColor', className = '', strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Legal Driving License / AAC Permit ID */}
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <circle cx="8" cy="11" r="2" />
    <path d="M5.5 16c0-1.5 1.2-2.5 2.5-2.5s2.5 1 2.5 2.5" />
    <line x1="13" y1="9" x2="18" y2="9" />
    <line x1="13" y1="12" x2="17" y2="12" />
    <line x1="13" y1="15" x2="16" y2="15" />
  </svg>
);
