// Tourist Spot types
export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  location: string;
  category: SpotCategory;
  budgetLevel: BudgetLevel;
  estimatedCost: number;
  bestTimeToVisit: string;
  imageUrl?: string;
}

export type SpotCategory =
  | "beach"
  | "waterfall"
  | "mountain"
  | "cultural"
  | "adventure"
  | "nature"
  | "historical";

export type BudgetLevel = "budget" | "moderate" | "luxury";

// Accommodation types
export interface Accommodation {
  id: string;
  name: string;
  type: AccommodationType;
  location: string;
  pricePerNight: number;
  budgetLevel: BudgetLevel;
  amenities: string[];
  imageUrl?: string;
}

export type AccommodationType =
  | "hotel"
  | "resort"
  | "homestay"
  | "inn"
  | "camping";

// Recommendation form input
export interface RecommendationFormInput {
  budget: number;
  duration: number; // days
  preferences: SpotCategory[];
  accommodationType?: AccommodationType;
  groupSize: number;
}

// Recommendation result
export interface RecommendationResult {
  spots: TouristSpot[];
  accommodations: Accommodation[];
  suggestedItinerary: ItineraryDay[];
  totalEstimatedCost: number;
}

export interface ItineraryDay {
  day: number;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  spot: TouristSpot;
  timeSlot: string;
  notes?: string;
}
