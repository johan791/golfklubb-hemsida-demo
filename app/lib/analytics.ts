import { put, list } from "@vercel/blob";

export interface AnalyticsEvent {
  timestamp: string;
  sessionId: string;
  userMessage: string;
  category: string;
  inputTokens: number;
  outputTokens: number;
}

const BLOB_PATH = "analytics/events.json";

async function readEvents(): Promise<AnalyticsEvent[]> {
  try {
    const { blobs } = await list({ prefix: "analytics/" });
    const blob = blobs.find((b) => b.pathname === BLOB_PATH);
    if (!blob) return [];
    const res = await fetch(blob.url);
    if (!res.ok) return [];
    return (await res.json()) as AnalyticsEvent[];
  } catch {
    return [];
  }
}

export async function logAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const events = await readEvents();
  events.push(event);
  await put(BLOB_PATH, JSON.stringify(events), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export interface AggregatedStats {
  totalConversations: number;
  todayConversations: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  estimatedCost: number;
  messagesPerDay: { date: string; count: number }[];
  topCategories: { category: string; count: number }[];
  peakHours: { hour: number; count: number }[];
  recentConversations: {
    timestamp: string;
    userMessage: string;
    category: string;
  }[];
}

export async function getAggregatedStats(): Promise<AggregatedStats> {
  const events = await readEvents();

  const today = new Date().toISOString().slice(0, 10);
  const todayEvents = events.filter((e) => e.timestamp.slice(0, 10) === today);

  const uniqueSessions = new Set(events.map((e) => e.sessionId));

  const totalInputTokens = events.reduce((s, e) => s + e.inputTokens, 0);
  const totalOutputTokens = events.reduce((s, e) => s + e.outputTokens, 0);

  const estimatedCost =
    (totalInputTokens / 1_000_000) * 0.8 +
    (totalOutputTokens / 1_000_000) * 4;

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const dayCountMap = new Map<string, number>();
  for (const e of events) {
    const d = e.timestamp.slice(0, 10);
    if (new Date(d) >= thirtyDaysAgo) {
      dayCountMap.set(d, (dayCountMap.get(d) || 0) + 1);
    }
  }
  const messagesPerDay = Array.from(dayCountMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const catMap = new Map<string, number>();
  for (const e of events) {
    catMap.set(e.category, (catMap.get(e.category) || 0) + 1);
  }
  const topCategories = Array.from(catMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);

  const hourMap = new Map<number, number>();
  for (let h = 0; h < 24; h++) hourMap.set(h, 0);
  for (const e of events) {
    const h = new Date(e.timestamp).getHours();
    hourMap.set(h, (hourMap.get(h) || 0) + 1);
  }
  const peakHours = Array.from(hourMap.entries())
    .map(([hour, count]) => ({ hour, count }))
    .sort((a, b) => a.hour - b.hour);

  const recentConversations = events
    .slice(-20)
    .reverse()
    .map((e) => ({
      timestamp: e.timestamp,
      userMessage: e.userMessage.slice(0, 120),
      category: e.category,
    }));

  return {
    totalConversations: uniqueSessions.size,
    todayConversations: new Set(todayEvents.map((e) => e.sessionId)).size,
    totalInputTokens,
    totalOutputTokens,
    estimatedCost,
    messagesPerDay,
    topCategories,
    peakHours,
    recentConversations,
  };
}
