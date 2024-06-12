import { ConvexError, v } from "convex/values";
import { mutation, MutationCtx, query, QueryCtx } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import {
  getAll,
  getOneFrom,
  getManyFrom,
  getManyVia,
} from "convex-helpers/server/relationships";

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
    const posts = await ctx.db.query("posts").collect();

    return posts;
  },
});

export const getAllPostPaginate = query({
  args: {
    paginationOpts: paginationOptsValidator,
  },
  async handler(ctx, args) {
    const postsData = await ctx.db
      .query("posts")
      .order("desc")
      .paginate(args.paginationOpts);

    const updatedPosts = await Promise.all(
      postsData.page.map(async (post) => {
        const tag = await ctx.db
          .query("tags")
          .filter((q) => q.eq(q.field("_id"), post.tag_id))
          .first();

        const user = await ctx.db
          .query("users")
          .filter((q) => q.eq(q.field("_id"), post.user_id))
          .first();

        if (tag && user) {
          return { ...post, tag, user };
        } else {
          return post;
        }
      })
    );

    return {
      ...postsData,
      page: updatedPosts,
    };
  },
});

export const getAllPostPaginateWithParamsAndSearchTerm = query({
  args: {
    paginationOpts: paginationOptsValidator,
    tagId: v.optional(v.id("tags")),
    searchTerm: v.optional(v.string()),
  },
  async handler(ctx, args) {
    const { tagId, searchTerm, paginationOpts } = args;
    let query = ctx.db.query("posts");

    if (tagId) {
      query = query.filter((q) => q.eq(q.field("tag_id"), tagId));
    }

    if (searchTerm) {
      query = query.filter((q) => q.eq(q.field("title"), searchTerm));
    }

    const postsData = await query.order("desc").paginate(paginationOpts);

    const updatedPosts = await Promise.all(
      postsData.page.map(async (post) => {
        const [tag, user] = await Promise.all([
          ctx.db
            .query("tags")
            .filter((q) => q.eq(q.field("_id"), post.tag_id))
            .first(),
          ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("_id"), post.user_id))
            .first(),
        ]);

        return { ...post, tag, user };
      })
    );

    return {
      ...postsData,
      page: updatedPosts,
    };
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  async handler(ctx, args) {
    const post = await ctx.db
      .query("posts")
      .withIndex("by_slug_title_status_tagId_userId", (q) =>
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
  args: { title: v.string(), desc: v.string(), tagId: v.id("tags") },
  async handler(ctx, args) {
    const formattedTitle = args.title.replace(/\s/g, "-").toLowerCase();
    const cleanExcerpt = cleanString(args.desc);

    await ctx.db.insert("posts", {
      slug: formattedTitle,
      title: args.title,
      excerpt: cleanExcerpt,
      desc: args.desc,
      status: "draft",
      tag_id: args.tagId,
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
      .withIndex("by_slug_title_status_tagId_userId", (q) =>
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
