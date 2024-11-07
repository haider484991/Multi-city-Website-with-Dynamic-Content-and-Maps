import Link from 'next/link';
import { cities } from '@/lib/cities';

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 tracking-tight">
            Cities
          </h1>
          
          <div className="space-y-8">
            {cities.map((city) => (
              <article key={city.id} className="border-t pt-8 first:border-t-0 first:pt-0">
                <Link 
                  href={`/city/${city.id}`}
                  className="block group"
                >
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                    {city.name}, {city.state}
                  </h2>
                  <p className="text-gray-600">
                    {city.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}