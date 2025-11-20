const BASE_INVENTORY = [
  {
    "title": "2023 Freightliner Cascadia 126 Sleeper",
    "type": "Truck",
    "brand": "Freightliner",
    "year": 2023,
    "price": 115000,
    "mileage": 145200,
    "color": "White",
    "state": "CA",
    "image": "https://imagescdn.dealercarsearch.com/Media/22484/23001914/638930206131273528.jpg",
    "status": "Available",
    "vin": "3AKJHHDR1PS000001"
  },
  {
    "title": "2022 Kenworth T680 Next Gen",
    "type": "Truck",
    "brand": "Kenworth",
    "year": 2022,
    "price": 98000,
    "mileage": 220400,
    "color": "Red",
    "state": "TX",
    "image": "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    "status": "Available",
    "vin": "1XKYDP9X2NJ00002"
  },
  {
    "title": "2021 Volvo VNL 760",
    "type": "Truck",
    "brand": "Volvo",
    "year": 2021,
    "price": 86500,
    "mileage": 310880,
    "color": "Blue",
    "state": "NJ",
    "image": "https://images.pexels.com/photos/2199294/pexels-photo-2199294.jpeg",
    "status": "Available",
    "vin": "4V4NC9EH6MN00003"
  },
  {
    "title": "2020 International LT625",
    "type": "Truck",
    "brand": "International",
    "year": 2020,
    "price": 74500,
    "mileage": 420330,
    "color": "White",
    "state": "PA",
    "image": "https://images.pexels.com/photos/2199295/pexels-photo-2199295.jpeg",
    "status": "Available",
    "vin": "3HSDJAPR8LN00004"
  },
  {
    "title": "2019 Peterbilt 579 UltraLoft",
    "type": "Truck",
    "brand": "Peterbilt",
    "year": 2019,
    "price": 69500,
    "mileage": 515120,
    "color": "Black",
    "state": "GA",
    "image": "https://images.pexels.com/photos/2199296/pexels-photo-2199296.jpeg",
    "status": "Available",
    "vin": "1XPBDP9X6KD00005"
  },
  {
    "title": "2018 Freightliner Cascadia Day Cab",
    "type": "Truck",
    "brand": "Freightliner",
    "year": 2018,
    "price": 52500,
    "mileage": 620880,
    "color": "White",
    "state": "NY",
    "image": "https://imagescdn.dealercarsearch.com/Media/22484/23001914/638930206131273528.jpg",
    "status": "Available",
    "vin": "3AKJGLDR0JS00006"
  },
  {
    "title": "2017 Kenworth T680 Day Cab",
    "type": "Truck",
    "brand": "Kenworth",
    "year": 2017,
    "price": 48000,
    "mileage": 710550,
    "color": "Other",
    "state": "Other",
    "image": "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    "status": "Available",
    "vin": "1XKYDP9X7HJ00007"
  },
  {
    "title": "2016 Volvo VNL 670",
    "type": "Truck",
    "brand": "Volvo",
    "year": 2016,
    "price": 39500,
    "mileage": 780440,
    "color": "Blue",
    "state": "IL",
    "image": "https://images.pexels.com/photos/2199294/pexels-photo-2199294.jpeg",
    "status": "Available",
    "vin": "4V4NC9EJ7GN00008"
  },
  {
    "title": "2015 International ProStar",
    "type": "Truck",
    "brand": "International",
    "year": 2015,
    "price": 32000,
    "mileage": 830990,
    "color": "White",
    "state": "FL",
    "image": "https://images.pexels.com/photos/2199295/pexels-photo-2199295.jpeg",
    "status": "Sold",
    "vin": "3HSDJSJR0FN00009"
  },
  {
    "title": "2014 Peterbilt 386 Day Cab",
    "type": "Truck",
    "brand": "Peterbilt",
    "year": 2014,
    "price": 27500,
    "mileage": 915440,
    "color": "Red",
    "state": "CA",
    "image": "https://images.pexels.com/photos/2199296/pexels-photo-2199296.jpeg",
    "status": "Available",
    "vin": "1XPHD49X0ED00010"
  },
  {
    "title": "2013 Freightliner M2 106 Box",
    "type": "Truck",
    "brand": "Freightliner",
    "year": 2013,
    "price": 23500,
    "mileage": 185200,
    "color": "Other",
    "state": "TX",
    "image": "https://imagescdn.dealercarsearch.com/Media/22484/23001914/638930206131273528.jpg",
    "status": "Available",
    "vin": "1FVACWDT3DH00011"
  },
  {
    "title": "2012 Kenworth W900L",
    "type": "Truck",
    "brand": "Kenworth",
    "year": 2012,
    "price": 84500,
    "mileage": 640880,
    "color": "Black",
    "state": "Other",
    "image": "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    "status": "Available",
    "vin": "1XKWD49X2CJ00012"
  },
  {
    "title": "2011 Kenworth T800 Dump",
    "type": "Truck",
    "brand": "Kenworth",
    "year": 2011,
    "price": 68500,
    "mileage": 410550,
    "color": "Black",
    "state": "Other",
    "image": "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    "status": "Available",
    "vin": "1XKDDB9X9BJ00013"
  },
  {
    "title": "2010 Volvo VNL 780",
    "type": "Truck",
    "brand": "Volvo",
    "year": 2010,
    "price": 19800,
    "mileage": 1040000,
    "color": "Blue",
    "state": "NJ",
    "image": "https://images.pexels.com/photos/2199294/pexels-photo-2199294.jpeg",
    "status": "Available",
    "vin": "4V4NC9EH9AN00014"
  },
  {
    "title": "2008 International 9900i Eagle",
    "type": "Truck",
    "brand": "International",
    "year": 2008,
    "price": 25800,
    "mileage": 760330,
    "color": "White",
    "state": "PA",
    "image": "https://images.pexels.com/photos/2199295/pexels-photo-2199295.jpeg",
    "status": "Available",
    "vin": "2HSCESBR48C00015"
  },
  {
    "title": "2007 International 4300 Box",
    "type": "Truck",
    "brand": "International",
    "year": 2007,
    "price": 16800,
    "mileage": 320440,
    "color": "White",
    "state": "PA",
    "image": "https://images.pexels.com/photos/2199295/pexels-photo-2199295.jpeg",
    "status": "Available",
    "vin": "1HTMMAAL27H00016"
  },
  {
    "title": "2006 Peterbilt 387 Sleeper",
    "type": "Truck",
    "brand": "Peterbilt",
    "year": 2006,
    "price": 19200,
    "mileage": 970220,
    "color": "Red",
    "state": "TX",
    "image": "https://images.pexels.com/photos/2199296/pexels-photo-2199296.jpeg",
    "status": "Available",
    "vin": "1XP7D49X66D00017"
  },
  {
    "title": "2005 Peterbilt 379 Extended Hood",
    "type": "Truck",
    "brand": "Peterbilt",
    "year": 2005,
    "price": 125000,
    "mileage": 890770,
    "color": "Red",
    "state": "TX",
    "image": "https://images.pexels.com/photos/2199296/pexels-photo-2199296.jpeg",
    "status": "Available",
    "vin": "1XP5DB9X55D00018"
  },
  {
    "title": "2023 Utility 3000R Reefer",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2023,
    "price": 68000,
    "mileage": 12000,
    "color": "White",
    "state": "PA",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS2538P300019"
  },
  {
    "title": "2022 Vanguard Dry Van",
    "type": "Trailer",
    "brand": "Vanguard",
    "year": 2022,
    "price": 42000,
    "mileage": 18000,
    "color": "White",
    "state": "NJ",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "5V8VC5322N300020"
  },
  {
    "title": "2021 Delucio Flatbed",
    "type": "Trailer",
    "brand": "Delucio",
    "year": 2021,
    "price": 36500,
    "mileage": 25000,
    "color": "Red",
    "state": "NY",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "DLUCIOFLAT210021"
  },
  {
    "title": "2020 Utility 4000D-X Dry Van",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2020,
    "price": 33500,
    "mileage": 34000,
    "color": "Blue",
    "state": "GA",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS2536L300022"
  },
  {
    "title": "2019 Vanguard Curtain Side",
    "type": "Trailer",
    "brand": "Vanguard",
    "year": 2019,
    "price": 29800,
    "mileage": 41000,
    "color": "Black",
    "state": "FL",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "5V8VC5320K300023"
  },
  {
    "title": "2018 Utility 28ft Pup",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2018,
    "price": 24000,
    "mileage": 52000,
    "color": "White",
    "state": "CA",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Sold",
    "vin": "1UYVS2538J300024"
  },
  {
    "title": "2017 Delucio Step Deck",
    "type": "Trailer",
    "brand": "Delucio",
    "year": 2017,
    "price": 45500,
    "mileage": 67000,
    "color": "Other",
    "state": "TX",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "DLUCIOSTEP170025"
  },
  {
    "title": "2016 Vanguard Refrigerated",
    "type": "Trailer",
    "brand": "Vanguard",
    "year": 2016,
    "price": 38200,
    "mileage": 88000,
    "color": "Blue",
    "state": "IL",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "5V8VC5321G300026"
  },
  {
    "title": "2015 Utility Flatbed",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2015,
    "price": 21500,
    "mileage": 103000,
    "color": "White",
    "state": "NJ",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS2537F300027"
  },
  {
    "title": "2014 Delucio Hopper Bottom",
    "type": "Trailer",
    "brand": "Delucio",
    "year": 2014,
    "price": 28500,
    "mileage": 125000,
    "color": "Black",
    "state": "PA",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "DLUCIOHOP140028"
  },
  {
    "title": "2013 Vanguard Dry Van",
    "type": "Trailer",
    "brand": "Vanguard",
    "year": 2013,
    "price": 19800,
    "mileage": 184000,
    "color": "Red",
    "state": "TX",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "5V8VC5322D300029"
  },
  {
    "title": "2012 Utility Reefer",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2012,
    "price": 25400,
    "mileage": 201000,
    "color": "White",
    "state": "NY",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS2535C300030"
  },
  {
    "title": "2011 Delucio Conestoga",
    "type": "Trailer",
    "brand": "Delucio",
    "year": 2011,
    "price": 23200,
    "mileage": 219000,
    "color": "Other",
    "state": "CA",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "DLUCIOCST110031"
  },
  {
    "title": "2010 Utility Curtain Van",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2010,
    "price": 17500,
    "mileage": 243000,
    "color": "Blue",
    "state": "TX",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS2534A300032"
  },
  {
    "title": "2009 Vanguard Dry Van",
    "type": "Trailer",
    "brand": "Vanguard",
    "year": 2009,
    "price": 16200,
    "mileage": 278000,
    "color": "White",
    "state": "GA",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Sold",
    "vin": "5V8VC53219N00033"
  },
  {
    "title": "2008 Utility Flatbed",
    "type": "Trailer",
    "brand": "Utility",
    "year": 2008,
    "price": 14800,
    "mileage": 305000,
    "color": "Unknown",
    "state": "Unknown",
    "image": "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    "status": "Available",
    "vin": "1UYVS25398U00034"
  },
  {
    "title": "2007 Delucio Dry Van",
    "type": "Trailer",
    "brand": "Delucio",
    "year": 2007,
    "price": 13900,
    "mileage": 330000,
    "color": "Black",
    "state": "NJ",
    "image": "https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg",
    "status": "Available",
    "vin": "DLUCIODV070035"
  }
];

