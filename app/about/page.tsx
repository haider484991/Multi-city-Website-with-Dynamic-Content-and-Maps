export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 tracking-tight">
            About
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              CityGuide is your comprehensive resource for exploring urban life across the United States. We provide detailed insights into each city's unique characteristics, from landmarks to local culture.
            </p>
            <p>
              Founded with the vision of making city exploration more accessible, we've grown into a trusted source for urban discovery. We believe that every city has a unique story to tell, and we're here to help tell those stories.
            </p>
            <p>
              Our mission is to provide accurate, up-to-date information about cities across the United States, helping visitors and residents alike make the most of their urban experiences.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}