import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are Amozart's AI Support Assistant — a helpful, friendly, and knowledgeable assistant for the Amozart music distribution platform.

You help music artists and creators with:
- Music catalog management and distribution
- Royalty payments and earnings tracking
- YouTube Content ID and monetization
- Spotify, Apple Music, and other DSP distribution
- Release scheduling and metadata
- ISRC and UPC codes
- Amozart platform account and settings issues
- General music industry questions

Guidelines:
- Keep responses concise, clear, and helpful (2-4 sentences max unless detailed explanation needed)
- Be friendly and encouraging to artists
- If you don't know something specific about Amozart's internal systems, suggest contacting human support
- Always respond in the same language the user writes in (Hindi or English)
- Don't make up specific pricing, dates, or platform-specific data you're unsure about`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build conversation history for context
    const messages: Groq.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    // Add previous conversation history (last 10 messages for context)
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

    // Add current user message
    messages.push({ role: "user", content: message });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Groq API Error:", error);
    
    if (error instanceof Groq.APIError) {
      return NextResponse.json(
        { error: `AI service error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to get AI response. Please try again." },
      { status: 500 }
    );
  }
}
