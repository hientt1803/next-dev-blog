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

export default defineSchema({
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
    user_id: v.optional(v.id("users")),
    tag_id: v.optional(v.id("tags")),
  })
    .searchIndex("search_title_desc_slug", {
      searchField: "title",
      filterFields: ["title", "desc", "slug"],
    })
    .index("by_slug_title_status_tagId_userId", [
      "slug",
      "title",
      "status",
      "tag_id",
      "user_id",
    ]),
  comments: defineTable({
    post_id: v.id("posts"),
    user_id: v.id("users"),
    content: v.string(),
    star: v.number(),
    like_count: v.number(),
  }).index("by_postId_userId", ["post_id", "user_id"]),
  tags: defineTable({
    slug: v.string(),
    name: v.string(),
    description: v.string(),
    // postsIds: v.optional(v.array(v.id("posts"))),
  }),
});
