import { NextResponse } from "next/server";

// ── Upgrade ke Gemini (free tier) ─────────────────────────────────────
// Aktifkan dengan mengisi GEMINI_API_KEY di .env.local, lalu ubah
// getBotReply() di src/lib/chat.ts menjadi async dan panggil route ini.
export async function POST(req: Request) {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ reply: null }, { status: 200 });
    }

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Kamu adalah asisten virtual untuk portfolio Pieter Tanoto (backend developer). Jawab singkat, ramah, dalam bahasa Indonesia. Pertanyaan: ${message}`,
                                },
                            ],
                        },
                    ],
                }),
            }
        );
        const data = await res.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
        return NextResponse.json({ reply });
    } catch {
        return NextResponse.json({ reply: null }, { status: 200 });
    }
}