const ENGINE_OPTIONS = [
  'Detroit DD15 / 505 HP',
  'Cummins X15 / 500 HP',
  'Volvo D13 / 455 HP',
  'PACCAR MX-13 / 455 HP',
  'Cummins ISX15 / 450 HP',
  'Detroit DD13 / 470 HP',
  'Volvo D11 / 405 HP',
  'PACCAR MX-11 / 430 HP',
  'Cummins X12 / 455 HP',
  'International A26 / 475 HP'
];

const TRANSMISSION_OPTIONS = [
  '12-speed automatic',
  '10-speed manual',
  '13-speed manual',
  '18-speed manual',
  'Endurant 12-speed auto',
  'Allison 6-speed automatic'
];

const LOCATION_BANK = [
  { city: 'Los Angeles', state: 'CA' },
  { city: 'Dallas', state: 'TX' },
  { city: 'Atlanta', state: 'GA' },
  { city: 'Chicago', state: 'IL' },
  { city: 'Phoenix', state: 'AZ' },
  { city: 'Philadelphia', state: 'PA' },
  { city: 'Orlando', state: 'FL' },
  { city: 'Salt Lake City', state: 'UT' },
  { city: 'Nashville', state: 'TN' },
  { city: 'Kansas City', state: 'MO' }
];

