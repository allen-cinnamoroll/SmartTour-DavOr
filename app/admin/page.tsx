"use client";

import { useEffect, useState } from "react";
import type { TouristSpot, Accommodation } from "@/types";

const ADMIN_PASSWORD = "admin123"; // Replace with proper auth later

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [spots, setSpots] = useState<TouristSpot[]>([]);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Invalid password");
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetch("/api/spots")
        .then((res) => res.json())
        .then((data) => setSpots(data.spots ?? []));
      fetch("/api/accommodations")
        .then((res) => res.json())
        .then((data) => setAccommodations(data.accommodations ?? []));
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter admin password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Tourist Spots ({spots.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-slate-100">
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Category</th>
                <th className="border p-2 text-left">Location</th>
                <th className="border p-2 text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              {spots.map((s) => (
                <tr key={s.id}>
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.category}</td>
                  <td className="border p-2">{s.location}</td>
                  <td className="border p-2">₱{s.estimatedCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Accommodations ({accommodations.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-slate-100">
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Location</th>
                <th className="border p-2 text-left">Price/Night</th>
              </tr>
            </thead>
            <tbody>
              {accommodations.map((a) => (
                <tr key={a.id}>
                  <td className="border p-2">{a.name}</td>
                  <td className="border p-2">{a.type}</td>
                  <td className="border p-2">{a.location}</td>
                  <td className="border p-2">₱{a.pricePerNight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="text-slate-500 text-sm">
        Add CRUD operations and proper auth (e.g., NextAuth) to manage data.
      </p>
    </div>
  );
}
