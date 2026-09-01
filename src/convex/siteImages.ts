import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("siteImages").collect();
  },
});

export const getBySlot = query({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("siteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();
    return results[0] ?? null;
  },
});

export const upload = mutation({
  args: {
    slot: v.string(),
    alt: v.string(),
    category: v.string(),
    data: v.string(),
    mimeType: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const existing = await ctx.db
      .query("siteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();

    for (const doc of existing) {
      await ctx.db.delete(doc._id);
    }

    return await ctx.db.insert("siteImages", {
      slot: args.slot,
      alt: args.alt,
      category: args.category,
      data: args.data,
      mimeType: args.mimeType,
      order: args.order,
    });
  },
});

export const remove = mutation({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const existing = await ctx.db
      .query("siteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();

    for (const doc of existing) {
      await ctx.db.delete(doc._id);
    }
  },
});

export const bulkUpload = mutation({
  args: {
    images: v.array(
      v.object({
        slot: v.string(),
        alt: v.string(),
        category: v.string(),
        data: v.string(),
        mimeType: v.string(),
        order: v.number(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    for (const img of args.images) {
      const existing = await ctx.db
        .query("siteImages")
        .withIndex("by_slot", (q) => q.eq("slot", img.slot))
        .collect();
      for (const doc of existing) {
        await ctx.db.delete(doc._id);
      }
      await ctx.db.insert("siteImages", img);
    }
  },
});
