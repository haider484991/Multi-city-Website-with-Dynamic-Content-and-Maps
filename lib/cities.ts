export interface City {
  id: string;
  name: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  population: number;
  landmarks: string[];
  metaDescription: string;
}

export const cities: City[] = [
  {
    id: 'new-york-ny',
    name: 'New York',
    state: 'NY',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    description: 'New York City is the most populous city in the United States, known for its iconic skyline, diverse culture, and vibrant arts scene.',
    population: 8419000,
    landmarks: ['Statue of Liberty', 'Central Park', 'Empire State Building'],
    metaDescription: 'Discover New York City - The cultural and financial capital of the world. Explore iconic landmarks, diverse neighborhoods, and endless opportunities.'
  },
  {
    id: 'los-angeles-ca',
    name: 'Los Angeles',
    state: 'CA',
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    description: 'Los Angeles is the entertainment capital of the world, featuring beautiful beaches, year-round sunshine, and the glamour of Hollywood.',
    population: 3898000,
    landmarks: ['Hollywood Sign', 'Santa Monica Pier', 'Griffith Observatory'],
    metaDescription: 'Experience Los Angeles - The entertainment capital of the world. From Hollywood glamour to beautiful beaches, discover the magic of LA.'
  }
  // Add more cities as needed
];

export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getAllCityIds(): string[] {
  return cities.map(city => city.id);
}