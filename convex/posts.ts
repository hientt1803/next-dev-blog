import { ConvexError, v } from "convex/values";
import { mutation, MutationCtx, query, QueryCtx } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

async function hasAccessPosts(ctx: QueryCtx | MutationCtx, orgId: string) {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new ConvexError("Not authenticated!");
  }

  const user = await ctx.db
    .query("users")
    .withIndex("by_tokenIdentifier", (q) =>
      q.eq("tokenIdentifier", identity.tokenIdentifier)
    )
    .first();

  if (!user) {
    return null;
  }

  return { user };
}

export const getAllPost = query({
  args: {},
  async handler(ctx, args) {
    const post = await ctx.db.query("posts").collect();
    return post;
  },
});

export const getAllPostPaginate = query({
  args: { paginationOpts: paginationOptsValidator },
  async handler(ctx, args) {
    const post = await ctx.db
      .query("posts")
      .order("desc")
      .paginate(args.paginationOpts);
    return post;
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  async handler(ctx, args) {
    const post = await ctx.db
      .query("posts")
      .withIndex("by_slug_title_status_catId_tagId", (q) =>
        q.eq("slug", args.slug)
      )
      .first();

    if (!post) {
      return null;
    }

    return post;
  },
});

export const createPost = mutation({
  args: { title: v.string(), desc: v.string() },
  async handler(ctx, args) {
    const formattedTitle = args.title.replace(/\s/g, "-").toLowerCase();
    const cleanExcerpt = cleanString(args.desc);

    await ctx.db.insert("posts", {
      slug: formattedTitle,
      title: args.title,
      excerpt: cleanExcerpt,
      desc: args.desc,
      status: "draft",
      //   user_id: user._id,
      views: 0,
      image: "",
    });

    return { message: "create categories completed" };
  },
});

export const updatePostView = mutation({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("posts")
      .withIndex("by_slug_title_status_catId_tagId", (q) =>
        q.eq("slug", args.slug)
      )
      .first();

    if (!post) {
      return {};
    }

    const newViews = (post.views += 1);
    await ctx.db.patch(post._id, { views: newViews });
  },
});

function cleanString(input: string) {
  let cleaned = input.replace(/[^a-zA-Z0-9\s]/g, " ");

  cleaned = cleaned.replace(/\s+/g, " ");

  cleaned = cleaned.trim();

  return cleaned;
}
