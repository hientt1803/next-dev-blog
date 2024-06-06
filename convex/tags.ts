import { v } from "convex/values";
import { query } from "./_generated/server";

export const getAllTags = query({
  args: {},
  async handler(ctx, args) {
    const tags = await ctx.db.query("tags").collect();
    return tags;
  },
});
