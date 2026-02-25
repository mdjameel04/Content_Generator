import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY!,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama-3.1-8b-instant",
  });

  return NextResponse.json({
    result: completion.choices[0]?.message?.content,
  });
}