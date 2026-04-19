import { chatResponse, ChatMessage } from "@/app/lib/ai/chatbot";
import { logAnalyticsEvent } from "@/app/lib/analytics";

export async function POST(request: Request) {
  try {
    const { messages, sessionId } = (await request.json()) as {
      messages: ChatMessage[];
      sessionId?: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Messages required" }, { status: 400 });
    }

    const result = await chatResponse(messages);

    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    logAnalyticsEvent({
      timestamp: new Date().toISOString(),
      sessionId: sessionId || crypto.randomUUID(),
      userMessage: lastUserMessage?.content || "",
      category: result.category,
      inputTokens: result.inputTokens,
      outputTokens: result.outputTokens,
    }).catch((err) => console.error("Analytics log error:", err));

    return Response.json({
      reply: result.reply,
      category: result.category,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Något gick fel. Försök igen." },
      { status: 500 }
    );
  }
}
