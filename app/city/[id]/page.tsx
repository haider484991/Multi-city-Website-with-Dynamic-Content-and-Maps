import { notFound } from 'next/navigation';
import { getCityById, getAllCityIds } from '@/lib/cities';
import CityMap from '@/components/CityMap';

interface CityPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const cityIds = getAllCityIds();
  return cityIds.map((id) => ({
    id: id,
  }));
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityById(params.id);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 tracking-tight">
            {city.name}, {city.state}
          </h1>
          
          <div className="space-y-8 text-lg text-gray-600">
            <p>{city.description}</p>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black">Population</h2>
              <p>{city.population.toLocaleString()} residents</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black">Landmarks</h2>
              <ul className="list-disc pl-5 space-y-2">
                {city.landmarks.map((landmark) => (
                  <li key={landmark}>{landmark}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black">Location</h2>
              <CityMap 
                lat={city.coordinates.lat}
                lng={city.coordinates.lng}
                cityName={city.name}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}