"use client";

import { useEffect, useState } from "react";
import type { TouristSpot } from "@/types";

export default function ExplorePage() {
  const [spots, setSpots] = useState<TouristSpot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data.spots ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-slate-600">Loading spots...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Explore Tourist Spots
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <div
            key={spot.id}
            className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
              {spot.category}
            </span>
            <h2 className="font-semibold text-lg mt-2">{spot.name}</h2>
            <p className="text-slate-600 text-sm mt-1">{spot.description}</p>
            <p className="text-slate-500 text-xs mt-2">{spot.location}</p>
            <p className="text-primary-600 font-medium mt-2">
              ~₱{spot.estimatedCost} / visit
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
