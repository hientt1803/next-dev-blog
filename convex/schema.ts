import { migrationsTable } from "convex-helpers/server/migrations";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const roles = v.union(v.literal("admin"), v.literal("user"));
export const POST_STATUS = v.union(
  v.literal("draft"),
  v.literal("published"),
  v.literal("arcguved")
);
export type POST_STATUS_TYPE = Infer<typeof POST_STATUS>;
export const fileTypes = v.optional(v.literal("image"));

export default defineSchema(
  {
    users: defineTable({
      username: v.string(),
      full_name: v.optional(v.string()),
      email: v.string(),
      password: v.string(),
      bio: v.optional(v.string()),
      avartar: v.optional(v.string()),
      tokenIdentifier: v.string(),
    }).index("by_tokenIdentifier", ["tokenIdentifier"]),
    posts: defineTable({
      slug: v.string(),
      title: v.string(),
      excerpt: v.string(),
      desc: v.string(),
      image: v.optional(v.string()),
      views: v.number(),
      status: POST_STATUS,
      userId: v.optional(v.id("users")),
      tagId: v.optional(v.id("tags")),
      user_id: v.optional(v.string()),
      tag_id: v.optional(v.string()),
    })
      .searchIndex("search_title_desc_slug", {
        searchField: "title",
        filterFields: ["title", "desc", "slug"],
      })
      .index("by_slug", ["slug"])
      .index("by_tagId", ["tagId"]),
    comments: defineTable({
      postId: v.id("posts"),
      userId: v.id("users"),
      content: v.string(),
      star: v.number(),
      like_count: v.number(),
    }).index("by_postId_userId", ["postId", "userId"]),
    tags: defineTable({
      slug: v.string(),
      name: v.string(),
      description: v.string(),
      // postsIds: v.optional(v.array(v.id("posts"))),
    }),
  },
  {
    strictTableNameTypes: false,
  }
);
