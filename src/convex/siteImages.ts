import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query, type MutationCtx } from "./_generated/server";

async function deleteSlot(ctx: MutationCtx, slot: string) {
  const existing = await ctx.db
    .query("siteImages")
    .withIndex("by_slot", (q) => q.eq("slot", slot))
    .collect();

  for (const doc of existing) {
    if (doc.storageId) {
      await ctx.storage.delete(doc.storageId);
    }
    await ctx.db.delete(doc._id);
  }
}

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveSlot = mutation({
  args: {
    slot: v.string(),
    alt: v.string(),
    category: v.string(),
    order: v.number(),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Replace any previous image for this slot (including its storage file).
    await deleteSlot(ctx, args.slot);

    return await ctx.db.insert("siteImages", {
      slot: args.slot,
      alt: args.alt,
      category: args.category,
      order: args.order,
      storageId: args.storageId,
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const docs = await ctx.db.query("siteImages").collect();
    return await Promise.all(
      docs.map(async (doc) => ({
        ...doc,
        url: doc.storageId ? await ctx.storage.getUrl(doc.storageId) : null,
      })),
    );
  },
});

export const getBySlot = query({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("siteImages")
      .withIndex("by_slot", (q) => q.eq("slot", args.slot))
      .collect();

    const doc = results[0] ?? null;
    if (!doc) return null;

    return {
      ...doc,
      url: doc.storageId ? await ctx.storage.getUrl(doc.storageId) : null,
    };
  },
});

export const remove = mutation({
  args: { slot: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");
    await deleteSlot(ctx, args.slot);
  },
});

export const clearAll = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const all = await ctx.db.query("siteImages").collect();
    for (const doc of all) {
      if (doc.storageId) {
        await ctx.storage.delete(doc.storageId);
      }
      await ctx.db.delete(doc._id);
    }
    return all.length;
  },
});