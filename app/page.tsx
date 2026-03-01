import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Discover Davao Oriental
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Get personalized recommendations for tourist spots, accommodations,
          and itineraries based on your budget and preferences.
        </p>
        <Link
          href="/recommend"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
        >
          Plan Your Trip
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Link
          href="/explore"
          className="p-6 border rounded-xl hover:border-primary-300 hover:shadow-md transition"
        >
          <h2 className="font-semibold text-lg mb-2">Explore Spots</h2>
          <p className="text-slate-600 text-sm">
            Browse beaches, waterfalls, and cultural sites across Davao Oriental.
          </p>
        </Link>
        <Link
          href="/recommend"
          className="p-6 border rounded-xl hover:border-primary-300 hover:shadow-md transition"
        >
          <h2 className="font-semibold text-lg mb-2">Get Recommendations</h2>
          <p className="text-slate-600 text-sm">
            Answer a few questions and receive a tailored travel plan.
          </p>
        </Link>
        <Link
          href="/itinerary"
          className="p-6 border rounded-xl hover:border-primary-300 hover:shadow-md transition"
        >
          <h2 className="font-semibold text-lg mb-2">View Itinerary</h2>
          <p className="text-slate-600 text-sm">
            See your suggested day-by-day itinerary after getting recommendations.
          </p>
        </Link>
      </section>
    </div>
  );
}
