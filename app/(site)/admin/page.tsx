"use client";

import { useState, useEffect } from "react";
import AdminChat from "@/app/components/AdminChat";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    fetch("/api/admin/check")
      .then((r) => r.json())
      .then((data) => {
        setAuthenticated(data.authenticated);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggingIn(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (res.ok) {
        setAuthenticated(true);
      } else {
        setError("Fel kod. Försök igen.");
      }
    } catch {
      setError("Kunde inte ansluta.");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setCode("");
  }

  if (checking) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-gray-400 text-sm">Laddar...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[var(--color-forest)] flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-center mb-1">Admin</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Ange din adminkod för att logga in
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Adminkod"
                autoFocus
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-lg tracking-widest outline-none focus:border-[var(--color-forest)] transition-colors mb-3"
              />
              {error && (
                <p className="text-red-500 text-sm text-center mb-3">{error}</p>
              )}
              <button
                type="submit"
                disabled={loggingIn || !code.trim()}
                className="w-full py-3 bg-[var(--color-forest)] text-white rounded-xl font-medium hover:bg-[var(--color-forest-light)] transition-colors disabled:opacity-50"
              >
                {loggingIn ? "Loggar in..." : "Logga in"}
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Demokod tillhandahålls av administratören
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Adminpanel</h1>
          <p className="text-sm text-gray-500 mt-1">
            Hantera hemsidan och chatbotens kunskapsbas
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Logga ut
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Sidor"
          value="20+"
          description="Alla sidor från ljgk.se"
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          }
        />
        <StatCard
          title="Chatbot"
          value="Aktiv"
          description="Claude Haiku 4.5 — svarar på allt"
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          }
        />
        <StatCard
          title="Kunskapsbas"
          value="5 filer"
          description="Priser, rutiner, regler, exempel"
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
          }
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-bold mb-4">Uppdatera via chat</h2>
          <p className="text-sm text-gray-500 mb-4">
            Beskriv vad du vill ändra, eller ladda upp en fil (t.ex. prislista, bild).
            AI:n förstår din instruktion och uppdaterar sidan och chatboten automatiskt.
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden" style={{ height: "520px" }}>
            <AdminChat />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Snabbåtgärder</h2>
          <div className="space-y-3">
            <QuickAction
              title="Uppdatera greenfee-priser"
              description="Ändra priser för alla säsonger"
              example="Höj högsäsongspriset för 18 hål till 1 600 kr"
            />
            <QuickAction
              title="Ändra öppettider"
              description="Uppdatera kansli, shop eller range"
              example="Ändra range-öppettiderna till 06:00–22:00"
            />
            <QuickAction
              title="Uppdatera personal"
              description="Lägg till eller ta bort medarbetare"
              example="Anna Carlsson har slutat, ta bort henne"
            />
            <QuickAction
              title="Ladda upp ny prislista"
              description="Bifoga en PDF eller bild"
              example="Dra och släpp filen i chatten"
            />
            <QuickAction
              title="Ändra medlemspriser"
              description="Uppdatera avgifter och inträdesavgifter"
              example="Aktiv Senior höjs till 13 000 kr/år"
            />
            <QuickAction
              title="Lägg till nyhet eller event"
              description="Informera om kommande händelser"
              example="Lägg till Näset Links 2027, 1–3 okt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-[var(--color-sand)] flex items-center justify-center text-[var(--color-forest)]">
          {icon}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">
          {title}
        </div>
      </div>
      <div className="text-2xl font-bold text-[var(--color-forest)]">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{description}</div>
    </div>
  );
}

function QuickAction({
  title,
  description,
  example,
}: {
  title: string;
  description: string;
  example: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[var(--color-forest-light)] transition-colors">
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-gray-500 mt-0.5">{description}</div>
      <div className="text-xs text-gray-400 mt-1.5 italic">
        Exempel: &ldquo;{example}&rdquo;
      </div>
    </div>
  );
}
