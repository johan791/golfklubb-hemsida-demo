import { cookies } from "next/headers";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";

const client = new Anthropic();

interface FileAttachment {
  name: string;
  type: string;
  data: string; // base64
}

interface AdminChatRequest {
  message: string;
  files?: FileAttachment[];
  confirmUpdate?: {
    file: string;
    content: string;
  };
}

function readKnowledgeFile(filename: string): string {
  const knowledgeDir = join(process.cwd(), "knowledge");
  const path = filename.includes("/")
    ? join(knowledgeDir, filename)
    : join(knowledgeDir, filename);
  return readFileSync(path, "utf-8");
}

function getKnowledgeFiles(): Record<string, string> {
  return {
    "prices.json": readKnowledgeFile("prices.json"),
    "routines.json": readKnowledgeFile("routines.json"),
    "chatbot/rules.json": readKnowledgeFile("chatbot/rules.json"),
    "chatbot/examples.json": readKnowledgeFile("chatbot/examples.json"),
    "chatbot/system_prompt.md": readKnowledgeFile("chatbot/system_prompt.md"),
  };
}

async function commitToGitHub(
  filePath: string,
  content: string,
  commitMessage: string
): Promise<{ success: boolean; error?: string }> {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "johan791/golfklubb-hemsida-demo";

  if (!token) {
    return { success: false, error: "GITHUB_TOKEN saknas i miljövariabler" };
  }

  try {
    const getRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" } }
    );

    let sha: string | undefined;
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    const putRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: commitMessage,
          content: Buffer.from(content).toString("base64"),
          sha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      return { success: false, error: `GitHub API: ${putRes.status} ${err}` };
    }

    return { success: true };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

const ADMIN_SYSTEM_PROMPT = `Du är en administrationsassistent för Ljunghusens Golfklubbs hemsida.

## DIN UPPGIFT
Hjälp administratören att uppdatera hemsidans innehåll och chatbotens kunskapsbas.
Du kan läsa och modifiera följande filer i kunskapsbasen:
- prices.json — priser (greenfee, medlemskap, academy, golfbil, etc.)
- routines.json — kontaktinfo, personal, öppettider, regler, bokningsregler, etc.
- chatbot/rules.json — beteenderegler för chatboten
- chatbot/examples.json — exempelsvar för chatboten

## HUR DU SVARAR
1. Bekräfta vad du förstått att administratören vill ändra
2. Visa EXAKT vad som ändras (före → efter)
3. Ge den uppdaterade filen som ett JSON-block markerat med filnamnet

## VIKTIGT
- Ändra BARA det som efterfrågas, behåll allt annat oförändrat
- Validera att JSON är korrekt
- Om en fil laddas upp (PDF, bild), extrahera relevant information
- Svara på svenska

## FORMAT FÖR ÄNDRINGAR
När du föreslår en ändring, inkludera den uppdaterade filen i ett kodblock:

\`\`\`json:FILNAMN
{ ... hela den uppdaterade filen ... }
\`\`\`

Exempel: \`\`\`json:prices.json för att uppdatera prisfilen.

## NUVARANDE KUNSKAPSBAS
`;

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (session?.value !== "authenticated") {
    return Response.json({ error: "Ej inloggad" }, { status: 401 });
  }

  const body = (await request.json()) as AdminChatRequest;

  if (body.confirmUpdate) {
    const result = await commitToGitHub(
      `knowledge/${body.confirmUpdate.file}`,
      body.confirmUpdate.content,
      `Uppdatera ${body.confirmUpdate.file} via admin-chat`
    );

    if (result.success) {
      return Response.json({
        reply: `Klart! \`${body.confirmUpdate.file}\` har uppdaterats och pushat till GitHub. Vercel deployar automatiskt — ändringen är live inom ~30 sekunder.`,
        updated: true,
      });
    } else {
      return Response.json({
        reply: `Kunde inte uppdatera filen: ${result.error}`,
        updated: false,
      });
    }
  }

  const knowledgeFiles = getKnowledgeFiles();
  const knowledgeContext = Object.entries(knowledgeFiles)
    .map(([name, content]) => `### ${name}\n\`\`\`json\n${content}\n\`\`\``)
    .join("\n\n");

  const systemPrompt = ADMIN_SYSTEM_PROMPT + knowledgeContext;

  const userContent: Anthropic.MessageCreateParams["messages"][0]["content"] = [];

  if (body.files && body.files.length > 0) {
    for (const file of body.files) {
      if (file.type.startsWith("image/")) {
        userContent.push({
          type: "image",
          source: {
            type: "base64",
            media_type: file.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp",
            data: file.data,
          },
        });
        userContent.push({
          type: "text",
          text: `[Bifogad bild: ${file.name}]`,
        });
      } else if (file.type === "application/pdf") {
        userContent.push({
          type: "document",
          source: {
            type: "base64",
            media_type: "application/pdf",
            data: file.data,
          },
        });
        userContent.push({
          type: "text",
          text: `[Bifogad PDF: ${file.name}]`,
        });
      } else {
        const textContent = Buffer.from(file.data, "base64").toString("utf-8");
        userContent.push({
          type: "text",
          text: `[Bifogad fil: ${file.name}]\n${textContent}`,
        });
      }
    }
  }

  userContent.push({ type: "text", text: body.message });

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6-20250514",
      max_tokens: 4096,
      temperature: 0.2,
      system: systemPrompt,
      messages: [{ role: "user", content: userContent }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    const fileUpdates: { file: string; content: string }[] = [];
    const codeBlockRegex = /```json:([^\n]+)\n([\s\S]*?)```/g;
    let match;
    while ((match = codeBlockRegex.exec(text)) !== null) {
      const fileName = match[1].trim();
      const content = match[2].trim();
      try {
        JSON.parse(content);
        fileUpdates.push({ file: fileName, content });
      } catch {
        // invalid JSON, skip
      }
    }

    return Response.json({
      reply: text,
      fileUpdates,
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
    });
  } catch (error) {
    console.error("Admin chat error:", error);
    return Response.json(
      { error: "AI-fel. Försök igen." },
      { status: 500 }
    );
  }
}