const PHONE_BANK = [
  '+1 (310) 555-0147',
  '+1 (972) 555-0188',
  '+1 (470) 555-0114',
  '+1 (773) 555-0106',
  '+1 (602) 555-0199',
  '+1 (215) 555-0132',
  '+1 (407) 555-0121',
  '+1 (385) 555-0155',
  '+1 (629) 555-0178',
  '+1 (816) 555-0166'
];

const FEATURE_LIBRARY = [
  ['Sleeper cab', 'APU', 'Aluminum wheels', 'Full aero kit'],
  ['Collision mitigation', 'Lane assist', 'Disc brakes all around'],
  ['Fresh PM service', 'Clean title', 'No active faults'],
  ['New drive tires', 'DOT ready', 'Maintenance records'],
  ['Thermo King APU', 'Bunk heater', 'Fridge & inverter'],
  ['Alloy wheels', 'Air ride suspension', 'Fresh detail'],
  ['Sliding tandems', 'Air ride', 'Steel frame'],
  ['Logistics posts', 'Aluminum roof', 'Translucent roof'],
  ['Scale certified', 'E-logs ready', 'Bluetooth audio'],
  ['Fresh brakes', 'LED lighting', 'Recent alignment']
];

const FALLBACK_IMAGES = [
  'https://imagescdn.dealercarsearch.com/Media/22484/23001914/638930206131273528.jpg',
  'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
  'https://images.pexels.com/photos/2199294/pexels-photo-2199294.jpeg',
  'https://images.pexels.com/photos/2199295/pexels-photo-2199295.jpeg',
  'https://images.pexels.com/photos/2199296/pexels-photo-2199296.jpeg',
  'https://images.pexels.com/photos/2199297/pexels-photo-2199297.jpeg',
  'https://images.pexels.com/photos/21694/pexels-photo.jpg'
];

