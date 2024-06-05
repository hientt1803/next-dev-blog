import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const roles = v.union(v.literal("admin"), v.literal("user"));
export const POST_STATUS = v.union(
  v.literal("draft"),
  v.literal("published"), 
  v.literal("arcguved")
);
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
  categories: defineTable({
    slug: v.string(),
    name: v.string(),
    desc: v.optional(v.string()),
  }),
  posts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    desc: v.string(),
    image: v.optional(v.string()),
    views: v.number(),
    status: POST_STATUS,
    user_id: v.optional(v.id("users")),
    cat_id: v.optional(v.id("categories")),
    tag_id: v.optional(v.id("tags")),
  }).index("by_slug_title_status_catId_tagId", [
    "slug",
    "title",
    "status",
    "cat_id",
    "tag_id",
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
  }),
});
