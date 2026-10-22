import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Check,
  RotateCcw
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const CATEGORY_NAMES = {
  'tuktuk': '🛺 Tuk Tuk (Self Drive)',
  'motorbike': '🏍️ Adventure Motorbike',
  'scooter': '🛵 Automatic Scooter',
  'car-with-driver': '🚗 Rent-A-Car (Automatic)',
  'atv': '🏎️ Quad Bike / Beach ATV',
  'bicycle': '🚲 Foot Bicycle'
};

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAY_NAMES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

// Date utilities
const getTodayStr = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const addDays = (dateStr, daysCount) => {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + daysCount);
  const ry = date.getFullYear();
  const rm = String(date.getMonth() + 1).padStart(2, '0');
  const rd = String(date.getDate()).padStart(2, '0');
  return `${ry}-${rm}-${rd}`;
};

const calculateDaysDiff = (startStr, endStr) => {
  if (!startStr || !endStr) return 1;
  const [y1, m1, d1] = startStr.split('-').map(Number);
  const [y2, m2, d2] = endStr.split('-').map(Number);
  const t1 = new Date(y1, m1 - 1, d1).getTime();
  const t2 = new Date(y2, m2 - 1, d2).getTime();
  const diff = Math.round((t2 - t1) / (1000 * 60 * 60 * 24));
  return Math.max(1, diff);
};

