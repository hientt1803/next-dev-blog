import { api } from "@/convex/_generated/api";
import { IPosts } from "@/types";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const Response = NextResponse;

interface IPostReq {
  title: string;
  desc: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const post: IPosts | null = await fetchQuery(api.posts.getPostBySlug, {
      slug: slug,
    });

    if (!post) {
      return Response.json({ message: "Post not found!", status: 204 });
    }

    return Response.json({ post });
  }

  const listPosts: IPosts[] = await fetchQuery(api.posts.getAllPost);
  return Response.json(listPosts);
}

export async function POST(req: NextRequest) {
  const data: IPostReq = await req.json();

  try {
    await fetchMutation(api.posts.createPost, {
      title: data.title,
      desc: data.desc,
    });
  } catch (error) {
    console.log(error);
  }

  return Response.json(data);
}
