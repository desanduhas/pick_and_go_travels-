// Pick & Go Travels - Complete Centralized Data Store for React

export const SITE_DATA = {
  company: {
    name: 'Pick & Go Travels',
    founder: 'S.H.H. Miral (Rocky)',
    foundedLocation: 'Negombo, Sri Lanka',
    tagline: 'Drive | Discover | Delight',
    headline: 'Rent a Tuk Tuk in Sri Lanka & Explore Without Limits',
    phone1: '+94 77 6464 346',
    phone2: '+94 77 1730 095',
    whatsapp: '+94776464346',
    whatsapp2: '+94771730095',
    email: 'info@pickandgotravels.com',
    address: 'No 79, St. Joseph Street, Ettukala, Negombo, Sri Lanka',
    googleMapsUrl: 'https://maps.google.com/?q=No+79,+St.+Joseph+Street,+Ettukala,+Negombo,+Sri+Lanka',
    logoTransparent: 'https://pickandgotravels.com/wp-content/uploads/2024/05/Logo-T.png',
    logoDark: '/images/logo-d.png',
    favicon: 'https://pickandgotravels.com/wp-content/uploads/2024/05/Icon-N-150x150.png',
    social: {
      facebook: 'https://www.facebook.com/share/19i4r9RzSu/?mibextid=wwXIfr',
      instagram: 'https://instagram.com/pickandgotravels',
      whatsapp: 'https://wa.me/94776464346'
    },
    paymentMethods: {
      accepted: 'Cash (USD, EUR, GBP, LKR) & Card Payments',
      visaNotice: 'Visa acceptable (+3.5% additional charge for Central Bank)',
      note: 'We accept Cash in USD, EUR, GBP, LKR and Card payments. Visa acceptable (+3.5% additional charge for Central Bank).'
    }
  },

  fleet: [
    {
      id: 'tuktuk-bajaj',
      category: 'tuktuk',
      name: 'Bajaj RE 205cc Tuk Tuk',
      tagline: 'The Ultimate Sri Lankan Adventure Vehicle',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/IMG_20230603_141753_464.jpg',
      secondaryImages: [
        'https://pickandgotravels.com/wp-content/uploads/2024/05/Explore-the-beauties-of-nature-with-your-own-TukTuk.jpg',
        'https://pickandgotravels.com/wp-content/uploads/2024/05/353022591_834461294772320_92441791089817420_n.jpg',
        'https://pickandgotravels.com/wp-content/uploads/2024/05/352202573_935272894428472_4680789400746242356_n.jpg'
      ],
      engine: '205cc 4-Stroke Petrol Engine',
      transmission: '4-Speed Manual with Reverse Gear',
      capacity: '3 Passengers + Driver (or 2 + Luggage)',
      luggage: 'Spacious Rear Luggage Rack & Lockable Box',
      fuelEconomy: '30-35 km/l (Extremely Economical)',
      prices: [
        { range: '01 - 10 Days', price: '$16', period: 'per day', note: 'Best for short island sprints' },
        { range: '11 - 21 Days', price: '$15', period: 'per day', note: 'Popular for 2-week vacations' },
        { range: '22 - 30 Days', price: '$14', period: 'per day', note: 'Maximum savings for full island circuit' }
      ],
      addons: [
        { name: 'Sri Lankan Local Driving License Endorsement', price: '$40', note: 'Compulsory legally. We handle all paperwork with AAC prior to your arrival.' },
        { name: 'Comprehensive Full Insurance Coverage', price: '$60', note: 'Zero-worry coverage across Sri Lanka.' },
        { name: 'Scenic Train Vehicle Transfer Service', price: '$40', note: 'Ride the scenic train (Kandy → Nuwara Eliya → Ella) while we transport your vehicle and luggage to your destination.' }
      ],
      features: [
        'Unlimited Kilometers (No mileage caps)',
        'Free Driving Training & Orientation Session in Negombo',
        '24/7 Breakdown & Roadside Assistance across Sri Lanka',
        'Phone Holder & USB Fast Charger installed',
        'Bluetooth Music Speaker for your road trip playlist',
        'Spare wheel, Jack, and complete roadside Tool Kit',
        'Free Airport Pickup / Dropoff coordination near CMB',
        'Kandy-to-Ella Scenic Train Vehicle Transfer Service Available'
      ],
      description: 'Rent a tuk tuk in Sri Lanka and discover the island like a true adventurer. With your own self-drive tuk tuk, you can explore beaches, misty mountains, tea plantations, waterfalls, wildlife parks, and historic kingdoms at your own pace.'
    },
    {
      id: 'moto-honda-nc700x',
      category: 'motorbike',
      name: 'Honda NC 700X',
      tagline: 'High Performance Dual-Sport Touring Bike',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/HONDA-NC-700X.jpg',
      engine: '670cc Parallel-Twin Liquid-Cooled',
      transmission: '6-Speed Manual',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$40', period: 'per day' },
        { range: '11 - 21 Days', price: '$35', period: 'per day' },
        { range: '22 - 30 Days', price: '$32', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Unlimited KMs', 'Touring Windscreen', 'Front Trunk Storage', 'Free Helmets & Tool Kit', '24/7 Roadside Support']
    },
    {
      id: 'moto-honda-fmx650',
      category: 'motorbike',
      name: 'Honda FMX 650',
      tagline: 'Agile Funmoto Dual-Sport Machine',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/HONDA-FMX-650.jpg',
      engine: '644cc RFVC Single Cylinder',
      transmission: '5-Speed Manual',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$25', period: 'per day' },
        { range: '11 - 21 Days', price: '$22', period: 'per day' },
        { range: '22 - 30 Days', price: '$20', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Unlimited KMs', 'Supermoto Handling', 'Rugged Hill Country Cruiser', 'Free Helmets & Tool Kit']
    },
    {
      id: 'moto-honda-xr-baja',
      category: 'motorbike',
      name: 'Honda XR Baja 250cc',
      tagline: 'The Legendary Sri Lanka Off-Road Explorer',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/HONDA-XR-BAJA-250CC.jpg',
      engine: '249cc DOHC Air-Cooled with Twin Headlights',
      transmission: '6-Speed Manual',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$22', period: 'per day' },
        { range: '11 - 21 Days', price: '$20', period: 'per day' },
        { range: '22 - 30 Days', price: '$18', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Twin Baja Rally Lights', 'Long-Travel Suspension', 'Ideal for Dirt Roads & Trails', 'Free Helmets & Tool Kit']
    },
    {
      id: 'moto-pulsar-150',
      category: 'motorbike',
      name: 'Bajaj Pulsar 150cc',
      tagline: 'Reliable & Economical Street Cruiser',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/BAJAJ-PULSAR-150CC.jpg',
      engine: '149.5cc DTS-i Engine',
      transmission: '5-Speed Manual',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$12', period: 'per day' },
        { range: '11 - 21 Days', price: '$10', period: 'per day' },
        { range: '22 - 30 Days', price: '$09', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Great Fuel Mileage (45+ km/l)', 'Comfortable Upright Seating', 'Front Disc Brake', 'Free Helmets']
    },
    {
      id: 'moto-discover-135',
      category: 'motorbike',
      name: 'Bajaj Discover 135cc',
      tagline: 'Budget-Friendly City & Highway Commuter',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/BAJAJ-DISCOVER-135CC.jpg',
      engine: '134.2cc 4-Stroke Engine',
      transmission: '4-Speed Manual',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$10', period: 'per day' },
        { range: '11 - 21 Days', price: '$09', period: 'per day' },
        { range: '22 - 30 Days', price: '$08', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Superb Fuel Economy', 'Lightweight & Easy to Handle', 'Free Helmets & Tool Kit']
    },
    {
      id: 'scooter-tvs-ntorq',
      category: 'scooter',
      name: 'TVS Ntorq 125cc Scooter',
      tagline: 'Sporty Automatic Scooter with Power & Tech',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/TVS-NTORQ-125CC.jpg',
      engine: '124.8cc 3-Valve CVTi Automatic',
      transmission: 'Fully Automatic (Twist & Go)',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$10', period: 'per day' },
        { range: '11 - 21 Days', price: '$09', period: 'per day' },
        { range: '22 - 30 Days', price: '$08', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Under-seat Storage + USB Charger', 'Digital Display', 'Effortless Automatic Riding', 'Free Helmets']
    },
    {
      id: 'scooter-honda-dio',
      category: 'scooter',
      name: 'Honda Dio 110cc Scooter',
      tagline: 'Sri Lanka’s Most Popular Tourist Scooter',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/HONDA-DIO-110CC.jpg',
      engine: '109.5cc HET Automatic Engine',
      transmission: 'Fully Automatic',
      capacity: '2 Riders',
      prices: [
        { range: '01 - 10 Days', price: '$09', period: 'per day' },
        { range: '11 - 21 Days', price: '$08', period: 'per day' },
        { range: '22 - 30 Days', price: '$07', period: 'per day' }
      ],
      addons: [
        { name: 'Sri Lankan Driving License Endorsement', price: '$40' },
        { name: 'Full Insurance', price: '$60' }
      ],
      features: ['Light & Easy to Ride', 'Spacious Footboard', 'Great for Beach Hopping', 'Free Helmets']
    },
    {
      id: 'car-suzuki-wagon-r',
      category: 'car-with-driver',
      name: 'Suzuki Wagon R Automatic',
      tagline: 'Modern Fuel-Efficient Automatic Car (120 km/day Included)',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/SUZUKI-WAGON-R.jpg',
      transmission: 'Fully Automatic',
      capacity: '4 Passengers + Luggage',
      mileage: '120 km / day included',
      extraCharge: '$0.35 (35¢) per additional km',
      deposit: '$500 Refundable Security Deposit',
      depositAmount: 500,
      features: [
        '120 km/Day Included (Extra $0.35/km)',
        'Fully Automatic Transmission & Dual Air-Con',
        'Sri Lanka AAC Local License Permit Available ($40)',
        'Train Transport Car Delivery (Kandy to Nuwara Eliya or Ella) $40',
        '$500 Refundable Security Deposit',
        '24/7 Island-Wide Breakdown Assistance'
      ],
      prices: [
        { range: '01 - 10 Days', price: '$30', period: 'per day' },
        { range: '11 - 22 Days', price: '$28', period: 'per day' },
        { range: '22 - 30 Days', price: '$26', period: 'per day' }
      ]
    },
    {
      id: 'car-suzuki-spacia',
      category: 'car-with-driver',
      name: 'Suzuki Spacia Automatic',
      tagline: 'Spacious Tall-Boy Automatic Mini-MPV with Dual Sliding Doors',
      image: '/images/suzuki-spacia.jpg',
      transmission: 'Fully Automatic',
      capacity: '4 Passengers + Ample Luggage',
      mileage: '120 km / day included',
      extraCharge: '$0.35 (35¢) per additional km',
      deposit: '$500 Refundable Security Deposit',
      depositAmount: 500,
      features: [
        '120 km/Day Included (Extra $0.35/km)',
        'Fully Automatic Transmission & Dual Sliding Doors',
        'Spacious High-Roof Cabin & Premium Dual Air-Con',
        'Sri Lanka AAC Local License Permit Available ($40)',
        'Train Transport Car Delivery (Kandy to Nuwara Eliya or Ella) $40',
        '$500 Refundable Security Deposit',
        '24/7 Island-Wide Breakdown Assistance'
      ],
      prices: [
        { range: '01 - 10 Days', price: '$30', period: 'per day' },
        { range: '11 - 22 Days', price: '$28', period: 'per day' },
        { range: '22 - 30 Days', price: '$26', period: 'per day' }
      ]
    },
    {
      id: 'car-toyota-kdh',
      category: 'car-with-driver',
      name: 'Toyota KDH Automatic',
      tagline: 'Luxury High-Roof Automatic Touring Van (120 km/day Included)',
      image: '/images/toyota-kdh.jpg',
      transmission: 'Fully Automatic',
      capacity: '9 - 14 Passengers + Luggage',
      mileage: '120 km / day included',
      extraCharge: '$0.35 (35¢) per additional km',
      deposit: '$700 Refundable Security Deposit',
      depositAmount: 700,
      features: [
        '120 km/Day Included (Extra $0.35/km)',
        'Fully Automatic Transmission & Dual Line Air-Con',
        'Spacious High-Roof Luxury Passenger Cabin',
        'Sri Lanka AAC Local License Permit Available ($40)',
        'Train Transport Car Delivery (Kandy to Nuwara Eliya or Ella) $40',
        '$700 Refundable Security Deposit',
        '24/7 Island-Wide Breakdown Assistance'
      ],
      prices: [
        { range: '01 - 10 Days', price: '$60', period: 'per day' },
        { range: '11 - 22 Days', price: '$56', period: 'per day' },
        { range: '22 - 30 Days', price: '$52', period: 'per day' }
      ]
    },
    {
      id: 'bicycle-touring',
      category: 'bicycle',
      name: 'Quality Foot-Bicycles (City & Coastal)',
      tagline: 'Eco-Friendly, Peaceful Negombo Exploration',
      image: 'https://pickandgotravels.com/wp-content/uploads/2024/05/bicycle-06.jpg',
      secondaryImages: [
        'https://pickandgotravels.com/wp-content/uploads/2024/05/bicycle-08.2.jpg',
        'https://pickandgotravels.com/wp-content/uploads/2024/05/bicycle-01.jpg',
        'https://pickandgotravels.com/wp-content/uploads/2024/05/bicycle-02.jpg'
      ],
      prices: [
        { range: '01 - 10 Days', price: '$10', period: 'per day' },
        { range: '11 - 21 Days', price: '$08', period: 'per day' },
        { range: '22 - 30 Days', price: '$07', period: 'per day' }
      ],
      addons: [{ name: 'Full Insurance', price: '$30' }],
      features: ['Free Helmet & Tool Kit', 'Lock & Cable Included', 'Comfortable Saddle & Multi-Gears', 'No Hidden Fees']
    }
  ],

  tours: [
    {
      id: 'tour-12-day-classic',
      category: 'motorcycle-tour',
      badge: 'Flagship Adventure',
      title: '12-Day Off Road Classic Motorcycle Tour',
      duration: '12 Days / 11 Nights',
      route: 'Negombo → Anuradhapura → Wilpattu → Habarana → Sigiriya → Polonnaruwa → Trincomalee → Kandy → Mahiyanganaya → Nuwara Eliya → Ella → Yala → Mirissa → Bentota → Negombo',
      overview: 'The Off Road Classic Tour is an exciting 12 day Sri Lanka motorcycle tour created for riders who want to explore the island through adventure and discovery. This off-road motorbike journey takes you across ancient cities, wildlife parks, coastal towns, and scenic mountain roads while experiencing the true beauty of Sri Lanka.',
      itinerary: [
        { day: 'Day 01', title: 'Negombo – Anuradhapura', desc: 'Begin in coastal Negombo, riding north toward ancient Anuradhapura. Stop at Negombo Fish Market, Lagoon, and visit sacred Sri Maha Bodhi tree.' },
        { day: 'Day 02', title: 'Anuradhapura – Wilpattu – Habarana', desc: 'Ride along the borders of Wilpattu National Park and onward to the tranquil lakes and lush forests of Habarana.' },
        { day: 'Day 03', title: 'Sigiriya – Dambulla', desc: 'Climb the world-famous Sigiriya Rock Fortress (Lion Rock) and explore the ancient golden cave temple of Dambulla.' },
        { day: 'Day 04', title: 'Polonnaruwa Ancient Kingdom', desc: 'Ride through historic ruins, stone carvings, and serene reservoirs of Sri Lanka’s second ancient capital.' },
        { day: 'Day 05', title: 'Trincomalee & Nilaveli Beach', desc: 'Ride to the eastern coastline to enjoy the pristine white sand beaches of Nilaveli, Koneswaram Temple, and natural hot springs.' },
        { day: 'Day 06', title: 'Pinnawala – Kandy', desc: 'Ride inland to the Pinnawala Elephant Orphanage, then wind up into the sacred hills of Kandy, home of the Temple of the Sacred Tooth Relic.' },
        { day: 'Day 07', title: 'Mahiyanganaya & Sorabora Wewa', desc: 'Exhilarating descent through the famous 18-Hairpin Bends (Hasalaka) to the historic indigenous Vedda country and Sorabora reservoir.' },
        { day: 'Day 08', title: 'Nuwara Eliya (Tea Country)', desc: 'Climb high into the mist-covered Central Highlands, past Ramboda Falls and rolling emerald tea plantations in Little England.' },
        { day: 'Day 09', title: 'Ella Mountain Wonderland', desc: 'Spectacular mountain passes toward Ella. Visit the iconic Nine Arch Bridge, Little Adam’s Peak, and Ravana Falls.' },
        { day: 'Day 10', title: 'Yala National Park Safari', desc: 'Descend to the dry zone scrublands for an afternoon wildlife safari in search of leopards, wild elephants, and sloth bears.' },
        { day: 'Day 11', title: 'Mirissa & Southern Coast', desc: 'Ride along the southern shoreline to Mirissa. Relax on tropical beaches and enjoy fresh seafood and coastal sunsets.' },
        { day: 'Day 12', title: 'Galle Fort – Bentota – Negombo', desc: 'Explore UNESCO-listed Galle Dutch Fort, ride along the coastal road through Bentota, and return triumphantly to Negombo.' }
      ]
    },
    {
      id: 'tour-07-day-classic',
      category: 'motorcycle-tour',
      badge: 'Popular Route',
      title: '07-Day Off Road Classic Motorcycle Tour',
      duration: '07 Days / 06 Nights',
      route: 'Negombo → Ratnapura → Galle & Unawatuna → Tissamaharama (Yala) → Ella → Nuwara Eliya → Adam’s Peak → Kitulgala → Kandy → Negombo',
      overview: 'A 7 day Sri Lanka motorcycle tour is one of the most exciting ways to explore the island’s diverse landscapes. This off road adventure combines culture, nature, and scenic riding routes across southern beaches, national parks, and misty mountain passes.',
      itinerary: [
        { day: 'Day 01', title: 'Negombo, Rathnapura, Galle & Unawatuna', desc: 'Ride south through Rathnapura (the famous Gem City) and reach the historic colonial ramparts of Galle Fort and Unawatuna beach.' },
        { day: 'Day 02', title: 'Tissamaharama & Yala Safari', desc: 'Ride along coastal plains to historic Tissamaharama, Gateway to Yala National Park.' },
        { day: 'Day 03', title: 'Yala – Buttala – Ella', desc: 'Thrilling mountain ascent through scenic twisty roads of Buttala to Ella mountain village.' },
        { day: 'Day 04', title: 'Monaragala – Nuwara Eliya', desc: 'Ascend to high altitude through cascading waterfalls, tea factories, and cool mountain air.' },
        { day: 'Day 05', title: 'Adam’s Peak (Sri Pada)', desc: 'Ride into the mystical peak wilderness sanctuary of Adam’s Peak surrounded by rainforest mountains.' },
        { day: 'Day 06', title: 'Kitulgala – Kandy', desc: 'White water rafting thrills on the Kelani River in Kitulgala, then ride to the cultural capital of Kandy.' },
        { day: 'Day 07', title: 'Kandy to Negombo', desc: 'Visit Kandy Temple of the Tooth and ride back across rubber and coconut estates to Negombo.' }
      ]
    },
    {
      id: 'tour-06-day-classic',
      category: 'motorcycle-tour',
      badge: 'North-Central Explorer',
      title: '06-Day Off Road Classic Motorcycle Tour',
      duration: '06 Days / 05 Nights',
      route: 'Negombo → Mahiyanganaya → Polonnaruwa & Minneriya → Sigiriya & Dambulla → Anuradhapura → Rajanganaya & Kalpitiya → Negombo',
      overview: 'Designed for riders who want to experience the island beyond the typical tourist routes. Takes you through ancient kingdoms, wildlife national parks, coastal lagoons, and countryside gravel tracks.',
      itinerary: [
        { day: 'Day 01', title: 'Negombo to Mahiyanganaya', desc: 'Ride inland across rural landscapes toward the lush valley of Mahiyanganaya.' },
        { day: 'Day 02', title: 'Polonnaruwa & Minneriya National Park', desc: 'Ancient stone city ruins and an afternoon elephant gathering safari.' },
        { day: 'Day 03', title: 'Sigiriya & Dambulla', desc: 'The 8th Wonder of the World Sigiriya Rock Fortress and the Cave Temples of Dambulla.' },
        { day: 'Day 04', title: 'Anuradhapura', desc: 'Explore the grand stupas and sacred shrines of Sri Lanka’s greatest ancient capital.' },
        { day: 'Day 05', title: 'Rajanganaya - Kalpitiya', desc: 'Scenic rural riding toward the sandy peninsula of Kalpitiya, famed for kite surfing and marine lagoons.' },
        { day: 'Day 06', title: 'Kalpitiya – Negombo', desc: 'Coastal ride past salt pans and fishing harbors returning to Negombo.' }
      ]
    },
    {
      id: 'tour-tuktuk-group',
      category: 'group-tour',
      badge: 'Popular Group Adventure',
      title: 'Sri Lanka Tuk Tuk Group Tour Adventure',
      image: '/images/background/moment-04.jpg',
      duration: '07 to 14 Days (Standard & Premium)',
      pricing: 'Starts at $20 / day per person',
      route: 'Negombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Negombo (Customizable Route)',
      overview: 'Experience an unforgettable Sri Lanka tuk tuk group tour and explore the island with friends or fellow travelers. This exciting adventure combines scenic drives, cultural landmarks, lush mountains, and beaches while following a carefully planned Sri Lanka tuk tuk itinerary. Available in 10-12 person Standard convoys and 20-22 person Premium tours with dedicated luggage backup vans, mobile mechanics, and free adventure activities.',
      features: [
        'Fleet of Reliable Bajaj RE 205cc Tuk Tuks',
        'Starts at $20 Per Day Per Person',
        'Dedicated Backup Support Van with Driver for Luggage (Included in Premium)',
        'Full-Time Road Assistant & Accompanying Mechanic',
        'Scenic Train Transport Service Kandy to Ella',
        'Valid Sri Lankan AAC Driving Licenses Arranged',
        'VIP Full Comprehensive Insurance (Zero Stress)',
        'Free 1-on-1 Driving Lesson in Negombo',
        'Free Activities: Lagoon Boat Trip, Countryside Cycling & Adventure Folk Games'
      ]
    },
    {
      id: 'tour-cultural-8day',
      category: 'exploration-tour',
      badge: 'UNESCO Heritage',
      title: '8-Day Sri Lanka Cultural Heritage Tour',
      duration: '8 Days / 7 Nights',
      route: 'Negombo → Pinnawala → Dambulla → Anuradhapura → Sigiriya → Polonnaruwa → Kandy → Nuwara Eliya → Horton Plains → Galle → Negombo',
      overview: 'Explore the island’s ancient heritage, sacred temples, and historic royal capitals. Discover Sigiriya, Anuradhapura, Polonnaruwa, Kandy, Nuwara Eliya, Yala, and the southern coast with local storytelling guides.'
    },
    {
      id: 'tour-deep-explore-14day',
      category: 'exploration-tour',
      badge: 'Complete Expedition',
      title: '14-Day Deep Explore Sri Lanka by Tuk Tuk',
      duration: '14 Days / 13 Nights',
      route: 'Negombo → Yapahuwa → Sigiriya → Polonnaruwa → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Bentota → Negombo',
      overview: 'The most comprehensive self-drive Tuk Tuk adventure in Sri Lanka. 14 days of pure island exploration through ancient rock fortresses, misty cloud forests, wild elephant corridors, and golden southern beaches.'
    },
    {
      id: 'tour-nature-wildlife',
      category: 'exploration-tour',
      badge: 'Biodiversity Trek',
      title: 'Sri Lanka Nature & Eco Tour',
      duration: '7 Days / 6 Nights',
      route: 'Pinnawala → Kandalama & Sigiriya → Matale Spice Country → Knuckles Mountain Range → Nuwara Eliya → Horton Plains (World’s End) → Udawalawe Safari',
      overview: 'Trek through pristine UNESCO cloud forests in Knuckles, stand at the cliff edge of World’s End, and observe herds of wild elephants in their natural habitats.'
    },
    {
      id: 'tour-beach-sports-3day',
      category: 'exploration-tour',
      badge: 'Coastal Thrills',
      title: '3-Day Beach Nature & Watersports Tour',
      duration: '3 Days / 2 Nights',
      route: 'Negombo → Bentota Watersports → Kosgoda Turtle Conservation → Unawatuna Beach → Galle Dutch Fort',
      overview: 'Jet skiing, speed boat safaris on Madu River, sea turtle hatching, surfing at Unawatuna, and historic evening walks through Galle Fort ramparts.'
    },
    {
      id: 'tour-day-trips',
      category: 'day-tour',
      badge: 'Day Excursions',
      title: 'Popular Sri Lanka Day Tours from Negombo',
      overview: 'Perfect for travelers with limited time or before/after flights. Comfortable private air-conditioned vehicle or self-drive options with experienced guides.',
      dayTrips: [
        { name: 'Sigiriya Rock Fortress & Dambulla Cave Temple', desc: 'Climb the 8th Wonder of the World and explore ancient Buddhist mural caves.' },
        { name: 'Elephant Orphanage & Kandy Sacred City', desc: 'Watch elephants bathe in the river and visit the Temple of the Sacred Tooth Relic.' },
        { name: 'Galle Fort, Turtle Hatchery & Hikkaduwa Beach', desc: 'Colonial Dutch ramparts, sea turtle rehabilitation, and glass-bottom boat coral viewing.' },
        { name: 'Wilpattu National Park Wildlife Jeep Safari', desc: 'Sri Lanka’s largest national park with leopards, bears, and natural water basins (villus).' },
        { name: 'Kitulgala White Water Rafting & Rainforest Adventure', desc: 'Grade 3 & 4 rapids on Kelani River, waterfall abseiling, and jungle canyoning.' },
        { name: 'Negombo Canal, Lagoon & Fish Market Tour', desc: 'Hamilton Dutch canal boat cruise, bustling Lellama fish market, and lagoon bird watching.' },
        { name: 'Colombo Highlights & Shopping City Tour', desc: 'Lotus Tower, Gangaramaya Temple, Independence Square, and Pettah bazaar.' }
      ]
    },
    {
      id: 'tour-tailor-made',
      category: 'custom-tour',
      badge: 'Personalized',
      title: 'Tailor-Made Custom Sri Lanka Tours',
      overview: 'Create your own dream vacation. Tell us where you want to go, your preferred vehicle (Tuk Tuk, Motorbike, or Car with Driver), and our travel experts will build a customized day-by-day itinerary with hotels, permits, and experiences.'
    }
  ],

  tuktukGroupTour: {
    badge: 'Popular Group Adventure',
    title: 'Sri Lanka Tuk Tuk Group Tour Adventure',
    subtitle: '7–14 Day Sri Lanka Tuk Tuk Group Tour | Ultimate Tuk Tuk Road Trip Sri Lanka',
    image: '/images/background/moment-04.jpg',
    secondaryImages: [
      '/images/background/moment-04.jpg',
      '/images/background/moment-03.jpg',
      '/images/background/moment-01.jpg',
      '/images/toyota-kdh.jpg'
    ],
    startingPrice: '$20',
    pricePeriod: 'per day / person',
    tagline: 'Explore paradise behind the wheel of your own Tuk Tuk with your friends, backed by a dedicated support van and expert team.',
    overview: 'Experience an unforgettable Sri Lanka tuk tuk group tour and explore the island with friends or fellow travelers. This exciting adventure combines scenic drives, cultural sites, wildlife parks, and breathtaking landscapes while following a carefully planned Sri Lanka tuk tuk itinerary. Travel more while spending less with our flexible durations and group-friendly pricing, backed by full nationwide road support and luggage transfers.',
    whyChoose: [
      { iconKey: 'price', title: 'Starts at $20 / Day', desc: 'Our group packages start at just $20 per day per person with unmatched inclusions.' },
      { iconKey: 'airport', title: 'Airport Pickup Service', desc: 'Complimentary on-arrival greeting and pickup service directly from CMB Bandaranaike International Airport.' },
      { iconKey: 'mechanic', title: '24/7 Breakdown Assistant', desc: 'Nationwide roadside mechanic network and rapid breakdown recovery anywhere on the island.' },
      { iconKey: 'tuktuk', title: 'Reliable Modern Tuk Tuks', desc: 'Top-tier, regularly inspected and fully serviced Bajaj RE 205cc three-wheelers.' },
      { iconKey: 'permit', title: 'Valid Sri Lankan Permits', desc: 'Official Automobile Association of Ceylon (AAC) driving licenses arranged in advance for all drivers.' },
      { iconKey: 'insurance', title: 'VIP Comprehensive Insurance', desc: 'Full collision damage waiver and third-party protection included with zero stress.' },
      { iconKey: 'train', title: 'Kandy to Ella Train Transit', desc: 'Ride the world’s most scenic blue train while our drivers safely transport your tuk-tuks over the mountain pass.' },
      { iconKey: 'usb', title: 'Chargers, USB & Speakers', desc: 'Equipped with dual USB fast chargers, phone mounts, and portable Bluetooth speakers for your tunes.' },
      { iconKey: 'fast', title: 'Easy & Fast Booking', desc: 'Instant WhatsApp communication with owner Rocky, clear upfront pricing, and zero hidden costs.' },
      { iconKey: 'discount', title: 'Attractive Group Discounts', desc: 'Special discounted group tiers for large squads of 10 to 22+ people.' }
    ],
    standardPackages: {
      title: 'Standard Group Tour Packages',
      groupSize: '10 - 12 Persons (5 - 6 Tuk Tuks)',
      badge: '10 - 12 Persons',
      rateNotice: 'From $20 / day per person',
      description: 'Ideal for medium-sized groups of friends or families traveling together in a fun tuk-tuk convoy.',
      inclusions: [
        '10 - 12 Persons (5 - 6 Tuk Tuks)',
        '24/7 Breakdown Road Assistant & Mechanic Support',
        'Train Transit Service - Kandy To Ella',
        'Sri Lankan Driving Licenses (AAC endorsed) for all drivers',
        'VIP Full Comprehensive Insurance',
        'Free 1-on-1 Driving Training Session in Negombo',
        'Spare Tire, Emergency Toolkit & Phone Mounts',
        'No Any Hidden Fees'
      ],
      durations: [
        { days: '07 DAYS', pricePerPerson: '$140', perDay: '$20/day', popular: true, desc: 'Negombo, Sigiriya, Kandy, Nuwara Eliya & Ella' },
        { days: '08 DAYS', pricePerPerson: '$160', perDay: '$20/day', popular: false, desc: 'Central Highlands, Tea Country & Southern Coast' },
        { days: '10 DAYS', pricePerPerson: '$200', perDay: '$20/day', popular: false, desc: 'Cultural Triangle, Mountain Passes & Yala Safari' },
        { days: '12 DAYS', pricePerPerson: '$240', perDay: '$20/day', popular: false, desc: 'Comprehensive Island Loop across beaches & hills' },
        { days: '14 DAYS', pricePerPerson: '$280', perDay: '$20/day', popular: false, desc: 'The Ultimate 2-Week Grand Road Trip of Sri Lanka' }
      ]
    },
    premiumPackages: {
      title: 'Premium Group Tour Packages',
      groupSize: '20 - 22 Persons (10 - 11 Tuk Tuks)',
      badge: '20 - 22 Persons + Backup Van & Free Activities',
      rateNotice: 'All-Inclusive VIP Group Experience',
      description: 'The ultimate VIP road trip experience with an accompanying support van, personal mechanic, and free adventure activities.',
      inclusions: [
        '20 - 22 Persons (10 - 11 Tuk Tuks)',
        'Dedicated Backup Support Vehicle (Toyota KDH Van) with Driver for Luggage',
        'Full-Time Accompanying Mechanic & Supporting Road Assistant',
        'Free Activities Included: Scenic Lagoon Boat Trip, Countryside Cycling & Traditional Adventure Folk Games',
        'Train Transit Service - Kandy To Ella (Luggage & tuk-tuk handling included)',
        'Sri Lankan Driving Licenses (AAC endorsed) for all drivers',
        'VIP Full Comprehensive Insurance (Zero Stress)',
        '24/7 Nationwide Roadside Breakdown Support',
        'Free 1-on-1 Driving Lesson & Practice Session in Negombo',
        'No Any Hidden Fees'
      ],
      durations: [
        { days: '10 DAYS Premium', popular: true, desc: 'Includes Dedicated Luggage Van, On-Road Mechanic & Free Activities' },
        { days: '12 DAYS Premium', popular: false, desc: 'Complete Highland & Coastal Expedition with Full Support Crew' },
        { days: '14 DAYS Premium', popular: false, desc: 'The Grand VIP Tuk Tuk Odyssey across the Entire Island' }
      ]
    },
    backupVehicle: {
      title: 'Our Dedicated Backup Vehicles & Luggage Vans',
      subtitle: 'Lightweight Tuk Tuks, Zero Luggage Hassle',
      description: 'Planning a group road trip with 10 to 22+ people means heavy suitcases, backpacks, and surfboards! For our Premium group tours, we provide a dedicated air-conditioned support van (Toyota KDH / HiAce) driven by a professional support driver. The backup van carries everyone’s luggage so your tuk tuks remain lightweight, nimble, and easy to handle on mountain climbs. It also carries mobile tools, spare parts, and offers a comfortable seat if any rider wants to rest.',
      features: [
        'Transports all heavy luggage between daily hotel stops',
        'Carries mobile tools, spare tires, and replacement parts',
        'Provides comfortable air-conditioned seats for tired travelers',
        'Complimentary on Premium Tours; optional add-on for Standard Tours'
      ],
      image: '/images/toyota-kdh.jpg'
    },
    guidelines: [
      {
        q: 'Can we customize our group size or tour duration?',
        a: 'Absolutely! If the number of days or group members you prefer does not match the packages above, there is no need to worry. We can easily customize the Sri Lanka tuk tuk group tour to match your travel plans, flight schedules, and exact squad size.'
      },
      {
        q: 'Will you help us organize our full Sri Lanka travel route?',
        a: 'Yes! Regardless of the package you choose, our team will assist you in organizing your full Sri Lanka tuk tuk itinerary, including secret viewpoints, elephant safari corridors, mountain passes, and hotel stays across the island.'
      },
      {
        q: 'What do the package prices cover and what is extra?',
        a: 'Package prices cover the tuk tuk rental, AAC legal driving permits, VIP insurance, training, and selected perks for the specified period. Additional personal expenses such as petrol/fuel and personal sightseeing tickets are paid as you travel.'
      },
      {
        q: 'How does the backup vehicle and luggage support work?',
        a: 'A backup vehicle with a driver is 100% included in all Premium Packages (20-22 persons), carrying all luggage from hotel to hotel and assisting in emergencies. This service is also available as an optional upgrade for Standard Packages (10-12 persons).'
      },
      {
        q: 'What free activities are included in Premium Packages?',
        a: 'Premium packages include exciting free group experiences such as a scenic Negombo lagoon boat cruise, countryside cycling, and traditional Sri Lankan adventure folk games!'
      }
    ],
    rentingProcess: [
      {
        step: '01',
        title: 'Book Your Tuk Tuk Tour',
        desc: 'Reserve your group package by contacting Rocky via WhatsApp or our booking form. Share your dates, group size, and any special requests.'
      },
      {
        step: '02',
        title: 'Free Driving Lesson & Local License',
        desc: 'We arrange official Sri Lankan driving licenses in advance and provide a thorough 1-on-1 driving lesson in Negombo until your entire squad is ready.'
      },
      {
        step: '03',
        title: 'Hit the Road with Full Support',
        desc: 'Start your island adventure with peace of mind! Enjoy 24/7 mechanical backup, train transit service, and dedicated support all the way.'
      }
    ]
  },

  stay: {
    title: 'Stay in Negombo – Pick & Go Whitehouse / Tuk Tuk Rooms',
    subtitle: 'A Home Away from Home Near Negombo Beach & CMB Airport',
    description: 'Enjoy a relaxing stay in Negombo Sri Lanka at our comfortable and affordable guest house located just minutes from the beach and Bandaranaike International Airport. Whether you need a place to rest before starting your Tuk Tuk road trip, a late checkout after an adventurous tour, or safe luggage storage, Pick & Go Whitehouse provides warm hospitality and clean modern comfort.',
    location: 'No 79, St. Joseph Street, Ettukala, Negombo, Sri Lanka (Minutes to beach & restaurants, 15 min to airport)',
    heroImage: '/images/rooms/optimized/whitehouse-exterior.jpg',
    images: [
      '/images/rooms/optimized/whitehouse-exterior.jpg',
      '/images/rooms/optimized/room-double.jpg',
      '/images/rooms/optimized/room-triple.jpg',
      '/images/rooms/optimized/room-single.jpg',
      '/images/rooms/optimized/room-double-front.jpg',
      '/images/rooms/optimized/bathroom-luxury.jpg'
    ],
    gallery: [
      { url: '/images/rooms/optimized/whitehouse-exterior.jpg', title: 'Pick & Go Whitehouse Villa' },
      { url: '/images/rooms/optimized/room-double.jpg', title: 'Double Bedroom with Balcony' },
      { url: '/images/rooms/optimized/room-triple.jpg', title: 'Triple Bedroom (1 Double + 1 Single Bed)' },
      { url: '/images/rooms/optimized/room-triple-suite.jpg', title: 'Triple Suite with Balcony & TV' },
      { url: '/images/rooms/optimized/room-double-front.jpg', title: 'King Double Bed with Fresh Linens' },
      { url: '/images/rooms/optimized/bathroom-luxury.jpg', title: 'Modern Marble Tiled Bathroom' },
      { url: '/images/rooms/optimized/gallery-07.jpg', title: 'Sunny Bedroom with Tropical Balcony' },
      { url: '/images/rooms/optimized/bathroom-modern.jpg', title: 'En-suite Bathroom with Hot Water' }
    ],
    rooms: [
      {
        id: 'room-single',
        name: 'Single Bedroom',
        tagline: 'Ideal for solo adventurers & backpackers',
        price: '$18',
        period: 'per night',
        badge: 'Solo Explorer',
        image: '/images/rooms/optimized/room-single.jpg',
        features: ['Cozy Single Bed', 'Air Conditioning & Ceiling Fan', 'Private Bathroom with Hot Shower', 'High-Speed Free Wi-Fi', 'Complimentary Drinking Water']
      },
      {
        id: 'room-double',
        name: 'Double Bedroom',
        tagline: 'Spacious & comfortable for couples & pairs',
        price: '$28',
        period: 'per night',
        badge: 'Most Popular',
        image: '/images/rooms/optimized/room-double.jpg',
        features: ['King / Queen Sized Bed', 'Air Conditioning', 'Private Balcony / Garden View', 'En-suite Bathroom with Hot Water', 'Work Desk & Fast Wi-Fi']
      },
      {
        id: 'room-triple',
        name: 'Triple Bedroom',
        tagline: 'Spacious family room for 3 guests',
        price: '$38',
        period: 'per night',
        badge: 'Family & Groups',
        image: '/images/rooms/optimized/room-triple.jpg',
        features: ['1 Double Bed + 1 Single Bed', 'Air Conditioning', 'Large En-suite Bathroom', 'Balcony & Seating Area', 'Fast Free Wi-Fi']
      }
    ],
    amenities: [
      'Free Secure Luggage Storage while you travel around Sri Lanka',
      '24/7 Check-in & Airport Transfer Support',
      'Free High-Speed Wi-Fi across all rooms and garden',
      'Quiet and safe residential neighborhood in Ettukala tourist zone',
      'Tuk Tuk & Motorbike parking on-site',
      'Complimentary Tea & Coffee'
    ]
  },

  carWithDriverPackages: [
    {
      id: 'driver-suzuki-spacia-wagon-r',
      name: 'Suzuki Spacia Automatic Hybrid | Suzuki Wagon R',
      shortName: 'Suzuki Spacia / Wagon R',
      badge: 'Best for Couples & Small Families',
      type: 'Automatic Hybrid / Hatchback',
      image: '/images/suzuki-spacia.jpg',
      secondaryImage: 'https://pickandgotravels.com/wp-content/uploads/2024/05/SUZUKI-WAGON-R.jpg',
      capacity: '3 Passengers + Luggage',
      passengers: '3 Passengers',
      luggage: 'Included Luggage Capacity',
      freeKmDaily: 130,
      extraKmRate: 0.40,
      extraKmText: '$0.40 cent per additional km',
      fuelInfo: {
        type: 'Petrol 92 Octane',
        priceLkr: 'LKR 414 / 1L',
        note: 'Not included (Paid at pump)'
      },
      prices: [
        { range: '1 to 14 Days', daysMin: 1, daysMax: 14, price: 49, priceDisplay: '$49', period: 'per day' },
        { range: '15 to 30 Days', daysMin: 15, daysMax: 30, price: 44, priceDisplay: '$44', period: 'per day' }
      ],
      inclusions: [
        'Driver | guiding | accommodation | meals',
        'Car full insurance | 3 passenger | luggage',
        'Free 130 KM per day',
        'Additional 1 kilometer $0.40 cent'
      ],
      exclusions: [
        'Petrol 92 octane (LKR 414 / 1L)',
        'Highway expressway toll tickets',
        'Parking fees & tickets'
      ],
      highlights: [
        'Experienced English-speaking chauffeur & tour guide',
        'Driver meals & driver accommodation 100% included (no extra cost to you)',
        'Full comprehensive vehicle insurance',
        'Dual air conditioning & clean comfortable interior'
      ]
    },
    {
      id: 'driver-toyota-kdh-flat-roof',
      name: 'Toyota KDH Flat Roof',
      shortName: 'Toyota KDH Flat Roof',
      badge: 'Spacious Group & Family Touring Van',
      type: 'Touring Van (Flat Roof)',
      image: '/images/toyota-kdh.jpg',
      secondaryImage: '/images/toyota-kdh.jpg',
      capacity: '5 Passengers + Luggage',
      passengers: '5 Passengers',
      luggage: 'Spacious Luggage Area',
      freeKmDaily: 130,
      extraKmRate: 0.40,
      extraKmText: '$0.40 cent per additional km',
      fuelInfo: {
        type: 'Petrol 92 Octane',
        priceLkr: 'LKR 414 / 1L',
        note: 'Not included (Paid at pump)'
      },
      prices: [
        { range: '1 to 14 Days', daysMin: 1, daysMax: 14, price: 87, priceDisplay: '$87', period: 'per day' },
        { range: '15 to 30 Days', daysMin: 15, daysMax: 30, price: 82, priceDisplay: '$82', period: 'per day' }
      ],
      inclusions: [
        'Driver | guiding | accommodation | meals',
        'Car full insurance | 5 passenger | luggage',
        'Free 130 KM per day',
        'Additional 1 kilometer $0.40 cent'
      ],
      exclusions: [
        'Petrol 92 octane (LKR 414 / 1L)',
        'Highway expressway toll tickets',
        'Parking fees & tickets'
      ],
      highlights: [
        'Spacious passenger cabin with high comfort for long island journeys',
        'Driver meals & driver room included (zero hidden charges)',
        'Full passenger & vehicle comprehensive insurance',
        'Dual AC, tinted privacy glass & generous luggage room'
      ]
    },
    {
      id: 'driver-toyota-voxy-hybrid',
      name: 'Toyota Voxy Hybrid Automatic',
      shortName: 'Toyota Voxy Hybrid Automatic',
      badge: 'Premium Luxury Comfort & Hybrid Tech',
      type: 'Luxury Hybrid Automatic MPV',
      image: '/images/toyota-voxy.jpg',
      secondaryImage: '/images/toyota-voxy.jpg',
      capacity: '5 Passengers + Luggage',
      passengers: '5 Passengers',
      luggage: 'Large Luggage Boot',
      freeKmDaily: 130,
      extraKmRate: 0.40,
      extraKmText: '$0.40 cent per additional km',
      fuelInfo: {
        type: 'Petrol 95 Octane',
        priceLkr: 'LKR 475 / 1L',
        note: 'Not included (Paid at pump)'
      },
      prices: [
        { range: '1 to 15 Days', daysMin: 1, daysMax: 15, price: 80, priceDisplay: '$80', period: 'per day' },
        { range: '16 to 30 Days', daysMin: 16, daysMax: 30, price: 76, priceDisplay: '$76', period: 'per day' }
      ],
      inclusions: [
        'Driver | guiding | accommodation | meals',
        'Car full insurance | 5 passenger | luggage',
        'Free 130 KM per day',
        'Additional 1 kilometer $0.40 cent'
      ],
      exclusions: [
        'Petrol 95 octane (LKR 475 / 1L)',
        'Highway expressway toll tickets',
        'Parking fees & tickets'
      ],
      highlights: [
        'Ultra-smooth quiet Hybrid powertrain with luxurious captain seating',
        'Driver meals & driver accommodation fully included',
        'Comprehensive full insurance coverage',
        'Dual automatic sliding doors, supreme air-con & modern tech'
      ]
    },
    {
      id: 'driver-honda-shuttle-hybrid',
      name: 'Honda Shuttle Hybrid Automatic',
      shortName: 'Honda Shuttle Hybrid',
      badge: 'Spacious Station Wagon & Touring Comfort',
      type: 'Station Wagon Hybrid Automatic',
      image: '/images/honda-shuttle.jpg',
      secondaryImage: '/images/honda-shuttle.jpg',
      capacity: '4 Passengers + Luggage',
      passengers: '4 Passengers',
      luggage: 'Extra Large Luggage Boot',
      freeKmDaily: 130,
      extraKmRate: 0.40,
      extraKmText: '$0.40 cent per additional km',
      fuelInfo: {
        type: 'Petrol 95 Octane',
        priceLkr: 'LKR 475 / 1L',
        note: 'Not included (Paid at pump)'
      },
      prices: [
        { range: '1 to 15 Days', daysMin: 1, daysMax: 15, price: 60, priceDisplay: '$60', period: 'per day' },
        { range: '16 to 30 Days', daysMin: 16, daysMax: 30, price: 57, priceDisplay: '$57', period: 'per day' }
      ],
      inclusions: [
        'Driver | guiding | accommodation | meals',
        'Car full insurance | 4 passenger | luggage',
        'Free 130 KM per day',
        'Additional 1 kilometer $0.40 cent'
      ],
      exclusions: [
        'Petrol 95 octane (LKR 475 / 1L)',
        'Highway expressway toll tickets',
        'Parking fees & tickets'
      ],
      highlights: [
        'Smooth Japanese hybrid station wagon with exceptional ride comfort',
        'Driver meals & driver accommodation 100% included in package',
        'Full passenger and comprehensive vehicle insurance',
        'Extra spacious luggage boot ideal for 4 travelers with large suitcases'
      ]
    }
  ],

  reviews: [
    {
      name: 'T. Voster',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKVqLZrlfpz29GoxZoTIHKoYgwxm3N6oVEcTO1au8-1YaPW6g=w80-h80-c-rp-mo-ba4-br100',
      text: 'What an awesome experience and Rocky is a big help! They will take care of your drivers license which can be included in the price. They will also schedule a pick up from Kandy to Ella, so that you can take the train. We’re very glad with the service, we only had one small issue with the tuktuk, luckily we didn’t have to pay anything. Thank you Rocky for the great service!'
    },
    {
      name: 'Sammie Bertens',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLQ5h1N7d4nwS_DgycEZCIkTvV0rEp6Aak10QP2loy-Bk5CvUk=w80-h80-c-rp-mo-br100',
      text: 'We hebben een maand rondgereisd in de tuktuk, en het was heerlijk. Het geeft enorm veel vrijheid en leuke reacties van locals. Het bedrijf was goed bereikbaar, heeft de documenten voor ons geregeld en kwam professioneel over. Wij hebben de treinreis tussen Kandy en Ella gedaan, waarvoor het bedrijf een fijne service heeft geleverd waarbij zij de tuktuk hebben verplaatst. Enorme aanrader!'
    },
    {
      name: 'Lucia Jimenez Guillen',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIjSq86MQpi9W8TxYAj1DnO5MMSwbzX4w92p0sg9DgUomNsfA=w80-h80-c-rp-mo-br100',
      text: 'Hemos alquilado un tuk tuk para recorrer la isla por nuestra cuenta durante 14 días. La experiencia ha sido magnífica, facilidades para el permiso de conducción y durante las vacaciones. Tuvimos un pequeño problema con el arranque, el cual fue resuelto en el mismo día por la empresa sin tener que molestarnos nosotros en nada. Además Rocky muy simpático y agradable en todo momento!'
    },
    {
      name: 'Yolanda Díaz Ruiz',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI9k-khv_Xa1vczVQEYRqyo6rRKgPIb-PPZo_nCqVHMiCDiVw=w80-h80-c-rp-mo-br100',
      text: 'Recorrer Sri Lanka en tuktuk fue una parte fundamental de esta inolvidable experiencia, no solo por la libertad que nos dio poder movernos a cada rincón del país, sino porque vivimos el viaje desde un punto de vista más local. El trato con Rocky fue excelente, con quien estuvimos en contacto durante el trayecto para cualquier incidente. Sin duda repetiríamos.'
    },
    {
      name: '小杉弘一 (Koichi Kosugi)',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocInDWdfOaRClXvJ8Oa-Blu9THSElDrqaDksBwlA_wpXHDc5Kg=w80-h80-c-rp-mo-br100',
      text: 'スリランカの免許証とレンタカーの手配をしました。メールの返信も早く、オーナーのロッキー氏が空港まて迎えに来てくれ手続きもスムーズでした。18時に返却で飛行機の出発が深夜1:15だったので、有料でホステルの部屋で休ませてくれました。また利用したいです。(Rocky assisted smoothly from airport pickup to license and late room rest. Highly recommended!)'
    },
    {
      name: 'Roshan Lakmal',
      source: 'Google Reviews',
      rating: 5,
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVzVFUAxhAj_0vIo2LAr9J-L0S7FocBmDiJYKohks9OLQCFBQqN=w80-h80-c-rp-mo-ba6-br100',
      text: 'Rent a bike or a tuktuk with Pick & Go! Most popular among tourists, highly recommended for reliable vehicles and honest pricing.'
    }
  ],

  faqs: [
    {
      q: 'Do I need a Sri Lankan driving license to drive a Tuk Tuk or motorbike?',
      a: 'Yes. An International Driving Permit (IDP) alone is not legally sufficient to drive a tuk tuk or motorcycle in Sri Lanka. It must be recognized or endorsed by the Automobile Association of Ceylon (AAC) or a temporary Sri Lankan driving permit must be issued. Pick & Go Travels takes care of this entire legal process for you ($40 endorsement fee). Simply send us a photo of your passport and driving license in advance, and your permit will be ready when you arrive!'
    },
    {
      q: 'What happens if I have a breakdown or flat tire during my trip?',
      a: 'We provide 24/7 Island-wide breakdown assistance! Every tuk tuk comes equipped with a spare tire, jack, and tool kit for simple wheel changes. For any mechanical issues, our nationwide network of trusted mechanics will reach you promptly or we will replace the vehicle if needed.'
    },
    {
      q: 'Can I take the famous Kandy to Ella train while renting a Tuk Tuk?',
      a: 'Yes! This is one of our most loved exclusive services. You can take the iconic blue mountain train ride from Kandy to Ella with your luggage, while our team transfers your Tuk Tuk from Kandy station to Ella station, waiting for you when you get off the train!'
    },
    {
      q: 'Are kilometers really unlimited?',
      a: 'Yes, 100% unlimited kilometers! There are no daily distance limits or surcharge per kilometer. You are free to drive anywhere on public roads across Sri Lanka.'
    },
    {
      q: 'Can I get a driving lesson before heading onto the road?',
      a: 'Absolutely! We provide a comprehensive, patient, 1-on-1 driving lesson and safety briefing with our expert instructors in a quiet Negombo area until you feel completely confident handling the vehicle.'
    },
    {
      q: 'Where can I pick up and drop off the vehicle?',
      a: 'Our main office is located in Ettukala, Negombo—just 15 minutes from Bandaranaike International Airport (CMB). We offer airport pickup and drop-off, or customized drop-offs across popular tourist hubs upon request.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash payments in major currencies including USD, EUR, GBP, and Sri Lankan Rupees (LKR). Card payments are also accepted: Visa acceptable (+3.5% additional charge for Central Bank) and Mastercard.'
    }
  ]
};
