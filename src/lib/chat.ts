// ── Chat service layer ────────────────────────────────────────────────
// Saat ini: rule-based FAQ (gratis, tanpa API key, tanpa rate limit).
//
// UPGRADE KE GEMINI (opsional):
// 1. Route handler sudah disiapkan di src/app/api/chat/route.ts.
// 2. Isi GEMINI_API_KEY di file .env.local (free tier Google AI Studio).
// 3. Ganti getBotReply() di bawah menjadi async dan panggil route tersebut,
//    lalu sesuaikan pemanggilannya di ChatWidget.tsx.

export const SUGGESTIONS = [
    "Siapa Pieter?",
    "Pengalaman kerja",
    "Tech stack",
    "Project apa saja?",
    "Cara kontak",
    "Apakah open to work?",
];

interface Intent {
    keywords: string[];
    reply: string;
}

const INTENTS: Intent[] = [
    {
        keywords: ["halo", "hai", "hi", "hello", "hey", "pagi", "siang", "sore", "malam", "assalamu"],
        reply:
            "Halo! 👋 Senang berkenalan. Tanya apa saja soal Pieter — pengalaman, skill, project, atau cara kontak!",
    },
    {
        keywords: ["siapa", "about", "tentang", "profil", "perkenal"],
        reply:
            "Pieter Tanoto — lulusan Computer Science Universitas Sumatera Utara (S.Kom). Saat ini Backend Developer di Murni Teguh, fokus di backend & mobile development, dan suka menulis kode yang bersih & teruji.",
    },
    {
        keywords: ["pengalaman", "kerja", "experience", "karir", "career", "riwayat"],
        reply:
            "Pengalaman Pieter:\n• Backend Developer @ Murni Teguh (Mei 2026 — sekarang)\n• Web Developer @ STTC (Jul 2025 — Des 2025)\n• AI Developer Intern @ BPJS Ketenagakerjaan (Sep 2024 — Des 2024)\n• Android Developer @ Bangkit Academy (Jan 2024 — Jun 2024)",
    },
    {
        keywords: ["skill", "stack", "teknologi", "tech", "bahasa", "tools", "keahlian"],
        reply:
            "Tech stack utama: Java, Spring Boot, Laravel (PHP), TypeScript, SvelteKit, Next.js, React, Kotlin, PostgreSQL, MySQL, Docker, Git, dan tools seperti Jira, Bitbucket, Postman, Swagger.",
    },
    {
        keywords: ["project", "proyek", "portfolio", "karya", "aplikasi", "app"],
        reply:
            "Beberapa project unggulan: AI Powered POS System, FocusPodo (produktivitas), LaporBang (deteksi jalan rusak), dan RESTful API. Lihat lengkapnya di section Projects! 🚀",
    },
    {
        keywords: ["pendidikan", "kuliah", "universitas", "education", "s.k", "sarjana", "ijazah"],
        reply:
            "S.Kom (Bachelor of Computer Science) dari Universitas Sumatera Utara, 2020 — 2024, fokus software engineering & system design.",
    },
    {
        keywords: ["kontak", "contact", "hubungi", "email", "whatsapp", "wa", "telepon", "linkedin", "github"],
        reply:
            "Bisa hubungi Pieter via:\n• Email: pietertanoto01@email.com\n• WhatsApp: wa.me/6287748215683\n• LinkedIn: linkedin.com/in/pieter-tanoto\n• GitHub: github.com/Piebyter",
    },
    {
        keywords: ["cv", "resume", "curriculum", "download"],
        reply: "Bisa download CV Pieter lewat tombol 'Download CV' di bagian atas halaman. 📄",
    },
    {
        keywords: ["lokasi", "location", "medan", "dimana", "alamat", "tinggal"],
        reply: "Pieter berdomisili di Medan, Sumatera Utara, Indonesia 🇮🇩",
    },
    {
        keywords: ["open", "kerja", "lowongan", "hire", "rekrut", "freelance", "tersedia", "available", "opportunit"],
        reply:
            "Ya! Pieter sedang open to opportunities 💼 — baik full-time maupun freelance. Langsung chat WhatsApp atau email untuk diskusi!",
    },
    {
        keywords: ["sertifikat", "certificate", "sertifikasi", "award", "penghargaan", "prestasi"],
        reply:
            "Pieter punya 24+ sertifikasi dan beberapa penghargaan, termasuk Bangkit Distinction (Top 10%) dan Favorite Winner Fordigi BUMN Hackathon. Lihat di section Awards & Certifications! 🏆",
    },
    {
        keywords: ["terima kasih", "makasih", "thanks", "thank", "thx"],
        reply: "Sama-sama! 😊 Kalau ada pertanyaan lain, jangan ragu tanya lagi ya.",
    },
    {
        keywords: ["bye", "dadah", "sampai jumpa", "selamat tinggal", "daah"],
        reply: "Dadah! 👋 Semoga harimu menyenangkan. Kalau butuh apa-apa, chat lagi saja!",
    },
];

const FALLBACK =
    "Maaf, saya belum paham pertanyaannya 🙏 Coba tanya soal pengalaman, skill, project, atau kontak. Atau langsung hubungi Pieter lewat WhatsApp/email di bawah.";

export function getBotReply(input: string): string {
    const q = input.toLowerCase();
    for (const intent of INTENTS) {
        if (intent.keywords.some((k) => q.includes(k))) {
            return intent.reply;
        }
    }
    return FALLBACK;
}