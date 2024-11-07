"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface CityMapProps {
  lat: number;
  lng: number;
  cityName: string;
}

export default function CityMap({ lat, lng, cityName }: CityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const map = new Map(mapRef.current!, {
        center: { lat, lng },
        zoom: 12,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [
              { saturation: -100 },
              { lightness: 30 }
            ]
          }
        ]
      });

      new Marker({
        position: { lat, lng },
        map,
        title: cityName
      });
    };

    initMap();
  }, [lat, lng, cityName]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
      aria-label={`Map showing location of ${cityName}`}
    />
  );
}