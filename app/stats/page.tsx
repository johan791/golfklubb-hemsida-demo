"use client";

import { useState, useEffect } from "react";

interface Stats {
  totalConversations: number;
  todayConversations: number;
  messagesPerDay: { date: string; count: number }[];
  topCategories: { category: string; count: number }[];
  peakHours: { hour: number; count: number }[];
  recentConversations: {
    timestamp: string;
    userMessage: string;
    category: string;
  }[];
}

function SummaryCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
      {sub && <p className="text-gray-500 text-xs mt-1">{sub}</p>}
    </div>
  );
}

function BarChart({ data, labelKey, valueKey }: { data: Record<string, unknown>[]; labelKey: string; valueKey: string }) {
  const max = Math.max(...data.map((d) => d[valueKey] as number), 1);
  return (
    <div className="space-y-1.5">
      {data.map((d, i) => {
        const val = d[valueKey] as number;
        const pct = (val / max) * 100;
        return (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-gray-400 w-20 text-right shrink-0 font-mono text-xs">{String(d[labelKey])}</span>
            <div className="flex-1 flex items-center gap-2">
              <div className="bg-emerald-500 rounded-sm h-5" style={{ width: `${Math.max(pct, 2)}%` }} />
              <span className="text-gray-300 text-xs">{val}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => { if (!r.ok) throw new Error(`${r.status}`); return r.json(); })
      .then((data) => setStats(data))
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400 text-lg">Laddar statistik...</div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-red-400 text-lg">Kunde inte ladda statistik: {error}</div>
      </div>
    );
  }

  const totalMessages = stats.messagesPerDay.reduce((s, d) => s + d.count, 0);
  const dailyData = stats.messagesPerDay.map((d) => ({ date: d.date.slice(5), count: d.count }));
  const hourData = stats.peakHours.map((h) => ({ hour: String(h.hour).padStart(2, "0") + ":00", count: h.count }));

  const categoryBadge = (cat: string) => {
    const colors: Record<string, string> = {
      Medlemskap: "bg-blue-900 text-blue-300",
      Greenfee: "bg-green-900 text-green-300",
      Bokning: "bg-purple-900 text-purple-300",
      Bana: "bg-teal-900 text-teal-300",
      Academy: "bg-yellow-900 text-yellow-300",
      Junior: "bg-pink-900 text-pink-300",
      Senior: "bg-indigo-900 text-indigo-300",
      Golfbil: "bg-amber-900 text-amber-300",
      Restaurang: "bg-orange-900 text-orange-300",
      Kontakt: "bg-cyan-900 text-cyan-300",
      "Tävling": "bg-red-900 text-red-300",
      "Övrigt": "bg-gray-800 text-gray-300",
    };
    return colors[cat] || "bg-gray-800 text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Chatbot-statistik</h1>
            <p className="text-gray-400 text-sm mt-1">Ljunghusens GK — Konversationsanalys</p>
          </div>
          <button
            onClick={() => {
              setLoading(true);
              fetch("/api/stats").then((r) => r.json()).then(setStats).finally(() => setLoading(false));
            }}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-colors"
          >
            Uppdatera
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <SummaryCard label="Konversationer totalt" value={String(stats.totalConversations)} sub={`${totalMessages} meddelanden`} />
          <SummaryCard label="Idag" value={String(stats.todayConversations)} sub="konversationer" />
          <SummaryCard label="Meddelanden totalt" value={totalMessages.toLocaleString("sv-SE")} sub="frågor besvarade" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-4">Meddelanden per dag <span className="text-gray-500 text-sm font-normal">(senaste 30 dagar)</span></h2>
            {dailyData.length === 0 ? <p className="text-gray-500 text-sm">Ingen data ännu.</p> : <BarChart data={dailyData} labelKey="date" valueKey="count" />}
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-4">Populäraste kategorier</h2>
            {stats.topCategories.length === 0 ? <p className="text-gray-500 text-sm">Ingen data ännu.</p> : <BarChart data={stats.topCategories} labelKey="category" valueKey="count" />}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold mb-4">Aktivitet per timme</h2>
          <div className="flex items-end gap-1 h-32">
            {hourData.map((h, i) => {
              const maxCount = Math.max(...stats.peakHours.map((p) => p.count), 1);
              const pct = (h.count / maxCount) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-gray-400">{h.count > 0 ? h.count : ""}</span>
                  <div
                    className="w-full rounded-t-sm transition-all"
                    style={{
                      height: `${Math.max(pct, 2)}%`,
                      backgroundColor: h.count > 0 ? `rgba(16, 185, 129, ${0.3 + (pct / 100) * 0.7})` : "rgba(55, 65, 81, 0.5)",
                    }}
                  />
                  <span className="text-[9px] text-gray-500">{i % 3 === 0 ? h.hour.slice(0, 2) : ""}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-4">Senaste konversationer <span className="text-gray-500 text-sm font-normal">(20 senaste)</span></h2>
          {stats.recentConversations.length === 0 ? (
            <p className="text-gray-500 text-sm">Inga konversationer ännu.</p>
          ) : (
            <div className="space-y-2">
              {stats.recentConversations.map((c, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                  <span className="text-gray-500 text-xs font-mono shrink-0 w-36">
                    {new Date(c.timestamp).toLocaleString("sv-SE", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${categoryBadge(c.category)}`}>{c.category}</span>
                  <span className="text-gray-300 text-sm truncate flex-1">{c.userMessage}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
