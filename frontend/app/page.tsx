import { CalendarRange, MapPin, Route, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="border-t border-slate-100 bg-gradient-to-b from-white to-sky-50 md:-mt-10 lg:-mt-14"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <FeatureCard
                icon={<MapPin className="h-4 w-4" />}
                title="Discover Destinations"
                description="Uncover beaches, waterfalls, and cultural spots across Davao Oriental, curated for different travel styles."
              />
              <FeatureCard
                icon={<Sparkles className="h-4 w-4" />}
                title="Smart Recommendations"
                description="Get suggestions based on your interests, budget, and schedule, no generic lists, just relevant options."
              />
              <FeatureCard
                icon={<CalendarRange className="h-4 w-4" />}
                title="Plan Your Stay"
                description="Balance travel time, activities, and rest with trip outlines that make the most of every day."
              />
              <FeatureCard
                icon={<Route className="h-4 w-4" />}
                title="Generate Itinerary"
                description="Turn your preferences into a clear, day-by-day itinerary you can bring straight to your trip."
              />
            </div>
          </div>
        </section>

        <section id="signup" className="border-t border-slate-100 bg-sky-50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-md space-y-3">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Sign up to personalize your next trip
              </h2>
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
