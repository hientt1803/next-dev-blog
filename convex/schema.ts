import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    body: v.string(),
    user: v.id("users"),
  }),
  posts: defineTable({
    slug: v.string(),
    title: v.string(),
    desc: v.string(),
    image: v.optional(v.string()),
    views: v.number(),
  }),
});
