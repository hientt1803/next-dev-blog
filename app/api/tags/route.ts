import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const Response = NextResponse;

export async function GET() {
  const tags = await fetchQuery(api.tags.getAllTags);
  return Response.json(tags);
}
