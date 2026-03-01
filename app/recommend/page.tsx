"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { SpotCategory, AccommodationType } from "@/types";

const SPOT_CATEGORIES: SpotCategory[] = [
  "beach",
  "waterfall",
  "mountain",
  "cultural",
  "adventure",
  "nature",
  "historical",
];

const ACCOMMODATION_TYPES: AccommodationType[] = [
  "hotel",
  "resort",
  "homestay",
  "inn",
  "camping",
];

export default function RecommendPage() {
  const router = useRouter();
  const [budget, setBudget] = useState(5000);
  const [duration, setDuration] = useState(3);
  const [preferences, setPreferences] = useState<SpotCategory[]>([]);
  const [accommodationType, setAccommodationType] =
    useState<AccommodationType>("resort");
  const [groupSize, setGroupSize] = useState(2);
  const [loading, setLoading] = useState(false);

  const togglePreference = (cat: SpotCategory) => {
    setPreferences((p) =>
      p.includes(cat) ? p.filter((c) => c !== cat) : [...p, cat]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          budget,
          duration,
          preferences,
          accommodationType,
          groupSize,
        }),
      });
      const data = await res.json();
      if (data.result) {
        sessionStorage.setItem("recommendation", JSON.stringify(data.result));
        router.push("/results");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Get Your Recommendations
      </h1>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
        <div>
          <label className="block font-medium text-slate-700 mb-2">
            Budget (₱)
          </label>
          <input
            type="number"
            min={1000}
            step={500}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block font-medium text-slate-700 mb-2">
            Trip Duration (days)
          </label>
          <input
            type="number"
            min={1}
            max={14}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block font-medium text-slate-700 mb-2">
            Group Size
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={groupSize}
            onChange={(e) => setGroupSize(Number(e.target.value))}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block font-medium text-slate-700 mb-2">
            Preferred Spot Types
          </label>
          <div className="flex flex-wrap gap-2">
            {SPOT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => togglePreference(cat)}
                className={`px-3 py-1 rounded-full text-sm ${
                  preferences.includes(cat)
                    ? "bg-primary-600 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium text-slate-700 mb-2">
            Accommodation Type
          </label>
          <select
            value={accommodationType}
            onChange={(e) =>
              setAccommodationType(e.target.value as AccommodationType)
            }
            className="w-full border rounded-lg px-4 py-2"
          >
            {ACCOMMODATION_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50"
        >
          {loading ? "Getting recommendations..." : "Get Recommendations"}
        </button>
      </form>
    </div>
  );
}
