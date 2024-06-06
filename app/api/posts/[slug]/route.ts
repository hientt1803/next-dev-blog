import { api } from "@/convex/_generated/api";
import { IPosts } from "@/types";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const Response = NextResponse;

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const post: IPosts | null = await fetchQuery(api.posts.getPostBySlug, {
    slug: params.slug,
  });

  if (!post) {
    return Response.json({ message: "Post not found!", status: 204 });
  }

  return Response.json(post);
}
