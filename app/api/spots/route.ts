import { NextResponse } from "next/server";
import { sampleSpots } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ spots: sampleSpots });
}
