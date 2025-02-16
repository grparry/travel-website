import { Destination, LuxuryExperience, Accommodation } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    title: 'Maldives',
    description: 'Private islands and overwater villas',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3',
    longDescription: 'Experience ultimate luxury in the Maldives, where pristine white-sand beaches meet crystal-clear turquoise waters. Each private island resort offers an exclusive escape with world-class service and unparalleled privacy.',
    highlights: [
      'Private overwater villas with personal pools',
      'World-class spa treatments',
      'Underwater restaurants',
      'Personal butler service',
      'Sunset dolphin cruises'
    ],
    location: {
      country: 'Maldives',
      region: 'South Asia',
      coordinates: {
        latitude: 3.2028,
        longitude: 73.2207
      }
    }
  },
  {
    id: 2,
    title: 'Swiss Alps',
    description: 'Luxury chalets and mountain retreats',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3',
    longDescription: 'Discover the timeless elegance of the Swiss Alps, where luxury meets alpine tradition. Our carefully selected chalets combine rustic charm with modern amenities, offering year-round exclusive experiences.',
    highlights: [
      'Private ski instructors',
      'Helicopter transfers',
      'Michelin-starred restaurants',
      'Luxury spa facilities',
      'Exclusive mountain experiences'
    ],
    location: {
      country: 'Switzerland',
      region: 'Central Europe',
      coordinates: {
        latitude: 46.8182,
        longitude: 8.2275
      }
    }
  },
  {
    id: 3,
    title: 'Amalfi Coast',
    description: 'Cliffside hotels and Mediterranean charm',
    image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3',
    longDescription: 'The Amalfi Coast, a UNESCO World Heritage site, offers a perfect blend of Italian luxury and natural beauty. Experience the dolce vita in exclusive cliffside hotels overlooking the Mediterranean Sea.',
    highlights: [
      'Private yacht tours',
      'Limoncello tasting experiences',
      'Exclusive cooking classes',
      'Historic villa tours',
      'Scenic helicopter transfers'
    ],
    location: {
      country: 'Italy',
      region: 'Campania',
      coordinates: {
        latitude: 40.6333,
        longitude: 14.6029
      }
    }
  },
  {
    id: 4,
    title: 'Greek Islands',
    description: 'Luxury villas and seaside retreats',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3',
    longDescription: 'Discover the timeless beauty of the Greek Islands, where luxury meets ancient history. Our carefully selected villas and boutique hotels offer breathtaking views of the Aegean Sea and unparalleled Greek hospitality.',
    highlights: [
      'Private villa pools',
      'Sunset sailing tours',
      'Ancient ruins exploration',
      'Traditional cooking classes',
      'Island hopping by yacht'
    ],
    location: {
      country: 'Greece',
      region: 'Mediterranean',
      coordinates: {
        latitude: 37.0902,
        longitude: 25.1540
      }
    }
  }
];

export const luxuryExperiences: Record<number, LuxuryExperience[]> = {
  1: [ // Maldives experiences
    {
      id: 101,
      title: 'Private Sunset Yacht Journey',
      description: 'Experience the magic of Maldivian waters aboard a luxury yacht',
      duration: '4 hours',
      price: '$2,500',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3',
      included: ['Champagne service', 'Gourmet dinner', 'Professional crew', 'Snorkeling equipment'],
      highlights: ['Dolphin watching', 'Sunset views', 'Gourmet dining']
    },
    {
      id: 102,
      title: 'Underwater Spa Journey',
      description: 'World\'s first underwater spa treatment',
      duration: '2 hours',
      price: '$800',
      image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-4.0.3',
      included: ['Consultation', 'Treatment', 'Relaxation time', 'Herbal tea service'],
      highlights: ['Underwater views', 'Signature treatments', 'Premium products']
    }
  ],
  4: [ // Greek Islands experiences
    {
      id: 401,
      title: 'Private Sunset Sailing',
      description: 'Sail through the crystal-clear waters of the Aegean Sea',
      duration: '4 hours',
      price: '$1,800',
      image: 'https://images.unsplash.com/photo-1564671546498-09a366692274?ixlib=rb-4.0.3',
      included: ['Premium wines', 'Greek meze', 'Professional crew', 'Swimming stops'],
      highlights: ['Santorini caldera views', 'Sunset photography', 'Local wine tasting']
    },
    {
      id: 402,
      title: 'Ancient Greece Private Tour',
      description: 'Exclusive guided tour of ancient Greek ruins',
      duration: '6 hours',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1608797178974-15b35a8eff29?ixlib=rb-4.0.3',
      included: ['Expert guide', 'Luxury transport', 'Gourmet lunch', 'Museum tickets'],
      highlights: ['Skip-the-line access', 'Historical insights', 'Photo opportunities']
    }
  ]
};

export const accommodations: Record<number, Accommodation[]> = {
  1: [ // Maldives accommodations
    {
      id: 201,
      name: 'Royal Overwater Villa',
      description: 'Luxurious overwater villa with private pool and direct ocean access',
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3',
      rating: 5,
      amenities: [
        'Private infinity pool',
        'Butler service',
        'Direct ocean access',
        'Outdoor shower',
        'Wine cellar'
      ],
      priceRange: '$2,000 - $5,000 per night',
      location: 'North Male Atoll'
    },
    {
      id: 202,
      name: 'Beach House Suite',
      description: 'Beachfront suite with private garden and direct beach access',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3',
      rating: 5,
      amenities: [
        'Private garden',
        'Beachfront location',
        'Outdoor dining area',
        'Personal chef',
        'Spa bathroom'
      ],
      priceRange: '$1,500 - $3,000 per night',
      location: 'South Male Atoll'
    }
  ],
  4: [ // Greek Islands accommodations
    {
      id: 401,
      name: 'Cliffside Villa Suite',
      description: 'Luxurious villa with infinity pool and caldera views',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3',
      rating: 5,
      amenities: [
        'Private infinity pool',
        'Caldera views',
        'Butler service',
        'Wine cellar',
        'Outdoor dining terrace'
      ],
      priceRange: '$2,500 - $5,500 per night',
      location: 'Santorini'
    },
    {
      id: 402,
      name: 'Beachfront Luxury Villa',
      description: 'Elegant beachfront villa with private access to Ornos Beach',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3',
      rating: 5,
      amenities: [
        'Private beach access',
        'Infinity pool',
        'Personal chef',
        'Spa room',
        'Helipad'
      ],
      priceRange: '$3,000 - $6,000 per night',
      location: 'Mykonos'
    }
  ]
};
