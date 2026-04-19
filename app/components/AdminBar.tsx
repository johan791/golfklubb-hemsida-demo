"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdminChat from "./AdminChat";

export default function AdminBar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    fetch("/api/admin/check")
      .then((r) => r.json())
      .then((data) => setIsAdmin(data.authenticated))
      .catch(() => {});
  }, []);

  if (!isAdmin) return null;

  return (
    <>
      <div className="bg-amber-400 text-amber-900 px-4 py-1.5 text-xs font-medium flex items-center justify-between z-[60] relative">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          Admin-läge aktivt
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="px-2.5 py-0.5 bg-amber-500 hover:bg-amber-600 text-white rounded transition-colors flex items-center gap-1"
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            {chatOpen ? "Stäng redigering" : "Redigera sida"}
          </button>
          <Link
            href="/admin"
            className="px-2.5 py-0.5 bg-amber-500 hover:bg-amber-600 text-white rounded transition-colors"
          >
            Adminpanel
          </Link>
        </div>
      </div>

      {/* Floating admin chat */}
      {chatOpen && (
        <div className="fixed bottom-5 left-5 z-[70] w-[420px] max-w-[calc(100vw-40px)] h-[560px] max-h-[calc(100vh-80px)] bg-white rounded-2xl shadow-2xl border-2 border-amber-400 flex flex-col overflow-hidden">
          <div className="bg-amber-400 text-amber-900 px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Redigera sidan</div>
              <div className="text-[11px] text-amber-700">
                Kopiera text från sidan och klistra in här
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 hover:bg-amber-500/30 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <AdminChat />
          </div>
        </div>
      )}
    </>
  );
}
