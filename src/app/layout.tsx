import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pieter Tanoto — Full Stack Developer",
  description:
    "Personal portfolio of Pieter Tanoto, a Full Stack Developer & Software Engineer specializing in modern web technologies.",
  keywords: ["Pieter Tanoto", "Full Stack Developer", "Software Engineer", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Pieter Tanoto" }],
  openGraph: {
    title: "Pieter Tanoto — Full Stack Developer",
    description:
      "Personal portfolio of Pieter Tanoto, a Full Stack Developer & Software Engineer.",
    url: "https://pietertanoto.vercel.app",
    siteName: "Pieter Tanoto Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pieter Tanoto — Full Stack Developer",
    description: "Personal portfolio of Pieter Tanoto, a Full Stack Developer & Software Engineer.",
    creator: "@pietertanoto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
