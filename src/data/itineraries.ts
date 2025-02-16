import { Itinerary } from '../types';

export const itineraries: Itinerary[] = [
  {
    id: 1,
    title: 'Mediterranean Luxury Escape',
    subtitle: 'Amalfi Coast & Greek Islands',
    description: 'Experience the height of Mediterranean luxury with this carefully curated 10-day journey through Italy\'s stunning Amalfi Coast and the pristine Greek Islands.',
    duration: 10,
    price: '$15,000',
    image: 'https://images.unsplash.com/photo-1533165955744-2304f1cc031b?ixlib=rb-4.0.3',
    destinations: ['Amalfi Coast', 'Santorini', 'Mykonos'],
    highlights: [
      'Private yacht tours along the Amalfi Coast',
      'Exclusive wine tasting experiences',
      'Helicopter transfer to Santorini',
      'Private villa accommodations',
      'Michelin-starred dining experiences'
    ],
    included: [
      'Luxury accommodations',
      'Private transfers',
      'Expert local guides',
      'Daily breakfast',
      'Selected lunches and dinners',
      'Premium activities and experiences'
    ],
    days: [
      {
        day: 1,
        title: 'Welcome to the Amalfi Coast',
        description: 'Arrive in style with a private helicopter transfer from Naples to your luxury villa in Positano.',
        activities: [
          'Private helicopter transfer',
          'Welcome champagne reception',
          'Sunset aperitivo experience'
        ],
        accommodation: 'Le Sirenuse, Positano',
        meals: {
          dinner: 'Welcome dinner at La Sponda (Michelin-starred)'
        }
      },
      {
        day: 2,
        title: 'Exploring Positano',
        description: 'Discover the charm of Positano with a private guide and enjoy a sunset yacht cruise.',
        activities: [
          'Private walking tour of Positano',
          'Luxury boutique shopping experience',
          'Sunset yacht cruise with champagne'
        ],
        accommodation: 'Le Sirenuse, Positano',
        meals: {
          breakfast: 'Breakfast at Le Sirenuse',
          lunch: 'Lunch at La Tagliata',
          dinner: 'Dinner aboard private yacht'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Alpine Luxury Adventure',
    subtitle: 'Swiss Alps & French Riviera',
    description: 'Combine the thrill of the Alps with the glamour of the French Riviera in this exclusive 8-day journey.',
    duration: 8,
    price: '$12,000',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3',
    destinations: ['Swiss Alps', 'Monaco', 'Saint-Tropez'],
    highlights: [
      'Private ski instruction',
      'Helicopter skiing experience',
      'Monaco Grand Prix viewing',
      'Luxury spa treatments',
      'Yacht day in Saint-Tropez'
    ],
    included: [
      'Five-star accommodations',
      'Private jet transfers',
      'Professional ski instruction',
      'VIP access to events',
      'All meals at premium venues',
      'Luxury spa access'
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Zermatt',
        description: 'Arrive via private transfer to your luxury chalet with views of the Matterhorn.',
        activities: [
          'Private transfer from Zurich',
          'Chalet welcome reception',
          'Spa treatment'
        ],
        accommodation: 'Omnia Mountain Lodge, Zermatt',
        meals: {
          dinner: 'Private chef dinner in chalet'
        }
      },
      {
        day: 2,
        title: 'Alpine Adventure',
        description: 'Experience the thrill of helicopter skiing followed by luxury spa treatments.',
        activities: [
          'Helicopter skiing experience',
          'Gourmet mountain lunch',
          'Afternoon spa session'
        ],
        accommodation: 'Omnia Mountain Lodge, Zermatt',
        meals: {
          breakfast: 'Breakfast at Omnia',
          lunch: 'Mountain lodge lunch',
          dinner: 'Dinner at Chez Vrony'
        }
      }
    ]
  }
];
