import Anthropic from "@anthropic-ai/sdk";
import { loadChatbotPrompt } from "./system-prompt";

const client = new Anthropic();

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const CATEGORY_REGEX = /\n?\[KATEGORI:\s*([^\]]+)\]\s*$/;

const VALID_CATEGORIES = [
  "Medlemskap",
  "Greenfee",
  "Bokning",
  "Bana",
  "Academy",
  "Junior",
  "Senior",
  "Golfbil",
  "Restaurang",
  "Kontakt",
  "Tävling",
  "Övrigt",
] as const;

export type ChatCategory = (typeof VALID_CATEGORIES)[number];

function parseCategory(text: string): {
  reply: string;
  category: ChatCategory;
} {
  const match = text.match(CATEGORY_REGEX);
  if (match) {
    const raw = match[1].trim();
    const category = VALID_CATEGORIES.includes(raw as ChatCategory)
      ? (raw as ChatCategory)
      : "Övrigt";
    return { reply: text.replace(CATEGORY_REGEX, "").trimEnd(), category };
  }
  return { reply: text, category: "Övrigt" };
}

const CATEGORY_INSTRUCTION = `

After your response, on a NEW line, add exactly: [KATEGORI: <category>]
where <category> is one of: ${VALID_CATEGORIES.join(", ")}
Choose the single best matching category for the user's question. This tag will be stripped and is not shown to the user.`;

export async function chatResponse(messages: ChatMessage[]) {
  const systemPrompt = loadChatbotPrompt() + CATEGORY_INSTRUCTION;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    temperature: 0.3,
    system: systemPrompt,
    messages,
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  const { reply, category } = parseCategory(text);

  return {
    reply,
    category,
    inputTokens: response.usage.input_tokens,
    outputTokens: response.usage.output_tokens,
  };
}
