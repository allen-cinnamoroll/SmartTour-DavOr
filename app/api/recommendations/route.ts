import { NextResponse } from "next/server";
import { getRecommendations } from "@/lib/recommendation";
import type { RecommendationFormInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json() as RecommendationFormInput;
    const { budget, duration, preferences, accommodationType, groupSize } = body;

    if (!budget || !duration) {
      return NextResponse.json(
        { error: "Budget and duration are required" },
        { status: 400 }
      );
    }

    const result = getRecommendations({
      budget: Number(budget),
      duration: Number(duration),
      preferences: Array.isArray(preferences) ? preferences : [],
      accommodationType,
      groupSize: Number(groupSize) || 1,
    });

    return NextResponse.json({ result });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}
