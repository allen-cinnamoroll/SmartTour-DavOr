"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { RecommendationResult } from "@/types";

export default function ItineraryPage() {
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
          No itinerary found. Get recommendations first.
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
        Your Trip Itinerary
      </h1>

      <div className="space-y-6">
        {result.suggestedItinerary.map((day) => (
          <div
            key={day.day}
            className="border rounded-xl p-6 bg-white shadow-sm"
          >
            <h2 className="text-xl font-semibold text-primary-700 mb-4">
              Day {day.day}
            </h2>
            <div className="space-y-4">
              {day.activities.map((act, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-sm font-medium text-slate-500 w-24">
                    {act.timeSlot}
                  </span>
                  <div>
                    <h3 className="font-medium">{act.spot.name}</h3>
                    <p className="text-slate-600 text-sm">
                      {act.spot.description}
                    </p>
                    {act.notes && (
                      <p className="text-slate-500 text-xs mt-1">{act.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/recommend"
        className="inline-block text-primary-600 font-medium hover:underline"
      >
        ← Modify recommendations
      </Link>
    </div>
  );
}
