import React, { useState, useEffect, useRef } from 'react';

export const BACKGROUND_MOMENTS = [
  {
    id: 1,
    url: '/images/background/moment-01.jpg',
    title: 'Negombo HQ Handover',
    desc: 'Thumbs up for an epic self-drive tuk-tuk journey',
    category: 'Tuk-Tuk Rental',
    badge: 'Self-Drive Tuk Tuk'
  },
  {
    id: 2,
    url: '/images/background/moment-02.jpg',
    title: 'Bajaj RE Departure',
    desc: 'Ready to hit the coastal roads and misty tea hills',
    category: 'Tuk-Tuk Rental',
    badge: 'Negombo Beach HQ'
  },
  {
    id: 3,
    url: '/images/background/moment-03.jpg',
    title: 'Backpacker Explorer Squad',
    desc: 'Big smiles and ready backpacks with Rocky at depot',
    category: 'Group Tour',
    badge: 'Group Convoy'
  },
  {
    id: 4,
    url: '/images/background/moment-04.jpg',
    title: 'Twin Tuk-Tuk Convoy',
    desc: 'Adventure friends celebrating atop red Pick & Go tuk-tuks',
    category: 'Tuk-Tuk Rental',
    badge: 'Convoy Freedom'
  },
  {
    id: 5,
    url: '/images/background/moment-05.jpg',
    title: 'Motorbike Tour Kickoff',
    desc: 'Helmets on, engines warm, ready for island trails',
    category: 'Motorbike Tour',
    badge: 'Dual-Sport Trail'
  },
  {
    id: 6,
    url: '/images/background/moment-06.jpg',
    title: 'Pick & Go Custom Tuk-Tuk',
    desc: 'Roadside pitstop along scenic tropical highway',
    category: 'Tuk-Tuk Rental',
    badge: 'Coastal Route'
  },
  {
    id: 7,
    url: '/images/background/moment-07.jpg',
    title: 'Ella Gap Panorama',
    desc: 'Exploring lush green mountains in the central highlands',
    category: 'Highland Tour',
    badge: 'Ella Highlands'
  },
  {
    id: 8,
    url: '/images/background/moment-08.jpg',
    title: 'Ancient Stupa Expedition',
    desc: 'Off-road motorcycle riders before historic UNESCO heritage',
    category: 'Off-Road Tour',
    badge: 'UNESCO Heritage'
  },
  {
    id: 9,
    url: '/images/background/moment-09.jpg',
    title: 'Wild Village Trail',
    desc: 'Rugged Honda dual-sport adventure bikes in rural trail',
    category: 'Off-Road Tour',
    badge: 'Wilderness Pass'
  },
  {
    id: 10,
    url: '/images/background/moment-10.jpg',
    title: 'Chauffeured Car Service',
    desc: 'Safe, air-conditioned vehicle handover with driver',
    category: 'Car with Driver',
    badge: 'Private Chauffeur'
  },
  {
    id: 11,
    url: '/images/background/moment-11.jpg',
    title: 'Pick & Go Flag of Freedom',
    desc: 'Travelers celebrating memories made across Sri Lanka',
    category: 'Customer Moments',
    badge: '5-Star Experience'
  }
];

export default function BackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto advance every 6.5 seconds seamlessly in the background
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUND_MOMENTS.length);
    }, 6500);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div
      className="bg-slideshow-canvas wash-balanced"
      aria-hidden="true"
      role="presentation"
    >
      {BACKGROUND_MOMENTS.map((item, idx) => (
        <div
          key={item.id}
          className={`bg-slide-item ${idx === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url('${item.url}')` }}
        />
      ))}

      {/* White Frosted Glass Veil: Balances Bright White iOS Design with Photo Visibility */}
      <div className="bg-slideshow-veil" />

      {/* Atmospheric Ambient Mesh for Apple iOS Lighting */}
      <div className="bg-slideshow-ambient-mesh" />
    </div>
  );
}

