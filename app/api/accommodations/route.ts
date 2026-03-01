import { NextResponse } from "next/server";
import { sampleAccommodations } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ accommodations: sampleAccommodations });
}
