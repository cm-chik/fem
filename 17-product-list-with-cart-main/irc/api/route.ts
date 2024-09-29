import { NextResponse } from "next/server";
import { default as products } from "@/data/data.json";
// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return NextResponse.json({ message: products }, { status: 200 });
}
