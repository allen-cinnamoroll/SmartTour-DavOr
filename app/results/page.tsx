"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { RecommendationResult } from "@/types";

export default function ResultsPage() {
  const [result, setResult] = useState<RecommendationResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("recommendation");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 mb-4">
          No recommendations found. Get recommendations first.
        </p>
        <Link
          href="/recommend"
          className="text-primary-600 font-medium hover:underline"
        >
          Go to recommendation form
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Your Recommendations
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Suggested Spots</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {result.spots.map((spot) => (
            <div
              key={spot.id}
              className="p-4 border rounded-xl bg-white shadow-sm"
            >
              <h3 className="font-semibold">{spot.name}</h3>
              <p className="text-slate-600 text-sm">{spot.description}</p>
              <p className="text-primary-600 font-medium mt-2">
                ~₱{spot.estimatedCost}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Accommodations</h2>
        <div className="space-y-4">
          {result.accommodations.map((acc) => (
            <div
              key={acc.id}
              className="p-4 border rounded-xl bg-white shadow-sm"
            >
              <h3 className="font-semibold">{acc.name}</h3>
              <p className="text-slate-600 text-sm">{acc.location}</p>
              <p className="text-primary-600 font-medium">
                ₱{acc.pricePerNight}/night
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-lg font-semibold text-slate-800">
          Total Estimated Cost: ₱{result.totalEstimatedCost.toLocaleString()}
        </p>
      </section>

      <Link
        href="/itinerary"
        className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700"
      >
        View Full Itinerary
      </Link>
    </div>
  );
}
