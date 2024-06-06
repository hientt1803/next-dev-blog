import { api } from "@/convex/_generated/api";
import { IPosts } from "@/types";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const Response = NextResponse;

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const post = await fetchQuery(api.posts.getPostBySlug, {
    slug: params.slug,
  });

  if (!post) {
    return Response.json(null);
  }

  await fetchMutation(api.posts.updatePostView, {
    slug: params.slug,
  });

  return Response.json(post);
}
