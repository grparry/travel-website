export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  highlights?: string[];
  location?: {
    country: string;
    region: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface LuxuryExperience {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  included?: string[];
  highlights?: string[];
}

export interface Accommodation {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  amenities: string[];
  priceRange: string;
  location: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation: string;
  meals: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

export interface Itinerary {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  price: string;
  image: string;
  destinations: string[];
  highlights: string[];
  included: string[];
  days: ItineraryDay[];
}
