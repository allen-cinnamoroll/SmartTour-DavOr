import { CalendarRange, MapPin, Route, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="border-t border-slate-800 bg-slate-950/95"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <header className="max-w-xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Why Smart Tour DavOr
              </p>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                A smarter way to explore Davao Oriental
              </h2>
              <p className="text-sm text-slate-300">
                From sunrise surf sessions to waterfall hikes, Smart Tour DavOr
                helps you design trips that feel personal, efficient, and easy
                to follow—without the planning overwhelm.
              </p>
            </header>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              <FeatureCard
                icon={<MapPin className="h-4 w-4" />}
                title="Discover Destinations"
                description="Uncover beaches, waterfalls, and cultural spots across Davao Oriental, curated for different travel styles."
              />
              <FeatureCard
                icon={<Sparkles className="h-4 w-4" />}
                title="Smart Recommendations"
                description="Get suggestions based on your interests, budget, and schedule—no generic lists, just relevant options."
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

        <section
          id="signup"
          className="border-t border-slate-800 bg-gradient-to-r from-sky-900/40 via-slate-950 to-emerald-900/40"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-md space-y-3">
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Sign up to personalize your next trip
              </h2>
              <p className="text-sm text-slate-300">
                This is a frontend-only preview. Connect your future signup flow
                here to let travelers save preferences and itineraries.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
