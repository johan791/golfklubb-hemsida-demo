import { readFileSync } from "fs";
import { join } from "path";

let cached: string | null = null;

export function loadChatbotPrompt(): string {
  if (cached) return cached;

  const knowledgeDir = join(process.cwd(), "knowledge");
  const chatbotDir = join(knowledgeDir, "chatbot");

  const template = readFileSync(join(chatbotDir, "system_prompt.md"), "utf-8");
  const examples = JSON.parse(readFileSync(join(chatbotDir, "examples.json"), "utf-8"));
  const rules = JSON.parse(readFileSync(join(chatbotDir, "rules.json"), "utf-8"));
  const prices = JSON.parse(readFileSync(join(knowledgeDir, "prices.json"), "utf-8"));
  const routines = JSON.parse(readFileSync(join(knowledgeDir, "routines.json"), "utf-8"));

  let examplesText = "";
  for (let i = 0; i < examples.length; i++) {
    const ex = examples[i];
    examplesText += `\n### Exempel ${i + 1}: ${ex.scenario}\n`;
    examplesText += `**Kategori:** ${ex.category}\n`;
    if (ex.customer_message) {
      examplesText += `**Besökarens fråga:**\n${ex.customer_message}\n\n`;
    }
    examplesText += `**Svar:**\n${ex.staff_response}\n---\n`;
  }

  const rulesText = rules
    .map(
      (r: { trigger: string; action: string; upsell?: string; reason: string }, i: number) => {
        let text = `${i + 1}. **${r.trigger}:** ${r.action}`;
        if (r.upsell) text += `\n   _Upsell: ${r.upsell}_`;
        text += `\n   _Varför: ${r.reason}_`;
        return text;
      }
    )
    .join("\n\n");

  cached = template
    .replace("{{EXAMPLES}}", examplesText)
    .replace("{{PRICES}}", JSON.stringify(prices, null, 2))
    .replace("{{ROUTINES}}", JSON.stringify(routines, null, 2))
    .replace("{{RULES}}", rulesText);

  return cached;
}

export function clearChatbotPromptCache(): void {
  cached = null;
}
