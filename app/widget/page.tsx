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
    '<li>$1</li>'
  );
  html = html.replace(
    /(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/g,
    '<ul class="widget-list">$1</ul>'
  );
  return html;
}

const QUICK_QUESTIONS = [
  "Vad kostar medlemskap?",
  "Hur bokar jag starttid?",
  "Har ni golflektioner?",
  "Berätta om juniorgolf",
];

export default function WidgetPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionIdRef = useRef(crypto.randomUUID());

  useEffect(() => {
    document.body.style.background = "#f5f0e8";
    document.body.style.color = "#1a3a2a";
    document.body.className = "";
    return () => {
      document.body.style.background = "";
      document.body.style.color = "";
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
        body: JSON.stringify({ messages: updated, sessionId: sessionIdRef.current }),
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
      <div className="w-container">
        <div className="w-header">
          <div className="w-header-badge">LJ</div>
          <div className="w-header-info">
            <div className="w-header-title">Ljunghusens Golfklubb</div>
            <div className="w-header-subtitle">
              {loading ? "Skriver..." : "Vi svarar direkt"}
            </div>
          </div>
        </div>

        <div className="w-messages">
          {messages.length === 0 && (
            <div className="w-welcome">
              <div className="w-welcome-badge">LJ</div>
              <p className="w-welcome-title">Hur kan vi hjälpa dig?</p>
              <div className="w-quick-questions">
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => send(q)} className="w-quick-btn">
                    <span className="w-quick-icon">&#9679;</span>
                    {q}
                    <span className="w-quick-arrow">&#8250;</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`w-msg ${msg.role === "user" ? "w-msg-user" : "w-msg-bot"}`}>
              {msg.role === "assistant" && <div className="w-msg-avatar">LJ</div>}
              <div className={`w-msg-bubble ${msg.role === "user" ? "w-msg-bubble-user" : "w-msg-bubble-bot"}`}>
                {msg.role === "assistant" ? (
                  <div dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.content) }} />
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="w-msg w-msg-bot">
              <div className="w-msg-avatar">LJ</div>
              <div className="w-msg-bubble w-msg-bubble-bot">
                <div className="w-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="w-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Skriv din fråga..."
            rows={1}
            className="w-input"
          />
          <button
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            className="w-send-btn"
            aria-label="Skicka"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        <div className="w-footer">Drivs av AI &mdash; svar kan innehålla fel</div>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .w-container {
          display: flex; flex-direction: column; height: 100vh; width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px; color: #1a3a2a; background: #f5f0e8; overflow: hidden;
        }

        .w-header {
          display: flex; align-items: center; gap: 10px; padding: 12px 16px;
          background: #1a3a2a; color: #f5f0e8; flex-shrink: 0;
        }
        .w-header-badge {
          width: 32px; height: 32px; border-radius: 50%; background: #c9a84c;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 11px; color: #1a3a2a;
        }
        .w-header-title { font-weight: 600; font-size: 14px; }
        .w-header-subtitle { font-size: 11px; opacity: 0.7; }
        .w-header-info { flex: 1; }

        .w-messages { flex: 1; overflow-y: auto; padding: 16px; background: #f5f0e8; }

        .w-welcome { padding: 16px 4px; }
        .w-welcome-badge {
          width: 48px; height: 48px; border-radius: 50%; background: #1a3a2a;
          color: #c9a84c; display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 16px; margin-bottom: 16px;
        }
        .w-welcome-title { font-size: 20px; font-weight: 700; color: #1a3a2a; margin-bottom: 20px; }

        .w-quick-questions { display: flex; flex-direction: column; gap: 8px; }
        .w-quick-btn {
          display: flex; align-items: center; gap: 10px; padding: 14px 16px;
          border: none; border-radius: 12px; background: #e8dfd0; color: #1a3a2a;
          font-size: 14px; cursor: pointer; transition: all 0.15s; text-align: left; font-family: inherit;
        }
        .w-quick-btn:hover { background: #ddd3c0; }
        .w-quick-icon { font-size: 6px; opacity: 0.4; }
        .w-quick-arrow { margin-left: auto; font-size: 18px; opacity: 0.4; }

        .w-msg { display: flex; gap: 8px; margin-bottom: 12px; align-items: flex-end; }
        .w-msg-user { justify-content: flex-end; }
        .w-msg-avatar {
          width: 26px; height: 26px; flex-shrink: 0; border-radius: 50%;
          background: #1a3a2a; color: #c9a84c; display: flex; align-items: center;
          justify-content: center; font-size: 8px; font-weight: 700;
        }
        .w-msg-bubble {
          max-width: 82%; padding: 10px 14px; border-radius: 16px; font-size: 13px; line-height: 1.55;
        }
        .w-msg-bubble-user {
          background: #1a3a2a; color: #f5f0e8; border-bottom-right-radius: 4px;
        }
        .w-msg-bubble-bot {
          background: #e8dfd0; color: #1a3a2a; border-bottom-left-radius: 4px;
        }
        .w-msg-bubble-bot strong { font-weight: 600; }

        .widget-list { margin: 4px 0; padding-left: 18px; }
        .widget-list li { margin-bottom: 2px; list-style: disc; }

        .w-typing { display: flex; gap: 4px; padding: 4px 0; }
        .w-typing span {
          width: 6px; height: 6px; background: #8b9a7a; border-radius: 50%;
          animation: wtyping 1.2s ease-in-out infinite;
        }
        .w-typing span:nth-child(2) { animation-delay: 0.15s; }
        .w-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes wtyping {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }

        .w-input-area {
          display: flex; align-items: flex-end; gap: 8px; padding: 10px 12px;
          border-top: 1px solid #e8dfd0; background: #f5f0e8; flex-shrink: 0;
        }
        .w-input {
          flex: 1; border: 1px solid #d0c7b4; border-radius: 20px; padding: 9px 16px;
          font-size: 13px; resize: none; outline: none; font-family: inherit;
          line-height: 1.4; background: #fff; color: #1a3a2a;
        }
        .w-input::placeholder { color: #8b9a7a; }
        .w-input:focus { border-color: #2d5a3f; }

        .w-send-btn {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: #1a3a2a; color: #f5f0e8; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.15s;
        }
        .w-send-btn:hover { background: #2d5a3f; }
        .w-send-btn:disabled { background: #d0c7b4; cursor: not-allowed; }

        .w-footer {
          text-align: center; padding: 6px; font-size: 10px; color: #8b9a7a;
          background: #f5f0e8; border-top: 1px solid #e8dfd0; flex-shrink: 0;
        }
      `}</style>
    </>
  );
}
