import type {
  RecommendationFormInput,
  RecommendationResult,
  TouristSpot,
  Accommodation,
  ItineraryDay,
} from "@/types";
import { sampleSpots, sampleAccommodations } from "./data";

/**
 * Rules-based recommendation logic (placeholder).
 * Replace with ML, collaborative filtering, or more sophisticated rules.
 */
export function getRecommendations(
  input: RecommendationFormInput
): RecommendationResult {
  const budgetPerDay = input.budget / input.duration;

  // Rule 1: Filter spots by budget level
  const budgetLevel =
    budgetPerDay < 1000 ? "budget" : budgetPerDay < 3000 ? "moderate" : "luxury";

  // Rule 2: Filter by user preferences
  const preferredSpots = sampleSpots.filter(
    (spot) =>
      input.preferences.includes(spot.category) &&
      spot.budgetLevel === budgetLevel
  );

  // Rule 3: Fallback to all spots in budget if no preference match
  const spots =
    preferredSpots.length > 0
      ? preferredSpots
      : sampleSpots.filter((s) => s.budgetLevel === budgetLevel);

  // Rule 4: Limit spots based on duration (1-2 per day)
  const maxSpots = Math.min(spots.length, input.duration * 2);
  const selectedSpots = spots.slice(0, maxSpots);

  // Rule 5: Select accommodation by budget
  const accommodationBudget = budgetPerDay * 0.4; // 40% for accommodation
  const accommodations = sampleAccommodations.filter(
    (acc) => acc.pricePerNight <= accommodationBudget * 1.2
  );
  const selectedAccommodation =
    accommodations[0] ?? sampleAccommodations[0];

  // Rule 6: Build simple itinerary
  const itinerary = buildItinerary(selectedSpots, input.duration);

  // Rule 7: Calculate total cost
  const spotsCost = selectedSpots.reduce((sum, s) => sum + s.estimatedCost, 0);
  const accommodationCost = selectedAccommodation.pricePerNight * input.duration;
  const totalEstimatedCost = spotsCost + accommodationCost;

  return {
    spots: selectedSpots,
    accommodations: [selectedAccommodation],
    suggestedItinerary: itinerary,
    totalEstimatedCost,
  };
}

function buildItinerary(
  spots: TouristSpot[],
  duration: number
): ItineraryDay[] {
  const days: ItineraryDay[] = [];
  let spotIndex = 0;

  for (let day = 1; day <= duration; day++) {
    const activities = [];
    if (spotIndex < spots.length) {
      activities.push({
        spot: spots[spotIndex],
        timeSlot: "Morning",
        notes: "Main activity for the day",
      });
      spotIndex++;
    }
    if (spotIndex < spots.length) {
      activities.push({
        spot: spots[spotIndex],
        timeSlot: "Afternoon",
        notes: "Secondary activity",
      });
      spotIndex++;
    }
    days.push({ day, activities });
  }

  return days;
}
