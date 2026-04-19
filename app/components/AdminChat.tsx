"use client";

import { useState, useRef, useEffect } from "react";

interface FileAttachment {
  name: string;
  type: string;
  data: string;
}

interface FileUpdate {
  file: string;
  content: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  files?: { name: string }[];
  fileUpdates?: FileUpdate[];
}

function formatAdminMarkdown(text: string) {
  let html = text;

  // Remove json:filename code blocks from display (they're shown as update cards)
  html = html.replace(/```json:[^\n]+\n[\s\S]*?```/g, "");

  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, '<code style="background:#f1f5f9;padding:1px 4px;border-radius:3px;font-size:12px">$1</code>')
    .replace(/\n/g, "<br>");

  html = html.replace(
    /(?:^|<br>)[•\-]\s(.+?)(?=<br>[•\-]|<br><br>|$)/g,
    "<li>$1</li>"
  );
  html = html.replace(
    /(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/g,
    '<ul style="margin:4px 0;padding-left:18px;list-style:disc">$1</ul>'
  );

  // Clean up extra <br> tags
  html = html.replace(/(<br>){3,}/g, "<br><br>");
  html = html.replace(/^(<br>)+/, "");
  html = html.replace(/(<br>)+$/, "");

  return html;
}

export default function AdminChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<FileAttachment[]>([]);
  const [loading, setLoading] = useState(false);
  const [applying, setApplying] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected) return;

    const newFiles: FileAttachment[] = [];
    for (const file of Array.from(selected)) {
      const data = await fileToBase64(file);
      newFiles.push({ name: file.name, type: file.type, data });
    }
    setFiles((prev) => [...prev, ...newFiles]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    });
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function send() {
    if ((!input.trim() && files.length === 0) || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      files: files.map((f) => ({ name: f.name })),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    const currentFiles = files;
    setInput("");
    setFiles([]);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: currentInput,
          files: currentFiles,
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || data.error || "Fel",
          fileUpdates: data.fileUpdates,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Kunde inte nå servern." },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  async function applyUpdate(update: FileUpdate) {
    setApplying(update.file);
    try {
      const res = await fetch("/api/admin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          confirmUpdate: { file: update.file, content: update.content },
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Kunde inte applicera ändringen." },
      ]);
    } finally {
      setApplying(null);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] flex items-center justify-center mx-auto mb-3">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--color-forest)" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Beskriv vad du vill ändra
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Du kan också bifoga filer (PDF, bilder, textfiler)
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i}>
            <div
              className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}
            >
              {msg.role === "assistant" && (
                <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-1">
                  AI
                </div>
              )}
              <div
                className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[var(--color-forest)] text-white rounded-br-sm"
                    : "bg-gray-50 text-gray-800 border border-gray-100 rounded-bl-sm"
                }`}
              >
                {msg.files && msg.files.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {msg.files.map((f, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded text-[11px]"
                      >
                        <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        {f.name}
                      </span>
                    ))}
                  </div>
                )}
                {msg.role === "assistant" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatAdminMarkdown(msg.content),
                    }}
                  />
                ) : (
                  msg.content
                )}
              </div>
            </div>

            {/* File update buttons */}
            {msg.fileUpdates && msg.fileUpdates.length > 0 && (
              <div className="ml-8 mt-2 space-y-2">
                {msg.fileUpdates.map((update, j) => (
                  <div
                    key={j}
                    className="border border-green-200 bg-green-50 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-green-800">
                          Redo att uppdatera
                        </div>
                        <div className="text-sm font-mono text-green-700">
                          {update.file}
                        </div>
                      </div>
                      <button
                        onClick={() => applyUpdate(update)}
                        disabled={applying !== null}
                        className="px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                      >
                        {applying === update.file
                          ? "Uppdaterar..."
                          : "Applicera"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--color-forest)] flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-1">
              AI
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl rounded-bl-sm px-3 py-2">
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

      {/* File preview */}
      {files.length > 0 && (
        <div className="px-3 pt-2 flex flex-wrap gap-1.5 border-t border-gray-100">
          {files.map((f, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-sand)] rounded-lg text-xs"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              {f.name}
              <button
                onClick={() => removeFile(i)}
                className="ml-0.5 text-gray-400 hover:text-gray-600"
              >
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-gray-200 px-3 py-2 flex items-end gap-2">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.txt,.csv,.json"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-forest)] hover:border-[var(--color-forest-light)] transition-colors shrink-0"
          title="Bifoga fil"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
        </button>
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Beskriv vad du vill ändra..."
          rows={1}
          className="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[var(--color-forest-light)] transition-colors"
        />
        <button
          onClick={send}
          disabled={loading || (!input.trim() && files.length === 0)}
          className="w-8 h-8 rounded-full bg-[var(--color-forest)] text-white flex items-center justify-center shrink-0 disabled:bg-gray-300 hover:bg-[var(--color-forest-light)] transition-colors"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
