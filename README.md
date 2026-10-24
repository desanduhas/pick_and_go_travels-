# 🌴 Pick & Go Travels — Sri Lanka Vehicle Rental & Tour Platform

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Design](https://img.shields.io/badge/Design-Apple_iOS_Light_Mode-0071E3?style=flat&logo=apple&logoColor=white)](https://apple.com)
[![License](https://img.shields.io/badge/License-Proprietary-orange?style=flat)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel_Ready-black?style=flat&logo=vercel)](https://vercel.com/)

A modern, high-performance web application designed and built for **Pick & Go Travels** — one of Sri Lanka's most trusted Tuk Tuk, motorbike, and private chauffeur rental providers based in Negombo.

---

## ✨ Key Features & Capabilities

### 🛺 1. Self-Drive Tuk Tuk Rental Hub
* **Authentic Adventure:** Bajaj RE 205cc Tuk Tuks equipped with luggage racks, phone holders, USB chargers, and Bluetooth speakers.
* **All-Inclusive Peace of Mind:** Unlimited kilometers, 24/7 island-wide breakdown assistance, free 1-on-1 driving lessons in Negombo, and legal AAC license endorsement assistance.
* **Scenic Train Transfer:** Exclusive Kandy-to-Ella train vehicle luggage transfer service.

### 🚗 2. Dedicated "Rent A Car with Driver" Portal
Full chauffeur-driven touring packages with transparent daily rates:
* **Suzuki Spacia Hybrid / Wagon R:** $49/day (1–14 days) | $44/day (15–30 days) — 3 Passengers + Luggage
* **Honda Shuttle Hybrid Automatic:** $60/day (1–15 days) | $57/day (16–30 days) — 4 Passengers + Large Luggage Boot
* **Toyota Voxy Hybrid Automatic:** $80/day (1–15 days) | $76/day (16–30 days) — 5 Passengers + Luxury MPV
* **Toyota KDH Flat Roof Van:** $87/day (1–14 days) | $82/day (15–30 days) — 5 Passengers + Touring Van
* **100% Inclusions:** Professional English-speaking driver, tour guiding, driver room & meals included, comprehensive insurance, free 130 KM/day (Extra: $0.40/km).
* **Clear Exclusions:** Fuel (Petrol 92/95 paid at official pump rates), highway toll tickets, parking tickets.
* **Interactive Live Distance Estimator:** Real-time calculation of rental days and extra mileage charges.

### 🧮 3. Live Price & Mileage Calculator
* **Accurate Calendar & Logic:** Booking.com-style date selection with correct **Days & Nights calculation** (e.g., 7 Days = 6 Nights).
* **Dynamic Formula:** Calculates vehicle quantities, day-tiered rates, AAC license permits, refundable car deposits, and train delivery options.
* **Instant WhatsApp Link:** One-click booking generator creating pre-formatted, detailed WhatsApp reservation requests directly to Rocky (+94 77 6464 346).

### 🏍️ 4. Diverse Multi-Vehicle Fleet
* **Adventure Motorbikes:** Honda NC 700X, Honda FMX 650, Honda XR Baja 250cc, Bajaj Pulsar 150cc, Bajaj Discover 135cc.
* **Automatic Scooters:** Honda Dio 110cc, TVS Ntorq 125cc.
* **Beach Adventures:** Jaguar 500cc 4x4 Beach Quad ATVs & Kawasaki Bayou.
* **Eco City Rides:** High-quality touring foot bicycles.

### 🗺️ 5. Island Tours & Expeditions
* Guided Tuk Tuk Group Adventures.
* 6-Day, 7-Day, and 12-Day Classic Off-Road Motorcycle Expeditions across Sri Lanka.
* Negombo Day Excursions, Sigiriya & Kandy Cultural Trips, and Tailor-Made Itineraries.

### 🏡 6. Pick & Go Whitehouse Guest Rooms
* Negombo guesthouse showcase featuring Deluxe Double and Triple AC Bedrooms with free luggage storage, 24/7 airport transfers, and vehicle parking.

### 🎨 7. Apple iOS Light Design System
* Frosted glassmorphism (`backdrop-filter: blur(20px)`), curated HSL typography, tactile buttons, responsive navigation bar, and interactive mobile drawer.
* Skeleton Shimmer Screens for seamless zero-layout-shift page transitions.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling** | Vanilla CSS (Apple iOS Light Design System, CSS Variables, Flexbox/Grid) |
| **Typography** | Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) & [Inter](https://fonts.google.com/specimen/Inter)) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **State Management** | Centralized Data Architecture (`src/data/siteData.js`) |
| **Deployment Target** | [Vercel](https://vercel.com/) / Apache (.htaccess provided) |

---

## 📁 Project Directory Structure

```text
pick_and_go_travels/
├── public/
│   ├── images/                # High-res fleet, vans, cars, and brand assets
│   │   ├── honda-shuttle.jpg
│   │   ├── toyota-voxy.jpg
│   │   ├── toyota-kdh.jpg
│   │   └── suzuki-spacia.jpg
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                # Static local media assets
│   ├── components/            # Reusable UI components
│   │   ├── AnnouncementBar.jsx # Top banner with highlighted special offers
│   │   ├── BackgroundSlideshow.jsx # Cinematic ambient background imagery
│   │   ├── BookingContact.jsx  # Interactive reservation & inquiry form
│   │   ├── Calculator.jsx      # Advanced live pricing & calendar engine
│   │   ├── FeatureStrip.jsx    # 4 value proposition pillars
│   │   ├── FleetShowcase.jsx   # Filterable fleet display
│   │   ├── FloatingActions.jsx # WhatsApp quick-action floating widget
│   │   ├── Footer.jsx          # Comprehensive footer with quick links
│   │   ├── Hero.jsx            # Dynamic hero section with action CTAs
│   │   ├── Navbar.jsx          # Frosted desktop header & mobile drawer
│   │   ├── PricingTable.jsx    # Transparent fleet pricing comparison table
│   │   └── SkeletonLoader.jsx  # iOS skeleton shimmer loading states
│   ├── data/
│   │   └── siteData.js        # Centralized data store (Fleet, Tours, Driver Cars, FAQs)
│   ├── pages/                 # Full application page views
│   │   ├── AboutPage.jsx       # About Rocky, company story & verified reviews
│   │   ├── CarWithDriverPage.jsx # Dedicated Rent A Car with Driver portal
│   │   ├── ContactPage.jsx     # Booking form and Negombo location map
│   │   ├── HomePage.jsx        # Landing page with spotlights & services
│   │   ├── PricingPage.jsx     # Live calculator and fleet rate cards
│   │   ├── RentalsPage.jsx     # All vehicles with category filter tabs
│   │   ├── StayPage.jsx        # Pick & Go Whitehouse room options
│   │   ├── ToursPage.jsx       # Island expeditions and day trips
│   │   └── TuktukPage.jsx      # Dedicated Self-Drive Tuk Tuk hub
│   ├── App.jsx                # Central router, state coordinator, and scroll reveals
│   ├── index.css              # Apple iOS Light design system & styles
│   └── main.jsx               # React DOM entry point
├── package.json
├── vercel.json                # SPA rewrite routing for Vercel deployment
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (Version 18.0 or higher recommended)
* [npm](https://www.npmjs.com/) (bundled with Node) or `yarn` / `pnpm`

### 1. Clone the Repository
```bash
git clone https://github.com/desanduhas/pick_and_go_travels-.git
cd pick_and_go_travels-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:5173/`.

### 4. Build for Production
To generate a production-ready optimized build:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Configuration

* **Vercel:** Configured via `vercel.json` with single-page application (SPA) client-side rewrite rules.
* **Apache:** Configured via `public/.htaccess` with mod_rewrite rules for seamless hash and URL navigation.

---

## 📞 Business Contact & Information

* **Company:** Pick & Go Travels
* **Founder:** S.H.H. Miral (Rocky)
* **Location:** No 79, St. Joseph Street, Ettukala, Negombo, Sri Lanka (15 mins from CMB Airport)
* **Phone / WhatsApp:** +94 77 6464 346 / +94 77 1730 095
* **Email:** info@pickandgotravels.com

---

## 👨‍💻 Developer & Design Credit

* **Redesigned & Developed by:** [**Amluvo Dev**](https://amluvodev.vercel.app/)
* **Project Type:** Custom Tourism & Fleet Rental Web Application
* **Year:** 2026
