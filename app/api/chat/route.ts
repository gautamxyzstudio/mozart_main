import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const SYSTEM_PROMPT = `You are Amozart's AI Support Assistant — a helpful, friendly, and knowledgeable assistant for the Amozart music distribution platform.

You help music artists and creators with:
- Music catalog management and distribution
- Royalty payments and earnings tracking
- YouTube Content ID and monetization
- Spotify, Apple Music, and other DSP distribution
- Release scheduling, cover art requirements, ISRC/UPC codes, metadata edits, and takedowns

Guidelines:
- Keep responses concise, clear, and helpful (2-4 sentences max unless detailed explanation needed)
- Be friendly and encouraging to artists
- LANGUAGE MANDATE: Respond in English by default. ONLY respond in Hindi (or Hinglish) if the user writes or asks in Hindi/Hinglish.
- Always provide natural, intelligent, real AI answers to the user's specific questions.
- DO NOT output any <think> tags or internal thinking process. Respond ONLY with the final response text directly.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Groq API Key is not configured in .env.local" },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });

    // Build conversation messages for Groq LLM
    const messages: Groq.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(history)) {
      const recentHistory = history.slice(-10);
      for (const msg of recentHistory) {
        if (msg.sender === "user") {
          messages.push({ role: "user", content: msg.text });
        } else if (msg.sender === "ai") {
          messages.push({ role: "assistant", content: msg.text });
        }
      }
    }

    messages.push({ role: "user", content: message });

    // Priority list of active models on Groq
    const models = [
      "qwen/qwen3.6-27b",
      "groq/compound",
      "openai/gpt-oss-120b",
      "groq/compound-mini",
      "qwen/qwen3.8-27b",
      "llama-3.3-70b-versatile",
    ];

    let reply: string | null | undefined = null;
    let lastError: any = null;

    for (const model of models) {
      try {
        const completion = await groq.chat.completions.create({
          model,
          messages,
          max_tokens: 512,
          temperature: 0.7,
        });

        reply = completion.choices[0]?.message?.content;
        if (reply) {
          // Remove internal reasoning/thinking blocks from models like Qwen/DeepSeek
          reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
          if (reply) break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Groq model ${model} failed, trying next model...`);
      }
    }

    if (!reply) {
      console.error("Groq API Error:", lastError);
      return NextResponse.json(
        { error: lastError?.message || "AI failed to generate a response." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to get response from AI." },
      { status: 500 }
    );
  }
}
