// Temporary debug script — queries the live Convex deployment to inspect
// siteImages records. Run: bun run scripts/debug-images.ts
import { ConvexClient } from "convex/browser";
import { api } from "../src/convex/_generated/api";

const url =
  process.env.CONVEX_URL ?? "https://harmless-fennec-357.convex.cloud";
const client = new ConvexClient(url);

for (const slot of ["hero", "intro", "dish-paella", "story"]) {
  try {
    const doc = await client.query(api.siteImages.getBySlot, { slot });
    if (doc?.url) {
      console.log(`${slot}: ${doc.url}`);
    } else {
      console.log(`${slot}: NO URL`);
    }
  } catch (e) {
    console.error(
      `${slot} THREW:`,
      e instanceof Error ? e.message : String(e),
    );
  }
}

await client.close();
console.log("\nDone.");