const formatPrettyDate = (dateStr) => {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const formatSummaryDate = (dateStr) => {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

// Generate calendar days for a given year & month (Monday start)
const getMonthCalendarDays = (year, month) => {
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon ...
  const startOffset = (firstDayOfWeek + 6) % 7; // Monday = 0
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    const mStr = String(month + 1).padStart(2, '0');
    const dStr = String(d).padStart(2, '0');
    days.push(`${year}-${mStr}-${dStr}`);
  }
  return days;
};

export default function Calculator({ selectedVehicleId, onBookPackage }) {
  const categories = Array.from(new Set(SITE_DATA.fleet.map((v) => v.category)));

  const getInitialCategory = () => {
    if (selectedVehicleId) {
      const found = SITE_DATA.fleet.find((v) => v.id === selectedVehicleId);
      if (found) return found.category;
    }
    return 'tuktuk';
  };

  const todayStr = getTodayStr();
  const [category, setCategory] = useState(getInitialCategory);
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || 'tuktuk-bajaj');
  const [vehicleQty, setVehicleQty] = useState(1);

  // Booking.com style dates state
  const [startDate, setStartDate] = useState(() => addDays(todayStr, 1));
  const [endDate, setEndDate] = useState(() => addDays(todayStr, 8));
  const [days, setDays] = useState(7);

  // Calendar popover & interactive state
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectingField, setSelectingField] = useState('start'); // 'start' | 'end'
  const [hoverDate, setHoverDate] = useState(null);

  // Calendar view month & year (starts at current month)
  const initialDateObj = new Date();
  const [viewYear, setViewYear] = useState(initialDateObj.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDateObj.getMonth());

  const [includeLicense, setIncludeLicense] = useState(false);
  const [licenseCount, setLicenseCount] = useState(1);
  const [includeTrainTransfer, setIncludeTrainTransfer] = useState(false);

  const calendarRef = useRef(null);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setCalendarOpen(false);
        setHoverDate(null);
      }
    };
    if (calendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [calendarOpen]);

  // Sync with selected vehicle prop
  useEffect(() => {
    if (selectedVehicleId) {
      const found = SITE_DATA.fleet.find((v) => v.id === selectedVehicleId);
      if (found) {
        setCategory(found.category);
        setVehicleId(found.id);
      }
    }
  }, [selectedVehicleId]);

  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    const available = SITE_DATA.fleet.filter((v) => v.category === newCat);
    if (available.length > 0) {
      setVehicleId(available[0].id);
    }
  };

  // Month navigation in calendar
  const handlePrevMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Clicking a date in the calendar (Booking.com style flow)
  const handleDateClick = (dateStr) => {
    if (!dateStr || dateStr < todayStr) return;

    if (selectingField === 'start') {
      setStartDate(dateStr);
      setEndDate('');
      setSelectingField('end');
    } else {
      // Selecting Drop-off date
      if (dateStr <= startDate) {
        // If user clicks a date earlier than pickup, reset pickup date to clicked date
        setStartDate(dateStr);
        setEndDate('');
        setSelectingField('end');
      } else {
        // Valid drop-off date selected
        setEndDate(dateStr);
        const newDays = calculateDaysDiff(startDate, dateStr);
        setDays(newDays);
        setSelectingField('start');
        setCalendarOpen(false); // auto-close on selection completion like booking.com
        setHoverDate(null);
      }
    }
  };

  // Quick Preset Selection (3 Days, 7 Days, 14 Days, etc.)
  const handleSelectPreset = (numDays) => {
    const baseStart = startDate || todayStr;
    setStartDate(baseStart);
    const newEnd = addDays(baseStart, numDays);
    setEndDate(newEnd);
    setDays(numDays);
    setSelectingField('start');
    setCalendarOpen(false);
    setHoverDate(null);
  };

  // Reset dates
  const handleResetDates = (e) => {
    e.stopPropagation();
    const defaultStart = addDays(todayStr, 1);
    const defaultEnd = addDays(todayStr, 8);
    setStartDate(defaultStart);
    setEndDate(defaultEnd);
    setDays(7);
    setSelectingField('start');
    setHoverDate(null);
  };

  // Vehicle quantity stepper
  const handleVehicleQtyChange = (delta) => {
    const nextQty = Math.max(1, Math.min(10, vehicleQty + delta));
    if (nextQty !== vehicleQty) {
      setVehicleQty(nextQty);
      setLicenseCount(nextQty);
    }
  };

  const handleToggleLicense = (checked) => {
    setIncludeLicense(checked);
    if (checked && licenseCount <= 0) {
      setLicenseCount(vehicleQty);
    }
  };

  const handleLicenseCountChange = (delta) => {
    const nextCount = Math.max(1, Math.min(20, licenseCount + delta));
    setLicenseCount(nextCount);
  };

  const availableVehicles = SITE_DATA.fleet.filter((v) => v.category === category);
  const vehicle = availableVehicles.find((v) => v.id === vehicleId) || availableVehicles[0] || SITE_DATA.fleet[0];

  const isCar = category === 'car-with-driver' || vehicle.category === 'car-with-driver';

  // Calculate daily price based on duration tiers
  let dailyRate = 16;
  if (vehicle.prices && vehicle.prices.length > 0) {
    if (vehicle.category === 'atv') {
      dailyRate = 40;
    } else if (isCar) {
      if (vehicle.prices && vehicle.prices.length >= 3) {
        if (days <= 10) {
          dailyRate = parseInt(vehicle.prices[0].price.replace(/[^0-9]/g, ''), 10) || 30;
        } else if (days <= 22) {
          dailyRate = parseInt(vehicle.prices[1].price.replace(/[^0-9]/g, ''), 10) || 28;
        } else {
          dailyRate = parseInt(vehicle.prices[2].price.replace(/[^0-9]/g, ''), 10) || 26;
        }
      } else {
        if (days <= 10) dailyRate = 30;
        else if (days <= 22) dailyRate = 28;
        else dailyRate = 26;
      }
    } else {
      if (days <= 10) {
        dailyRate = parseInt(vehicle.prices[0].price.replace(/[^0-9]/g, ''), 10) || 16;
      } else if (days <= 21) {
        dailyRate = parseInt((vehicle.prices[1] || vehicle.prices[0]).price.replace(/[^0-9]/g, ''), 10) || 15;
      } else {
        dailyRate = parseInt((vehicle.prices[2] || vehicle.prices[vehicle.prices.length - 1]).price.replace(/[^0-9]/g, ''), 10) || 14;
      }
    }
  }

  const baseRentalTotal = dailyRate * days * vehicleQty;
  const insurancePerVehicle = 60;
  const insuranceTotal = isCar ? 0 : insurancePerVehicle * vehicleQty; // $0 for cars
  const depositPerVehicle = vehicle.depositAmount || (vehicle.deposit ? parseInt(vehicle.deposit.replace(/[^0-9]/g, ''), 10) : 500) || 500;
  const depositTotal = isCar ? depositPerVehicle * vehicleQty : 0;
  const licensePrice = 40;
  const licenseTotal = includeLicense ? licensePrice * licenseCount : 0;
  const trainTransferPerVehicle = 40;
  const trainTransferTotal = includeTrainTransfer ? trainTransferPerVehicle * vehicleQty : 0;
  const grandTotal = baseRentalTotal + (isCar ? depositTotal : insuranceTotal) + licenseTotal + trainTransferTotal;

  const whatsappMessage = encodeURIComponent(
    `Hello Rocky! I calculated a rental package on your website:\n\n` +
    `• Vehicle: ${vehicleQty > 1 ? `${vehicleQty}x ` : ''}${vehicle.name}\n` +
    (isCar ? `• Included Mileage: 120 km/day (${120 * days} km total for ${days} days, Extra: $0.35 / 35¢ per km)\n` : '') +
    `• Pick-up Date: ${formatPrettyDate(startDate)}\n` +
    `• Drop-off Date: ${formatPrettyDate(endDate)}\n` +
    `• Rental Duration: ${days} Day${days > 1 ? 's' : ''}${days > 1 ? ` (${days - 1} Night${days - 1 > 1 ? 's' : ''})` : ''} ($${dailyRate}/day per vehicle)\n` +
    `• Vehicle Rental Subtotal: $${baseRentalTotal}\n` +
    (isCar
      ? `• Refundable Security Deposit: $${depositTotal} ($${depositPerVehicle} × ${vehicleQty} - 100% Refundable upon vehicle return)\n`
      : `• Comprehensive Full Insurance (Mandatory): $${insuranceTotal} ($60 × ${vehicleQty})\n`) +
    `• Sri Lanka AAC License Endorsement: ${includeLicense ? `${licenseCount}x Driver${licenseCount > 1 ? 's' : ''} ($${licenseTotal})` : 'Not Selected ($0)'}\n` +
    `• ${isCar ? 'Train Transport Car Delivery (Kandy to Nuwara Eliya or Ella)' : 'Scenic Train Vehicle Transfer (Kandy-Ella)'}: ${includeTrainTransfer ? `Yes - $${trainTransferTotal} ($40 × ${vehicleQty})` : 'Not Selected ($0)'}\n` +
    `• Estimated Total: $${grandTotal}\n\n` +
    `Please confirm vehicle availability for these dates!`
  );

  // Dual Month Views for Desktop Calendar (Current View Month + Next Month)
  const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const month1Days = getMonthCalendarDays(viewYear, viewMonth);
  const month2Days = getMonthCalendarDays(nextYear, nextMonth);

  // Helper to determine day highlighting state
  const getDayStatus = (dStr) => {
    if (!dStr) return 'empty';
    if (dStr < todayStr) return 'disabled';

    const activeEnd = endDate || hoverDate;

    if (dStr === startDate && dStr === activeEnd) return 'single-selected';
    if (dStr === startDate) return 'range-start';
    if (dStr === activeEnd) return 'range-end';

    if (startDate && activeEnd && dStr > startDate && dStr < activeEnd) {
      return 'in-range';
    }

    return 'selectable';
  };

  return (
    <section className="section section-alt" id="calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Instant Quote</span>
          <h2 className="section-title">Live Rental Price Calculator</h2>
          <p className="section-subtitle">
            Transparent, all-inclusive pricing with zero surprises. Choose your vehicle, pick-up and drop-off dates, quantity, and optional perks.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-grid">
            {/* Controls */}
            <div className="calc-form">
              <div className="form-group">
                <label htmlFor="calcCategory" className="form-label">1. Select Vehicle Type</label>
                <select
                  id="calcCategory"
                  className="form-select"
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {CATEGORY_NAMES[cat] || cat.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="calcVehicle" className="form-label">2. Select Vehicle Model</label>
                <select
                  id="calcVehicle"
                  className="form-select"
                  value={vehicleId}
                  onChange={(e) => setVehicleId(e.target.value)}
                >
                  {availableVehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
                {isCar && (
                  <div style={{
                    marginTop: '0.65rem',
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.65rem 0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.85rem',
                    color: '#92400e'
                  }}>
                    <span style={{ fontSize: '1.1rem' }}>🛣️</span>
                    <div>
                      <strong>120 km/day Included</strong> • Additional 1 km extra charge: <strong>$0.35 (35¢)</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Vehicle Quantity Stepper Section */}
              <div className="form-group">
                <label className="form-label">How Many Vehicles Do You Need?</label>
                <div className="vehicle-quantity-card">
                  <div>
                    <span className="qty-label">{vehicle.name} Quantity</span>
                    <span className="qty-subtext">Book multiple units together for your travel group</span>
                  </div>
                  <div className="stepper-control">
                    <button
                      type="button"
                      className="stepper-btn"
                      id="btn-vehicle-qty-minus"
                      aria-label="Decrease vehicle quantity"
                      disabled={vehicleQty <= 1}
                      onClick={() => handleVehicleQtyChange(-1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="stepper-value" id="vehicle-qty-display">{vehicleQty}</span>
                    <button
                      type="button"
                      className="stepper-btn"
                      id="btn-vehicle-qty-plus"
                      aria-label="Increase vehicle quantity"
                      disabled={vehicleQty >= 10}
                      onClick={() => handleVehicleQtyChange(1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Booking.com Style Pick-up Date & Drop-off Date Calendar */}
              <div className="form-group booking-calendar-wrapper" ref={calendarRef}>
                <div className="booking-section-header">
                  <label className="form-label" style={{ margin: 0 }}>
                    3. Pick-up Date &amp; Drop-off Date
                  </label>
                  <span className="booking-pill-duration">
                    <CalendarDays size={15} />
                    {days} Day{days > 1 ? 's' : ''} ({dailyRate}/day)
                  </span>
                </div>

                {/* Booking.com Style Dual Input Box */}
                <div className={`booking-search-bar ${calendarOpen ? 'is-focused' : ''}`}>
                  {/* Pick-up Date Box */}
                  <div
                    className={`booking-date-box ${calendarOpen && selectingField === 'start' ? 'active-field' : ''}`}
                    onClick={() => {
                      setSelectingField('start');
                      setCalendarOpen(true);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Select Pick-up Date"
                  >
                    <div className="booking-box-header">
                      <Calendar size={15} className="booking-field-icon" />
                      <span className="booking-box-label">Pick-up date</span>
                    </div>
                    <div className="booking-box-date">
                      {formatPrettyDate(startDate)}
                    </div>
                    <div className="booking-box-sub">
                      Pickup at Negombo Depot
                    </div>
                  </div>

                  {/* Center Divider / Days Indicator */}
                  <div className="booking-divider-col">
                    <div className="booking-divider-line" />
                    <span className="booking-divider-badge">
                      {days > 1 ? `${days - 1} Night${days - 1 > 1 ? 's' : ''} / ${days} Days` : '1 Day Rental'}
                    </span>
                    <div className="booking-divider-line" />
                  </div>

                  {/* Drop-off Date Box */}
                  <div
                    className={`booking-date-box ${calendarOpen && selectingField === 'end' ? 'active-field' : ''}`}
                    onClick={() => {
                      setSelectingField('end');
                      setCalendarOpen(true);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Select Drop-off Date"
                  >
                    <div className="booking-box-header">
                      <Calendar size={15} className="booking-field-icon" />
                      <span className="booking-box-label">Drop-off date</span>
                    </div>
                    <div className="booking-box-date">
                      {endDate ? formatPrettyDate(endDate) : 'Choose date'}
                    </div>
                    <div className="booking-box-sub">
                      Return vehicle handover
                    </div>
                  </div>
                </div>

                {/* Quick Presets Strip */}
                <div className="booking-presets-strip">
                  <span className="booking-presets-title">Popular Trips:</span>
                  <div className="booking-presets-buttons">
                    {[
                      { label: '3 Days', count: 3 },
                      { label: '7 Days (1 Wk)', count: 7 },
                      { label: '10 Days', count: 10 },
                      { label: '14 Days (2 Wks)', count: 14 },
                      { label: '21 Days (3 Wks)', count: 21 },
                      { label: '30 Days (1 Mo)', count: 30 }
                    ].map((preset) => (
                      <button
                        key={preset.count}
                        type="button"
                        className={`booking-preset-chip ${days === preset.count ? 'is-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectPreset(preset.count);
                        }}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking.com Interactive Calendar Dropdown Modal */}
                {calendarOpen && (
                  <div className="booking-calendar-popup">
                    <div className="calendar-popup-header">
                      <div className="calendar-instruct-text">
                        {selectingField === 'start' ? (
                          <span>Select your <strong>Pick-up date</strong></span>
                        ) : (
                          <span>Select your <strong>Drop-off date</strong></span>
                        )}
                      </div>

                      <div className="calendar-nav-controls">
                        <button
                          type="button"
                          className="calendar-nav-btn"
                          onClick={handlePrevMonth}
                          aria-label="Previous month"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          className="calendar-nav-btn"
                          onClick={handleNextMonth}
                          aria-label="Next month"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Dual Month Calendar Display */}
                    <div className="calendar-months-grid">
                      {/* Month 1 */}
                      <div className="calendar-month-pane">
                        <h4 className="calendar-month-title">
                          {MONTH_NAMES[viewMonth]} {viewYear}
                        </h4>
                        <div className="calendar-weekdays-row">
                          {WEEKDAY_NAMES.map((wd) => (
                            <span key={wd} className="weekday-col">{wd}</span>
                          ))}
                        </div>
                        <div className="calendar-days-grid">
                          {month1Days.map((dStr, idx) => {
                            if (!dStr) {
                              return <span key={`empty-1-${idx}`} className="calendar-day-empty" />;
                            }
                            const status = getDayStatus(dStr);
                            const dayNum = parseInt(dStr.split('-')[2], 10);
                            return (
                              <button
                                key={dStr}
                                type="button"
                                className={`calendar-day-cell ${status}`}
                                disabled={status === 'disabled'}
                                onClick={() => handleDateClick(dStr)}
                                onMouseEnter={() => selectingField === 'end' && setHoverDate(dStr)}
                                onMouseLeave={() => setHoverDate(null)}
                              >
                                <span>{dayNum}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Month 2 */}
                      <div className="calendar-month-pane month-pane-secondary">
                        <h4 className="calendar-month-title">
                          {MONTH_NAMES[nextMonth]} {nextYear}
                        </h4>
                        <div className="calendar-weekdays-row">
                          {WEEKDAY_NAMES.map((wd) => (
                            <span key={wd} className="weekday-col">{wd}</span>
                          ))}
                        </div>
                        <div className="calendar-days-grid">
                          {month2Days.map((dStr, idx) => {
                            if (!dStr) {
                              return <span key={`empty-2-${idx}`} className="calendar-day-empty" />;
                            }
                            const status = getDayStatus(dStr);
                            const dayNum = parseInt(dStr.split('-')[2], 10);
                            return (
                              <button
                                key={dStr}
                                type="button"
                                className={`calendar-day-cell ${status}`}
                                disabled={status === 'disabled'}
                                onClick={() => handleDateClick(dStr)}
                                onMouseEnter={() => selectingField === 'end' && setHoverDate(dStr)}
                                onMouseLeave={() => setHoverDate(null)}
                              >
                                <span>{dayNum}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Calendar Footer Controls */}
                    <div className="calendar-popup-footer">
                      <div className="calendar-summary-text">
                        <strong>{days} Days selected:</strong> {formatPrettyDate(startDate)} → {endDate ? formatPrettyDate(endDate) : '...'}
                        <span className="calendar-tier-badge">
                          Rate Tier: ${dailyRate}/day
                        </span>
                      </div>
                      <div className="calendar-footer-actions">
                        <button
                          type="button"
                          className="calendar-reset-btn"
                          onClick={handleResetDates}
                        >
                          <RotateCcw size={14} />
                          Reset
                        </button>
                        <button
                          type="button"
                          className="calendar-done-btn"
                          onClick={() => {
                            setCalendarOpen(false);
                            setHoverDate(null);
                          }}
                        >
                          <Check size={16} />
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mandatory Insurance for Tuk-Tuks & Bikes OR $500 Refundable Deposit for Cars */}
              {isCar ? (
                <div className="form-group">
                  <label className="form-label">Vehicle Security Deposit (Mandatory)</label>
                  <div
                    className="mandatory-insurance-card"
                    style={{
                      borderColor: 'rgba(245, 158, 11, 0.45)',
                      background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(255, 251, 235, 0.6) 100%)'
                    }}
                  >
                    <div className="mandatory-left">
                      <div
                        className="mandatory-icon"
                        style={{
                          background: 'rgba(245, 158, 11, 0.15)',
                          color: '#b45309'
                        }}
                      >
                        <ShieldCheck size={22} color="#b45309" />
                      </div>
                      <div>
                        <div className="mandatory-title">
                          <span style={{ color: '#92400e' }}>Refundable Security Deposit</span>
                          <span
                            className="mandatory-badge"
                            style={{
                              background: '#fef3c7',
                              color: '#b45309',
                              borderColor: 'rgba(245, 158, 11, 0.3)'
                            }}
                          >
                            100% Refundable
                          </span>
                        </div>
                        <div className="mandatory-desc" style={{ color: '#78350f' }}>
                          ${depositPerVehicle} security deposit required per vehicle. 100% fully refunded upon safe vehicle return.
                        </div>
                      </div>
                    </div>
                    <div className="mandatory-price" style={{ color: '#b45309' }}>
                      ${depositTotal}
                      <span className="mandatory-price-sub" style={{ color: '#92400e' }}>
                        ${depositPerVehicle} × {vehicleQty} unit{vehicleQty > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label className="form-label">Comprehensive Insurance (Mandatory)</label>
                  <div className="mandatory-insurance-card">
                    <div className="mandatory-left">
                      <div className="mandatory-icon">
                        <ShieldCheck size={22} color="#15803d" />
                      </div>
                      <div>
                        <div className="mandatory-title">
                          <span>Full Comprehensive Insurance</span>
                          <span className="mandatory-badge">Compulsory</span>
                        </div>
                        <div className="mandatory-desc">
                          100% peace of mind island-wide. Zero deposit needed. ($60 per vehicle)
                        </div>
                      </div>
                    </div>
                    <div className="mandatory-price">
                      ${insuranceTotal}
                      <span className="mandatory-price-sub">${insurancePerVehicle} × {vehicleQty} unit{vehicleQty > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Optional Add-ons & Perks Section */}
              <div className="form-group">
                <label className="form-label">Optional Add-ons &amp; Travel Perks (Select with Tick)</label>
                <div className="checkbox-addon-group">
                  {/* Addon 1: AAC License */}
                  <div className={`addon-checkbox-card ${includeLicense ? 'is-selected' : ''}`}>
                    <div className="addon-checkbox-label">
                      <input
                        type="checkbox"
                        id="calc-license-checkbox"
                        className="custom-checkbox"
                        checked={includeLicense}
                        onChange={(e) => handleToggleLicense(e.target.checked)}
                      />
                      <div className="addon-info-col">
                        <label htmlFor="calc-license-checkbox" className="addon-name" style={{ cursor: 'pointer' }}>
                          Sri Lankan AAC Driving License Endorsement
                        </label>
                        <div className="addon-desc">
                          Required legally by Sri Lanka Police. Auto-matched to vehicle count; adjust if you have different driver numbers. ($40 per driver)
                        </div>
                      </div>
                    </div>
                    <div className="addon-action-col">
                      {includeLicense && (
                        <div className="stepper-control license-stepper">
                          <button
                            type="button"
                            className="stepper-btn stepper-btn-sm"
                            aria-label="Decrease driver license count"
                            disabled={licenseCount <= 1}
                            onClick={() => handleLicenseCountChange(-1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="stepper-value">{licenseCount}</span>
                          <button
                            type="button"
                            className="stepper-btn stepper-btn-sm"
                            aria-label="Increase driver license count"
                            disabled={licenseCount >= 20}
                            onClick={() => handleLicenseCountChange(1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                      <span className={`addon-computed-price ${!includeLicense ? 'is-inactive' : ''}`}>
                        {includeLicense ? `+$${licenseTotal}` : `+$${licensePrice}/ea`}
                      </span>
                    </div>
                  </div>

                  {/* Addon 2: Train Transfer */}
                  <div className={`addon-checkbox-card ${includeTrainTransfer ? 'is-selected' : ''}`}>
                    <div className="addon-checkbox-label">
                      <input
                        type="checkbox"
                        id="calc-train-transfer-checkbox"
                        className="custom-checkbox"
                        checked={includeTrainTransfer}
                        onChange={(e) => setIncludeTrainTransfer(e.target.checked)}
                      />
                      <div className="addon-info-col">
                        <label htmlFor="calc-train-transfer-checkbox" className="addon-name" style={{ cursor: 'pointer' }}>
                          {isCar ? 'Train Transport Car Delivery (Kandy to Nuwara Eliya or Ella)' : 'Scenic Train Vehicle Transfer Service'}
                        </label>
                        <div className="addon-desc">
                          {isCar
                            ? 'Ride the scenic mountain train while we deliver your car to Nuwara Eliya or Ella station waiting for you. ($40 per car)'
                            : 'Ride the iconic tea-country train (Kandy → Nuwara Eliya → Ella) while we transport your vehicle to your destination. ($40 per vehicle)'}
                        </div>
                      </div>
                    </div>
                    <div className="addon-action-col">
                      <span className={`addon-computed-price ${!includeTrainTransfer ? 'is-inactive' : ''}`}>
                        {includeTrainTransfer ? `+$${trainTransferTotal}` : `+$${trainTransferPerVehicle * vehicleQty}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Breakdown Summary Box */}
            <div className="calc-summary-box">
              <h3 className="summary-heading">Estimated Cost Breakdown</h3>
              <div className="summary-row">
                <span>{vehicleQty > 1 ? `${vehicleQty}x ` : ''}{vehicle.name}</span>
                <span>${dailyRate} / day {vehicleQty > 1 ? `(${vehicleQty} units)` : ''}</span>
              </div>
              <div className="summary-row">
                <span>Pick-up Date</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  {formatSummaryDate(startDate)}
                </span>
              </div>
              <div className="summary-row">
                <span>Drop-off Date</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  {formatSummaryDate(endDate)}
                </span>
              </div>
              <div className="summary-row">
                <span>Rental Duration</span>
                <span>{days} Day{days > 1 ? 's' : ''}{days > 1 ? ` (${days - 1} Night${days - 1 > 1 ? 's' : ''})` : ''}</span>
              </div>
              {isCar && (
                <div className="summary-row">
                  <span>Included Mileage</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{120 * days} km ({120} km/day)</span>
                </div>
              )}
              <div className="summary-row">
                <span>Vehicle Rental Total</span>
                <span>${baseRentalTotal}</span>
              </div>
              {isCar ? (
                <div className="summary-row">
                  <span>Refundable Deposit ({vehicleQty} {vehicleQty > 1 ? 'units' : 'unit'})</span>
                  <span style={{ fontWeight: 600, color: '#b45309' }}>${depositTotal}</span>
                </div>
              ) : (
                <div className="summary-row">
                  <span>Full Insurance ({vehicleQty} {vehicleQty > 1 ? 'units' : 'unit'})</span>
                  <span>${insuranceTotal}</span>
                </div>
              )}
              {includeLicense && licenseCount > 0 && (
                <div className="summary-row">
                  <span>License Endorsement ({licenseCount} {licenseCount > 1 ? 'drivers' : 'driver'})</span>
                  <span>${licenseTotal}</span>
                </div>
              )}
              {includeTrainTransfer && (
                <div className="summary-row">
                  <span>{isCar ? 'Car Train Delivery (Kandy-Ella)' : 'Train Vehicle Transfer'} ({vehicleQty} {vehicleQty > 1 ? 'units' : 'unit'})</span>
                  <span>${trainTransferTotal}</span>
                </div>
              )}
              <div className="summary-row total-row">
                <span>Total Estimated</span>
                <span className="summary-total-price">${grandTotal}</span>
              </div>

              <div className="calc-actions">
                <button
                  className="btn btn-primary"
                  id="calc-book-package-btn"
                  onClick={() => {
                    if (onBookPackage) {
                      onBookPackage(
                        vehicle,
                        days,
                        grandTotal,
                        vehicleQty,
                        includeLicense ? licenseCount : 0,
                        { start: startDate, end: endDate }
                      );
                    }
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book This Package
                </button>
                <a
                  href={`https://wa.me/94776464346?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="calc-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  Lock Deal on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
