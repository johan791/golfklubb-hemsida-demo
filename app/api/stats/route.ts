import { getAggregatedStats } from "@/app/lib/analytics";

export async function GET() {
  try {
    const stats = await getAggregatedStats();
    return Response.json(stats);
  } catch (error) {
    console.error("Stats error:", error);
    return Response.json({ error: "Could not fetch stats" }, { status: 500 });
  }
}
