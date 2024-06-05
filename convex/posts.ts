import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllPost = query({
  args: {},
  async handler(ctx, args) {
    const post = await ctx.db.query("posts").collect();

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

    return post;
  },
});

export const createPosts = mutation({
  args: { title: v.string(), excerpt: v.string(), desc: v.string() },
  async handler(ctx, args) {
    const identity = await ctx.auth.getUserIdentity();

    // if (!identity) {
    //   throw new Error("u do not have permission");
    // }

    // const user = await ctx.db
    //   .withIndex("by_tokenIdentifier", (q) =>
    //     q.eq("tokenIdentifier", identity?.tokenIdentifier)
    //   )
    //   .first();

    // if (!user) {
    //   return null;
    // }
    const formattedTitle = args.title.replace(/\s/g, "-").toLowerCase();

    await ctx.db.insert("posts", {
      slug: formattedTitle,
      title: args.title,
      excerpt: args.excerpt,
      desc: args.desc,
      status: "draft",
      //   user_id: user._id,
      views: 0,
      image: "",
    });

    return { message: "create categories completed" };
  },
});