const COLOR_PALETTE = ['White','Red','Blue','Black','Silver','Gray','Green','Maroon','Navy','Charcoal'];

function deriveModel(title = '', brand = '') {
  const cleaned = title.replace(/\b(19|20)\d{2}\b/, '').replace(new RegExp(brand, 'i'), '').replace(/\s+/g, ' ').trim();
  return cleaned || 'Model';
}

const INVENTORY_SEED = BASE_INVENTORY.map((unit, idx) => {
  const location = LOCATION_BANK[idx % LOCATION_BANK.length];
  const state = unit.state && unit.state !== 'Unknown' && unit.state !== 'Other' ? unit.state : location.state;
  const color = unit.color && unit.color !== 'Unknown' && unit.color !== 'Other' ? unit.color : COLOR_PALETTE[idx % COLOR_PALETTE.length];
  const primaryImage = unit.image || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length];
  const baseGallery = Array.isArray(unit.images) ? unit.images.filter(Boolean) : [];
  const gallery = [primaryImage, ...baseGallery, FALLBACK_IMAGES[(idx + 3) % FALLBACK_IMAGES.length]]
    .filter(Boolean)
    .slice(0, 5);
  const description = unit.description || `${unit.year || 'Late-model'} ${unit.brand || ''} ${deriveModel(unit.title, unit.brand)} ready for work with clean title and recent service.`.trim();
  const features = Array.isArray(unit.features) && unit.features.length ? unit.features : FEATURE_LIBRARY[idx % FEATURE_LIBRARY.length];

  return {
    ...unit,
    state,
    color,
    model: unit.model || deriveModel(unit.title, unit.brand),
    engine: unit.engine || ENGINE_OPTIONS[idx % ENGINE_OPTIONS.length],
    transmission: unit.transmission || TRANSMISSION_OPTIONS[idx % TRANSMISSION_OPTIONS.length],
    condition: unit.condition || (idx % 6 === 0 ? 'New' : 'Used'),
    location: unit.location || `${location.city}, ${location.state}`,
    phone: unit.phone || PHONE_BANK[idx % PHONE_BANK.length],
    description,
    features,
    images: [...new Set(gallery)],
    image: gallery[0],
    price: unit.price ?? 0,
    mileage: unit.mileage ?? 0,
    status: unit.status || 'Available'
  };
});
