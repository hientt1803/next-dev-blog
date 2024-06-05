import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createCategory = mutation({
  args: { name: v.string() },
  async handler(ctx, args) {
    await ctx.db.insert("categories", {
      name: args.name,
      slug: args.name,
    });

    return { message: "create categories completed" };
  },
});
