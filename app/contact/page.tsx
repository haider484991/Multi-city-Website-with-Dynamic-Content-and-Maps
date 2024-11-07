export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 tracking-tight">
            Contact
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Email: info@cityguide.com
            </p>
            <p>
              Phone: 1-800-CITY-GUIDE
            </p>
            <p>
              Address:<br />
              123 City Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}