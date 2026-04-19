"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function formatMarkdown(text: string) {
  let html = text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
  html = html.replace(
    /(?:^|<br>)[•\-]\s(.+?)(?=<br>[•\-]|<br><br>|$)/g,
    "<li>$1</li>"
  );
  html = html.replace(
    /(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/g,
    '<ul style="margin:4px 0;padding-left:18px;list-style:disc">$1</ul>'
  );
  return html;
}

const QUICK_QUESTIONS = [
  "Vad kostar greenfee?",
  "Hur bokar jag starttid?",
  "Berätta om medlemskap",
  "Har ni golflektioner?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionIdRef = useRef("");

  useEffect(() => {
    sessionIdRef.current = crypto.randomUUID();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated,
          sessionId: sessionIdRef.current,
        }),
      });
      const data = await res.json();
      setMessages([
        ...updated,
        { role: "assistant", content: data.reply || data.error || "Fel" },
      ]);
    } catch {
      setMessages([
        ...updated,
        { role: "assistant", content: "Kunde inte nå servern. Försök igen." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[var(--color-forest)] text-white shadow-lg hover:bg-[var(--color-forest-light)] transition-all hover:scale-105 flex items-center justify-center"
        aria-label={open ? "Stäng chat" : "Öppna chat"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
        {!open && messages.length === 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-gold)] rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[380px] max-w-[calc(100vw-40px)] h-[520px] max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[var(--color-forest)] text-white px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)] flex items-center justify-center font-bold text-xs text-[var(--color-forest)]">
              LJ
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Ljunghusens GK</div>
              <div className="text-[11px] text-white/60">
                {loading ? "Skriver..." : "Fråga oss vad som helst"}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Stäng"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-[var(--color-sand)]">
            {messages.length === 0 && (
              <div className="py-4">
                <p className="text-sm font-semibold text-[var(--color-forest)] mb-3">
                  Hur kan vi hjälpa dig?
                </p>
                <div className="space-y-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full text-left px-3 py-2.5 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50 border border-gray-100 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 mb-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-[var(--color-gold)] text-[8px] font-bold shrink-0 mt-1">
                    LJ
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--color-forest)] text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatMarkdown(msg.content),
                      }}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-[var(--color-gold)] text-[8px] font-bold shrink-0 mt-1">
                  LJ
                </div>
                <div className="bg-white border border-gray-100 rounded-xl rounded-bl-sm px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white px-3 py-2 flex items-end gap-2 shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Skriv din fråga..."
              rows={1}
              className="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-forest-light)] transition-colors"
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              className="w-8 h-8 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center shrink-0 disabled:bg-gray-300 hover:bg-[var(--color-forest-light)] transition-colors"
              aria-label="Skicka"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <div className="text-center text-[10px] text-gray-400 py-1 bg-white border-t border-gray-100">
            Drivs av AI — svar kan innehålla fel
          </div>
        </div>
      )}
    </>
  );
}
