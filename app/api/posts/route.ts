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
